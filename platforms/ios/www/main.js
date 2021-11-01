(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/z6A":
/*!**************************************!*\
  !*** ./src/constants/storage-key.ts ***!
  \**************************************/
/*! exports provided: LANG, NOTIFICATION_LIST, NOTIFICATION_STATUS, NOTIFICATION_TIME, NOTIFICATION_SOUND, NOTIFICATION_VIBRATION, NOTIFICATION_MUSIC, REPEAT_WEEKDAY, IS_REMEMBER_EMAIL, LAST_EMAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG", function() { return LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_LIST", function() { return NOTIFICATION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_STATUS", function() { return NOTIFICATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_TIME", function() { return NOTIFICATION_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_SOUND", function() { return NOTIFICATION_SOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_VIBRATION", function() { return NOTIFICATION_VIBRATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_MUSIC", function() { return NOTIFICATION_MUSIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPEAT_WEEKDAY", function() { return REPEAT_WEEKDAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_REMEMBER_EMAIL", function() { return IS_REMEMBER_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_EMAIL", function() { return LAST_EMAIL; });
const LANG = 'lang';
const NOTIFICATION_LIST = 'notificationList';
const NOTIFICATION_STATUS = 'status';
const NOTIFICATION_TIME = 'time';
const NOTIFICATION_SOUND = 'sound';
const NOTIFICATION_VIBRATION = 'vibration';
const NOTIFICATION_MUSIC = 'music';
const REPEAT_WEEKDAY = 'repeatWeekday';
const IS_REMEMBER_EMAIL = 'isRememberEmail';
const LAST_EMAIL = 'email';


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jingle/Documents/test/rehab-mobile/src/main.ts */"zUnb");


/***/ }),

/***/ "0U9C":
/*!******************************************************!*\
  !*** ./src/components/modals/rpe/rpe.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJycGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "5Xck":
/*!**********************************************************************************!*\
  !*** ./src/components/modals/detail-list-modal/detail-list-modal.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtbGlzdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "61FP":
/*!*****************************************!*\
  !*** ./src/services/storage.service.ts ***!
  \*****************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "LLt/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");





let StorageService = class StorageService {
    constructor(ionicStorage, authSvc, loggerSvc, zone) {
        this.ionicStorage = ionicStorage;
        this.authSvc = authSvc;
        this.loggerSvc = loggerSvc;
        this.zone = zone;
        this.storage = null;
        this.userName = '';
        // this.init();
        this.userName = this.authSvc.username;
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage = yield this.ionicStorage.create();
        });
    }
    set(key, value) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const oldData = yield this.getDataOfUser();
            const newValue = {};
            newValue[key] = value;
            const newData = Object.assign(Object.assign({}, oldData), newValue);
            yield ((_a = this.storage) === null || _a === void 0 ? void 0 : _a.set(this.userName, newData));
        });
    }
    get(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.getDataOfUser();
            if (data) {
                console.warn('user data:', data);
                return data[key];
            }
            return false;
        });
    }
    remove(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.getDataOfUser();
            delete data[key];
            yield this.storage.set(this.userName, data);
        });
    }
    clearUserData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.remove(this.userName);
        });
    }
    getDataOfUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storage.get(this.userName).then((data) => resolve(data)).catch((err) => reject(false)); }));
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "6od+":
/*!****************************************************************!*\
  !*** ./src/components/modals/hr-detail/hr-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: HrDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrDetailComponent", function() { return HrDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hr_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hr-detail.component.html */ "rBcA");
/* harmony import */ var _hr_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hr-detail.component.scss */ "w2d2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chartjs-plugin-annotation */ "Ym+k");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_7__);








let HrDetailComponent = class HrDetailComponent {
    constructor(modalController, screenOrientation) {
        this.modalController = modalController;
        this.screenOrientation = screenOrientation;
        this.secDisplayUnit = 10;
        this.dataset = [];
        this.chart = [];
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    ngOnInit() {
        this.createCanvas();
    }
    createCanvas() {
        this.canvas = document.createElement('canvas');
        const ctx = this.canvas.getContext('2d');
        chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"].plugins.register({ chartAnnotation: chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_7__ });
        setTimeout(() => {
            this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](ctx, {
                type: 'line',
                data: {
                    labels: this.hrData.split(',')
                        .map((_, idx) => idx)
                        .map(data => {
                        if (data % this.secDisplayUnit === 0) {
                            let min = Math.floor(data / 60);
                            if (min < 10) {
                                min = `0${min}`;
                            }
                            let sec = data % 60;
                            if (sec === 0) {
                                sec = `00`;
                            }
                            return `${min}:${sec}`;
                        }
                        else {
                            return '';
                        }
                    }),
                    datasets: [
                        {
                            label: '# of Heart beat',
                            data: this.hrData.split(','),
                            fill: false,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }],
                        xAxes: [{
                                ticks: {
                                    autoSkip: false,
                                    beginAtZero: true
                                }
                            }]
                    },
                    annotation: {
                        annotations: [{
                                type: 'box',
                                xScaleID: 'x-axis-0',
                                yScaleID: 'y-axis-0',
                                yMin: this.prescription.hrMin,
                                yMax: this.prescription.hrMax,
                                borderWidth: 1,
                                backgroundColor: 'rgba(20, 173, 35, 0.2)',
                                borderColor: 'rgba(20, 173, 35, 0.2)',
                            }]
                    }
                },
            });
        }, 100);
    }
    ngAfterViewInit() {
        const location = document.getElementById('recordDetail');
        location.appendChild(this.canvas);
    }
    dismissModal() {
        this.screenOrientation.unlock();
        this.modalController.dismiss();
    }
};
HrDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"] }
];
HrDetailComponent.propDecorators = {
    hrData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    prescription: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HrDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hr-detail',
        template: _raw_loader_hr_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hr_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HrDetailComponent);



