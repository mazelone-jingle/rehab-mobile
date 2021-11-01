(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ble-test-ble-test-module"],{

/***/ "+DGt":
/*!*********************************************!*\
  !*** ./src/app/ble-test/ble-test.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGUtdGVzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "2fhr":
/*!*****************************************************!*\
  !*** ./src/app/ble-test/ble-test-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BleTestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BleTestPageRoutingModule", function() { return BleTestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ble_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ble-test.page */ "TksH");




const routes = [
    {
        path: '',
        component: _ble_test_page__WEBPACK_IMPORTED_MODULE_3__["BleTestPage"]
    }
];
let BleTestPageRoutingModule = class BleTestPageRoutingModule {
};
BleTestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BleTestPageRoutingModule);



/***/ }),

/***/ "3fn3":
/*!*********************************************!*\
  !*** ./src/app/ble-test/ble-test.module.ts ***!
  \*********************************************/
/*! exports provided: BleTestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BleTestPageModule", function() { return BleTestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ble_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ble-test-routing.module */ "2fhr");
/* harmony import */ var _ble_test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ble-test.page */ "TksH");







let BleTestPageModule = class BleTestPageModule {
};
BleTestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ble_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["BleTestPageRoutingModule"]
        ],
        declarations: [_ble_test_page__WEBPACK_IMPORTED_MODULE_6__["BleTestPage"]],
    })
], BleTestPageModule);



/***/ }),

/***/ "TksH":
/*!*******************************************!*\
  !*** ./src/app/ble-test/ble-test.page.ts ***!
  \*******************************************/
/*! exports provided: BleTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BleTestPage", function() { return BleTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ble_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ble-test.page.html */ "hEwE");
/* harmony import */ var _ble_test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ble-test.page.scss */ "+DGt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_ble_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/ble.service */ "/zZW");







let BleTestPage = class BleTestPage {
    constructor(zone, loadingController, ble) {
        this.zone = zone;
        this.loadingController = loadingController;
        this.ble = ble;
        this.scanning = null;
        this.commands = ['RND#@', 'BAT#@', 'RTS#@', 'DEL#@', 'RTH#@', 'RTE#@', 'RHD#@', 'ROK#@', 'REQ#@'];
        this.selectedCommand = 'BAT#@';
        // devices: Array<any> = [{ name: 'Rehab01', id: 'F2:A2:41:F5:C3:12', advertising: [], rssi: -70 }];
        this.devices = [];
        this.connectedDeviceId = null;
    }
    scan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.presentScanning();
            this.ble.scan()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.dismissScanning()))
                .subscribe(device => {
                this.devices.length = 0;
                this.zone.run(() => {
                    if (this.devices.indexOf(d => d.id == device.id) < 0) {
                        this.devices.push(device);
                    }
                    console.log('devices', device);
                });
            });
        });
    }
    connect(deviceId) {
        if (confirm('연결하시겠습니까?')) {
            this.connectedDeviceId = deviceId;
            this.ble.connect(deviceId)
                .subscribe((peripheral) => {
                this.connectedDeviceId = deviceId;
                this.peripheral = peripheral;
                console.log('peripheral', peripheral);
            });
        }
    }
    disconnect() {
        if (!!this.connectedDeviceId) {
            this.ble.disconnect()
                .then(res => {
                alert('disconnected');
                console.log('disconnected', res);
                this.connectedDeviceId = null;
            }).catch(err => {
                alert(`disconnect fail, ${err}`);
            });
        }
    }
    writeCommand() {
        this.ble.writeCommand(this.selectedCommand)
            .then(res => console.log(`write ${this.selectedCommand} ok`, res))
            .catch(err => console.log(`write ${this.selectedCommand} err`, err));
    }
    test() {
        console.log(this);
    }
    presentScanning() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.scanning = yield this.loadingController.create({
                message: 'Scan...',
                duration: 5 * 1000
            });
            yield this.scanning.present();
        });
    }
    dismissScanning() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.scanning.dismiss();
        });
    }
};
BleTestPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_services_ble_service__WEBPACK_IMPORTED_MODULE_6__["BleService"] }
];
BleTestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ble-test',
        template: _raw_loader_ble_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ble_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BleTestPage);



/***/ }),

/***/ "hEwE":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ble-test/ble-test.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>ble-test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-button expand=\"full\" (click)=\"scan()\">SCAN</ion-button><br />\n    </ion-item>\n\n    <ion-item *ngFor=\"let device of devices\" (click)=\"connect(device.id)\">\n      {{device | json}}\n    </ion-item>\n\n    <ion-item>\n      <ion-button [disabled]=\"!connectedDeviceId\" expand=\"full\" (click)=\"disconnect()\">DISCONNECT</ion-button><br />\n    </ion-item>\n\n    <ion-radio-group [(ngModel)]=\"selectedCommand\">\n      <ion-list-header>\n        <ion-label>Commands</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let command of commands\">\n        <ion-label>{{command | uppercase}}</ion-label>\n        <ion-radio slot=\"start\" color=\"success\" [value]=\"command\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n    <ion-item>\n      <ion-button expand=\"full\" color=\"danger\" [disabled]=\"!connectedDeviceId\" (click)=\"writeCommand()\">WRITE\n      </ion-button><br />\n    </ion-item>\n\n    <ion-item>\n      <ion-button (click)=\"test()\">TEST</ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=ble-test-ble-test-module.js.map