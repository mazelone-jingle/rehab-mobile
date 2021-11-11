(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



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

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap\">\n  <div class=\"content\">\n    <ion-card class=\"card\">\n      <ion-title>{{'register' | translate}}</ion-title>\n      <form [formGroup]=\"registerForm\" novalidate *ngIf=\"registerForm\">\n        <ion-item class=\"form-group\">\n          <ion-label for=\"name\" position=\"fixed\">{{'name' | translate}}</ion-label>\n          <ion-input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"name.invalid && name.touched\">\n          <small style=\"color: red;\" *ngIf=\"name.errors.required\">이름을 입력해주세요</small>\n        </div>\n        <ion-item class=\"form-group\">\n          <ion-label for=\"id\" position=\"fixed\">{{'email' | translate}}</ion-label>\n          <ion-input type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"id\"></ion-input>\n          <ion-button\n          [disabled]=\"!getEmail()\"\n          (click)=\"checkIdDuplicate()\"\n          [color]=\"getCheckId()? 'success': 'primary'\"\n          >V</ion-button>\n        </ion-item>\n        <div *ngIf=\"email.invalid && email.touched\">\n          <small style=\"color: red;\" *ngIf=\"email.errors.required\">이메일을 입력해주세요</small>\n          <small style=\"color: red;\" *ngIf=\"email.errors.email\">올바른 이메일 형식이 아닙니다</small>\n        </div>\n        <ion-item class=\"form-group\">\n          <ion-label for=\"pwd\" position=\"fixed\">{{'password' | translate}}</ion-label>\n          <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"pwd\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"password.invalid && password.touched\">\n          <small style=\"color: red;\" *ngIf=\"password.errors.required\">비밀번호를 입력해주세요</small>\n          <small style=\"color: red;\" *ngIf=\"password.errors.minlength\">비밀번호는 4자리 이상입니다</small>\n        </div>\n        <ion-item class=\"form-group\">\n          <ion-label for=\"confirmPwd\" position=\"fixed\">{{'confirmPassword' | translate}}</ion-label>\n          <ion-input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" id=\"confirmPwd\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"confirmPassword.invalid && confirmPassword.touched\">\n          <small style=\"color: red;\" *ngIf=\"confirmPassword.errors.required\">비밀번호를 입력해주세요</small>\n          <small style=\"color: red;\" *ngIf=\"registerForm.errors?.misMatch\">비밀번호가 일치하지 않습니다</small>\n        </div>\n      </form>\n\n      <ion-button class=\"sign-up\" expand=\"block\" [disabled]=\"!this.registerForm.valid\" (click)=\"signUp()\">{{'register' | translate}}</ion-button>\n      <div class=\"back-to-login\" (click)=\"backToLogin()\">\n        <a >{{'backToLogin' | translate}}</a>\n      </div>\n    </ion-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/patient.service */ "hBqz");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/alert.service */ "NqkH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let RegisterPage = class RegisterPage {
    constructor(fb, router, alertSvc, patientSvc) {
        this.fb = fb;
        this.router = router;
        this.alertSvc = alertSvc;
        this.patientSvc = patientSvc;
        this.domainName = 'RehabDev';
        this.buildForm();
    }
    get name() { return this.registerForm.get('name'); }
    get email() { return this.registerForm.get('email'); }
    get password() { return this.registerForm.get('password'); }
    get confirmPassword() { return this.registerForm.get('confirmPassword'); }
    ngOnInit() {
    }
    buildForm() {
        this.registerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            checkId: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].requiredTrue],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    checkIdDuplicate() {
        const email = this.getEmail();
        if (email) {
            this.patientSvc.checkIdDuplicate(email).subscribe(res => {
                const response = res;
                if (response.isDuplicate) {
                    this.alertSvc.presentAlert('아이디가 이미 존재합니다. 다른 아이디를 입력해주세요.', false);
                }
                else {
                    this.registerForm.patchValue({ checkId: true });
                }
            });
        }
    }
    signUp() {
        const data = {
            email: this.getEmail(),
            name: this.getName(),
            password: this.getPassword(),
        };
        this.patientSvc.signUp(this.domainName, data).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res) {
                yield this.alertSvc.presentAlert('가입신청 완료되었습니다. 의사의 승인을 기다려 주세요.', false, () => this.router.navigate(['/login']));
            }
            else {
                this.alertSvc.presentAlert('의사가 승인을 해야 가입이 완료됩니다.', false, () => this.router.navigate(['/login']));
            }
        }));
    }
    backToLogin() {
        history.back();
    }
    getName() { return this.registerForm.get('name').value; }
    getEmail() { return this.registerForm.get('email').value; }
    getPassword() { return this.registerForm.get('password').value; }
    getCheckId() { return this.registerForm.get('checkId').value; }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkId-success {\n  background-color: green;\n}\n\nion-item {\n  --highlight-height: 0;\n}\n\nion-input, ion-button {\n  height: 60px;\n}\n\n.title-default {\n  text-align: center;\n  margin: 8px 0;\n  font-weight: bold;\n}\n\n.wrap {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrap .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card {\n  padding: 5px;\n}\n\n.card .button {\n  font-size: 16px;\n}\n\n.sign-up {\n  margin-top: 20px;\n}\n\n.back-to-login {\n  margin: 20px;\n  text-align: center;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFBRTtFQUNFLGVBQUE7QUFFSjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrSWQtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCwgaW9uLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4udGl0bGUtZGVmYXVsdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lnbi11cCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJhY2stdG8tbG9naW4ge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "b0Bx");
/* harmony import */ var src_modules_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/form.module */ "seLR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












const createTranslateLoader = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/i18n/register/', '.json');
let RegisterPageModule = class RegisterPageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
RegisterPageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"] }
];
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            src_modules_form_module__WEBPACK_IMPORTED_MODULE_6__["FormModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                },
                isolate: true
            })
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map