import { WEEKDAYS } from './../constants/common';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import {
    ELocalNotificationTriggerUnit, ILocalNotification, ILocalNotificationEvery, LocalNotifications
} from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

import { AlertService } from './alert.service';
import { INotification } from './notification-setting.service';
import { NOTIFICATION_LIST } from 'src/constants/storage-key';

declare const cordova;

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(
    private localNotifications: LocalNotifications,
    private platForm: Platform,
    private alertSvc: AlertService,
    private storageSvc: StorageService
    ) {
    this.platForm.ready().then(() => {
      this.localNotifications.on('click').subscribe(async res => {
        // console.log('click:', res);
      //   let msg = res.data ? res.data.page : ''
      //   await this.alertSvc.presentCustomizeAlert({
      //     message: msg,
      //     title: res.title,
      //     subTitle: res.text,
      //     backDropDismiss:  false,
      //     buttons: [{
      //       text: '확인',
      //     }]
      //   })
      });

      this.localNotifications.on('trigger').subscribe(async res => {
        // console.log('trigger:', res);
      //   let msg = res.data ? res.data.page : ''
      //   await this.alertSvc.presentCustomizeAlert({
      //     message: msg,
      //     title: res.title,
      //     subTitle: res.text,
      //     backDropDismiss:  false,
      //     buttons: [{
      //       text: '확인',
      //     }]
      //   })
      });
    });
  }
/*
  prepareNotification(title: string, text: string) {
    this.localNotifications.schedule({
      title,
      text,
    });
  }

  scheduleNotification2(title: string, text: string) {
    this.localNotifications.schedule({
      title,
      text,
      data: {data: 'routing...'},
      trigger: {in: 5, unit: ELocalNotificationTriggerUnit.SECOND},
      foreground: true
    });
  }

  recurringNotification(title: string, text: string) {
    this.localNotifications.schedule({
      title,
      text,
      data: {page: 'routing...'},
      trigger: {in: 5, unit: ELocalNotificationTriggerUnit.SECOND},
      foreground: true
    });
  }
*/
  setWeeklyNotification(notification: INotification) {
    notification.repeatWeekday.forEach((weekday) => {
      const hour = +notification.time.substring(0, notification.time.indexOf(':'));
      const minute = +notification.time.substring(notification.time.indexOf(':') + 1);
      const alarm =  {
        id: +`${notification.id}${weekday.id}`,
        title: '운동시간입니다',
        text: '운동합시다!!!',
        // data: { page: 'routing...' },
        vibrate: notification.vibration,
        silent: !notification.sound,
        sound: notification.music,
        count: 1,
        trigger: {
          every: { weekday: weekday.id, hour, minute, second: 0 } as ILocalNotificationEvery,
        },
        foreground: true,
      };
      this.scheduleNotification(alarm);
    });
  }

  scheduleNotification(options: ILocalNotification) {
    this.localNotifications.schedule(options);
  }

  async deleteNotificationById(id: number) {
    await this.localNotifications.cancel(id);
  }

  async getScheduledNotifications() {
    const notis = await this.localNotifications.getAll();
  }

  async clearAllNotification() {
    await this.localNotifications.cancelAll();
    await this.localNotifications.clearAll();
    await this.storageSvc.remove(NOTIFICATION_LIST);
  }

}
