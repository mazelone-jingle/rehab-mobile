(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exercise-setting-exercise-setting-module"],{

/***/ "1dmD":
/*!**************************************************!*\
  !*** ./src/services/exercise-setting.service.ts ***!
  \**************************************************/
/*! exports provided: ExerciseSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseSettingService", function() { return ExerciseSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "61FP");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constants_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/common */ "hugj");





let ExerciseSettingService = class ExerciseSettingService {
    constructor(alertSvc, storageSvc) {
        this.alertSvc = alertSvc;
        this.storageSvc = storageSvc;
    }
    checkIsNewPrescription(lastPrescription, newPrescription) {
        if (!lastPrescription || (new Date(lastPrescription.regDate).getTime() !== new Date(newPrescription.regDate).getTime())) {
            return true;
        }
        return false;
    }
    saveNewPrescriptionToStorage(newPrescription) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storageSvc.set(src_constants_common__WEBPACK_IMPORTED_MODULE_4__["PRESCRIPTION"], newPrescription);
        });
    }
    getLatestPrescriptionFromStorage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.storageSvc.get(src_constants_common__WEBPACK_IMPORTED_MODULE_4__["PRESCRIPTION"])) || {};
        });
    }
    newPrescriptionAlert(prescriptionInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const msg = `<p>${this.handleDateInfo(prescriptionInfo.regDate)}</p>
      <p>의사 : ${prescriptionInfo.regBy}</p>
    <p>새로운 운동 처방이 있습니다.</p>
    `;
            yield this.alertSvc.presentAlert(msg, false);
        });
    }
    handleDateInfo(dateData) {
        const date = new Date(dateData);
        const y = date.getFullYear();
        const M = date.getMonth() + 1;
        const d = date.getDate();
        const w = date.getDay();
        const h = date.getHours();
        const m = date.getMinutes();
        return `날짜: ${y}-${M}-${d} (${src_constants_common__WEBPACK_IMPORTED_MODULE_4__["WEEKDAYS"][w]}) ${h >= 12 ? '오후' : '오전'} ${h >= 12 ? h - 12 : h}시 ${m}분`;
    }
};
ExerciseSettingService.ctorParameters = () => [
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }
];
ExerciseSettingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], ExerciseSettingService);



/***/ }),

/***/ "Aaih":
/*!*********************************************************************!*\
  !*** ./src/app/exercise-setting/exercise-setting-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ExerciseSettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseSettingPageRoutingModule", function() { return ExerciseSettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _exercise_setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercise-setting.page */ "QOM/");




const routes = [
    {
        path: '',
        component: _exercise_setting_page__WEBPACK_IMPORTED_MODULE_3__["ExerciseSettingPage"]
    }
];
let ExerciseSettingPageRoutingModule = class ExerciseSettingPageRoutingModule {
};
ExerciseSettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExerciseSettingPageRoutingModule);



/***/ }),

/***/ "GO5m":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercise-setting/exercise-setting.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'exersice_info_setting' | translate}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"full\" (click)=\"startExercise()\">\n        {{'exercise_start' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"setting-item\">\n    <h3 class=\"title\">{{'target_hr' | translate}}</h3>\n    <ul class=\"range\">\n      <li class=\"lowest\">{{prescription?.hrMin}}<span>BPM</span></li>\n      <li>\n        <ul class=\"dots-info\">\n          <li class=\"lowest\">{{'lowest_hr' | translate}}</li>\n          <li class=\"hightest\">{{'hightest_hr' | translate}}</li>\n        </ul>\n        <ul class=\"dots\">\n          <li></li>\n          <li></li>\n          <li></li>\n          <li></li>\n          <li></li>\n          <li></li>\n        </ul>\n      </li>\n      <li class=\"hightest\">{{prescription?.hrMax}}<span>BPM</span></li>\n    </ul>\n  </div>\n  <ion-item class=\"prescription\">\n    <ion-label class=\"prescription-title\">\n      <h3 class=\"title\">{{'exercise_type' | translate}}</h3>\n    </ion-label>\n    <ul class=\"prescription-data\">\n      <li *ngFor=\"let type of prescription?.exerciseTypes\">{{type}}</li>\n    </ul>\n  </ion-item>\n  <ion-item class=\"prescription\" *ngFor=\"let step of prescription?.steps; index as i;\">\n    <div>\n      <ion-label class=\"prescription-title\">\n        <h3>{{'step' | translate}} {{i+1}}</h3>\n      </ion-label>\n      <ul class=\"prescription-data\">\n        <li>{{step.type}}</li>\n        <li>{{step.minute}} {{'minute' | translate}}</li>\n      </ul>\n    </div>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "P8nr":
/*!*************************************************************!*\
  !*** ./src/app/exercise-setting/exercise-setting.module.ts ***!
  \*************************************************************/
