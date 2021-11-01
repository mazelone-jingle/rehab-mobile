(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~notification-detail-notification-detail-module~notification-notification-module"],{

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

/***/ "nWfO":
/*!******************************************************!*\
  !*** ./src/services/notification-setting.service.ts ***!
  \******************************************************/
/*! exports provided: NotificationSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettingService", function() { return NotificationSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "61FP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constants_storage_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/storage-key */ "/z6A");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let NotificationSettingService = class NotificationSettingService {
    constructor(storageSvc, loggerSvc) {
        this.storageSvc = storageSvc;
        this.loggerSvc = loggerSvc;
        this.updateNotification = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    getNotificationList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.storageSvc.get(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_4__["NOTIFICATION_LIST"]);
            return res ? res : [];
        });
    }
    addNewNotification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = Date.now();
            return yield this.getNotificationList().then((notificationList) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const notification = {
                    id,
                    status: true,
                    time: '',
                    sound: true,
                    vibration: true,
                    music: '',
                    repeatWeekday: []
                };
                if (notificationList) {
                    notificationList.push(notification);
                }
                else {
                    notificationList = [notification];
                }
                return yield this.storageSvc.set(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_4__["NOTIFICATION_LIST"], notificationList).then(() => id);
            }));
        });
    }
    getNotificationById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.getNotificationList().then(notificationList => notificationList.filter(notification => notification.id === id)[0]);
        });
    }
    saveNotificationById(id, updatedNotification) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getNotificationList().then((notificationList) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const newList = notificationList.map(notification => {
                    if (notification.id === id) {
                        return updatedNotification;
                    }
                    return notification;
                });
                yield this.storageSvc.set(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_4__["NOTIFICATION_LIST"], newList);
            }));
        });
    }
    updateNotificationWithProperties(id, propertyKey, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getNotificationList().then((notificationList) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const newList = notificationList.map(notification => {
                    if (notification.id === id) {
                        notification[propertyKey] = value;
                        this.loggerSvc.log(notification);
                        return notification;
                    }
                    return notification;
                });
                yield this.storageSvc.set(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_4__["NOTIFICATION_LIST"], newList);
            }));
        });
    }
};
NotificationSettingService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }
];
NotificationSettingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], NotificationSettingService);



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
//# sourceMappingURL=default~notification-detail-notification-detail-module~notification-notification-module.js.map