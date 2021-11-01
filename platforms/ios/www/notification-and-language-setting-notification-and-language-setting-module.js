(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-and-language-setting-notification-and-language-setting-module"],{

/***/ "0Ir1":
/*!***********************************************************************************************!*\
  !*** ./src/app/notification-and-language-setting/notification-and-language-setting.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: createTranslateLoader, NotificationAndLanguageSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAndLanguageSettingPageModule", function() { return NotificationAndLanguageSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notification_and_language_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-and-language-setting-routing.module */ "4FSE");
/* harmony import */ var _notification_and_language_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-and-language-setting.page */ "gFcI");
/* harmony import */ var src_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/modules/shared.module */ "5Uro");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");













function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/noti-and-lang-setting/', '.json');
}
let NotificationAndLanguageSettingPageModule = class NotificationAndLanguageSettingPageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
NotificationAndLanguageSettingPageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"] }
];
NotificationAndLanguageSettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_and_language_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationAndLanguageSettingPageRoutingModule"],
            src_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                },
                isolate: true
            })
        ],
        declarations: [_notification_and_language_setting_page__WEBPACK_IMPORTED_MODULE_6__["NotificationAndLanguageSettingPage"]],
    })
], NotificationAndLanguageSettingPageModule);



/***/ }),

/***/ "0M3K":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification-and-language-setting/notification-and-language-setting.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'noti_and_lang_setting' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-card>\n    <ion-card-header>\n      <ion-card-title>{{'notification_setting' | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item [routerLink]=\"['/notification']\">\n          {{'exercise_schedule_notification' | translate}}\n          <ion-icon slot=\"end\" name=\"chevron-forward\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>-->\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>{{'language_setting' | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-radio-group [(ngModel)]=\"currLang\" (ionChange)=\"setLanguage()\">\n        <ion-item>\n          <ion-label>한국어</ion-label>\n          <ion-radio value=\"ko\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>English</ion-label>\n          <ion-radio value=\"en\"></ion-radio>\n        </ion-item>\n        </ion-radio-group>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "4FSE":
/*!*******************************************************************************************************!*\
  !*** ./src/app/notification-and-language-setting/notification-and-language-setting-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: NotificationAndLanguageSettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAndLanguageSettingPageRoutingModule", function() { return NotificationAndLanguageSettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notification_and_language_setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-and-language-setting.page */ "gFcI");




const routes = [
    {
        path: '',
        component: _notification_and_language_setting_page__WEBPACK_IMPORTED_MODULE_3__["NotificationAndLanguageSettingPage"]
    }
];
let NotificationAndLanguageSettingPageRoutingModule = class NotificationAndLanguageSettingPageRoutingModule {
};
NotificationAndLanguageSettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationAndLanguageSettingPageRoutingModule);



/***/ }),

/***/ "Z7FA":
/*!***********************************************************************************************!*\
  !*** ./src/app/notification-and-language-setting/notification-and-language-setting.page.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tYW5kLWxhbmd1YWdlLXNldHRpbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "gFcI":
/*!*********************************************************************************************!*\
  !*** ./src/app/notification-and-language-setting/notification-and-language-setting.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: NotificationAndLanguageSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAndLanguageSettingPage", function() { return NotificationAndLanguageSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_and_language_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification-and-language-setting.page.html */ "0M3K");
/* harmony import */ var _notification_and_language_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-and-language-setting.page.scss */ "Z7FA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/language.service */ "lRKa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constants_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/common */ "hugj");







let NotificationAndLanguageSettingPage = class NotificationAndLanguageSettingPage {
    constructor(languageSvc, router) {
        this.languageSvc = languageSvc;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getCurrLang();
        });
    }
    getCurrLang() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const settedLang = yield this.languageSvc.getLangLastSetting();
            if (settedLang) {
                this.currLang = settedLang;
            }
            else {
                this.currLang = src_constants_common__WEBPACK_IMPORTED_MODULE_6__["LANG_KO"];
            }
        });
    }
    setLanguage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.languageSvc.setLang(this.currLang);
        });
    }
    navToNotification() {
        this.router.navigate(['./notification']);
    }
};
NotificationAndLanguageSettingPage.ctorParameters = () => [
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NotificationAndLanguageSettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-notification-and-language-setting',
        template: _raw_loader_notification_and_language_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notification_and_language_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationAndLanguageSettingPage);



/***/ })

}]);
//# sourceMappingURL=notification-and-language-setting-notification-and-language-setting-module.js.map