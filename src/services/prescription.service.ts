import { HttpService } from 'src/services/http.service';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from './alert.service';
import { AuthService } from './auth.service';
import { LoggerService } from './logger.service';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService extends HttpService {

  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    route: ActivatedRoute,
    router: Router,
    logger: LoggerService,
    authSvc: AuthService,
    ) {
      super(http, baseUrl + 'api/Prescription', route, router, logger, authSvc);
    }

    getLastPrescription(email: string) {
      return this.http.get<IPrescription>(this.baseUrl + `/Last?keyword=${encodeURIComponent(email)}`)
        .pipe(
          tap(data => { this.logger.log('getLast_Prescription', JSON.stringify(data)); }),
          catchError(err => {
            this.logger.error(err);
            throw err;
          })
        );
    }

    getPrescriptionById(id: number): Observable<IPrescription> {
      return this.http.get<IPrescription>(this.baseUrl + `/${id}`)
        .pipe(
          catchError(err => {
            this.logger.error(err);
            throw err;
          })
        );
    }
}



export interface IPrescription {
  patientEmail: string;
  id: number;
  exerciseTypeValue: string;
  exerciseTypes: Array<string>;
  hrMin: number;
  hrMax: number;
  steps: Array<IPrescriptionStep>;
  regBy: string;
  regDate: Date;
  confirmDate: Date | null;
}

export interface IPrescriptionStep {
  sequence: number;
  type: string;
  minute: number;
}

