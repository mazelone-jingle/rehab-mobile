import { Chart } from 'chart.js';
import { BehaviorSubject } from 'rxjs';
import {
  DetailListModalComponent
} from 'src/components/modals/detail-list-modal/detail-list-modal.component';
import { ExerciseRecordsService } from 'src/services/exercise-records.service';
import { ExerciseService } from 'src/services/exercise.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

const EXERCISE_DATA_LIST = [{
  text: '1주일',
  id: 'oneWeek',
}, {
  text: '1달',
  id: 'oneMonth'
}, {
  text: '3달',
  id: 'threeMonths'
}, {
  text: '6달',
  id: 'sixMonths'
}, {
  text: '1년',
  id: 'oneYear'
}];

@Component({
  selector: 'app-exercise-records',
  templateUrl: './exercise-records.page.html',
  styleUrls: ['./exercise-records.page.scss'],
})
export class ExerciseRecordsPage implements OnInit {
  segmentStatusSubject = new BehaviorSubject<string>('summary');
  segmentStatus$ = this.segmentStatusSubject.asObservable();
  segmentStatus = 'summary';
  period = '1주일';
  today: number;
  // prescription: IPrescription;
  exerciseRecords: any;

  // calendar properties
  isToday: boolean;
  eventSource: any;
  viewTitle: any;
  eventDetail: any;
  calendar = {
    locale: 'ko-KR',
    currentDate: new Date(),
    step: 30,
    dateFormatter: {
      formatMonthViewDay: (date: Date) => date.getDate().toString(),
      formatMonthViewDayHeader: (date: Date) => {
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
      },
      formatMonthViewTitle: (date: Date) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`,
      formatWeekViewDayHeader: () => 'MonWH',
      formatWeekViewTitle: () => 'testWT',
      formatWeekViewHourColumn: () => 'testWH',
      formatDayViewHourColumn: () => 'testDH',
      formatDayViewTitle: () => 'testDT',
    }
  };
  selectedTime: any;

  // chart propertities
  canvas: HTMLCanvasElement;
  chart: any = [];
  pieChartData: { exerciseTimes: number; exerciseTotalTime: number; thrRetention: number };
  constructor(
    private modalController: ModalController,
    private exerciseRecordsSvc: ExerciseRecordsService,
    private router: Router,
    private exerciseSvc: ExerciseService) {
    this.segmentStatus$.subscribe(segment => {
      if (segment === 'summary') {
        this.segmentStatus = segment;
        if (document.getElementById('pieChart')) {
          document.getElementById('pieChart').removeChild(this.canvas);
        }

        this.exerciseRecordsSvc.getExercisePeriodRecords(this.exerciseRecords, this.period).then(res => {
          this.pieChartData = res;
          this.createPieChart();
        });
      }
    });
  }

  async ngOnInit() {
    this.today = new Date().getTime();
    this.getExerciseRecords();
  }

  getExerciseRecords() {
    this.exerciseSvc.getExerciseRecords(1, 1000).subscribe(async exerciseRecords => {
      this.eventSource = this.exerciseRecordsSvc.handleExerciseAllRecords(exerciseRecords);
      this.exerciseRecords = exerciseRecords;
      if (exerciseRecords) {
        await this.exerciseRecordsSvc.getExercisePeriodRecords(exerciseRecords, this.period).then(res => {
          this.pieChartData = res;
          this.createPieChart();
        });
      }
    });
  }

  segmentChanged(e) {
    this.segmentStatusSubject.next(e.detail.value);
  }

  async showPeriodDetail() {
    const modal = await this.modalController.create({
      component: DetailListModalComponent,
      componentProps: {
        title: '운동 기간',
        dataList: EXERCISE_DATA_LIST,
        currValue: this.period
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data.chosenData) {
      this.period = data.chosenData.text;
      document.getElementById('pieChart').removeChild(this.canvas);
      this.exerciseRecordsSvc.getExercisePeriodRecords(this.exerciseRecords, this.period).then(res => {
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
              backgroundColor: ['#df7127', '#aaaaaa'],
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

  onTimeSelected($event: any) {
    this.selectedTime = $event.selectedTime;
    this.eventDetail = $event.events;
    if (this.eventDetail.length > 0) {
      this.eventDetail = $event.events.map(e => {
        const { startTime, endTime, totalSeconds, rpeStatus, thrRetention, hrs, prescriptionId } = e;
        const start = `${(startTime as Date).getHours()}시 ${(startTime as Date).getMinutes()}분`;
        const end = `${(endTime as Date).getHours()}시 ${(endTime as Date).getMinutes()}분`;
        const time = `${Math.round(totalSeconds / 60)}분${totalSeconds % 60}초`;
        return { start, end, time, rpeStatus, thrRetention, hrs, prescriptionId };
      });
    }
  }

  // #endregion

  async navToDetail(dailyData) {
    await this.router.navigate(['./exercise-detail', dailyData]);
  }
}
