import { BehaviorSubject, Subject, Subscription, throwError, TimeoutError, timer } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { DEVICE_ERROR } from 'src/constants/language-key';
import {
  COMMAND_TYPE_BAT, COMMAND_TYPE_REQ, COMMAND_TYPE_RHD, COMMAND_TYPE_RND, COMMAND_TYPE_ROK,
  COMMAND_TYPE_RTE, COMMAND_TYPE_RTH, COMMAND_TYPE_RTS, COMMAND_TYPE_STE, COMMAND_TYPE_STH,
  COMMAND_TYPE_STS, RESPONSE_CONFIG_BUSY, RESPONSE_TYPE_ERR, RESPONSE_TYPE_SSE, RESPONSE_TYPE_THR
} from 'src/constants/watch-ble-command';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/services/alert.service';
import { LoggerService } from 'src/services/logger.service';

import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

import { LanguageService } from './language.service';
import { LoadingService } from './loading.service';

const SCAN_SECONDS = environment.bleScanSec;  // 5초 동안 검색
const BLE_DEVICE_SERVICE = environment.bleDeviceService;
const WEARABLE_TO_MOBILE = environment.wearable2mobile;  // Wearable 2 Mobile,
const MOBILE_TO_WEARABLE = environment.mobile2wearable;  // Mobile 2 Wearable, notification을 등록하면 실패해야 함.

@Injectable({
  providedIn: 'root'
})
export class BleService {
  interval: NodeJS.Timeout;
  timer = new BehaviorSubject<number>(environment.connectExpiredTime);

  // Device
  deviceId: string = null;

  // BLE
  // peripheral: any;

  // command
  commandTypeSubject = new Subject<string>();
  commandType$ = this.commandTypeSubject.asObservable();
  commandType: string;

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
  isConnectionAutoBrokeUp = false;

  timeSubscription = new Subscription();
  commandTimeSubscription = new Subscription();