/*! exports provided: createTranslateLoader, ExerciseSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseSettingPageModule", function() { return ExerciseSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _exercise_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercise-setting-routing.module */ "Aaih");
/* harmony import */ var _exercise_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercise-setting.page */ "QOM/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/i18n/exercise-setting/', '.json');
}
let ExerciseSettingPageModule = class ExerciseSettingPageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
ExerciseSettingPageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"] }
];
ExerciseSettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _exercise_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExerciseSettingPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                },
                isolate: true
            })
        ],
        declarations: [_exercise_setting_page__WEBPACK_IMPORTED_MODULE_6__["ExerciseSettingPage"]]
    })
], ExerciseSettingPageModule);



/***/ }),

/***/ "QOM/":
/*!***********************************************************!*\
  !*** ./src/app/exercise-setting/exercise-setting.page.ts ***!
  \***********************************************************/
/*! exports provided: ExerciseSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseSettingPage", function() { return ExerciseSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_exercise_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./exercise-setting.page.html */ "GO5m");
/* harmony import */ var _exercise_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-setting.page.scss */ "kPrI");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/modals/devices-modal/devices-modal.component */ "KZRF");
/* harmony import */ var src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/watch-ble-command */ "gbkr");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/auth.service */ "LLt/");
/* harmony import */ var src_services_ble_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/ble.service */ "/zZW");
/* harmony import */ var src_services_exercise_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/exercise-setting.service */ "1dmD");
/* harmony import */ var src_services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/loading.service */ "qozY");
/* harmony import */ var src_services_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/logger.service */ "O0ov");
/* harmony import */ var src_services_prescription_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/prescription.service */ "2VRz");
/* harmony import */ var src_services_push_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/push-notification.service */ "v5U8");
/* harmony import */ var src_services_watch_command_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/watch-command.service */ "Ut+J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ "TEn/");


