/***/ }),

/***/ "87Hk":
/*!************************************************************************!*\
  !*** ./src/components/modals/connect-modal/connect-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: ConnectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectModalComponent", function() { return ConnectModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_connect_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./connect-modal.component.html */ "IyIa");
/* harmony import */ var _theme_modals_connect_modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/modals/_connect-modal.scss */ "jk4M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ConnectModalComponent = class ConnectModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.isConnect = true;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss({ isConnect: this.isConnect });
    }
    radioGroupChange(e) {
        this.isConnect = e.detail.value === 'connect' ? true : false;
    }
};
ConnectModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ConnectModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-connect-modal',
        template: _raw_loader_connect_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_theme_modals_connect_modal_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConnectModalComponent);



/***/ }),

/***/ "AcVy":
/*!************************************!*\
  !*** ./src/services/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "LLt/");




let AuthGuard = class AuthGuard {
    constructor(router, authSvc) {
        this.router = router;
        this.authSvc = authSvc;
    }
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['./login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiDomain: 'http://rehab-web.site/',
    rehabHubUrl: 'http://rehab-web.site/rehap',
    // apiDomain: 'https://localhost:44332/',
    // rehabHubUrl: 'https://localhost:44332/rehap',
    bleScanSec: 5,
    bleDeviceService: 'FFF0',
    wearable2mobile: 'FFF1',
    mobile2wearable: 'FFF2',
    connectExpiredTime: 5 * 60,
    useDummyData: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B7cR":
/*!**************************************************************!*\
  !*** ./src/components/modals/get-data/get-data.component.ts ***!
  \**************************************************************/
/*! exports provided: GetDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataComponent", function() { return GetDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_get_data_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./get-data.component.html */ "P08B");
/* harmony import */ var _get_data_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-data.component.scss */ "GWzA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let GetDataComponent = class GetDataComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss();
    }
};
GetDataComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
GetDataComponent.propDecorators = {
    isGettingData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
GetDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-data',
        template: _raw_loader_get_data_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_get_data_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GetDataComponent);



/***/ }),

/***/ "GWzA":
/*!****************************************************************!*\
  !*** ./src/components/modals/get-data/get-data.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtZGF0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "IyIa":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/connect-modal/connect-modal.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #modalContent>\n  <div class=\"wrap\">\n    <ion-radio-group value=\"connect\"\n    (ionChange)=\"radioGroupChange($event)\">\n      <ion-item>\n        <ion-label>{{'connect' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"connect\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">{{'see_records' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"unconnect\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ion-content>\n\n<ion-footer #modalFooter>\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"dismissModal()\">{{'finish_setting' | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "KNNm":
/*!*********************************************!*\
  !*** ./src/interceptors/app.interceptor.ts ***!
  \*********************************************/
