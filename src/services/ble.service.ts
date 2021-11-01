import { LoadingService } from './loading.service';
import { BehaviorSubject, Subject, throwError, TimeoutError, timer, Observable, Subscription, AsyncSubject, ReplaySubject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import {
  COMMAND_TYPE_BAT, COMMAND_TYPE_RHD, COMMAND_TYPE_RND, COMMAND_TYPE_ROK, COMMAND_TYPE_RTE,
  COMMAND_TYPE_RTH, COMMAND_TYPE_RTS, COMMAND_TYPE_STE, COMMAND_TYPE_STH, COMMAND_TYPE_STS,
  RESPONSE_TYPE_ERR, RESPONSE_TYPE_SSE, RESPONSE_TYPE_THR, COMMAND_TYPE_REQ, RESPONSE_CONFIG_BUSY
} from 'src/constants/watch-ble-command';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/services/alert.service';
import { LoggerService } from 'src/services/logger.service';

import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';


const scanSec = environment.bleScanSec;  // 5초 동안 검색
const service = environment.bleDeviceService;
const wearable2mobile = environment.wearable2mobile;  // Wearable 2 Mobile,
const mobile2wearable = environment.mobile2wearable;  // Mobile 2 Wearable, notification을 등록하면 실패해야 함.

@Injectable({
  providedIn: 'root'
})
export class BleService {
  interval: NodeJS.Timeout;
  timer = new BehaviorSubject<number>(environment.connectExpiredTime);

  commandInterval: NodeJS.Timeout;
  commandTimer = new BehaviorSubject<number>(5);
  commandCheckResponse$: Subject<string>;

  // Device
  deviceId: string = null;

  // BLE
  services = [service];
  characteristics = [wearable2mobile, mobile2wearable];
  characteristic = mobile2wearable;
  peripheral: any;

  // service
  serviceTypeSubject = new Subject<string>();
  serviceType$ = this.serviceTypeSubject.asObservable();
  serviceType: string;

  // data
  BATServiceSubject = new Subject<string>();
  BATService$ = this.BATServiceSubject.asObservable();
  RNDServiceSubject = new Subject<string>();
  RNDService$ = this.RNDServiceSubject.asObservable();
  RHDServiceSubject = new Subject<string>();
  RHDService$ = this.RHDServiceSubject.asObservable();
  REQServiceSubject = new Subject<string>();
  REQService$ = this.REQServiceSubject.asObservable();
  ROKServiceSubject = new Subject<string>();
  ROKService$ = this.ROKServiceSubject.asObservable();
  STSServiceSubject = new Subject<string>();
  STSService$ = this.STSServiceSubject.asObservable();
  STHServiceSubject = new Subject<string>();
  STHService$ = this.STHServiceSubject.asObservable();
  STEServiceSubject = new Subject<string>();
  STEService$ = this.STEServiceSubject.asObservable();
  RTSServiceSubject = new Subject<string>();
  RTSService$ = this.RTSServiceSubject.asObservable();
  RTHServiceSubject = new Subject<string>();
  RTHService$ = this.RTHServiceSubject.asObservable();
  RTEServiceSubject = new Subject<string>();
  RTEService$ = this.RTEServiceSubject.asObservable();

  THRResponseSubject = new Subject<string>();
  THRResponse$ = this.THRResponseSubject.asObservable();
  SSEResponseSubject = new Subject<string>();
  SSEResponse$ = this.SSEResponseSubject.asObservable();

  // realtime data
  realtimeDataSubject = new Subject<string>();
  realtimeData$ = this.realtimeDataSubject.asObservable();
  isAutoDisconnect = false;

  timeSubscription = new Subscription();
  commandTimeSubscription = new Subscription();

  constructor(
    private ble: BLE,
    private loggerSvc: LoggerService,
    private alertSvc: AlertService,
    private zone: NgZone,
    private loadingSvc: LoadingService) {
    this.serviceType$.subscribe(serviceType => {
      this.serviceType = serviceType;
    });

    // run when app is being closed
    window.addEventListener('beforeunload', async () => {
      await this.disconnect();
    });
  }

  checkBleAvailable(): Promise<boolean> {
    return new Promise((resolve, reject) => this.ble.isEnabled()
      .then(() => resolve(true))
      .catch(() => reject(false)));
  }

  enableBle(): Promise<boolean> {
    return new Promise((resolve, reject) => this.ble.enable()
      .then(() => resolve(true))
      .catch(() => reject(false)));
  }

  isConnected(): Promise<boolean> {
    if (this.deviceId) {
      return new Promise((resolve, reject) => this.ble.isConnected(this.deviceId)
        .then(() => resolve(true))
        .catch(() => resolve(false)));
    }
    return Promise.resolve(false);
  }

  scan() {
    this.deviceId = null;

    return this.ble.scan(this.services, scanSec)  // Rehab device만 찾기
      .pipe(
        takeUntil(timer(scanSec * 1000 + 100)),
        catchError(error => {
          if (error instanceof TimeoutError) {
            return throwError('Timeout Exception');
          }

          // Return other errors
          return throwError(error);
        })
      );;
  }


  connect(deviceId: string) {
    return this.ble.connect(deviceId)
      .pipe(
        tap((peripheral) => {
          this.isAutoDisconnect = false;
          this.deviceId = deviceId;
          this.peripheral = peripheral;
          this.loggerSvc.log('peripheral', peripheral);
          this.resetTimer();
          this.timeSubscription = this.timer.subscribe(obs => {
            this.zone.runOutsideAngular(() => {
              let expiredTime = obs;
              this.interval = setInterval(async () => {
                expiredTime--;
                // console.warn('======= expired time:', expiredTime);
                if (expiredTime === 0) {
                  await this.disconnect();
                };
              }, 1000);
            });
          });
          this.registerNotification();
        }),
        catchError(e => {
          this.loggerSvc.error('connect', e);
          this.timeSubscription.unsubscribe();
          clearInterval(this.interval);
          if (!this.isAutoDisconnect) {
            return throwError(e);
          }
        })
      );
  }

  disconnect() {
    if (!!this.deviceId) {
      this.timeSubscription.unsubscribe();
      this.isAutoDisconnect = true;
      clearInterval(this.interval);
      clearInterval(this.commandInterval);
      return this.ble.disconnect(this.deviceId);
    }
  }

  writeCommand(command: string, serviceType: string = command) {
    this.resetTimer();
    const commandAb = this.str2ab(command);
    this.loggerSvc.log('command', [command, commandAb]);
    return new Promise((resolve, reject) => {
      this.serviceTypeSubject.next(serviceType);
      setTimeout(() => {
        this.ble.write(this.deviceId, service, mobile2wearable, commandAb)
          .then(res => {
            // TODO: 테스트 필요함
            this.commandCheckResponse$ = new Subject<string>();
            this.commandTimeSubscription = this.commandTimer.subscribe(obs => {
              this.zone.runOutsideAngular(() => {
                let expiredTime = obs;
                this.commandInterval = setInterval(async () => {
                  expiredTime--;
                  // console.warn(`======= ${command} expired time: ${expiredTime}`);
                  if (expiredTime === 0) {
                    await this.disconnect();
                  }
                }, 1000);
              });
            });
            resolve(this.ab2str(res));
          })
          .catch(async err => {
            await this.loadingSvc.dismiss();

            // TODO: 테스트 필요함
            if (await this.ble.isConnected) {
              await this.writeCommand(command, serviceType);
            }
            return reject(this.ab2str(err));
          });
      }, 100);
    });
  }

  handleBAT(result) {
    return result.substring(result.lastIndexOf('#') + 1, result.lastIndexOf('@'));
  }

  private registerNotification() {
    this.ble.startNotification(this.deviceId, service, wearable2mobile)
      // ## success callback data type => [ArrayBuffer, 0]
      .subscribe(async (res: [ArrayBuffer, number]) => {

        this.resetTimer();
        // startNotification에 대한 성공여부가 아니라, notification을 통한 data 전달상황에서 호출.
        const data: string = this.ab2str(res[0]);

        // TODO: 5초후 res === undefined => disconnect
        // this.commandCheckResponse$.next(data);
        clearInterval(this.commandInterval);
        this.commandTimeSubscription.unsubscribe();

        if (data === RESPONSE_TYPE_SSE) {
          this.serviceType = RESPONSE_TYPE_SSE;
        } else if (data === RESPONSE_TYPE_ERR || data === RESPONSE_CONFIG_BUSY) {
          this.loadingSvc.dismiss();
          const msg = `시계에서 문제 발생했습니다. 시계를 다시 설치해주세요.`;
          await this.alertSvc.presentAlert(msg, false, () => this.disconnect());
          return;
        }

        // this.commandTimeSubscription.unsubscribe();
        // clearInterval(this.commandInterval);

        this.loggerSvc.log(`${this.serviceType} noti data ${service}, ${wearable2mobile}`, data);

        switch (this.serviceType) {
          case COMMAND_TYPE_BAT:
            this.BATServiceSubject.next(data);
            break;
          case COMMAND_TYPE_RND:
            this.RNDServiceSubject.next(data);
            break;
          case COMMAND_TYPE_RHD:
            this.RHDServiceSubject.next(data);
            break;
          case COMMAND_TYPE_REQ:
            this.REQServiceSubject.next(data);
            break;
          case COMMAND_TYPE_ROK:
            this.ROKServiceSubject.next(data);
            break;
          case COMMAND_TYPE_STS:
            this.STSServiceSubject.next(data);
            break;
          case COMMAND_TYPE_STH:
            this.STHServiceSubject.next(data);
            break;
          case COMMAND_TYPE_STE:
            this.STEServiceSubject.next(data);
            break;
          case COMMAND_TYPE_RTS:
            this.RTSServiceSubject.next(data);
            break;
          case COMMAND_TYPE_RTH:
            this.RTHServiceSubject.next(data);
            break;
          case COMMAND_TYPE_RTE:
            this.RTEServiceSubject.next(data);
            break;
          case RESPONSE_TYPE_THR:
            this.THRResponseSubject.next(data);
            break;
          case RESPONSE_TYPE_SSE:
            this.SSEResponseSubject.next(data);
            break;
          default:
            break;
        }
      }, err => {
        // 잘못된 startNotification 요청에 대해서 error callback 정상작동 확인.
        const data = this.ab2str(err);
        this.loggerSvc.log(`noti err ${service}, ${wearable2mobile}`, data);
      });
  }

  // ArrayBuffer, String convert
  private ab2str(buf: ArrayBuffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }

  private str2ab(str: string) {
    const array = new Uint8Array(str.length + 1);
    for (let i = 0, l = str.length; i < l; i++) {
      array[i] = str.charCodeAt(i);
    }
    array[str.length] = 0;  // 종료문자열을 넣어야 함.
    return array.buffer;
  }

  private resetTimer() {
    clearInterval(this.interval);
    this.timer.next(environment.connectExpiredTime);
  }

  private resetCommandTimer() {
    clearInterval(this.commandInterval);
    this.commandTimer.next(5);
  }
}

