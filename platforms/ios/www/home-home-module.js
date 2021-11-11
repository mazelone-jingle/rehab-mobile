(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "9q3f":
/*!*************************************!*\
  !*** ./src/pipes/file-name.pipe.ts ***!
  \*************************************/
/*! exports provided: FileNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNamePipe", function() { return FileNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FileNamePipe = class FileNamePipe {
    transform(fileUrl) {
        if (fileUrl) {
            return fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
        }
        return '--';
    }
};
FileNamePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'fileName'
    })
], FileNamePipe);



/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/auth.guard */ "AcVy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ "zpKS");





const routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'exercise-setting',
        loadChildren: () => Promise.all(/*! import() | exercise-setting-exercise-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("exercise-setting-exercise-setting-module")]).then(__webpack_require__.bind(null, /*! ../exercise-setting/exercise-setting.module */ "P8nr")).then((m) => m.ExerciseSettingPageModule),
    },
    {
        path: 'records',
        loadChildren: () => Promise.all(/*! import() | exercise-records-exercise-records-module */[__webpack_require__.e("default~exercise-records-exercise-records-module~reservation-reservation-module"), __webpack_require__.e("common"), __webpack_require__.e("exercise-records-exercise-records-module")]).then(__webpack_require__.bind(null, /*! ../exercise-records/exercise-records.module */ "1BLb")).then((m) => m.ExerciseRecordsPageModule)
    },
    {
        path: 'real-time-exercise',
        loadChildren: () => Promise.all(/*! import() | real-time-exercise-real-time-exercise-module */[__webpack_require__.e("common"), __webpack_require__.e("real-time-exercise-real-time-exercise-module")]).then(__webpack_require__.bind(null, /*! ../real-time-exercise/real-time-exercise.module */ "OOJ+")).then((m) => m.RealTimeExercisePageModule)
    },
    {
        path: 'reservation',
        loadChildren: () => Promise.all(/*! import() | reservation-reservation-module */[__webpack_require__.e("default~exercise-records-exercise-records-module~reservation-reservation-module"), __webpack_require__.e("common"), __webpack_require__.e("reservation-reservation-module")]).then(__webpack_require__.bind(null, /*! ../reservation/reservation.module */ "1LfX")).then((m) => m.ReservationPageModule)
    },
    {
        path: 'noti-lang',
        loadChildren: () => Promise.all(/*! import() | notification-and-language-setting-notification-and-language-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("notification-and-language-setting-notification-and-language-setting-module")]).then(__webpack_require__.bind(null, /*! ../notification-and-language-setting/notification-and-language-setting.module */ "0Ir1")).then((m) => m.NotificationAndLanguageSettingPageModule)
    },
    {
        path: 'personal-info-setting',
        loadChildren: () => Promise.all(/*! import() | personal-info-setting-personal-info-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("personal-info-setting-personal-info-setting-module")]).then(__webpack_require__.bind(null, /*! ../personal-info-setting/personal-info-setting.module */ "HHbQ")).then((m) => m.PersonalInfoSettingPageModule)
    },
    {
        path: 'manual',
        loadChildren: () => __webpack_require__.e(/*! import() | manual-manual-module */ "manual-manual-module").then(__webpack_require__.bind(null, /*! ../manual/manual.module */ "pSiy")).then((m) => m.ManualPageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "DwMb":
/*!******************************************!*\
  !*** ./src/pipes/shared-pipes.module.ts ***!
  \******************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _am_pm_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./am-pm.pipe */ "ZwTS");
/* harmony import */ var _file_name_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-name.pipe */ "9q3f");
/* harmony import */ var _min_sec_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./min-sec.pipe */ "KxFO");





let SharedPipesModule = class SharedPipesModule {
};
SharedPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: [
            _am_pm_pipe__WEBPACK_IMPORTED_MODULE_2__["AmPmPipe"],
            _file_name_pipe__WEBPACK_IMPORTED_MODULE_3__["FileNamePipe"],
            _min_sec_pipe__WEBPACK_IMPORTED_MODULE_4__["MinSecPipe"]
        ],
        exports: [
            _am_pm_pipe__WEBPACK_IMPORTED_MODULE_2__["AmPmPipe"],
            _file_name_pipe__WEBPACK_IMPORTED_MODULE_3__["FileNamePipe"],
            _min_sec_pipe__WEBPACK_IMPORTED_MODULE_4__["MinSecPipe"]
        ]
    })
], SharedPipesModule);



/***/ }),

/***/ "KxFO":
/*!***********************************!*\
  !*** ./src/pipes/min-sec.pipe.ts ***!
  \***********************************/
