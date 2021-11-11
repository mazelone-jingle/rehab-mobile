(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-time-exercise-real-time-exercise-module"],{

/***/ "GFDO":
/*!****************************************************!*\
  !*** ./src/services/real-time-exercise.service.ts ***!
  \****************************************************/
/*! exports provided: RealTimeExerciseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTimeExerciseService", function() { return RealTimeExerciseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "NtM8");





let RealTimeExerciseService = class RealTimeExerciseService {
    constructor(httpSvc) {
        this.httpSvc = httpSvc;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers = this.headers.set('Content-type', 'application/json');
    }
    getReservation() {
        // return this.httpSvc.get('api/Prescription', this.headers)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
    }
    /**
     * chart에서 옳은 촛수를 나타나기 위하여, 운동 횟차 > 1 때는, 앞 횟차의 촛수들을 현재 촛수하고 합산함.
     * @param round: 현재 횟수
     * @param prescription: 운동 처방
     * @returns
     */
    getBaseSeconds(round, prescription) {
        let baseSeconds = 0;
        if (round > 1) {
            const baseMinutes = prescription.steps
                .map(step => step.minute)
                .slice(0, round - 1)
                .reduce((accumulator, currentValue) => accumulator + currentValue);
            baseSeconds = Math.round(baseMinutes * 60);
        }
        return baseSeconds;
    }
};
RealTimeExerciseService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
];
RealTimeExerciseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RealTimeExerciseService);



/***/ }),

/***/ "GSqg":
/*!*************************************************************************!*\
  !*** ./src/app/real-time-exercise/real-time-exercise-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RealTimeExercisePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTimeExercisePageRoutingModule", function() { return RealTimeExercisePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _real_time_exercise_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real-time-exercise.page */ "nN5u");




const routes = [
    {
        path: '',
        component: _real_time_exercise_page__WEBPACK_IMPORTED_MODULE_3__["RealTimeExercisePage"]
    }
];
let RealTimeExercisePageRoutingModule = class RealTimeExercisePageRoutingModule {
};
RealTimeExercisePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RealTimeExercisePageRoutingModule);



/***/ }),

/***/ "IDF+":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-time-exercise/real-time-exercise.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'real_time_exercise' | translate}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button (click)=\"stopExercise()\"\n        >stop</ion-button> -->\n      <ion-button (click)=\"startExercise()\" [disabled]=\"isExercising$ | async\"\n        >{{'exercise_start' | translate}}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\">\n  <div class=\"chart-content\" style=\"height: 50%\">\n    <h3 class=\"title\">{{'step' | translate}}{{step}} - {{prescription?.steps[step-1]?.type}}</h3>\n    <ul *ngIf=\"!!prescription\" class=\"steps\">\n      <li\n        class=\"step\"\n        *ngFor=\"let round of prescription?.steps; index as i\"\n        [ngClass]=\"(step >= i+1)? 'past': ''\"\n      >\n        {{i+1}}\n      </li>\n    </ul>\n    <div class=\"info\" *ngIf=\"step\">\n      <p>{{prescription?.exerciseTypes}}</p>\n      <p>\n        {{seconds | minSec}}/{{totalExerciseTime}}{{'minute' |\n        translate}}\n      </p>\n    </div>\n\n    <!-- <ion-button (click)=\"sendEmergency()\"> 힘들어요 </ion-button> -->\n    <div id=\"canvas\" style=\"display: block; height: calc(100% - 58px);\"></div>\n  </div>\n  <ion-content class=\"chat-content\" style=\"height: 50%\">\n    <app-chat [reservId]=\"reservId\" [channelId]=\"channelId\" [rpeMsg]=\"rpeMsg\" (sendCurrentRpeEvent)=\"sendEmergency($event)\"></app-chat>\n  </ion-content>\n</ion-content>\n");

/***/ }),

/***/ "OOJ+":
/*!*****************************************************************!*\
  !*** ./src/app/real-time-exercise/real-time-exercise.module.ts ***!
  \*****************************************************************/
/*! exports provided: RealTimeExercisePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTimeExercisePageModule", function() { return RealTimeExercisePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "xOzl");
/* harmony import */ var src_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pipes/shared-pipes.module */ "DwMb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _real_time_exercise_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./real-time-exercise-routing.module */ "GSqg");
/* harmony import */ var _real_time_exercise_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-time-exercise.page */ "nN5u");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");














const createTranslateLoader = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/real-time-exercise/', '.json');
let RealTimeExercisePageModule = class RealTimeExercisePageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
RealTimeExercisePageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_12__["LanguageService"] }
];
RealTimeExercisePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _real_time_exercise_routing_module__WEBPACK_IMPORTED_MODULE_7__["RealTimeExercisePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
                },
                isolate: true
            }),
            src_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__["SharedPipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
        declarations: [_real_time_exercise_page__WEBPACK_IMPORTED_MODULE_8__["RealTimeExercisePage"]],
    })
], RealTimeExercisePageModule);



/***/ }),

