(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2VRz":
/*!**********************************************!*\
  !*** ./src/services/prescription.service.ts ***!
  \**********************************************/
/*! exports provided: PrescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionService", function() { return PrescriptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/http.service */ "NtM8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "LLt/");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let PrescriptionService = class PrescriptionService extends src_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] {
    constructor(http, baseUrl, route, router, logger, authSvc) {
        super(http, baseUrl + 'api/Prescription', route, router, logger, authSvc);
    }
    getLastPrescription(email) {
        return this.http.get(this.baseUrl + `/Last?keyword=${encodeURIComponent(email)}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => { this.logger.log('getLast_Prescription', JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => {
            this.logger.error(err);
            throw err;
        }));
    }
    getPrescriptionById(id) {
        return this.http.get(this.baseUrl + `/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => {
            this.logger.error(err);
            throw err;
        }));
    }
};
PrescriptionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
PrescriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PrescriptionService);



/***/ }),

/***/ "5Uro":
/*!**************************************!*\
  !*** ./src/modules/shared.module.ts ***!
  \**************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
        ],
        exports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "FBGF":
/*!****************************************!*\
  !*** ./src/services/common.service.ts ***!
  \****************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let CommonService = class CommonService {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    presentToast(header, message, duration = 1000) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: header,
                message: message,
                duration: duration,
                position: 'bottom',
            });
            return toast.present();
        });
    }
};
CommonService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CommonService);



/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




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

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "dvCk":
/*!**************************************************!*\
  !*** ./src/services/exercise-records.service.ts ***!
  \**************************************************/
/*! exports provided: ExerciseRecordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseRecordsService", function() { return ExerciseRecordsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _prescription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prescription.service */ "2VRz");



let ExerciseRecordsService = class ExerciseRecordsService {
    constructor(prescriptionSvc) {
        this.prescriptionSvc = prescriptionSvc;
    }
    /**
     * data for calendar
     *
     * @param dailyList
     * @returns
     */
    handleExerciseAllRecords(exerciseRecords) {
        return exerciseRecords.map(exercise => ({
            title: '',
            startTime: new Date(exercise.date),
            endTime: new Date(new Date(exercise.date).getTime() + exercise.hrs.split(',').length * 1000),
            allDay: false,
            totalSeconds: exercise.hrs.split(',').length,
            rpeStatus: exercise.rpe,
            thrRetention: exercise.thrretention,
            hrs: exercise.hrs,
            prescriptionId: exercise.prescriptionId
        }));
    }
    getExerciseTotalTime(id) {
        return new Promise((resolve, reject) => {
            this.prescriptionSvc.getPrescriptionById(id).subscribe(pres => {
                resolve(pres.steps
                    // .filter(step => step.type.includes('Main'))
                    .map(step => step.minute)
                    .reduce((prev, curr) => prev + curr));
            });
        });
    }
    /**
     * data for pie chart
     */
    getExercisePeriodRecords(exerciseRecords, currExercisePeriod) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const today = new Date().getTime();
            const exerciseInPeriod = exerciseRecords.filter(exer => new Date(exer.date).getTime() >= this.getPeriodDate(today, currExercisePeriod));
            const exerciseTimes = exerciseInPeriod.length;
            let exerciseTotalTime = 0;
            let thrRetention = 0;
            if (exerciseInPeriod.length > 0) {
                const prescriptionIdArray = exerciseInPeriod.map(exercise => exercise.prescriptionId);
                const uniqueIdArray = prescriptionIdArray.filter((item, pos) => prescriptionIdArray.indexOf(item) === pos);
                const promises = yield uniqueIdArray.map(id => this.getExerciseTotalTime(id));
                const everyPrescriptionExerciseTime = yield Promise.all(promises);
                exerciseTotalTime = prescriptionIdArray
                    .map(id => uniqueIdArray.indexOf(id))
                    .map(idx => everyPrescriptionExerciseTime[idx])
                    .reduce((prev, curr) => prev + curr);
                thrRetention =
                    Math.round(exerciseInPeriod
                        .map(exercise => exercise.thrretention)
                        .filter(exercise => !!exercise)
                        .reduce((prev, curr) => prev + curr, 0) / exerciseTimes);
            }
            return { exerciseTimes, exerciseTotalTime, thrRetention };
        });
    }
    getPeriodDate(today, currExercisePeriod) {
        let minusMilliSeconds = 0;
        let targetDate;
        switch (currExercisePeriod) {
            case '1주일':
                minusMilliSeconds = 7 * 24 * 60 * 60 * 1000;
                targetDate = today - minusMilliSeconds;
                break;
            case '1달':
                minusMilliSeconds = 30 * 24 * 60 * 60 * 1000;
                targetDate = today - minusMilliSeconds;
                break;
            case '3달':
                minusMilliSeconds = 90 * 24 * 60 * 60 * 1000;
                targetDate = today - minusMilliSeconds;
                break;
            case '6달':
                minusMilliSeconds = 180 * 24 * 60 * 60 * 1000;
                targetDate = today - minusMilliSeconds;
                break;
            case '1년':
                minusMilliSeconds = 365 * 24 * 60 * 60 * 1000;
                targetDate = today - minusMilliSeconds;
                break;
            default:
                break;
        }
        return targetDate;
    }
};
ExerciseRecordsService.ctorParameters = () => [
    { type: _prescription_service__WEBPACK_IMPORTED_MODULE_2__["PrescriptionService"] }
];
ExerciseRecordsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExerciseRecordsService);



/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "hBqz":
/*!*****************************************!*\
  !*** ./src/services/patient.service.ts ***!
  \*****************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "LLt/");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "NtM8");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let PatientService = class PatientService extends _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] {
    constructor(http, baseUrl, route, router, logger, authSvc) {
        super(http, baseUrl + 'api/Patient', route, router, logger, authSvc);
    }
    getPatientPersonalInfo(email) {
        return this.http.get(`${this.baseUrl}/${email}`);
    }
    updatePatientPersonalInfo(email, info) {
        return this.http.put(`${this.baseUrl}/${email}`, info);
    }
    checkIdDuplicate(email) {
        return this.http.get(`${this.baseUrl}/CheckDuplicate` + `?email=${encodeURIComponent(email)}`, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(data => { this.logger.log('data', data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err)));
    }
    signUp(domain, params) {
        return this.http.post(`${this.baseUrl}/SignUp/${domain}`, params, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(data => { this.logger.log('data', data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err)));
    }
};
PatientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
PatientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], PatientService);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




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

/***/ "seLR":
/*!************************************!*\
  !*** ./src/modules/form.module.ts ***!
  \************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



let FormModule = class FormModule {
};
FormModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]
    })
], FormModule);



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
        return Math.round((rangeHr.length / flatHr.length) * 100);
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



/***/ })

}]);
//# sourceMappingURL=common.js.map