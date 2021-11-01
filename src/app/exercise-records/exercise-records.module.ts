import { SharedPipesModule } from 'src/pipes/shared-pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { NgCalendarModule } from 'ionic2-calendar';
import { map } from 'rxjs/operators';
import { LanguageService } from 'src/services/language.service';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ExerciseRecordsPageRoutingModule } from './exercise-records-routing.module';
import { ExerciseRecordsPage } from './exercise-records.page';
import { ExerciseDetailPage } from './exercise-detail/exercise-detail.page';

const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/exercise-records/', '.json');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseRecordsPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
    NgCalendarModule,
    ComponentsModule,
    SharedPipesModule
  ],
  declarations: [ExerciseRecordsPage, ExerciseDetailPage],
})
export class ExerciseRecordsPageModule {
  language$ = this.languageService.language$;
    constructor(
        private translateService: TranslateService,
        private languageService: LanguageService,
    ) {
        this.language$.pipe(map(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
}
