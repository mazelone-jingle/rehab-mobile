import { Chart } from 'chart.js';
import * as chartAnnotation from 'chartjs-plugin-annotation';

import { BehaviorSubject, Subscription, throwError } from 'rxjs';
import { DevicesModalComponent } from 'src/components/modals/devices-modal/devices-modal.component';
import { RpeComponent } from 'src/components/modals/rpe/rpe.component';
import { PRESCRIPTION } from 'src/constants/common';
import {
  RESPONSE_TYPE_END,
  RESPONSE_TYPE_ERR,
  RESPONSE_TYPE_HDA,
  RESPONSE_TYPE_NDA,
  RESPONSE_TYPE_SSE,
  RESPONSE_TYPE_STE,
  RESPONSE_TYPE_STH,
  RESPONSE_TYPE_STS,
  RESPONSE_TYPE_THR,
} from 'src/constants/watch-ble-command';
import { IEmergencyMessage } from 'src/models/i-emergency-message';
import { IExcerciseStepMessage } from 'src/models/i-excercise-step-message';
import { IHrMessage } from 'src/models/ihr-message';
import { IStopSignal } from 'src/models/istop-signal';
import { AlertService } from 'src/services/alert.service';
import { AuthService } from 'src/services/auth.service';
import { BleService } from 'src/services/ble.service';
import { ChatService } from 'src/services/chat.service';
import { CommonService } from 'src/services/common.service';
import { ExerciseService, IRpes } from 'src/services/exercise.service';
import { LoadingService } from 'src/services/loading.service';
import { LoggerService } from 'src/services/logger.service';
import { IPrescription } from 'src/services/prescription.service';
import { RealTimeExerciseService } from 'src/services/real-time-exercise.service';
import { StorageService } from 'src/services/storage.service';
import { WatchCommandService } from 'src/services/watch-command.service';

import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { environment as ENV } from '../../environments/environment';

@Component({
  selector: 'app-real-time-exercise',
  templateUrl: './real-time-exercise.page.html',
  styleUrls: ['./real-time-exercise.page.scss'],
})
export class RealTimeExercisePage implements OnInit {
  canvas: HTMLCanvasElement;
  chart: any;
  dataset: Array<IChartItem> = [];
  realtime = false;
  reservId: number;
  channelId: string;
  prescription: IPrescription;
  step: number;
  totalExerciseTime: number;
  rateArray: number[] = [];
  seconds = 0;
  heartRate: number;
  isToggleChat = false;
  isShowChat = false;
  isChatConnected: boolean;
  interval: any;
  timer: any;
  rpesSecondsArray: IRpes[] = [];
  devices: Array<any> = [];
  connectSubscription: Subscription = null;
  isExercising$ = new BehaviorSubject<boolean>(false);
  rpeMsg: IEmergencyMessage;
  sub: Subscription;
  callBATTimes = 0;
  exerciseData = [];
  exerciseSubject = new BehaviorSubject<string[]>(this.exerciseData);
  exerciseDatetime: Date;
  hrMixMax: { min: string; max: string };
  callREQTimes = 0;
  tempExerciseData = [];
  exerciseFinished = false; // 운동 끝내 여부 판단
  realtimeConnect: boolean;
  isExercisingSubscription: Subscription;