/*! exports provided: AppInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "LLt/");
/* harmony import */ var src_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/logger.service */ "O0ov");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let AppInterceptor = class AppInterceptor {
    constructor(inj, router, loggerSvc) {
        this.inj = inj;
        this.router = router;
        this.loggerSvc = loggerSvc;
        this.httpHeader = { 'Content-Type': 'application/json' };
    }
    intercept(req, next) {
        const requestUrl = req.url;
        // Admin 기능을 접근할 때에는 admin auth service를 이용.
        const authService = this.inj.get(src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]); //authservice is an angular service
        // Get the auth header from the service.
        const authorization = 'Bearer ' + authService.token;
        let headers = {};
        //console.log('instanceOf FormData', req.body instanceof FormData);
        //console.log('ori.content.type', req.headers.get('Content-Type'));
        if (!(req.body instanceof FormData)) {
            headers = this.httpHeader;
            const reqContentType = req.headers.get('Content-Type');
            if (reqContentType != null) {
                headers['Content-Type'] = reqContentType;
            }
        }
        //console.log('headers', headers);
        if (authService.token != null) {
            headers.authorization = authorization;
        }
        // Clone the request to add the new header.
        const authReq = req.clone({ headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headers) });
        // console.log('authReq', req.headers);
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && event.status === 204) {
                return null;
            }
            return authReq;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error, caught) => {
            this.loggerSvc.error({ error, caught });
            // Refresh token.
            if (error.status === 401) {
                if (authService.refreshToken != null) {
                    const reqBody = req.body;
                    // When refresh token failed.
                    if (req.url.includes('api/Token') &&
                        reqBody !== undefined &&
                        reqBody.grantType === src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["GrantTypes"].refresh) {
                        throw error;
                    }
                    else {
                        return authService.extendToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((t) => {
                            const authReq = req.clone({
                                headers: req.headers.set('authorization', 'Bearer ' + authService.token),
                            });
                            return next.handle(authReq);
                        }));
                    }
                }
                else {
                    throw error;
                }
            }
            else if (error.status === 404 || error.status === 500) {
                // TODO: report....
                this.loggerSvc.log('err', error, error.error);
                //return next.handle(authReq);
                throw error;
            }
            else if (error.status === 400 &&
                error.error === 'Could not verify auth request') {
                authService.logOut();
                this.router.navigate(['/']);
            }
            //return all others errors
            throw error;
        }));
    }
};
AppInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] }
];
AppInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])()
], AppInterceptor);



/***/ }),

/***/ "KZRF":
/*!************************************************************************!*\
  !*** ./src/components/modals/devices-modal/devices-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: DevicesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesModalComponent", function() { return DevicesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_devices_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./devices-modal.component.html */ "uKVS");
/* harmony import */ var _devices_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devices-modal.component.scss */ "s42a");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let DevicesModalComponent = class DevicesModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.title = '';
        this.devicesList = [];
    }
    ngOnInit() { }
    dismissModal(isSelected) {
        if (isSelected) {
            this.modalController.dismiss({ id: this.deviceId });
        }
        else {
            this.modalController.dismiss();
        }
    }
    radioGroupChange(e) {
        this.deviceId = e.detail.value;
    }
};
DevicesModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
DevicesModalComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    devicesList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
DevicesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-devices-modal',
        template: _raw_loader_devices_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_devices_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DevicesModalComponent);



/***/ }),

/***/ "LLt/":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService, GrantTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrantTypes", function() { return GrantTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger.service */ "O0ov");







let AuthService = class AuthService {
    constructor(http, logger, platformId) {
        this.http = http;
        this.logger = logger;
        this.platformId = platformId;
        this._userKey = 'currentUser';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiDomain + 'api/Token';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.headers = this.headers.append('Content-type', 'application/json');
        const user = localStorage.getItem(this._userKey);
        if (user) {
            const currentUser = JSON.parse(user);
            this._token = currentUser && currentUser.token;
        }
    }
    get stored() {
        const value = localStorage.getItem(this._userKey);
        return value != null ? JSON.parse(value) : '';
    }
    get token() {
        if (this.stored) {
            return this.stored.token;
        }
        else {
            return null;
        }
    }
    get expires_in() {
        if (this.stored) {
            return this.stored.expires_in;
        }
        else {
            return null;
        }
    }
    get refreshToken() {
        if (this.stored) {
            return this.stored.refreshToken;
        }
        else {
            return null;
        }
    }
    get username() {
        return this.stored !== null ? this.stored.username : '';
    }
    login(userInfo) {
        const request = {
            email: userInfo.email,
            password: userInfo.password,
            grantType: GrantTypes.password,
            refreshToken: '',
        };
        return this.callTokenApi(request);
    }
    extendToken() {
        const request = {
            email: this.username,
            password: '',
            refreshToken: this.refreshToken,
            grantType: GrantTypes.refresh,
        };
        return this.callTokenApi(request);
    }
    callTokenApi(data /*, rememberMe: boolean*/) {
        return this.http
            .post(`${this.baseUrl}/Patient`, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            const token = response;
            // parse payload
            const payloads = token.token.substring(token.token.indexOf('.') + 1, token.token.lastIndexOf('.'));
            const decoded = atob(payloads);
            const parsed = JSON.parse(decoded);
            if (token) {
                this._token = token.token;
                this._expires_in = token.expires_in;
                this._refreshToken = token.refresh_token;
                const now = new Date();
                now.setSeconds(now.getSeconds() + token.expires_in);
                this.expire = now;
                const serializeObj = {
                    username: data.email,
                    domain: parsed.domain,
                    token: this._token,
                    expires_in: this._expires_in,
                    refreshToken: this._refreshToken,
                };
                localStorage.setItem(this._userKey, JSON.stringify(serializeObj));
            }
            return !!token;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err)));
    }
    logOut() {
        this._token = null;
        localStorage.removeItem(this._userKey);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);

