import { BehaviorSubject, Subscription, throwError } from 'rxjs';
import { ConnectModalComponent } from 'src/components/modals/connect-modal/connect-modal.component';
import { DevicesModalComponent } from 'src/components/modals/devices-modal/devices-modal.component';
import { RpeComponent } from 'src/components/modals/rpe/rpe.component';
import { PRESCRIPTION } from 'src/constants/common';
import {
  RESPONSE_TYPE_END, RESPONSE_TYPE_ERR, RESPONSE_TYPE_HDA, RESPONSE_TYPE_NDA
} from 'src/constants/watch-ble-command';
import { IReservation } from 'src/models/i-reservation';
import { AlertService } from 'src/services/alert.service';
import { BleService } from 'src/services/ble.service';
import { ExerciseService } from 'src/services/exercise.service';
import { LoadingService } from 'src/services/loading.service';
import { LoggerService } from 'src/services/logger.service';
import { ReservationService } from 'src/services/reservation.service';
import { StorageService } from 'src/services/storage.service';
import { WatchCommandService } from 'src/services/watch-command.service';

import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  devices: Array<any> = [];
  connectedDeviceId: string = null;
  peripheral: any;
  batteryPower: number;
  isConnect = true;
  // connectStatus = false;
  exerciseData: string[] = [];
  exerciseSubject = new BehaviorSubject<string[]>(this.exerciseData);
  isScaned = false;
  connectSubscription: Subscription = null;

  tempExerciseData = [];
  callREQTimes = 0;
  exerciseDatetime: Date;
  hrMixMax: { min: string; max: string };

  callBATTimes = 0;
  sub: Subscription;
  constructor(
    public modalController: ModalController,
    private zone: NgZone,
    public ble: BleService,
    private loadingSvc: LoadingService,
    private alertSvc: AlertService,
    private loggerSvc: LoggerService,
    private storageSvc: StorageService,
    private watchCommandService: WatchCommandService,
    private exerciseSvc: ExerciseService,
    private reservationSvc: ReservationService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    if (!await this.ble.isConnected()) {
      await this.presentIsConnectModal();
    }
  }

  ionViewWillEnter() {
    this.sub = new Subscription();
    this.setSubscriptions();
  }

  setSubscriptions() {
    this.sub.add(this.ble.BATService$
      .subscribe({
        next: async (obs) => {
          const batPattern = new RegExp(/^BAT#[0-9]{1,3}@$/g);
          if (batPattern.test(obs)) {
            this.callBATTimes = 0;
            await this.loadingSvc.dismiss();
            const battery = this.ble.handleBAT(obs);
            await this.zone.run(async () => {
              this.batteryPower = +battery;
              await this.loadingSvc.present();
              await this.watchCommandService.sendRND();
            });
          } else {
            if (this.callBATTimes >= 10) {
              await this.loadingSvc.dismiss();
              await this.ble.disconnect();
              await this.presentScanFailedAlert();
            } else {
              this.callBATTimes++;
              await this.watchCommandService.sendBAT();
            }
          }
        },
        error: async (err) => {
          this.loggerSvc.error('BAT error', err);
        },
        complete: () => {
          this.loggerSvc.info('BAT complete');
        }
      }));

    this.sub.add(this.ble.RNDService$.subscribe(async (obs) => {
      if (obs === RESPONSE_TYPE_HDA) {
        await this.loadingSvc.dismiss();
        await this.loadingSvc.present();
        await this.watchCommandService.sendRTS();
        await this.loadingSvc.create(`디바이스에 저장된 데이터들을 받아오는 중입니다. 잠시만 기다려주세요......`);
        await this.loadingSvc.present();
        this.exerciseData = [];
      } else if (obs === RESPONSE_TYPE_NDA) {
        await this.loadingSvc.dismiss();
      }
    }));

    this.sub.add(this.ble.RTSService$.subscribe(async obs => {
      if (obs === RESPONSE_TYPE_ERR) {
        await this.loadingSvc.dismiss();
      }
      const [y, M, d, h, m] = obs.substring(obs.indexOf('#') + 1, obs.lastIndexOf('@') - 1).split('_');
      this.exerciseDatetime = new Date(`${y}/${M}/${d} ${h}:${m}`);
      await this.watchCommandService.sendRTH();
    }));

    this.sub.add(this.ble.RTHService$.subscribe(async obs => {
      if (obs === RESPONSE_TYPE_ERR) {
        await this.loadingSvc.dismiss();
      }
      const [min, max] = obs.substring(obs.indexOf('#') + 1, obs.lastIndexOf('@') - 1).split('_');
      this.hrMixMax = { min, max };
      await this.watchCommandService.sendRTE();
    }));

    this.sub.add(this.ble.RTEService$.subscribe(async obs => {
      if (obs === RESPONSE_TYPE_ERR) {
        await this.loadingSvc.dismiss();
      }
      await this.watchCommandService.sendRHD();
    }));

    this.sub.add(this.ble.RHDService$.subscribe(async (obs) => {
      if (obs === RESPONSE_TYPE_ERR) {
        await this.loadingSvc.dismiss();
      }
      if (obs === RESPONSE_TYPE_END) {
        this.exerciseSubject.next(this.exerciseData);
        await this.loadingSvc.dismiss();
      } else {
        this.tempExerciseData.push(obs);
        this.callREQTimes++;
        await this.watchCommandService.sendREQ();
      }
    }));

    this.sub.add(this.ble.REQService$.subscribe(async (obs) => {
      if (obs === RESPONSE_TYPE_ERR) {
        await this.loadingSvc.dismiss();
      } else {
        this.tempExerciseData.push(obs);
        const lastData = this.tempExerciseData[this.tempExerciseData.length - 1];
        if (this.tempExerciseData.length > 1) {
          if (lastData !== this.tempExerciseData[this.tempExerciseData.length - 2]
            || !this.checkExerciseDataCorrect(lastData)) {
            if (this.callREQTimes >= 10) {
              await this.loadingSvc.dismiss();
              await this.ble.disconnect();
              await this.presentScanFailedAlert();
            } else {
              this.tempExerciseData.slice(0, 1);
              this.callREQTimes++;
              await this.watchCommandService.sendREQ();
            }
          } else {
            this.callREQTimes = 0;
            this.tempExerciseData = [];
            this.exerciseData.push(lastData);
            await this.watchCommandService.sendROK();
          }
        }
      }
    }));

    this.sub.add(this.ble.ROKService$.subscribe(async (obs) => {
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
        await this.exerciseSvc.sendExerciseData(prescription, data.rpeValue, this.exerciseData, this.exerciseDatetime, this.hrMixMax);
        await this.loadingSvc.present();
        await this.watchCommandService.sendRND();
      } else {
        this.callREQTimes++;
        this.tempExerciseData.push(obs);
        await this.watchCommandService.sendREQ();
      }
    }));
  }

  checkExerciseDataCorrect(data: string) {
    return data.charAt(data.length - 1) === '@';
  }

  async presentIsConnectModal() {
    const modal = await this.modalController.create({
      component: ConnectModalComponent,
      cssClass: 'connect-modal',
      backdropDismiss: false,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.isConnect = data.isConnect;
    if (this.isConnect) {
      await this.scanBLE();
    }
  }

  async scanBLE() {
    this.devices = [];
    await this.loadingSvc.create('Scan...');
    await this.loadingSvc.present();
    return this.ble
      .scan()
      .subscribe({
        next: async (device) => {
          this.isScaned = true;
          if (device) {
            if (this.devices.indexOf((d) => d.id === device.id) < 0) {
              this.devices.push(device);
            }
          }
        },
        error: async (e) => {
          await this.loadingSvc.dismiss();
          this.isScaned = true;
          throwError(e);
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
                title: '디바이스를 선택해주세요.'
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
        }
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
          handler: () => {
          },
        },
      ],
      backdropDismiss: false,
    };
    await this.alertSvc.presentCustomizeAlert(alertOptions);
  }

  async connect(deviceId: string) {
    this.connectedDeviceId = deviceId;
    await this.loadingSvc.create('Connect...');
    await this.loadingSvc.present();
    this.connectSubscription = this.ble
      .connect(deviceId)
      .subscribe({
        next: async (peripheral) => {
          await this.loadingSvc.dismiss();
          this.connectedDeviceId = deviceId;
          this.peripheral = peripheral;
          await this.loadingSvc.create('Getting data...');
          await this.loadingSvc.present();
          this.callBATTimes++;
          await this.watchCommandService.sendBAT();
        },
        error: async (e) => {
          this.batteryPower = null;
          await this.loadingSvc.dismiss();
          throwError(e);
          await this.presentConnectFailedAlert(deviceId);
        },
        complete: () => { }
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
            this.batteryPower = null;
            this.connectSubscription.unsubscribe();
          },
        },
      ],
      backdropDismiss: false,
    };
    await this.alertSvc.presentCustomizeAlert(alertOptions);
  }

  ionViewWillLeave(): void {
    this.sub.unsubscribe();
  }

  routeToRealtimeExercise() {
    this.reservationSvc.getReservation().subscribe(async (reservation) => {
      if (reservation.length > 0) {
        const availableReservation = this.checkReservationIsAvailableNow(reservation);
        //by-pass
        if (availableReservation.length > 0) {
          this.router.navigate(['real-time-exercise'], {
            state: { reservId: availableReservation[0].id, channelId: availableReservation[0].channelId },
          });
        } else {
          await this.alertSvc.presentAlert(
            '예약한 날짜 및 시간이 아닙니다. 또는 예약한 정보가 없습니다.',
            false
          );
        }
      } else {
        await this.alertSvc.presentAlert(
          '예약한 날짜 및 시간이 아닙니다. 또는 예약한 정보가 없습니다.',
          false
        );
      }
    });
  }

  checkReservationIsAvailableNow(reservations: IReservation[]) {
    return reservations
      .filter((reservation) => reservation.approvalResult)
      .filter((reservation) => this.checkIsBefore5Minutes(reservation.from, reservation.to));
  }

  checkIsBefore5Minutes(dateFrom: Date, dateTo: Date) {
    const now = new Date().getTime();
    const reservationDateFrom = new Date(dateFrom).getTime();
    const reservationDateTo = new Date(dateTo).getTime();
    const min = 5;
    const availableDateFrom = reservationDateFrom - min * 60 * 1000;
    // this.loggerSvc.log('reserve from - ', reservationDateFrom, 'now', now);
    return reservationDateTo >= now && availableDateFrom <= now;
  }
}