/*! exports provided: MinSecPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinSecPipe", function() { return MinSecPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_constants_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants/common */ "hugj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MinSecPipe = class MinSecPipe {
    constructor(translateService) {
        this.translateService = translateService;
    }
    transform(seconds) {
        let min = 0;
        let sec = 0;
        if (seconds >= 60) {
            min = Math.floor(seconds / 60);
        }
        sec = seconds % 60;
        if (this.translateService.currentLang === src_constants_common__WEBPACK_IMPORTED_MODULE_1__["LANG_KO"]) {
            return `${min}분 ${sec}초`;
        }
        else {
            return `${min}Min ${sec}Sec`;
        }
    }
};
MinSecPipe.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
MinSecPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"])({
        name: 'minSec'
    })
], MinSecPipe);



/***/ }),

/***/ "Ut+J":
/*!***********************************************!*\
  !*** ./src/services/watch-command.service.ts ***!
  \***********************************************/
/*! exports provided: WatchCommandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchCommandService", function() { return WatchCommandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/watch-ble-command */ "gbkr");
/* harmony import */ var src_services_ble_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/ble.service */ "/zZW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let WatchCommandService = class WatchCommandService {
    constructor(ble, loggerSvc) {
        this.ble = ble;
        this.loggerSvc = loggerSvc;
    }
    /**
     * get watch battery information
     */
    sendBAT() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ble
                .writeCommand(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_BAT"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_BAT"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_BAT"]} err`, err));
        });
    }
    /**
     * check if there is some new data in the watch
     */
    sendRTS() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ble
                .writeCommand(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RTS"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RTS"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RTS"]} err`, err));
        });
    }
    /**
     * check if there is some new data in the watch
     */
    sendRTH() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ble
                .writeCommand(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RTH"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RTH"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RTH"]} err`, err));
        });
    }
    /**
     * check if there is some new data in the watch
     */
    sendRTE() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ble
                .writeCommand(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RTE"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RTE"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RTE"]} err`, err));
        });
    }
    /**
     * check if there is some new data in the watch
     */
    sendRND() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ble
                .writeCommand(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RND"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RND"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RND"]} err`, err));
        });
    }
    /**
     * get new data from the watch
     */
    sendRHD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ble
                .writeCommand(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RHD"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RHD"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_RHD"]} err`, err));
        });
    }
    /**
     * send ok command
     */
    sendROK() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ble
                .writeCommand(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_ROK"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_ROK"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_ROK"]} err`, err));
        });
    }
    /**
     * send reask data command
     */
    sendREQ() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ble
                .writeCommand(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_REQ"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_REQ"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_REQ"]} err`, err));
        });
    }
    /**
     * set datetime
     */
    sendSTS() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const date = new Date();
            const y = date.getFullYear().toString().substr(2, 2);
            const M = date.getMonth() + 1;
            const d = date.getDate();
            const h = date.getHours();
            const m = date.getMinutes();
            const command = `${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STS"].slice(0, src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STS"].lastIndexOf('#') + 1)}${y}_${M}_${d}_${h}_${m}${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STS"].slice(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STS"].lastIndexOf('#') + 1)}`;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ble
                .writeCommand(command, src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STS"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STS"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STS"]} err`, err)));
        });
    }
    /**
     * set hrMin & hrMax
     *
     * @param prescription
     */
    sendSTH(prescription) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const hrMin = prescription.hrMin;
            const hrMax = prescription.hrMax;
            const command = `${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STH"].slice(0, src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STH"].lastIndexOf('#') + 1)}${hrMin}_${hrMax}${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STH"].slice(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STH"].lastIndexOf('#') + 1)}`;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ble
                .writeCommand(command, src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STH"])
                .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STH"]} ok`, res))
                .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STH"]} err`, err)));
        });
    }
    /**
     * set exercise time of every step
     *
     * @param prescription
     */
    sendSTE(prescription) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const steps = prescription.steps.map((data) => data.minute);
            const lackOfCount = steps.length % 5 !== 0 ? 5 - (steps.length % 5) : 0;
            let command = '';
            let group = [];
            for (let i = 0; i <= steps.length + lackOfCount; i++) {
                if (steps[i]) {
                    group.push(steps[i]);
                }
                else {
                    group.push(0);
                }
                if (group.length % 5 === 0) {
                    command = `${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STE"].slice(0, src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STE"].lastIndexOf('#') + 1)}${group.join('_')}${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STE"].slice(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STE"].lastIndexOf('#') + 1)}`;
                    group = [];
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ble
                        .writeCommand(command, src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STE"])
                        .then((res) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STE"]} ok`, res))
                        .catch((err) => this.loggerSvc.log(`write ${src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE_STE"]} err`, err)));
                }
            }
        });
    }
};
WatchCommandService.ctorParameters = () => [
    { type: src_services_ble_service__WEBPACK_IMPORTED_MODULE_4__["BleService"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }
];
WatchCommandService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
        providedIn: 'root'
    })
], WatchCommandService);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ng-container *ngIf=\"batteryPower; else elseTemplate\">\n    <div class=\"battery-bar\">\n      <ng-container *ngIf=\"batteryPower > 80\">\n        <i class=\"icon icon-battery-100\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"batteryPower > 50 && batteryPower <= 80\">\n        <i class=\"icon icon-battery-80\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"batteryPower > 30 && batteryPower <=50\">\n        <i class=\"icon icon-battery-50\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"batteryPower <= 30\">\n        <i class=\"icon icon-battery-30\"></i>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <div class=\"bluetooth-bar\">\n      <button class=\"bluetooth-btn\" (click)=\"presentIsConnectModal()\">\n        <i class=\"icon icon-bluetooth\"></i>\n        {{'bluetooth' |  translate}}\n      </button>\n    </div>\n  </ng-template>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrap\">\n    <ul class=\"function-list\">\n      <li class=\"function\">\n        <button class=\"function-btn\" [routerLink]=\"['/menu/exercise-setting']\">\n          <i class=\"icon icon-content\"></i>\n          <p class=\"function-name\">{{ 'exercise_setting' | translate }}</p>\n        </button>\n      </li>\n      <li class=\"function\">\n        <button class=\"function-btn\" [routerLink]=\"['/menu/records']\">\n          <i class=\"icon icon-search\"></i>\n          <p class=\"function-name\">{{ 'exercise_records' | translate }}</p>\n        </button>\n      </li>\n      <li class=\"function\">\n        <button class=\"function-btn\" (click)=\"routeToRealtimeExercise()\">\n          <i class=\"icon icon-jogging\"></i>\n          <p class=\"function-name\">{{ 'real_time_exercise' | translate }}</p>\n        </button>\n      </li>\n      <li class=\"function\">\n        <button class=\"function-btn\" [routerLink]=\"['/menu/reservation']\">\n          <i class=\"icon icon-calendar\"></i>\n          <p class=\"function-name\">{{ 'reservation' | translate }}</p>\n        </button>\n      </li>\n      <li class=\"function\">\n        <button\n          class=\"function-btn function-btn_2icon\"\n          [routerLink]=\"['/menu/noti-lang']\"\n        >\n          <div>\n            <i class=\"icon icon-alarm mr-8\"></i>\n            <i class=\"icon icon-translate\"></i>\n          </div>\n          <p class=\"function-name\">{{ 'noti_and_lang_setting' | translate }}</p>\n        </button>\n      </li>\n      <li\n        class=\"function\"\n        [routerLink]=\"['/menu/personal-info-setting']\"\n      >\n        <button class=\"function-btn\">\n          <i class=\"icon icon-contact_information\"></i>\n          <p class=\"function-name\">{{ 'personal_info_setting' | translate }}</p>\n        </button>\n      </li>\n      <li class=\"function\" [routerLink]=\"['/menu/manual']\">\n        <button class=\"function-btn\">\n          <i class=\"icon icon-book\"></i>\n          <p class=\"function-name\">{{ 'app_manual' | translate }}</p>\n        </button>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ZwTS":
/*!*********************************!*\
  !*** ./src/pipes/am-pm.pipe.ts ***!
  \*********************************/
