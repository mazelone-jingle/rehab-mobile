import { IPagedList } from './exercise.service';
import { HttpService } from './http.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { IReservation } from 'src/models/i-reservation';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

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
}
