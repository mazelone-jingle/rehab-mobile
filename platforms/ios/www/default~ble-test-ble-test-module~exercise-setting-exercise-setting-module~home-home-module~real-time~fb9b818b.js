(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ble-test-ble-test-module~exercise-setting-exercise-setting-module~home-home-module~real-time~fb9b818b"],{

/***/ "/zZW":
/*!*************************************!*\
  !*** ./src/services/ble.service.ts ***!
  \*************************************/
/*! exports provided: BleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BleService", function() { return BleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.service */ "qozY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/watch-ble-command */ "gbkr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/logger.service */ "O0ov");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "yXvl");










const scanSec = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].bleScanSec; // 5초 동안 검색
const service = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].bleDeviceService;
const wearable2mobile = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].wearable2mobile; // Wearable 2 Mobile,
const mobile2wearable = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mobile2wearable; // Mobile 2 Wearable, notification을 등록하면 실패해야 함.
let BleService = class BleService {
    constructor(ble, loggerSvc, alertSvc, zone, loadingSvc) {
        this.ble = ble;
        this.loggerSvc = loggerSvc;
        this.alertSvc = alertSvc;
        this.zone = zone;
        this.loadingSvc = loadingSvc;
        this.timer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].connectExpiredTime);
        this.commandTimer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](5);
        // Device
        this.deviceId = null;
        // BLE
        this.services = [service];
        this.characteristics = [wearable2mobile, mobile2wearable];
        this.characteristic = mobile2wearable;
        // service
        this.serviceTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.serviceType$ = this.serviceTypeSubject.asObservable();
        // data
        this.BATServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.BATService$ = this.BATServiceSubject.asObservable();
        this.RNDServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.RNDService$ = this.RNDServiceSubject.asObservable();
        this.RHDServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.RHDService$ = this.RHDServiceSubject.asObservable();
        this.REQServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.REQService$ = this.REQServiceSubject.asObservable();
        this.ROKServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ROKService$ = this.ROKServiceSubject.asObservable();
        this.STSServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.STSService$ = this.STSServiceSubject.asObservable();
        this.STHServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.STHService$ = this.STHServiceSubject.asObservable();
        this.STEServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.STEService$ = this.STEServiceSubject.asObservable();
        this.RTSServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.RTSService$ = this.RTSServiceSubject.asObservable();
        this.RTHServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.RTHService$ = this.RTHServiceSubject.asObservable();
        this.RTEServiceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.RTEService$ = this.RTEServiceSubject.asObservable();
        this.THRResponseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.THRResponse$ = this.THRResponseSubject.asObservable();
        this.SSEResponseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.SSEResponse$ = this.SSEResponseSubject.asObservable();
        // realtime data
        this.realtimeDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.realtimeData$ = this.realtimeDataSubject.asObservable();
        this.isAutoDisconnect = false;
        this.timeSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.commandTimeSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.serviceType$.subscribe(serviceType => {
            this.serviceType = serviceType;
        });
        // run when app is being closed
        window.addEventListener('beforeunload', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.disconnect();
        }));
    }
    checkBleAvailable() {
        return new Promise((resolve, reject) => this.ble.isEnabled()
            .then(() => resolve(true))
            .catch(() => reject(false)));
    }
    enableBle() {
        return new Promise((resolve, reject) => this.ble.enable()
            .then(() => resolve(true))
            .catch(() => reject(false)));
    }
    isConnected() {
        if (this.deviceId) {
            return new Promise((resolve, reject) => this.ble.isConnected(this.deviceId)
                .then(() => resolve(true))
                .catch(() => resolve(false)));
        }
        return Promise.resolve(false);
    }
    scan() {
        this.deviceId = null;
        return this.ble.scan(this.services, scanSec) // Rehab device만 찾기
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(scanSec * 1000 + 100)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["TimeoutError"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Timeout Exception');
            }
            // Return other errors
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
        ;
    }
    connect(deviceId) {
        return this.ble.connect(deviceId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((peripheral) => {
            this.isAutoDisconnect = false;
            this.deviceId = deviceId;
            this.peripheral = peripheral;
            this.loggerSvc.log('peripheral', peripheral);
            this.resetTimer();
            this.timeSubscription = this.timer.subscribe(obs => {
                this.zone.runOutsideAngular(() => {
                    let expiredTime = obs;
                    this.interval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        expiredTime--;
                        // console.warn('======= expired time:', expiredTime);
                        if (expiredTime === 0) {
                            yield this.disconnect();
                        }
                        ;
                    }), 1000);
                });
            });
            this.registerNotification();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            this.loggerSvc.error('connect', e);
            this.timeSubscription.unsubscribe();
            clearInterval(this.interval);
            if (!this.isAutoDisconnect) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }
        }));
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
    writeCommand(command, serviceType = command) {
        this.resetTimer();
        const commandAb = this.str2ab(command);
        this.loggerSvc.log('command', [command, commandAb]);
        return new Promise((resolve, reject) => {
            this.serviceTypeSubject.next(serviceType);
            setTimeout(() => {
                this.ble.write(this.deviceId, service, mobile2wearable, commandAb)
                    .then(res => {
                    // TODO: 테스트 필요함
                    this.commandCheckResponse$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.commandTimeSubscription = this.commandTimer.subscribe(obs => {
                        this.zone.runOutsideAngular(() => {
                            let expiredTime = obs;
                            this.commandInterval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                expiredTime--;
                                // console.warn(`======= ${command} expired time: ${expiredTime}`);
                                if (expiredTime === 0) {
                                    yield this.disconnect();
                                }
                            }), 1000);
                        });
                    });
                    resolve(this.ab2str(res));
                })
                    .catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    // TODO: 테스트 필요함
                    if (yield this.ble.isConnected) {
                        yield this.writeCommand(command, serviceType);
                    }
                    return reject(this.ab2str(err));
                }));
            }, 100);
        });
    }
    handleBAT(result) {
        return result.substring(result.lastIndexOf('#') + 1, result.lastIndexOf('@'));
    }
    registerNotification() {
        this.ble.startNotification(this.deviceId, service, wearable2mobile)
            // ## success callback data type => [ArrayBuffer, 0]
            .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.resetTimer();
            // startNotification에 대한 성공여부가 아니라, notification을 통한 data 전달상황에서 호출.
            const data = this.ab2str(res[0]);
            // TODO: 5초후 res === undefined => disconnect
            // this.commandCheckResponse$.next(data);
            clearInterval(this.commandInterval);
            this.commandTimeSubscription.unsubscribe();
            if (data === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["RESPONSE_TYPE_SSE"]) {
                this.serviceType = src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["RESPONSE_TYPE_SSE"];
            }
            else if (data === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["RESPONSE_TYPE_ERR"] || data === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["RESPONSE_CONFIG_BUSY"]) {
                this.loadingSvc.dismiss();
                const msg = `시계에서 문제 발생했습니다. 시계를 다시 설치해주세요.`;
                yield this.alertSvc.presentAlert(msg, false, () => this.disconnect());
                return;
            }
            // this.commandTimeSubscription.unsubscribe();
            // clearInterval(this.commandInterval);
            this.loggerSvc.log(`${this.serviceType} noti data ${service}, ${wearable2mobile}`, data);
            switch (this.serviceType) {
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_BAT"]:
                    this.BATServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_RND"]:
                    this.RNDServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_RHD"]:
                    this.RHDServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_REQ"]:
                    this.REQServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_ROK"]:
                    this.ROKServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_STS"]:
                    this.STSServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_STH"]:
                    this.STHServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_STE"]:
                    this.STEServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_RTS"]:
                    this.RTSServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_RTH"]:
                    this.RTHServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["COMMAND_TYPE_RTE"]:
                    this.RTEServiceSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["RESPONSE_TYPE_THR"]:
                    this.THRResponseSubject.next(data);
                    break;
                case src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_4__["RESPONSE_TYPE_SSE"]:
                    this.SSEResponseSubject.next(data);
                    break;
                default:
                    break;
            }
        }), err => {
            // 잘못된 startNotification 요청에 대해서 error callback 정상작동 확인.
            const data = this.ab2str(err);
            this.loggerSvc.log(`noti err ${service}, ${wearable2mobile}`, data);
        });
    }
    // ArrayBuffer, String convert
    ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint8Array(buf));
    }
    str2ab(str) {
        const array = new Uint8Array(str.length + 1);
        for (let i = 0, l = str.length; i < l; i++) {
            array[i] = str.charCodeAt(i);
        }
        array[str.length] = 0; // 종료문자열을 넣어야 함.
        return array.buffer;
    }
    resetTimer() {
        clearInterval(this.interval);
        this.timer.next(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].connectExpiredTime);
    }
    resetCommandTimer() {
        clearInterval(this.commandInterval);
        this.commandTimer.next(5);
    }
};
BleService.ctorParameters = () => [
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_9__["BLE"] },
    { type: src_services_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }
];
BleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])({
        providedIn: 'root'
    })
], BleService);



