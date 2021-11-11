import { Chart } from 'chart.js';
import { BehaviorSubject } from 'rxjs';
import {
    DetailListModalComponent
} from 'src/components/modals/detail-list-modal/detail-list-modal.component';
import {
    EXERCISE_PERIOD, HOUR, MINUTE, MINUTES, ONE_MONTH, ONE_WEEK, ONE_YEAR, SECONDS, SIX_MONTHS,
    THREE_MONTHS
} from 'src/constants/language-key';
import { ExerciseRecordsService } from 'src/services/exercise-records.service';
import { ExerciseService } from 'src/services/exercise.service';
import { LanguageService } from 'src/services/language.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LANG_KO } from 'src/constants/common';

@Component({
  selector: 'app-exercise-records',
  templateUrl: './exercise-records.page.html',
  styleUrls: ['./exercise-records.page.scss'],
})
export class ExerciseRecordsPage implements OnInit {
  segmentStatusSubject = new BehaviorSubject<string>('summary');
  segmentStatus$ = this.segmentStatusSubject.asObservable();
  segmentStatus = 'summary';
  period: {text: string; id: string};
  today: number;
  // prescription: IPrescription;
  exerciseRecords: any;

  // calendar properties
  isToday: boolean;
  eventSource: any;
  viewTitle: any;
  eventDetail: any;
  calendar = {
    // locale: 'ko-KR', // Default value: undefined (which means the local language)
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
      formatWeekViewDayHeader: () => 'MonWH',
      formatWeekViewTitle: () => 'testWT',
      formatWeekViewHourColumn: () => 'testWH',
      formatDayViewHourColumn: () => 'testDH',
      formatDayViewTitle: () => 'testDT',
    }
  };
  selectedTime: any;

  // chart properties
  canvas: HTMLCanvasElement;
  chart: any = [];
  pieChartData: { exerciseTimes: number; exerciseTotalTime: number; thrRetention: number };
  constructor(
    private modalController: ModalController,
    private exerciseRecordsSvc: ExerciseRecordsService,
    private router: Router,
    private exerciseSvc: ExerciseService,
    private languageSvc: LanguageService
  ) {
    this.segmentStatus$.subscribe(segment => {
      if (segment === 'summary') {
        this.segmentStatus = segment;
        if (document.getElementById('pieChart')) {
          document.getElementById('pieChart').removeChild(this.canvas);
        }

      }
    });
  }
  async ngOnInit() {
    // set period default value
    this.period = {text: await this.languageSvc.getI18nLang(ONE_WEEK), id: 'oneWeek'};

    this.today = new Date().getTime();
    this.getExerciseRecords();
  }

  getExerciseRecords() {
    this.exerciseSvc.getExerciseRecords(1, 1000).subscribe(async exerciseRecords => {
      this.eventSource = this.exerciseRecordsSvc.handleExerciseAllRecords(exerciseRecords);
      this.exerciseRecords = exerciseRecords;
      if (exerciseRecords) {
        await this.exerciseRecordsSvc.getExercisePeriodRecords(exerciseRecords, this.period.id).then(res => {
          this.pieChartData = res;
          this.createPieChart();
        });
      }
    });
  }

  segmentChanged(e) {
    this.segmentStatusSubject.next(e.detail.value);
  }

  async getPeriodList() {
    return [{
      text: await this.languageSvc.getI18nLang(ONE_WEEK),
      id: 'oneWeek',
    }, {
      text: await this.languageSvc.getI18nLang(ONE_MONTH),
      id: 'oneMonth'
    }, {
      text: await this.languageSvc.getI18nLang(THREE_MONTHS),
      id: 'threeMonths'
    }, {
      text: await this.languageSvc.getI18nLang(SIX_MONTHS),
      id: 'sixMonths'
    }, {
      text: await this.languageSvc.getI18nLang(ONE_YEAR),
      id: 'oneYear'
    }];
  }

  async showPeriodDetail() {
    const modal = await this.modalController.create({
      component: DetailListModalComponent,
      componentProps: {
        title: await this.languageSvc.getI18nLang(EXERCISE_PERIOD),
        dataList: await this.getPeriodList(),
        currValue: this.period.id
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data.chosenData) {
      this.period = data.chosenData;
      document.getElementById('pieChart').removeChild(this.canvas);
      this.exerciseRecordsSvc.getExercisePeriodRecords(this.exerciseRecords, this.period.id).then(res => {
        this.pieChartData = res;
        this.createPieChart();
      });
    }
  }

  createPieChart() {
    this.canvas = document.createElement('canvas');
    const ctx = this.canvas.getContext('2d');

    setTimeout(() => {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [''],
          datasets: [
            {
              label: '3123',
              data: [this.pieChartData.thrRetention, 100 - this.pieChartData.thrRetention],
              backgroundColor: ['#3957bb', '#aaaaaa'],
            }
          ]
        },
        options: {
          cutoutPercentage: 70,
          legend: {
            display: false
          },
          events: []
        },
      });
    }, 100);
    const location = document.getElementById('pieChart');
    location.appendChild(this.canvas);
  }

  // #region calendar settings
  onCurrentDateChanged(event: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  onEventSelected() {
    // this.logger.log('Event selected:' + $event.startTime + '-' + $event.endTime + ',' + $event.title);
  }

  onViewTitleChanged(title: any) {
    this.viewTitle = title;
  }

  async onTimeSelected($event: any) {
    const textHour = await this.languageSvc.getI18nLang(HOUR);
    const textMinute = await this.languageSvc.getI18nLang(MINUTE);
    const textMinutes = await this.languageSvc.getI18nLang(MINUTES);
    const textSeconds = await this.languageSvc.getI18nLang(SECONDS);

    this.selectedTime = $event.selectedTime;
    this.eventDetail = $event.events;
    if (this.eventDetail.length > 0) {
      this.eventDetail = $event.events.map(e => {
        const { startTime, endTime, totalSeconds, rpeStatus, rpes, thrRetention, hrs, prescriptionId } = e;
        const start = `${(startTime as Date).getHours()}${textHour}` +
                      `${(startTime as Date).getMinutes()}${textMinute}`;
        const end = `${(endTime as Date).getHours()}${textHour}` +
                    `${(endTime as Date).getMinutes()}${textMinute}`;
        const time = `${Math.round(totalSeconds / 60)}${textMinutes}`+
                     `${totalSeconds % 60}${textSeconds}`;
        return { start, end, time, rpeStatus, rpes, thrRetention, hrs, prescriptionId };
      });
    }
  }

  // #endregion

  async navToDetail(dailyData) {
    await this.router.navigate(['/menu/records/detail', dailyData]);
  }
}