/***/ "m3da":
/*!*****************************************************************!*\
  !*** ./src/app/real-time-exercise/real-time-exercise.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nol, ul {\n  list-style: none;\n}\n\n.icon {\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n}\n\n.icon-alarm {\n  background-image: url('alarm.svg');\n}\n\n.icon-book {\n  background-image: url('book.svg');\n}\n\n.icon-calendar {\n  background-image: url('calendar.svg');\n}\n\n.icon-contact_information {\n  background-image: url('identification.svg');\n}\n\n.icon-content {\n  background-image: url('content.svg');\n}\n\n.icon-jogging {\n  background-image: url('jogging.svg');\n}\n\n.icon-search {\n  background-image: url('search.svg');\n}\n\n.icon-translate {\n  background-image: url('translate.svg');\n}\n\n.icon-battery-30 {\n  background-image: url('battery-30.svg');\n}\n\n.icon-battery-50 {\n  background-image: url('battery-50.svg');\n}\n\n.icon-battery-80 {\n  background-image: url('battery-80.svg');\n}\n\n.icon-battery-100 {\n  background-image: url('battery-100.svg');\n}\n\n.icon-heartbeat {\n  background-image: url('heartbeat.svg');\n}\n\n.icon-schedule {\n  background-image: url('schedule.svg');\n}\n\n.icon-clock {\n  background-image: url('clock.svg');\n}\n\n.icon-bluetooth {\n  background-image: url('bluetooth.svg');\n}\n\n.mt-8 {\n  margin-top: 8px;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.mr-8 {\n  margin-right: 8px;\n}\n\n.mr-16 {\n  margin-right: 16px;\n}\n\n.mb-8 {\n  margin-bottom: 8px;\n}\n\n.mb-16 {\n  margin-bottom: 16px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.ml-16 {\n  margin-left: 16px;\n}\n\n.chart-content {\n  padding-top: 10px;\n}\n\n.title {\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.steps {\n  margin: 10px 0;\n  display: flex;\n  justify-content: space-around;\n}\n\n.steps .step {\n  list-style: none;\n  width: 20px;\n  height: 20px;\n  border: 1px solid black;\n  text-align: center;\n}\n\n.steps .step.past {\n  background-color: #d86619;\n  color: #fff;\n}\n\n.info {\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lL3Jlc2V0L19yZXNldC5zY3NzIiwiLi4vLi4vLi4vcmVhbC10aW1lLWV4ZXJjaXNlLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3RoZW1lL2ljb25zL19pY29ucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vdGhlbWUvbGF5b3V0L19tYXJnaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNDRDs7QURTQTtFQUNDLGdCQUFBO0FDTkQ7O0FDdkJBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLGtDQUFBO0FEMEJGOztBQ3hCQTtFQUNFLGlDQUFBO0FEMkJGOztBQ3pCQTtFQUNFLHFDQUFBO0FENEJGOztBQzFCQTtFQUNFLDJDQUFBO0FENkJGOztBQzNCQTtFQUNFLG9DQUFBO0FEOEJGOztBQzVCQTtFQUNFLG9DQUFBO0FEK0JGOztBQzdCQTtFQUNFLG1DQUFBO0FEZ0NGOztBQzlCQTtFQUNFLHNDQUFBO0FEaUNGOztBQzlCQTtFQUNFLHVDQUFBO0FEaUNGOztBQzlCQTtFQUNFLHVDQUFBO0FEaUNGOztBQzlCQTtFQUNFLHVDQUFBO0FEaUNGOztBQzlCQTtFQUNFLHdDQUFBO0FEaUNGOztBQzlCQTtFQUNFLHNDQUFBO0FEaUNGOztBQzlCQTtFQUNFLHFDQUFBO0FEaUNGOztBQzlCQTtFQUNFLGtDQUFBO0FEaUNGOztBQzlCQTtFQUNFLHNDQUFBO0FEaUNGOztBRTFGSTtFQUNFLGVBQUE7QUY2Rk47O0FFM0ZJO0VBQ0UsZ0JBQUE7QUY2Rk47O0FFekZJO0VBQ0UsaUJBQUE7QUYyRk47O0FFekZJO0VBQ0Usa0JBQUE7QUYyRk47O0FFdkZJO0VBQ0Usa0JBQUE7QUZ5Rk47O0FFdkZJO0VBQ0UsbUJBQUE7QUZ5Rk47O0FFckZJO0VBQ0UsZ0JBQUE7QUZ1Rk47O0FFckZJO0VBQ0UsaUJBQUE7QUZ1Rk47O0FBcEhBO0VBQ0UsaUJBQUE7QUF1SEY7O0FBckhBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQXdIRjs7QUF0SEE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBeUhGOztBQXhIRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBMEhKOztBQXpISTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQTJITjs7QUF0SEE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBeUhGIiwiZmlsZSI6InJlYWwtdGltZS1leGVyY2lzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLy8gLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuLy8gYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbi8vIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4vLyBcdGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuLy8gYm9keSB7XG4vLyBcdGxpbmUtaGVpZ2h0OiAxO1xuLy8gfVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbi8vIGJsb2NrcXVvdGUsIHEge1xuLy8gXHRxdW90ZXM6IG5vbmU7XG4vLyB9XG4vLyBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbi8vIHE6YmVmb3JlLCBxOmFmdGVyIHtcbi8vIFx0Y29udGVudDogJyc7XG4vLyBcdGNvbnRlbnQ6IG5vbmU7XG4vLyB9XG4vLyB0YWJsZSB7XG4vLyBcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4vLyBcdGJvcmRlci1zcGFjaW5nOiAwO1xuLy8gfVxuIiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvdGhlbWUuc2Nzcyc7XHJcblxyXG4uY2hhcnQtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3RlcHMge1xyXG4gIG1hcmdpbjogMTBweCAwOztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIC5zdGVwIHtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAmLnBhc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDg2NjE5O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIiwiLmljb24ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pY29uLWFsYXJtIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9hbGFybS5zdmcnKTtcbn1cbi5pY29uLWJvb2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2Jvb2suc3ZnJyk7XG59XG4uaWNvbi1jYWxlbmRhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vY2FsZW5kYXIuc3ZnJyk7XG59XG4uaWNvbi1jb250YWN0X2luZm9ybWF0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9pZGVudGlmaWNhdGlvbi5zdmcnKTtcbn1cbi5pY29uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2NvbnRlbnQuc3ZnJyk7XG59XG4uaWNvbi1qb2dnaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9qb2dnaW5nLnN2ZycpO1xufVxuLmljb24tc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnJyk7XG59XG4uaWNvbi10cmFuc2xhdGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL3RyYW5zbGF0ZS5zdmcnKTtcbn1cblxuLmljb24tYmF0dGVyeS0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYmF0dGVyeS0zMC5zdmcnKTtcbn1cblxuLmljb24tYmF0dGVyeS01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYmF0dGVyeS01MC5zdmcnKTtcbn1cblxuLmljb24tYmF0dGVyeS04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYmF0dGVyeS04MC5zdmcnKTtcbn1cblxuLmljb24tYmF0dGVyeS0xMDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JhdHRlcnktMTAwLnN2ZycpO1xufVxuXG4uaWNvbi1oZWFydGJlYXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2hlYXJ0YmVhdC5zdmcnKTtcbn1cblxuLmljb24tc2NoZWR1bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL3NjaGVkdWxlLnN2ZycpO1xufVxuXG4uaWNvbi1jbG9jayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vY2xvY2suc3ZnJyk7XG59XG5cbi5pY29uLWJsdWV0b290aCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYmx1ZXRvb3RoLnN2ZycpO1xufVxuIiwiLy9tYXJnaW5cbi5te1xuICAmdHsgLy90b3BcbiAgICAmLTgge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cbiAgICAmLTE2IHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICB9XG4gICZyeyAvL3JpZ2h0XG4gICAgJi04IHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgICAmLTE2IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gIH1cbiAgJmJ7IC8vYm90dG9tXG4gICAgJi04IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgJi0xNiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgfVxuICAmbHsgLy9sZWZ0XG4gICAgJi04IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuICAgICYtMTYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "nN5u":
/*!***************************************************************!*\
  !*** ./src/app/real-time-exercise/real-time-exercise.page.ts ***!
  \***************************************************************/
