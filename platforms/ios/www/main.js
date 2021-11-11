(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/z6A":
/*!**************************************!*\
  !*** ./src/constants/storage-key.ts ***!
  \**************************************/
/*! exports provided: LANG, NOTIFICATION_LIST, NOTIFICATION_STATUS, NOTIFICATION_TIME, NOTIFICATION_SOUND, NOTIFICATION_VIBRATION, NOTIFICATION_MUSIC, REPEAT_WEEKDAY, IS_REMEMBER_EMAIL, LAST_EMAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG", function() { return LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_LIST", function() { return NOTIFICATION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_STATUS", function() { return NOTIFICATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_TIME", function() { return NOTIFICATION_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_SOUND", function() { return NOTIFICATION_SOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_VIBRATION", function() { return NOTIFICATION_VIBRATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_MUSIC", function() { return NOTIFICATION_MUSIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPEAT_WEEKDAY", function() { return REPEAT_WEEKDAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_REMEMBER_EMAIL", function() { return IS_REMEMBER_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_EMAIL", function() { return LAST_EMAIL; });
const LANG = 'lang';
const NOTIFICATION_LIST = 'notificationList';
const NOTIFICATION_STATUS = 'status';
const NOTIFICATION_TIME = 'time';
const NOTIFICATION_SOUND = 'sound';
const NOTIFICATION_VIBRATION = 'vibration';
const NOTIFICATION_MUSIC = 'music';
const REPEAT_WEEKDAY = 'repeatWeekday';
const IS_REMEMBER_EMAIL = 'isRememberEmail';
const LAST_EMAIL = 'email';


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jingle/Documents/workspace/rehab-mobile/src/main.ts */"zUnb");


/***/ }),

/***/ "0U9C":
/*!******************************************************!*\
  !*** ./src/components/modals/rpe/rpe.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJycGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "3uju":
/*!********************************************!*\
  !*** ./src/components/chat/chat.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar img {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 60px !important;\n  max-height: 60px !important;\n}\n\n.bg {\n  --background: rgba(var(--ion-color-primary-rgb), 0.05);\n}\n\n.bg-secondary {\n  --background: rgba(var(--ion-color-secondary-rgb), 0.05);\n}\n\n.bg-white {\n  background: #fff;\n}\n\n.header-md::after,\n.header-ios::after {\n  background-image: none !important;\n}\n\n.header .toolbar .toolbar-content .toolbar-title {\n  align-items: center;\n}\n\n.app-list {\n  margin-top: 7px !important;\n  padding: 5px;\n  background: none;\n}\n\n.app-list .item {\n  border-radius: 10px;\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n  margin-bottom: 5px;\n}\n\n.app-list .item ion-avatar {\n  height: 60px;\n  width: 60px;\n}\n\n.app-list .item p[item-end] {\n  text-align: right;\n  color: #cfcfcf;\n}\n\n.chatting-btns {\n  display: flex;\n  justify-content: space-between;\n}\n\n.func-btns {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.chat-container {\n  height: calc(100% - 102px);\n  overflow: scroll;\n  position: relative;\n}\n\n.chat-container .msg-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.chat-controls {\n  background: #fff;\n  padding: 3px 2px;\n  width: 100%;\n  box-shadow: 0 -1px 43px 5px rgba(98, 98, 98, 0.1);\n  z-index: 9;\n}\n\n.chat-controls .option {\n  height: 0;\n  position: absolute;\n  bottom: 54px;\n  overflow: hidden;\n  transition: all 0.3s;\n  width: 100%;\n}\n\n.chat-controls .option ion-col {\n  color: var(--ion-color-primary);\n  margin-bottom: 15px;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.chat-controls .option ion-icon::before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-size: 3rem;\n  line-height: 65px;\n}\n\n.chat-controls .option ion-icon {\n  color: var(--ion-color-primary);\n  display: block;\n  width: 25px;\n  height: 25px;\n  background: #f3f9f5;\n  border-radius: 50px;\n  margin: auto;\n  margin-bottom: auto;\n  padding: 15px;\n  position: relative;\n  margin-bottom: 7px;\n}\n\n.chat-controls.active .option {\n  overflow-y: auto;\n  height: 230px;\n  position: absolute;\n  bottom: 54px;\n  background-color: #fff;\n  z-index: 0;\n  transition: all 0.3s;\n}\n\n.chat-controls ion-row ion-col ion-list {\n  margin: 0 -2px;\n}\n\n.chat-controls ion-row ion-col ion-list ion-item {\n  border-radius: 7px;\n  --background: #fff;\n  box-shadow: none !important;\n  border-bottom: none !important;\n}\n\n.chat-controls ion-row ion-col p {\n  border-radius: 7px;\n  font-size: 14pt;\n  margin: 0;\n  line-height: 44px;\n  height: 44px;\n  color: #bcbcbc;\n  min-width: 20px;\n  overflow: hidden;\n}\n\n.chat-controls ion-row ion-col p ion-icon {\n  width: 22px;\n  height: 22px;\n  text-align: center;\n  font-size: 2.5rem;\n  color: #828282;\n  margin-top: 11px;\n  color: #828282;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.contact-avatar {\n  height: 40px;\n  width: 40px;\n}\n\n.login-form {\n  width: 75%;\n  margin: auto;\n}\n\n.login-form ion-list {\n  background: none;\n}\n\n.login-form ion-list ion-item {\n  background: rgba(var(--ion-color-primary-rgb), 0.05);\n  --background: none;\n  border-radius: 10px;\n  padding: 3px 20px !important;\n  margin-bottom: 20px;\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.login-form ion-list ion-item .item-native {\n  --background: none !important;\n}\n\n.login-form ion-list ion-item ion-select-option {\n  margin-left: auto;\n  max-width: unset;\n  align-items: center;\n  padding: 0;\n}\n\n.login-form ion-list ion-item ion-select-option .select {\n  max-width: 100%;\n}\n\n.login-form ion-list ion-item ion-select-option .select .select-text {\n  font-size: 1.35rem;\n}\n\n.login-form ion-list ion-item.item-input .text-input::placeholder {\n  color: #78927e !important;\n  font-size: 1.3rem;\n}\n\n.login-form ion-list ion-item .label {\n  font-size: 1.35rem;\n  font-weight: 400;\n  color: #78927e;\n  flex: unset;\n}\n\n.logo-box {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 30px;\n}\n\n.logo-box img {\n  position: absolute;\n  width: 140px;\n  height: 140px;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n}\n\n.profile-image {\n  width: 70px !important;\n  height: 70px !important;\n}\n\n.contact-profile-img {\n  background-color: #000;\n}\n\n.contact-profile-img img {\n  display: block;\n  max-width: 400px;\n  margin: 0 auto;\n}\n\n.text-primary {\n  color: var(--ion-color-primary) !important;\n}\n\n.text-secondary {\n  color: var(--ion-color-secondary) !important;\n}\n\n.text-danger {\n  color: var(--ion-color-danger) !important;\n}\n\n.text-muted {\n  color: #999;\n}\n\n.rpe-shortcut ul {\n  display: flex;\n  padding: 0;\n  margin: 8px 0;\n}\n\n.rpe-shortcut li {\n  padding: 0 8px;\n  list-style-type: none;\n}\n\n.rpe-shortcut .rpe-btn {\n  height: 30px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFDQTtFQUNFLHNEQUFBO0FBRUY7O0FBQUE7RUFDRSx3REFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjs7QUFEQTs7RUFFRSxpQ0FBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkU7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFJTjs7QUFESTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUdOOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBR0Y7O0FBQUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFGRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLFdBQUE7RUFDQSxpREFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNJO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUNJO0VBQ0UsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDTjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBRE47O0FBTUk7RUFDRSxjQUFBO0FBSk47O0FBTU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsMkJBQUE7RUFDQSw4QkFBQTtBQUpSOztBQVFJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFOTjs7QUFRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTlI7O0FBWUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVRGOztBQVlBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFURjs7QUFXRTtFQUNFLGdCQUFBO0FBVEo7O0FBVUk7RUFDRSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSwyQkFBQTtBQVJOOztBQVVNO0VBQ0UsNkJBQUE7QUFSUjs7QUFXTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFJQSxtQkFBQTtFQUNBLFVBQUE7QUFUUjs7QUFXUTtFQUNFLGVBQUE7QUFUVjs7QUFVVTtFQUNFLGtCQUFBO0FBUlo7O0FBYVE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBWFY7O0FBZU07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFiUjs7QUFrQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWZGOztBQWlCRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQWZKOztBQW1CQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFoQkY7O0FBa0JBO0VBQ0Usc0JBQUE7QUFmRjs7QUFnQkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZEo7O0FBa0JBO0VBQ0UsMENBQUE7QUFmRjs7QUFpQkE7RUFDRSw0Q0FBQTtBQWRGOztBQWdCQTtFQUNFLHlDQUFBO0FBYkY7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBYko7O0FBZUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFiSjs7QUFlRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQWJKIiwiZmlsZSI6ImNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcclxuICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcclxufVxyXG4uYmcge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjA1KTtcclxufVxyXG4uYmctc2Vjb25kYXJ5IHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAwLjA1KTtcclxufVxyXG4uYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyLFxyXG4uaGVhZGVyLWlvczo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlciAudG9vbGJhciAudG9vbGJhci1jb250ZW50IC50b29sYmFyLXRpdGxlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXBwLWxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDdweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAuaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHBbaXRlbS1lbmRdIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjY2ZjZmNmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY2hhdHRpbmctYnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmZ1bmMtYnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2hhdC1jb250YWluZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAycHgpO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5tc2ctY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbn1cclxuXHJcbi5jaGF0LWNvbnRyb2xzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDNweCAycHg7XHJcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gIC8vIGJvdHRvbTo1NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgLTFweCA0M3B4IDVweCByZ2JhKDk4LCA5OCwgOTgsIDAuMSk7XHJcbiAgei1pbmRleDogOTtcclxuXHJcbiAgLm9wdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDU0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb246OmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmOWY1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLmFjdGl2ZSB7XHJcbiAgICAub3B0aW9uIHtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDU0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLXJvdyBpb24tY29sIHtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgbWFyZ2luOiAwIC0ycHg7XHJcblxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgIGNvbG9yOiAjYmNiY2JjO1xyXG4gICAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWF2YXRhciB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wNSk7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogM3B4IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAuaXRlbS1uYXRpdmUge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmIGlvbi1zZWxlY3Qtb3B0aW9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAuc2VsZWN0IHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC5zZWxlY3QtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5pdGVtLWlucHV0IHtcclxuICAgICAgICAudGV4dC1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICM3ODkyN2UgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogIzc4OTI3ZTtcclxuICAgICAgICBmbGV4OiB1bnNldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9nby1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxufVxyXG4uY29udGFjdC1wcm9maWxlLWltZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1wcmltYXJ5IHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1kYW5nZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LW11dGVkIHtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLnJwZS1zaG9ydGN1dCB7XHJcbiAgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuICBsaSB7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiAgLnJwZS1idG4ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "5Xck":
/*!**********************************************************************************!*\
  !*** ./src/components/modals/detail-list-modal/detail-list-modal.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtbGlzdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "61FP":
/*!*****************************************!*\
  !*** ./src/services/storage.service.ts ***!
  \*****************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "LLt/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");





let StorageService = class StorageService {
    constructor(ionicStorage, authSvc, loggerSvc, zone) {
        this.ionicStorage = ionicStorage;
        this.authSvc = authSvc;
        this.loggerSvc = loggerSvc;
        this.zone = zone;
        this.storage = null;
        this.userName = '';
        // this.init();
        this.userName = this.authSvc.username;
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage = yield this.ionicStorage.create();
        });
    }
    set(key, value) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const oldData = yield this.getDataOfUser();
            const newValue = {};
            newValue[key] = value;
            const newData = Object.assign(Object.assign({}, oldData), newValue);
            yield ((_a = this.storage) === null || _a === void 0 ? void 0 : _a.set(this.userName, newData));
        });
    }
    get(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.getDataOfUser();
            if (data) {
                console.warn('user data:', data);
                return data[key];
            }
            return false;
        });
    }
    remove(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.getDataOfUser();
            delete data[key];
            yield this.storage.set(this.userName, data);
        });
    }
    clearUserData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.remove(this.userName);
        });
    }
    getDataOfUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storage.get(this.userName).then((data) => resolve(data)).catch((err) => reject(false)); }));
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "6od+":
/*!****************************************************************!*\
  !*** ./src/components/modals/hr-detail/hr-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: HrDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrDetailComponent", function() { return HrDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hr_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hr-detail.component.html */ "rBcA");
