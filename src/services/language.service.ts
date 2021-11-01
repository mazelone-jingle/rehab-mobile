import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { LANG } from 'src/constants/storage-key';
import { LANG_EN, LANG_KO } from 'src/constants/common';
//import { LANG_EN, LANG_KO } from 'src/constants/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language$ = new ReplaySubject<LangChangeEvent>(1);
  translate = this.translateService;

  constructor(
    private translateService: TranslateService,
    private storage: Storage
  ) {}

  setInitState() {
    this.translateService.addLangs([LANG_EN, LANG_KO]);
  }

  async setLang(lang: string) {
    this.translateService.onLangChange.pipe(take(1)).subscribe((result) => {
      this.language$.next(result);
    });
    this.translateService.use(lang);
    await this.storage.set(LANG, lang);
  }

  async getAndSetLastSetting() {
    const lastSetting = await this.getLangLastSetting();
    if (lastSetting) {
      await this.setLang(lastSetting);
    } else {
      await this.setLang(LANG_KO);
    }
  }

  async getLangLastSetting() {
    return await this.storage.get(LANG);
  }
}