  constructor(
    private realTimeExerciseSvc: RealTimeExerciseService,
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
    private loadingSvc: LoadingService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.loggerSvc.log(params);
      if (!!this.router.getCurrentNavigation().extras.state) {
        this.reservId =
          this.router.getCurrentNavigation().extras.state.reservId;
        this.channelId =
          this.router.getCurrentNavigation().extras.state.channelId;

        this.loggerSvc.log('channelId ? ', this.channelId);
        this.loggerSvc.log('reservId ? ', this.reservId);
      }
    });

    this.sub = new Subscription();

    this.sub.add(
      this.chatSvc.connection$.subscribe((isConnected) => {
        this.zone.run(() => {
          this.isChatConnected = isConnected;
        });
      })
    );

    this.sub.add(
      this.chatSvc.newOnlineUser$.subscribe((res) => {
        this.commonSvc.presentToast(
          '',
          `${res.userName} 님이 대화방에 참여 하였습니다.`
        );
        this.chatSvc.handShake(this.channelId);
      })
    );

    this.sub.add(
      this.chatSvc.leave$.subscribe((res) => {
        this.commonSvc.presentToast(
          '',
          `${res.userName} 님이 대화방을 나갔습니다.`
        );
      })
    );

    this.sub.add(
      this.chatSvc.recvStopSignalMessage$.subscribe(
        async (signal: IStopSignal) => {
          if (signal.channelId === this.channelId) {
            if (signal.isExerciseStop) {
              const msg =
                '의사가 운동을 종료하였습니다. 메뉴화면으로 돌아갑니다.';
              await this.alertSvc.presentAlert(
                msg,
                false,
                async () => await this.router.navigate(['/home'])
              );
            }
          }
        }
      )
    );
  }

  async ngOnInit() {
    const isConnected = await this.ble.isConnected();

    if (!isConnected) {
      await this.scanBLE();
    } else {
      await this.getLastPrescription();
    }
  }

  ionViewWillEnter() {
    this.setSubscriptions();
  }

  setSubscriptions() {
    this.sub.add(
      this.ble.SSEResponse$.subscribe({
        next: (obs) => {
          if (obs === RESPONSE_TYPE_SSE) {
            this.ble.serviceTypeSubject.next(RESPONSE_TYPE_THR);
          }
        },
        error: (e) => {},
        complete: () => {},
      })
    );

    this.sub.add(
      this.ble.THRResponse$.subscribe({
        next: async (obs) => {
          if (obs === RESPONSE_TYPE_END) {
            this.ble.realtimeDataSubject.next('');
            this.exerciseFinished = true;
          } else {
            const thrPattern = new RegExp(
              /^THR#[0-9]_[0-9]{1,3}\$[0-9]{1,4}@$/g
            );
            if (thrPattern.test(obs)) {
              this.ble.realtimeDataSubject.next(obs);
            }
          }
        },
        error: (e) => {},
        complete: () => {},
      })
    );

    // update chart
    this.sub.add(
      this.ble.realtimeData$.subscribe({
        next: (data) => {
          if (data === '') {
            setTimeout(async () => {
              await this.loadingSvc.create('Getting data...');
              await this.loadingSvc.present();
              await this.watchCommandSvc.sendBAT();
            }, 1000);
            return;
          }

          if (data === undefined) {
            return;
          }
          //step
          const round = +data.substring(
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
          const baseSeconds = this.realTimeExerciseSvc.getBaseSeconds(
            round,
            this.prescription
          );
          if (second === 1) {
            //단계가 올라감
            const prescriptionSteps = this.prescription.steps.find(
              (v) => v.sequence === round
            );
            // this.chatSvc.sendExcerciseStep(prescriptionSteps);
          }
          this.heartRate = rate;
          this.zone.run(() => {
            this.step = round;
            this.seconds = second + baseSeconds;
          });
          if (this.available) {
            this.addData({
              label: second + baseSeconds,
              data: rate,
            } as IChartItem);
            this.sendHeartRate(rate, round, second + baseSeconds);
            this.rateArray.push(rate);
          }
        },
        error: (error) => {},
        complete: () => {},
      })
    );

    this.sub.add(
      this.ble.BATService$.subscribe({
        next: async (obs) => {
          const batPattern = new RegExp(/^BAT#[0-9]{1,3}@$/g);
          if (batPattern.test(obs)) {
            this.callBATTimes = 0;
            await this.loadingSvc.dismiss();
            this.ble.handleBAT(obs);
            if (this.realtimeConnect || this.exerciseFinished) {
              await this.watchCommandSvc.sendRND();
            } else {
              await this.watchCommandSvc.sendSTS();
            }
          } else {
            if (this.callBATTimes >= 10) {
              await this.loadingSvc.dismiss();
              this.realtimeConnect = false;
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

    this.sub.add(
      this.ble.RNDService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_HDA) {
          await this.loadingSvc.dismiss();
          await this.loadingSvc.present();
          await this.watchCommandSvc.sendRTS();
          await this.loadingSvc.create(
            `디바이스에 저장된 데이터들을 받아오는 중입니다. 잠시만 기다려주세요......`
          );
          await this.loadingSvc.present();
          this.exerciseData = [];
        } else if (obs === RESPONSE_TYPE_NDA) {
          if (this.exerciseFinished) {
            await this.ble.disconnect();
            this.rateArray = [];
            this.isExercising$.next(false);
          } else {
            await this.watchCommandSvc.sendSTS();
          }
        }
      })
    );

    this.sub.add(
      this.ble.RTSService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_ERR) {
          await this.loadingSvc.dismiss();
        }
        const [y, M, d, h, m] = obs
          .substring(obs.indexOf('#') + 1, obs.lastIndexOf('@'))
          .split('_');
        this.exerciseDatetime = new Date(+('20' + y), +M - 1, +d, +h, +m);
        await this.watchCommandSvc.sendRTH();
      })
    );

    this.sub.add(
      this.ble.RTHService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_ERR) {
          await this.loadingSvc.dismiss();
        }
        const [min, max] = obs
          .substring(obs.indexOf('#') + 1, obs.lastIndexOf('@'))
          .split('_');
        this.hrMixMax = { min, max };
        await this.watchCommandSvc.sendRTE();
      })
    );

    this.sub.add(
      this.ble.RTEService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_ERR) {
          await this.loadingSvc.dismiss();
        }
        await this.watchCommandSvc.sendRHD();
      })
    );

    this.sub.add(
      this.ble.RHDService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_ERR) {
          await this.loadingSvc.dismiss();
        }
        if (obs === RESPONSE_TYPE_END) {
          this.exerciseSubject.next(this.exerciseData);
          await this.loadingSvc.dismiss();
        } else {
          this.tempExerciseData.push(obs);
          this.callREQTimes++;
          await this.watchCommandSvc.sendREQ();
        }
      })
    );

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
                this.realtimeConnect = false;
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

    this.sub.add(
      this.ble.ROKService$.subscribe(async (obs) => {
        if (obs === RESPONSE_TYPE_ERR) {
          await this.loadingSvc.dismiss();
        }
        if (obs === RESPONSE_TYPE_END) {
          this.exerciseSubject.next(this.exerciseData);
          await this.loadingSvc.dismiss();
          const rpeModal = await this.modalController.create({
            component: RpeComponent,
            backdropDismiss: false,
            cssClass: 'rpe-modal',
          });

          await rpeModal.present();
          const { data } = await rpeModal.onWillDismiss();
          const prescription = await this.storageSvc.get(PRESCRIPTION);
          await this.exerciseSvc.sendExerciseData(
            prescription,
            data.rpeValue,
            this.exerciseData,
            this.exerciseDatetime,
            this.hrMixMax
          );
          this.sendStopSignal();
          // await this.loadingSvc.present();
          // await this.watchCommandSvc.sendRND();
        } else {
          this.callREQTimes++;
          this.tempExerciseData.push(obs);
          await this.watchCommandSvc.sendREQ();
        }
      })
    );

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
  }

  sendStopSignal() {
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

  getRpesValue() {
    const rpesValue = this.rateArray.map((_) => '-1');
    this.rpesSecondsArray.forEach((data) => {
      rpesValue[data.second] = data.rpe + '';
    });
    return rpesValue.join(',');
  }

  checkIsBefore5Minutes(dateFrom: Date, dateTo: Date) {
    const now = new Date().getTime();
    const reservationDateFrom = new Date(dateFrom).getTime();
    const reservationDateTo = new Date(dateTo).getTime();
    const min = 5;
    const availableDateFrom = reservationDateFrom - min * 60 * 1000;
    return reservationDateTo >= now && availableDateFrom <= now;
  }

  async scanBLE() {
    this.devices = [];
    await this.loadingSvc.create('Scan...');
    await this.loadingSvc.present();
    this.ble.scan().subscribe({
      next: async (device) => {
        if (device) {
          if (this.devices.indexOf((d) => d.id === device.id) < 0) {
            this.devices.push(device);
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
        if (this.devices.length > 0) {
          const modal = await this.modalController.create({
            component: DevicesModalComponent,
            cssClass: 'devices-modal',
            backdropDismiss: false,
            componentProps: {
              devicesList: this.devices,
              // TODO: i18n
              title:
                '시계와 연결되어 있지 않습니다. 데이터 전송하시려면 디바이스를 선택해주세요.',
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
      message: '스캔 실패했습니다. 디시 시도하시겠습니까?',
      buttons: [
        {
          text: '확인',
          handler: async () => {
            await this.scanBLE();
          },
        },
        {
          text: '취소',
          handler: () => {},
        },
      ],
      backdropDismiss: false,
    };
    await this.alertSvc.presentCustomizeAlert(alertOptions);
  }

  async connect(deviceId: string) {
    await this.loadingSvc.create('Connect...');
    await this.loadingSvc.present();
    this.connectSubscription = this.ble.connect(deviceId).subscribe({
      next: async () => {
        this.exerciseFinished = false;
        this.realtimeConnect = true;
        await this.loadingSvc.dismiss();
        await this.getLastPrescription();
      },
      error: async (e) => {
        await this.loadingSvc.dismiss();
        this.realtimeConnect = false;
        this.ble.realtimeDataSubject.next();
        if (this.isExercising$.value) {
          await this.presentConnectInterruptAlert(deviceId);
        } else {
          await this.presentConnectFailedAlert(deviceId);
        }
        throwError(e);
      },
      complete: () => {},
    });
    return this.connectSubscription as Subscription;
  }

  async presentConnectFailedAlert(deviceId) {
    const alertOptions = {
      message: '연결 실패했습니다. 디시 시도하시겠습니까?',
      buttons: [
        {
          text: '확인',
          handler: async () => {
            this.connectSubscription.unsubscribe();
            await this.connect(deviceId);
          },
        },
        {
          text: '취소',
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

  async presentConnectInterruptAlert(deviceId) {
    const alertOptions = {
      message: `연결 중단되었습니다. 디시 운동하시겠습니까?`,
      buttons: [
        {
          text: '확인',
          handler: async () => {
            this.isExercising$.next(false);
            this.ble.serviceTypeSubject.next();
            this.connectSubscription.unsubscribe();
            // reset chart
            this.rateArray = [];
            this.realtime = true;
            if (
              this.chart.data.datasets &&
              this.chart.data.datasets[0]?.data.length > 0
            ) {
              this.removeData(this.chart);
              this.step = 0;
              this.seconds = 0;
              this.chart.destroy();
              const hrChart = document.getElementById('hrChart');
              const location = document.getElementById('canvas');
              location.removeChild(hrChart);
              this.createCanvas();
              setTimeout(() => {
                this.canvas.id = 'hrChart';
                location.appendChild(this.canvas);
              }, 1000);
            }
            await this.presentResetWatchAlert(deviceId);
          },
        },
        {
          text: '취소',
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
      message:
        '다시 운동하시려면 시계를 리셋하십시오. <br>시계를 리셋하셨습니까?',
      buttons: [
        {
          text: '리셋 완료',
          handler: async () => {
            await this.connect(deviceId);
          },
        },
        {
          text: '취소',
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

  ionViewWillLeave(): void {
    if (this.connectSubscription) {
      this.connectSubscription.unsubscribe();
    }
    this.sub.unsubscribe();
  }

  ionViewDidLeave() {
    // this.stopExercise();
    this.chatSvc.leaveAsync(this.channelId).then(() => {
      this.loggerSvc.log('진료모임을 나갔습니다.');
      this.chatSvc.stopAsync().then(() => {
        this.loggerSvc.log('실시간 서버와 접속을 종료했습니다.');
      });
    });
  }

  sendEmergency(rpeValue: number) {
    const msg: IEmergencyMessage = {
      channelId: this.channelId,
      messageStatus: 'send',
      messageType: 'EMERGENCY',
      rate: this.heartRate,
      seconds: this.seconds,
      sendDateTime: new Date(),
      userEmail: this.authSvc.username,
      rpeValue,
    };
    this.chatSvc.sendEmergency(msg);
    this.rpeMsg = msg;
    this.rpesSecondsArray.push({ rpe: rpeValue, second: this.seconds });
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    const ctx = this.canvas.getContext('2d');

    Chart.plugins.register({ chartAnnotation });
    setTimeout(() => {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: '# of Heart beat',
              data: this.data,
              fill: false,
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          onclick: (point, event) => {
            this.loggerSvc.log('point', point, 'event', event);
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                },
              },
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
      this.loggerSvc.log('chart', this.chart);
    }, 100);
    setTimeout(() => {
      const location = document.getElementById('canvas');
      this.canvas.id = 'hrChart';
      location.appendChild(this.canvas);
    }, 300);
  }

  get labels(): Array<string> {
    return this.dataset.map((ds) => ds.label.toString());
  }

  get data(): Array<number> {
    return this.dataset.map((ds) => ds.data);
  }

  async setExerciseInfoData() {
    this.rateArray = [];
    this.realtime = true;

    this.authSvc.extendToken().subscribe(async (isRefreshed) => {
      if (isRefreshed) {
        await this.loadingSvc.create('Getting data...');
        await this.loadingSvc.present();
        await this.watchCommandSvc.sendBAT();
      }
    });
  }

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  async startExercise() {
    if (ENV.useDummyData) {
      this.generateRandomHeartRate();
    } else {
      const isConnected = await this.ble.isConnected();
      if (!isConnected) {
        await this.scanBLE();
      } else {
        //reset chart
        if (
          this.chart.data.datasets &&
          this.chart.data.datasets[0]?.data.length > 0
        ) {
          this.removeData(this.chart);
          this.step = 0;
          this.seconds = 0;
          this.chart.destroy();
          const hrChart = document.getElementById('hrChart');
          const location = document.getElementById('canvas');
          location.removeChild(hrChart);
          this.createCanvas();
          setTimeout(() => {
            this.canvas.id = 'hrChart';
            location.appendChild(this.canvas);
          }, 1000);
        }
        await this.setExerciseInfoData();
      }
    }
  }

  async stopExercise() {
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
        this.exerciseDatetime,
        this.hrMixMax,
        ''
      )
      .toPromise();
    this.sendStopSignal();
  }

  addData(item: IChartItem) {
    this.chart.data.labels.push(item.label);
    this.chart.data.datasets.forEach((dataset) => {
      dataset.data.push(item.data);
    });

    if (this.chart.data.labels.length > 100) {
      this.chart.data.labels.splice(0, 1);
      this.chart.data.datasets.forEach((dataset) => {
        dataset.data.splice(0, 1);
      });
    }

    this.chart.update();
  }

  get available(): boolean {
    return this.realtime;
  }

  async getLastPrescription() {
    this.prescription = await this.storageSvc.get(PRESCRIPTION);
    this.createCanvas();
    this.loggerSvc.log('prescription', this.prescription);
    if (!this.prescription) {
      await this.alertSvc.presentAlert(
        `You have not gotten the latest prescription`
      );
      this.router.navigate(['/home']);
    } else {
      this.totalExerciseTime = this.prescription.steps
        .map((step) => step.minute)
        .reduce((accr, curr) => accr + curr);
    }
  }

  async toggleChat() {
    this.isShowChat = !this.isShowChat;
  }

  getUpdatedValue(e) {
    this.isShowChat = e;
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
      let exerciseStepMsg: IExcerciseStepMessage = {
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
      this.chatSvc.sendExerciseStep(exerciseStepMsg);

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
              this.chatSvc.sendExerciseStep(exerciseStepMsg);
            }
          }

          this.loggerSvc.log('totalExcerciseTime ', this.totalExerciseTime);

          const baseSeconds = this.realTimeExerciseSvc.getBaseSeconds(
            1,
            this.prescription
          );
          this.loggerSvc.log('prescription', this.prescription);
          this.loggerSvc.log('base seconds', baseSeconds);

          this.addData({
            label: second + baseSeconds,
            data: rate,
          } as IChartItem);
          this.sendHeartRate(rate, 1, second + baseSeconds);
          this.exerciseData.push(rate);
          this.seconds = second;
          this.heartRate = rate;
        }, 100);
      }, 100);
    });
  }

  private sendHeartRate(rate: number, round: number, second: number) {
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
}

interface IChartItem {
  label: number;
  data: number;
}
