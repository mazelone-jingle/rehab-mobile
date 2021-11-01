import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from './../services/alert.service';
import { LanguageService } from './../services/language.service';
import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { LANG } from 'src/constants/storage-key';
import { LANG_KO } from 'src/constants/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    private platform: Platform,
    private androidPermissions: AndroidPermissions,
    private storageSvc: StorageService,
    private languageSvc: LanguageService,
    private translateSvc: TranslateService,
    private screenOrientation: ScreenOrientation) {
      this.initailizeApp();
  }

  initailizeApp() {
    this.platform.ready().then(async () => {
      await this.storageSvc.init();
      this.languageSvc.setInitState();
      await this.languageSvc.getAndSetLastSetting();
      await this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      await this.androidPermissions.requestPermissions(
        [
          // this.androidPermissions.PERMISSION.ACCESS_NOTIFICATION_POLICY,
          this.androidPermissions.PERMISSION.BLUETOOTH,
          this.androidPermissions.PERMISSION.LOCATION
        ]
      );
    });
  }

  async ngOnInit() { }
}
