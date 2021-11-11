import { ReservationService } from 'src/services/reservation.service';
import { Chart } from 'chart.js';
import * as chartAnnotation from 'chartjs-plugin-annotation';
import { BehaviorSubject, interval, Subscription, throwError } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { DevicesModalComponent } from 'src/components/modals/devices-modal/devices-modal.component';
import { RpeComponent } from 'src/components/modals/rpe/rpe.component';
import { PRESCRIPTION } from 'src/constants/common';
import {
  ASK_TO_RESET_WATCH, CANCEL, CHAT_JOIN_ROOM, CHAT_LEAVE_ROOM, CONFIRM, CONNECT_BROKE_UP,
  CONNECT_FAILED, CONNECTING, DIFFICULTY, DOCTOR_STOP_EXERCISE, FINISH_RESET, GETTING_DATA,
  HEART_BEAT, NOT_GET_PRESCRIPTION, SCAN, SCAN_FAILED, SELECT_DEVICE2, WAIT_FOR_GETTING_DATA, NOT_RESERVED_TIME
} from 'src/constants/language-key';
import {
  RESPONSE_TYPE_END, RESPONSE_TYPE_ERR, RESPONSE_TYPE_HDA, RESPONSE_TYPE_NDA, RESPONSE_TYPE_SSE,
  RESPONSE_TYPE_STE, RESPONSE_TYPE_STH, RESPONSE_TYPE_STS, RESPONSE_TYPE_THR
} from 'src/constants/watch-ble-command';
import { environment as ENV } from 'src/environments/environment';
import { IEmergencyMessage } from 'src/models/i-emergency-message';
import { IExerciseStepMessage } from 'src/models/i-excercise-step-message';
import { IHrMessage } from 'src/models/ihr-message';
import { IStopSignal } from 'src/models/istop-signal';
import { AlertService } from 'src/services/alert.service';
import { AuthService } from 'src/services/auth.service';
import { BleService } from 'src/services/ble.service';
import { ChatService } from 'src/services/chat.service';
import { CommonService } from 'src/services/common.service';
import { ExerciseService, IRpes } from 'src/services/exercise.service';
import { LanguageService } from 'src/services/language.service';
import { LoadingService } from 'src/services/loading.service';
import { LoggerService } from 'src/services/logger.service';
import { IPrescription } from 'src/services/prescription.service';
import { StorageService } from 'src/services/storage.service';
import { WatchCommandService } from 'src/services/watch-command.service';

import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-real-time-exercise',
  templateUrl: './real-time-exercise.page.html',
  styleUrls: ['./real-time-exercise.page.scss'],
})
export class RealTimeExercisePage implements OnInit {
  // chart properties
  chart: Chart;

  // template display properties
  step: number;
  isExercising$ = new BehaviorSubject<boolean>(false);
  rpeMsg: IEmergencyMessage;
  currentExercisingSeconds = 0;
  totalExerciseTime: number;

  // chat hub properties
  reserveId: number;
  channelId: string;
  isChatConnected: boolean;

  prescription: IPrescription;
  heartRate: number;
  rpesSecondsArray: IRpes[] = [];
  callBATTimes = 0;
  exerciseData = [];
  tempExerciseData = [];
  exerciseDateTime: Date;
  hrMixMax: { min: string; max: string };
  callREQTimes = 0;

  // status
  isExerciseFinished = false; // 운동 끝내 여부 판단
  isRealtimeConnect: boolean; // connect with bluetooth in realtime-exercise page
  isExerciseFinishedAndRestart = false;
  isReconnect = false; // 운동 중에서 연결 끊기고 다시 연결인지 판단

  // subscription
  connectSubscription: Subscription = null;
  sub: Subscription;
  countdownSubscription: Subscription;

  // dummy
  interval: any;
  timer: any;

