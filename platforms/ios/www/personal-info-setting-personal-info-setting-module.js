(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-info-setting-personal-info-setting-module"],{

/***/ "HHbQ":
/*!***********************************************************************!*\
  !*** ./src/app/personal-info-setting/personal-info-setting.module.ts ***!
  \***********************************************************************/
/*! exports provided: createTranslateLoader, PersonalInfoSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoSettingPageModule", function() { return PersonalInfoSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_modules_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/modules/form.module */ "seLR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _personal_info_setting_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-info-setting-routing.module */ "P/Gf");
/* harmony import */ var _personal_info_setting_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal-info-setting.page */ "dwIo");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");













function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/personal-info-setting/', '.json');
}
let PersonalInfoSettingPageModule = class PersonalInfoSettingPageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
PersonalInfoSettingPageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"] }
];
PersonalInfoSettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _personal_info_setting_routing_module__WEBPACK_IMPORTED_MODULE_6__["PersonalInfoSettingPageRoutingModule"],
            src_modules_form_module__WEBPACK_IMPORTED_MODULE_1__["FormModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                },
                isolate: true
            })
        ],
        declarations: [_personal_info_setting_page__WEBPACK_IMPORTED_MODULE_7__["PersonalInfoSettingPage"]]
    })
], PersonalInfoSettingPageModule);



/***/ }),

/***/ "P/Gf":
/*!*******************************************************************************!*\
  !*** ./src/app/personal-info-setting/personal-info-setting-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PersonalInfoSettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoSettingPageRoutingModule", function() { return PersonalInfoSettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _personal_info_setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-info-setting.page */ "dwIo");




const routes = [
    {
        path: '',
        component: _personal_info_setting_page__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoSettingPage"]
    }
];
let PersonalInfoSettingPageRoutingModule = class PersonalInfoSettingPageRoutingModule {
};
PersonalInfoSettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalInfoSettingPageRoutingModule);



/***/ }),

/***/ "dwIo":
/*!*********************************************************************!*\
  !*** ./src/app/personal-info-setting/personal-info-setting.page.ts ***!
  \*********************************************************************/
/*! exports provided: PersonalInfoSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoSettingPage", function() { return PersonalInfoSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_personal_info_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-info-setting.page.html */ "rO4v");
/* harmony import */ var _personal_info_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-info-setting.page.scss */ "sXRs");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/logger.service */ "O0ov");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/auth.service */ "LLt/");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/patient.service */ "hBqz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










let PersonalInfoSettingPage = class PersonalInfoSettingPage {
    constructor(patientSvc, fb, alertController, authSvc, router, loggerSvc) {
        this.patientSvc = patientSvc;
        this.fb = fb;
        this.alertController = alertController;
        this.authSvc = authSvc;
        this.router = router;
        this.loggerSvc = loggerSvc;
        this.retryTimes = 0;
    }
    get name() { return this.infoForm.get('name'); }
    get gender() { return this.infoForm.get('gender'); }
    get birthday() { return this.infoForm.get('birthday'); }
    get email() { return this.infoForm.get('email'); }
    get contact() { return this.infoForm.get('contact'); }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.buildForm();
            yield this.presentInputPasswordAlert();
        });
    }
    presentInputPasswordAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: '비밀번호를 입력하세요.',
                inputs: [{
                        name: 'password',
                        type: 'password',
                    }],
                buttons: [{
                        text: '확인',
                        role: 'confirm',
                        cssClass: 'primary',
                        handler: (params) => {
                            this.checkPassword(params.password).subscribe(() => {
                                this.getPatientInfo();
                            }, (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                this.retryTimes++;
                                if (this.retryTimes >= 3) {
                                    // TODO: 다시 시도 재한 필요함?
                                }
                                yield this.presentHandleErrorAlert();
                            }));
                        }
                    }, {
                        text: '취소',
                        role: 'cancel',
                        cssClass: 'medium',
                        handler: () => {
                            history.back();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    presentHandleErrorAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const handleErrorAlert = yield this.alertController.create({
                message: '비밀번호가 틀렸습니다. 디시 시도하시겠습니까?',
                buttons: [{
                        text: '확인',
                        role: 'confirm',
                        cssClass: 'primary',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.presentInputPasswordAlert();
                        })
                    }, {
                        text: '취소',
                        role: 'cancel',
                        cssClass: 'medium',
                        handler: () => {
                            history.back();
                        }
                    }]
            });
            yield handleErrorAlert.present();
        });
    }
    checkPassword(pwd) {
        const userInfo = {
            email: this.authSvc.username,
            password: pwd,
            grantType: 'password',
            refreshToken: ''
        };
        return this.authSvc.login(userInfo);
    }
    getPatientInfo() {
        this.patientSvc.getPatientPersonalInfo(this.authSvc.username).subscribe(obs => {
            this.userInfo = obs;
            this.name.patchValue(this.userInfo.name);
            this.gender.patchValue(this.userInfo.gender);
            this.birthday.patchValue(this.userInfo.birthDate);
            this.email.patchValue(this.userInfo.email);
            this.contact.patchValue(this.userInfo.phone);
        });
    }
    buildForm() {
        this.infoForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            gender: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            birthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    saveData() {
        const reqBody = Object.assign(this.userInfo, this.infoForm.value);
        this.patientSvc.updatePatientPersonalInfo(this.authSvc.username, reqBody).subscribe(() => {
            history.back();
        });
    }
};
PersonalInfoSettingPage.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_8__["PatientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] }
];
PersonalInfoSettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-personal-info-setting',
        template: _raw_loader_personal_info_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_info_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PersonalInfoSettingPage);



