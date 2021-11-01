import { StorageService } from './storage.service';
import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { IPrescription } from './prescription.service';
import { PRESCRIPTION, WEEKDAYS } from 'src/constants/common';


@Injectable({
  providedIn: 'root'
})
export class ExerciseSettingService {
  prescription: IPrescription;
  constructor(
    private alertSvc: AlertService,
    private storageSvc: StorageService
    ) {}

  checkIsNewPrescription(lastPrescription: IPrescription, newPrescription: IPrescription) {
    if (!lastPrescription || (new Date(lastPrescription.regDate).getTime() !== new Date(newPrescription.regDate).getTime())) {
      return true;
    }
    return false;
  }

  async saveNewPrescriptionToStorage(newPrescription: IPrescription) {
    await this.storageSvc.set(PRESCRIPTION, newPrescription);
  }

  async getLatestPrescriptionFromStorage() {
    return (await this.storageSvc.get(PRESCRIPTION)) || {};
  }

  async newPrescriptionAlert(prescriptionInfo: IPrescription) {
    const msg =
    `<p>${this.handleDateInfo(prescriptionInfo.regDate)}</p>
      <p>의사 : ${prescriptionInfo.regBy}</p>
    <p>새로운 운동 처방이 있습니다.</p>
    `;
    await this.alertSvc.presentAlert(msg, false);
  }

  handleDateInfo(dateData) {
    const date = new Date(dateData);
    const y = date.getFullYear();
    const M = date.getMonth() + 1;
    const d = date.getDate();
    const w = date.getDay();
    const h = date.getHours();
    const m = date.getMinutes();

    return `날짜: ${y}-${M}-${d} (${WEEKDAYS[w]}) ${h >= 12? '오후': '오전'} ${h >= 12? h-12 : h}시 ${m}분`;
  }
}
