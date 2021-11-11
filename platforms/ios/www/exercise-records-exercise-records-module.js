(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exercise-records-exercise-records-module"],{

/***/ "+nom":
/*!***********************************************************!*\
  !*** ./src/app/exercise-records/exercise-records.page.ts ***!
  \***********************************************************/
/*! exports provided: ExerciseRecordsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseRecordsPage", function() { return ExerciseRecordsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_exercise_records_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./exercise-records.page.html */ "scWo");
/* harmony import */ var _exercise_records_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-records.page.scss */ "miUi");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_components_modals_detail_list_modal_detail_list_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/modals/detail-list-modal/detail-list-modal.component */ "mVdm");
/* harmony import */ var src_services_exercise_records_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/exercise-records.service */ "dvCk");
/* harmony import */ var src_services_exercise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/exercise.service */ "yHJi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");











const EXERCISE_DATA_LIST = [{
        text: '1주일',
        id: 'oneWeek',
    }, {
        text: '1달',
        id: 'oneMonth'
    }, {
        text: '3달',
        id: 'threeMonths'
    }, {
        text: '6달',
        id: 'sixMonths'
    }, {
        text: '1년',
        id: 'oneYear'
    }];
let ExerciseRecordsPage = class ExerciseRecordsPage {
    constructor(modalController, exerciseRecordsSvc, router, exerciseSvc) {
        this.modalController = modalController;
        this.exerciseRecordsSvc = exerciseRecordsSvc;
        this.router = router;
        this.exerciseSvc = exerciseSvc;
        this.segmentStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('summary');
        this.segmentStatus$ = this.segmentStatusSubject.asObservable();
        this.segmentStatus = 'summary';
        this.period = '1주일';
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
                formatWeekViewDayHeader: () => 'MonWH',
                formatWeekViewTitle: () => 'testWT',
                formatWeekViewHourColumn: () => 'testWH',
                formatDayViewHourColumn: () => 'testDH',
                formatDayViewTitle: () => 'testDT',
            }
        };
        this.chart = [];
        this.segmentStatus$.subscribe(segment => {
            if (segment === 'summary') {
                this.segmentStatus = segment;
                if (document.getElementById('pieChart')) {
                    document.getElementById('pieChart').removeChild(this.canvas);
                }
                this.exerciseRecordsSvc.getExercisePeriodRecords(this.exerciseRecords, this.period).then(res => {
                    this.pieChartData = res;
                    this.createPieChart();
                });
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.today = new Date().getTime();
            this.getExerciseRecords();
        });
    }
    getExerciseRecords() {
        this.exerciseSvc.getExerciseRecords(1, 1000).subscribe((exerciseRecords) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.eventSource = this.exerciseRecordsSvc.handleExerciseAllRecords(exerciseRecords);
            this.exerciseRecords = exerciseRecords;
            if (exerciseRecords) {
                yield this.exerciseRecordsSvc.getExercisePeriodRecords(exerciseRecords, this.period).then(res => {
                    this.pieChartData = res;
                    this.createPieChart();
                });
            }
        }));
    }
    segmentChanged(e) {
        this.segmentStatusSubject.next(e.detail.value);
    }
    showPeriodDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_components_modals_detail_list_modal_detail_list_modal_component__WEBPACK_IMPORTED_MODULE_5__["DetailListModalComponent"],
                componentProps: {
                    title: '운동 기간',
                    dataList: EXERCISE_DATA_LIST,
                    currValue: this.period
                },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data.chosenData) {
                this.period = data.chosenData.text;
                document.getElementById('pieChart').removeChild(this.canvas);
                this.exerciseRecordsSvc.getExercisePeriodRecords(this.exerciseRecords, this.period).then(res => {
                    this.pieChartData = res;
                    this.createPieChart();
                });
            }
        });
    }
    createPieChart() {
        this.canvas = document.createElement('canvas');
        const ctx = this.canvas.getContext('2d');
        setTimeout(() => {
            this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](ctx, {
                type: 'doughnut',
                data: {
                    labels: [''],
                    datasets: [
                        {
                            label: '3123',
                            data: [this.pieChartData.thrRetention, 100 - this.pieChartData.thrRetention],
                            backgroundColor: ['#df7127', '#aaaaaa'],
                        }
                    ]
                },
                options: {
                    cutoutPercentage: 70,
                    legend: {
                        display: false
                    },
                    events: []
                },
            });
        }, 100);
        const location = document.getElementById('pieChart');
        location.appendChild(this.canvas);
    }
    // #region calendar settings
    onCurrentDateChanged(event) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }
    onEventSelected() {
        // this.logger.log('Event selected:' + $event.startTime + '-' + $event.endTime + ',' + $event.title);
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onTimeSelected($event) {
        this.selectedTime = $event.selectedTime;
        this.eventDetail = $event.events;
        if (this.eventDetail.length > 0) {
            this.eventDetail = $event.events.map(e => {
                const { startTime, endTime, totalSeconds, rpeStatus, thrRetention, hrs, prescriptionId } = e;
                const start = `${startTime.getHours()}시 ${startTime.getMinutes()}분`;
                const end = `${endTime.getHours()}시 ${endTime.getMinutes()}분`;
                const time = `${Math.round(totalSeconds / 60)}분${totalSeconds % 60}초`;
                return { start, end, time, rpeStatus, thrRetention, hrs, prescriptionId };
            });
        }
    }
    // #endregion
    navToDetail(dailyData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['/menu/records/detail', dailyData]);
        });
    }
};
ExerciseRecordsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: src_services_exercise_records_service__WEBPACK_IMPORTED_MODULE_6__["ExerciseRecordsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_services_exercise_service__WEBPACK_IMPORTED_MODULE_7__["ExerciseService"] }
];
ExerciseRecordsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-exercise-records',
        template: _raw_loader_exercise_records_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_exercise_records_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExerciseRecordsPage);



