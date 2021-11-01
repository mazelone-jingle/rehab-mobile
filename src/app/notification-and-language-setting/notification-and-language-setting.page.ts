import { Router } from '@angular/router';
import { LanguageService } from './../../services/language.service';
import { StorageService } from './../../services/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/constants/storage-key';
import { LANG_KO } from 'src/constants/common';

@Component({
  selector: 'app-notification-and-language-setting',
  templateUrl: './notification-and-language-setting.page.html',
  styleUrls: ['./notification-and-language-setting.page.scss'],
})
export class NotificationAndLanguageSettingPage implements OnInit {
  currLang: string;
  constructor(private languageSvc: LanguageService, private router: Router) { }

  async ngOnInit() {
    await this.getCurrLang();
  }

  async getCurrLang() {
    const settedLang = await this.languageSvc.getLangLastSetting();
    if (settedLang) {
      this.currLang = settedLang;
    } else {
      this.currLang = LANG_KO;
    }
  }

  async setLanguage() {
    await this.languageSvc.setLang(this.currLang);
  }

  navToNotification() {
    this.router.navigate(['./notification']);
  }

}