let ExerciseSettingPage = class ExerciseSettingPage {
    constructor(exerciseSettingSvc, ble, alertSvc, pushNotificationSvc, authSvc, prescriptionSvc, loadingSvc, modalController, router, watchCommandSvc, loggerSvc) {
        this.exerciseSettingSvc = exerciseSettingSvc;
        this.ble = ble;
        this.alertSvc = alertSvc;
        this.pushNotificationSvc = pushNotificationSvc;
        this.authSvc = authSvc;
        this.prescriptionSvc = prescriptionSvc;
        this.loadingSvc = loadingSvc;
        this.modalController = modalController;
        this.router = router;
        this.watchCommandSvc = watchCommandSvc;
        this.loggerSvc = loggerSvc;
        this.devices = [];
        this.rateArray = [];
        this.connectSubscription = null;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.prescription = yield this.exerciseSettingSvc.getLatestPrescriptionFromStorage();
        });
    }
    ionViewWillEnter() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.setSubscriptions();
    }
    setExerciseInfoData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingSvc.create('Getting data...');
            yield this.loadingSvc.present();
            yield this.watchCommandSvc.sendBAT();
        });
    }
    setSubscriptions() {
        this.sub.add(this.ble.BATService$
            .subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.router.url.includes('exercise-setting')) {
                    const batPattern = new RegExp(/^BAT#[0-9]{1,3}@$/g);
                    if (batPattern.test(obs)) {
                        this.callBATTimes = 0;
                        yield this.loadingSvc.dismiss();
                        this.ble.handleBAT(obs);
                        yield this.watchCommandSvc.sendSTS();
                    }
                    else {
                        if (this.callBATTimes >= 10) {
                            yield this.ble.disconnect();
                            yield this.presentScanFailedAlert();
                        }
                        else {
                            this.callBATTimes++;
                            yield this.watchCommandSvc.sendBAT();
                        }
                    }
                }
            }),
            error: (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loggerSvc.error('BAT error', err);
            }),
            complete: () => {
                this.loggerSvc.info('BAT complete');
            }
        }));
        this.sub.add(this.ble.STSService$
            .subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_5__["RESPONSE_TYPE_STS"]) {
                    yield this.watchCommandSvc.sendSTH(this.prescription);
                }
            }),
            error: (err) => {
                this.loggerSvc.error('STS error', err);
            },
            complete: () => {
                this.loggerSvc.info('STS complete');
            }
        }));
        this.sub.add(this.ble.STHService$
            .subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_5__["RESPONSE_TYPE_STH"]) {
                    yield this.watchCommandSvc.sendSTE(this.prescription);
                }
            }),
            error: (err) => {
                this.loggerSvc.error('STH error', err);
            },
            complete: () => {
                this.loggerSvc.info('STH complete');
            }
        }));
        this.sub.add(this.ble.STEService$
            .subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (obs.includes(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_5__["RESPONSE_TYPE_STE"])) {
                    const msg = `시계로 처방전 전송이 완료되었습니다.`;
                    yield this.alertSvc.presentAlert(msg, false, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.ble.disconnect();
                    }));
                }
            }),
            error: (err) => {
                this.loggerSvc.error('STE error', err);
            },
            complete: () => {
                this.loggerSvc.info('STE complete');
            }
        }));
    }
    startExercise() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.ble.isConnected()) {
                this.alertSvc.presentCustomizeAlert({
                    message: '처방전 데이터를 시계로 전송하시겠습니까?',
                    buttons: [
                        {
                            text: '설정완료',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                this.setExerciseInfoData();
                            }),
                        },
                        {
                            text: '취소',
                            handler: () => {
                            },
                        },
                    ],
                    backdropDismiss: false,
                });
            }
            else {
                this.scanBLE();
            }
        });
    }
    scanBLE() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.devices = [];
            yield this.loadingSvc.create('Scan...');
            yield this.loadingSvc.present();
            return this.ble.scan()
                .subscribe({
                next: (device) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (device) {
                        if (this.devices.indexOf((d) => d.id === device.id) < 0) {
                            this.devices.push(device);
                        }
                    }
                }),
                error: (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
                    yield this.presentScanFailedAlert();
                }),
                complete: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    if (this.devices.length > 0) {
                        const modal = yield this.modalController.create({
                            component: src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_4__["DevicesModalComponent"],
                            cssClass: 'devices-modal',
                            backdropDismiss: false,
                            componentProps: {
                                devicesList: this.devices,
                                // TODO: i18n
                                title: '시계와 연결되어 있지 않습니다. 데이터 전송하시려면 디바이스를 선택해주세요.'
                            },
                        });
                        yield modal.present();
                        const { data } = yield modal.onWillDismiss();
                        if (data) {
                            yield this.connect(data.id);
                        }
                    }
                    else {
                        yield this.presentScanFailedAlert();
                    }
                })
            });
        });
    }
    presentScanFailedAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alertOptions = {
                message: '스캔 실패했습니다. 디시 시도하시겠습니까?',
                buttons: [
                    {
                        text: '확인',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.scanBLE();
                        }),
                    },
                    {
                        text: '취소',
                        handler: () => {
                        },
                    },
                ],
                backdropDismiss: false,
            };
            yield this.alertSvc.presentCustomizeAlert(alertOptions);
        });
    }
    connect(deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingSvc.create('Connect...');
            yield this.loadingSvc.present();
            this.connectSubscription = this.ble
                .connect(deviceId)
                .subscribe({
                next: (peripheral) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    this.peripheral = peripheral;
                    this.setExerciseInfoData();
                }),
                error: (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // this.ble.connectStatus = false;
                    yield this.loadingSvc.dismiss();
                    yield this.presentConnectFailedAlert(deviceId);
                }),
                complete: () => { }
            });
            return this.connectSubscription;
        });
    }
    presentConnectFailedAlert(deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alertOptions = {
                message: '연결 실패했습니다. 디시 시도하시겠습니까?',
                buttons: [
                    {
                        text: '확인',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.connect(deviceId);
                        }),
                    },
                    {
                        text: '취소',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        }),
                    },
                ],
                backdropDismiss: false,
            };
            yield this.alertSvc.presentCustomizeAlert(alertOptions);
        });
    }
    ionViewWillLeave() {
        if (this.connectSubscription) {
            this.connectSubscription.unsubscribe();
        }
        this.sub.unsubscribe();
    }
};
ExerciseSettingPage.ctorParameters = () => [
    { type: src_services_exercise_setting_service__WEBPACK_IMPORTED_MODULE_9__["ExerciseSettingService"] },
    { type: src_services_ble_service__WEBPACK_IMPORTED_MODULE_8__["BleService"] },
    { type: src_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_services_push_notification_service__WEBPACK_IMPORTED_MODULE_13__["PushNotificationService"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_services_prescription_service__WEBPACK_IMPORTED_MODULE_12__["PrescriptionService"] },
    { type: src_services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"] },
    { type: src_services_watch_command_service__WEBPACK_IMPORTED_MODULE_14__["WatchCommandService"] },
    { type: src_services_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"] }
];
ExerciseSettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["Component"])({
        selector: 'app-exercise-setting',
        template: _raw_loader_exercise_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_exercise_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExerciseSettingPage);



/***/ }),

/***/ "kPrI":
/*!*************************************************************!*\
  !*** ./src/app/exercise-setting/exercise-setting.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\nol, ul {\n  list-style: none;\n}\n.icon {\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n}\n.icon-alarm {\n  background-image: url('alarm.svg');\n}\n.icon-book {\n  background-image: url('book.svg');\n}\n.icon-calendar {\n  background-image: url('calendar.svg');\n}\n.icon-contact_information {\n  background-image: url('identification.svg');\n}\n.icon-content {\n  background-image: url('content.svg');\n}\n.icon-jogging {\n  background-image: url('jogging.svg');\n}\n.icon-search {\n  background-image: url('search.svg');\n}\n.icon-translate {\n  background-image: url('translate.svg');\n}\n.icon-battery-30 {\n  background-image: url('battery-30.svg');\n}\n.icon-battery-50 {\n  background-image: url('battery-50.svg');\n}\n.icon-battery-80 {\n  background-image: url('battery-80.svg');\n}\n.icon-battery-100 {\n  background-image: url('battery-100.svg');\n}\n.icon-heartbeat {\n  background-image: url('heartbeat.svg');\n}\n.icon-schedule {\n  background-image: url('schedule.svg');\n}\n.icon-clock {\n  background-image: url('clock.svg');\n}\n.icon-bluetooth {\n  background-image: url('bluetooth.svg');\n}\n.mt-8 {\n  margin-top: 8px;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.mr-8 {\n  margin-right: 8px;\n}\n.mr-16 {\n  margin-right: 16px;\n}\n.mb-8 {\n  margin-bottom: 8px;\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.ml-8 {\n  margin-left: 8px;\n}\n.ml-16 {\n  margin-left: 16px;\n}\n.prescription > div {\n  width: 100%;\n  padding: 10px 0;\n}\n.prescription-title {\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n}\n.prescription i {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n}\n.prescription-data {\n  color: #aaa;\n  font-size: 24px;\n  text-align: right;\n}\n.setting-item {\n  margin: 20px 0 30px;\n}\n.setting-item .title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 16px;\n  text-align: center;\n}\n.setting-item .range {\n  display: flex;\n  justify-content: space-around;\n  font-weight: bold;\n  font-size: 36px;\n}\n.setting-item .range > li span {\n  font-size: 12px;\n}\n.setting-item .range .lowest {\n  color: #40b5b0;\n}\n.setting-item .range .hightest {\n  color: #ce3632;\n}\n.setting-item .range .dots {\n  font-size: 12px;\n  display: flex;\n  justify-content: space-between;\n}\n.setting-item .range .dots li::after {\n  content: \"•\";\n  margin-right: 8px;\n  margin-left: 8px;\n}\n.setting-item .range .dots li:nth-child(1) {\n  color: #3fb9b1;\n}\n.setting-item .range .dots li:nth-child(2) {\n  color: #5f9e98;\n}\n.setting-item .range .dots li:nth-child(3) {\n  color: #7f8583;\n}\n.setting-item .range .dots li:nth-child(4) {\n  color: #9d6c6a;\n}\n.setting-item .range .dots li:nth-child(5) {\n  color: #c04f57;\n}\n.setting-item .range .dots li:nth-child(6) {\n  color: #e1363d;\n}\n.setting-item .range .dots-info {\n  font-size: 12px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4ZXJjaXNlLXNldHRpbmcucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vdGhlbWUvcmVzZXQvX3Jlc2V0LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi90aGVtZS9pY29ucy9faWNvbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3RoZW1lL2xheW91dC9fbWFyZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBREVEO0FDUUE7RUFDQyxnQkFBQTtBRExEO0FFeEJBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FGMkJGO0FFeEJBO0VBQ0Usa0NBQUE7QUYyQkY7QUV6QkE7RUFDRSxpQ0FBQTtBRjRCRjtBRTFCQTtFQUNFLHFDQUFBO0FGNkJGO0FFM0JBO0VBQ0UsMkNBQUE7QUY4QkY7QUU1QkE7RUFDRSxvQ0FBQTtBRitCRjtBRTdCQTtFQUNFLG9DQUFBO0FGZ0NGO0FFOUJBO0VBQ0UsbUNBQUE7QUZpQ0Y7QUUvQkE7RUFDRSxzQ0FBQTtBRmtDRjtBRS9CQTtFQUNFLHVDQUFBO0FGa0NGO0FFL0JBO0VBQ0UsdUNBQUE7QUZrQ0Y7QUUvQkE7RUFDRSx1Q0FBQTtBRmtDRjtBRS9CQTtFQUNFLHdDQUFBO0FGa0NGO0FFL0JBO0VBQ0Usc0NBQUE7QUZrQ0Y7QUUvQkE7RUFDRSxxQ0FBQTtBRmtDRjtBRS9CQTtFQUNFLGtDQUFBO0FGa0NGO0FFL0JBO0VBQ0Usc0NBQUE7QUZrQ0Y7QUczRkk7RUFDRSxlQUFBO0FIOEZOO0FHNUZJO0VBQ0UsZ0JBQUE7QUg4Rk47QUcxRkk7RUFDRSxpQkFBQTtBSDRGTjtBRzFGSTtFQUNFLGtCQUFBO0FINEZOO0FHeEZJO0VBQ0Usa0JBQUE7QUgwRk47QUd4Rkk7RUFDRSxtQkFBQTtBSDBGTjtBR3RGSTtFQUNFLGdCQUFBO0FId0ZOO0FHdEZJO0VBQ0UsaUJBQUE7QUh3Rk47QUFwSEU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQXVISjtBQXJIRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdUhKO0FBckhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXVISjtBQXJIRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF1SEo7QUFuSEE7RUFDRSxtQkFBQTtBQXNIRjtBQXJIRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF1SEo7QUFySEU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUF1SEo7QUFySE07RUFDRSxlQUFBO0FBdUhSO0FBcEhJO0VBQ0UsY0FBQTtBQXNITjtBQXBISTtFQUNFLGNBQUE7QUFzSE47QUFwSEk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBc0hOO0FBcEhRO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFzSFY7QUFwSFE7RUFDRSxjQUFBO0FBc0hWO0FBcEhRO0VBQ0UsY0FBQTtBQXNIVjtBQXBIUTtFQUNFLGNBQUE7QUFzSFY7QUFwSFE7RUFDRSxjQUFBO0FBc0hWO0FBcEhRO0VBQ0UsY0FBQTtBQXNIVjtBQXBIUTtFQUNFLGNBQUE7QUFzSFY7QUFsSEk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFvSE4iLCJmaWxlIjoiZXhlcmNpc2Utc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi90aGVtZS90aGVtZS5zY3NzJztcclxuXHJcbi5wcmVzY3JpcHRpb24ge1xyXG4gID5kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gICYtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgaSB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuICAmLWRhdGEge1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXR0aW5nLWl0ZW0ge1xyXG4gIG1hcmdpbjogMjBweCAwIDMwcHg7XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnJhbmdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgPmxpIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubG93ZXN0IHtcclxuICAgICAgY29sb3I6ICM0MGI1YjA7XHJcbiAgICB9XHJcbiAgICAuaGlnaHRlc3Qge1xyXG4gICAgICBjb2xvcjogI2NlMzYzMjtcclxuICAgIH1cclxuICAgIC5kb3RzIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGxpIHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlxcMjAyMlwiO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBjb2xvcjogIzNmYjliMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgY29sb3I6ICM1ZjllOTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgIGNvbG9yOiAjN2Y4NTgzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICBjb2xvcjogIzlkNmM2YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgICAgY29sb3I6ICNjMDRmNTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICAgIGNvbG9yOiAjZTEzNjNkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRvdHMtaW5mbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8vIC8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbi8vIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG4vLyBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuLy8gXHRkaXNwbGF5OiBibG9jaztcbi8vIH1cbi8vIGJvZHkge1xuLy8gXHRsaW5lLWhlaWdodDogMTtcbi8vIH1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4vLyBibG9ja3F1b3RlLCBxIHtcbi8vIFx0cXVvdGVzOiBub25lO1xuLy8gfVxuLy8gYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG4vLyBxOmJlZm9yZSwgcTphZnRlciB7XG4vLyBcdGNvbnRlbnQ6ICcnO1xuLy8gXHRjb250ZW50OiBub25lO1xuLy8gfVxuLy8gdGFibGUge1xuLy8gXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuLy8gXHRib3JkZXItc3BhY2luZzogMDtcbi8vIH1cbiIsIi5pY29uIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaWNvbi1hbGFybSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYWxhcm0uc3ZnJyk7XG59XG4uaWNvbi1ib29rIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9ib29rLnN2ZycpO1xufVxuLmljb24tY2FsZW5kYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2NhbGVuZGFyLnN2ZycpO1xufVxuLmljb24tY29udGFjdF9pbmZvcm1hdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vaWRlbnRpZmljYXRpb24uc3ZnJyk7XG59XG4uaWNvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9jb250ZW50LnN2ZycpO1xufVxuLmljb24tam9nZ2luZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vam9nZ2luZy5zdmcnKTtcbn1cbi5pY29uLXNlYXJjaCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZycpO1xufVxuLmljb24tdHJhbnNsYXRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi90cmFuc2xhdGUuc3ZnJyk7XG59XG5cbi5pY29uLWJhdHRlcnktMzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JhdHRlcnktMzAuc3ZnJyk7XG59XG5cbi5pY29uLWJhdHRlcnktNTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JhdHRlcnktNTAuc3ZnJyk7XG59XG5cbi5pY29uLWJhdHRlcnktODAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JhdHRlcnktODAuc3ZnJyk7XG59XG5cbi5pY29uLWJhdHRlcnktMTAwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9iYXR0ZXJ5LTEwMC5zdmcnKTtcbn1cblxuLmljb24taGVhcnRiZWF0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9oZWFydGJlYXQuc3ZnJyk7XG59XG5cbi5pY29uLXNjaGVkdWxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9zY2hlZHVsZS5zdmcnKTtcbn1cblxuLmljb24tY2xvY2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2Nsb2NrLnN2ZycpO1xufVxuXG4uaWNvbi1ibHVldG9vdGgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JsdWV0b290aC5zdmcnKTtcbn1cbiIsIi8vbWFyZ2luXG4ubXtcbiAgJnR7IC8vdG9wXG4gICAgJi04IHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG4gICAgJi0xNiB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgfVxuICAmcnsgLy9yaWdodFxuICAgICYtOCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gICAgJi0xNiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICB9XG4gICZieyAvL2JvdHRvbVxuICAgICYtOCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgICYtMTYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG4gIH1cbiAgJmx7IC8vbGVmdFxuICAgICYtOCB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbiAgICAmLTE2IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "v5U8":
/*!***************************************************!*\
  !*** ./src/services/push-notification.service.ts ***!
  \***************************************************/
/*! exports provided: PushNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationService", function() { return PushNotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "61FP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ "NqkH");
/* harmony import */ var src_constants_storage_key__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/storage-key */ "/z6A");







