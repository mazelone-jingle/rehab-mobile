import { Subscription, throwError } from 'rxjs';
import { DevicesModalComponent } from 'src/components/modals/devices-modal/devices-modal.component';
import {
    ASK_TO_SEND_PRESCRIPTION_TO_WATCH, CANCEL, CONFIRM, FINISHED_SETTING, GETTING_DATA, SCAN,
    SCAN_FAILED, SELECT_DEVICE, SENT_PRESCRIPTION_TO_WATCH, CONNECTING, CONNECT_FAILED
} from 'src/constants/language-key';
import {
    RESPONSE_TYPE_STE, RESPONSE_TYPE_STH, RESPONSE_TYPE_STS
} from 'src/constants/watch-ble-command';
import { AlertService } from 'src/services/alert.service';
import { AuthService } from 'src/services/auth.service';
import { BleService } from 'src/services/ble.service';
import { ExerciseSettingService } from 'src/services/exercise-setting.service';
import { LanguageService } from 'src/services/language.service';
import { LoadingService } from 'src/services/loading.service';
import { LoggerService } from 'src/services/logger.service';
import { IPrescription, PrescriptionService } from 'src/services/prescription.service';
import { PushNotificationService } from 'src/services/push-notification.service';
import { WatchCommandService } from 'src/services/watch-command.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exercise-setting',
  templateUrl: './exercise-setting.page.html',
  styleUrls: ['./exercise-setting.page.scss'],
})
export class ExerciseSettingPage implements OnInit {
  prescription: IPrescription;
  devices: Array<any> = [];
  peripheral: any;
  rateArray: number[] = [];
  connectSubscription: Subscription = null;
  callBATTimes: number;
  sub: Subscription;
  constructor(
    private exerciseSettingSvc: ExerciseSettingService,
    private ble: BleService,
    private alertSvc: AlertService,
    private pushNotificationSvc: PushNotificationService,
    private authSvc: AuthService,
    private prescriptionSvc: PrescriptionService,
    private loadingSvc: LoadingService,
    private modalController: ModalController,
    private router: Router,
    private watchCommandSvc: WatchCommandService,
    private loggerSvc: LoggerService,
    private languageSvc: LanguageService
  ) {
  }

  async ngOnInit() {
    this.prescription = await this.exerciseSettingSvc.getLatestPrescriptionFromStorage();
  }

  ionViewWillEnter() {
    this.sub = new Subscription();
    this.setSubscriptions();
  }

  async setExerciseInfoData() {
    await this.loadingSvc.create(await this.languageSvc.getI18nLang(GETTING_DATA));
    await this.loadingSvc.present();
    await this.watchCommandSvc.sendBAT();
  }

  setSubscriptions() {
    this.sub.add(this.ble.BATService$
      .subscribe({
      next: async (obs) => {
        if (this.router.url.includes('exercise-setting')) {
          const batPattern = new RegExp(/^BAT#[0-9]{1,3}@$/g);
          if (batPattern.test(obs)) {
            this.callBATTimes = 0;
            await this.loadingSvc.dismiss();
            await this.watchCommandSvc.sendSTS();
          } else {
            if (this.callBATTimes >= 10) {
              await this.ble.disconnect();
              await this.presentScanFailedAlert();
            } else {
              this.callBATTimes++;
              await this.watchCommandSvc.sendBAT();
            }
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

    this.sub.add(this.ble.STSService$
      .subscribe({
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
      }
    }));

    this.sub.add(this.ble.STHService$
      .subscribe({
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
      }
    }));

    this.sub.add(this.ble.STEService$
      .subscribe({
      next: async obs => {
        if (obs.includes(RESPONSE_TYPE_STE)) {
          const msg = await this.languageSvc.getI18nLang(SENT_PRESCRIPTION_TO_WATCH);
          await this.alertSvc.presentAlert(msg, false, async () => {
            await this.ble.disconnect();
          });
        }
      },
      error: (err) => {
        this.loggerSvc.error('STE error', err);
      },
      complete: () => {
        this.loggerSvc.info('STE complete');
      }
    }));
  }

  async startExercise() {
    if (await this.ble.isConnected()) {
      this.alertSvc.presentCustomizeAlert(
        {
          message: await this.languageSvc.getI18nLang(ASK_TO_SEND_PRESCRIPTION_TO_WATCH),
          buttons: [
            {
              text: await this.languageSvc.getI18nLang(FINISHED_SETTING),
              handler: async () => {
                this.setExerciseInfoData();
              },
            },
            {
              text: await this.languageSvc.getI18nLang(CANCEL),
              handler: () => {
              },
            },
          ],
          backdropDismiss: false,
        });
    } else {
      this.scanBLE();
    }
  }

  async scanBLE() {
    this.devices = [];
    await this.loadingSvc.create(await this.languageSvc.getI18nLang(SCAN));
    await this.loadingSvc.present();
    return this.ble.scan()
      .subscribe({
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
    await this.loadingSvc.create(await this.languageSvc.getI18nLang(CONNECTING));
    await this.loadingSvc.present();
    this.connectSubscription = this.ble
      .connect(deviceId)
      .subscribe({
        next: async (peripheral) => {
          await this.loadingSvc.dismiss();
          this.peripheral = peripheral;
          this.setExerciseInfoData();
        },
        error: async (e) => {
          // this.ble.connectStatus = false;
          await this.loadingSvc.dismiss();
          await this.presentConnectFailedAlert(deviceId);
        },
        complete: () => {}
      });
    return this.connectSubscription as Subscription;
  }

  async presentConnectFailedAlert(deviceId) {
    const alertOptions = {
      message: await this.languageSvc.getI18nLang(CONNECT_FAILED),
      buttons: [
        {
          text: await this.languageSvc.getI18nLang(CONFIRM),
          handler: async () => {
            await this.connect(deviceId);
          },
        },
        {
          text: await this.languageSvc.getI18nLang(CANCEL),
          handler: async () => {
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
}
