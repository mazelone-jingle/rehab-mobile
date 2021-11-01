(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservation-reservation-module"],{

/***/ "1LfX":
/*!***************************************************!*\
  !*** ./src/app/reservation/reservation.module.ts ***!
  \***************************************************/
/*! exports provided: ReservationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPageModule", function() { return ReservationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation-routing.module */ "I049");
/* harmony import */ var _reservation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservation.page */ "JIXN");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "oksz");
/* harmony import */ var src_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/modules/shared.module */ "5Uro");
/* harmony import */ var src_services_consultation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/consultation.service */ "uqZs");
/* harmony import */ var src_services_reservation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/reservation.service */ "qir6");











let ReservationPageModule = class ReservationPageModule {
};
ReservationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReservationPageRoutingModule"],
            src_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
        ],
        providers: [src_services_consultation_service__WEBPACK_IMPORTED_MODULE_9__["ConsultationService"], src_services_reservation_service__WEBPACK_IMPORTED_MODULE_10__["ReservationService"]],
        declarations: [_reservation_page__WEBPACK_IMPORTED_MODULE_6__["ReservationPage"]],
    })
], ReservationPageModule);



/***/ }),

/***/ "2qMH":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "Q1FS");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "zB/H");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
exports.scheduleArray = scheduleArray;
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ "9AGB":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "yoF8");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "Do3o":
/*!***************************************************!*\
  !*** ./src/app/reservation/reservation.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep app-reservation calendar td {\n  background-color: #e9e9e9 !important;\n  color: black !important;\n}\n::ng-deep app-reservation calendar .monthview-primary-with-event {\n  background-color: white !important;\n  color: black !important;\n}\n::ng-deep app-reservation calendar .monthview-current {\n  background-color: green !important;\n  color: white !important;\n}\n::ng-deep app-reservation calendar .monthview-container {\n  height: unset !important;\n}\n.calendar-title {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc2VydmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUFGTjtBQUtJO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtBQUhOO0FBTUk7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FBSk47QUFVSTtFQUNFLHdCQUFBO0FBUk47QUFhQTtFQUNFLGNBQUE7QUFWRiIsImZpbGUiOiJyZXNlcnZhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgYXBwLXJlc2VydmF0aW9uIHtcclxuICBjYWxlbmRhciB7XHJcbiAgICAvLyDquLDrtoQo7J2067Kg7Yq4IOyXhuydjClcclxuICAgIHRkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC8vIOydtOuypO2KuCDsnojsnYxcclxuICAgIC5tb250aHZpZXctcHJpbWFyeS13aXRoLWV2ZW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAvLyDsmKTriphcclxuICAgIC5tb250aHZpZXctY3VycmVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLy8g7ISg7YOdXHJcbiAgICAubW9udGh2aWV3LXNlbGVjdGVkIHtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubW9udGh2aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYWxlbmRhci10aXRsZSB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "FWf1":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "pshJ");
var Observer_1 = __webpack_require__(/*! ./Observer */ "GiSu");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "zB/H");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "p//D");
var config_1 = __webpack_require__(/*! ./config */ "n3uD");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "MkmW");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "GMZp":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "GiSu":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "n3uD");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "MkmW");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "I049":
/*!***********************************************************!*\
  !*** ./src/app/reservation/reservation-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReservationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPageRoutingModule", function() { return ReservationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reservation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation.page */ "JIXN");




const routes = [
    {
        path: '',
        component: _reservation_page__WEBPACK_IMPORTED_MODULE_3__["ReservationPage"]
    }
];
let ReservationPageRoutingModule = class ReservationPageRoutingModule {
};
ReservationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReservationPageRoutingModule);



/***/ }),

/***/ "I65S":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/of.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "nzqU");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "zzsZ");
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ "2qMH");
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        args.pop();
        return scheduleArray_1.scheduleArray(args, scheduler);
    }
    else {
        return fromArray_1.fromArray(args);
    }
}
exports.of = of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "JIXN":
/*!*************************************************!*\
  !*** ./src/app/reservation/reservation.page.ts ***!
  \*************************************************/