  constructor(
    private ble: BleService,
    private zone: NgZone,
    private alertSvc: AlertService,
    private loggerSvc: LoggerService,
    private chatSvc: ChatService,
    private commonSvc: CommonService,
    private storageSvc: StorageService,
    private authSvc: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private exerciseSvc: ExerciseService,
    private modalController: ModalController,
    private watchCommandSvc: WatchCommandService,
    private loadingSvc: LoadingService,
    private languageSvc: LanguageService,
    private reservationSvc: ReservationService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (!!this.router.getCurrentNavigation().extras.state) {
        this.reserveId = this.router.getCurrentNavigation().extras.state.reserveId;
        this.channelId = this.router.getCurrentNavigation().extras.state.channelId;

        this.loggerSvc.log('channelId ? ', this.channelId);
        this.loggerSvc.log('reserveId ? ', this.reserveId);
      }
    });
  }

  async ngOnInit() {
    this.sub = new Subscription();
    if (ENV.useDummyData) {
      await this.getLastPrescription();
      return;
    }
    const isConnected = await this.ble.isConnected();
    if (isConnected) {
      await this.getLastPrescription();
    } else {
      await this.scanBLE();
    }
  }

  ionViewWillEnter() {
    this.sub.add(
      this.ble.isConnecting$.subscribe(res => {
        this.zone.run(() => {
          if (!res) {
            console.warn('===== realtime exercise connect broke up');
            this.isExercising$.next(false);
          }
        });
      })
    );
    this.setChattingRoomSubscription();
    this.setSubscriptions();
  }

  async getLastPrescription() {
    this.prescription = await this.storageSvc.get(PRESCRIPTION);
    this.loggerSvc.log('prescription', this.prescription);
    if (!this.prescription) {
      await this.alertSvc.presentAlert(
        await this.languageSvc.getI18nLang(NOT_GET_PRESCRIPTION));
      this.router.navigate(['/menu']);
    } else {
      if (!document.getElementById('hrChart')) {
        await this.createCanvas();
      }
      this.totalExerciseTime = this.prescription.steps
        .map((step) => step.minute)
        .reduce((accr, curr) => accr + curr);

      if (this.isExerciseFinishedAndRestart) {
        await this.setExerciseInfoData();
      }
    }
  }

  setSubscriptions() {
    // BAT
    this.sub.add(
      this.ble.BATService$.subscribe({
        next: async (obs) => {
          const batPattern = new RegExp(/^BAT#[0-9]{1,3}@$/g);
          if (batPattern.test(obs)) {
            this.callBATTimes = 0;
            await this.loadingSvc.dismiss();
            if (this.isRealtimeConnect || this.isExerciseFinished) {
              await this.watchCommandSvc.sendRND();
            } else {
              await this.watchCommandSvc.sendSTS();
            }
          } else {
            if (this.callBATTimes >= 10) {
              await this.loadingSvc.dismiss();
              this.isRealtimeConnect = false;
              await this.ble.disconnect();
              await this.presentScanFailedAlert();
            } else {
              this.callBATTimes++;
              await this.watchCommandSvc.sendBAT();
            }
          }
        },
        error: async (err) => {
          this.loggerSvc.error('BAT error', err);
        },
        complete: () => {
          this.loggerSvc.info('BAT complete');
        },
      })
    );

    // STS
    this.sub.add(
      this.ble.STSService$.subscribe({
        next: async (obs) => {
          if (obs === RESPONSE_TYPE_STS) {
            await this.watchCommandSvc.sendSTH(this.prescription);
          }
        },
        error: (err) => {
          this.loggerSvc.error('STS error', err);
        },
        complete: () => {
          this.loggerSvc.info('STS complete');
        },
      })
    );

    // STH
    this.sub.add(
      this.ble.STHService$.subscribe({
        next: async (obs) => {
          if (obs === RESPONSE_TYPE_STH) {
            await this.watchCommandSvc.sendSTE(this.prescription);
          }
        },
        error: (err) => {
          this.loggerSvc.error('STH error', err);
        },
        complete: () => {
          this.loggerSvc.info('STH complete');
        },
      })
    );

    // STE
    this.sub.add(
      this.ble.STEService$.subscribe({
        next: async (obs) => {
          if (obs.includes(RESPONSE_TYPE_STE)) {
            this.isExercising$.next(true);
          }
        },
        error: (err) => {
          this.loggerSvc.error('STE error', err);
        },
        complete: () => {
          this.loggerSvc.info('STE complete');
        },
      })
    );

    // SSE
    this.sub.add(
      this.ble.SSEResponse$.subscribe({
        next: (obs) => {
          if (obs === RESPONSE_TYPE_SSE) {
            this.ble.commandTypeSubject.next(RESPONSE_TYPE_THR);
          }
        },
        error: (e) => { },
        complete: () => { },
      })
    );

    // THR
    this.sub.add(
      this.ble.THRResponse$.subscribe({
        next: async (obs) => {
          if (obs === RESPONSE_TYPE_END) {
            this.ble.realtimeDataSubject.next('');
            this.isExerciseFinished = true;
          } else {
            // stop countdown because exercise has not done
            if (this.countdownSubscription) {
              this.countdownSubscription.unsubscribe();
            }

            const thrPattern = new RegExp(
              /^THR#[0-9]_[0-9]{1,3}\$[0-9]{1,4}@$/g
            );
            if (thrPattern.test(obs)) {
              this.ble.realtimeDataSubject.next(obs);
            }
          }
        },
        error: (e) => { },
        complete: () => { },
      })
    );

    // update chart
    this.sub.add(
      this.ble.realtimeData$.subscribe({
        next: (data) => {
          if (data === '') {
            setTimeout(async () => {
              // 해당 번의 데이터를 모두 받아왔을 때 다시 BAT로부터 시작하고 다음 번의 데이터가 있는지를 확인함
              await this.loadingSvc.create(await this.languageSvc.getI18nLang(GETTING_DATA));
              await this.loadingSvc.present();
              await this.watchCommandSvc.sendBAT();
            }, 1000);
            return;
          }

          //step
          const step = +data.substring(
            data.indexOf('#') + 1,
            data.indexOf('_')
          );
          //hr data
          const rate = +data.substring(
            data.indexOf('_') + 1,
            data.indexOf('$')
          );
          // second
          const second = +data.substring(
            data.indexOf('$') + 1,
            data.indexOf('@')
          );
          const elapsedSeconds = getElapsedSeconds(step, this.prescription);
          if (second === 1) { //단계가 올라감
            const prescriptionSteps = this.prescription.steps.find(v => v.sequence === step);
            const exerciseStepMsg: IExerciseStepMessage = {
              channelId: this.channelId,
              currentStep: prescriptionSteps,
              currentStepCount: step,
              exerciseType: this.prescription.exerciseTypes[0],
              messageStatus: 'send',
              messageType: 'ExerciseStep',
              sendDateTime: new Date(),
              totalMinute: this.totalExerciseTime,
              totalStepCount: this.prescription.steps.length,
              userEmail: this.authSvc.username,
            };
            this.chatSvc.sendExerciseStepWithChatHub(exerciseStepMsg);
          }
          this.heartRate = rate;
          this.zone.run(() => {
            this.step = step;
            this.currentExercisingSeconds = second + elapsedSeconds;
          });

          const chartData: IChartItem = { label: second + elapsedSeconds, data: rate };
          this.addDataToChart(chartData);

          this.sendHeartRateWithChatHub(rate, step, second + elapsedSeconds);
        },
        error: (error) => { },
        complete: () => { },
      })
    );

    // RND
    this.sub.add(
      this.ble.RNDService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_HDA) {
          await this.loadingSvc.dismiss();
          await this.loadingSvc.present();
          await this.watchCommandSvc.sendRTS();
          await this.loadingSvc.create(
            await this.languageSvc.getI18nLang(WAIT_FOR_GETTING_DATA)
          );
          await this.loadingSvc.present();
          this.exerciseData = [];
        } else if (obs === RESPONSE_TYPE_NDA) {
          if (this.isExerciseFinished) {
            await this.ble.disconnect();
            this.isExercising$.next(false);
          } else {
            await this.watchCommandSvc.sendSTS();
          }
        }
      })
    );

    // RTS 시계에 저장된 데이터의 시간정보를 요청.
    this.sub.add(
      this.ble.RTSService$.subscribe(async (obs) => {
        const [y, M, d, h, m] = obs
          .substring(obs.indexOf('#') + 1, obs.lastIndexOf('@'))
          .split('_');
        this.exerciseDateTime = new Date(+('20' + y), +M - 1, +d, +h, +m);
        this.loggerSvc.log('exercise datetime:', this.exerciseDateTime);
        await this.watchCommandSvc.sendRTH();
      })
    );

    // RTH 저장된 데이터의 목표 심박수 요청
    this.sub.add(
      this.ble.RTHService$.subscribe(async (obs) => {
        const [min, max] = obs
          .substring(obs.indexOf('#') + 1, obs.lastIndexOf('@'))
          .split('_');
        this.hrMixMax = { min, max };
        this.loggerSvc.log('RTH hr min max', this.hrMixMax);
        await this.watchCommandSvc.sendRTE();
      })
    );

    // RTE 저장된 운동 시간 요청
    this.sub.add(
      this.ble.RTEService$.subscribe(async (obs) => {
        // example: RTE#1_1_0_0_0@
        // 1 step: 1min, 2 step: 1min
        await this.watchCommandSvc.sendRHD();
      })
    );

    // RHD
    this.sub.add(
      this.ble.RHDService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_END) {
          // this.exerciseSubject.next(this.exerciseData);
          await this.loadingSvc.dismiss();
        } else {
          this.tempExerciseData.push(obs);
          this.callREQTimes++;
          await this.watchCommandSvc.sendREQ();
        }
      })
    );

    // REQ
    this.sub.add(
      this.ble.REQService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_ERR) {
          await this.loadingSvc.dismiss();
        } else {
          this.tempExerciseData.push(obs);
          const lastData =
            this.tempExerciseData[this.tempExerciseData.length - 1];
          if (this.tempExerciseData.length > 1) {
            const exerciseDataPattern = new RegExp(/.*\@$/g);
            if (
              lastData !==
              this.tempExerciseData[this.tempExerciseData.length - 2] ||
              !exerciseDataPattern.test(lastData)
            ) {
              if (this.callREQTimes >= 10) {
                this.isRealtimeConnect = false;
                await this.loadingSvc.dismiss();
                await this.ble.disconnect();
                await this.presentScanFailedAlert();
              } else {
                this.tempExerciseData.slice(0, 1);
                this.callREQTimes++;
                await this.watchCommandSvc.sendREQ();
              }
            } else {
              this.callREQTimes = 0;
              this.tempExerciseData = [];
              this.exerciseData.push(lastData);
              await this.watchCommandSvc.sendROK();
            }
          }
        }
      })
    );

    // ROK
    this.sub.add(
      this.ble.ROKService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_END) { // 데이터 전송 종료
          await this.loadingSvc.dismiss();

          const rpeModal = await this.modalController.create({
            component: RpeComponent,
            backdropDismiss: false,
            cssClass: 'rpe-modal',
          });

          await rpeModal.present();
          const { data } = await rpeModal.onWillDismiss();
          const prescription = await this.storageSvc.get(PRESCRIPTION);
          await this.exerciseSvc.sendExerciseData(prescription, data.rpeValue, this.exerciseData,
            this.exerciseDateTime, this.hrMixMax, this.rpesSecondsArray);
          if (this.isExerciseFinished) {
            this.isExercising$.next(false);
            this.sendStopSignalWithChatHub();
            // 전송 후에 자동으로 연결 종단
            await this.ble.disconnect();

            // 운동 종료, 조건 리셋
            this.isReconnect = false;
          } else {
            await this.watchCommandSvc.sendSTS();
          }
        } else {
          this.callREQTimes++;
          this.tempExerciseData.push(obs);
          await this.watchCommandSvc.sendREQ();
        }
      })
    );
  }

  setChattingRoomSubscription() {
    this.sub.add(
      this.chatSvc.connection$.subscribe((isConnected) => {
        this.zone.run(() => {
          this.isChatConnected = isConnected;
        });
      })
    );

    this.sub.add(
      this.chatSvc.newOnlineUser$.subscribe(async (res) => {
        this.commonSvc.presentToast(
          '',
          `${res.userName} ` + (await this.languageSvc.getI18nLang(CHAT_JOIN_ROOM))
        );
        this.chatSvc.handShake(this.channelId);
      })
    );

    this.sub.add(
      this.chatSvc.leave$.subscribe(async (res) => {
        this.commonSvc.presentToast(
          '',
          `${res.userName} ` + + (await this.languageSvc.getI18nLang(CHAT_LEAVE_ROOM))
        );
      })
    );

    this.sub.add(
      this.chatSvc.recvStopSignalMessage$.subscribe(
        async (signal: IStopSignal) => {
          if (signal.channelId === this.channelId) {
            if (signal.isExerciseStop) {
              const msg = await this.languageSvc.getI18nLang(DOCTOR_STOP_EXERCISE);
              await this.alertSvc.presentAlert(
                msg,
                false,
                async () => await this.router.navigate(['/menu'])
              );
            }
          }
        }
      )
    );
  }

  async scanBLE() {
    const devices = [];
    await this.loadingSvc.create(await this.languageSvc.getI18nLang(SCAN));
    await this.loadingSvc.present();
    this.ble.scan().subscribe({
      next: async (device) => {
        if (device) {
          if (devices.indexOf((d) => d.id === device.id) < 0) {
            devices.push(device);
          }
        }
      },
      error: async (e) => {
        await this.loadingSvc.dismiss();
        throwError(e);
        await this.presentScanFailedAlert();
      },
      complete: async () => {
        await this.loadingSvc.dismiss();
        if (devices.length > 0) {
          const modal = await this.modalController.create({
            component: DevicesModalComponent,
            cssClass: 'devices-modal',
            backdropDismiss: false,
            componentProps: {
              devicesList: devices,
              title: await this.languageSvc.getI18nLang(SELECT_DEVICE2),
            },
          });
          await modal.present();

          const { data } = await modal.onWillDismiss();
          if (data) {
            await this.connect(data.id);
          }
        } else {
          await this.presentScanFailedAlert();
        }
      },
    });
  }

  async presentScanFailedAlert() {
    const alertOptions = {
      message: await this.languageSvc.getI18nLang(SCAN_FAILED),
      buttons: [
        {
          text: await this.languageSvc.getI18nLang(CONFIRM),
          handler: async () => {
            await this.scanBLE();
          },
        },
        {
          text: await this.languageSvc.getI18nLang(CANCEL),
          handler: () => { },
        },
      ],
      backdropDismiss: false,
    };
    await this.alertSvc.presentCustomizeAlert(alertOptions);
  }

  async connect(deviceId: string) {
    this.connectSubscription = this.ble.connect(deviceId)
      .pipe(
        tap(async () => await this.loadingSvc.create(await this.languageSvc.getI18nLang(CONNECTING))),
        tap(async () => await this.loadingSvc.present()),
        tap(() => this.isExerciseFinished = false),
        tap(() => this.isRealtimeConnect = true),
        tap(() => this.callBATTimes = 0)
      )
      .subscribe({
        next: async () => {
          await this.loadingSvc.dismiss();
          await this.getLastPrescription();
          if (this.isReconnect) {
            // countdown
            const time = interval(1000).pipe(take(3)); // 연결후 3초 count down
            this.countdownSubscription = time.subscribe({
              next: obs => {},
              error: error => {},
              complete: async () => {
                  await this.loadingSvc.dismiss();

                  this.isExerciseFinished = true;
                  await this.watchCommandSvc.sendBAT();
              }
            });
          }
        },
        error: async (e) => {
          await this.loadingSvc.dismiss();
          this.isRealtimeConnect = false;
          await this.presentConnectFailedAlert(deviceId);
          throwError(e);
        },
        complete: () => { },
      });
  }

  async presentConnectFailedAlert(deviceId) {
    const alertOptions = {
      message: await this.languageSvc.getI18nLang(CONNECT_FAILED),
      buttons: [
        {
          text: await this.languageSvc.getI18nLang(CONFIRM),
          handler: async () => {
            this.connectSubscription.unsubscribe();
            await this.connect(deviceId);
            this.isReconnect = true;
          },
        },
        {
          text: await this.languageSvc.getI18nLang(CANCEL),
          handler: async () => {
            this.isExercising$.next(false);
            this.connectSubscription.unsubscribe();
          },
        },
      ],
      backdropDismiss: false,
    };
    await this.alertSvc.presentCustomizeAlert(alertOptions);
  }