/***/ }),

/***/ "1BLb":
/*!*************************************************************!*\
  !*** ./src/app/exercise-records/exercise-records.module.ts ***!
  \*************************************************************/
/*! exports provided: ExerciseRecordsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseRecordsPageModule", function() { return ExerciseRecordsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/shared-pipes.module */ "DwMb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ "xOzl");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic2-calendar */ "oksz");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _exercise_records_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exercise-records-routing.module */ "T27C");
/* harmony import */ var _exercise_records_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exercise-records.page */ "+nom");
/* harmony import */ var _exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exercise-detail/exercise-detail.page */ "3nFk");
















const createTranslateLoader = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/exercise-records/', '.json');
let ExerciseRecordsPageModule = class ExerciseRecordsPageModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
ExerciseRecordsPageModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }
];
ExerciseRecordsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"],
            _exercise_records_routing_module__WEBPACK_IMPORTED_MODULE_13__["ExerciseRecordsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                },
                isolate: true
            }),
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_3__["NgCalendarModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
            src_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"]
        ],
        declarations: [_exercise_records_page__WEBPACK_IMPORTED_MODULE_14__["ExerciseRecordsPage"], _exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_15__["ExerciseDetailPage"]],
    })
], ExerciseRecordsPageModule);



/***/ }),

/***/ "3nFk":
/*!**************************************************************************!*\
  !*** ./src/app/exercise-records/exercise-detail/exercise-detail.page.ts ***!
  \**************************************************************************/
/*! exports provided: ExerciseDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseDetailPage", function() { return ExerciseDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_exercise_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./exercise-detail.page.html */ "8qfo");
/* harmony import */ var _exercise_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-detail.page.scss */ "52Mg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _components_modals_hr_detail_hr_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/modals/hr-detail/hr-detail.component */ "6od+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_exercise_records_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/exercise-records.service */ "dvCk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chartjs-plugin-annotation */ "Ym+k");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var src_services_prescription_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/prescription.service */ "2VRz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");













