import { IPagedList } from './exercise.service';
import { HttpService } from './http.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { IReservation } from 'src/models/i-reservation';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService extends HttpService {
  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    route: ActivatedRoute,
    router: Router,
    logger: LoggerService,
    authSvc: AuthService,
  ) {
    super(http, baseUrl + 'api/Reservation', route, router, logger, authSvc);
  }

  create(reservation: IReservation) {
    this.logger.log(reservation);
    return this.http.post(this.baseUrl, reservation).pipe(
      tap((data) => this.logger.log(data)),
      catchError((err: HttpErrorResponse) => {
        this.logger.error(err);
        throw err;
      }),
      map((res) => res)
    );
  }

  getReservation() {
    const keyword = this.authSvc.username;
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return this.http.get<IReservation[]>(this.baseUrl + `/${year}/${month}/${date}?keyword=${keyword}`)
    .pipe(
      tap((data) => this.logger.log(data)),
      catchError((err: HttpErrorResponse) => {
        this.logger.error(err);
        throw err;
      })
    );
  }

  searchById(id: number) {
    return this.http.get<IReservation>(`${this.baseUrl}/${id}`)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        this.logger.error(err);
        throw err;
      })
    );
  }

  getNowAvailableReservation(): Observable<IReservation[]> {
    return this.getReservation().pipe(
      map(reservation => this.checkReservationIsAvailableNow(reservation))
    );
  }

  checkReservationIsAvailableNow(reservations: IReservation[]): IReservation[] {
    return reservations
      .filter((reservation) => reservation.approvalResult)
      .filter((reservation) => this.checkIsBefore5Minutes(reservation.from, reservation.to));
  }

  checkIsBefore5Minutes(dateFrom: Date, dateTo: Date): boolean {
    const now = new Date().getTime();
    const reservationDateFrom = new Date(dateFrom).getTime();
    const reservationDateTo = new Date(dateTo).getTime();
    const min = 5;
    const availableDateFrom = reservationDateFrom - min * 60 * 1000;
    // this.loggerSvc.log('reserve from - ', reservationDateFrom, 'now', now);
    return reservationDateTo >= now && availableDateFrom <= now;
  }
}
