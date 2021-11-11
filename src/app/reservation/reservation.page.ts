import { forkJoin } from 'rxjs';
import { LANG_KO } from 'src/constants/common';
import { EXERCISE_RESERVATION, RESERVATION_DONE } from 'src/constants/language-key';
import { ICalendarDate } from 'src/models/i-calendar-date';
import { ICalendarEvent } from 'src/models/i-calendar-event';
import { IConsultation } from 'src/models/i-consultation';
import { IReservation } from 'src/models/i-reservation';
import { AuthService } from 'src/services/auth.service';
import { CommonService } from 'src/services/common.service';
import { ConsultationService } from 'src/services/consultation.service';
import { LanguageService } from 'src/services/language.service';
import { LoggerService } from 'src/services/logger.service';
import { ReservationService } from 'src/services/reservation.service';

import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  // calendar properties
  isToday: boolean;
  eventSource: Array<ICalendarEvent<IConsultation>>;
  selectedDate: ICalendarDate;
  calendarTitle: string;
  calendar = {
    // locale: 'ko-KR',
    currentDate: new Date(),
    step: 30,
    dateFormatter: {
      formatMonthViewDay: (date: Date) => date.getDate().toString(),
      formatMonthViewDayHeader: (date: Date) => {
        if (this.languageSvc.getCurrentLang() === LANG_KO) {
          switch (date.getDay()) {
            case 0: {
              return '일';
            }
            case 1: {
              return '월';
            }
            case 2: {
              return '화';
            }
            case 3: {
              return '수';
            }
            case 4: {
              return '목';
            }
            case 5: {
              return '금';
            }
            case 6: {
              return '토';
            }
          }
        } else {
          switch (date.getDay()) {
            case 0: {
              return 'Sun';
            }
            case 1: {
              return 'Mon';
            }
            case 2: {
              return 'Tue';
            }
            case 3: {
              return 'Wed';
            }
            case 4: {
              return 'Thu';
            }
            case 5: {
              return 'Fri';
            }
            case 6: {
              return 'Sat';
            }
          }
        }
      },
      formatMonthViewTitle: (date: Date) => {
        if (this.languageSvc.getCurrentLang() === LANG_KO) {
          return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
        } else {
          return `${date.getFullYear()}/${date.getMonth() + 1}`;
        }
      },
      formatWeekViewDayHeader: (date: Date) => 'MonWH',
      formatWeekViewTitle: (date: Date) => 'testWT',
      formatWeekViewHourColumn: (date: Date) => 'testWH',
      formatDayViewHourColumn: (date: Date) => 'testDH',
      formatDayViewTitle: (date: Date) => 'testDT',
    },
  };
  constructor(
    private logger: LoggerService,
    private consultationSvc: ConsultationService,
    private reservationSvc: ReservationService,
    private authSvc: AuthService,
    private commonSvc: CommonService,
    private router: Router,
    private zone: NgZone,
    private languageSvc: LanguageService,
  ) {}

  ngOnInit() {
    // this.getScheduleList(new Date()).subscribe(this.scheduledList.bind(this));
  }

  scheduledList(res: ICalendarEvent<IConsultation[]>[]) {
    this.zone.run(() => {
      if (res.length > 0) {
        this.eventSource = res
          .map((v) => {
            if (v.data.length > 0) {
              return v.data
              .filter(data => {
                const now = new Date();
                now.setHours(now.getHours(), 0, 0, 0);
                return new Date(data.from).getTime() >= now.getTime();
              })
              .map((data) => {
                const event: ICalendarEvent<IConsultation> = {
                  title: data.description,
                  startTime: new Date(data.from),
                  endTime: new Date(data.to),
                  allDay: false,
                  data,
                };
                return event;
              });
            } else {
              const event: ICalendarEvent<IConsultation> = {
                title: '',
                startTime: new Date(v.startTime),
                endTime: new Date(v.endTime),
                allDay: false,
                data: null,
              };
              return [event];
            }
          })
          .reduce((prev, curr) => prev.concat(curr));
      } else {
        this.eventSource = [];
      }
    });
  }

  checkCanJoinChattingRoom(dateFrom: Date, dateTo: Date) {
    const now = new Date().getTime();
    const reservationDateFrom = new Date(dateFrom).getTime();
    const reservationDateTo = new Date(dateTo).getTime();
    const min = 5;
    const availableDateFrom = reservationDateFrom - min * 60 * 1000;
    return reservationDateTo >= now && availableDateFrom <= now;
  }

  // #region calendar settings
  onCurrentDateChanged(event: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
    forkJoin([
      this.getScheduleListByDate(event),
      this.getScheduleList(event),
    ]).subscribe((obs) => {
      const monthData = obs[1];
      const dailyData = obs[0];
      const arrangedData = monthData
        .filter((date) => new Date(date).getTime() >= today.getTime())
        .map(
          (data) =>
            ({
              title: '',
              startTime: data,
              endTime: data,
              allDay: false,
              data: [],
            } as ICalendarEvent<IConsultation[]>)
        )
        .map((res) => {
          const from = new Date(res.startTime);
          if (from.getTime() === event.getTime()) {
            res.data = dailyData;
          }
          return res;
        });
      this.scheduledList(arrangedData);
    });
    this.logger.log('on Current date changed', event);
  }

  onEventSelected($event: any) {
    this.logger.log('event data ? ', $event.data);
    const reservation: IReservation = {
      consultationId: $event.data.id,
      from: $event.data.from,
      patientEmail: this.authSvc.username,
      to: $event.data.to,
      userEmail: $event.data.userEmail,
    };

    this.reservationSvc.create(reservation).subscribe(async (res: IReservation) => {
      this.onCurrentDateChanged(this.selectedDate.selectedTime);

      //예약완료
      await this.commonSvc
        .presentToast(
          await this.languageSvc.getI18nLang(EXERCISE_RESERVATION),
          await this.languageSvc.getI18nLang(RESERVATION_DONE));
    });
  }

  async joinChat(reservation: IReservation) {
    this.router.navigate(['/menu/real-time-exercise'], {
      state: { reserveId: reservation.id, channelId: reservation.channelId },
    });
  }

  onViewTitleChanged(title: any) {
    this.calendarTitle = title;
  }

  getScheduleListByDate(selectedDate: Date) {
    this.logger.log(this.authSvc.username);
    return this.consultationSvc.getByDate(selectedDate);
  }

  getScheduleList(selectedDate: Date) {
    this.logger.log(this.authSvc.username);
    return this.consultationSvc.getByMonth(selectedDate);
  }

  onTimeSelected($event: ICalendarDate) {
    this.zone.run(() => {
      this.selectedDate = $event;
    });
    this.logger.log('Selected Date - ', $event);
  }
  // #endregion
}
