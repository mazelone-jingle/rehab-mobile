import { HOUR, MINUTE } from './../constants/language-key';
import { LanguageService } from './language.service';
import { StorageService } from './storage.service';
import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { IPrescription } from './prescription.service';
import { PRESCRIPTION, WEEKDAYS } from 'src/constants/common';
import { AFTERNOON, DATE, DOCTOR, MORNING, RECEIVE_NEW_PRESCRIPTION } from 'src/constants/language-key';


@Injectable({
  providedIn: 'root'
})
export class ExerciseSettingService {
  prescription: IPrescription;
  constructor(
    private alertSvc: AlertService,
    private storageSvc: StorageService,
    private languageSvc: LanguageService
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
    const textDoctor = await this.languageSvc.getI18nLang(DOCTOR);
    const textReceivePrescription = await this.languageSvc.getI18nLang(RECEIVE_NEW_PRESCRIPTION);
    const msg =
    `<p>${this.handleDateInfo(prescriptionInfo.regDate)}</p>
      <p>${textDoctor} : ${prescriptionInfo.regBy}</p>
    <p>${textReceivePrescription}</p>
    `;
    await this.alertSvc.presentAlert(msg, false);
  }

  async handleDateInfo(dateData) {
    const date = new Date(dateData);
    const y = date.getFullYear();
    const M = date.getMonth() + 1;
    const d = date.getDate();
    const w = date.getDay();
    const h = date.getHours();
    const m = date.getMinutes();

    const textDate = await this.languageSvc.getI18nLang(DATE);
    const textMorning = await this.languageSvc.getI18nLang(MORNING);
    const textAfternoon = await this.languageSvc.getI18nLang(AFTERNOON);
    const textHour = await this.languageSvc.getI18nLang(HOUR);
    const textMinute = await this.languageSvc.getI18nLang(MINUTE);

    return `${textDate}: ${y}-${M}-${d} (${WEEKDAYS[w]}) ${h >= 12? textMorning: textAfternoon}`
           + ` ${h >= 12? h-12 : h}${textHour} ${m}${textMinute}`;
  }
}
