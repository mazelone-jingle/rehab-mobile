import { SharedPipesModule } from 'src/pipes/shared-pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationDetailPageRoutingModule } from './notification-detail-routing.module';

import { NotificationDetailPage } from './notification-detail.page';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { map } from 'rxjs/operators';
import { LanguageService } from 'src/services/language.service';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/notification-detail/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationDetailPageRoutingModule,
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
  declarations: [NotificationDetailPage]
})
export class NotificationDetailPageModule {
  language$ = this.languageService.language$;
    constructor(
        private translateService: TranslateService,
        private languageService: LanguageService,
    ) {
        this.language$.pipe(map(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
}