/* harmony import */ var _hr_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hr-detail.component.scss */ "w2d2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chartjs-plugin-annotation */ "Ym+k");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_7__);








let HrDetailComponent = class HrDetailComponent {
    constructor(modalController, screenOrientation) {
        this.modalController = modalController;
        this.screenOrientation = screenOrientation;
        this.secDisplayUnit = 10;
        this.dataset = [];
        this.chart = [];
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    ngOnInit() {
        this.createCanvas();
    }
    createCanvas() {
        this.canvas = document.createElement('canvas');
        const ctx = this.canvas.getContext('2d');
        chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"].plugins.register({ chartAnnotation: chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_7__ });
        setTimeout(() => {
            this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](ctx, {
                type: 'line',
                data: {
                    labels: this.hrData.split(',')
                        .map((_, idx) => idx)
                        .map(data => {
                        if (data % this.secDisplayUnit === 0) {
                            let min = Math.floor(data / 60);
                            if (min < 10) {
                                min = `0${min}`;
                            }
                            let sec = data % 60;
                            if (sec === 0) {
                                sec = `00`;
                            }
                            return `${min}:${sec}`;
                        }
                        else {
                            return '';
                        }
                    }),
                    datasets: [
                        {
                            label: '# of Heart beat',
                            data: this.hrData.split(','),
                            fill: false,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }],
                        xAxes: [{
                                ticks: {
                                    autoSkip: false,
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
        }, 100);
    }
    ngAfterViewInit() {
        const location = document.getElementById('recordDetail');
        location.appendChild(this.canvas);
    }
    dismissModal() {
        this.screenOrientation.unlock();
        this.modalController.dismiss();
    }
};
HrDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"] }
];
HrDetailComponent.propDecorators = {
    hrData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    prescription: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HrDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hr-detail',
        template: _raw_loader_hr_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hr_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HrDetailComponent);



/***/ }),

/***/ "87Hk":
/*!************************************************************************!*\
  !*** ./src/components/modals/connect-modal/connect-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: ConnectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectModalComponent", function() { return ConnectModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_connect_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./connect-modal.component.html */ "IyIa");
/* harmony import */ var _theme_modals_connect_modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/modals/_connect-modal.scss */ "jk4M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ConnectModalComponent = class ConnectModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.isConnect = true;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss({ isConnect: this.isConnect });
    }
    radioGroupChange(e) {
        this.isConnect = e.detail.value === 'connect' ? true : false;
    }
};
ConnectModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ConnectModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-connect-modal',
        template: _raw_loader_connect_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_theme_modals_connect_modal_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConnectModalComponent);



/***/ }),

/***/ "8DKx":
/*!*****************************************************************!*\
  !*** ./src/components/message/emergency/emergency.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmergencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyComponent", function() { return EmergencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_emergency_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./emergency.component.html */ "QV65");
/* harmony import */ var _emergency_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emergency.component.scss */ "f6Z6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EmergencyComponent = class EmergencyComponent {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const chat = document.querySelector('.chat-container');
        const msg = document.querySelector('.msg-container');
        chat.scrollTop = msg.scrollHeight + this.element.nativeElement.offsetHeight;
    }
};
EmergencyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] }
];
EmergencyComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EmergencyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-msg-emergency',
        template: _raw_loader_emergency_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_emergency_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmergencyComponent);



/***/ }),

/***/ "AcVy":
/*!************************************!*\
  !*** ./src/services/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "LLt/");




let AuthGuard = class AuthGuard {
    constructor(router, authSvc) {
        this.router = router;
        this.authSvc = authSvc;
    }
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiDomain: 'http://rehab-web.site/',
    // rehabHubUrl: 'http://rehab-web.site/rehap',
    apiDomain: 'https://localhost:44332/',
    rehabHubUrl: 'https://localhost:44332/rehap',
    bleScanSec: 5,
    bleDeviceService: 'FFF0',
    wearable2mobile: 'FFF1',
    mobile2wearable: 'FFF2',
    connectExpiredTime: 5 * 60,
    useDummyData: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B7cR":
/*!**************************************************************!*\
  !*** ./src/components/modals/get-data/get-data.component.ts ***!
  \**************************************************************/
/*! exports provided: GetDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataComponent", function() { return GetDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_get_data_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./get-data.component.html */ "P08B");
/* harmony import */ var _get_data_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-data.component.scss */ "GWzA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let GetDataComponent = class GetDataComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss();
    }
};
GetDataComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
GetDataComponent.propDecorators = {
    isGettingData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
GetDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-data',
        template: _raw_loader_get_data_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_get_data_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GetDataComponent);



/***/ }),

