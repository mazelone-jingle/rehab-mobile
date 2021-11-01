import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { LoggerService } from './logger.service';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends HttpService {

  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    route: ActivatedRoute,
    router: Router,
    logger: LoggerService,
    authSvc: AuthService,
  ) {
    super(http, baseUrl + 'api/Patient', route, router, logger, authSvc);
  }

  getPatientPersonalInfo(email): Observable<IPatient> {
    return this.http.get<IPatient>(`${this.baseUrl}/${email}`);
  }

  updatePatientPersonalInfo(email: string, info: IPatient) {
    return this.http.put(`${this.baseUrl}/${email}`, info);
  }

  checkIdDuplicate(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/CheckDuplicate` + `?email=${encodeURIComponent(email)}`, { headers: this.headers })
      .pipe(
        tap(data => { this.logger.log('data', data); }),
        catchError(err => throwError(err))
      );
  }

  signUp(domain: string, params: IPatientSignUp) {
    return this.http.post(`${this.baseUrl}/SignUp/${domain}`, params, { headers: this.headers })
      .pipe(
        tap(data => { this.logger.log('data', data); }),
        catchError(err => throwError(err))
      );
  }
}

export interface IPatient {
  email: string;
  name: string;
  phone: string;
  birthDate: Date | null;
  gender: boolean;
  height: number;
  weight: number;
  assignedUserEmail: string;

  hasDiabets: boolean;
  hasHypertension: boolean;
  smokeStatus: number;
  hasDyslipidemia: boolean;
  hasCardiacDisease: boolean;
  hasIcdinserted: boolean;
  hasRegularExercise: boolean;

  diabetsDescription: string;
  hypertensionDescription: string;
  smokeDescription: string;
  dyslipidemiaDescription: string;
  cardiacDiseaseDescription: string;
  icdinsertedDescription: string;
  regularExerciseDescription: string;
  etc: string;
}

export interface ISignUp {
  email: string;
  name: string;
}

export interface IPatientSignUp extends ISignUp {
  password: string;
}

export interface ICheckDuplicateResponse {
  isDuplicate: boolean;
  regDate: string;
}
