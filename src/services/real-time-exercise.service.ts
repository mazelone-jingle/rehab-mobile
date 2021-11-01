import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from './http.service';
import { IPrescription } from './prescription.service';

@Injectable({
  providedIn: 'root'
})
export class RealTimeExerciseService {
  private headers: HttpHeaders;
  constructor(
    private httpSvc: HttpService
  ) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-type', 'application/json');
  }

  getReservation() {
    // return this.httpSvc.get('api/Prescription', this.headers)
    return of(true)
  }


  /**
   * chart에서 옳은 촛수를 나타나기 위하여, 운동 횟차 > 1 때는, 앞 횟차의 촛수들을 현재 촛수하고 합산함.
   * @param round: 현재 횟수
   * @param prescription: 운동 처방
   * @returns
   */
  getBaseSeconds(round: number, prescription: IPrescription) {
      let baseSeconds = 0;
      if (round > 1) {
       const baseMinutes = prescription.steps
        .map(step => step.minute)
        .slice(0, round - 1)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
       baseSeconds = Math.round(baseMinutes * 60)
     }
     return baseSeconds;
  }
}