const GrantTypes = {
    password: 'password',
    refresh: 'refresh',
};


/***/ }),

/***/ "NtM8":
/*!**************************************!*\
  !*** ./src/services/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "LLt/");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let HttpService = class HttpService {
    constructor(http, baseUrl, route, router, logger, authSvc) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.logger = logger;
        this.authSvc = authSvc;
        this.baseUrl = baseUrl;
    }
    get authHeader() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Bearer ' + this.authSvc.token);
        return headers;
    }
    get headers() {
        let headers = this.authHeader;
        headers = headers.append('Content-type', 'application/json');
        return headers;
    }
    get multipartHeaders() {
        let headers = this.authHeader;
        //headers = headers.append('Content-type', 'multipart/form-data');
        return headers;
    }
    getAll() {
        this.logger.log('headers', this.headers);
        return this.http.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((data) => { this.logger.log('getAll.data', JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => { return this.handleError(err); }));
    }
    get(idx) {
        return this.http.get([this.baseUrl, idx].join('/'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((data) => { this.logger.log('get.data', JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => { return this.handleError(err); }));
    }
    create(item) {
        return this.http.post(this.baseUrl, JSON.stringify(item))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => { this.logger.log('post.data', JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => this.handleError(err)));
    }
    update(idx, item) {
        return this.http.put([this.baseUrl, idx].join('/'), item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => this.logger.log("put data: " + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => this.handleError(err)));
    }
    delete(idx) {
        return this.http.delete([this.baseUrl, idx].join('/'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => this.logger.log('delete.data', JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => this.handleError(err)));
    }
    requestPostUrlEncode(url, params) {
        let urlencodeheaders = this.authHeader;
        urlencodeheaders = urlencodeheaders.append('Content-Type', 'application/x-www-form-urlencoded');
        let query = (params == null) ? null : Object.keys(params).map(key => key + '=' + params[key]).join('&');
        return this.http.post(this.baseUrl + url, query, { headers: urlencodeheaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => { this.logger.log('post.data', JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => this.handleError(err)));
    }
    //protected handleError(err: HttpErrorResponse): Observable<any> | ErrorObservable {
    handleError(err) {
        // not authorized
        this.logger.log('handleError', err);
        if (err.status === 401) {
            this.authSvc.logOut();
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], HttpService);



/***/ }),

/***/ "O0ov":
/*!****************************************!*\
  !*** ./src/services/logger.service.ts ***!
  \****************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "E3Zs");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LoggerService = class LoggerService {
    constructor(logger) {
        this.logger = logger;
    }
    log(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.log(msg, ...args);
    }
    warn(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.warn(msg, ...args);
    }
    error(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.error(msg, ...args);
    }
    debug(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.debug(msg, ...args);
    }
    info(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.info(msg, ...args);
    }
    fatal(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.fatal(msg, ...args);
    }
};
LoggerService.ctorParameters = () => [
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"] }
];
LoggerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], LoggerService);



/***/ }),

/***/ "P08B":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/get-data/get-data.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #modalContent>\n  <div class=\"wrap\">\n    <p>디바이스에 저장된 데이터들을 받아오는 중 입니다. 잠시만 기다려주세요.....</p>\n  </div>\n</ion-content>\n\n<ion-footer #modalFooter>\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"dismissModal()\" [disabled]=\"isGettingData | async\">{{'finish_setting' | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "QwSV":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/detail-list-modal/detail-list-modal.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"arrow-back\" style=\"width: 24px; height: 48px;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"ion-padding\" *ngIf=\"isChooseMulti; else elseTemplate\">\n  <ion-item button *ngFor=\"let data of dataList; index as i\" (click)=\"checkItem(data)\">\n    <!-- <ion-icon slot=\"end\" name=\"checkmark\" *ngIf=\"checkIsChecked(data.text)\"></ion-icon> -->\n    <ion-label>{{data.text}}</ion-label>\n    <ion-checkbox slot=\"end\" [checked]=\"checkIsChecked(data.text)\"></ion-checkbox>\n  </ion-item>\n</ion-content>\n<ng-template #elseTemplate>\n  <ion-content fullscreen class=\"ion-padding\">\n    <ion-item button *ngFor=\"let data of dataList\" (click)=\"dismissModal(data)\">\n      <ion-icon slot=\"end\" name=\"checkmark\" *ngIf=\"currValue === data.text\"></ion-icon>\n      <ion-label>{{data.text}}</ion-label>\n    </ion-item>\n  </ion-content>\n</ng-template>\n\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/language.service */ "lRKa");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/storage.service */ "61FP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let AppComponent = class AppComponent {
    constructor(platform, androidPermissions, storageSvc, languageSvc, translateSvc, screenOrientation) {
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.storageSvc = storageSvc;
        this.languageSvc = languageSvc;
        this.translateSvc = translateSvc;
        this.screenOrientation = screenOrientation;
        this.initailizeApp();
    }
    initailizeApp() {
        this.platform.ready().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storageSvc.init();
            this.languageSvc.setInitState();
            yield this.languageSvc.getAndSetLastSetting();
            yield this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            yield this.androidPermissions.requestPermissions([
                // this.androidPermissions.PERMISSION.ACCESS_NOTIFICATION_POLICY,
                this.androidPermissions.PERMISSION.BLUETOOTH,
                this.androidPermissions.PERMISSION.LOCATION
            ]);
        }));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: httpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function() { return httpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_modals_get_data_get_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/modals/get-data/get-data.component */ "B7cR");
