import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpService } from './http.service';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { LoggerService } from './logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends HttpService {

  constructor(
    @Inject('BASE_URL') baseUrl: string,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(HttpClient) http: HttpClient,
    route: ActivatedRoute,
    router: Router,
    logger: LoggerService,
    authSvc: AuthService,) {
      super(http, baseUrl + 'api/Register', route, router, logger, authSvc);
  }

  forgotPassword(email: string) {
    return this.http.put(`${this.baseUrl}/ForgotPassword?userEmail=${encodeURIComponent(email)}`, null, {headers: this.headers})
    .pipe(
      tap(data => { this.logger.log('data', data); }),
      catchError(err => {
        this.logger.log('err', err);
        return of();
      })
    );
  }

}