/***/ "EVXJ":
/*!*********************************************************!*\
  !*** ./src/components/message/text/text.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chat-bubble {\n  width: auto;\n  max-width: 75%;\n  border-radius: 8px;\n  padding: 8px 16px;\n  margin: 5px 10px;\n  position: relative;\n}\n.chat-bubble.received {\n  background: #fff;\n  float: left;\n}\n.chat-bubble.received::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 70%;\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-right-color: #fff;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -5px;\n  margin-left: -10px;\n}\n.chat-bubble.send {\n  background: var(--ion-color-primary);\n  text-align: right;\n  color: #fff;\n  float: right;\n}\n.chat-bubble.send::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 70%;\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-left-color: var(--ion-color-primary);\n  border-right: 0;\n  border-bottom: 0;\n  margin-top: -5px;\n  margin-right: -10px;\n}\n.chat-bubble h6 {\n  margin: 0;\n  margin-bottom: 4px;\n  font-weight: 400;\n}\n.chat-bubble p {\n  margin: 0;\n  font-size: 12px;\n  opacity: 0.8;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUVFO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBR0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUZKIiwiZmlsZSI6InRleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1idWJibGUge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBtYXJnaW46IDVweCAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJi5yZWNlaXZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogNzAlO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc2VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiA3MCU7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "GWzA":
/*!****************************************************************!*\
  !*** ./src/components/modals/get-data/get-data.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtZGF0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Hm0V":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/message/text/text.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chat-bubble\" [ngClass]=\"message.messageStatus\">\n  <h6>{{ message.messageText }}</h6>\n  <p>{{ message.sendDateTime | date:'HH:mm' }}</p>\n</div>\n");

/***/ }),

/***/ "IyIa":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/connect-modal/connect-modal.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #modalContent>\n  <div class=\"wrap\">\n    <ion-radio-group value=\"connect\"\n    (ionChange)=\"radioGroupChange($event)\">\n      <ion-item>\n        <ion-label>{{'connect' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"connect\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">{{'see_records' | translate}}</ion-label>\n        <ion-radio slot=\"start\" value=\"unconnect\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ion-content>\n\n<ion-footer #modalFooter>\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"dismissModal()\">{{'finish_setting' | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "KNNm":
/*!*********************************************!*\
  !*** ./src/interceptors/app.interceptor.ts ***!
  \*********************************************/
/*! exports provided: AppInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "LLt/");
/* harmony import */ var src_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/logger.service */ "O0ov");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let AppInterceptor = class AppInterceptor {
    constructor(inj, router, loggerSvc) {
        this.inj = inj;
        this.router = router;
        this.loggerSvc = loggerSvc;
        this.httpHeader = { 'Content-Type': 'application/json' };
    }
    intercept(req, next) {
        const requestUrl = req.url;
        // Admin 기능을 접근할 때에는 admin auth service를 이용.
        const authService = this.inj.get(src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]); //authservice is an angular service
        // Get the auth header from the service.
        const authorization = 'Bearer ' + authService.token;
        let headers = {};
        //console.log('instanceOf FormData', req.body instanceof FormData);
        //console.log('ori.content.type', req.headers.get('Content-Type'));
        if (!(req.body instanceof FormData)) {
            headers = this.httpHeader;
            const reqContentType = req.headers.get('Content-Type');
            if (reqContentType != null) {
                headers['Content-Type'] = reqContentType;
            }
        }
        //console.log('headers', headers);
        if (authService.token != null) {
            headers.authorization = authorization;
        }
        // Clone the request to add the new header.
        const authReq = req.clone({ headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headers) });
        // console.log('authReq', req.headers);
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && event.status === 204) {
                return null;
            }
            return authReq;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error, caught) => {
            this.loggerSvc.error({ error, caught });
            // Refresh token.
            if (error.status === 401) {
                if (authService.refreshToken != null) {
                    const reqBody = req.body;
                    // When refresh token failed.
                    if (req.url.includes('api/Token') &&
                        reqBody !== undefined &&
                        reqBody.grantType === src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["GrantTypes"].refresh) {
                        throw error;
                    }
                    else {
                        return authService.extendToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((t) => {
                            const authReq = req.clone({
                                headers: req.headers.set('authorization', 'Bearer ' + authService.token),
                            });
                            return next.handle(authReq);
                        }));
                    }
                }
                else {
                    throw error;
                }
            }
            else if (error.status === 404 || error.status === 500) {
                // TODO: report....
                this.loggerSvc.log('err', error, error.error);
                //return next.handle(authReq);
                throw error;
            }
            else if (error.status === 400 &&
                error.error === 'Could not verify auth request') {
                authService.logOut();
                this.router.navigate(['/']);
            }
            //return all others errors
            throw error;
        }));
    }
};
AppInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] }
];
AppInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])()
], AppInterceptor);



/***/ }),

/***/ "KZRF":
/*!************************************************************************!*\
  !*** ./src/components/modals/devices-modal/devices-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: DevicesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesModalComponent", function() { return DevicesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_devices_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./devices-modal.component.html */ "uKVS");
/* harmony import */ var _devices_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devices-modal.component.scss */ "s42a");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let DevicesModalComponent = class DevicesModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.title = '';
        this.devicesList = [];
    }
    ngOnInit() { }
    dismissModal(isSelected) {
        if (isSelected) {
            this.modalController.dismiss({ id: this.deviceId });
        }
        else {
            this.modalController.dismiss();
        }
    }
    radioGroupChange(e) {
        this.deviceId = e.detail.value;
    }
};
DevicesModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
DevicesModalComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    devicesList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
DevicesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-devices-modal',
        template: _raw_loader_devices_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_devices_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DevicesModalComponent);



/***/ }),

/***/ "LLt/":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService, GrantTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrantTypes", function() { return GrantTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger.service */ "O0ov");







let AuthService = class AuthService {
    constructor(http, logger, platformId) {
        this.http = http;
        this.logger = logger;
        this.platformId = platformId;
        this._userKey = 'currentUser';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiDomain + 'api/Token';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.headers = this.headers.append('Content-type', 'application/json');
        const user = localStorage.getItem(this._userKey);
        if (user) {
            const currentUser = JSON.parse(user);
            this._token = currentUser && currentUser.token;
        }
    }
    get stored() {
        const value = localStorage.getItem(this._userKey);
        return value != null ? JSON.parse(value) : '';
    }
    get token() {
        if (this.stored) {
            return this.stored.token;
        }
        else {
            return null;
        }
    }
    get expires_in() {
        if (this.stored) {
            return this.stored.expires_in;
        }
        else {
            return null;
        }
    }
    get refreshToken() {
        if (this.stored) {
            return this.stored.refreshToken;
        }
        else {
            return null;
        }
    }
    get username() {
        return this.stored !== null ? this.stored.username : '';
    }
    login(userInfo) {
        const request = {
            email: userInfo.email,
            password: userInfo.password,
            grantType: GrantTypes.password,
            refreshToken: '',
        };
        return this.callTokenApi(request);
    }
    extendToken() {
        const request = {
            email: this.username,
            password: '',
            refreshToken: this.refreshToken,
            grantType: GrantTypes.refresh,
        };
        return this.callTokenApi(request);
    }
    callTokenApi(data /*, rememberMe: boolean*/) {
        return this.http
            .post(`${this.baseUrl}/Patient`, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            const token = response;
            // parse payload
            const payloads = token.token.substring(token.token.indexOf('.') + 1, token.token.lastIndexOf('.'));
            const decoded = atob(payloads);
            const parsed = JSON.parse(decoded);
            if (token) {
                this._token = token.token;
                this._expires_in = token.expires_in;
                this._refreshToken = token.refresh_token;
                const now = new Date();
                now.setSeconds(now.getSeconds() + token.expires_in);
                this.expire = now;
                const serializeObj = {
                    username: data.email,
                    domain: parsed.domain,
                    token: this._token,
                    expires_in: this._expires_in,
                    refreshToken: this._refreshToken,
                };
                localStorage.setItem(this._userKey, JSON.stringify(serializeObj));
            }
            return !!token;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err)));
    }
    logOut() {
        this._token = null;
        localStorage.removeItem(this._userKey);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);

const GrantTypes = {
    password: 'password',
    refresh: 'refresh',
};


/***/ }),

/***/ "NtM8":
/*!**************************************!*\
  !*** ./src/services/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "LLt/");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let HttpService = class HttpService {
    constructor(http, baseUrl, route, router, logger, authSvc) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.logger = logger;
        this.authSvc = authSvc;
        this.baseUrl = baseUrl;
    }
    get authHeader() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Bearer ' + this.authSvc.token);
        return headers;
    }
    get headers() {
        let headers = this.authHeader;
        headers = headers.append('Content-type', 'application/json');
        return headers;
    }
    get multipartHeaders() {
        let headers = this.authHeader;
        //headers = headers.append('Content-type', 'multipart/form-data');
        return headers;
    }
    getAll() {
        this.logger.log('headers', this.headers);
        return this.http.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((data) => { this.logger.log('getAll.data', JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => { return this.handleError(err); }));
    }
    get(idx) {
        return this.http.get([this.baseUrl, idx].join('/'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((data) => { this.logger.log('get.data', JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => { return this.handleError(err); }));
    }
    create(item) {
        return this.http.post(this.baseUrl, JSON.stringify(item))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => { this.logger.log('post.data', JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => this.handleError(err)));
    }
    update(idx, item) {
        return this.http.put([this.baseUrl, idx].join('/'), item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => this.logger.log("put data: " + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => this.handleError(err)));
    }
    delete(idx) {
        return this.http.delete([this.baseUrl, idx].join('/'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => this.logger.log('delete.data', JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => this.handleError(err)));
    }
    requestPostUrlEncode(url, params) {
        let urlencodeheaders = this.authHeader;
        urlencodeheaders = urlencodeheaders.append('Content-Type', 'application/x-www-form-urlencoded');
        let query = (params == null) ? null : Object.keys(params).map(key => key + '=' + params[key]).join('&');
        return this.http.post(this.baseUrl + url, query, { headers: urlencodeheaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => { this.logger.log('post.data', JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => this.handleError(err)));
    }
    //protected handleError(err: HttpErrorResponse): Observable<any> | ErrorObservable {
    handleError(err) {
        // not authorized
        this.logger.log('handleError', err);
        if (err.status === 401) {
            this.authSvc.logOut();
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], HttpService);



/***/ }),