/*! exports provided: RealTimeExercisePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTimeExercisePage", function() { return RealTimeExercisePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_real_time_exercise_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./real-time-exercise.page.html */ "IDF+");
/* harmony import */ var _real_time_exercise_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./real-time-exercise.page.scss */ "m3da");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chartjs-plugin-annotation */ "Ym+k");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/modals/devices-modal/devices-modal.component */ "KZRF");
/* harmony import */ var src_components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/modals/rpe/rpe.component */ "c49u");
/* harmony import */ var src_constants_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/constants/common */ "hugj");
/* harmony import */ var src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/constants/watch-ble-command */ "gbkr");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/auth.service */ "LLt/");
/* harmony import */ var src_services_ble_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/ble.service */ "/zZW");
/* harmony import */ var src_services_chat_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/chat.service */ "zfEa");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/common.service */ "FBGF");
/* harmony import */ var src_services_exercise_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/exercise.service */ "yHJi");
/* harmony import */ var src_services_loading_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/loading.service */ "qozY");
/* harmony import */ var src_services_logger_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/services/logger.service */ "O0ov");
/* harmony import */ var src_services_real_time_exercise_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/services/real-time-exercise.service */ "GFDO");
/* harmony import */ var src_services_storage_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/services/storage.service */ "61FP");
/* harmony import */ var src_services_watch_command_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/services/watch-command.service */ "Ut+J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../environments/environment */ "AytR");

