/***/ }),

/***/ "rO4v":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info-setting/personal-info-setting.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'personal_info_setting' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"infoForm\" novalidate *ngIf=\"infoForm\">\n    <ion-item class=\"form-group\">\n      <ion-label for=\"name\" position=\"fixed\">{{'name' | translate}}</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\"></ion-input>\n    </ion-item>\n    <div *ngIf=\"name.invalid && name.touched\">\n      <small style=\"color: red;\" *ngIf=\"name.errors.required\">이름을 입력해주세요</small>\n    </div>\n    <ion-item class=\"form-group\">\n      <ion-label for=\"gender\" position=\"fixed\">{{'gendar' | translate}}</ion-label>\n      <ion-radio-group formControlName=\"gender\">\n        <ion-item>\n          <ion-label>{{'male' | translate}}</ion-label>\n          <ion-radio slot=\"start\" [value]=\"true\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{'female' | translate}}</ion-label>\n          <ion-radio slot=\"start\" [value]=\"false\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-input type=\"text\"  class=\"form-control\" id=\"gender\"></ion-input>\n    </ion-item>\n    <ion-item class=\"form-group\">\n      <ion-label for=\"birthday\" position=\"fixed\">{{'birthday' | translate}}</ion-label>\n      <ion-datetime formControlName=\"birthday\"></ion-datetime>\n    </ion-item>\n    <div *ngIf=\"birthday.invalid && birthday.touched\">\n      <small style=\"color: red;\" *ngIf=\"birthday.errors.required\">생년월일을 입력해주세요</small>\n    </div>\n    <ion-item class=\"form-group\">\n      <ion-label for=\"email\" position=\"fixed\">{{'email' | translate}}</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\"></ion-input>\n    </ion-item>\n    <div *ngIf=\"email.invalid && email.touched\">\n      <small style=\"color: red;\" *ngIf=\"email.errors.required\">이메일을 입력해주세요</small>\n      <small style=\"color: red;\" *ngIf=\"email.errors.email\">올바른 이메일 형식이 아닙니다</small>\n    </div>\n    <ion-item class=\"form-group\">\n      <ion-label for=\"contact\" position=\"fixed\">{{'contact' | translate}}</ion-label>\n      <ion-input type=\"text\" formControlName=\"contact\" class=\"form-control\" id=\"contact\"></ion-input>\n    </ion-item>\n    <div *ngIf=\"contact.invalid && contact.touched\">\n      <small style=\"color: red;\" *ngIf=\"contact.errors.required\">연락처를 입력해주세요</small>\n    </div>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"saveData()\" [disabled]=\"infoForm.invalid\">{{'save' | translate}}</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "sXRs":
/*!***********************************************************************!*\
  !*** ./src/app/personal-info-setting/personal-info-setting.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --highlight-height: 0;\n}\n\nion-input, ion-button {\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BlcnNvbmFsLWluZm8tc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InBlcnNvbmFsLWluZm8tc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCwgaW9uLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=personal-info-setting-personal-info-setting-module.js.map