/***/ "O0ov":
/*!****************************************!*\
  !*** ./src/services/logger.service.ts ***!
  \****************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "E3Zs");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LoggerService = class LoggerService {
    constructor(logger) {
        this.logger = logger;
    }
    log(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.log(msg, ...args);
    }
    warn(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.warn(msg, ...args);
    }
    error(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.error(msg, ...args);
    }
    debug(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.debug(msg, ...args);
    }
    info(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.info(msg, ...args);
    }
    fatal(msg, ...args) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return;
        }
        this.logger.fatal(msg, ...args);
    }
};
LoggerService.ctorParameters = () => [
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"] }
];
LoggerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], LoggerService);



/***/ }),

/***/ "P08B":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/get-data/get-data.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #modalContent>\n  <div class=\"wrap\">\n    <p>디바이스에 저장된 데이터들을 받아오는 중 입니다. 잠시만 기다려주세요.....</p>\n  </div>\n</ion-content>\n\n<ion-footer #modalFooter>\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"dismissModal()\" [disabled]=\"isGettingData | async\">{{'finish_setting' | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "QV65":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/message/emergency/emergency.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chat-bubble\" [ngClass]=\"message.messageStatus\">\n  <ng-container [ngSwitch]=\"message.rpeValue\">\n    <ng-container *ngSwitchCase=\"8\">\n      <h6>편해요.</h6>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"12\">\n      <h6>보통이에요.</h6>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"15\">\n      <h6>힘들어요.</h6>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"19\">\n      <h6>매우 힘들어요.</h6>\n    </ng-container>\n  </ng-container>\n  <h6>현재 심박수: {{message.rate}} bpm</h6>\n  <p>{{ message.sendDateTime | date:'HH:mm' }}</p>\n</div>\n");

/***/ }),

/***/ "QwSV":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/detail-list-modal/detail-list-modal.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"arrow-back\" style=\"width: 24px; height: 48px;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"ion-padding\" *ngIf=\"isChooseMulti; else elseTemplate\">\n  <ion-item button *ngFor=\"let data of dataList; index as i\" (click)=\"checkItem(data)\">\n    <!-- <ion-icon slot=\"end\" name=\"checkmark\" *ngIf=\"checkIsChecked(data.text)\"></ion-icon> -->\n    <ion-label>{{data.text}}</ion-label>\n    <ion-checkbox slot=\"end\" [checked]=\"checkIsChecked(data.text)\"></ion-checkbox>\n  </ion-item>\n</ion-content>\n<ng-template #elseTemplate>\n  <ion-content fullscreen class=\"ion-padding\">\n    <ion-item button *ngFor=\"let data of dataList\" (click)=\"dismissModal(data)\">\n      <ion-icon slot=\"end\" name=\"checkmark\" *ngIf=\"currValue === data.text\"></ion-icon>\n      <ion-label>{{data.text}}</ion-label>\n    </ion-item>\n  </ion-content>\n</ng-template>\n\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SSap":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/progress-bar/progress-bar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress\" [style]=\"'--ratio: ' + (100 - ratio) + '%'\">\n</div>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/language.service */ "lRKa");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/storage.service */ "61FP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let AppComponent = class AppComponent {
    constructor(platform, androidPermissions, storageSvc, languageSvc, translateSvc, screenOrientation) {
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.storageSvc = storageSvc;
        this.languageSvc = languageSvc;
        this.translateSvc = translateSvc;
        this.screenOrientation = screenOrientation;
        this.initailizeApp();
    }
    initailizeApp() {
        this.platform.ready().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storageSvc.init();
            this.languageSvc.setInitState();
            yield this.languageSvc.getAndSetLastSetting();
            yield this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            yield this.androidPermissions.requestPermissions([
                // this.androidPermissions.PERMISSION.ACCESS_NOTIFICATION_POLICY,
                this.androidPermissions.PERMISSION.BLUETOOTH,
                this.androidPermissions.PERMISSION.LOCATION
            ]);
        }));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: httpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function() { return httpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/components.module */ "xOzl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "yXvl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_services_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/http.service */ "NtM8");
/* harmony import */ var src_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/interceptors/loader.interceptor */ "oGGJ");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-logger */ "E3Zs");
/* harmony import */ var src_interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/interceptors/app.interceptor */ "KNNm");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var src_services_permission_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/permission.service */ "i/Hf");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "RzHS");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/File/ngx */ "B7Vy");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/services/language.service */ "lRKa");


























const httpLoaderFactory = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
let AppModule = class AppModule {
    constructor(translateService, languageService) {
        this.translateService = translateService;
        this.languageService = languageService;
        this.language$ = this.languageService.language$;
        this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_24__["map"])(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
};
AppModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"] },
    { type: src_services_language_service__WEBPACK_IMPORTED_MODULE_25__["LanguageService"] }
];
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_12__["LoggerModule"].forRoot({ level: ngx_logger__WEBPACK_IMPORTED_MODULE_12__["NgxLoggerLevel"].TRACE }),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__["IonicStorageModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
                    useFactory: httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                },
            }),
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"],
            },
            src_services_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"],
            _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_8__["BLE"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__["LocalNotifications"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__["AndroidPermissions"],
            src_services_permission_service__WEBPACK_IMPORTED_MODULE_16__["PermissionService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_18__["ScreenOrientation"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_21__["FileChooser"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_22__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_23__["FileOpener"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: src_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_11__["LoaderInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: src_interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_13__["AppInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "b+FR":
/*!***************************************************************!*\
  !*** ./src/components/progress-bar/progress-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_progress_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./progress-bar.component.html */ "SSap");
/* harmony import */ var _progress_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-bar.component.scss */ "m/Pv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProgressBarComponent = class ProgressBarComponent {
    constructor() { }
    ngOnInit() { }
};
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    ratio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProgressBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-progress-bar',
        template: _raw_loader_progress_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_progress_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProgressBarComponent);



/***/ }),

/***/ "c49u":
/*!****************************************************!*\
  !*** ./src/components/modals/rpe/rpe.component.ts ***!
  \****************************************************/
/*! exports provided: RpeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpeComponent", function() { return RpeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rpe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rpe.component.html */ "vujI");
/* harmony import */ var _rpe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rpe.component.scss */ "0U9C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let RpeComponent = class RpeComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.rpeValue = 0;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss({ rpeValue: this.rpeValue });
    }
    selectOption($event) {
        this.rpeValue = +$event.target.value;
    }
};
RpeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
RpeComponent.propDecorators = {
    parent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RpeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rpe',
        template: _raw_loader_rpe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rpe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RpeComponent);



/***/ }),

/***/ "f6Z6":
/*!*******************************************************************!*\
  !*** ./src/components/message/emergency/emergency.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chat-bubble {\n  width: auto;\n  max-width: 75%;\n  border-radius: 8px;\n  padding: 8px 16px;\n  margin: 5px 10px;\n  position: relative;\n}\n.chat-bubble.received {\n  background: #fff;\n  float: left;\n}\n.chat-bubble.received::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 70%;\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-right-color: #fff;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -5px;\n  margin-left: -10px;\n}\n.chat-bubble.send {\n  background: red;\n  text-align: right;\n  color: #fff;\n  float: right;\n}\n.chat-bubble.send::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 70%;\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-left-color: var(--ion-color-primary);\n  border-right: 0;\n  border-bottom: 0;\n  margin-top: -5px;\n  margin-right: -10px;\n}\n.chat-bubble h6 {\n  margin: 0;\n  margin-bottom: 4px;\n  font-weight: 400;\n}\n.chat-bubble p {\n  margin: 0;\n  font-size: 12px;\n  opacity: 0.8;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VtZXJnZW5jeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVOO0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUdFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFGSiIsImZpbGUiOiJlbWVyZ2VuY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1idWJibGUge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBtYXJnaW46IDVweCAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJi5yZWNlaXZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogNzAlO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc2VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiA3MCU7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "hugj":
/*!*********************************!*\
  !*** ./src/constants/common.ts ***!
  \*********************************/
