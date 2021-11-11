(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manual-manual-module"],{

/***/ "+NTI":
/*!*************************************************!*\
  !*** ./src/services/document-viewer.service.ts ***!
  \*************************************************/
/*! exports provided: DocumentViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentViewerService", function() { return DocumentViewerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/File/ngx */ "B7Vy");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");





let DocumentViewerService = class DocumentViewerService {
    constructor(file, fileOpener, loggerSvc) {
        this.file = file;
        this.fileOpener = fileOpener;
        this.loggerSvc = loggerSvc;
    }
    getFilePath() {
        const localDirectory = 'assets/pdf';
        return `${this.file.applicationDirectory}www/${localDirectory}`;
    }
    viewLocalPdf(file) {
        this.file.checkFile(this.file.dataDirectory, file)
            .then(isHaveFile => {
            // 두 번 후에 파일을 여는 경우 (directory에서 file 있기 때문임)
            if (isHaveFile) {
                this.fileOpener.open(`${this.file.dataDirectory}/${file}`, 'application/pdf');
            }
            else {
                // 여기로 안 올 것 같음 (버그 나올까 봐 일단 써 넣음)
                this.file.copyFile(this.getFilePath(), file, this.file.dataDirectory, file).then(res => {
                    this.fileOpener.open(res.nativeURL, 'application/pdf');
                }).catch(e => this.loggerSvc.error('file opener error:', e));
            }
        }).catch(_ => {
            // 첫 번에 파일을 여는 경우 (directory에서 file 없기 때문임)
            this.file.copyFile(this.getFilePath(), file, this.file.dataDirectory, file).then(res => {
                this.fileOpener.open(res.nativeURL, 'application/pdf');
            }).catch(e => this.loggerSvc.error('file opener error:', e));
        });
    }
};
DocumentViewerService.ctorParameters = () => [
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }
];
DocumentViewerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DocumentViewerService);



/***/ }),

/***/ "3YyW":
/*!*************************************************!*\
  !*** ./src/app/manual/manual-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ManualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPageRoutingModule", function() { return ManualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _manual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manual.page */ "f0LX");




const routes = [
    {
        path: '',
        component: _manual_page__WEBPACK_IMPORTED_MODULE_3__["ManualPage"]
    }
];
let ManualPageRoutingModule = class ManualPageRoutingModule {
};
ManualPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManualPageRoutingModule);



/***/ }),

/***/ "J/YO":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manual/manual.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'manual' |  translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item (click)=\"openPdfFile('heart recovering')\">{{'heart_rehabilitation_guide' |  translate}}</ion-item>\n    <ion-item (click)=\"openPdfFile('app manual')\">{{'app_manual' |  translate}}</ion-item>\n    <ion-item (click)=\"openPdfFile('q&a')\">{{'q_and_a' |  translate}}</ion-item>\n    <ion-item (click)=\"openPdfFile('lifurance')\">{{'lifurance' |  translate}}</ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "borl":
/*!*****************************************!*\
  !*** ./src/app/manual/manual.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51YWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "f0LX":
/*!***************************************!*\
  !*** ./src/app/manual/manual.page.ts ***!
  \***************************************/
/*! exports provided: ManualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPage", function() { return ManualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manual_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manual.page.html */ "J/YO");
/* harmony import */ var _manual_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manual.page.scss */ "borl");
/* harmony import */ var _services_document_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/document-viewer.service */ "+NTI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let ManualPage = class ManualPage {
    constructor(documentViewerService) {
        this.documentViewerService = documentViewerService;
    }
    ngOnInit() {
    }
    openPdfFile(type) {
        let file = '';
        switch (type) {
            case 'heart recovering': {
                file = 'heartRecovering.pdf';
                break;
            }
            case 'app manual': {
                break;
            }
            case 'q&a': {
                break;
            }
            case 'lifurance': {
                break;
            }
            default:
                break;
        }
        this.documentViewerService.viewLocalPdf(file);
    }
};
ManualPage.ctorParameters = () => [
    { type: _services_document_viewer_service__WEBPACK_IMPORTED_MODULE_3__["DocumentViewerService"] }
];
ManualPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-manual',
        template: _raw_loader_manual_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manual_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManualPage);



/***/ }),

/***/ "pSiy":
/*!*****************************************!*\
  !*** ./src/app/manual/manual.module.ts ***!
  \*****************************************/
/*! exports provided: ManualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPageModule", function() { return ManualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _manual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manual-routing.module */ "3YyW");
/* harmony import */ var _manual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manual.page */ "f0LX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












const createTranslateLoader = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/i18n/manual/', '.json');
let ManualPageModule = class ManualPageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
ManualPageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"] }
];
ManualPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manual_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManualPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                },
                isolate: true
            })
        ],
        declarations: [_manual_page__WEBPACK_IMPORTED_MODULE_6__["ManualPage"]]
    })
], ManualPageModule);



/***/ })

}]);
//# sourceMappingURL=manual-manual-module.js.map