let ExerciseDetailPage = class ExerciseDetailPage {
    constructor(exerciseRecordsSvc, modalController, screenOrientation, route, prescriptionSvc) {
        this.exerciseRecordsSvc = exerciseRecordsSvc;
        this.modalController = modalController;
        this.screenOrientation = screenOrientation;
        this.route = route;
        this.prescriptionSvc = prescriptionSvc;
        this.dataset = [];
        this.chart = [];
        route.params.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.exerciseRecords = params;
        }));
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.prescriptionSvc.getPrescriptionById(this.exerciseRecords.prescriptionId)
        ]).subscribe(res => {
            this.prescription = res[0];
            this.createCanvas();
        });
    }
    createCanvas() {
        this.canvas = document.createElement('canvas');
        const ctx = this.canvas.getContext('2d');
        chart_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].plugins.register({ chartAnnotation: chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_9__ });
        setTimeout(() => {
            this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_8__["Chart"](ctx, {
                type: 'line',
                data: {
                    labels: ['준비', ...this.prescription.steps.map(step => step.sequence + '단계'), '마무리'],
                    datasets: [{
                            label: '# of Heart beat',
                            data: this.getEveryStepsData(),
                            backgroundColor: 'transparent',
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                        xAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
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
            const location = document.getElementById('record');
            location.appendChild(this.canvas);
        }, 100);
    }
    getEveryStepsData() {
        const [start, ...hrs] = this.exerciseRecords.hrs.split(',');
        const end = hrs.pop();
        const minArray = [];
        const data = this.prescription.steps.map(step => step.minute).map((min, idx) => {
            minArray.push(min);
            const pastMin = minArray.slice(0, idx).length > 0 ? minArray.slice(0, idx).reduce((accr, curr) => accr + curr) : 0;
            const sec = min * 60;
            return (hrs
                .slice(pastMin * 60, pastMin * 60 + min * 60)
                .map(res => Number(res))
                .filter(res => !!res)
                .reduce((accu, curr) => accu + curr) / sec);
        });
        return [start, ...data, end];
    }
    showHrDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_hr_detail_hr_detail_component__WEBPACK_IMPORTED_MODULE_4__["HrDetailComponent"],
                componentProps: {
                    hrData: this.exerciseRecords.hrs,
                    prescription: this.prescription
                },
            });
            yield modal.present();
            yield modal.onWillDismiss().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            }));
        });
    }
};
ExerciseDetailPage.ctorParameters = () => [
    { type: _services_exercise_records_service__WEBPACK_IMPORTED_MODULE_6__["ExerciseRecordsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: src_services_prescription_service__WEBPACK_IMPORTED_MODULE_11__["PrescriptionService"] }
];
ExerciseDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-exercise-detail',
        template: _raw_loader_exercise_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_exercise_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExerciseDetailPage);



/***/ }),