/*! exports provided: LANG_KO, LANG_EN, WEEKDAYS, PRESCRIPTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_KO", function() { return LANG_KO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_EN", function() { return LANG_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKDAYS", function() { return WEEKDAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRESCRIPTION", function() { return PRESCRIPTION; });
// language
const LANG_KO = 'ko';
const LANG_EN = 'en';
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
const PRESCRIPTION = 'prescription';


/***/ }),

/***/ "i/Hf":
/*!********************************************!*\
  !*** ./src/services/permission.service.ts ***!
  \********************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ "O0ov");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");




let PermissionService = class PermissionService {
    constructor(androidPermissions, loggerSvc) {
        this.androidPermissions = androidPermissions;
        this.loggerSvc = loggerSvc;
    }
    checkNotification() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_NOTIFICATION_POLICY)
            .then(permmissionResponse => {
            this.loggerSvc.log(permmissionResponse);
        })
            .catch(onrejected => {
            this.loggerSvc.error(onrejected);
        });
    }
};
PermissionService.ctorParameters = () => [
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }
];
PermissionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PermissionService);



/***/ }),

/***/ "jk4M":
/*!**********************************************!*\
  !*** ./src/theme/modals/_connect-modal.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".connect-modal {\n  --backdrop-opacity: 0.8 !important;\n}\n.connect-modal .modal-wrapper {\n  --height: 30%;\n  --width: 90%;\n  position: absolute;\n}\n.connect-modal .wrap {\n  padding: 16px 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL19jb25uZWN0LW1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFSiIsImZpbGUiOiJfY29ubmVjdC1tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbm5lY3QtbW9kYWwgICB7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XG4gIC5tb2RhbC13cmFwcGVyIHtcbiAgICAtLWhlaWdodDogMzAlO1xuICAgIC0td2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLndyYXAge1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "jouL":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/chat/chat.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ng-container *ngIf=\"hubConnected; else unconnected\"> -->\n<ion-header>\n  <!-- <ion-toolbar>\n      <div class=\"chatting-btns\">\n        <ion-title>{{'chat.title' | translate}}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"disconnect()\">{{'chat.disconnect' | translate}}</ion-button>\n          <ion-button slot=\"end\" fill=\"clear\" (click)=\"openDrawer()\">\n            <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </div>\n      <div>\n        <ion-buttons slot=\"end\" class=\"func-btns\">\n          <ion-button (click)=\"getParticipants()\">{{'chat.participants_list' | translate}}</ion-button>\n          <ion-button (click)=\"createChannel()\">{{'chat.channel_create' | translate}}</ion-button>\n          <ion-button (click)=\"showChannelList()\">{{'chat.channel_list' | translate}}</ion-button>\n          <ion-button (click)=\"leaveChannel()\">{{'chat.get_out_of_chatting_room' | translate}}</ion-button>\n        </ion-buttons>\n      </div>\n    </ion-toolbar> -->\n</ion-header>\n\n<!-- 채팅방 Drawer -->\n<ion-menu side=\"end\" menuId=\"custom\" contentId=\"chatmessage\" class=\"my-custom-menu\">\n  <ion-content>\n    <ion-list>\n      <ion-item>\n        <ion-avatar>\n          <img src=\"../../../assets/person_add.svg\" />\n        </ion-avatar>\n        <ion-label>{{'chat.add_partner' | translate}}</ion-label>\n      </ion-item>\n      <ion-item *ngFor=\"let user of userList\">\n        {{user.email}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-router-outlet id=\"chatmessage\"> </ion-router-outlet>\n<ion-content class=\"bg\">\n  <div class=\"chat-container\">\n    <div class=\"msg-container\">\n      <ng-container *ngFor=\"let message of messages\">\n        <ng-container [ngSwitch]=\"message.messageType\">\n          <ng-container *ngSwitchCase=\"'TEXT'\">\n            <app-msg-text [message]=\"message\"></app-msg-text>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'EMERGENCY'\">\n            <app-msg-emergency [message]=\"message\"></app-msg-emergency>\n          </ng-container>\n          <ng-container *ngSwitchDefault> </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"rpe-shortcut\">\n    <ul>\n      <li>\n        <button class=\"rpe-btn\" style=\"background-color: #b3c3f4;\" (click)=\"sendEmergency(8)\">편해요. (RPE: 8)</button>\n      </li>\n      <li>\n        <button class=\"rpe-btn\" style=\"background-color: #fddfc7;\" (click)=\"sendEmergency(12)\">보통이에요. (RPE: 12)</button>\n      </li>\n      <li>\n        <button class=\"rpe-btn\" style=\"background-color: #f6700d;\" (click)=\"sendEmergency(15)\">힘들어요. (RPE: 15)</button>\n      </li>\n      <li>\n        <button class=\"rpe-btn\" style=\"background-color: #f11312;\" (click)=\"sendEmergency(19)\">매우 힘들어요. (RPE: 19)</button>\n      </li>\n    </ul>\n  </div>\n  <div class=\"chat-controls\" [ngClass]=\"{'active': showOptions}\">\n    <ion-row class=\"option ion-text-center\">\n      <ion-col size=\"4\">\n        <ion-icon name=\"camera\"></ion-icon>{{'chat.camera' | translate}}\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-icon name=\"image\"></ion-icon>{{'chat.gallery' | translate}}\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-icon name=\"people\"></ion-icon>{{'chat.contact' | translate}}\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-icon name=\"headset\"></ion-icon> {{'chat.audio' | translate}}\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-icon name=\"pin\"></ion-icon>{{'chat.location' | translate}}\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-icon name=\"document\"></ion-icon>\n        {{'chat.document' | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"bg-white\" style=\"display: flex;  align-items: center;\">\n      <ion-col size=\"11\" class=\"ion-no-padding\">\n        <ion-list lines=\"none\" class=\"ion-no-padding\">\n          <ion-item>\n            <ion-input id=\"chat-input\" placeholder=\"메시지를 입력해주세요.\" type=\"text\" (focus)=\"showOptionsToggle(false)\">\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-no-padding\">\n        <p class=\"ion-text-center icon-controls\">\n          <ion-icon mode=\"ios\" name=\"send\" class=\"text-primary\" (click)=\"sendMessage()\"></ion-icon>\n          <!-- <ion-icon mode=\"ios\" name=\"add-circle\" *ngIf=\"!showOptions\" (click)=\"showOptionsToggle()\"></ion-icon>\n          <ion-icon mode=\"ios\" name=\"close-circle\" *ngIf=\"showOptions\" (click)=\"showOptionsToggle()\"></ion-icon> -->\n        </p>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<!-- </ng-container>\n\n<ng-template #unconnected>\n  <ion-button (click)=\"connectHubb()\">채팅 연결</ion-button>\n</ng-template>\n -->\n");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lRKa":
/*!******************************************!*\
  !*** ./src/services/language.service.ts ***!
  \******************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_constants_storage_key__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/storage-key */ "/z6A");
/* harmony import */ var src_constants_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/common */ "hugj");








//import { LANG_EN, LANG_KO } from 'src/constants/common';
let LanguageService = class LanguageService {
    constructor(translateService, storage) {
        this.translateService = translateService;
        this.storage = storage;
        this.language$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.translate = this.translateService;
    }
    setInitState() {
        this.translateService.addLangs([src_constants_common__WEBPACK_IMPORTED_MODULE_7__["LANG_EN"], src_constants_common__WEBPACK_IMPORTED_MODULE_7__["LANG_KO"]]);
    }
    setLang(lang) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translateService.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((result) => {
                this.language$.next(result);
            });
            this.translateService.use(lang);
            yield this.storage.set(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_6__["LANG"], lang);
        });
    }
    getAndSetLastSetting() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const lastSetting = yield this.getLangLastSetting();
            if (lastSetting) {
                yield this.setLang(lastSetting);
            }
            else {
                yield this.setLang(src_constants_common__WEBPACK_IMPORTED_MODULE_7__["LANG_KO"]);
            }
        });
    }
    getLangLastSetting() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.storage.get(src_constants_storage_key__WEBPACK_IMPORTED_MODULE_6__["LANG"]);
        });
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__["Storage"] }
];
LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], LanguageService);



/***/ }),

/***/ "lu8C":
/*!*******************************************************!*\
  !*** ./src/components/message/text/text.component.ts ***!
  \*******************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_text_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./text.component.html */ "Hm0V");
/* harmony import */ var _text_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text.component.scss */ "EVXJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TextComponent = class TextComponent {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const chat = document.querySelector('.chat-container');
        const msg = document.querySelector('.msg-container');
        chat.scrollTop = msg.scrollHeight + this.element.nativeElement.offsetHeight;
    }
};
TextComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] }
];
TextComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-msg-text',
        template: _raw_loader_text_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_text_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TextComponent);



/***/ }),

