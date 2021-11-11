(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "2bN1":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "l7ks");
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page.scss */ "hxgU");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/alert.service */ "NqkH");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/logger.service */ "O0ov");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/register.service */ "EmCn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(fb, router, registerSvc, logger, alertSvc) {
        this.fb = fb;
        this.router = router;
        this.registerSvc = registerSvc;
        this.logger = logger;
        this.alertSvc = alertSvc;
        this.buildForm();
    }
    get email() { return this.forgotPwdForm.get('email'); }
    ngOnInit() {
    }
    buildForm() {
        this.forgotPwdForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]],
        });
    }
    resetPassword() {
        this.registerSvc.forgotPassword(this.getEmail())
            .subscribe(res => {
            this.logger.log('forgot password.result', res);
            this.alertSvc.presentAlert('확인 메일이 발송되었습니다.', false, () => this.router.navigate(['/login']));
        }, err => {
            this.logger.error(err);
        }, () => {
        });
    }
    backToLogin() {
        history.back();
    }
    getEmail() { return this.forgotPwdForm.get('email').value; }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"] },
    { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotPasswordPage);



/***/ }),

/***/ "EmCn":
/*!******************************************!*\
  !*** ./src/services/register.service.ts ***!
  \******************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "NtM8");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "LLt/");









let RegisterService = class RegisterService extends _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] {
    constructor(baseUrl, platformId, http, route, router, logger, authSvc) {
        super(http, baseUrl + 'api/Register', route, router, logger, authSvc);
        this.platformId = platformId;
    }
    forgotPassword(email) {
        return this.http.put(`${this.baseUrl}/ForgotPassword?userEmail=${encodeURIComponent(email)}`, null, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => { this.logger.log('data', data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            this.logger.log('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }));
    }
};
RegisterService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
RegisterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegisterService);



/***/ }),

/***/ "JgOp":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "RtEn");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "2bN1");
/* harmony import */ var src_modules_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/modules/form.module */ "seLR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");













const createTranslateLoader = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/forgot-password/', '.json');
let ForgotPasswordPageModule = class ForgotPasswordPageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
ForgotPasswordPageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"] }
];
ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"],
            src_modules_form_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                },
                isolate: true
            })
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



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

/***/ "RtEn":
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "2bN1");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "hxgU":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --highlight-height: 0;\n}\n\nion-input, ion-button {\n  height: 60px;\n}\n\n.title-default {\n  text-align: center;\n  margin: 8px 0;\n  font-weight: bold;\n}\n\n.wrap {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrap .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card {\n  padding: 5px;\n}\n\n.card .button {\n  font-size: 16px;\n}\n\n.find-pwd-btn {\n  margin-top: 20px;\n}\n\n.back-to-login {\n  margin: 20px;\n  text-align: center;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFBRTtFQUNFLGVBQUE7QUFFSjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxufVxyXG5cclxuaW9uLWlucHV0LCBpb24tYnV0dG9uIHtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLnRpdGxlLWRlZmF1bHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIC5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZpbmQtcHdkLWJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJhY2stdG8tbG9naW4ge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "l7ks":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap\">\n  <div class=\"content\">\n    <ion-card class=\"card\">\n      <ion-title>{{'forgot_password' | translate}}</ion-title>\n      <form [formGroup]=\"forgotPwdForm\" novalidate *ngIf=\"forgotPwdForm\">\n        <ion-item class=\"form-group\">\n          <ion-label for=\"email\" position=\"fixed\">{{'email' | translate}}</ion-label>\n          <ion-input type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"email\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"email.invalid && email.touched\">\n          <small style=\"color: red;\" *ngIf=\"email.errors.required\">이메일을 입력해주세요</small>\n          <small style=\"color: red;\" *ngIf=\"email.errors.email\">올바른 이메일 형식이 아닙니다</small>\n        </div>\n      </form>\n\n      <ion-button class=\"find-pwd-btn\" expand=\"block\" [disabled]=\"!forgotPwdForm.valid\" (click)=\"resetPassword()\">{{'reset_password' | translate}}</ion-button>\n      <div class=\"back-to-login\" (click)=\"backToLogin()\">\n        <a >{{'backToLogin' | translate}}</a>\n      </div>\n    </ion-card>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map