/***/ "52Mg":
/*!****************************************************************************!*\
  !*** ./src/app/exercise-records/exercise-detail/exercise-detail.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border-radius: 5px;\n}\n\nion-progress-bar {\n  height: 30px !important;\n  --buffer-background: #aaa;\n  --progress-background: linear-gradient(to right, red, yellow);\n}\n\n.hr-content {\n  text-align: center;\n}\n\n.hr-content .hr-value {\n  font-size: 50px;\n  color: #df7127;\n  font-weight: bold;\n}\n\n.setting-item {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.setting-item .title {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.setting-item .content li {\n  list-style-type: disc;\n  text-indent: 2rem;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V4ZXJjaXNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNOIiwiZmlsZSI6ImV4ZXJjaXNlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiAjYWFhO1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmVkLCB5ZWxsb3cpO1xufVxuXG4uaHItY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLmhyLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6ICNkZjcxMjc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLnNldHRpbmctaXRlbSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgLmNvbnRlbnQge1xuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgICAgIHRleHQtaW5kZW50OiAycmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "8qfo":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercise-records/exercise-detail/exercise-detail.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'exercise_detail' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color=\"medium\">\n      <ion-card-title>{{'target_hr_remain_ratio' | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"hr-content\">\n      <app-progress-bar [ratio]=\"exerciseRecords.thrRetention\"></app-progress-bar>\n      <ion-label class=\"hr-value\">{{exerciseRecords.thrRetention}}%</ion-label>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color=\"medium\">\n      <ion-card-title>{{'hr_records' | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div *ngIf=\"chart\" id=\"record\" style=\"display: block; height: 200px; \"></div>\n      <ion-buttons>\n        <ion-button color=\"primary\" fill=\"outline\" size=\"small\" shape=\"round\" style=\"margin-left: auto; z-index: 10;\" (click)=\"showHrDetail()\">{{'see_detail' | translate}}</ion-button>\n      </ion-buttons>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"prescription\">\n    <ion-card-header color=\"medium\">\n      <ion-card-title>{{'exercise_summary' | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div class=\"setting-item\">\n        <h3 class=\"title\">{{'exercise_type' | translate}}</h3>\n        <ul class=\"content\">\n          <li>{{prescription.exerciseTypeValue}}</li>\n        </ul>\n      </div>\n      <div class=\"setting-item\" *ngFor=\"let step of prescription.steps; index as i;\">\n        <h3 class=\"title\">{{'step' | translate}} {{i+1}}</h3>\n        <ul class=\"content\">\n          <li>{{step.type}}</li>\n          <li>{{step.minute}} {{'minutes' | translate}}</li>\n        </ul>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "T27C":
/*!*********************************************************************!*\
  !*** ./src/app/exercise-records/exercise-records-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ExerciseRecordsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseRecordsPageRoutingModule", function() { return ExerciseRecordsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercise-detail/exercise-detail.page */ "3nFk");
/* harmony import */ var _exercise_records_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exercise-records.page */ "+nom");





const routes = [
    { path: '', redirectTo: 'records', pathMatch: 'full' },
    {
        path: '',
        component: _exercise_records_page__WEBPACK_IMPORTED_MODULE_4__["ExerciseRecordsPage"]
    },
    {
        path: 'detail',
        component: _exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_3__["ExerciseDetailPage"]
    }
];
let ExerciseRecordsPageRoutingModule = class ExerciseRecordsPageRoutingModule {
};
ExerciseRecordsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExerciseRecordsPageRoutingModule);



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