let RealTimeExercisePage = class RealTimeExercisePage {
    constructor(realTimeExerciseSvc, ble, zone, alertSvc, loggerSvc, chatSvc, commonSvc, storageSvc, authSvc, route, router, exerciseSvc, modalController, watchCommandSvc, loadingSvc) {
        this.realTimeExerciseSvc = realTimeExerciseSvc;
        this.ble = ble;
        this.zone = zone;
        this.alertSvc = alertSvc;
        this.loggerSvc = loggerSvc;
        this.chatSvc = chatSvc;
        this.commonSvc = commonSvc;
        this.storageSvc = storageSvc;
        this.authSvc = authSvc;
        this.route = route;
        this.router = router;
        this.exerciseSvc = exerciseSvc;
        this.modalController = modalController;
        this.watchCommandSvc = watchCommandSvc;
        this.loadingSvc = loadingSvc;
        this.dataset = [];
        this.realtime = false;
        this.rateArray = [];
        this.seconds = 0;
        this.isToggleChat = false;
        this.isShowChat = false;
        this.rpesSecondsArray = [];
        this.devices = [];
        this.connectSubscription = null;
        this.isExercising$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.callBATTimes = 0;
        this.exerciseData = [];
        this.exerciseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.exerciseData);
        this.callREQTimes = 0;
        this.tempExerciseData = [];
        this.exerciseFinished = false; // 운동 끝내 여부 판단
        this.route.queryParams.subscribe((params) => {
            this.loggerSvc.log(params);
            if (!!this.router.getCurrentNavigation().extras.state) {
                this.reservId =
                    this.router.getCurrentNavigation().extras.state.reservId;
                this.channelId =
                    this.router.getCurrentNavigation().extras.state.channelId;
                this.loggerSvc.log('channelId ? ', this.channelId);
                this.loggerSvc.log('reservId ? ', this.reservId);
            }
        });
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.sub.add(this.chatSvc.connection$.subscribe((isConnected) => {
            this.zone.run(() => {
                this.isChatConnected = isConnected;
            });
        }));
        this.sub.add(this.chatSvc.newOnlineUser$.subscribe((res) => {
            this.commonSvc.presentToast('', `${res.userName} 님이 대화방에 참여 하였습니다.`);
            this.chatSvc.handShake(this.channelId);
        }));
        this.sub.add(this.chatSvc.leave$.subscribe((res) => {
            this.commonSvc.presentToast('', `${res.userName} 님이 대화방을 나갔습니다.`);
        }));
        this.sub.add(this.chatSvc.recvStopSignalMessage$.subscribe((signal) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (signal.channelId === this.channelId) {
                if (signal.isExerciseStop) {
                    const msg = '의사가 운동을 종료하였습니다. 메뉴화면으로 돌아갑니다.';
                    yield this.alertSvc.presentAlert(msg, false, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.router.navigate(['/menu']); }));
                }
            }
        })));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isConnected = yield this.ble.isConnected();
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].useDummyData) {
                yield this.getLastPrescription();
                return;
            }
            if (!isConnected) {
                yield this.scanBLE();
            }
            else {
                yield this.getLastPrescription();
            }
        });
    }
    ionViewWillEnter() {
        this.setSubscriptions();
    }
    setSubscriptions() {
        this.sub.add(this.ble.SSEResponse$.subscribe({
            next: (obs) => {
                if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_SSE"]) {
                    this.ble.serviceTypeSubject.next(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_THR"]);
                }
            },
            error: (e) => { },
            complete: () => { },
        }));
        this.sub.add(this.ble.THRResponse$.subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_END"]) {
                    this.ble.realtimeDataSubject.next('');
                    this.exerciseFinished = true;
                }
                else {
                    const thrPattern = new RegExp(/^THR#[0-9]_[0-9]{1,3}\$[0-9]{1,4}@$/g);
                    if (thrPattern.test(obs)) {
                        this.ble.realtimeDataSubject.next(obs);
                    }
                }
            }),
            error: (e) => { },
            complete: () => { },
        }));
        // update chart
        this.sub.add(this.ble.realtimeData$.subscribe({
            next: (data) => {
                if (data === '') {
                    setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.loadingSvc.create('Getting data...');
                        yield this.loadingSvc.present();
                        yield this.watchCommandSvc.sendBAT();
                    }), 1000);
                    return;
                }
                if (data === undefined) {
                    return;
                }
                //step
                const step = +data.substring(data.indexOf('#') + 1, data.indexOf('_'));
                //hr data
                const rate = +data.substring(data.indexOf('_') + 1, data.indexOf('$'));
                // second
                const second = +data.substring(data.indexOf('$') + 1, data.indexOf('@'));
                const baseSeconds = this.realTimeExerciseSvc.getBaseSeconds(step, this.prescription);
                if (second === 1) {
                    //단계가 올라감
                    const prescriptionSteps = this.prescription.steps.find((v) => v.sequence === step);
                    const exerciseStepMsg = {
                        channelId: this.channelId,
                        currentStep: prescriptionSteps,
                        currentStepCount: step,
                        exerciseType: this.prescription.exerciseTypes[0],
                        messageStatus: 'send',
                        messageType: 'ExerciseStep',
                        sendDateTime: new Date(),
                        totalMinute: this.totalExerciseTime,
                        totalStepCount: this.prescription.steps.length,
                        userEmail: this.authSvc.username,
                    };
                    this.chatSvc.sendExerciseStep(exerciseStepMsg);
                }
                this.heartRate = rate;
                this.zone.run(() => {
                    this.step = step;
                    this.seconds = second + baseSeconds;
                });
                if (this.available) {
                    this.addData({
                        label: second + baseSeconds,
                        data: rate,
                    });
                    this.sendHeartRate(rate, step, second + baseSeconds);
                    this.rateArray.push(rate);
                }
            },
            error: (error) => { },
            complete: () => { },
        }));
        this.sub.add(this.ble.BATService$.subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const batPattern = new RegExp(/^BAT#[0-9]{1,3}@$/g);
                if (batPattern.test(obs)) {
                    this.callBATTimes = 0;
                    yield this.loadingSvc.dismiss();
                    this.ble.handleBAT(obs);
                    if (this.realtimeConnect || this.exerciseFinished) {
                        yield this.watchCommandSvc.sendRND();
                    }
                    else {
                        yield this.watchCommandSvc.sendSTS();
                    }
                }
                else {
                    if (this.callBATTimes >= 10) {
                        yield this.loadingSvc.dismiss();
                        this.realtimeConnect = false;
                        yield this.ble.disconnect();
                        yield this.presentScanFailedAlert();
                    }
                    else {
                        this.callBATTimes++;
                        yield this.watchCommandSvc.sendBAT();
                    }
                }
            }),
            error: (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loggerSvc.error('BAT error', err);
            }),
            complete: () => {
                this.loggerSvc.info('BAT complete');
            },
        }));
        this.sub.add(this.ble.RNDService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_HDA"]) {
                yield this.loadingSvc.dismiss();
                yield this.loadingSvc.present();
                yield this.watchCommandSvc.sendRTS();
                yield this.loadingSvc.create(`디바이스에 저장된 데이터들을 받아오는 중입니다. 잠시만 기다려주세요......`);
                yield this.loadingSvc.present();
                this.exerciseData = [];
            }
            else if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_NDA"]) {
                if (this.exerciseFinished) {
                    yield this.ble.disconnect();
                    this.rateArray = [];
                    this.isExercising$.next(false);
                }
                else {
                    yield this.watchCommandSvc.sendSTS();
                }
            }
        })));
        this.sub.add(this.ble.RTSService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            const [y, M, d, h, m] = obs
                .substring(obs.indexOf('#') + 1, obs.lastIndexOf('@'))
                .split('_');
            this.exerciseDatetime = new Date(+('20' + y), +M - 1, +d, +h, +m);
            yield this.watchCommandSvc.sendRTH();
        })));
        this.sub.add(this.ble.RTHService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            const [min, max] = obs
                .substring(obs.indexOf('#') + 1, obs.lastIndexOf('@'))
                .split('_');
            this.hrMixMax = { min, max };
            yield this.watchCommandSvc.sendRTE();
        })));
        this.sub.add(this.ble.RTEService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            yield this.watchCommandSvc.sendRHD();
        })));
        this.sub.add(this.ble.RHDService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_END"]) {
                this.exerciseSubject.next(this.exerciseData);
                yield this.loadingSvc.dismiss();
            }
            else {
                this.tempExerciseData.push(obs);
                this.callREQTimes++;
                yield this.watchCommandSvc.sendREQ();
            }
        })));
        this.sub.add(this.ble.REQService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            else {
                this.tempExerciseData.push(obs);
                const lastData = this.tempExerciseData[this.tempExerciseData.length - 1];
                if (this.tempExerciseData.length > 1) {
                    const exerciseDataPattern = new RegExp(/.*\@$/g);
                    if (lastData !==
                        this.tempExerciseData[this.tempExerciseData.length - 2] ||
                        !exerciseDataPattern.test(lastData)) {
                        if (this.callREQTimes >= 10) {
                            this.realtimeConnect = false;
                            yield this.loadingSvc.dismiss();
                            yield this.ble.disconnect();
                            yield this.presentScanFailedAlert();
                        }
                        else {
                            this.tempExerciseData.slice(0, 1);
                            this.callREQTimes++;
                            yield this.watchCommandSvc.sendREQ();
                        }
                    }
                    else {
                        this.callREQTimes = 0;
                        this.tempExerciseData = [];
                        this.exerciseData.push(lastData);
                        yield this.watchCommandSvc.sendROK();
                    }
                }
            }
        })));
        this.sub.add(this.ble.ROKService$.subscribe((obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_ERR"]) {
                yield this.loadingSvc.dismiss();
            }
            if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_END"]) {
                this.exerciseSubject.next(this.exerciseData);
                yield this.loadingSvc.dismiss();
                const rpeModal = yield this.modalController.create({
                    component: src_components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_7__["RpeComponent"],
                    backdropDismiss: false,
                    cssClass: 'rpe-modal',
                });
                yield rpeModal.present();
                const { data } = yield rpeModal.onWillDismiss();
                const prescription = yield this.storageSvc.get(src_constants_common__WEBPACK_IMPORTED_MODULE_8__["PRESCRIPTION"]);
                yield this.exerciseSvc.sendExerciseData(prescription, data.rpeValue, this.exerciseData, this.exerciseDatetime, this.hrMixMax);
                this.sendStopSignal();
                // await this.loadingSvc.present();
                // await this.watchCommandSvc.sendRND();
            }
            else {
                this.callREQTimes++;
                this.tempExerciseData.push(obs);
                yield this.watchCommandSvc.sendREQ();
            }
        })));
        this.sub.add(this.ble.STSService$.subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_STS"]) {
                    yield this.watchCommandSvc.sendSTH(this.prescription);
                }
            }),
            error: (err) => {
                this.loggerSvc.error('STS error', err);
            },
            complete: () => {
                this.loggerSvc.info('STS complete');
            },
        }));
        this.sub.add(this.ble.STHService$.subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (obs === src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_STH"]) {
                    yield this.watchCommandSvc.sendSTE(this.prescription);
                }
            }),
            error: (err) => {
                this.loggerSvc.error('STH error', err);
            },
            complete: () => {
                this.loggerSvc.info('STH complete');
            },
        }));
        this.sub.add(this.ble.STEService$.subscribe({
            next: (obs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (obs.includes(src_constants_watch_ble_command__WEBPACK_IMPORTED_MODULE_9__["RESPONSE_TYPE_STE"])) {
                    this.isExercising$.next(true);
                }
            }),
            error: (err) => {
                this.loggerSvc.error('STE error', err);
            },
            complete: () => {
                this.loggerSvc.info('STE complete');
            },
        }));
    }
    sendStopSignal() {
        const signal = {
            messageType: 'TEXT',
            sendDateTime: new Date(),
            messageStatus: 'send',
            userEmail: this.authSvc.username,
            channelId: this.channelId,
            isExerciseStop: true,
        };
        this.loggerSvc.log('stop signal', signal);
        this.chatSvc.sendStopSignal(signal);
    }
    getRpesValue() {
        const rpesValue = this.rateArray.map((_) => '-1');
        this.rpesSecondsArray.forEach((data) => {
            rpesValue[data.second] = data.rpe + '';
        });
        return rpesValue.join(',');
    }
    checkIsBefore5Minutes(dateFrom, dateTo) {
        const now = new Date().getTime();
        const reservationDateFrom = new Date(dateFrom).getTime();
        const reservationDateTo = new Date(dateTo).getTime();
        const min = 5;
        const availableDateFrom = reservationDateFrom - min * 60 * 1000;
        return reservationDateTo >= now && availableDateFrom <= now;
    }
    scanBLE() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.devices = [];
            yield this.loadingSvc.create('Scan...');
            yield this.loadingSvc.present();
            this.ble.scan().subscribe({
                next: (device) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (device) {
                        if (this.devices.indexOf((d) => d.id === device.id) < 0) {
                            this.devices.push(device);
                        }
                    }
                }),
                error: (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
                    yield this.presentScanFailedAlert();
                }),
                complete: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    if (this.devices.length > 0) {
                        const modal = yield this.modalController.create({
                            component: src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_6__["DevicesModalComponent"],
                            cssClass: 'devices-modal',
                            backdropDismiss: false,
                            componentProps: {
                                devicesList: this.devices,
                                // TODO: i18n
                                title: '시계와 연결되어 있지 않습니다. 데이터 전송하시려면 디바이스를 선택해주세요.',
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
                }),
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
                        handler: () => { },
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
            this.connectSubscription = this.ble.connect(deviceId).subscribe({
                next: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.exerciseFinished = false;
                    this.realtimeConnect = true;
                    yield this.loadingSvc.dismiss();
                    yield this.getLastPrescription();
                }),
                error: (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loadingSvc.dismiss();
                    this.realtimeConnect = false;
                    this.ble.realtimeDataSubject.next();
                    // if (this.isExercising$.value) {
                    /** 연결 끊어질 때 처음부터 시작하려면 */
                    //   await this.presentConnectInterruptAlert(deviceId);
                    // } else {
                    /** 연결 끊어질 때 그냥 다시 연결해서 남어지는 것을 계속 진행하려면 */
                    yield this.presentConnectFailedAlert(deviceId);
                    // }
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
                }),
                complete: () => { },
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
                            this.isExercising$.next(false);
                            this.connectSubscription.unsubscribe();
                        }),
                    },
                ],
                backdropDismiss: false,
            };
            yield this.alertSvc.presentCustomizeAlert(alertOptions);
        });
    }
    presentConnectInterruptAlert(deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alertOptions = {
                message: `연결 중단되었습니다. 디시 운동하시겠습니까?`,
                buttons: [
                    {
                        text: '확인',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            var _a;
                            this.isExercising$.next(false);
                            this.ble.serviceTypeSubject.next();
                            this.connectSubscription.unsubscribe();
                            // reset chart
                            this.rateArray = [];
                            this.realtime = true;
                            if (this.chart.data.datasets &&
                                ((_a = this.chart.data.datasets[0]) === null || _a === void 0 ? void 0 : _a.data.length) > 0) {
                                this.removeData(this.chart);
                                this.step = 0;
                                this.seconds = 0;
                                this.chart.destroy();
                                const hrChart = document.getElementById('hrChart');
                                const location = document.getElementById('canvas');
                                location.removeChild(hrChart);
                                this.createCanvas();
                                setTimeout(() => {
                                    this.canvas.id = 'hrChart';
                                    location.appendChild(this.canvas);
                                }, 1000);
                            }
                            yield this.presentResetWatchAlert(deviceId);
                        }),
                    },
                    {
                        text: '취소',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.isExercising$.next(false);
                            this.connectSubscription.unsubscribe();
                        }),
                    },
                ],
                backdropDismiss: false,
            };
            yield this.alertSvc.presentCustomizeAlert(alertOptions);
        });
    }
    presentResetWatchAlert(deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alertOptions = {
                message: '다시 운동하시려면 시계를 리셋하십시오. <br>시계를 리셋하셨습니까?',
                buttons: [
                    {
                        text: '리셋 완료',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.connect(deviceId);
                        }),
                    },
                    {
                        text: '취소',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.isExercising$.next(false);
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
        if (this.connectSubscription) {
            this.connectSubscription.unsubscribe();
        }
        this.sub.unsubscribe();
    }
    ionViewDidLeave() {
        // this.stopExercise();
        this.chatSvc.leaveAsync(this.channelId).then(() => {
            this.loggerSvc.log('진료모임을 나갔습니다.');
            this.chatSvc.stopAsync().then(() => {
                this.loggerSvc.log('실시간 서버와 접속을 종료했습니다.');
            });
        });
    }
    sendEmergency(rpeValue) {
        this.addRpe(rpeValue);
        const msg = {
            channelId: this.channelId,
            messageStatus: 'send',
            messageType: 'EMERGENCY',
            rate: this.heartRate,
            seconds: this.seconds,
            sendDateTime: new Date(),
            userEmail: this.authSvc.username,
            rpeValue,
        };
        this.chatSvc.sendEmergency(msg);
        this.rpeMsg = msg;
        this.rpesSecondsArray.push({ rpe: rpeValue, second: this.seconds });
    }
    createCanvas() {
        this.canvas = document.createElement('canvas');
        const ctx = this.canvas.getContext('2d');
        chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"].plugins.register({ chartAnnotation: chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_4__ });
        setTimeout(() => {
            this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](ctx, {
                type: 'line',
                data: {
                    labels: this.labels,
                    datasets: [
                        {
                            label: '# of Heart beat',
                            data: [],
                            spanGaps: false,
                            lineTension: 0.2,
                            backgroundColor: 'rgba(255, 0, 127, 0)',
                            borderColor: 'rgba(255, 0, 127, 1)',
                            pointBackgroundColor: 'rgba(255, 0, 127, 1)',
                            pointRadius: 0,
                            borderWidth: 2,
                            datalabels: {
                                display: false,
                            },
                        },
                        {
                            label: 'Hardness',
                            data: [],
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                            pointRadius: 6,
                            borderWidth: 1,
                            pointStyle: 'rect',
                            showLine: false,
                            datalabels: {
                                display: true,
                                align: 'top',
                                anchor: 'end',
                                color: 'black',
                                font: {
                                    weight: 'bold',
                                },
                            },
                        },
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    onclick: (point, event) => {
                        this.loggerSvc.log('point', point, 'event', event);
                    },
                    scales: {
                        yAxes: [
                        // {
                        //   ticks: {
                        //     beginAtZero: false,
                        //   },
                        // },
                        ],
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
            this.loggerSvc.log('chart', this.chart);
        }, 100);
        setTimeout(() => {
            const location = document.getElementById('canvas');
            this.canvas.id = 'hrChart';
            location.appendChild(this.canvas);
        }, 300);
    }
    addRpe(rpe) {
        const heartRatesData = this.heartRateData;
        if (!!heartRatesData && heartRatesData.length > 0) {
            const latestHr = heartRatesData[heartRatesData.length - 1];
            const latestLable = this.labels[this.labels.length - 1];
            const point = {
                x: latestLable,
                y: latestHr,
                z: rpe,
            };
            this.loggerSvc.log('rpe', point);
            this.rpeData.push(point);
            this.chart.update();
        }
    }
    get rpeData() {
        return this.chart.data.datasets[1].data;
    }
    get heartRateData() {
        return this.chart.data.datasets[0].data;
    }
    get labels() {
        var _a, _b;
        return ((_b = (_a = this.chart) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.labels) || [];
    }
    setExerciseInfoData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rateArray = [];
            this.realtime = true;
            this.authSvc.extendToken().subscribe((isRefreshed) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (isRefreshed) {
                    yield this.loadingSvc.create('Getting data...');
                    yield this.loadingSvc.present();
                    yield this.watchCommandSvc.sendBAT();
                }
            }));
        });
    }
    removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }
    startExercise() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].useDummyData) {
                this.generateRandomHeartRate();
            }
            else {
                const isConnected = yield this.ble.isConnected();
                if (!isConnected) {
                    yield this.scanBLE();
                }
                else {
                    //reset chart
                    if (this.chart.data.datasets &&
                        ((_a = this.chart.data.datasets[0]) === null || _a === void 0 ? void 0 : _a.data.length) > 0) {
                        this.removeData(this.chart);
                        this.step = 0;
                        this.seconds = 0;
                        this.chart.destroy();
                        const hrChart = document.getElementById('hrChart');
                        const location = document.getElementById('canvas');
                        location.removeChild(hrChart);
                        this.createCanvas();
                        setTimeout(() => {
                            this.canvas.id = 'hrChart';
                            location.appendChild(this.canvas);
                        }, 1000);
                    }
                    yield this.setExerciseInfoData();
                }
            }
        });
    }
    stopExercise() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!!this.interval && !!this.timer) {
                clearInterval(this.interval);
                clearTimeout(this.timer);
                this.interval = null;
                this.timer = null;
            }
            this.exerciseData = this.exerciseData.map((res) => Number(res));
            yield this.loadingSvc.dismiss();
            const rpeModal = yield this.modalController.create({
                component: src_components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_7__["RpeComponent"],
                backdropDismiss: false,
                cssClass: 'rpe-modal',
            });
            yield rpeModal.present();
            const { data } = yield rpeModal.onWillDismiss();
            const prescription = yield this.storageSvc.get(src_constants_common__WEBPACK_IMPORTED_MODULE_8__["PRESCRIPTION"]);
            yield this.exerciseSvc
                .postExercise(prescription, this.exerciseData, data.rpeValue, this.exerciseDatetime, this.hrMixMax, '')
                .toPromise();
            this.sendStopSignal();
        });
    }
    addData(item) {
        this.labels.push(item.label);
        this.heartRateData.push(item.data);
        if (this.labels.length > 100) {
            this.labels.splice(0, 1);
            this.heartRateData.splice(0, 1);
        }
        this.chart.update();
    }
    get available() {
        return this.realtime;
    }
    getLastPrescription() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.prescription = yield this.storageSvc.get(src_constants_common__WEBPACK_IMPORTED_MODULE_8__["PRESCRIPTION"]);
            this.createCanvas();
            this.loggerSvc.log('prescription', this.prescription);
            if (!this.prescription) {
                yield this.alertSvc.presentAlert(`You have not gotten the latest prescription`);
                this.router.navigate(['/menu']);
            }
            else {
                this.totalExerciseTime = this.prescription.steps
                    .map((step) => step.minute)
                    .reduce((accr, curr) => accr + curr);
            }
        });
    }
    toggleChat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isShowChat = !this.isShowChat;
        });
    }
    getUpdatedValue(e) {
        this.isShowChat = e;
    }
    generateRandomHeartRate() {
        let second = 0;
        let step = 1;
        let totalMinutes = 0;
        this.getLastPrescription().then(() => {
            this.loggerSvc.log('prescription', this.prescription);
            this.hrMixMax = { min: this.prescription.hrMin + '', max: this.prescription.hrMax + '' };
            const totalStepCount = this.prescription.steps.length;
            let currentPrescriptionStep = this.prescription.steps.find((s) => s.sequence === step);
            let exerciseStepMsg = {
                channelId: this.channelId,
                currentStep: currentPrescriptionStep,
                currentStepCount: step,
                exerciseType: this.prescription.exerciseTypes[0],
                messageStatus: 'send',
                messageType: 'ExerciseStep',
                sendDateTime: new Date(),
                totalMinute: this.totalExerciseTime,
                totalStepCount,
                userEmail: this.authSvc.username,
            };
            this.chatSvc.sendExerciseStep(exerciseStepMsg);
            this.interval = setInterval(() => {
                this.timer = setTimeout(() => {
                    const rate = Math.floor(Math.random() * 100);
                    second++;
                    const minute = Math.floor(second / 60);
                    if (totalMinutes < this.totalExerciseTime) {
                        this.loggerSvc.log('minute', minute, 'step minute', currentPrescriptionStep.minute);
                        if (minute - totalMinutes >= currentPrescriptionStep.minute) {
                            totalMinutes += currentPrescriptionStep.minute;
                            step++;
                            currentPrescriptionStep = this.prescription.steps.find((s) => s.sequence === step);
                            exerciseStepMsg = Object.assign(Object.assign({}, exerciseStepMsg), { currentStep: currentPrescriptionStep, currentStepCount: step });
                            this.chatSvc.sendExerciseStep(exerciseStepMsg);
                        }
                    }
                    this.loggerSvc.log('totalExcerciseTime ', this.totalExerciseTime);
                    const baseSeconds = this.realTimeExerciseSvc.getBaseSeconds(1, this.prescription);
                    this.loggerSvc.log('prescription', this.prescription);
                    this.loggerSvc.log('base seconds', baseSeconds);
                    this.addData({
                        label: second + baseSeconds,
                        data: rate,
                    });
                    this.sendHeartRate(rate, 1, second + baseSeconds);
                    this.exerciseData.push(rate);
                    this.seconds = second;
                    this.heartRate = rate;
                }, 100);
            }, 100);
        });
    }
    sendHeartRate(rate, round, second) {
        this.chatSvc.sendHeartRate({
            channelId: this.channelId,
            messageStatus: 'send',
            messageType: 'HeartRate',
            rate,
            round,
            seconds: second,
            userEmail: this.authSvc.username,
            sendDateTime: new Date(),
        });
    }
};
RealTimeExercisePage.ctorParameters = () => [
    { type: src_services_real_time_exercise_service__WEBPACK_IMPORTED_MODULE_18__["RealTimeExerciseService"] },
    { type: src_services_ble_service__WEBPACK_IMPORTED_MODULE_12__["BleService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_21__["NgZone"] },
    { type: src_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: src_services_logger_service__WEBPACK_IMPORTED_MODULE_17__["LoggerService"] },
    { type: src_services_chat_service__WEBPACK_IMPORTED_MODULE_13__["ChatService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_14__["CommonService"] },
    { type: src_services_storage_service__WEBPACK_IMPORTED_MODULE_19__["StorageService"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"] },
    { type: src_services_exercise_service__WEBPACK_IMPORTED_MODULE_15__["ExerciseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["ModalController"] },
    { type: src_services_watch_command_service__WEBPACK_IMPORTED_MODULE_20__["WatchCommandService"] },
    { type: src_services_loading_service__WEBPACK_IMPORTED_MODULE_16__["LoadingService"] }
];
RealTimeExercisePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_21__["Component"])({
        selector: 'app-real-time-exercise',
        template: _raw_loader_real_time_exercise_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_real_time_exercise_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RealTimeExercisePage);



/***/ })

}]);
//# sourceMappingURL=real-time-exercise-real-time-exercise-module.js.map