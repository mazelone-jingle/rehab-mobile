(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/storage.service */ "61FP");
/* harmony import */ var _services_prescription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/prescription.service */ "2VRz");
/* harmony import */ var src_constants_storage_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/storage-key */ "/z6A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/alert.service */ "NqkH");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ "LLt/");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/permission.service */ "i/Hf");
/* harmony import */ var src_constants_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/constants/common */ "hugj");













let LoginPage = class LoginPage {
    constructor(fb, router, alertSvc, permissionSvc, authSvc, prescriptionSvc, storageSvc) {
        this.fb = fb;
        this.router = router;
        this.alertSvc = alertSvc;
        this.permissionSvc = permissionSvc;
        this.authSvc = authSvc;
        this.prescriptionSvc = prescriptionSvc;
        this.storageSvc = storageSvc;
        this.buildForm();
    }
    get email() { return this.loginForm.get('email'); }
    get password() { return this.loginForm.get('password'); }
    get isRememberEmail() { return this.loginForm.get('isRememberEmail'); }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isRememberEmail = localStorage.getItem(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_5__["IS_REMEMBER_EMAIL"]);
            this.isRememberEmail.patchValue(isRememberEmail);
            if (isRememberEmail) {
                const lastEmail = localStorage.getItem(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_5__["LAST_EMAIL"]);
                this.email.patchValue(lastEmail);
            }
            yield this.permissionSvc.checkNotification();
        });
    }
    buildForm() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(4)]],
            isRememberEmail: [false]
        });
    }
    login() {
        if (this.loginForm.valid) {
            const isRememberEmail = this.isRememberEmail.value;
            localStorage.setItem(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_5__["IS_REMEMBER_EMAIL"], isRememberEmail);
            if (isRememberEmail) {
                localStorage.setItem(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_5__["LAST_EMAIL"], this.email.value);
            }
            else {
                localStorage.removeItem(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_5__["LAST_EMAIL"]);
            }
            this.authSvc.login(this.loginForm.value).subscribe({
                next: () => {
                    this.prescriptionSvc.getLastPrescription(this.authSvc.username)
                        .subscribe((newPrescription) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const msg = '새로운 처방전을 받았습니다.';
                        yield this.storageSvc.set(src_constants_common__WEBPACK_IMPORTED_MODULE_12__["PRESCRIPTION"], newPrescription);
                        yield this.alertSvc.presentAlert(msg, false, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.router.navigate(['./home']); }));
                    }));
                },
                error: () => {
                    this.alertSvc.presentAlert('의사가 승인을 해야 가입이 완료됩니다.', false);
                }
            });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: _services_permission_service__WEBPACK_IMPORTED_MODULE_11__["PermissionService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _services_prescription_service__WEBPACK_IMPORTED_MODULE_4__["PrescriptionService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



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

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap\">\n  <div class=\"content\">\n    <img src=\"assets/icon/rehab_icon.png\" alt=\"\">\n    <ion-card class=\"card\">\n      <ion-title>{{'login' | translate}}</ion-title>\n      <form [formGroup]=\"loginForm\" novalidate *ngIf=\"loginForm\">\n        <ion-item class=\"form-group\">\n          <ion-label for=\"id\" position=\"fixed\">{{'email' | translate}}</ion-label>\n          <ion-input type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"id\"></ion-input>\n          <!--[class.item-inner-highlight]=\"email.valid && email.touched\"-->\n        </ion-item>\n        <div *ngIf=\"email.invalid && email.touched\">\n          <small style=\"color: red;\" *ngIf=\"email.errors.required\">이메일을 입력해주세요</small>\n          <small style=\"color: red;\" *ngIf=\"email.errors.email\">올바른 이메일 형식이 아닙니다</small>\n        </div>\n        <ion-item class=\"form-group\">\n          <ion-label for=\"pwd\" position=\"fixed\">{{'password' | translate}}</ion-label>\n          <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"pwd\"></ion-input>\n        </ion-item>\n        <ion-item class=\"form-group\">\n          <ion-label>{{'is_remember_email' | translate}}</ion-label>\n          <ion-checkbox slot=\"start\" formControlName=\"isRememberEmail\" class=\"form-control\"></ion-checkbox>\n        </ion-item>\n        <div *ngIf=\"password.invalid && password.touched\">\n          <small style=\"color: red;\" *ngIf=\"password.errors.required\">비밀번호를 입력해주세요</small>\n          <small style=\"color: red;\" *ngIf=\"password.errors.minlength\">비밀번호는 4자리 이상입니다</small>\n        </div>\n      </form>\n\n      <div class=\"register\">\n        <ion-button expand=\"block\" color=\"danger\" [routerLink]=\"['/register']\">{{'register' | translate}}</ion-button>\n        <ion-button expand=\"block\" color=\"danger\" [routerLink]=\"['/forgot-password']\">{{'forgot_password' | translate}}\n        </ion-button>\n      </div>\n      <ion-button expand=\"block\" (click)=\"login()\" [disabled]=\"!this.loginForm.valid\">{{'login' | translate}}</ion-button>\n    </ion-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: createTranslateLoader, LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "34Y5");
/* harmony import */ var src_modules_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/form.module */ "seLR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/i18n/login/', '.json');
}
let LoginPageModule = class LoginPageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
LoginPageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"] }
];
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            src_modules_form_module__WEBPACK_IMPORTED_MODULE_6__["FormModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                },
                isolate: true
            })
        ],
        declarations: [
            _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
        ]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --highlight-height: 0;\n}\n\nion-input, ion-button {\n  height: 60px;\n}\n\n.title-default {\n  text-align: center;\n  margin: 8px 0;\n  font-weight: bold;\n}\n\n.wrap {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrap .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n}\n\n.wrap img {\n  width: 150px;\n}\n\n.card {\n  width: 100%;\n  padding: 5px;\n}\n\n.card .button {\n  font-size: 16px;\n}\n\n.register {\n  display: flex;\n}\n\n.register .button {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7QUFFSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQUU7RUFDRSxlQUFBO0FBRUo7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQUU7RUFDRSxVQUFBO0FBRUoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5pb24taW5wdXQsIGlvbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4udGl0bGUtZGVmYXVsdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIC5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlZ2lzdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map