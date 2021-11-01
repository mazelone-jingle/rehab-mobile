import { PushNotificationService } from '../../../services/push-notification.service';
import { Subject } from 'rxjs';
import { INotification, NotificationSettingService } from '../../../services/notification-setting.service';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { NOTIFICATION_STATUS, NOTIFICATION_TIME } from 'src/constants/storage-key';
import { ILocalNotification } from '@ionic-native/local-notifications/ngx';

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
    private notificationSettingSvc: NotificationSettingService,
    private router: Router,
    private pushNotificationSvc: PushNotificationService
    ) {
    this.notificationSettingSvc.updateNotification.subscribe(async obs => {
      if (obs) {
        await this.zone.run(async () => {
          this.notificationList = await this.notificationSettingSvc.getNotificationList();
        });
      }
    });
  }

  async ngOnInit() {
    this.notificationList = await this.notificationSettingSvc.getNotificationList();
  }

  async addNotification() {
    await this.notificationSettingSvc.addNewNotification().then(id => {
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
          this.pushNotificationSvc.setNotification(notification);
        }
        return notification;
      }
    });
    await this.notificationSettingSvc.updateNotificationWithProperties(id, NOTIFICATION_STATUS, $event.detail.checked);
  }

  async getNotifications() {
    await this.pushNotificationSvc.getScheduledNotifications();
  }

  async clearAllNotification() {
    await this.pushNotificationSvc.clearAllNotification();
  }

}
