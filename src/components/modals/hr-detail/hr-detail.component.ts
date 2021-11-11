import { MINUTES, STEP } from './../../../constants/language-key';
import { AfterViewInit, Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IPrescription } from 'src/services/prescription.service';
import { Chart } from 'chart.js';
import * as chartAnnotation from 'chartjs-plugin-annotation';
import { HEART_BEAT, DIFFICULTY } from 'src/constants/language-key';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-hr-detail',
  templateUrl: './hr-detail.component.html',
  styleUrls: ['./hr-detail.component.scss'],
})
export class HrDetailComponent implements OnInit, AfterViewInit {
  @Input() hrData;
  @Input() prescription: IPrescription;
  @Input() rpes: string;
  @ViewChild('content') content: ElementRef;
  secDisplayUnit = 10;
  canvas: HTMLCanvasElement;
  dataset: Array<IChartItem> = [];
  chart: any = [];
  constructor(
    private modalController: ModalController,
    private screenOrientation: ScreenOrientation,
    private languageSvc: LanguageService
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {

  }

  async ngAfterViewInit() {
    await this.createCanvas();
    console.log(this.prescription);

  }

  async createCanvas() {
    const textHeartBeat = await this.languageSvc.getI18nLang(HEART_BEAT);
    const textDifficulty = await this.languageSvc.getI18nLang(DIFFICULTY);
    const minText = await this.languageSvc.getI18nLang(MINUTES);
    const stepText = await this.languageSvc.getI18nLang(STEP);
    this.canvas = document.createElement('canvas');
    const ctx = this.canvas.getContext('2d');

    const rpesData = this.rpes.split(',').map((value, idx) => {
      if (value === '') {
        return null;
      } else {
        return this.hrData.split(',')[idx];
      }
    });

    Chart.plugins.register({ chartAnnotation });

    setTimeout(() => {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.hrData.split(',')
            .map((_, idx) => idx)
            .map(data => {
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
              label: textHeartBeat,
              data: this.hrData.split(','),
              spanGaps: false,
              lineTension: 0.2,
              backgroundColor: 'rgba(255, 0, 127, 0)',
              borderColor: 'rgba(255, 0, 127, 1)',
              pointBackgroundColor: 'rgba(255, 0, 127, 1)',
              pointRadius: 0,
              borderWidth: 2,
              datalabels: {
                display: false,
              },
            },
            {
              label: textDifficulty,
              data: rpesData,
              backgroundColor: 'rgba(255, 0, 127, 0.5)',
              borderColor: 'rgba(255, 0, 127, 0)',
              pointBackgroundColor: 'rgba(255, 0, 127, 0.5)', // point background
              pointRadius: 10, // point size
              borderWidth: 1,
              pointStyle: 'circle',
              showLine: false,
              datalabels: {
                display: true,
                align: 'top',
                anchor: 'end',
                color: 'black',
                font: {
                  weight: 'bold',
                },
              },
            },
          ],
        },
        options: {
          events: [],
          responsive: true,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }],
          },
          pan: {
            enabled: true, // Enable panning
            mode: 'x', // Allow panning in the x direction
            onPan: () => {
              console.log('I was panned!!!');
            },
          },
          animation: {
            duration: 1,
            onComplete: (chartElement) => {
              const chart = chartElement.chart;
              ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'bold', Chart.defaults.global.defaultFontFamily);
              ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // point font color
              const rpesDatasets = chart.data.datasets[1];
              rpesDatasets.data.forEach((data, i) => {
                const model = rpesDatasets._meta[Object.keys(rpesDatasets._meta)[0]].data[i]._model;
                ctx.fillText(this.rpes.split(',')[i], model.x - 7, model.y + 5);
              });
            }
          },
          annotation: {
            drawTime: 'afterDraw',
            annotations: [
              {
                type: 'box',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                yMin: this.prescription.hrMin,
                yMax: this.prescription.hrMax,
                borderWidth: 1,
                backgroundColor: 'rgba(20, 173, 35, 0.2)',
                borderColor: 'rgba(20, 173, 35, 0.2)',
              }].concat(this.setStepAnnotation(stepText, minText))
          }
        },
      });
    }, 100);

    const location = document.getElementById('recordDetail');
    location.appendChild(this.canvas);
  }

  setStepAnnotation(stepText: string, minText: string): any[] {
    const steps = this.prescription.steps;
    return steps.map((step, i) => {
      let baseMinute;
      if (i === 0) {
        baseMinute = 0;
      } else {
        baseMinute = steps.map(s => s.minute).slice(0, i).reduce((prev, curr) => prev + curr);
      }
      return {
        drawTime: 'afterDatasetsDraw',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: (baseMinute + step.minute) * 60,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        label: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          content: `${stepText} ${i + 1} (${step.minute}${minText})`,
          enabled: true,
          position: 'top',
          xAdjust: 50,
          yAdjust: 5,
        }
      };
    });

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
