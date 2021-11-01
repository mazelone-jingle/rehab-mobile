import { LoggerService } from './logger.service';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { NOTIFICATION_LIST } from 'src/constants/storage-key';
import { Subject } from 'rxjs';
import { ILocalNotification } from '@ionic-native/local-notifications';

export interface INotification {
  id: number;
  status: boolean;
  time: string;
  sound: boolean;
  vibration: boolean;
  music: string;
  repeatWeekday: any[];
}

@Injectable({
  providedIn: 'root'
})
export class NotificationSettingService {
  updateNotification = new Subject();
  constructor(private storageSvc: StorageService, private loggerSvc: LoggerService) { }

  async getNotificationList(): Promise<INotification[]> {
    const res = await this.storageSvc.get(NOTIFICATION_LIST);
    return res? res : [];
  }

  async addNewNotification() {
    const id = Date.now();
    return await this.getNotificationList().then(async notificationList => {
      const notification: INotification = {
        id,
        status: true,
        time: '',
        sound: true,
        vibration: true,
        music: '',
        repeatWeekday: []
      };
      if (notificationList) {
        notificationList.push(notification);
      } else {
        notificationList = [notification];
      }
      return await this.storageSvc.set(NOTIFICATION_LIST, notificationList).then(() => id);
    });
  }

  async getNotificationById(id: number): Promise<INotification> {
    return await this.getNotificationList().then(notificationList => notificationList.filter(notification => notification.id === id)[0]);
  }

  async saveNotificationById(id: number, updatedNotification: INotification): Promise<void> {
    await this.getNotificationList().then(async notificationList => {
      const newList = notificationList.map(notification => {
        if (notification.id === id) {
          return updatedNotification;
        }
        return notification;
      });
      await this.storageSvc.set(NOTIFICATION_LIST, newList);
    });
  }

  async updateNotificationWithProperties(id: number, propertyKey: string, value: any): Promise<void> {
    await this.getNotificationList().then(async notificationList => {
      const newList = notificationList.map(notification => {
        if (notification.id === id) {
          notification[propertyKey] = value;
          this.loggerSvc.log(notification);
          return notification;
        }
        return notification;
      });
      await this.storageSvc.set(NOTIFICATION_LIST, newList);
    });
  }
}