/* harmony import */ var _components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/modals/rpe/rpe.component */ "c49u");
/* harmony import */ var _components_modals_hr_detail_hr_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/modals/hr-detail/hr-detail.component */ "6od+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "yXvl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_services_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/http.service */ "NtM8");
/* harmony import */ var src_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/interceptors/loader.interceptor */ "oGGJ");
/* harmony import */ var _components_modals_connect_modal_connect_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../components/modals/connect-modal/connect-modal.component */ "87Hk");
/* harmony import */ var src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/modals/devices-modal/devices-modal.component */ "KZRF");
/* harmony import */ var src_components_modals_detail_list_modal_detail_list_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/components/modals/detail-list-modal/detail-list-modal.component */ "mVdm");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-logger */ "E3Zs");
/* harmony import */ var src_interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/interceptors/app.interceptor */ "KNNm");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var src_services_permission_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/services/permission.service */ "i/Hf");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "RzHS");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/File/ngx */ "B7Vy");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/services/language.service */ "lRKa");































const httpLoaderFactory = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
let AppModule = class AppModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_29__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
AppModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_30__["LanguageService"] }
];
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_modals_connect_modal_connect_modal_component__WEBPACK_IMPORTED_MODULE_14__["ConnectModalComponent"],
            src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_15__["DevicesModalComponent"],
            src_components_modals_detail_list_modal_detail_list_modal_component__WEBPACK_IMPORTED_MODULE_16__["DetailListModalComponent"],
            _components_modals_hr_detail_hr_detail_component__WEBPACK_IMPORTED_MODULE_3__["HrDetailComponent"],
            _components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_2__["RpeComponent"],
            _components_modals_get_data_get_data_component__WEBPACK_IMPORTED_MODULE_1__["GetDataComponent"],
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_17__["LoggerModule"].forRoot({ level: ngx_logger__WEBPACK_IMPORTED_MODULE_17__["NgxLoggerLevel"].TRACE }),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_22__["IonicStorageModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateLoader"],
                    useFactory: httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
                },
            }),
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouteReuseStrategy"],
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"],
            },
            src_services_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"],
            _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_10__["BLE"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_19__["LocalNotifications"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_20__["AndroidPermissions"],
            src_services_permission_service__WEBPACK_IMPORTED_MODULE_21__["PermissionService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_23__["ScreenOrientation"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_26__["FileChooser"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_27__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_28__["FileOpener"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: src_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_13__["LoaderInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: src_interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_18__["AppInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "c49u":
/*!****************************************************!*\
  !*** ./src/components/modals/rpe/rpe.component.ts ***!
  \****************************************************/
/*! exports provided: RpeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpeComponent", function() { return RpeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rpe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rpe.component.html */ "vujI");
/* harmony import */ var _rpe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rpe.component.scss */ "0U9C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let RpeComponent = class RpeComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.rpeValue = 0;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss({ rpeValue: this.rpeValue });
    }
    selectOption($event) {
        this.rpeValue = +$event.target.value;
    }
};
RpeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
RpeComponent.propDecorators = {
    parent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RpeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rpe',
        template: _raw_loader_rpe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rpe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RpeComponent);



/***/ }),

/***/ "hugj":
/*!*********************************!*\
  !*** ./src/constants/common.ts ***!
  \*********************************/
/*! exports provided: LANG_KO, LANG_EN, WEEKDAYS, PRESCRIPTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_KO", function() { return LANG_KO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_EN", function() { return LANG_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKDAYS", function() { return WEEKDAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRESCRIPTION", function() { return PRESCRIPTION; });
// language
const LANG_KO = 'ko';
const LANG_EN = 'en';
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
const PRESCRIPTION = 'prescription';


/***/ }),

