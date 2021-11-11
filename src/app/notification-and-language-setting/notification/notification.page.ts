import { PushNotificationService } from '../../../services/push-notification.service';
import { INotification, NotificationSettingService } from '../../../services/notification-setting.service';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { NOTIFICATION_STATUS } from 'src/constants/storage-key';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notificationTime: any = '';
  notificationList: INotification[] = [];

  constructor(
    private zone: NgZone,
    private notiStorageSvc: NotificationSettingService,
    private router: Router,
    private pushNotificationSvc: PushNotificationService
    ) {
    this.notiStorageSvc.updateNotification.subscribe(async obs => {
      if (obs) {
        await this.zone.run(async () => {
          this.notificationList = await this.notiStorageSvc.getNotificationList();
        });
      }
    });
  }

  async ngOnInit() {
    this.notificationList = await this.notiStorageSvc.getNotificationList();
  }

  async addNotification() {
    await this.notiStorageSvc.addNewNotification().then(id => {
      this.router.navigate(['/menu/noti-lang/noti/detail', id]);
    });
  }

  async toggleNotification($event, id) {
    this.notificationList.map(async notification => {
      if (notification.id === id) {
        notification[NOTIFICATION_STATUS] = $event.detail.checked;
        if (!$event.detail.checked) {
          notification.repeatWeekday.forEach(async weekday => {
            await this.pushNotificationSvc.deleteNotificationById(+`${id}${weekday.id}`);
          });
        } else {
          this.pushNotificationSvc.setWeeklyNotification(notification);
        }
        return notification;
      }
    });
    await this.notiStorageSvc.updateNotificationWithProperties(id, NOTIFICATION_STATUS, $event.detail.checked);
  }

  async getNotifications() {
    await this.pushNotificationSvc.getScheduledNotifications();
  }

  async clearAllNotification() {
    await this.pushNotificationSvc.clearAllNotification();
  }

}
