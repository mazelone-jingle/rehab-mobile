import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IPrescription } from 'src/services/prescription.service';
import { Chart } from 'chart.js';
import * as chartAnnotation from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-hr-detail',
  templateUrl: './hr-detail.component.html',
  styleUrls: ['./hr-detail.component.scss'],
})
export class HrDetailComponent implements OnInit, AfterViewInit {
  @Input() hrData;
  @Input() prescription: IPrescription;
  secDisplayUnit = 10;
  canvas: HTMLCanvasElement;
  dataset: Array<IChartItem> = [];
  chart: any = [];
  constructor(private modalController: ModalController, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
    this.createCanvas();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    const ctx = this.canvas.getContext('2d');

    Chart.plugins.register({ chartAnnotation });

    setTimeout(() => {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.hrData.split(',')
          .map((_, idx) => idx)
          .map(data =>
            {
              if (data % this.secDisplayUnit === 0) {
                let min: any = Math.floor(data / 60);
                if (min < 10) {
                  min = `0${min}`;
                }
                let sec: any = data % 60;
                if (sec === 0) {
                  sec = `00`;
                }
                return `${min}:${sec}`;
              } else {
                return '';
              }
            }),
          datasets: [
            {
              label: '# of Heart beat',
              data: this.hrData.split(','),
              fill: false,
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false,
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
    }, 100);
  }

  ngAfterViewInit() {
    const location = document.getElementById('recordDetail');
    location.appendChild(this.canvas);
  }

  dismissModal() {
    this.screenOrientation.unlock();
    this.modalController.dismiss();
  }

}

interface IChartItem {
  label: number;
  data: number;
}