/***/ "i/Hf":
/*!********************************************!*\
  !*** ./src/services/permission.service.ts ***!
  \********************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");




let PermissionService = class PermissionService {
    constructor(androidPermissions, loggerSvc) {
        this.androidPermissions = androidPermissions;
        this.loggerSvc = loggerSvc;
    }
    checkNotification() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_NOTIFICATION_POLICY)
            .then(permmissionResponse => {
            this.loggerSvc.log(permmissionResponse);
        })
            .catch(onrejected => {
            this.loggerSvc.error(onrejected);
        });
    }
};
PermissionService.ctorParameters = () => [
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }
];
PermissionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PermissionService);



/***/ }),

/***/ "jk4M":
/*!**********************************************!*\
  !*** ./src/theme/modals/_connect-modal.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".connect-modal {\n  --backdrop-opacity: 0.8 !important;\n}\n.connect-modal .modal-wrapper {\n  --height: 30%;\n  --width: 90%;\n  position: absolute;\n}\n.connect-modal .wrap {\n  padding: 16px 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL19jb25uZWN0LW1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFSiIsImZpbGUiOiJfY29ubmVjdC1tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbm5lY3QtbW9kYWwgICB7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XG4gIC5tb2RhbC13cmFwcGVyIHtcbiAgICAtLWhlaWdodDogMzAlO1xuICAgIC0td2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLndyYXAge1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lRKa":
/*!******************************************!*\
  !*** ./src/services/language.service.ts ***!
  \******************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_constants_storage_key__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/storage-key */ "/z6A");
/* harmony import */ var src_constants_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/common */ "hugj");








//import { LANG_EN, LANG_KO } from 'src/constants/common';
let LanguageService = class LanguageService {
    constructor(translateService, storage) {
        this.translateService = translateService;
        this.storage = storage;
        this.language$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.translate = this.translateService;
    }
    setInitState() {
        this.translateService.addLangs([src_constants_common__WEBPACK_IMPORTED_MODULE_7__["LANG_EN"], src_constants_common__WEBPACK_IMPORTED_MODULE_7__["LANG_KO"]]);
    }
    setLang(lang) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translateService.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((result) => {
                this.language$.next(result);
            });
            this.translateService.use(lang);
            yield this.storage.set(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_6__["LANG"], lang);
        });
    }
    getAndSetLastSetting() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const lastSetting = yield this.getLangLastSetting();
            if (lastSetting) {
                yield this.setLang(lastSetting);
            }
            else {
                yield this.setLang(src_constants_common__WEBPACK_IMPORTED_MODULE_7__["LANG_KO"]);
            }
        });
    }
    getLangLastSetting() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.storage.get(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_6__["LANG"]);
        });
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__["Storage"] }
];
LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], LanguageService);



/***/ }),

/***/ "mVdm":
/*!********************************************************************************!*\
  !*** ./src/components/modals/detail-list-modal/detail-list-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: DetailListModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailListModalComponent", function() { return DetailListModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_list_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-list-modal.component.html */ "QwSV");
/* harmony import */ var _detail_list_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-list-modal.component.scss */ "5Xck");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let DetailListModalComponent = class DetailListModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.title = '';
        this.dataList = [];
        this.isChooseMulti = false;
    }
    ngOnInit() {
    }
    dismissModal(data) {
        var _a;
        this.modalController.dismiss({
            chosenData: this.isChooseMulti ? (_a = this.currValue) === null || _a === void 0 ? void 0 : _a.sort((a, b) => a.id - b.id) : data
        });
    }
    checkIsChecked(text) {
        if (this.currValue.length > 0) {
            return this.currValue.map(data => data.text).includes(text);
        }
        return false;
    }
    checkItem(data) {
        if (this.checkIsChecked(data.text)) {
            const idx = this.currValue.map(res => res.text).indexOf(data.text);
            this.currValue.splice(idx, 1);
        }
        else {
            this.currValue.push(data);
        }
    }
};
DetailListModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
DetailListModalComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dataList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    currValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    isChooseMulti: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
DetailListModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-detail-list-modal',
        template: _raw_loader_detail_list_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_list_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailListModalComponent);



/***/ }),

/***/ "oGGJ":
/*!************************************************!*\
  !*** ./src/interceptors/loader.interceptor.ts ***!
  \************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading.service */ "qozY");





let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.loaderService.create())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((loading) => loading.present()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((loading) => next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            loading.dismiss();
        }))));
    }
};
LoaderInterceptor.ctorParameters = () => [
    { type: src_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
LoaderInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoaderInterceptor);



/***/ }),

