import { LoggerService } from './logger.service';
import { from, Observable } from 'rxjs';
import {
    COMMAND_TYPE_BAT, COMMAND_TYPE_REQ, COMMAND_TYPE_RHD, COMMAND_TYPE_RND, COMMAND_TYPE_ROK,
    COMMAND_TYPE_RTE, COMMAND_TYPE_RTH, COMMAND_TYPE_RTS, COMMAND_TYPE_STE, COMMAND_TYPE_STH,
    COMMAND_TYPE_STS
} from 'src/constants/watch-ble-command';
import { BleService } from 'src/services/ble.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchCommandService {

  constructor(private ble: BleService, private loggerSvc: LoggerService) { }

  /**
   * get watch battery information
   */
  async sendBAT() {
    await this.ble
      .writeCommand(COMMAND_TYPE_BAT)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_BAT} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_BAT} err`, err));
  }

  /**
   * check if there is some new data in the watch
   */
  async sendRTS() {
    await this.ble
      .writeCommand(COMMAND_TYPE_RTS)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_RTS} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_RTS} err`, err));
  }

  /**
   * check if there is some new data in the watch
   */
   async sendRTH() {
    await this.ble
      .writeCommand(COMMAND_TYPE_RTH)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_RTH} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_RTH} err`, err));
  }

  /**
   * check if there is some new data in the watch
   */
   async sendRTE() {
    await this.ble
      .writeCommand(COMMAND_TYPE_RTE)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_RTE} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_RTE} err`, err));
  }

  /**
   * check if there is some new data in the watch
   */
   async sendRND() {
    await this.ble
      .writeCommand(COMMAND_TYPE_RND)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_RND} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_RND} err`, err));
  }

  /**
   * get new data from the watch
   */
  async sendRHD() {
    await this.ble
      .writeCommand(COMMAND_TYPE_RHD)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_RHD} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_RHD} err`, err));
  }

  /**
   * send ok command
   */
  async sendROK() {
    await this.ble
      .writeCommand(COMMAND_TYPE_ROK)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_ROK} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_ROK} err`, err));
  }

  /**
   * send reask data command
   */
  async sendREQ() {
    await this.ble
      .writeCommand(COMMAND_TYPE_REQ)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_REQ} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_REQ} err`, err));
  }

  /**
   * set datetime
   */
  async sendSTS(): Promise<Observable<void>>{
    const date = new Date();
    const y = date.getFullYear().toString().substr(2, 2);
    const M = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const command = `${COMMAND_TYPE_STS.slice(
      0,
      COMMAND_TYPE_STS.lastIndexOf('#') + 1
    )}${y}_${M}_${d}_${h}_${m}${COMMAND_TYPE_STS.slice(
      COMMAND_TYPE_STS.lastIndexOf('#') + 1
    )}`;
    return from(this.ble
      .writeCommand(command, COMMAND_TYPE_STS)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_STS} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_STS} err`, err))
      );
  }

  /**
   * set hrMin & hrMax
   *
   * @param prescription
   */
  async sendSTH(prescription) {
    const hrMin = prescription.hrMin;
    const hrMax = prescription.hrMax;
    const command = `${COMMAND_TYPE_STH.slice(
      0,
      COMMAND_TYPE_STH.lastIndexOf('#') + 1
    )}${hrMin}_${hrMax}${COMMAND_TYPE_STH.slice(
      COMMAND_TYPE_STH.lastIndexOf('#') + 1
    )}`;
    return from(this.ble
      .writeCommand(command, COMMAND_TYPE_STH)
      .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_STH} ok`, res))
      .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_STH} err`, err))
      );
  }

  /**
   * set exercise time of every step
   *
   * @param prescription
   */
  async sendSTE(prescription) {
    const steps = prescription.steps.map((data) => data.minute);
    const lackOfCount = steps.length % 5 !== 0 ? 5 - (steps.length % 5) : 0;
    let command = '';
    let group = [];
    for (let i = 0; i <= steps.length + lackOfCount; i++) {
      if (steps[i]) {
        group.push(steps[i]);
      } else {
        group.push(0);
      }
      if (group.length % 5 === 0) {
        command = `${COMMAND_TYPE_STE.slice(
          0,
          COMMAND_TYPE_STE.lastIndexOf('#') + 1
        )}${group.join('_')}${COMMAND_TYPE_STE.slice(
          COMMAND_TYPE_STE.lastIndexOf('#') + 1
        )}`;
        group = [];
        return from(this.ble
          .writeCommand(command, COMMAND_TYPE_STE)
          .then((res) => this.loggerSvc.log(`write ${COMMAND_TYPE_STE} ok`, res))
          .catch((err) => this.loggerSvc.log(`write ${COMMAND_TYPE_STE} err`, err))
          );
      }
    }
  }
}
