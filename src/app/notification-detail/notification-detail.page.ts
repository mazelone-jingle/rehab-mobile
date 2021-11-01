import { INotification, NotificationSettingService } from './../../services/notification-setting.service';
import { DetailListModalComponent } from 'src/components/modals/detail-list-modal/detail-list-modal.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import Picker from 'pickerjs';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { ILocalNotification } from '@ionic-native/local-notifications';
import { PushNotificationService } from 'src/services/push-notification.service';

const WEEKDAY_DATA_LIST = [{
  text: '월요일',
  eng: 'mon',
  id: 1,
}, {
  text: '화요일',
  eng: 'tue',
  id: 2,
}, {
  text: '수요일',
  eng: 'wed',
  id: 3,
}, {
  text: '목요일',
  eng: 'thu',
  id: 4,
}, {
  text: '금요일',
  eng: 'fri',
  id: 5,
}, {
  text: '토요일',
  eng: 'sat',
  id: 6,
}, {
  text: '일요일',
  eng: 'sun',
  id: 7,
}];

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.page.html',
  styleUrls: ['./notification-detail.page.scss'],
})
export class NotificationDetailPage implements OnInit, OnDestroy {
  picker: Picker;
  repeatWeekday: any[];
  notificationTime: string;
  notificationSound: boolean;
  notificationVibration: boolean;
  notificationMusic: string;
  notificationId: number;
  notificationStatus: boolean;

  constructor(
    private modalController: ModalController,
    private fileChooser: FileChooser,
    private route: ActivatedRoute,
    private notificationSettingSvc: NotificationSettingService,
    private router: Router,
    private zone: NgZone,
    private pushNotificationSvc: PushNotificationService) {
      route.params.subscribe(async params => {
        this.notificationId = +params.id;
        await this.notificationSettingSvc.getNotificationById(this.notificationId)
        .then(notification => {
          this.zone.run(() => {
            this.notificationStatus = notification.status;
            this.notificationTime = notification.time;
            this.notificationSound = notification.sound;
            this.notificationVibration = notification.vibration;
            this.notificationMusic = notification.music;
            this.repeatWeekday = notification.repeatWeekday;
            this.createTimePicker();
          });
        });
      });
    }

  ngOnInit() {}

  async back() {
    const updatedNotification: INotification = {
      id: this.notificationId,
      status: this.notificationStatus,
      time: this.picker.getDate(true).toString() || this.notificationTime,
      sound: this.notificationSound,
      vibration: this.notificationVibration,
      music: this.notificationMusic,
      repeatWeekday: this.repeatWeekday
    };
    await this.notificationSettingSvc.saveNotificationById(this.notificationId, updatedNotification).then(()=> {
      this.pushNotificationSvc.setNotification(updatedNotification);
      this.notificationSettingSvc.updateNotification.next(true);
    });
  }

  createTimePicker() {
      this.picker = new Picker(document.querySelector('.js-inline-picker'), {
        controls: true,
        inline: true,
        format: 'H:mm',
        rows: 3,
        date: this.notificationTime
      });
  }

  async showWeekDayModal() {
    const modal = await this.modalController.create({
      component: DetailListModalComponent,
      componentProps: {
        title: '알람 반복 요일',
        dataList: WEEKDAY_DATA_LIST,
        currValue: (this.repeatWeekday) || [],
        isChooseMulti: true
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data.chosenData) {
      this.repeatWeekday = data.chosenData;
    }
  }

  async toggleSound($event) {
    this.notificationSound = $event.detail.checked;
  }

  async toggleVibration($event) {
    this.notificationVibration = $event.detail.checked;
  }

  async openFileManager() {
    await this.fileChooser.open({mime: 'audio/wav'}).then(async fileUrl => {
      this.notificationMusic = fileUrl;
    });
  }

  async ngOnDestroy() {
    await this.back();
  }
}
