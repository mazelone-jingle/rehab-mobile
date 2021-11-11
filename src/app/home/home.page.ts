import { BehaviorSubject, Subscription, throwError, Observable, Subject } from 'rxjs';
import { ConnectModalComponent } from 'src/components/modals/connect-modal/connect-modal.component';
import { DevicesModalComponent } from 'src/components/modals/devices-modal/devices-modal.component';
import { RpeComponent } from 'src/components/modals/rpe/rpe.component';
import { PRESCRIPTION } from 'src/constants/common';
import {
  CANCEL, CONFIRM, CONNECT_FAILED, CONNECTING, GETTING_DATA, NOT_RESERVED_TIME, SCAN, SCAN_FAILED,
  SELECT_DEVICE, WAIT_FOR_GETTING_DATA
} from 'src/constants/language-key';
import {
  RESPONSE_TYPE_END, RESPONSE_TYPE_ERR, RESPONSE_TYPE_HDA, RESPONSE_TYPE_NDA
} from 'src/constants/watch-ble-command';
import { IReservation } from 'src/models/i-reservation';
import { AlertService } from 'src/services/alert.service';
import { BleService } from 'src/services/ble.service';
import { ExerciseService } from 'src/services/exercise.service';
import { LanguageService } from 'src/services/language.service';
import { LoadingService } from 'src/services/loading.service';
import { LoggerService } from 'src/services/logger.service';
import { ReservationService } from 'src/services/reservation.service';
import { StorageService } from 'src/services/storage.service';
import { WatchCommandService } from 'src/services/watch-command.service';

import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateLoader } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';

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
  isScanned = false;
  connectSubscription: Subscription = null;

  tempExerciseData = [];
  callREQTimes = 0;
  exerciseDateTime: Date;
  hrMixMax: { min: string; max: string };

  callBATTimes = 0;
  sub: Subscription;
  isConnecting$ = new Subject<boolean>();
  constructor(
    public modalController: ModalController,
    private zone: NgZone,
    public ble: BleService,
    private loadingSvc: LoadingService,
    private alertSvc: AlertService,
    private loggerSvc: LoggerService,
    private storageSvc: StorageService,
    private watchCommandSvc: WatchCommandService,
    private exerciseSvc: ExerciseService,
    private reservationSvc: ReservationService,
    private router: Router,
    private languageSvc: LanguageService
  ) {

  }

  async ngOnInit() {
    if (!await this.ble.isConnected()) {
      await this.presentIsConnectModal();
    }
  }

  ionViewWillEnter() {
    this.sub = new Subscription();
    this.sub.add(this.ble.isConnecting$.subscribe(obs => {
      this.zone.run(() => {
        this.isConnecting$.next(obs);
      });
    }));
    this.setSubscriptions();
  }

  setSubscriptions() {
    this.sub.add(
      this.ble.BATService$.subscribe({
        next: async (obs) => {
          const batPattern = new RegExp(/^BAT#[0-9]{1,3}@$/g);
          if (batPattern.test(obs)) {
            this.callBATTimes = 0;
            await this.loadingSvc.dismiss();
            const battery = obs.substring(obs.lastIndexOf('#') + 1, obs.lastIndexOf('@'));;
            await this.zone.run(async () => {
              this.batteryPower = +battery;
              await this.loadingSvc.present();
              await this.watchCommandSvc.sendRND();
            });
          } else {
            if (this.callBATTimes >= 10) {
              await this.loadingSvc.dismiss();
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
        }
      }));

    this.sub.add(this.ble.RNDService$.subscribe(async (obs) => {
      if (obs === RESPONSE_TYPE_HDA) {
        await this.loadingSvc.dismiss();
        await this.loadingSvc.present();
        await this.watchCommandSvc.sendRTS();
        await this.loadingSvc.create(await this.languageSvc.getI18nLang(WAIT_FOR_GETTING_DATA));
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
      const [y, M, d, h, m] = obs.substring(obs.indexOf('#') + 1, obs.lastIndexOf('@')).split('_');
      this.exerciseDateTime = new Date(+('20' + y), +M - 1, +d, +h, +m);
      await this.watchCommandSvc.sendRTH();
    }));

    this.sub.add(this.ble.RTHService$.subscribe(async obs => {
      if (obs === RESPONSE_TYPE_ERR) {
        await this.loadingSvc.dismiss();
      }
      const [min, max] = obs.substring(obs.indexOf('#') + 1, obs.lastIndexOf('@')).split('_');
      this.hrMixMax = { min, max };
      await this.watchCommandSvc.sendRTE();
    }));

    this.sub.add(this.ble.RTEService$.subscribe(async obs => {
      if (obs === RESPONSE_TYPE_ERR) {
        await this.loadingSvc.dismiss();
      }
      await this.watchCommandSvc.sendRHD();
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
        await this.watchCommandSvc.sendREQ();
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
        await this.exerciseSvc.sendExerciseData(prescription, data.rpeValue, this.exerciseData, this.exerciseDateTime, this.hrMixMax, null);
        await this.loadingSvc.present();
        await this.watchCommandSvc.sendRND();
      } else {
        this.callREQTimes++;
        this.tempExerciseData.push(obs);
        await this.watchCommandSvc.sendREQ();
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
    await this.loadingSvc.create(await this.languageSvc.getI18nLang(SCAN));
    await this.loadingSvc.present();
    return this.ble
      .scan()
      .subscribe({
        next: async (device) => {
          this.isScanned = true;
          if (device) {
            if (this.devices.indexOf((d) => d.id === device.id) < 0) {
              this.devices.push(device);
            }
          }
        },
        error: async (e) => {
          await this.loadingSvc.dismiss();
          this.isScanned = true;
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
                title: await this.languageSvc.getI18nLang(SELECT_DEVICE)
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

    this.connectSubscription = this.ble.connect(deviceId)
      .pipe(
        tap(async () => await this.loadingSvc.create(await this.languageSvc.getI18nLang(CONNECTING))),
        tap(async () => await this.loadingSvc.present())
      )
      .subscribe({
        next: async (peripheral) => {
          await this.loadingSvc.dismiss();

          await this.loadingSvc.create(await this.languageSvc.getI18nLang(GETTING_DATA));
          await this.loadingSvc.present();
          this.callBATTimes++;
          await this.watchCommandSvc.sendBAT();
        },
        error: async (e) => {
          this.batteryPower = null;
          await this.loadingSvc.dismiss();
          await this.presentConnectFailedAlert(deviceId);
          // throw new Error(e);
        },
        complete: () => { }
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
          },
        },
        {
          text: await this.languageSvc.getI18nLang(CANCEL),
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
    console.warn('====== leave home page');
  }

  routeToRealtimeExercise() {
    this.reservationSvc.getNowAvailableReservation().subscribe(async availableReservation => {
      if (availableReservation.length > 0) {
        this.router.navigate(['/menu/real-time-exercise'], {
          state: { reserveId: availableReservation[0].id, channelId: availableReservation[0].channelId },
        });
      } else {
        await this.alertSvc.presentAlert(
          await this.languageSvc.getI18nLang(NOT_RESERVED_TIME),
          false
        );
      }
    });
  }

  checkReservationIsAvailableNow(reservations: IReservation[]) {
    return reservations
      .filter((reservation) => reservation.approvalResult)
      .filter((reservation) => this.checkIsBefore5Minutes(reservation.from, reservation.to)) || [];
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