/*! exports provided: ReservationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPage", function() { return ReservationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reservation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reservation.page.html */ "jHa+");
/* harmony import */ var _reservation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation.page.scss */ "Do3o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/auth.service */ "LLt/");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/common.service */ "FBGF");
/* harmony import */ var src_services_consultation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/consultation.service */ "uqZs");
/* harmony import */ var src_services_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/logger.service */ "O0ov");
/* harmony import */ var src_services_reservation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/reservation.service */ "qir6");











let ReservationPage = class ReservationPage {
    constructor(logger, consultationSvc, reservSvc, authSvc, commonSvc, router, zone) {
        this.logger = logger;
        this.consultationSvc = consultationSvc;
        this.reservSvc = reservSvc;
        this.authSvc = authSvc;
        this.commonSvc = commonSvc;
        this.router = router;
        this.zone = zone;
        this.showEventDetail = true;
        this.noReservation = '예약가능한 일정이 없습니다.';
        this.now = new Date();
        this.calendar = {
            locale: 'ko-KR',
            currentDate: new Date(),
            step: 30,
            dateFormatter: {
                formatMonthViewDay: (date) => date.getDate().toString(),
                formatMonthViewDayHeader: (date) => {
                    switch (date.getDay()) {
                        case 0: {
                            return '일';
                        }
                        case 1: {
                            return '월';
                        }
                        case 2: {
                            return '화';
                        }
                        case 3: {
                            return '수';
                        }
                        case 4: {
                            return '목';
                        }
                        case 5: {
                            return '금';
                        }
                        case 6: {
                            return '토';
                        }
                    }
                },
                formatMonthViewTitle: (date) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`,
                formatWeekViewDayHeader: (date) => 'MonWH',
                formatWeekViewTitle: (date) => 'testWT',
                formatWeekViewHourColumn: (date) => 'testWH',
                formatDayViewHourColumn: (date) => 'testDH',
                formatDayViewTitle: (date) => 'testDT',
            },
        };
    }
    ngOnInit() {
        // this.getScheduleList(new Date()).subscribe(this.scheduledList.bind(this));
    }
    scheduledList(res) {
        this.zone.run(() => {
            if (res.length > 0) {
                this.eventSource = res
                    .map((v) => {
                    if (v.data.length > 0) {
                        return v.data
                            .filter(data => {
                            const now = new Date();
                            now.setHours(now.getHours(), 0, 0, 0);
                            return new Date(data.from).getTime() >= now.getTime();
                        })
                            .map((data) => {
                            const event = {
                                title: data.description,
                                startTime: new Date(data.from),
                                endTime: new Date(data.to),
                                allDay: false,
                                data,
                            };
                            return event;
                        });
                    }
                    else {
                        const event = {
                            title: '',
                            startTime: new Date(v.startTime),
                            endTime: new Date(v.endTime),
                            allDay: false,
                            data: null,
                        };
                        return [event];
                    }
                })
                    .reduce((prev, curr) => prev.concat(curr));
            }
            else {
                this.eventSource = [];
            }
        });
    }
    checkCanJoinChattingRoom(dateFrom, dateTo) {
        const now = new Date().getTime();
        const reservationDateFrom = new Date(dateFrom).getTime();
        const reservationDateTo = new Date(dateTo).getTime();
        const min = 5;
        const availableDateFrom = reservationDateFrom - min * 60 * 1000;
        // this.loggerSvc.log('reserve from - ', reservationDateFrom, 'now', now);
        return reservationDateTo >= now && availableDateFrom <= now;
    }
    // #region calendar settings
    onCurrentDateChanged(event) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([
            this.getScheduleListByDate(event),
            this.getScheduleList(event),
        ]).subscribe((obs) => {
            const monthData = obs[1];
            const dialyData = obs[0];
            const arrangedData = monthData
                .filter((date) => new Date(date).getTime() >= today.getTime())
                .map((data) => ({
                title: '',
                startTime: data,
                endTime: data,
                allDay: false,
                data: [],
            }))
                .map((res) => {
                const from = new Date(res.startTime);
                if (from.getTime() === event.getTime()) {
                    res.data = dialyData;
                }
                return res;
            });
            this.scheduledList(arrangedData);
        });
        this.logger.log('on Current date changed', event);
    }
    onEventSelected($event) {
        this.logger.log('asdasd');
        this.logger.log('event data ? ', $event.data);
        const reservation = {
            consultationId: $event.data.id,
            from: $event.data.from,
            patientEmail: this.authSvc.username,
            to: $event.data.to,
            userEmail: $event.data.userEmail,
        };
        this.reservSvc.create(reservation).subscribe((res) => {
            this.getScheduleList(new Date());
            this.logger.log(res);
            // $event = {
            //   ...$event,
            //   data: {
            //     ...$event.data,
            //     reservation: res,
            //   },
            // };
            this.onCurrentDateChanged(this.selectedDate.selectedTime);
            //예약완료
            this.commonSvc
                .presentToast('운동 예약', '예약이 완료되었습니다.')
                .then(() => {
                this.logger.log('toast presented');
            });
        });
    }
    joinChat(reserv) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.logger.log('chat', reserv);
            this.router.navigate(['real-time-exercise'], {
                state: { reservId: reserv.id, channelId: reserv.channelId },
            });
        });
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    getScheduleListByDate(selectedDate) {
        this.logger.log(this.authSvc.username);
        return this.consultationSvc.getByDate(selectedDate);
    }
    getScheduleList(selectedDate) {
        this.logger.log(this.authSvc.username);
        return this.consultationSvc.getByMonth(selectedDate);
    }
    onTimeSelected($event) {
        this.zone.run(() => {
            this.selectedDate = $event;
        });
        this.selectedTime = $event.selectedTime;
        this.logger.log('Selected Date - ', $event);
    }
};
ReservationPage.ctorParameters = () => [
    { type: src_services_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_services_consultation_service__WEBPACK_IMPORTED_MODULE_8__["ConsultationService"] },
    { type: src_services_reservation_service__WEBPACK_IMPORTED_MODULE_10__["ReservationService"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
ReservationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reservation',
        template: _raw_loader_reservation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reservation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReservationPage);



/***/ }),

/***/ "LBXl":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "MkmW":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "OAkW":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    subscriber.complete();
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "Q1FS":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "yx2s");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "Xwq/");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "zfKp");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "9AGB");
var config_1 = __webpack_require__(/*! ./config */ "n3uD");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "Xwq/":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "FWf1");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "p//D");
var Observer_1 = __webpack_require__(/*! ../Observer */ "GiSu");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "jHa+":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reservation/reservation.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>운동 예약하기</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-title class=\"calendar-title\">{{viewTitle}}</ion-title>\n  <calendar\n  [monthviewEventDetailTemplate]=\"template\"\n  [eventSource]=\"eventSource\"\n  [currentDate]=\"calendar.currentDate\"\n  [dateFormatter]=\"calendar.dateFormatter\"\n  (onCurrentDateChanged)=\"onCurrentDateChanged($event)\"\n  (onEventSelected)=\"onEventSelected($event)\"\n  (onTitleChanged)=\"onViewTitleChanged($event)\"\n  (onTimeSelected)=\"onTimeSelected($event)\"\n  [step]=\"calendar.step\"\n>\n</calendar>\n  <!--\n        let-showEventDetail=\"showEventDetail\"\n    let-selectedDate=\"selectedDate\"\n    let-noEventsLabel=\"noEventsLabel\"\n  -->\n  <ng-template #template>\n    <ion-list\n      class=\"event-detail-container\"\n      has-bouncing=\"false\"\n      *ngIf=\"showEventDetail\"\n      overflow-scroll=\"false\"\n    >\n      <ion-item *ngFor=\"let event of selectedDate?.events\">\n        <div style=\"display: flex; flex: 1\">\n          <div style=\"display: flex; flex-direction: row; flex: 9; align-items: center;\">\n            <span *ngIf=\"!event.allDay\" class=\"monthview-eventdetail-timecolumn\"\n              >{{event.startTime|date: 'HH:mm'}} - {{event.endTime|date:\n              'HH:mm'}}\n            </span>\n\n            <span *ngIf=\"event.allDay\" class=\"monthview-eventdetail-timecolumn\"\n              >All day</span\n            >\n            <span class=\"event-detail\"> | {{event.title}}</span>\n          </div>\n          <div style=\"display: flex; flex: 1; align-items: flex-end\">\n            <ion-button [disabled]=\"!this.checkCanJoinChattingRoom(event.data?.from, event.data?.to) || (event.data.reservation.approvalResult === false || event.data.reservation.approvalResult === undefined)\"\n              *ngIf=\"!!event.data?.reservation\"\n              (click)=\"joinChat(event.data?.reservation)\"\n            >\n              <ng-container *ngIf=\"event.data.reservation.approvalResult; else elseTemplate\">대화방 참여</ng-container>\n              <ng-template #elseTemplate>\n                <ng-container *ngIf=\"!event.data.reservation.approvalResult\">\n                  {{event.data.reservation.approvalResult === false || event.data.reservation.cancelledDate ? '예약 불가': '의사 미확인'}}</ng-container>\n              </ng-template>\n\n\n            </ion-button>\n\n            <div *ngIf=\"event.data?.reservable\">\n              <ion-button\n                [disabled]=\"!event.data?.reservable\"\n                (click)=\"onEventSelected(event)\"\n              >\n                <div *ngIf=\"event.data?.reservable\">\n                  <span>예약</span>\n                </div>\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </ion-item>\n      <ion-item *ngIf=\"selectedDate?.events.length==0\">\n        <div class=\"no-events-label\">{{noReservation}}</div>\n      </ion-item>\n    </ion-list>\n  </ng-template>\n\n\n</ion-content>\n");

/***/ }),

/***/ "mbIT":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "n3uD":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "nzqU":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "p//D":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "pshJ":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "uqZs":
/*!**********************************************!*\
  !*** ./src/services/consultation.service.ts ***!
  \**********************************************/
/*! exports provided: ConsultationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationService", function() { return ConsultationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "NtM8");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "LLt/");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/observable/of */ "I65S");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__);









let ConsultationService = class ConsultationService extends _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] {
    constructor(http, baseUrl, route, router, logger, authSvc) {
        super(http, baseUrl + 'api/Consultation', route, router, logger, authSvc);
    }
    getConsultation() {
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__["of"])(true);
        /*this.http.get(`${this.baseUrl}/${this.authSvc.username}`).pipe(
          tap((data) => this.logger.log(data)),
          catchError((err: HttpErrorResponse) => {
            this.logger.error(err);
            throw err;
          }),
          map((res) => res as Array<IConsultation>)
        );*/
    }
    getByMonth(date) {
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const endPoint = `${this.baseUrl}/DoctorScheduleDays?email=${this.authSvc.username}&year=${year}&month=${month}`;
        return this.http.get(endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((data) => this.logger.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            this.logger.error(err);
            throw err;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => res.consultations));
    }
    getByDate(targetDate) {
        const year = targetDate.getFullYear();
        const month = targetDate.getMonth() + 1;
        const date = targetDate.getDate();
        const endPoint = `${this.baseUrl}/DoctorScheduleByDate?email=${this.authSvc.username}&year=${year}&month=${month}&date=${date}`;
        return this.http.get(endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((data) => this.logger.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            this.logger.error(err);
            throw err;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => res));
    }
};
ConsultationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
ConsultationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root',
    })
], ConsultationService);



/***/ }),

/***/ "yoF8":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "yx2s":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "FWf1");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "zB/H":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "mbIT");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "GMZp");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "pshJ");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "LBXl");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "zfKp":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "zzsZ":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "Q1FS");
var subscribeToArray_1 = __webpack_require__(/*! ../util/subscribeToArray */ "OAkW");
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ "2qMH");
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return scheduleArray_1.scheduleArray(input, scheduler);
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map

/***/ })

}]);
//# sourceMappingURL=reservation-reservation-module.js.map