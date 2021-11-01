import { EmergencyComponent } from './../../components/message/emergency/emergency.component';
import { SharedPipesModule } from 'src/pipes/shared-pipes.module';
import { ChatPage } from '../../components/chat/chat.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealTimeExercisePageRoutingModule } from './real-time-exercise-routing.module';

import { RealTimeExercisePage } from './real-time-exercise.page';
import { TextComponent } from 'src/components/message/text/text.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { map } from 'rxjs/operators';
import { LanguageService } from 'src/services/language.service';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/real-time-exercise/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealTimeExercisePageRoutingModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      },
      isolate: true
    }),
    SharedPipesModule
  ],
  declarations: [RealTimeExercisePage, ChatPage, TextComponent, EmergencyComponent],
})
export class RealTimeExercisePageModule {
  language$ = this.languageService.language$;
    constructor(
        private translateService: TranslateService,
        private languageService: LanguageService,
    ) {
        this.language$.pipe(map(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
}