/***/ "m/Pv":
/*!*****************************************************************!*\
  !*** ./src/components/progress-bar/progress-bar.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress {\n  height: 30px;\n  margin: 20px;\n  background-image: linear-gradient(#ccc, #ccc), linear-gradient(to right, red, yellow);\n  background-size: var(--ratio, 50%) 100%, 100% 100%;\n  background-position: right, left;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUZBQ0M7RUFFRCxrREFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUFERiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDozMHB4O1xyXG4gIG1hcmdpbjoyMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgIGxpbmVhci1ncmFkaWVudCgjY2NjLCNjY2MpLFxyXG4gICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICByZWQgLCB5ZWxsb3cgKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLXJhdGlvLDUwJSkgMTAwJSwgMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0LGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gfVxyXG4iXX0= */");

/***/ }),

/***/ "mVdm":
/*!********************************************************************************!*\
  !*** ./src/components/modals/detail-list-modal/detail-list-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: DetailListModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailListModalComponent", function() { return DetailListModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_list_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-list-modal.component.html */ "QwSV");
/* harmony import */ var _detail_list_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-list-modal.component.scss */ "5Xck");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let DetailListModalComponent = class DetailListModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.title = '';
        this.dataList = [];
        this.isChooseMulti = false;
    }
    ngOnInit() {
    }
    dismissModal(data) {
        var _a;
        this.modalController.dismiss({
            chosenData: this.isChooseMulti ? (_a = this.currValue) === null || _a === void 0 ? void 0 : _a.sort((a, b) => a.id - b.id) : data
        });
    }
    checkIsChecked(text) {
        if (this.currValue.length > 0) {
            return this.currValue.map(data => data.text).includes(text);
        }
        return false;
    }
    checkItem(data) {
        if (this.checkIsChecked(data.text)) {
            const idx = this.currValue.map(res => res.text).indexOf(data.text);
            this.currValue.splice(idx, 1);
        }
        else {
            this.currValue.push(data);
        }
    }
};
DetailListModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
DetailListModalComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dataList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    currValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    isChooseMulti: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
DetailListModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-detail-list-modal',
        template: _raw_loader_detail_list_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_list_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailListModalComponent);



/***/ }),

/***/ "oGGJ":
/*!************************************************!*\
  !*** ./src/interceptors/loader.interceptor.ts ***!
  \************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading.service */ "qozY");





let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.loaderService.create())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((loading) => loading.present()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((loading) => next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            loading.dismiss();
        }))));
    }
};
LoaderInterceptor.ctorParameters = () => [
    { type: src_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
LoaderInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoaderInterceptor);



/***/ }),

/***/ "qozY":
/*!*****************************************!*\
  !*** ./src/services/loading.service.ts ***!
  \*****************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    create(msg = 'Please wait...') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: msg,
            });
            return this.loading;
        });
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.present();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "rBcA":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/hr-detail/hr-detail.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"arrow-back\" style=\"width: 24px; height: 48px;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'hr_detail.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"chart\" id=\"recordDetail\" style=\"display: block; height: 100%; width: auto;\"></div>\n</ion-content>\n");

/***/ }),

/***/ "s42a":
/*!**************************************************************************!*\
  !*** ./src/components/modals/devices-modal/devices-modal.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2VzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "uKVS":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/devices-modal/devices-modal.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <h3>{{title}}</h3>\n</ion-header>\n\n<ion-content #modalContent>\n  <div class=\"wrap\">\n    <ion-radio-group (ionChange)=\"radioGroupChange($event)\">\n      <ion-item *ngFor=\"let device of devicesList\">\n        <ion-label>{{device.name}}</ion-label>\n        <ion-radio slot=\"start\" value={{device.id}}  ></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ion-content>\n\n<ion-footer #modalFooter>\n  <ion-toolbar>\n    <ion-button slot=\"start\" (click)=\"dismissModal(false)\">{{'cancel' | translate}}</ion-button>\n    <ion-button slot=\"end\" (click)=\"dismissModal(true)\" [disabled]=\"!deviceId\">{{'finish_setting' | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "vWRY":
/*!******************************************!*\
  !*** ./src/components/chat/chat.page.ts ***!
  \******************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.page.html */ "jouL");
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.page.scss */ "3uju");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/auth.service */ "LLt/");
/* harmony import */ var src_services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/chat.service */ "zfEa");
/* harmony import */ var src_services_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/logger.service */ "O0ov");








let ChatPage = class ChatPage {
    constructor(chatSvc, menuCtrl, authSvc, logger) {
        this.chatSvc = chatSvc;
        this.menuCtrl = menuCtrl;
        this.authSvc = authSvc;
        this.logger = logger;
        this.messages = [];
        this.sendCurrentRpeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.participants = [];
        this.userList = [];
        this.hubConnected = false;
        if (!this.hubConnected) {
            //  this.chatSvc.readyChat();
            this.logger.log('reserv id', this.reservId);
            this.logger.log('channelId', this.channelId);
            this.chatSvc.connection$.subscribe((connected) => {
                this.hubConnected = connected;
            });
            this.chatSvc.newOnlineUser$.subscribe((res) => {
                this.logger.log(res);
            });
            this.chatSvc.join$.subscribe((channelId) => {
                this.channelId = channelId;
            });
            this.chatSvc.connectionError$.subscribe((reason) => {
                this.hubConnected = false;
                this.logger.error('connection error', reason);
            });
            this.chatSvc.createdChannel$.subscribe((channel) => {
                this.logger.log('created channel', channel);
            });
            this.chatSvc.getChannelList$.subscribe((channelList) => {
                this.logger.log('get channel list', channelList);
            });
            this.chatSvc.recvMessage$.subscribe((message) => {
                this.messages.push(message);
            });
            this.chatSvc.userList$.subscribe((userList) => {
                this.userList = userList;
            });
            this.chatSvc.newOnlineUser$.subscribe((user) => {
                const newParticipants = {};
                this.participants.push(newParticipants);
            });
            this.chatSvc.leave$.subscribe((leave) => { });
            this.chatSvc.getParticipants$.subscribe((participants) => { });
        }
    }
    inputFocus(target) {
        if (target.id === 'chat-input') {
            console.log(target);
        }
    }
    ngOnChanges(changes) {
        var _a;
        if ((_a = changes === null || changes === void 0 ? void 0 : changes.rpeMsg) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.messages.push(changes.rpeMsg.currentValue);
        }
    }
    ngOnInit() {
        this.logger.log('reservId ? ', this.reservId);
        this.join();
    }
    join() {
        this.joinAsync(this.reservId);
    }
    sendMessage() {
        const chatInput = document.getElementById('chat-input');
        const message = chatInput.value;
        const msg = {
            messageType: 'TEXT',
            messageText: message,
            sendDateTime: new Date(),
            messageStatus: 'send',
            userEmail: this.authSvc.username,
            channelId: this.channelId,
        };
        this.logger.log('msg', msg);
        this.chatSvc.sendMessage(msg);
        this.messages.push(msg);
        chatInput.value = ''; // clear input field
    }
    sendEmergency(rpe) {
        this.sendCurrentRpeEvent.emit(rpe);
    }
    openDrawer() {
        //사용자 초대 및 참여자 리스트 drawer
        this.menuCtrl.enable(true, 'custom');
        this.menuCtrl.open('custom');
    }
    showOptionsToggle(isShow = true) {
        if (!isShow) {
            this.showOptions = false;
        }
        this.showOptions = !this.showOptions;
    }
    joinAsync(reservId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.hubConnected) {
                this.authSvc.extendToken().subscribe((isRefresh) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (isRefresh) {
                        yield this.chatSvc
                            .startAsync()
                            .then(() => {
                            this.logger.log('실시간 서버에 연결하였습니다.');
                            this.chatSvc
                                .joinAsync(reservId)
                                .then(() => {
                                this.logger.log('진료 모임에 참석하였습니다.');
                            })
                                .catch((err) => {
                                this.logger.error('진료모임 참석하는 과정에 실패하였습니다.', err);
                            });
                        })
                            .catch((err) => {
                            this.logger.error('실시간 서버에 연결하는 데에 실패하였습니다.', err);
                        });
                    }
                }));
            }
        });
    }
};
ChatPage.ctorParameters = () => [
    { type: src_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_services_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] }
];
ChatPage.propDecorators = {
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    sendCurrentRpeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    reservId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    channelId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    rpeMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    inputFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['focus', ['$event.target'],] }]
};
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatPage);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/auth.guard */ "AcVy");




