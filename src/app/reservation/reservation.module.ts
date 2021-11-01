import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';

import { NgCalendarModule } from 'ionic2-calendar';
import { SharedModule } from 'src/modules/shared.module';
import { ConsultationService } from 'src/services/consultation.service';
import { ReservationService } from 'src/services/reservation.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPageRoutingModule,
    SharedModule,
    NgCalendarModule,
  ],
  providers: [ConsultationService, ReservationService],
  declarations: [ReservationPage],
})
export class ReservationPageModule {}
