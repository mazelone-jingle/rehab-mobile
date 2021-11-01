import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { LoggerService } from './logger.service';
import { IPrescription, IPrescriptionStep } from './prescription.service';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService extends HttpService {
  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    route: ActivatedRoute,
    router: Router,
    logger: LoggerService,
    authSvc: AuthService
  ) {
    super(http, baseUrl + 'api/Exercise', route, router, logger, authSvc);
  }

  getExerciseRecords(
    pageNum: number,
    pageSize: number
  ): Observable<IExercise[]> {
    const email = this.authSvc.username;
    return this.http
      .get<IPagedList<IExercise>>(
        this.baseUrl +
          `/ByEmail?keyword=${email}&pageNum=${pageNum}&pageSize=${pageSize}`
      )
      .pipe(
        tap((data) => {
          this.logger.log('diary/pagedList', data);
        }),
        map((data) => data.items),
        catchError((err: HttpErrorResponse) => {
          // this.handleError(err);
          throw err;
        })
      );
  }

  hrArrayDataToString(hrArray: number[]): string {
    return hrArray.join(',');
  }

  getThrRetention(
    prescription: IPrescription,
    hrMinMax: any,
    hrData: number[]
  ) {
    const exercises = prescription.steps;
    const exerciseTime = [0]; // 각 단계별 운동 시간
    const exerciseIsMain = []; // Main에 해당하는 운동 type

    exercises.forEach((exercise, idx) => {
      let baseSeconds = 0;
      if (idx > 0) {
        const baseMinutes = exercises
          .map((step) => step.minute)
          .slice(0, idx)
          .reduce((accumulator, currentValue) => accumulator + currentValue);
        baseSeconds = Math.round(baseMinutes * 60);
      }
      exerciseTime.push(baseSeconds + exercise.minute * 60);
      exerciseIsMain.push(exercise.type.includes('Main') ? 1 : 0);
    });

    const mainHrs = []; // Main에 해당하는 HR
    exerciseIsMain.forEach((exercise, idx) => {
      if (exercise === 1) {
        mainHrs.push(hrData.slice(exerciseTime[idx], exerciseTime[idx + 1]));
      }
    });

    const flatHr = mainHrs.reduce((accu, curr) => accu.concat(curr));
    this.logger.log('flat Hr', flatHr);
    const rangeHr = flatHr.filter(
      (hr) => +hr >= hrMinMax.min && +hr <= hrMinMax.max
    );

    const res = Math.round((rangeHr.length / flatHr.length) * 100);
    this.logger.log('thr retention: ', res);

    return res? res : 0;
  }

  async sendExerciseData(
    prescription,
    rpeValue: number,
    exerciseData: string[],
    exerciseDatetime: Date,
    hrMixMax: any
  ) {
    if (exerciseData.length > 0) {
      const hrData = exerciseData
        .map((str) => str.substring(str.indexOf('#') + 1, str.lastIndexOf('#')))
        .map((str) => str.split('_'))
        .reduce((accu, curr) => accu.concat(curr))
        .map((str) => +str);
      return this.postExercise(
        prescription,
        hrData,
        rpeValue,
        exerciseDatetime,
        hrMixMax,
        ''
      ).toPromise();
    }
  }

  postExercise(
    prescription: IPrescription,
    hrData: number[],
    rpe: number,
    exerciseDatetime: Date,
    hrMinMax: any,
    rpes: string
  ) {
    const exercise: IExerciseRequest = {
      patientEmail: this.authSvc.username,
      id: 0,
      date: exerciseDatetime,
      thrRetention: this.getThrRetention(prescription, hrMinMax, hrData),
      hrs: this.hrArrayDataToString(hrData),
      rpes,
      rpe,
      prescriptionId: prescription.id,
    };
    return this.http.post<IExercise>(this.baseUrl, exercise).pipe(
      tap((data) => {
        this.logger.log('api/Exercise', data);
      }),
      catchError((err: HttpErrorResponse) => {
        // this.handleError(err);
        throw err;
      })
    );
  }
}

export interface IExerciseRequest {
  patientEmail: string;
  id: number;
  date: Date | string;
  thrRetention: number;
  hrs: string;
  rpes: string;
  rpe: number;
  prescriptionId: number;
}

export interface IExercise {
  patientEmail: string;
  id: number;
  date: Date;
  thrretention: number;
  hrs: string;
  rpes: string | null;
  prescriptionId: number;
  totalTime: number | null;
  rpe: number | null;
  steps: Array<IPrescriptionStep> | null;
}

export interface IPagedList<T> {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  items: Array<T>;
}

export interface IRpes {
  rpe: number;
  second: number;
}