/***/ "miUi":
/*!*************************************************************!*\
  !*** ./src/app/exercise-records/exercise-records.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\nol, ul {\n  list-style: none;\n}\n.icon {\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n}\n.icon-alarm {\n  background-image: url('alarm.svg');\n}\n.icon-book {\n  background-image: url('book.svg');\n}\n.icon-calendar {\n  background-image: url('calendar.svg');\n}\n.icon-contact_information {\n  background-image: url('identification.svg');\n}\n.icon-content {\n  background-image: url('content.svg');\n}\n.icon-jogging {\n  background-image: url('jogging.svg');\n}\n.icon-search {\n  background-image: url('search.svg');\n}\n.icon-translate {\n  background-image: url('translate.svg');\n}\n.icon-battery-30 {\n  background-image: url('battery-30.svg');\n}\n.icon-battery-50 {\n  background-image: url('battery-50.svg');\n}\n.icon-battery-80 {\n  background-image: url('battery-80.svg');\n}\n.icon-battery-100 {\n  background-image: url('battery-100.svg');\n}\n.icon-heartbeat {\n  background-image: url('heartbeat.svg');\n}\n.icon-schedule {\n  background-image: url('schedule.svg');\n}\n.icon-clock {\n  background-image: url('clock.svg');\n}\n.icon-bluetooth {\n  background-image: url('bluetooth.svg');\n}\n.mt-8 {\n  margin-top: 8px;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.mr-8 {\n  margin-right: 8px;\n}\n.mr-16 {\n  margin-right: 16px;\n}\n.mb-8 {\n  margin-bottom: 8px;\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.ml-8 {\n  margin-left: 8px;\n}\n.ml-16 {\n  margin-left: 16px;\n}\n.record > div {\n  width: 100%;\n  padding: 10px 0;\n}\n.record-title {\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n}\n.record i {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n}\n.record-data {\n  color: #aaa;\n  font-size: 24px;\n  text-align: right;\n}\n.pie-chart {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px 0;\n}\n.pie-chart .text {\n  position: absolute;\n  text-align: center;\n}\n.pie-chart .text .title {\n  color: #aaa;\n  font-size: 1.5rem;\n}\n.pie-chart .text .value {\n  color: #df7127;\n  font-size: 3rem;\n  font-weight: bold;\n}\n.records-header {\n  display: flex;\n  justify-content: space-between;\n  align-content: baseline;\n}\n.records-header .subtitle {\n  font-weight: bold;\n  font-size: 16px;\n}\n.calendar-title {\n  margin: 10px 0;\n}\n::ng-deep app-exercise-records calendar .monthview-primary-with-event {\n  background-color: #fff !important;\n  color: var(--color) !important;\n  z-index: 1;\n  position: relative;\n}\n::ng-deep app-exercise-records calendar .monthview-primary-with-event::before {\n  content: \"♥\";\n  color: red;\n  display: inline-block;\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  transform: scale(3) translateX(-20%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4ZXJjaXNlLXJlY29yZHMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vdGhlbWUvcmVzZXQvX3Jlc2V0LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi90aGVtZS9pY29ucy9faWNvbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3RoZW1lL2xheW91dC9fbWFyZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBREVEO0FDUUE7RUFDQyxnQkFBQTtBRExEO0FFeEJBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FGMkJGO0FFeEJBO0VBQ0Usa0NBQUE7QUYyQkY7QUV6QkE7RUFDRSxpQ0FBQTtBRjRCRjtBRTFCQTtFQUNFLHFDQUFBO0FGNkJGO0FFM0JBO0VBQ0UsMkNBQUE7QUY4QkY7QUU1QkE7RUFDRSxvQ0FBQTtBRitCRjtBRTdCQTtFQUNFLG9DQUFBO0FGZ0NGO0FFOUJBO0VBQ0UsbUNBQUE7QUZpQ0Y7QUUvQkE7RUFDRSxzQ0FBQTtBRmtDRjtBRS9CQTtFQUNFLHVDQUFBO0FGa0NGO0FFL0JBO0VBQ0UsdUNBQUE7QUZrQ0Y7QUUvQkE7RUFDRSx1Q0FBQTtBRmtDRjtBRS9CQTtFQUNFLHdDQUFBO0FGa0NGO0FFL0JBO0VBQ0Usc0NBQUE7QUZrQ0Y7QUUvQkE7RUFDRSxxQ0FBQTtBRmtDRjtBRS9CQTtFQUNFLGtDQUFBO0FGa0NGO0FFL0JBO0VBQ0Usc0NBQUE7QUZrQ0Y7QUczRkk7RUFDRSxlQUFBO0FIOEZOO0FHNUZJO0VBQ0UsZ0JBQUE7QUg4Rk47QUcxRkk7RUFDRSxpQkFBQTtBSDRGTjtBRzFGSTtFQUNFLGtCQUFBO0FINEZOO0FHeEZJO0VBQ0Usa0JBQUE7QUgwRk47QUd4Rkk7RUFDRSxtQkFBQTtBSDBGTjtBR3RGSTtFQUNFLGdCQUFBO0FId0ZOO0FHdEZJO0VBQ0UsaUJBQUE7QUh3Rk47QUFwSEU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQXVISjtBQXJIRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdUhKO0FBckhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXVISjtBQXJIRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF1SEo7QUFuSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFzSEY7QUFySEU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBdUhKO0FBdEhJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBd0hOO0FBdEhJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXdITjtBQW5IQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBc0hGO0FBckhFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBdUhKO0FBbkhBO0VBQ0UsY0FBQTtBQXNIRjtBQWpISTtFQUNFLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFvSE47QUFuSE07RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0FBcUhSIiwiZmlsZSI6ImV4ZXJjaXNlLXJlY29yZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdGhlbWUvdGhlbWUuc2Nzcyc7XHJcblxyXG4ucmVjb3JkIHtcclxuICA+ZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICAmLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGkge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgJi1kYXRhIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucGllLWNoYXJ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIC50ZXh0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLnZhbHVlIHtcclxuICAgICAgY29sb3I6ICNkZjcxMjc7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmVjb3Jkcy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYWxlbmRhci10aXRsZSB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhcHAtZXhlcmNpc2UtcmVjb3JkcyB7XHJcbiAgY2FsZW5kYXIge1xyXG4gICAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcikgIWltcG9ydGFudDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXDI2NjUnO1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKSB0cmFuc2xhdGVYKC0yMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLy8gLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuLy8gYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbi8vIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4vLyBcdGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuLy8gYm9keSB7XG4vLyBcdGxpbmUtaGVpZ2h0OiAxO1xuLy8gfVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbi8vIGJsb2NrcXVvdGUsIHEge1xuLy8gXHRxdW90ZXM6IG5vbmU7XG4vLyB9XG4vLyBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbi8vIHE6YmVmb3JlLCBxOmFmdGVyIHtcbi8vIFx0Y29udGVudDogJyc7XG4vLyBcdGNvbnRlbnQ6IG5vbmU7XG4vLyB9XG4vLyB0YWJsZSB7XG4vLyBcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4vLyBcdGJvcmRlci1zcGFjaW5nOiAwO1xuLy8gfVxuIiwiLmljb24ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pY29uLWFsYXJtIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9hbGFybS5zdmcnKTtcbn1cbi5pY29uLWJvb2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2Jvb2suc3ZnJyk7XG59XG4uaWNvbi1jYWxlbmRhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vY2FsZW5kYXIuc3ZnJyk7XG59XG4uaWNvbi1jb250YWN0X2luZm9ybWF0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9pZGVudGlmaWNhdGlvbi5zdmcnKTtcbn1cbi5pY29uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2NvbnRlbnQuc3ZnJyk7XG59XG4uaWNvbi1qb2dnaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9qb2dnaW5nLnN2ZycpO1xufVxuLmljb24tc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnJyk7XG59XG4uaWNvbi10cmFuc2xhdGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL3RyYW5zbGF0ZS5zdmcnKTtcbn1cblxuLmljb24tYmF0dGVyeS0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYmF0dGVyeS0zMC5zdmcnKTtcbn1cblxuLmljb24tYmF0dGVyeS01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYmF0dGVyeS01MC5zdmcnKTtcbn1cblxuLmljb24tYmF0dGVyeS04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYmF0dGVyeS04MC5zdmcnKTtcbn1cblxuLmljb24tYmF0dGVyeS0xMDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2JhdHRlcnktMTAwLnN2ZycpO1xufVxuXG4uaWNvbi1oZWFydGJlYXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2hlYXJ0YmVhdC5zdmcnKTtcbn1cblxuLmljb24tc2NoZWR1bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL3NjaGVkdWxlLnN2ZycpO1xufVxuXG4uaWNvbi1jbG9jayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vY2xvY2suc3ZnJyk7XG59XG5cbi5pY29uLWJsdWV0b290aCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vYmx1ZXRvb3RoLnN2ZycpO1xufVxuIiwiLy9tYXJnaW5cbi5te1xuICAmdHsgLy90b3BcbiAgICAmLTgge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cbiAgICAmLTE2IHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICB9XG4gICZyeyAvL3JpZ2h0XG4gICAgJi04IHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgICAmLTE2IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gIH1cbiAgJmJ7IC8vYm90dG9tXG4gICAgJi04IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgJi0xNiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgfVxuICAmbHsgLy9sZWZ0XG4gICAgJi04IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuICAgICYtMTYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "scWo":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercise-records/exercise-records.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'exercise_records'| translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-segment [(ngModel)]=\"segmentStatus\" (ionChange)=\"segmentChanged($event)\">\n  <ion-segment-button value=\"summary\">\n    <ion-label>{{'summary'| translate}}</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"calendar\">\n    <ion-label>{{'calendar'| translate}}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content>\n  <div [hidden]=\"segmentStatus !== 'summary'\">\n    <ion-item class=\"\" button (click)=\"showPeriodDetail()\" detail=\"false\">\n      <ion-label class=\"record-title\">\n        <h3>{{period}}</h3>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"chevron-forward\"></ion-icon>\n    </ion-item>\n    <ion-item class=\"record\">\n      <div>\n        <ion-label class=\"record-title\">\n          <i class=\"icon icon-heartbeat\"></i>\n          <h3>{{'target_hr_remain_ratio'| translate}}</h3>\n        </ion-label>\n        <div id=\"pieChart\" class=\"pie-chart\">\n          <div class=\"text\" *ngIf=\"pieChartData\">\n            <p class=\"title\">{{'BPM_average'| translate}}</p>\n            <p class=\"value\">{{pieChartData.thrRetention}} %</p>\n          </div>\n        </div>\n      </div>\n    </ion-item>\n    <ion-item class=\"record\" *ngIf=\"pieChartData\">\n      <div>\n        <ion-label class=\"record-title\">\n          <i class=\"icon icon-schedule\"></i>\n          <h3>{{'total_exercise_times'| translate}}</h3>\n        </ion-label>\n        <p class=\"record-data\">{{pieChartData.exerciseTimes}}{{'times'| translate}}</p>\n      </div>\n    </ion-item>\n    <ion-item class=\"record\" *ngIf=\"pieChartData\">\n      <div>\n        <ion-label class=\"record-title\">\n          <i class=\"icon icon-clock\"></i>\n          <h3>{{'total_exercise_time'| translate}}</h3>\n        </ion-label>\n        <p class=\"record-data\">{{pieChartData.exerciseTotalTime}}{{'minute'| translate}}</p>\n      </div>\n    </ion-item>\n  </div>\n\n  <div *ngIf=\"segmentStatus === 'calendar'\">\n    <ion-title class=\"calendar-title\">{{viewTitle}}</ion-title>\n    <div class=\"ion-padding\">\n      <calendar\n        [eventSource]=\"eventSource\"\n        [currentDate]=\"calendar.currentDate\"\n        [dateFormatter]=\"calendar.dateFormatter\"\n        [monthviewEventDetailTemplate]=\"template\"\n        (onCurrentDateChanged)=\"onCurrentDateChanged($event)\"\n        (onEventSelected)=\"onEventSelected($event)\"\n        (onTitleChanged)=\"onViewTitleChanged($event)\"\n        (onTimeSelected)=\"onTimeSelected($event)\"\n        [step]=\"calendar.step\">\n      </calendar>\n      <ng-template #template let-showEventDetail=\"showEventDetail\" let-selectedDate=\"selectedDate\"\n        let-noEventsLabel=\"noEventsLabel\">\n        <ion-card>\n          <ion-card-header class=\"records-header\" color=\"light\">\n            <ion-card-title>{{'records_list'| translate}}</ion-card-title>\n            <ion-card-subtitle class=\"subtitle\">{{selectedTime | date: 'YYYY-MM-dd'}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ng-container *ngIf=\"eventDetail?.length > 0; else noDetails\">\n                <ion-item *ngFor=\"let dailyData of eventDetail\">\n                  <div\n                    style=\"display: flex; justify-content: space-between; padding: 5px 0; width: 100%; font-size: 14px;\"\n                    (click)=\"navToDetail(dailyData)\">\n                    <p>{{dailyData.start}} ~ {{dailyData.end}}</p>\n                    <p>[{{dailyData.time}}]</p>\n                    <p *ngIf=\"dailyData.rpeStatus\">RPE: {{dailyData.rpeStatus}}</p>\n                    <p style=\"color: red;\"> {{dailyData.thrRetention}}%</p>\n                  </div>\n                </ion-item>\n              </ng-container>\n              <ng-template #noDetails>\n                <ion-item>\n                  <ion-label>{{'no_records'| translate}}</ion-label>\n                </ion-item>\n              </ng-template>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ng-template>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=exercise-records-exercise-records-module.js.map