/***/ "qozY":
/*!*****************************************!*\
  !*** ./src/services/loading.service.ts ***!
  \*****************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    create(msg = 'Please wait...') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: msg,
            });
            return this.loading;
        });
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.present();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "rBcA":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/hr-detail/hr-detail.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"arrow-back\" style=\"width: 24px; height: 48px;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'hr_detail.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"chart\" id=\"recordDetail\" style=\"display: block; height: 100%; width: auto;\"></div>\n</ion-content>\n");

/***/ }),

/***/ "s42a":
/*!**************************************************************************!*\
  !*** ./src/components/modals/devices-modal/devices-modal.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2VzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "uKVS":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/devices-modal/devices-modal.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <h3>{{title}}</h3>\n</ion-header>\n\n<ion-content #modalContent>\n  <div class=\"wrap\">\n    <ion-radio-group (ionChange)=\"radioGroupChange($event)\">\n      <ion-item *ngFor=\"let device of devicesList\">\n        <ion-label>{{device.name}}</ion-label>\n        <ion-radio slot=\"start\" value={{device.id}}  ></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ion-content>\n\n<ion-footer #modalFooter>\n  <ion-toolbar>\n    <ion-button slot=\"start\" (click)=\"dismissModal(false)\">{{'cancel' | translate}}</ion-button>\n    <ion-button slot=\"end\" (click)=\"dismissModal(true)\" [disabled]=\"!deviceId\">{{'finish_setting' | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/auth.guard */ "AcVy");




