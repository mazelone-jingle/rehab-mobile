import { SharedPipesModule } from 'src/pipes/shared-pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationAndLanguageSettingPageRoutingModule } from './notification-and-language-setting-routing.module';

import { NotificationAndLanguageSettingPage } from './notification-and-language-setting.page';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { map } from 'rxjs/operators';
import { LanguageService } from 'src/services/language.service';
import { HttpClient } from '@angular/common/http';
import { NotificationDetailPage } from './notification/notification-detail/notification-detail.page';
import { NotificationPage } from './notification/notification.page';

const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/noti-and-lang-setting/', '.json');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationAndLanguageSettingPageRoutingModule,
    SharedPipesModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [
    NotificationAndLanguageSettingPage,
    NotificationPage,
    NotificationDetailPage
  ],
})
export class NotificationAndLanguageSettingPageModule {
  language$ = this.languageService.language$;
    constructor(
        private translateService: TranslateService,
        private languageService: LanguageService,
    ) {
        this.language$.pipe(map(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
}