/*! exports provided: AmPmPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmPmPipe", function() { return AmPmPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AmPmPipe = class AmPmPipe {
    transform(time) {
        if (time !== '--') {
            let h = +(time.substring(0, time.indexOf(':')));
            const m = time.substring(time.indexOf(':') + 1);
            let timeText = 'AM';
            if (h >= 12) {
                timeText = 'PM';
                if (h > 12) {
                    h = h - 12;
                }
            }
            return `${timeText} ${h}:${m}`;
        }
        return time;
    }
};
AmPmPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'amPm'
    })
], AmPmPipe);



/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/shared-pipes.module */ "DwMb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ "xOzl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");














const createTranslateLoader = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/home/', '.json');
let HomePageModule = class HomePageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
HomePageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_12__["LanguageService"] }
];
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_9__["HomePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
                },
                isolate: true
            }),
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
            src_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nol, ul {\n  list-style: none;\n}\n\n.icon {\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n}\n\n.icon-alarm {\n  background-image: url('alarm.svg');\n}\n\n.icon-book {\n  background-image: url('book.svg');\n}\n\n.icon-calendar {\n  background-image: url('calendar.svg');\n}\n\n.icon-contact_information {\n  background-image: url('identification.svg');\n}\n\n.icon-content {\n  background-image: url('content.svg');\n}\n\n.icon-jogging {\n  background-image: url('jogging.svg');\n}\n\n.icon-search {\n  background-image: url('search.svg');\n}\n\n.icon-translate {\n  background-image: url('translate.svg');\n}\n\n.icon-battery-30 {\n  background-image: url('battery-30.svg');\n}\n\n.icon-battery-50 {\n  background-image: url('battery-50.svg');\n}\n\n.icon-battery-80 {\n  background-image: url('battery-80.svg');\n}\n\n.icon-battery-100 {\n  background-image: url('battery-100.svg');\n}\n\n.icon-heartbeat {\n  background-image: url('heartbeat.svg');\n}\n\n.icon-schedule {\n  background-image: url('schedule.svg');\n}\n\n.icon-clock {\n  background-image: url('clock.svg');\n}\n\n.icon-bluetooth {\n  background-image: url('bluetooth.svg');\n}\n\n.mt-8 {\n  margin-top: 8px;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.mr-8 {\n  margin-right: 8px;\n}\n\n.mr-16 {\n  margin-right: 16px;\n}\n\n.mb-8 {\n  margin-bottom: 8px;\n}\n\n.mb-16 {\n  margin-bottom: 16px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.ml-16 {\n  margin-left: 16px;\n}\n\n.battery-bar, .bluetooth-bar {\n  text-align: right;\n  height: 30px;\n  padding-right: 8px;\n}\n\n.battery-bar i, .bluetooth-bar i {\n  width: 30px;\n  height: 30px;\n}\n\n.bluetooth-btn {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.wrap {\n  height: 100%;\n}\n\n.function-list {\n  height: 100%;\n  --cols: 7;\n}\n\n.function {\n  height: calc(100% / var(--cols));\n}\n\n.function:nth-child(2n) .function-btn {\n  background-color: #df7127;\n  color: #fff;\n}\n\n.function-btn {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.function-btn i {\n  width: 50px;\n  height: 50px;\n}\n\n.function-btn:active {\n  transform: translateY(3px);\n}\n\n.function-btn_2icon i {\n  width: 30px;\n  height: 30px;\n}\n\n.function-name {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lL3Jlc2V0L19yZXNldC5zY3NzIiwiLi4vLi4vLi4vaG9tZS5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi90aGVtZS9pY29ucy9faWNvbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3RoZW1lL2xheW91dC9fbWFyZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQ0Q7O0FEU0E7RUFDQyxnQkFBQTtBQ05EOztBQ3ZCQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBRDBCRjs7QUN2QkE7RUFDRSxrQ0FBQTtBRDBCRjs7QUN4QkE7RUFDRSxpQ0FBQTtBRDJCRjs7QUN6QkE7RUFDRSxxQ0FBQTtBRDRCRjs7QUMxQkE7RUFDRSwyQ0FBQTtBRDZCRjs7QUMzQkE7RUFDRSxvQ0FBQTtBRDhCRjs7QUM1QkE7RUFDRSxvQ0FBQTtBRCtCRjs7QUM3QkE7RUFDRSxtQ0FBQTtBRGdDRjs7QUM5QkE7RUFDRSxzQ0FBQTtBRGlDRjs7QUM5QkE7RUFDRSx1Q0FBQTtBRGlDRjs7QUM5QkE7RUFDRSx1Q0FBQTtBRGlDRjs7QUM5QkE7RUFDRSx1Q0FBQTtBRGlDRjs7QUM5QkE7RUFDRSx3Q0FBQTtBRGlDRjs7QUM5QkE7RUFDRSxzQ0FBQTtBRGlDRjs7QUM5QkE7RUFDRSxxQ0FBQTtBRGlDRjs7QUM5QkE7RUFDRSxrQ0FBQTtBRGlDRjs7QUM5QkE7RUFDRSxzQ0FBQTtBRGlDRjs7QUUxRkk7RUFDRSxlQUFBO0FGNkZOOztBRTNGSTtFQUNFLGdCQUFBO0FGNkZOOztBRXpGSTtFQUNFLGlCQUFBO0FGMkZOOztBRXpGSTtFQUNFLGtCQUFBO0FGMkZOOztBRXZGSTtFQUNFLGtCQUFBO0FGeUZOOztBRXZGSTtFQUNFLG1CQUFBO0FGeUZOOztBRXJGSTtFQUNFLGdCQUFBO0FGdUZOOztBRXJGSTtFQUNFLGlCQUFBO0FGdUZOOztBQXJIQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBd0hGOztBQXZIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBeUhKOztBQXJIQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQXdIRjs7QUFySEE7RUFDRSxZQUFBO0FBd0hGOztBQXJIQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBd0hGOztBQXJIQTtFQUNFLGdDQUFBO0FBd0hGOztBQXRISTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQXdITjs7QUFySEU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF1SEo7O0FBdEhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUF3SE47O0FBdEhJO0VBQ0UsMEJBQUE7QUF3SE47O0FBcEhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFzSE47O0FBbkhFO0VBQ0UsZUFBQTtBQXFISiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vLyAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4vLyBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuLy8gZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbi8vIFx0ZGlzcGxheTogYmxvY2s7XG4vLyB9XG4vLyBib2R5IHtcbi8vIFx0bGluZS1oZWlnaHQ6IDE7XG4vLyB9XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuLy8gYmxvY2txdW90ZSwgcSB7XG4vLyBcdHF1b3Rlczogbm9uZTtcbi8vIH1cbi8vIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxuLy8gcTpiZWZvcmUsIHE6YWZ0ZXIge1xuLy8gXHRjb250ZW50OiAnJztcbi8vIFx0Y29udGVudDogbm9uZTtcbi8vIH1cbi8vIHRhYmxlIHtcbi8vIFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbi8vIFx0Ym9yZGVyLXNwYWNpbmc6IDA7XG4vLyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvdGhlbWUuc2Nzc1wiO1xuLmJhdHRlcnktYmFyLCAuYmx1ZXRvb3RoLWJhciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgaSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG59XG5cbi5ibHVldG9vdGgtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLndyYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mdW5jdGlvbi1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLWNvbHM6IDc7XG59XG5cbi5mdW5jdGlvbiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gdmFyKC0tY29scykpO1xuICAmOm50aC1jaGlsZCgybikge1xuICAgIC5mdW5jdGlvbi1idG4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmNzEyNztcbiAgICAgIGNvbG9yOiNmZmY7XG4gICAgfVxuICB9XG4gICYtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaSB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG4gICAgfVxuICB9XG4gICYtYnRuXzJpY29uIHtcbiAgICBpe1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gICYtbmFtZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5cbiIsIi5pY29uIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaWNvbi1hbGFybSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYWxhcm0uc3ZnJyk7XG59XG4uaWNvbi1ib29rIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9ib29rLnN2ZycpO1xufVxuLmljb24tY2FsZW5kYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2NhbGVuZGFyLnN2ZycpO1xufVxuLmljb24tY29udGFjdF9pbmZvcm1hdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vaWRlbnRpZmljYXRpb24uc3ZnJyk7XG59XG4uaWNvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9jb250ZW50LnN2ZycpO1xufVxuLmljb24tam9nZ2luZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vam9nZ2luZy5zdmcnKTtcbn1cbi5pY29uLXNlYXJjaCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZycpO1xufVxuLmljb24tdHJhbnNsYXRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi90cmFuc2xhdGUuc3ZnJyk7XG59XG5cbi5pY29uLWJhdHRlcnktMzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JhdHRlcnktMzAuc3ZnJyk7XG59XG5cbi5pY29uLWJhdHRlcnktNTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JhdHRlcnktNTAuc3ZnJyk7XG59XG5cbi5pY29uLWJhdHRlcnktODAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JhdHRlcnktODAuc3ZnJyk7XG59XG5cbi5pY29uLWJhdHRlcnktMTAwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9iYXR0ZXJ5LTEwMC5zdmcnKTtcbn1cblxuLmljb24taGVhcnRiZWF0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9oZWFydGJlYXQuc3ZnJyk7XG59XG5cbi5pY29uLXNjaGVkdWxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9zY2hlZHVsZS5zdmcnKTtcbn1cblxuLmljb24tY2xvY2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2Nsb2NrLnN2ZycpO1xufVxuXG4uaWNvbi1ibHVldG9vdGgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JsdWV0b290aC5zdmcnKTtcbn1cbiIsIi8vbWFyZ2luXG4ubXtcbiAgJnR7IC8vdG9wXG4gICAgJi04IHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG4gICAgJi0xNiB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgfVxuICAmcnsgLy9yaWdodFxuICAgICYtOCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gICAgJi0xNiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICB9XG4gICZieyAvL2JvdHRvbVxuICAgICYtOCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgICYtMTYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG4gIH1cbiAgJmx7IC8vbGVmdFxuICAgICYtOCB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbiAgICAmLTE2IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "qir6":
/*!*********************************************!*\
  !*** ./src/services/reservation.service.ts ***!
  \*********************************************/
/*! exports provided: ReservationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationService", function() { return ReservationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "NtM8");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "LLt/");








let ReservationService = class ReservationService extends _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] {
    constructor(http, baseUrl, route, router, logger, authSvc) {
        super(http, baseUrl + 'api/Reservation', route, router, logger, authSvc);
    }
    create(reservation) {
        this.logger.log(reservation);
        return this.http.post(this.baseUrl, reservation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((data) => this.logger.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            this.logger.error(err);
            throw err;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => res));
    }
    getReservation() {
        const keyword = this.authSvc.username;
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        return this.http.get(this.baseUrl + `/${year}/${month}/${date}?keyword=${keyword}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((data) => this.logger.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            this.logger.error(err);
            throw err;
        }));
    }
};
ReservationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
ReservationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root',
    })
], ReservationService);



/***/ }),

/***/ "yHJi":
/*!******************************************!*\
  !*** ./src/services/exercise.service.ts ***!
  \******************************************/
/*! exports provided: ExerciseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseService", function() { return ExerciseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "LLt/");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "NtM8");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger.service */ "O0ov");








let ExerciseService = class ExerciseService extends _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] {
    constructor(http, baseUrl, route, router, logger, authSvc) {
        super(http, baseUrl + 'api/Exercise', route, router, logger, authSvc);
    }
    getExerciseRecords(pageNum, pageSize) {
        const email = this.authSvc.username;
        return this.http
            .get(this.baseUrl +
            `/ByEmail?keyword=${email}&pageNum=${pageNum}&pageSize=${pageSize}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => {
            this.logger.log('diary/pagedList', data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => data.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            // this.handleError(err);
            throw err;
        }));
    }
    hrArrayDataToString(hrArray) {
        return hrArray.join(',');
    }
    getThrRetention(prescription, hrMinMax, hrData) {
        const exercises = prescription.steps;
        const exerciseTime = [0]; // 각 단계별 운동 시간
        const exerciseIsMain = []; // Main에 해당하는 운동 type
        exercises.forEach((exercise, idx) => {
            let baseSeconds = 0;
            if (idx > 0) {
                const baseMinutes = exercises
                    .map((step) => step.minute)
                    .slice(0, idx)
                    .reduce((accumulator, currentValue) => accumulator + currentValue);
                baseSeconds = Math.round(baseMinutes * 60);
            }
            exerciseTime.push(baseSeconds + exercise.minute * 60);
            exerciseIsMain.push(exercise.type.includes('Main') ? 1 : 0);
        });
        const mainHrs = []; // Main에 해당하는 HR
        exerciseIsMain.forEach((exercise, idx) => {
            if (exercise === 1) {
                mainHrs.push(hrData.slice(exerciseTime[idx], exerciseTime[idx + 1]));
            }
        });
        const flatHr = mainHrs.reduce((accu, curr) => accu.concat(curr));
        this.logger.log('flat Hr', flatHr);
        const rangeHr = flatHr.filter((hr) => +hr >= hrMinMax.min && +hr <= hrMinMax.max);
        const res = Math.round((rangeHr.length / flatHr.length) * 100);
        this.logger.log('thr retention: ', res);
        return res ? res : 0;
    }
    sendExerciseData(prescription, rpeValue, exerciseData, exerciseDatetime, hrMixMax) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (exerciseData.length > 0) {
                const hrData = exerciseData
                    .map((str) => str.substring(str.indexOf('#') + 1, str.lastIndexOf('#')))
                    .map((str) => str.split('_'))
                    .reduce((accu, curr) => accu.concat(curr))
                    .map((str) => +str);
                return this.postExercise(prescription, hrData, rpeValue, exerciseDatetime, hrMixMax, '').toPromise();
            }
        });
    }
    postExercise(prescription, hrData, rpe, exerciseDatetime, hrMinMax, rpes) {
        const exercise = {
            patientEmail: this.authSvc.username,
            id: 0,
            date: exerciseDatetime,
            thrRetention: this.getThrRetention(prescription, hrMinMax, hrData),
            hrs: this.hrArrayDataToString(hrData),
            rpes,
            rpe,
            prescriptionId: prescription.id,
        };
        return this.http.post(this.baseUrl, exercise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => {
            this.logger.log('api/Exercise', data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            // this.handleError(err);
            throw err;
        }));
    }
};
ExerciseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
ExerciseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root',
    })
], ExerciseService);



/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_components_modals_connect_modal_connect_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/modals/connect-modal/connect-modal.component */ "87Hk");
/* harmony import */ var src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/modals/devices-modal/devices-modal.component */ "KZRF");
/* harmony import */ var src_components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/modals/rpe/rpe.component */ "c49u");
/* harmony import */ var src_constants_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/common */ "hugj");
/* harmony import */ var src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/constants/watch-ble-command */ "gbkr");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_ble_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/ble.service */ "/zZW");
/* harmony import */ var src_services_exercise_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/exercise.service */ "yHJi");
/* harmony import */ var src_services_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/loading.service */ "qozY");
/* harmony import */ var src_services_logger_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/logger.service */ "O0ov");
/* harmony import */ var src_services_reservation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/reservation.service */ "qir6");
/* harmony import */ var src_services_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/storage.service */ "61FP");
/* harmony import */ var src_services_watch_command_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/watch-command.service */ "Ut+J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




















let HomePage = class HomePage {
    constructor(modalController, zone, ble, loadingSvc, alertSvc, loggerSvc, storageSvc, watchCommandService, exerciseSvc, reservationSvc, router) {
        this.modalController = modalController;
        this.zone = zone;
        this.ble = ble;
        this.loadingSvc = loadingSvc;
        this.alertSvc = alertSvc;
        this.loggerSvc = loggerSvc;
        this.storageSvc = storageSvc;
        this.watchCommandService = watchCommandService;
        this.exerciseSvc = exerciseSvc;
        this.reservationSvc = reservationSvc;
        this.router = router;
        this.devices = [];
        this.connectedDeviceId = null;
        this.isConnect = true;
        // connectStatus = false;
        this.exerciseData = [];
        this.exerciseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.exerciseData);
        this.isScaned = false;
        this.connectSubscription = null;
        this.tempExerciseData = [];
        this.callREQTimes = 0;
        this.callBATTimes = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(yield this.storageSvc.getDataOfUser());
            if (!(yield this.ble.isConnected())) {
                yield this.presentIsConnectModal();
            }
        });
    }
    ionViewWillEnter() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.setSubscriptions();
    }
    setSubscriptions() {
        this.sub.add(this.ble.BATService$
            .subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const batPattern = new RegExp(/^BAT#[0-9]{1,3}@$/g);
                if (batPattern.test(obs)) {
                    this.callBATTimes = 0;
                    yield this.loadingSvc.dismiss();
                    const battery = this.ble.handleBAT(obs);
                    yield this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.batteryPower = +battery;
                        yield this.loadingSvc.present();
                        yield this.watchCommandService.sendRND();
                    }));
                }
                else {
                    if (this.callBATTimes >= 10) {
                        yield this.loadingSvc.dismiss();
                        yield this.ble.disconnect();
                        yield this.presentScanFailedAlert();
                    }
                    else {
                        this.callBATTimes++;
                        yield this.watchCommandService.sendBAT();
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
        this.sub.add(this.ble.RNDService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_HDA"]) {
                yield this.loadingSvc.dismiss();
                yield this.loadingSvc.present();
                yield this.watchCommandService.sendRTS();
                yield this.loadingSvc.create(`디바이스에 저장된 데이터들을 받아오는 중입니다. 잠시만 기다려주세요......`);
                yield this.loadingSvc.present();
                this.exerciseData = [];
            }
            else if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_NDA"]) {
                yield this.loadingSvc.dismiss();
            }
        })));
        this.sub.add(this.ble.RTSService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            const [y, M, d, h, m] = obs.substring(obs.indexOf('#') + 1, obs.lastIndexOf('@') - 1).split('_');
            this.exerciseDatetime = new Date(`${y}/${M}/${d} ${h}:${m}`);
            yield this.watchCommandService.sendRTH();
        })));
        this.sub.add(this.ble.RTHService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            const [min, max] = obs.substring(obs.indexOf('#') + 1, obs.lastIndexOf('@') - 1).split('_');
            this.hrMixMax = { min, max };
            yield this.watchCommandService.sendRTE();
        })));
        this.sub.add(this.ble.RTEService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            yield this.watchCommandService.sendRHD();
        })));
        this.sub.add(this.ble.RHDService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_END"]) {
                this.exerciseSubject.next(this.exerciseData);
                yield this.loadingSvc.dismiss();
            }
            else {
                this.tempExerciseData.push(obs);
                this.callREQTimes++;
                yield this.watchCommandService.sendREQ();
            }
        })));
        this.sub.add(this.ble.REQService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            else {
                this.tempExerciseData.push(obs);
                const lastData = this.tempExerciseData[this.tempExerciseData.length - 1];
                if (this.tempExerciseData.length > 1) {
                    if (lastData !== this.tempExerciseData[this.tempExerciseData.length - 2]
                        || !this.checkExerciseDataCorrect(lastData)) {
                        if (this.callREQTimes >= 10) {
                            yield this.loadingSvc.dismiss();
                            yield this.ble.disconnect();
                            yield this.presentScanFailedAlert();
                        }
                        else {
                            this.tempExerciseData.slice(0, 1);
                            this.callREQTimes++;
                            yield this.watchCommandService.sendREQ();
                        }
                    }
                    else {
                        this.callREQTimes = 0;
                        this.tempExerciseData = [];
                        this.exerciseData.push(lastData);
                        yield this.watchCommandService.sendROK();
                    }
                }
            }
        })));
        this.sub.add(this.ble.ROKService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE_END"]) {
                this.exerciseSubject.next(this.exerciseData);
                yield this.loadingSvc.dismiss();
                const rpeModal = yield this.modalController.create({
                    component: src_components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_6__["RpeComponent"],
                    backdropDismiss: false,
                    cssClass: 'rpe-modal',
                });
                yield rpeModal.present();
                const { data } = yield rpeModal.onWillDismiss();
                const prescription = yield this.storageSvc.get(src_constants_common__WEBPACK_IMPORTED_MODULE_7__["PRESCRIPTION"]);
                yield this.exerciseSvc.sendExerciseData(prescription, data.rpeValue, this.exerciseData, this.exerciseDatetime, this.hrMixMax);
                yield this.loadingSvc.present();
                yield this.watchCommandService.sendRND();
            }
            else {
                this.callREQTimes++;
                this.tempExerciseData.push(obs);
                yield this.watchCommandService.sendREQ();
            }
        })));
    }
    checkExerciseDataCorrect(data) {
        return data.charAt(data.length - 1) === '@';
    }
    presentIsConnectModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_components_modals_connect_modal_connect_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConnectModalComponent"],
                cssClass: 'connect-modal',
                backdropDismiss: false,
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            this.isConnect = data.isConnect;
            if (this.isConnect) {
                yield this.scanBLE();
            }
        });
    }
    scanBLE() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.devices = [];
            yield this.loadingSvc.create('Scan...');
            yield this.loadingSvc.present();
            return this.ble
                .scan()
                .subscribe({
                next: (device) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.isScaned = true;
                    if (device) {
                        if (this.devices.indexOf((d) => d.id === device.id) < 0) {
                            this.devices.push(device);
                        }
                    }
                }),
                error: (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    this.isScaned = true;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
                }),
                complete: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    if (this.devices.length > 0) {
                        const modal = yield this.modalController.create({
                            component: src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_5__["DevicesModalComponent"],
                            cssClass: 'devices-modal',
                            backdropDismiss: false,
                            componentProps: {
                                devicesList: this.devices,
                                // TODO: i18n
                                title: '디바이스를 선택해주세요.'
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
            this.connectedDeviceId = deviceId;
            yield this.loadingSvc.create('Connect...');
            yield this.loadingSvc.present();
            this.connectSubscription = this.ble
                .connect(deviceId)
                .subscribe({
                next: (peripheral) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    this.connectedDeviceId = deviceId;
                    this.peripheral = peripheral;
                    yield this.loadingSvc.create('Getting data...');
                    yield this.loadingSvc.present();
                    this.callBATTimes++;
                    yield this.watchCommandService.sendBAT();
                }),
                error: (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.batteryPower = null;
                    yield this.loadingSvc.dismiss();
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
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
                            this.connectSubscription.unsubscribe();
                            yield this.connect(deviceId);
                        }),
                    },
                    {
                        text: '취소',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.batteryPower = null;
                            this.connectSubscription.unsubscribe();
                        }),
                    },
                ],
                backdropDismiss: false,
            };
            yield this.alertSvc.presentCustomizeAlert(alertOptions);
        });
    }
    ionViewWillLeave() {
        this.sub.unsubscribe();
    }
    routeToRealtimeExercise() {
        this.reservationSvc.getReservation().subscribe((reservation) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (reservation.length > 0) {
                const availableReservation = this.checkReservationIsAvailableNow(reservation);
                //by-pass
                if (availableReservation.length > 0) {
                    this.router.navigate(['/menu/real-time-exercise'], {
                        state: { reservId: availableReservation[0].id, channelId: availableReservation[0].channelId },
                    });
                }
                else {
                    yield this.alertSvc.presentAlert('예약한 날짜 및 시간이 아닙니다. 또는 예약한 정보가 없습니다.', false);
                }
            }
            else {
                yield this.alertSvc.presentAlert('예약한 날짜 및 시간이 아닙니다. 또는 예약한 정보가 없습니다.', false);
            }
        }));
    }
    checkReservationIsAvailableNow(reservations) {
        return reservations
            .filter((reservation) => reservation.approvalResult)
            .filter((reservation) => this.checkIsBefore5Minutes(reservation.from, reservation.to));
    }
    checkIsBefore5Minutes(dateFrom, dateTo) {
        const now = new Date().getTime();
        const reservationDateFrom = new Date(dateFrom).getTime();
        const reservationDateTo = new Date(dateTo).getTime();
        const min = 5;
        const availableDateFrom = reservationDateFrom - min * 60 * 1000;
        // this.loggerSvc.log('reserve from - ', reservationDateFrom, 'now', now);
        return reservationDateTo >= now && availableDateFrom <= now;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_17__["NgZone"] },
    { type: src_services_ble_service__WEBPACK_IMPORTED_MODULE_10__["BleService"] },
    { type: src_services_loading_service__WEBPACK_IMPORTED_MODULE_12__["LoadingService"] },
    { type: src_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: src_services_logger_service__WEBPACK_IMPORTED_MODULE_13__["LoggerService"] },
    { type: src_services_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"] },
    { type: src_services_watch_command_service__WEBPACK_IMPORTED_MODULE_16__["WatchCommandService"] },
    { type: src_services_exercise_service__WEBPACK_IMPORTED_MODULE_11__["ExerciseService"] },
    { type: src_services_reservation_service__WEBPACK_IMPORTED_MODULE_14__["ReservationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_17__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map