const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'menu',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~ble-test-ble-test-module~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then((m) => m.HomePageModule),
        canActivate: [src_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then((m) => m.LoginPageModule),
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then((m) => m.RegisterPageModule),
    },
    {
        path: 'ble-test',
        loadChildren: () => Promise.all(/*! import() | ble-test-ble-test-module */[__webpack_require__.e("default~ble-test-ble-test-module~home-home-module"), __webpack_require__.e("ble-test-ble-test-module")]).then(__webpack_require__.bind(null, /*! ./ble-test/ble-test.module */ "3fn3")).then((m) => m.BleTestPageModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() | forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "vujI":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/modals/rpe/rpe.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #modalContent>\n  <div class=\"wrap\">\n    <h3>운동을 모두 받아왔습니다.</h3>\n    <h3>RPE 값을 입력해주세요.</h3>\n    <div class=\"list\">\n      <div class=\"level\" style=\"background-color: #dfe4fa;\">\n        <div class=\"level-number\">\n          <p>6</p>\n          <p>7</p>\n          <p>8</p>\n        </div>\n        <div class=\"level-content\">\n          <p>매우 매우 편하다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #b3c3f4;\">\n        <div class=\"level-number\">\n          <p>9</p>\n          <p>10</p>\n        </div>\n        <div class=\"level-content\">\n          <p>매우 편하다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #87a1eb;\">\n        <div class=\"level-number\">\n          <p>11</p>\n          <p>12</p>\n        </div>\n        <div class=\"level-content\">\n          <p>편하다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #fddfc7;\">\n        <div class=\"level-number\">\n          <p>13</p>\n          <p>14</p>\n        </div>\n        <div class=\"level-content\">\n          <p>약간 힘들다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #ffa360;\">\n        <div class=\"level-number\">\n          <p>15</p>\n          <p>16</p>\n        </div>\n        <div class=\"level-content\">\n          <p>힘들다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #f6700d;\">\n        <div class=\"level-number\">\n          <p>17</p>\n          <p>18</p>\n        </div>\n        <div class=\"level-content\">\n          <p>매우 힘들다</p>\n        </div>\n      </div>\n      <div class=\"level\" style=\"background-color: #f11312;\">\n        <div class=\"level-number\">\n          <p>19</p>\n          <p>20</p>\n        </div>\n        <div class=\"level-content\">\n          <p>매우 매우 힘들다</p>\n        </div>\n      </div>\n    </div>\n    <select name=\"rpe\" id=\"rpe\" class=\"rpe\" (change)=\"selectOption($event)\">\n      <option value=\"0\">{{'select_one' | translate}}</option>\n      <option value=\"6\" style=\"background-color: #dfe4fa;\">6</option>\n      <option value=\"7\" style=\"background-color: #dfe4fa;\">7</option>\n      <option value=\"8\" style=\"background-color: #dfe4fa;\">8</option>\n      <option value=\"9\" style=\"background-color: #b3c3f4;\">9</option>\n      <option value=\"10\" style=\"background-color: #b3c3f4;\">10</option>\n      <option value=\"11\" style=\"background-color: #87a1eb;\">11</option>\n      <option value=\"12\" style=\"background-color: #87a1eb;\">12</option>\n      <option value=\"13\" style=\"background-color: #fddfc7;\">13</option>\n      <option value=\"14\" style=\"background-color: #fddfc7;\">14</option>\n      <option value=\"15\" style=\"background-color: #ffa360;\">15</option>\n      <option value=\"16\" style=\"background-color: #ffa360;\">16</option>\n      <option value=\"17\" style=\"background-color: #f6700d;\">17</option>\n      <option value=\"18\" style=\"background-color: #f6700d;\">18</option>\n      <option value=\"19\" style=\"background-color: #f11312;\">19</option>\n      <option value=\"20\" style=\"background-color: #f11312;\">20</option>\n    </select>\n  </div>\n</ion-content>\n\n<ion-footer #modalFooter>\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"dismissModal()\" [disabled]=\"this.rpeValue === 0\">{{'finish_setting' |\n      translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "w2d2":
/*!******************************************************************!*\
  !*** ./src/components/modals/hr-detail/hr-detail.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoci1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "xOzl":
/*!*********************************************!*\
  !*** ./src/components/components.module.ts ***!
  \*********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/progress-bar/progress-bar.component */ "b+FR");
/* harmony import */ var src_components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/modals/rpe/rpe.component */ "c49u");
/* harmony import */ var _modals_hr_detail_hr_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/hr-detail/hr-detail.component */ "6od+");
/* harmony import */ var _modals_get_data_get_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/get-data/get-data.component */ "B7cR");
/* harmony import */ var src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/modals/devices-modal/devices-modal.component */ "KZRF");
/* harmony import */ var src_components_modals_detail_list_modal_detail_list_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/modals/detail-list-modal/detail-list-modal.component */ "mVdm");
/* harmony import */ var src_components_modals_connect_modal_connect_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/modals/connect-modal/connect-modal.component */ "87Hk");
/* harmony import */ var src_components_message_text_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/message/text/text.component */ "lu8C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chat_chat_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat/chat.page */ "vWRY");
/* harmony import */ var _message_emergency_emergency_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./message/emergency/emergency.component */ "8DKx");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ "TEn/");


















