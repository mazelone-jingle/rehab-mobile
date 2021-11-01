import { forkJoin } from 'rxjs';
import { HrDetailComponent } from '../../../components/modals/hr-detail/hr-detail.component';
import { ModalController } from '@ionic/angular';
import { ExerciseRecordsService } from '../../../services/exercise-records.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as chartAnnotation from 'chartjs-plugin-annotation';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IPrescription, PrescriptionService } from 'src/services/prescription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {
  exerciseRecords: any;
  prescription: IPrescription;

  canvas: HTMLCanvasElement;
  dataset: Array<IChartItem> = [];
  chart: any = [];
  constructor(
    private exerciseRecordsSvc: ExerciseRecordsService,
    private modalController: ModalController,
    private screenOrientation: ScreenOrientation,
    private route: ActivatedRoute,
    private prescriptionSvc: PrescriptionService
    ) {
      route.params.subscribe(async params => {
        this.exerciseRecords = params;
      });
  }

  ngOnInit() {
    forkJoin([
      this.prescriptionSvc.getPrescriptionById(this.exerciseRecords.prescriptionId)
    ]).subscribe(res => {
      this.prescription = res[0];
      this.createCanvas();
    });
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    const ctx = this.canvas.getContext('2d');

    Chart.plugins.register({ chartAnnotation });

    setTimeout(() => {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['준비', ...this.prescription.steps.map(step => step.sequence+'단계'), '마무리'],
          datasets: [{
            label: '# of Heart beat',
            data: this.getEveryStepsData(),
            backgroundColor: 'transparent',
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          annotation: {
            annotations: [{
              type: 'box',
              xScaleID: 'x-axis-0',
              yScaleID: 'y-axis-0',
              yMin: this.prescription.hrMin,
              yMax: this.prescription.hrMax,
              borderWidth: 1,
              backgroundColor: 'rgba(20, 173, 35, 0.2)',
              borderColor: 'rgba(20, 173, 35, 0.2)',
            }]
          }
        },
      });
      const location = document.getElementById('record');
      location.appendChild(this.canvas);
    }, 100);
  }

  getEveryStepsData() {
    const [start, ...hrs] = this.exerciseRecords.hrs.split(',');
    const end = hrs.pop();
    const minArray = [];
    const data = this.prescription.steps.map(step => step.minute).map((min, idx) => {
      minArray.push(min);
      const pastMin = minArray.slice(0, idx).length > 0? minArray.slice(0, idx).reduce((accr, curr) => accr + curr) : 0;
      const sec = min * 60;
      return (
        hrs
        .slice(pastMin * 60, pastMin * 60 + min * 60)
        .map(res => Number(res))
        .filter(res => !!res)
        .reduce((accu, curr)=> accu + curr) / sec);
    });
    return [start, ...data, end];
  }

  async showHrDetail() {
    const modal = await this.modalController.create({
      component: HrDetailComponent,
      componentProps: {
        hrData: this.exerciseRecords.hrs,
        prescription: this.prescription
      },

    });
    await modal.present();

    await modal.onWillDismiss().then(async () => {
      await this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
  }

}

interface IChartItem {
  label: number;
  data: number;
}