/*
  async presentConnectInterruptAlert(deviceId) {
    const alertOptions = {
      message: await this.languageSvc.getI18nLang(CONNECT_BROKE_UP),
      buttons: [
        {
          text: await this.languageSvc.getI18nLang(CONFIRM),
          handler: async () => {
            this.isExercising$.next(false);
            this.ble.commandTypeSubject.next();
            this.connectSubscription.unsubscribe();
            // reset chart
            if (
              (this.chart.data.datasets &&
                this.chart.data.datasets[0]?.data.length > 0) ||
              document.getElementById('hrChart')
            ) {
              this.resetChart();
              await this.createCanvas();
            }
            await this.presentResetWatchAlert(deviceId);
          },
        },
        {
          text: await this.languageSvc.getI18nLang(CANCEL),
          handler: async () => {
            this.isExercising$.next(false);
            this.connectSubscription.unsubscribe();
          },
        },
      ],
      backdropDismiss: false,
    };
    await this.alertSvc.presentCustomizeAlert(alertOptions);
  }

  async presentResetWatchAlert(deviceId) {
    const alertOptions = {
      message: await this.languageSvc.getI18nLang(ASK_TO_RESET_WATCH),
      buttons: [
        {
          text: await this.languageSvc.getI18nLang(FINISH_RESET),
          handler: async () => {
            await this.connect(deviceId);
          },
        },
        {
          text: await this.languageSvc.getI18nLang(CANCEL),
          handler: async () => {
            this.isExercising$.next(false);
            this.connectSubscription.unsubscribe();
          },
        },
      ],
      backdropDismiss: false,
    };
    await this.alertSvc.presentCustomizeAlert(alertOptions);
  }
*/
  async ionViewWillLeave() {
    if (this.isRealtimeConnect) {
      await this.ble.disconnect();
    }
    if (this.connectSubscription) {
      this.connectSubscription.unsubscribe();
    }
    this.sub.unsubscribe();
  }

  async ionViewDidLeave() {
    // this.stopExercise();
    await this.chatSvc.leaveAsync(this.channelId);
    this.loggerSvc.log('진료모임을 나갔습니다.');
    await this.chatSvc.stopAsync();
    this.loggerSvc.log('실시간 서버와 접속을 종료했습니다.');
  }

  async createCanvas() {
    const textHeartBeat = await this.languageSvc.getI18nLang(HEART_BEAT);
    const textDifficulty = await this.languageSvc.getI18nLang(DIFFICULTY);
    const chatCanvas = document.createElement('canvas');
    const ctx = chatCanvas.getContext('2d');

    Chart.plugins.register({ chartAnnotation });
    setTimeout(() => {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: textHeartBeat,
              data: [],
              spanGaps: false,
              lineTension: 0.2,
              backgroundColor: 'rgba(255, 0, 127, 0)',
              borderColor: 'rgba(255, 0, 127, 1)',
              pointBackgroundColor: 'rgba(255, 0, 127, 1)',
              pointRadius: 0,
              borderWidth: 2,
              datalabels: {
                display: false,
              },
            },
            {
              label: textDifficulty,
              data: [],
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderColor: 'rgba(0, 0, 0, 1)',
              pointBackgroundColor: 'rgba(0, 0, 0, 1)',
              pointRadius: 6,
              borderWidth: 1,
              pointStyle: 'rect',
              showLine: false,
              datalabels: {
                display: true,
                align: 'top',
                anchor: 'end',
                color: 'black',
                font: {
                  weight: 'bold',
                },
              },
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              // {
              //   ticks: {
              //     beginAtZero: false,
              //   },
              // },
            ],
          },
          annotation: {
            annotations: [{
              type: 'box',
              xScaleID: 'x-axis-0',
              yScaleID: 'y-axis-0',
              yMin: this.prescription.hrMin,
              yMax: this.prescription.hrMax,
              borderWidth: 1,
              backgroundColor: 'rgba(20, 173, 35, 0.2)',
              borderColor: 'rgba(20, 173, 35, 0.2)',
            }]
          }
        },
      });
    }, 100);
    setTimeout(() => {
      const location = document.getElementById('canvas');
      chatCanvas.id = 'hrChart';
      location.appendChild(chatCanvas);
    }, 300);
  }

  addRpeToChart(rpe) {
    const heartRatesData = this.heartRateData;
    if (!!heartRatesData && heartRatesData.length > 0) {
      const latestHr = heartRatesData[heartRatesData.length - 1];
      const latestLabel = this.labels[this.labels.length - 1];
      const point = {
        x: latestLabel,
        y: latestHr,
        z: rpe,
      };

      this.loggerSvc.log('rpe', point);
      this.rpeData.push(point);

      this.chart.update();
    }
  }

  set rpeData(value: { x: number; y: any; z: any }[]) {
    this.chart.data.datasets[1].data = value;
  }

  get rpeData() {
    return this.chart.data.datasets[1].data;
  }

  set heartRateData(value: any[]) {
    this.chart.data.datasets[0].data = value;
  }

  get heartRateData() {
    return this.chart.data.datasets[0].data;
  }

  set labels(value: number[]) {
    this.chart.data.labels = value;
  }

  get labels(): number[] {
    return this.chart?.data?.labels || [];
  }

  checkReservationAvailable() {
    if (this.reserveId) {
      this.reservationSvc.searchById(this.reserveId).subscribe(async obs => {
        const dateTo = new Date(obs.to);
        const now = new Date();
        if (dateTo.valueOf() >= now.valueOf()) {
          await this.handleStartExercise();
        } else {
          await this.alertSvc.presentAlert(
            await this.languageSvc.getI18nLang(NOT_RESERVED_TIME),
            false,
            () => this.router.navigate(['/menu'])
          );
        }
      });
    }
  }

  async handleStartExercise() {
    this.isExerciseFinished = false;
    if (ENV.useDummyData) {
      this.generateRandomHeartRate();
    } else {
      const isConnected = await this.ble.isConnected();
      if (!isConnected) {
        if (
          (this.chart?.data.datasets &&
            this.chart?.data.datasets[0]?.data.length > 0) ||
          document.getElementById('hrChart')
        ) {
          this.resetChart();
        }
        await this.scanBLE();
        this.isExerciseFinishedAndRestart = true;
      } else {
        if (
          (this.chart?.data.datasets &&
            this.chart?.data.datasets[0]?.data.length > 0) ||
          document.getElementById('hrChart')
        ) {
          this.resetChart();
          await this.createCanvas();
        }
        await this.setExerciseInfoData();
      }
    }
  }

  resetChart() {
    this.rpeData = [];
    this.heartRateData = [];
    this.labels = [];
    this.step = 0;
    this.currentExercisingSeconds = 0;
    this.chart.destroy();
    const hrChart = document.getElementById('hrChart');
    const location = document.getElementById('canvas');
    location.removeChild(hrChart);
  }

  async setExerciseInfoData() {
    // this.rateArray = [];
    this.isExerciseFinishedAndRestart = false;
    this.authSvc.extendToken().subscribe(async (isRefreshed) => {
      if (isRefreshed) {
        await this.loadingSvc.create(await this.languageSvc.getI18nLang(GETTING_DATA));
        await this.loadingSvc.present();
        await this.watchCommandSvc.sendBAT();
      }
    });
  }

  addDataToChart(item: IChartItem) {
    this.labels.push(item.label);
    this.heartRateData.push(item.data);

    if (this.labels.length > 100) {
      this.labels.splice(0, 1);
      this.heartRateData.splice(0, 1);
    }

    this.chart.update();
  }

  sendEmergencyWithChatHub(rpeValue: number) {
    this.addRpeToChart(rpeValue);
    const msg: IEmergencyMessage = {
      channelId: this.channelId,
      messageStatus: 'send',
      messageType: 'EMERGENCY',
      rate: this.heartRate,
      seconds: this.currentExercisingSeconds,
      sendDateTime: new Date(),
      userEmail: this.authSvc.username,
      rpeValue,
    };
    this.chatSvc.sendEmergency(msg);
    this.rpeMsg = msg;
    this.rpesSecondsArray.push({ rpe: rpeValue, second: this.currentExercisingSeconds });
  }

  private sendStopSignalWithChatHub() {
    const signal: IStopSignal = {
      messageType: 'TEXT',
      sendDateTime: new Date(),
      messageStatus: 'send',
      userEmail: this.authSvc.username,
      channelId: this.channelId,
      isExerciseStop: true,
    };
    this.loggerSvc.log('stop signal', signal);
    this.chatSvc.sendStopSignal(signal);
  }

  private sendHeartRateWithChatHub(rate: number, round: number, second: number) {
    this.chatSvc.sendHeartRate({
      channelId: this.channelId,
      messageStatus: 'send',
      messageType: 'HeartRate',
      rate,
      round,
      seconds: second,
      userEmail: this.authSvc.username,
      sendDateTime: new Date(),
    } as IHrMessage);
  }

  // #region FOR DUMMY DATA
  private async stopExercise() {
    if (!!this.interval && !!this.timer) {
      clearInterval(this.interval);
      clearTimeout(this.timer);
      this.interval = null;
      this.timer = null;
    }
    this.exerciseData = this.exerciseData.map((res) => Number(res));
    await this.loadingSvc.dismiss();
    const rpeModal = await this.modalController.create({
      component: RpeComponent,
      backdropDismiss: false,
      cssClass: 'rpe-modal',
    });

    await rpeModal.present();
    const { data } = await rpeModal.onWillDismiss();
    const prescription = await this.storageSvc.get(PRESCRIPTION);
    await this.exerciseSvc
      .postExercise(
        prescription,
        this.exerciseData,
        data.rpeValue,
        this.exerciseDateTime,
        this.hrMixMax,
        ''
      )
      .toPromise();
    this.sendStopSignalWithChatHub();
  }

  private generateRandomHeartRate() {
    let second = 0;
    let step = 1;
    let totalMinutes = 0;

    this.getLastPrescription().then(() => {
      this.loggerSvc.log('prescription', this.prescription);
      this.hrMixMax = { min: this.prescription.hrMin + '', max: this.prescription.hrMax + '' };
      const totalStepCount = this.prescription.steps.length;
      let currentPrescriptionStep = this.prescription.steps.find(
        (s) => s.sequence === step
      );
      let exerciseStepMsg: IExerciseStepMessage = {
        channelId: this.channelId,
        currentStep: currentPrescriptionStep,
        currentStepCount: step,
        exerciseType: this.prescription.exerciseTypes[0],
        messageStatus: 'send',
        messageType: 'ExerciseStep',
        sendDateTime: new Date(),
        totalMinute: this.totalExerciseTime,
        totalStepCount,
        userEmail: this.authSvc.username,
      };
      this.chatSvc.sendExerciseStepWithChatHub(exerciseStepMsg);

      this.interval = setInterval(() => {
        this.timer = setTimeout(() => {
          const rate = Math.floor(Math.random() * 100);
          second++;
          const minute = Math.floor(second / 60);

          if (totalMinutes < this.totalExerciseTime) {
            this.loggerSvc.log(
              'minute',
              minute,
              'step minute',
              currentPrescriptionStep.minute
            );
            if (minute - totalMinutes >= currentPrescriptionStep.minute) {
              totalMinutes += currentPrescriptionStep.minute;
              step++;
              currentPrescriptionStep = this.prescription.steps.find(
                (s) => s.sequence === step
              );
              exerciseStepMsg = {
                ...exerciseStepMsg,
                currentStep: currentPrescriptionStep,
                currentStepCount: step,
              };
              this.chatSvc.sendExerciseStepWithChatHub(exerciseStepMsg);
            }
          }

          this.loggerSvc.log('totalExerciseTime ', this.totalExerciseTime);

          const baseSeconds = getElapsedSeconds(1, this.prescription);
          this.loggerSvc.log('prescription', this.prescription);
          this.loggerSvc.log('base seconds', baseSeconds);

          this.addDataToChart({
            label: second + baseSeconds,
            data: rate,
          } as IChartItem);
          this.sendHeartRateWithChatHub(rate, 1, second + baseSeconds);
          this.exerciseData.push(rate);
          this.currentExercisingSeconds = second;
          this.heartRate = rate;
        }, 100);
      }, 100);
    });
  }
  // #endregion

}

interface IChartItem {
  label: number;
  data: number;
}

/**
 * chart에서 옳은 촛수를 나타나기 위하여, 운동 횟차 > 1 때는, 앞 횟차의 촛수들을 현재 촛수하고 합산함.
 *
 * @param round: 현재 횟수
 * @param prescription: 운동 처방
 * @returns
 */
const getElapsedSeconds = (round: number, prescription: IPrescription) => {
  let baseSeconds = 0;
  if (round > 1) {
    const baseMinutes = prescription.steps
      .map(step => step.minute)
      .slice(0, round - 1)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    baseSeconds = Math.round(baseMinutes * 60);
  }
  return baseSeconds;
};