let PushNotificationService = class PushNotificationService {
    constructor(localNotifications, platForm, alertSvc, storageSvc) {
        this.localNotifications = localNotifications;
        this.platForm = platForm;
        this.alertSvc = alertSvc;
        this.storageSvc = storageSvc;
        this.platForm.ready().then(() => {
            this.localNotifications.on('click').subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('click:', res);
                //   let msg = res.data ? res.data.page : ''
                //   await this.alertSvc.presentCustomizeAlert({
                //     message: msg,
                //     title: res.title,
                //     subTitle: res.text,
                //     backDropDismiss:  false,
                //     buttons: [{
                //       text: '확인',
                //     }]
                //   })
            }));
            this.localNotifications.on('trigger').subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('trigger:', res);
                //   let msg = res.data ? res.data.page : ''
                //   await this.alertSvc.presentCustomizeAlert({
                //     message: msg,
                //     title: res.title,
                //     subTitle: res.text,
                //     backDropDismiss:  false,
                //     buttons: [{
                //       text: '확인',
                //     }]
                //   })
            }));
        });
    }
    prepareNotification(title, text) {
        this.localNotifications.schedule({
            title,
            text,
        });
    }
    scheduleNotification2(title, text) {
        this.localNotifications.schedule({
            title,
            text,
            data: { data: 'routing...' },
            trigger: { in: 5, unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["ELocalNotificationTriggerUnit"].SECOND },
            foreground: true
        });
    }
    recurringNotification(title, text) {
        this.localNotifications.schedule({
            title,
            text,
            data: { page: 'routing...' },
            trigger: { in: 5, unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["ELocalNotificationTriggerUnit"].SECOND },
            foreground: true
        });
    }
    setNotification(notification) {
        notification.repeatWeekday.forEach((weekday) => {
            const hour = +notification.time.substring(0, notification.time.indexOf(':'));
            const minute = +notification.time.substring(notification.time.indexOf(':') + 1);
            const alarm = {
                id: +`${notification.id}${weekday.id}`,
                title: '운동시간입니다',
                text: '운동합시다!!!',
                // data: { page: 'routing...' },
                vibrate: notification.vibration,
                silent: !notification.sound,
                sound: notification.music,
                count: 1,
                every: { weekday: weekday.id, hour, minute, second: 0 },
                foreground: true,
            };
            this.scheduleNotification(alarm);
        });
    }
    scheduleNotification(options) {
        this.localNotifications.schedule(options);
        // cordova.plugins.notification.local.schedule(options);
    }
    deleteNotificationById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.localNotifications.cancel(id);
        });
    }
    getScheduledNotifications() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const notis = yield this.localNotifications.getAll();
            console.warn(notis);
        });
    }
    clearAllNotification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.localNotifications.cancelAll();
            yield this.localNotifications.clearAll();
            yield this.storageSvc.remove(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_LIST"]);
        });
    }
};
PushNotificationService.ctorParameters = () => [
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }
];
PushNotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PushNotificationService);



/***/ })

}]);
//# sourceMappingURL=exercise-setting-exercise-setting-module.js.map