const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~ble-test-ble-test-module~exercise-setting-exercise-setting-module~home-home-module~real-time~fb9b818b"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then((m) => m.HomePageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then((m) => m.LoginPageModule),
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then((m) => m.RegisterPageModule),
    },
    {
        path: 'ble-test',
        loadChildren: () => Promise.all(/*! import() | ble-test-ble-test-module */[__webpack_require__.e("default~ble-test-ble-test-module~exercise-setting-exercise-setting-module~home-home-module~real-time~fb9b818b"), __webpack_require__.e("ble-test-ble-test-module")]).then(__webpack_require__.bind(null, /*! ./ble-test/ble-test.module */ "3fn3")).then((m) => m.BleTestPageModule),
    },
    {
        path: 'exercise-setting',
        loadChildren: () => Promise.all(/*! import() | exercise-setting-exercise-setting-module */[__webpack_require__.e("default~ble-test-ble-test-module~exercise-setting-exercise-setting-module~home-home-module~real-time~fb9b818b"), __webpack_require__.e("common"), __webpack_require__.e("exercise-setting-exercise-setting-module")]).then(__webpack_require__.bind(null, /*! ./exercise-setting/exercise-setting.module */ "P8nr")).then((m) => m.ExerciseSettingPageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'exercise-records',
        loadChildren: () => Promise.all(/*! import() | exercise-records-exercise-records-module */[__webpack_require__.e("default~exercise-records-exercise-records-module~reservation-reservation-module"), __webpack_require__.e("common"), __webpack_require__.e("exercise-records-exercise-records-module")]).then(__webpack_require__.bind(null, /*! ./exercise-records/exercise-records.module */ "1BLb")).then((m) => m.ExerciseRecordsPageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'real-time-exercise',
        loadChildren: () => Promise.all(/*! import() | real-time-exercise-real-time-exercise-module */[__webpack_require__.e("default~ble-test-ble-test-module~exercise-setting-exercise-setting-module~home-home-module~real-time~fb9b818b"), __webpack_require__.e("common"), __webpack_require__.e("real-time-exercise-real-time-exercise-module")]).then(__webpack_require__.bind(null, /*! ./real-time-exercise/real-time-exercise.module */ "OOJ+")).then((m) => m.RealTimeExercisePageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'exercise-detail',
        loadChildren: () => Promise.all(/*! import() | exercise-detail-exercise-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("exercise-detail-exercise-detail-module")]).then(__webpack_require__.bind(null, /*! ./exercise-detail/exercise-detail.module */ "IGK1")).then((m) => m.ExerciseDetailPageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'reservation',
        loadChildren: () => Promise.all(/*! import() | reservation-reservation-module */[__webpack_require__.e("default~exercise-records-exercise-records-module~reservation-reservation-module"), __webpack_require__.e("common"), __webpack_require__.e("reservation-reservation-module")]).then(__webpack_require__.bind(null, /*! ./reservation/reservation.module */ "1LfX")).then((m) => m.ReservationPageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'noti-lang-setting',
        loadChildren: () => Promise.all(/*! import() | notification-and-language-setting-notification-and-language-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("notification-and-language-setting-notification-and-language-setting-module")]).then(__webpack_require__.bind(null, /*! ./notification-and-language-setting/notification-and-language-setting.module */ "0Ir1")).then((m) => m.NotificationAndLanguageSettingPageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'notification',
        loadChildren: () => Promise.all(/*! import() | notification-notification-module */[__webpack_require__.e("default~notification-detail-notification-detail-module~notification-notification-module"), __webpack_require__.e("notification-notification-module")]).then(__webpack_require__.bind(null, /*! ./notification/notification.module */ "TLzw")).then((m) => m.NotificationPageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'notification-detail/:id',
        loadChildren: () => Promise.all(/*! import() | notification-detail-notification-detail-module */[__webpack_require__.e("default~notification-detail-notification-detail-module~notification-notification-module"), __webpack_require__.e("notification-detail-notification-detail-module")]).then(__webpack_require__.bind(null, /*! ./notification-detail/notification-detail.module */ "Kvdg")).then((m) => m.NotificationDetailPageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'personal-info-setting',
        loadChildren: () => Promise.all(/*! import() | personal-info-setting-personal-info-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("personal-info-setting-personal-info-setting-module")]).then(__webpack_require__.bind(null, /*! ./personal-info-setting/personal-info-setting.module */ "HHbQ")).then((m) => m.PersonalInfoSettingPageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'manual',
        loadChildren: () => __webpack_require__.e(/*! import() | manual-manual-module */ "manual-manual-module").then(__webpack_require__.bind(null, /*! ./manual/manual.module */ "pSiy")).then((m) => m.ManualPageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() | forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "vujI":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/rpe/rpe.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #modalContent>\n  <div class=\"wrap\">\n    <h3>운동을 모두 받아왔습니다.</h3>\n    <h3>RPE 값을 입력해주세요.</h3>\n    <div class=\"list\">\n      <div class=\"level\" style=\"background-color: #dfe4fa;\">\n        <div class=\"level-number\">\n          <p>6</p>\n          <p>7</p>\n          <p>8</p>\n        </div>\n        <div class=\"level-content\">\n          <p>매우 매우 편하다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #b3c3f4;\">\n        <div class=\"level-number\">\n          <p>9</p>\n          <p>10</p>\n        </div>\n        <div class=\"level-content\">\n          <p>매우 편하다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #87a1eb;\">\n        <div class=\"level-number\">\n          <p>11</p>\n          <p>12</p>\n        </div>\n        <div class=\"level-content\">\n          <p>편하다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #fddfc7;\">\n        <div class=\"level-number\">\n          <p>13</p>\n          <p>14</p>\n        </div>\n        <div class=\"level-content\">\n          <p>약간 힘들다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #ffa360;\">\n        <div class=\"level-number\">\n          <p>15</p>\n          <p>16</p>\n        </div>\n        <div class=\"level-content\">\n          <p>힘들다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #f6700d;\">\n        <div class=\"level-number\">\n          <p>17</p>\n          <p>18</p>\n        </div>\n        <div class=\"level-content\">\n          <p>매우 힘들다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #f11312;\">\n        <div class=\"level-number\">\n          <p>19</p>\n          <p>20</p>\n        </div>\n        <div class=\"level-content\">\n          <p>매우 매우 힘들다</p>\n        </div>\n      </div>\n    </div>\n    <select name=\"rpe\" id=\"rpe\" class=\"rpe\" (change)=\"selectOption($event)\">\n      <option value=\"0\">{{'select_one' | translate}}</option>\n      <option value=\"6\" style=\"background-color: #dfe4fa;\">6</option>\n      <option value=\"7\" style=\"background-color: #dfe4fa;\">7</option>\n      <option value=\"8\" style=\"background-color: #dfe4fa;\">8</option>\n      <option value=\"9\" style=\"background-color: #b3c3f4;\">9</option>\n      <option value=\"10\" style=\"background-color: #b3c3f4;\">10</option>\n      <option value=\"11\" style=\"background-color: #87a1eb;\">11</option>\n      <option value=\"12\" style=\"background-color: #87a1eb;\">12</option>\n      <option value=\"13\" style=\"background-color: #fddfc7;\">13</option>\n      <option value=\"14\" style=\"background-color: #fddfc7;\">14</option>\n      <option value=\"15\" style=\"background-color: #ffa360;\">15</option>\n      <option value=\"16\" style=\"background-color: #ffa360;\">16</option>\n      <option value=\"17\" style=\"background-color: #f6700d;\">17</option>\n      <option value=\"18\" style=\"background-color: #f6700d;\">18</option>\n      <option value=\"19\" style=\"background-color: #f11312;\">19</option>\n      <option value=\"20\" style=\"background-color: #f11312;\">20</option>\n    </select>\n  </div>\n</ion-content>\n\n<ion-footer #modalFooter>\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"dismissModal()\" [disabled]=\"this.rpeValue === 0\">{{'finish_setting' |\n      translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "w2d2":
/*!******************************************************************!*\
  !*** ./src/components/modals/hr-detail/hr-detail.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoci1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




function getBaseUrl() {
    console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiDomain);
    return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiDomain;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map