/***/ }),

/***/ "NqkH":
/*!***************************************!*\
  !*** ./src/services/alert.service.ts ***!
  \***************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    presentAlert(msg, backdropDismiss = true, callback = () => { }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: msg,
                buttons: [{
                        text: '확인',
                        handler: callback
                    }],
                backdropDismiss,
            });
            yield alert.present();
        });
    }
    presentCustomizeAlert(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create(options);
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "gbkr":
/*!********************************************!*\
  !*** ./src/constants/watch-ble-command.ts ***!
  \********************************************/
/*! exports provided: COMMAND_TYPE_BAT, COMMAND_TYPE_RND, COMMAND_TYPE_RHD, COMMAND_TYPE_ROK, COMMAND_TYPE_REQ, COMMAND_TYPE_STS, COMMAND_TYPE_STH, COMMAND_TYPE_STE, COMMAND_TYPE_RTS, COMMAND_TYPE_RTH, COMMAND_TYPE_RTE, COMMAND_TYPE_SSE, RESPONSE_TYPE_HDA, RESPONSE_TYPE_NDA, RESPONSE_TYPE_END, RESPONSE_TYPE_STS, RESPONSE_TYPE_STH, RESPONSE_TYPE_STE, RESPONSE_TYPE_SSE, RESPONSE_TYPE_THR, RESPONSE_TYPE_ERR, RESPONSE_CONFIG_BUSY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_BAT", function() { return COMMAND_TYPE_BAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_RND", function() { return COMMAND_TYPE_RND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_RHD", function() { return COMMAND_TYPE_RHD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_ROK", function() { return COMMAND_TYPE_ROK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_REQ", function() { return COMMAND_TYPE_REQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_STS", function() { return COMMAND_TYPE_STS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_STH", function() { return COMMAND_TYPE_STH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_STE", function() { return COMMAND_TYPE_STE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_RTS", function() { return COMMAND_TYPE_RTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_RTH", function() { return COMMAND_TYPE_RTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_RTE", function() { return COMMAND_TYPE_RTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE_SSE", function() { return COMMAND_TYPE_SSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE_HDA", function() { return RESPONSE_TYPE_HDA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE_NDA", function() { return RESPONSE_TYPE_NDA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE_END", function() { return RESPONSE_TYPE_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE_STS", function() { return RESPONSE_TYPE_STS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE_STH", function() { return RESPONSE_TYPE_STH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE_STE", function() { return RESPONSE_TYPE_STE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE_SSE", function() { return RESPONSE_TYPE_SSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE_THR", function() { return RESPONSE_TYPE_THR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE_ERR", function() { return RESPONSE_TYPE_ERR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_CONFIG_BUSY", function() { return RESPONSE_CONFIG_BUSY; });
const COMMAND_TYPE_BAT = 'BAT#@';
const COMMAND_TYPE_RND = 'RND#@';
const COMMAND_TYPE_RHD = 'RHD#@';
const COMMAND_TYPE_ROK = 'ROK#@';
const COMMAND_TYPE_REQ = 'REQ#@';
const COMMAND_TYPE_STS = 'STS#@';
const COMMAND_TYPE_STH = 'STH#@';
const COMMAND_TYPE_STE = 'STE#@';
const COMMAND_TYPE_RTS = 'RTS#@';
const COMMAND_TYPE_RTH = 'RTH#@';
const COMMAND_TYPE_RTE = 'RTE#@';
const COMMAND_TYPE_SSE = 'SSE#@';
const RESPONSE_TYPE_HDA = 'HDA#@';
const RESPONSE_TYPE_NDA = 'NDA#@';
const RESPONSE_TYPE_END = 'END#@';
const RESPONSE_TYPE_STS = 'STS#OK@';
const RESPONSE_TYPE_STH = 'STH#OK@';
const RESPONSE_TYPE_STE = 'STE#OK@';
const RESPONSE_TYPE_SSE = 'SSE#@';
const RESPONSE_TYPE_THR = 'THR#@';
const RESPONSE_TYPE_ERR = 'ERR#';
const RESPONSE_CONFIG_BUSY = 'CONFIG BUSY';


/***/ })

}]);
//# sourceMappingURL=default~ble-test-ble-test-module~exercise-setting-exercise-setting-module~home-home-module~real-time~fb9b818b.js.map