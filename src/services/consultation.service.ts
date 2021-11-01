import { HttpService } from './http.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { IConsultation } from 'src/models/i-consultation';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ConsultationService extends HttpService {

  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    route: ActivatedRoute,
    router: Router,
    logger: LoggerService,
    authSvc: AuthService,
  ) {
    super(http, baseUrl + 'api/Consultation', route, router, logger, authSvc);
  }

  getConsultation() {
    return of(true);
    /*this.http.get(`${this.baseUrl}/${this.authSvc.username}`).pipe(
      tap((data) => this.logger.log(data)),
      catchError((err: HttpErrorResponse) => {
        this.logger.error(err);
        throw err;
      }),
      map((res) => res as Array<IConsultation>)
    );*/
  }

  getByMonth(date: Date): Observable<Date[]> {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const endPoint = `${this.baseUrl}/DoctorScheduleDays?email=${this.authSvc.username}&year=${year}&month=${month}`;
    return this.http.get<IMonthData>(endPoint).pipe(
      tap((data) => this.logger.log(data)),
      catchError((err: HttpErrorResponse) => {
        this.logger.error(err);
        throw err;
      }),
      map((res) => res.consultations)
    );
  }

  getByDate(targetDate: Date) {
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth() + 1;
    const date = targetDate.getDate();
    const endPoint = `${this.baseUrl}/DoctorScheduleByDate?email=${this.authSvc.username}&year=${year}&month=${month}&date=${date}`;

    return this.http.get(endPoint).pipe(
      tap((data) => this.logger.log(data)),
      catchError((err: HttpErrorResponse) => {
        this.logger.error(err);
        throw err;
      }),
      map((res) => res as Array<IConsultation>)
    );
  }
}

export interface IMonthData {
  userEmail: string;
  id: number;
  consultations: Date[];
}
