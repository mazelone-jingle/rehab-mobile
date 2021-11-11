import { Router } from '@angular/router';
import { LanguageService } from './../../services/language.service';
import { Component, OnInit } from '@angular/core';
import { LANG_KO } from 'src/constants/common';

@Component({
  selector: 'app-notification-and-language-setting',
  templateUrl: './notification-and-language-setting.page.html',
  styleUrls: ['./notification-and-language-setting.page.scss'],
})
export class NotificationAndLanguageSettingPage implements OnInit {
  currLang: string;
  constructor(
    private languageSvc: LanguageService,
    private router: Router
    ) { }

  async ngOnInit() {
    await this.getCurrLang();
  }

  async getCurrLang() {
    const setLang = await this.languageSvc.getLangLastSetting();
    if (setLang) {
      this.currLang = setLang;
    } else {
      this.currLang = LANG_KO;
    }
  }

  async setLanguage() {
    await this.languageSvc.setLang(this.currLang);
  }

  navToNotification() {
    this.router.navigate(['/menu/noti-lang/noti']);
  }

}