  isConnectingSubject = new BehaviorSubject<boolean>(false);
  isConnecting$ = this.isConnectingSubject.asObservable();
  constructor(
    private ble: BLE,
    private loggerSvc: LoggerService,
    private alertSvc: AlertService,
    private zone: NgZone,
    private loadingSvc: LoadingService,
    private languageSvc: LanguageService
  ) {
    this.commandType$.subscribe(serviceType => {
      this.commandType = serviceType;
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
      return new Promise((resolve) => this.ble.isConnected(this.deviceId)
        .then(() => resolve(true))
        .catch(() => resolve(false)));
    }
    return Promise.resolve(false);
  }

  scan() {
    this.deviceId = null;

    return this.ble.scan([BLE_DEVICE_SERVICE], SCAN_SECONDS)  // Rehab device만 찾기
      .pipe(
        takeUntil(timer(SCAN_SECONDS * 1000 + 100)),
        catchError(error => {
          if (error instanceof TimeoutError) {
            return throwError('Timeout Exception');
          }

          // Return other errors
          return throwError(error);
        })
      );;
  }
/*
  connect(deviceId: string) {
    return this.ble.connect(deviceId)
      .pipe(
        tap((peripheral) => {
          this.isConnectingSubject.next(true);
          this.isConnectionAutoBrokeUp = false;
          this.deviceId = deviceId;
          this.loggerSvc.log('peripheral', peripheral);
          this.resetTimer();
          this.timeSubscription = this.timer.subscribe(obs => {
            this.zone.runOutsideAngular(() => {
              let expiredTime = obs;
              this.interval = setInterval(async () => {
                expiredTime--;
                console.warn('======= expired time:', expiredTime);
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
          if (!this.isConnectionAutoBrokeUp) {
            return throwError(e);
          }
        })
      );
  }

  disconnect() {
    if (!!this.deviceId) {
      this.isConnectingSubject.next(false);
      this.timeSubscription.unsubscribe();
      this.isConnectionAutoBrokeUp = true;
      clearInterval(this.interval);
      return this.ble.disconnect(this.deviceId);
    }
  }*/


  connect(deviceId: string) {
    this.deviceId = deviceId;
    return this.ble.connect(deviceId).pipe(
      tap(() => this.isConnectingSubject.next(true)),
      tap(() => this.isConnectionAutoBrokeUp = false),
      tap(() => this.resetTimer()),
      tap(() => this.registerTimeSubscription()),
      tap(() => this.registerNotification()),
      catchError(e => {
        this.loggerSvc.error('connect', e);
        console.warn('===== catch error');

        this.deviceId = null;

        this.isConnectingSubject.next(false); // change connection status

        this.timeSubscription.unsubscribe(); // stop the connection timer
        clearInterval(this.interval);

        // if connection interrupt automatically, then throwError
        if (!this.isConnectionAutoBrokeUp) {
          return throwError(e);
        }
      })
    );
  }

  registerTimeSubscription() {
    this.timeSubscription = this.timer.subscribe(obs => {
      this.zone.runOutsideAngular(() => {
        let expiredTime = obs;
        this.interval = setInterval(async () => {
          expiredTime--;
          console.warn('======= expired time:', expiredTime);
          if (expiredTime === 0) {
            await this.disconnect();
            // timeout: connection auto broke up and should not to notify user
          };
        }, 1000);
      });
    });
  }

  disconnect() {
    if (!!this.deviceId) {
      this.isConnectingSubject.next(false);
      this.timeSubscription.unsubscribe();
      this.isConnectionAutoBrokeUp = true;
      clearInterval(this.interval);
      return this.ble.disconnect(this.deviceId);
    }
  }


  writeCommand(command: string, commandType: string = command) {
    this.resetTimer();

    const commandAb = this.stringToArrayBuffer(command);
    return new Promise((resolve, reject) => {
      this.commandTypeSubject.next(commandType);
      setTimeout(() => {
        this.ble.write(this.deviceId, BLE_DEVICE_SERVICE, MOBILE_TO_WEARABLE, commandAb)
          .then(res => resolve(this.arrayBufferToString(res)))
          .catch(async err => {
            await this.loadingSvc.dismiss();

            // TODO: 테스트 필요함
            if (await this.ble.isConnected(this.deviceId)) {
              await this.writeCommand(command, commandType);
            } else {
              this.disconnect();
            }
            return reject(this.arrayBufferToString(err));
          });
      });
    });
  }

  private registerNotification() {
    this.ble.startNotification(this.deviceId, BLE_DEVICE_SERVICE, WEARABLE_TO_MOBILE)
      .pipe(
        tap(() => this.resetTimer()),
        tap((res: [ArrayBuffer, number]) =>
                  this.loggerSvc.log(`${this.commandType} noti data ${BLE_DEVICE_SERVICE}, ${WEARABLE_TO_MOBILE}`,
                  this.arrayBufferToString(res[0])))
      )
      .subscribe({
        next: async (res: [ArrayBuffer, number]) => { // ## success callback data type => [ArrayBuffer, 0]
          // startNotification에 대한 성공여부가 아니라, notification을 통한 data 전달상황에서 호출.
          const data: string = this.arrayBufferToString(res[0]);

          if (data === RESPONSE_TYPE_SSE) {
            this.commandType = RESPONSE_TYPE_SSE;
          } else if ([RESPONSE_TYPE_ERR, RESPONSE_CONFIG_BUSY].includes(data)) {
            this.loadingSvc.dismiss();
            const msg = await this.languageSvc.getI18nLang(DEVICE_ERROR);
            await this.alertSvc.presentAlert(msg, false, () => this.disconnect());
            return;
          }

          switch (this.commandType) {
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
        },
        error: err => {
          // 잘못된 startNotification 요청에 대해서 error callback 정상작동 확인.
          const data = this.arrayBufferToString(err);
          this.loggerSvc.log(`noti err ${BLE_DEVICE_SERVICE}, ${WEARABLE_TO_MOBILE}`, data);
        }
      });
  }

  // ArrayBuffer, String convert
  private arrayBufferToString(buf: ArrayBuffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }

  private stringToArrayBuffer(str: string) {
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
}