const createTranslateLoader = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, './assets/i18n/components/', '.json');
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _chat_chat_page__WEBPACK_IMPORTED_MODULE_11__["ChatPage"],
            _message_emergency_emergency_component__WEBPACK_IMPORTED_MODULE_12__["EmergencyComponent"],
            src_components_message_text_text_component__WEBPACK_IMPORTED_MODULE_8__["TextComponent"],
            src_components_modals_connect_modal_connect_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConnectModalComponent"],
            src_components_modals_detail_list_modal_detail_list_modal_component__WEBPACK_IMPORTED_MODULE_6__["DetailListModalComponent"],
            src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_5__["DevicesModalComponent"],
            _modals_get_data_get_data_component__WEBPACK_IMPORTED_MODULE_4__["GetDataComponent"],
            _modals_hr_detail_hr_detail_component__WEBPACK_IMPORTED_MODULE_3__["HrDetailComponent"],
            src_components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_2__["RpeComponent"],
            src_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__["ProgressBarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
                },
                isolate: true
            }),
        ],
        exports: [
            _chat_chat_page__WEBPACK_IMPORTED_MODULE_11__["ChatPage"],
            _message_emergency_emergency_component__WEBPACK_IMPORTED_MODULE_12__["EmergencyComponent"],
            src_components_message_text_text_component__WEBPACK_IMPORTED_MODULE_8__["TextComponent"],
            src_components_modals_connect_modal_connect_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConnectModalComponent"],
            src_components_modals_detail_list_modal_detail_list_modal_component__WEBPACK_IMPORTED_MODULE_6__["DetailListModalComponent"],
            src_components_modals_devices_modal_devices_modal_component__WEBPACK_IMPORTED_MODULE_5__["DevicesModalComponent"],
            _modals_get_data_get_data_component__WEBPACK_IMPORTED_MODULE_4__["GetDataComponent"],
            _modals_hr_detail_hr_detail_component__WEBPACK_IMPORTED_MODULE_3__["HrDetailComponent"],
            src_components_modals_rpe_rpe_component__WEBPACK_IMPORTED_MODULE_2__["RpeComponent"],
            src_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__["ProgressBarComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




function getBaseUrl() {
    console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiDomain);
    return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiDomain;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zfEa":
/*!**************************************!*\
  !*** ./src/services/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService, ChatMethodName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMethodName", function() { return ChatMethodName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "LLt/");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger.service */ "O0ov");







let ChatService = class ChatService {
    constructor(authSvc, logger) {
        this.authSvc = authSvc;
        this.logger = logger;
        this.connId = '';
        this.chatApiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rehabHubUrl}`;
        this.handShakeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.connectionEstablished = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.joinSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.recvMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newOnlineUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.leave = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userListSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.createdChannelSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getChannelListSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.inviteUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getParticipantsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.connectionError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.recvStopSignalMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.connected = false;
        //Observable
        this.connection$ = this.connectionEstablished.asObservable();
        this.recvMessage$ = this.recvMessage.asObservable();
        this.newOnlineUser$ = this.newOnlineUser.asObservable();
        this.leave$ = this.leave.asObservable();
        this.userList$ = this.userListSource.asObservable();
        this.createdChannel$ = this.createdChannelSource.asObservable();
        this.getChannelList$ = this.getChannelListSource.asObservable();
        this.inviteUser$ = this.inviteUserSource.asObservable();
        this.getParticipants$ = this.getParticipantsSource.asObservable();
        this.connectionError$ = this.connectionError.asObservable();
        this.recvStopSignalMessage$ = this.recvStopSignalMessage.asObservable();
        this.handShake$ = this.handShakeSubject.asObservable();
        this.join$ = this.joinSubject.asObservable();
    }
    startAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.logger.log('Hub connecting ...');
            this.logger.log('currentToken - ', this.authSvc.token);
            this.hubConn = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]()
                .withUrl(this.chatApiUrl, {
                accessTokenFactory: () => this.authSvc.token,
                skipNegotiation: true,
                transport: _microsoft_signalr__WEBPACK_IMPORTED_MODULE_4__["HttpTransportType"].WebSockets,
            })
                .withAutomaticReconnect()
                .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_4__["LogLevel"].Trace)
                .build();
            yield this.hubStartAsync();
            //event listener
            this.hubConn.onclose((error) => {
                this.logger.log('connection closed ... error - ', error);
                this.connectionError.next(error);
                this.connected = false;
                this.currentState = this.hubConn.state;
            });
            this.hubConn.onreconnecting((error) => {
                this.connectionError.next(error);
                this.connected = false;
                this.currentState = this.hubConn.state;
            });
            this.hubConn.onreconnected((connId) => {
                this.connected = true;
                this.connectionEstablished.next(this.connected);
                this.connId = connId;
                this.currentState = this.hubConn.state;
            });
            this.hubConn.on(ChatMethodName.newOnlineUser, (user) => {
                this.logger.log('fired join user', user);
                this.newOnlineUser.next(user);
            });
            this.hubConn.on(ChatMethodName.handShake, (channelId, userEmail) => {
                this.handShakeSubject.next(userEmail);
            });
            this.hubConn.on('Join', (userInfo, channelId) => {
                this.joinSubject.next(channelId);
                this.logger.log('join channel -', channelId, 'user info - ', userInfo);
            });
            this.hubConn.on(ChatMethodName.channelCreated, (user, channel) => {
                this.logger.log('created new channel', channel);
                this.createdChannelSource.next(channel);
            });
            this.hubConn.on(ChatMethodName.channelList, (channelList) => {
                this.logger.log('get channel list', channelList);
                this.getChannelListSource.next(channelList);
            });
            this.hubConn.on(ChatMethodName.messageReceived, (message) => {
                this.logger.log('message received', message);
                this.recvMessage.next(message);
            });
            this.hubConn.on(ChatMethodName.isExerciseStopReceived, (signal) => {
                this.logger.log('isExerciseStop received', signal);
                this.recvStopSignalMessage.next(signal);
            });
            this.hubConn.on(ChatMethodName.left, (user) => {
                this.logger.log('ssss');
                this.leave.next(user);
            });
            // this.hubConn.on(ChatMethodName.heartRateReceived, (message: IMessage) => {
            //   this.logger.log('heart rate received', message);
            //   this.recvMessage.next(message);
            // });
            // this.hubConn.on(ChatMethodName.rpeReceived, (message: IMessage) => {
            //   this.logger.log('rpe received', message);
            //   this.recvMessage.next(message);
            // });
            this.hubConn.on(ChatMethodName.userList, (users) => {
                this.logger.log('get user list', users);
                this.userListSource.next(users);
            });
            this.hubConn.on(ChatMethodName.participantsList, (participants) => {
                this.logger.log('get participants list', participants);
                this.getParticipantsSource.next(participants);
            });
        });
    }
    stopAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.hubConn.stop().then(() => this.removeAllEvents.bind(this));
        });
    }
    joinAsync(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.logger.log('join Async', id);
            return this.hubConn
                .invoke('join', id)
                .then((res) => {
                this.logger.log('Join', res);
            })
                .catch((reason) => {
                this.logger.error(`${ChatMethodName.join} event error`, reason);
                throw reason;
            });
        });
    }
    leaveAsync(channelId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.hubConn
                .invoke(ChatMethodName.leave, channelId)
                .catch((reason) => {
                this.logger.error(`${ChatMethodName.leave} event error`, reason);
            });
        });
    }
    inviteUser(channelId, user) {
        const participant = {
            channelId,
            joinDate: new Date(),
            userEmail: user.email,
        };
        this.hubConn.invoke(ChatMethodName.invite, participant).catch((reason) => {
            this.logger.error(`${ChatMethodName.invite} event error`, reason);
            throw reason;
        });
    }
    getUserList() {
        this.hubConn.invoke(ChatMethodName.users).catch((reason) => {
            this.logger.error(`${ChatMethodName.users} event error`, reason);
            throw reason;
        });
    }
    getChannelList(email) {
        this.hubConn.invoke(ChatMethodName.channels, email).catch((reason) => {
            this.logger.error(`${ChatMethodName.channels} event error`, reason);
            throw reason;
        });
    }
    handShake(channelId) {
        this.hubConn
            .invoke(ChatMethodName.handShake, channelId)
            .then(() => this.logger.log('message sent'))
            .catch((err) => {
            throw err;
        });
    }
    sendMessage(msg) {
        this.hubConn.invoke(ChatMethodName.send, msg).catch((reason) => {
            this.logger.error(`${ChatMethodName.send} event error`, reason, msg);
        });
    }
    sendEmergency(msg) {
        this.hubConn
            .invoke(ChatMethodName.sendEmergency, msg)
            .then(() => {
            this.logger.log('message sent');
        })
            .catch((err) => {
            throw err;
        });
    }
    sendHeartRate(msg) {
        this.hubConn
            .invoke(ChatMethodName.sendHeartRate, msg)
            .then(() => {
            this.logger.log('message sent');
        })
            .catch((err) => {
            this.logger.error(err);
            throw err;
        });
    }
    sendExerciseStep(msg) {
        this.hubConn
            .invoke(ChatMethodName.sendExerciseStep, msg)
            .then(() => {
            this.logger.log('message sent');
        })
            .catch((err) => {
            this.logger.error(err);
            throw err;
        });
    }
    sendStopSignal(signal) {
        this.hubConn
            .invoke(ChatMethodName.sendStopSignal, signal)
            .then(() => {
            this.logger.log('stop signal sent');
        })
            .catch((err) => {
            this.logger.error(err);
            throw err;
        });
    }
    echoTest(msg) { }
    getParticipants(channelId) { }
    hubStartAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.hubConn
                .start()
                .then(() => {
                this.logger.log('Current state -> ', this.hubConn.state);
                this.connected = this.hubConn.state == _microsoft_signalr__WEBPACK_IMPORTED_MODULE_4__["HubConnectionState"].Connected;
                if (this.connected) {
                    this.connectionEstablished.next(this.connected);
                }
                this.logger.log('Hub connected!');
            })
                .catch((reason) => {
                this.connected = false;
                this.logger.error('Hub connection error', reason);
                this.connectionError.next(reason);
            })
                .finally(() => (this.currentState = this.hubConn.state));
        });
    }
    removeAllEvents() {
        for (const method in ChatMethodName) {
            this.hubConn.off(method);
            this.logger.debug(`${method} event removed`);
        }
    }
};
ChatService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ChatService);

var ChatMethodName;
(function (ChatMethodName) {
    /**
     * firing event when joined new user
     */
    ChatMethodName["newOnlineUser"] = "NewOnlineUser";
    /**
     * firing event when invoked invite message
     */
    ChatMethodName["invite"] = "Invite";
    /**
     * firing event when invoked create channel
     */
    ChatMethodName["channelCreated"] = "CreatedChannel";
    /**
     * firing event when invoked channels
     */
    ChatMethodName["channelList"] = "GetChannelList";
    /**
     * firing event when sent message by other users
     */
    ChatMethodName["messageReceived"] = "ReceiveMessage";
    /**
     * firing event when left another user in channel
     */
    ChatMethodName["left"] = "Leave";
    ChatMethodName["handShake"] = "HandShake";
    /**
     * firing event when sent heartRate data by other users
     */
    ChatMethodName["heartRateReceived"] = "ReceiveHeartRate";
    /**
     * firing event when sent rpe data by other users
     */
    ChatMethodName["rpeReceived"] = "ReceiveRPE";
    /**
     * firing event when invoked users
     */
    ChatMethodName["userList"] = "GetUserList";
    /**
     * firing event when invoked participants
     */
    ChatMethodName["participantsList"] = "GetParticipants";
    /**
     * Invoke Create new channel
     */
    ChatMethodName["createChannel"] = "createChannel";
    /**
     * Invoke join channel
     */
    ChatMethodName["join"] = "join";
    /**
     * Invoke leave channel
     */
    ChatMethodName["leave"] = "leave";
    /**
     * Invoke get user list
     */
    ChatMethodName["users"] = "getUserList";
    /**
     * Invoke get channel list
     */
    ChatMethodName["channels"] = "getChannelList";
    /**
     * Invoke message send
     */
    ChatMethodName["send"] = "sendMessage";
    /**
     * Invoke heartrate message
     */
    ChatMethodName["sendHeartRate"] = "sendHeartRate";
    /**
     * send emergency
     */
    ChatMethodName["sendEmergency"] = "sendEmergency";
    /**
     * send exercise step
     */
    ChatMethodName["sendExerciseStep"] = "sendExerciseStep";
    /**
     * send exercise stop signal
     */
    ChatMethodName["sendStopSignal"] = "sendStopSignal";
    /**
     * Invoke echo test
     */
    ChatMethodName["test"] = "echoTest";
    /**
     * Invoke get channel's participants
     */
    ChatMethodName["participants"] = "getParticipants";
    ChatMethodName["emergencyReceived"] = "ReceiveEmergency";
    ChatMethodName["exerciseStepReceived"] = "ReceiveExerciseStep";
    ChatMethodName["isExerciseStopReceived"] = "ReceiveStopSignal";
})(ChatMethodName || (ChatMethodName = {}));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map