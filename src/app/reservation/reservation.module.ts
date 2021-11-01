import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';

import { NgCalendarModule } from 'ionic2-calendar';
import { ConsultationService } from 'src/services/consultation.service';
import { ReservationService } from 'src/services/reservation.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/reservation/', '.json');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPageRoutingModule,
    NgCalendarModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      },
      isolate: true
    }),
  ],
  providers: [ConsultationService, ReservationService],
  declarations: [ReservationPage],
})
export class ReservationPageModule {}
