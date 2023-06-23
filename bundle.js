/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header-bg.jpg */ "./src/img/header-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lux-circle-dragon-white.png */ "./src/img/lux-circle-dragon-white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/circle-plus.svg */ "./src/img/circle-plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/edit.svg */ "./src/img/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/trash.svg */ "./src/img/trash.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/folder-open-white.svg */ "./src/img/folder-open-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/folder.svg */ "./src/img/folder.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

:root {
  --main-bg-clr: #ffffff;
  --text-main-clr: black;
  --text-header-clr: white;
  --text-secondary-clr: #808080;
  --purple: #cc00ff;
  --blue: #00c3ff;
  --teal: #00ffc8;
  --light-purple: #f9e3ff;
  --light-blue: #c3f1ff;
  --light-teal: #d4ebe6;
  --light-green: #cdffe2;
  --new-task-bg: #584a85;
  --light-new-task-bg: #e2daff;
  --dark-bg: #27203f;
  --dark-teal: #47b69a;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 600px;
  grid-template-rows: 250px 500px 50px;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.2);
}

/* HEADER STYLE ------------------------------------------------ */

.header-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  color: var(--text-header-clr);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header-left {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  padding: 20px;
}

.header-left::after {
  content: "";
  position: absolute;
  height: 4px;
  width: 400px;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(
    to right,
    var(--purple),
    var(--blue),
    var(--teal)
  );
}

.logo {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  width: 50px;
}

.welcome-greeting {
  font-size: 1.2rem;
  line-height: 0.6rem;
  text-shadow: 1px 1px rgba(0, 0, 0, 1);
}

.welcome-name {
  font-size: 2rem;
  text-shadow: 1px 1px rgba(0, 0, 0, 1);
}

.header-date {
  padding: 4px;
  color: var(--text-header-clr);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
  border-radius: 10px;
}

.header-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.task-amount {
  font-size: 2rem;
  font-weight: bolder;
}

/* MAIN STYLE ------------------------------------------------ */

.main-wrapper {
  background-color: var(--main-bg-clr);
  padding: 20px;
  box-shadow: inset 0px 5px 5px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: linear-gradient(
    to bottom,
    var(--dark-bg),
    var(--new-task-bg)
  );
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--dark-bg);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--dark-bg);
}

/* TASKS PAGE STYLE ------------------------------------------------ */

.tasks-title {
  text-align: center;
  font-weight: 100;
  font-size: 1rem;
  margin-bottom: 20px;
  color: var(--text-main-clr);
}

/* CREATE NEW FOLDER STYLE ------------------------------------------------ */

.new-folder-div {
  margin-bottom: 20px;
}

.new-folder-div > form {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 10px;
}

.new-folder-input {
  outline: none;
  border: 1px solid var(--dark-bg);
  padding-left: 10px;
}

.new-folder-input:focus {
  background-color: var(--light-purple);
  border: 1px solid var(--dark-bg);
}

.new-folder-submit {
  grid-column: 2;
  background-color: var(--dark-bg);
  color: var(--text-header-clr);
  border: none;
  height: 2rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
}

.new-folder-submit:hover {
  color: var(--teal);
  box-shadow: 0px 0px 5px var(--teal);
}

/* FOLDER STYLE ------------------------------------------------ */

.folder-list-title {
  font-size: 1rem;
  margin-bottom: 20px;
}

.folder-title {
  font-size: 1rem;
  margin-left: 50px;
}

.add-task {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  justify-self: center;
  width: 20px;
  height: 20px;
  transition: 0.2s;
}

.edit-folder {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  justify-self: center;
  width: 20px;
  height: 20px;
  transition: 0.2s;
}

.delete-folder {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  justify-self: center;
  width: 20px;
  height: 20px;
  transition: 0.2s;
}

.add-task:hover,
.edit-folder:hover,
.delete-folder:hover {
  transform: scale(1.2);
}

/* COLLAPSIBLE STYLE ------------------------------------------------ */

.collapsible {
  display: grid;
  grid-template-columns: 1fr repeat(3, 50px);
  align-items: center;
  position: relative;
  width: 100%;
  border: none;
  height: 50px;
  margin-top: 10px;
  font-weight: bolder;
  color: var(--text-header-clr);
  background-color: var(--new-task-bg);
  transition: 0.4s;
}

.collapsible::before {
  position: absolute;
  content: "";
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 30px;
  width: 30px;
  top: 10px;
  left: 10px;
  z-index: 1;
}

.collapsible::after {
  position: absolute;
  content: "";
  border-right: 2px solid var(--main-bg-clr);
  height: 50px;
  top: 0px;
  left: 390px;
  z-index: 1;
}

.collapsible:hover {
  color: var(--teal);
  box-shadow: 0px 0px 5px var(--teal);
}

.active {
  background-color: var(--dark-teal);
  color: black;
}

.active::before {
  position: absolute;
  content: "";
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 30px;
  width: 30px;
  top: 10px;
  left: 10px;
  z-index: 1;
}

.active:hover {
  color: var(--new-task-bg);
  box-shadow: 0px 0px 5px var(--new-task-bg);
}

.grow {
  -moz-transition: height 0.5s;
  -ms-transition: height 0.5s;
  -o-transition: height 0.5s;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  height: 0;
  overflow: hidden;
}

.content {
  padding: 20px;
  background-color: #eeeeee;
}

/* EDIT MODAL STYLE ------------------------------------------------ */

.modal {
  background-color: var(--main-bg-clr);
  border-top: 4px solid var(--new-task-bg);
  border-bottom: 4px solid var(--new-task-bg);
  border-left: 0;
  border-right: 0;
  padding: 20px;
  margin: 300px auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
}

.modal::backdrop {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

.modal-title {
  text-align: center;
}

.modal-input {
  height: 2rem;
  width: 100%;
  outline: none;
  border: 1px solid var(--dark-bg);
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.button-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}

.modal-submit,
.modal-cancel {
  background-color: var(--dark-bg);
  color: var(--text-header-clr);
  border: none;
  height: 2rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
}

.modal-submit:hover,
.modal-cancel:hover {
  color: var(--teal);
  box-shadow: 0px 0px 5px var(--teal);
}

/* TASK MODAL STYLE ------------------------------------------------ */

.task-modal {
  background-color: var(--main-bg-clr);
  border-top: 4px solid var(--new-task-bg);
  border-bottom: 4px solid var(--new-task-bg);
  border-left: 0;
  border-right: 0;
  padding: 20px;
  margin: 200px auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
}

.task-modal::backdrop {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

.task-modal-title {
  margin-bottom: 20px;
  text-align: center;
}

.task-modal-form {
  display: flex;
  flex-direction: column;
}

.task-input {
  height: 2rem;
  width: 100%;
  outline: none;
  border: 1px solid var(--dark-bg);
  padding-left: 10px;
  margin-bottom: 20px;
}

.task-textarea {
  height: 4rem;
  outline: none;
  border: 1px solid var(--dark-bg);
  padding-left: 10px;
  margin-bottom: 20px;
}

.task-submit,
.task-cancel {
  background-color: var(--dark-bg);
  color: var(--text-header-clr);
  border: none;
  height: 2rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
}

.task-submit:hover,
.task-cancel:hover {
  color: var(--teal);
  box-shadow: 0px 0px 5px var(--teal);
}

/* TASK STYLE ------------------------------------------------ */

.task-wrap {
  display: grid;
  grid-template-columns: 1fr 100px 50px 50px;
  background-color: var(--main-bg-clr);
  padding: 10px 0px 10px 10px;
  margin-bottom: 10px;
  transition: 0.3s;
}

.task-wrap:hover {
  background-color: var(--light-teal);
}

.task-edit {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  justify-self: center;
  width: 16px;
  height: 16px;
  transition: 0.2s;
}

.task-delete {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  justify-self: center;
  width: 16px;
  height: 16px;
  transition: 0.2s;
}

.task-edit:hover,
.task-delete:hover {
  transform: scale(1.2);
}

/* FOOTER STYLE ------------------------------------------------ */

.footer-wrapper {
  background-color: var(--main-bg-clr);
  padding: 10px;
}

.footer-text {
  font-size: 0.8rem;
  color: var(--text-secondary-clr);
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\n:root {\n  --main-bg-clr: #ffffff;\n  --text-main-clr: black;\n  --text-header-clr: white;\n  --text-secondary-clr: #808080;\n  --purple: #cc00ff;\n  --blue: #00c3ff;\n  --teal: #00ffc8;\n  --light-purple: #f9e3ff;\n  --light-blue: #c3f1ff;\n  --light-teal: #d4ebe6;\n  --light-green: #cdffe2;\n  --new-task-bg: #584a85;\n  --light-new-task-bg: #e2daff;\n  --dark-bg: #27203f;\n  --dark-teal: #47b69a;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.content-wrapper {\n  display: grid;\n  grid-template-columns: 600px;\n  grid-template-rows: 250px 500px 50px;\n  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.2);\n}\n\n/* HEADER STYLE ------------------------------------------------ */\n\n.header-wrapper {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  color: var(--text-header-clr);\n  background-image: url(./img/header-bg.jpg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.header-left {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 250px;\n  padding: 20px;\n}\n\n.header-left::after {\n  content: \"\";\n  position: absolute;\n  height: 4px;\n  width: 400px;\n  bottom: 0px;\n  left: 0px;\n  background: linear-gradient(\n    to right,\n    var(--purple),\n    var(--blue),\n    var(--teal)\n  );\n}\n\n.logo {\n  background-image: url(./img/lux-circle-dragon-white.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 50px;\n  width: 50px;\n}\n\n.welcome-greeting {\n  font-size: 1.2rem;\n  line-height: 0.6rem;\n  text-shadow: 1px 1px rgba(0, 0, 0, 1);\n}\n\n.welcome-name {\n  font-size: 2rem;\n  text-shadow: 1px 1px rgba(0, 0, 0, 1);\n}\n\n.header-date {\n  padding: 4px;\n  color: var(--text-header-clr);\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);\n  border-radius: 10px;\n}\n\n.header-right {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.task-amount {\n  font-size: 2rem;\n  font-weight: bolder;\n}\n\n/* MAIN STYLE ------------------------------------------------ */\n\n.main-wrapper {\n  background-color: var(--main-bg-clr);\n  padding: 20px;\n  box-shadow: inset 0px 5px 5px rgba(0, 0, 0, 0.1);\n  overflow-y: scroll;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background-color: linear-gradient(\n    to bottom,\n    var(--dark-bg),\n    var(--new-task-bg)\n  );\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--dark-bg);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: var(--dark-bg);\n}\n\n/* TASKS PAGE STYLE ------------------------------------------------ */\n\n.tasks-title {\n  text-align: center;\n  font-weight: 100;\n  font-size: 1rem;\n  margin-bottom: 20px;\n  color: var(--text-main-clr);\n}\n\n/* CREATE NEW FOLDER STYLE ------------------------------------------------ */\n\n.new-folder-div {\n  margin-bottom: 20px;\n}\n\n.new-folder-div > form {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  column-gap: 10px;\n}\n\n.new-folder-input {\n  outline: none;\n  border: 1px solid var(--dark-bg);\n  padding-left: 10px;\n}\n\n.new-folder-input:focus {\n  background-color: var(--light-purple);\n  border: 1px solid var(--dark-bg);\n}\n\n.new-folder-submit {\n  grid-column: 2;\n  background-color: var(--dark-bg);\n  color: var(--text-header-clr);\n  border: none;\n  height: 2rem;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);\n  transition: 0.3s;\n}\n\n.new-folder-submit:hover {\n  color: var(--teal);\n  box-shadow: 0px 0px 5px var(--teal);\n}\n\n/* FOLDER STYLE ------------------------------------------------ */\n\n.folder-list-title {\n  font-size: 1rem;\n  margin-bottom: 20px;\n}\n\n.folder-title {\n  font-size: 1rem;\n  margin-left: 50px;\n}\n\n.add-task {\n  background-image: url(./img/circle-plus.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  justify-self: center;\n  width: 20px;\n  height: 20px;\n  transition: 0.2s;\n}\n\n.edit-folder {\n  background-image: url(./img/edit.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  justify-self: center;\n  width: 20px;\n  height: 20px;\n  transition: 0.2s;\n}\n\n.delete-folder {\n  background-image: url(./img/trash.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  justify-self: center;\n  width: 20px;\n  height: 20px;\n  transition: 0.2s;\n}\n\n.add-task:hover,\n.edit-folder:hover,\n.delete-folder:hover {\n  transform: scale(1.2);\n}\n\n/* COLLAPSIBLE STYLE ------------------------------------------------ */\n\n.collapsible {\n  display: grid;\n  grid-template-columns: 1fr repeat(3, 50px);\n  align-items: center;\n  position: relative;\n  width: 100%;\n  border: none;\n  height: 50px;\n  margin-top: 10px;\n  font-weight: bolder;\n  color: var(--text-header-clr);\n  background-color: var(--new-task-bg);\n  transition: 0.4s;\n}\n\n.collapsible::before {\n  position: absolute;\n  content: \"\";\n  background-image: url(./img/folder-open-white.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 30px;\n  width: 30px;\n  top: 10px;\n  left: 10px;\n  z-index: 1;\n}\n\n.collapsible::after {\n  position: absolute;\n  content: \"\";\n  border-right: 2px solid var(--main-bg-clr);\n  height: 50px;\n  top: 0px;\n  left: 390px;\n  z-index: 1;\n}\n\n.collapsible:hover {\n  color: var(--teal);\n  box-shadow: 0px 0px 5px var(--teal);\n}\n\n.active {\n  background-color: var(--dark-teal);\n  color: black;\n}\n\n.active::before {\n  position: absolute;\n  content: \"\";\n  background-image: url(./img/folder.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 30px;\n  width: 30px;\n  top: 10px;\n  left: 10px;\n  z-index: 1;\n}\n\n.active:hover {\n  color: var(--new-task-bg);\n  box-shadow: 0px 0px 5px var(--new-task-bg);\n}\n\n.grow {\n  -moz-transition: height 0.5s;\n  -ms-transition: height 0.5s;\n  -o-transition: height 0.5s;\n  -webkit-transition: height 0.5s;\n  transition: height 0.5s;\n  height: 0;\n  overflow: hidden;\n}\n\n.content {\n  padding: 20px;\n  background-color: #eeeeee;\n}\n\n/* EDIT MODAL STYLE ------------------------------------------------ */\n\n.modal {\n  background-color: var(--main-bg-clr);\n  border-top: 4px solid var(--new-task-bg);\n  border-bottom: 4px solid var(--new-task-bg);\n  border-left: 0;\n  border-right: 0;\n  padding: 20px;\n  margin: 300px auto;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);\n}\n\n.modal::backdrop {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n\n.modal-title {\n  text-align: center;\n}\n\n.modal-input {\n  height: 2rem;\n  width: 100%;\n  outline: none;\n  border: 1px solid var(--dark-bg);\n  padding-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.button-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 10px;\n}\n\n.modal-submit,\n.modal-cancel {\n  background-color: var(--dark-bg);\n  color: var(--text-header-clr);\n  border: none;\n  height: 2rem;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);\n  transition: 0.3s;\n}\n\n.modal-submit:hover,\n.modal-cancel:hover {\n  color: var(--teal);\n  box-shadow: 0px 0px 5px var(--teal);\n}\n\n/* TASK MODAL STYLE ------------------------------------------------ */\n\n.task-modal {\n  background-color: var(--main-bg-clr);\n  border-top: 4px solid var(--new-task-bg);\n  border-bottom: 4px solid var(--new-task-bg);\n  border-left: 0;\n  border-right: 0;\n  padding: 20px;\n  margin: 200px auto;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);\n}\n\n.task-modal::backdrop {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n\n.task-modal-title {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.task-modal-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.task-input {\n  height: 2rem;\n  width: 100%;\n  outline: none;\n  border: 1px solid var(--dark-bg);\n  padding-left: 10px;\n  margin-bottom: 20px;\n}\n\n.task-textarea {\n  height: 4rem;\n  outline: none;\n  border: 1px solid var(--dark-bg);\n  padding-left: 10px;\n  margin-bottom: 20px;\n}\n\n.task-submit,\n.task-cancel {\n  background-color: var(--dark-bg);\n  color: var(--text-header-clr);\n  border: none;\n  height: 2rem;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);\n  transition: 0.3s;\n}\n\n.task-submit:hover,\n.task-cancel:hover {\n  color: var(--teal);\n  box-shadow: 0px 0px 5px var(--teal);\n}\n\n/* TASK STYLE ------------------------------------------------ */\n\n.task-wrap {\n  display: grid;\n  grid-template-columns: 1fr 100px 50px 50px;\n  background-color: var(--main-bg-clr);\n  padding: 10px 0px 10px 10px;\n  margin-bottom: 10px;\n  transition: 0.3s;\n}\n\n.task-wrap:hover {\n  background-color: var(--light-teal);\n}\n\n.task-edit {\n  background-image: url(./img/edit.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  justify-self: center;\n  width: 16px;\n  height: 16px;\n  transition: 0.2s;\n}\n\n.task-delete {\n  background-image: url(./img/trash.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  justify-self: center;\n  width: 16px;\n  height: 16px;\n  transition: 0.2s;\n}\n\n.task-edit:hover,\n.task-delete:hover {\n  transform: scale(1.2);\n}\n\n/* FOOTER STYLE ------------------------------------------------ */\n\n.footer-wrapper {\n  background-color: var(--main-bg-clr);\n  padding: 10px;\n}\n\n.footer-text {\n  font-size: 0.8rem;\n  color: var(--text-secondary-clr);\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/create-dom.js":
/*!***************************!*\
  !*** ./src/create-dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDOM: () => (/* binding */ createDOM)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");



let content;
let newFolder;

const createDOM = {
  createFolderElement() {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.getStorage();
    if (_data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.names === null) {
      return;
    }
    _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.names.forEach((folder) => {
      newFolder = document.createElement("div");
      newFolder.classList.add("collapsible");
      newFolder.dataset.folderID = folder.id;
      newFolder.addEventListener("click", function () {
        this.classList.toggle("active");
        if (grow.clientHeight) {
          grow.style.height = 0;
        } else {
          grow.style.height = grow.scrollHeight + "px";
        }
      });

      const folderTitle = document.createElement("h2");
      folderTitle.classList.add("folder-title");
      folderTitle.textContent = folder.name;

      const addTask = document.createElement("div");
      addTask.classList.add("add-task");
      addTask.addEventListener("click", createDOM.addTaskElement);

      const editFolder = document.createElement("div");
      editFolder.classList.add("edit-folder");
      editFolder.addEventListener("click", createDOM.editFolderElement);

      const deleteFolder = document.createElement("div");
      deleteFolder.classList.add("delete-folder");
      deleteFolder.addEventListener("click", _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.deleteObject);

      const grow = document.createElement("div");
      grow.classList.add("grow");

      content = document.createElement("div");
      content.dataset.folderID = folder.id;
      content.classList.add("content");

      _index_js__WEBPACK_IMPORTED_MODULE_0__.folderList.appendChild(newFolder);
      newFolder.appendChild(folderTitle);
      newFolder.appendChild(addTask);
      newFolder.appendChild(editFolder);
      newFolder.appendChild(deleteFolder);
      newFolder.insertAdjacentElement("afterend", grow);
      grow.appendChild(content);
    });
  },

  editFolderElement() {
    const ID = this.parentElement.dataset.folderID;

    const modalDialog = document.createElement("dialog");
    modalDialog.classList.add("modal");

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = "Insert your new folder name";

    const modalForm = document.createElement("form");
    modalForm.classList.add("modal-form");
    modalForm.setAttribute("method", "dialog");

    const modalInput = document.createElement("input");
    modalInput.classList.add("modal-input");
    modalInput.setAttribute("type", "text");
    modalInput.setAttribute("name", "folder-edit");
    modalInput.setAttribute("autocomplete", "off");
    modalInput.setAttribute("required", "");

    const buttonDIV = document.createElement("div");
    buttonDIV.classList.add("button-div");

    const modalSubmit = document.createElement("button");
    modalSubmit.classList.add("modal-submit");
    modalSubmit.setAttribute("type", "button");
    modalSubmit.textContent = "Submit";
    modalSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      if (modalInput.value === null || modalInput.value === "") {
        return;
      } else {
        _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.getStorage();
        _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.names.forEach((folder) => {
          if (folder.id === +ID) {
            folder.name = modalInput.value;
            _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.saveObject();
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.render)();
            modalDialog.close();
          }
        });
      }
    });

    const modalCancel = document.createElement("button");
    modalCancel.classList.add("modal-cancel");
    modalCancel.setAttribute("type", "button");
    modalCancel.textContent = "Cancel";
    modalCancel.addEventListener("click", function () {
      modalDialog.close();
    });

    buttonDIV.append(modalSubmit, modalCancel);
    modalForm.append(modalInput, buttonDIV);
    modalDialog.append(modalTitle, modalForm);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.folderList.appendChild(modalDialog);

    modalDialog.showModal();
  },

  addTaskElement() {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.ID = this.parentElement.dataset.folderID;
    _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.saveID();

    const modalDialog = document.createElement("dialog");
    modalDialog.classList.add("task-modal");

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("task-modal-title");
    modalTitle.textContent = "Create your new task";

    const taskForm = document.createElement("form");
    taskForm.classList.add("task-modal-form");
    taskForm.setAttribute("method", "dialog");

    const taskNameLabel = document.createElement("label");
    taskNameLabel.classList.add("task-label");
    taskNameLabel.textContent = "Task Title";
    taskNameLabel.setAttribute("for", "task-name");

    const taskNameInput = document.createElement("input");
    taskNameInput.classList.add("task-input");
    taskNameInput.setAttribute("type", "text");
    taskNameInput.setAttribute("name", "task-name");
    taskNameInput.setAttribute("autocomplete", "off");
    taskNameInput.setAttribute("required", "");

    const taskDescLabel = document.createElement("label");
    taskDescLabel.classList.add("task-label");
    taskDescLabel.textContent = "Description";
    taskDescLabel.setAttribute("for", "task-desc");

    const taskDescInput = document.createElement("textarea");
    taskDescInput.classList.add("task-textarea");
    taskDescInput.setAttribute("name", "task-desc");
    taskDescInput.setAttribute("autocomplete", "off");

    const taskDateLabel = document.createElement("label");
    taskDateLabel.classList.add("task-label");
    taskDateLabel.textContent = "Due Date";
    taskDateLabel.setAttribute("for", "task-date");

    const taskDateInput = document.createElement("input");
    taskDateInput.classList.add("task-input");
    taskDateInput.setAttribute("type", "date");
    taskDateInput.setAttribute("name", "task-date");
    taskDateInput.setAttribute("required", "");

    const buttonDIV = document.createElement("div");
    buttonDIV.classList.add("button-div");

    const taskSubmit = document.createElement("button");
    taskSubmit.classList.add("task-submit");
    taskSubmit.setAttribute("type", "button");
    taskSubmit.textContent = "Submit";
    taskSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      let taskName = taskNameInput.value;
      let taskDesc = taskDescInput.value;
      let taskDate = taskDateInput.value;
      _data_js__WEBPACK_IMPORTED_MODULE_1__.TASKS.createObject(taskName, taskDesc, taskDate);
      _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.saveObject();
      createDOM.createTaskElement();
      modalDialog.close();
    });

    const taskCancel = document.createElement("button");
    taskCancel.classList.add("task-cancel");
    taskCancel.setAttribute("type", "button");
    taskCancel.textContent = "Cancel";
    taskCancel.addEventListener("click", function () {
      modalDialog.close();
    });

    taskForm.append(
      taskNameLabel,
      taskNameInput,
      taskDescLabel,
      taskDescInput,
      taskDateLabel,
      taskDateInput
    );
    buttonDIV.append(taskSubmit, taskCancel);
    taskForm.appendChild(buttonDIV);
    modalDialog.append(modalTitle, taskForm);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.folderList.appendChild(modalDialog);

    modalDialog.showModal();
  },

  createTaskElement() {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.getStorage();
    for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.names.length; i++) {
      const targetContent = document.querySelectorAll(".content");
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.clearList)(targetContent[i]);

      if (_data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.names[i].tasks.length == 0) {
        const emptyNotice = document.createElement("p");
        emptyNotice.textContent =
          "No tasks here yet, click the plus button to add your first task.";

        targetContent[i].appendChild(emptyNotice);
      } else {
        _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.names[i].tasks.forEach((task) => {
          const taskWrap = document.createElement("div");
          taskWrap.classList.add("task-wrap");
          taskWrap.dataset.taskID = task.id;

          const nameDescWrap = document.createElement("div");
          nameDescWrap.classList.add("name-desc-wrap");

          const taskName = document.createElement("h3");
          taskName.classList.add("task-name");
          taskName.textContent = task.name;

          const taskDesc = document.createElement("p");
          taskDesc.classList.add("task-desc");
          taskDesc.textContent = task.desc;

          const taskDate = document.createElement("p");
          taskDate.classList.add("task-date");
          taskDate.textContent = task.date;

          const taskEdit = document.createElement("div");
          taskEdit.classList.add("task-edit");
          taskEdit.addEventListener("click", createDOM.editTaskElement);

          const taskDelete = document.createElement("div");
          taskDelete.classList.add("task-delete");
          taskDelete.addEventListener("click", _data_js__WEBPACK_IMPORTED_MODULE_1__.TASKS.deleteObject);

          nameDescWrap.append(taskName, taskDesc);
          taskWrap.append(nameDescWrap, taskDate, taskEdit, taskDelete);

          targetContent[i].appendChild(taskWrap);
        });
      }
    }
  },

  editTaskElement() {
    const ID = this.parentElement.dataset.taskID;

    const modalDialog = document.createElement("dialog");
    modalDialog.classList.add("modal");

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = "Insert your new task name";

    const modalForm = document.createElement("form");
    modalForm.classList.add("modal-form");
    modalForm.setAttribute("method", "dialog");

    const modalInput = document.createElement("input");
    modalInput.classList.add("modal-input");
    modalInput.setAttribute("type", "text");
    modalInput.setAttribute("name", "folder-edit");
    modalInput.setAttribute("autocomplete", "off");
    modalInput.setAttribute("required", "");

    const buttonDIV = document.createElement("div");
    buttonDIV.classList.add("button-div");

    const modalSubmit = document.createElement("button");
    modalSubmit.classList.add("modal-submit");
    modalSubmit.setAttribute("type", "button");
    modalSubmit.textContent = "Submit";
    modalSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      if (modalInput.value === null || modalInput.value === "") {
        return;
      } else {
        _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.getStorage();
        _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.names.forEach((folder) => {
          folder.tasks.forEach((task) => {
            if (task.id === +ID) {
              task.name = modalInput.value;
              _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.saveObject();
              (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.render)();
              createDOM.createTaskElement();
              modalDialog.close();
            }
          });
        });
      }
    });

    const modalCancel = document.createElement("button");
    modalCancel.classList.add("modal-cancel");
    modalCancel.setAttribute("type", "button");
    modalCancel.textContent = "Cancel";
    modalCancel.addEventListener("click", function () {
      modalDialog.close();
    });

    buttonDIV.append(modalSubmit, modalCancel);
    modalForm.append(modalInput, buttonDIV);
    modalDialog.append(modalTitle, modalForm);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.folderList.appendChild(modalDialog);

    modalDialog.showModal();
  },
};


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOLDERS: () => (/* binding */ FOLDERS),
/* harmony export */   TASKS: () => (/* binding */ TASKS)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _create_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-dom.js */ "./src/create-dom.js");



const FOLDERS = {
  names: [],
  ID: null,
  folderID: "localStoredID",
  key: "localStoredFolders",
  storage: window.localStorage,
  getStorage() {
    let data = FOLDERS.storage.getItem(FOLDERS.key);
    if (!data) {
      FOLDERS.storage.setItem(FOLDERS.key, JSON.stringify([]));
    }
    FOLDERS.names = JSON.parse(data);
    return FOLDERS;
  },
  createObject(name) {
    const newFolderObj = {
      id: Date.now(),
      name: name,
      tasks: [],
    };
    FOLDERS.names.push(newFolderObj);
  },
  saveObject() {
    FOLDERS.storage.setItem(FOLDERS.key, JSON.stringify(FOLDERS.names));
  },
  saveID() {
    FOLDERS.storage.setItem(FOLDERS.folderID, JSON.stringify(FOLDERS.ID));
  },
  getID() {
    let data = FOLDERS.storage.getItem(FOLDERS.folderID);
    FOLDERS.ID = JSON.parse(data);
    return FOLDERS;
  },
  deleteObject() {
    const ID = this.parentElement.dataset.folderID;
    FOLDERS.getStorage();
    const filtered = FOLDERS.names.filter((folder) => folder.id !== +ID);
    FOLDERS.storage.setItem(FOLDERS.key, JSON.stringify(filtered));
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.render)();
  },
};

const TASKS = {
  names: [],
  ID: null,
  taskID: "localStoredTaskID",
  createObject(name, desc, date) {
    const newTaskObj = {
      id: Date.now(),
      name: name,
      desc: desc,
      date: date,
    };
    FOLDERS.getStorage();
    FOLDERS.getID();
    FOLDERS.names.forEach((folder) => {
      if (folder.id === +FOLDERS.ID) {
        folder.tasks.push(newTaskObj);
      }
    });
  },
  saveID() {
    FOLDERS.storage.setItem(TASKS.taskID, JSON.stringify(TASKS.ID));
  },
  getID() {
    let data = FOLDERS.storage.getItem(TASKS.taskID);
    TASKS.ID = JSON.parse(data);
    return TASKS;
  },
  deleteObject() {
    const ID = this.parentElement.dataset.taskID;
    FOLDERS.getStorage();

    for (let i = 0; FOLDERS.names.length; i++) {
      const filtered = FOLDERS.names[i].tasks.filter((task) => task.id !== +ID);
      FOLDERS.names[i].tasks = filtered;
      FOLDERS.saveObject();
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.render)();
      _create_dom_js__WEBPACK_IMPORTED_MODULE_1__.createDOM.createTaskElement();
    }
  },
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearList: () => (/* binding */ clearList),
/* harmony export */   folderList: () => (/* binding */ folderList),
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _create_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-dom.js */ "./src/create-dom.js");




const folderList = document.querySelector(".folder-collapse-container");
const newFolderInput = document.querySelector(".new-folder-input");
const newFolderSubmit = document.querySelector(".new-folder-submit");

newFolderSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (newFolderInput.value === null || newFolderInput.value === "") {
    return;
  } else {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.getStorage();
    _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.createObject(newFolderInput.value);
    _data_js__WEBPACK_IMPORTED_MODULE_1__.FOLDERS.saveObject();
    render();
    newFolderInput.value = null;
  }
});

function render() {
  clearList(folderList);
  _create_dom_js__WEBPACK_IMPORTED_MODULE_2__.createDOM.createFolderElement();
  _create_dom_js__WEBPACK_IMPORTED_MODULE_2__.createDOM.createTaskElement();
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

_create_dom_js__WEBPACK_IMPORTED_MODULE_2__.createDOM.createFolderElement();
_create_dom_js__WEBPACK_IMPORTED_MODULE_2__.createDOM.createTaskElement();


/***/ }),

/***/ "./src/img/circle-plus.svg":
/*!*********************************!*\
  !*** ./src/img/circle-plus.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b3d0548eeb93050046d.svg";

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb7bc5aaeacf365ab9b0.svg";

/***/ }),

/***/ "./src/img/folder-open-white.svg":
/*!***************************************!*\
  !*** ./src/img/folder-open-white.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ae316a85931ce132213.svg";

/***/ }),

/***/ "./src/img/folder.svg":
/*!****************************!*\
  !*** ./src/img/folder.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83ae95070bb571f1f147.svg";

/***/ }),

/***/ "./src/img/header-bg.jpg":
/*!*******************************!*\
  !*** ./src/img/header-bg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2875a31af37fab9c6a1b.jpg";

/***/ }),

/***/ "./src/img/lux-circle-dragon-white.png":
/*!*********************************************!*\
  !*** ./src/img/lux-circle-dragon-white.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9f1f96cc2eced6b84a3.png";

/***/ }),

/***/ "./src/img/trash.svg":
/*!***************************!*\
  !*** ./src/img/trash.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4cbf54a767ebbfcc4a2.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QywrSUFBb0Q7QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMseUdBQWlDO0FBQzdFLDRDQUE0QywyR0FBa0M7QUFDOUUsNENBQTRDLG1JQUE4QztBQUMxRiw0Q0FBNEMsNkdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsU0FBUyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFFBQVEsS0FBSyxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFB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OztVQ2xDVDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NyZWF0ZS1kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9oZWFkZXItYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvbHV4LWNpcmNsZS1kcmFnb24td2hpdGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvY2lyY2xlLXBsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy90cmFzaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9mb2xkZXItb3Blbi13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9mb2xkZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAtLW1haW4tYmctY2xyOiAjZmZmZmZmO1xuICAtLXRleHQtbWFpbi1jbHI6IGJsYWNrO1xuICAtLXRleHQtaGVhZGVyLWNscjogd2hpdGU7XG4gIC0tdGV4dC1zZWNvbmRhcnktY2xyOiAjODA4MDgwO1xuICAtLXB1cnBsZTogI2NjMDBmZjtcbiAgLS1ibHVlOiAjMDBjM2ZmO1xuICAtLXRlYWw6ICMwMGZmYzg7XG4gIC0tbGlnaHQtcHVycGxlOiAjZjllM2ZmO1xuICAtLWxpZ2h0LWJsdWU6ICNjM2YxZmY7XG4gIC0tbGlnaHQtdGVhbDogI2Q0ZWJlNjtcbiAgLS1saWdodC1ncmVlbjogI2NkZmZlMjtcbiAgLS1uZXctdGFzay1iZzogIzU4NGE4NTtcbiAgLS1saWdodC1uZXctdGFzay1iZzogI2UyZGFmZjtcbiAgLS1kYXJrLWJnOiAjMjcyMDNmO1xuICAtLWRhcmstdGVhbDogIzQ3YjY5YTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1MHB4IDUwMHB4IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogSEVBREVSIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uaGVhZGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRlci1jbHIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlYWRlci1sZWZ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5oZWFkZXItbGVmdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICB2YXIoLS1wdXJwbGUpLFxuICAgIHZhcigtLWJsdWUpLFxuICAgIHZhcigtLXRlYWwpXG4gICk7XG59XG5cbi5sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi53ZWxjb21lLWdyZWV0aW5nIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjZyZW07XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMSk7XG59XG5cbi53ZWxjb21lLW5hbWUge1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMSk7XG59XG5cbi5oZWFkZXItZGF0ZSB7XG4gIHBhZGRpbmc6IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtaGVhZGVyLWNscik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjUpLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4udGFzay1hbW91bnQge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qIE1BSU4gU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5tYWluLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNscik7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgdmFyKC0tZGFyay1iZyksXG4gICAgdmFyKC0tbmV3LXRhc2stYmcpXG4gICk7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmcpO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcbn1cblxuLyogVEFTS1MgUEFHRSBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLnRhc2tzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4tY2xyKTtcbn1cblxuLyogQ1JFQVRFIE5FVyBGT0xERVIgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5uZXctZm9sZGVyLWRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5uZXctZm9sZGVyLWRpdiA+IGZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG59XG5cbi5uZXctZm9sZGVyLWlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1iZyk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLm5ldy1mb2xkZXItaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wdXJwbGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJnKTtcbn1cblxuLm5ldy1mb2xkZXItc3VibWl0IHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmcpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkZXItY2xyKTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLm5ldy1mb2xkZXItc3VibWl0OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRlYWwpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS10ZWFsKTtcbn1cblxuLyogRk9MREVSIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZm9sZGVyLWxpc3QtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb2xkZXItdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uYWRkLXRhc2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmVkaXQtZm9sZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5kZWxldGUtZm9sZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5hZGQtdGFzazpob3Zlcixcbi5lZGl0LWZvbGRlcjpob3Zlcixcbi5kZWxldGUtZm9sZGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4vKiBDT0xMQVBTSUJMRSBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmNvbGxhcHNpYmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDMsIDUwcHgpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtaGVhZGVyLWNscik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldy10YXNrLWJnKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmNvbGxhcHNpYmxlOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbGxhcHNpYmxlOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tbWFpbi1iZy1jbHIpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAzOTBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbGxhcHNpYmxlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRlYWwpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS10ZWFsKTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGVhbCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFjdGl2ZTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbmV3LXRhc2stYmcpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1uZXctdGFzay1iZyk7XG59XG5cbi5ncm93IHtcbiAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgLW1zLXRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xuICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG4vKiBFRElUIE1PREFMIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNscik7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1uZXctdGFzay1iZyk7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1uZXctdGFzay1iZyk7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMzAwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5tb2RhbDo6YmFja2Ryb3Age1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwtaW5wdXQge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJnKTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnV0dG9uLWRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogMTBweDtcbn1cblxuLm1vZGFsLXN1Ym1pdCxcbi5tb2RhbC1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcbiAgY29sb3I6IHZhcigtLXRleHQtaGVhZGVyLWNscik7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5tb2RhbC1zdWJtaXQ6aG92ZXIsXG4ubW9kYWwtY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRlYWwpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS10ZWFsKTtcbn1cblxuLyogVEFTSyBNT0RBTCBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLnRhc2stbW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNscik7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1uZXctdGFzay1iZyk7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1uZXctdGFzay1iZyk7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjAwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi50YXNrLW1vZGFsOjpiYWNrZHJvcCB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4udGFzay1tb2RhbC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2stbW9kYWwtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YXNrLWlucHV0IHtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1iZyk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhc2stdGV4dGFyZWEge1xuICBoZWlnaHQ6IDRyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmcpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YXNrLXN1Ym1pdCxcbi50YXNrLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmcpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkZXItY2xyKTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnRhc2stc3VibWl0OmhvdmVyLFxuLnRhc2stY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRlYWwpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS10ZWFsKTtcbn1cblxuLyogVEFTSyBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLnRhc2std3JhcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4IDUwcHggNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jbHIpO1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi50YXNrLXdyYXA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC10ZWFsKTtcbn1cblxuLnRhc2stZWRpdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4udGFzay1kZWxldGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnRhc2stZWRpdDpob3Zlcixcbi50YXNrLWRlbGV0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLyogRk9PVEVSIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZm9vdGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNscik7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mb290ZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY2xyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVB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QW1DO0FBQ3JDOztBQUVBLGdFQUFnRTs7QUFFaEU7RUFDRSxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlEQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5REFBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQSxrRUFBa0U7O0FBRWxFO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tYmctY2xyOiAjZmZmZmZmO1xcbiAgLS10ZXh0LW1haW4tY2xyOiBibGFjaztcXG4gIC0tdGV4dC1oZWFkZXItY2xyOiB3aGl0ZTtcXG4gIC0tdGV4dC1zZWNvbmRhcnktY2xyOiAjODA4MDgwO1xcbiAgLS1wdXJwbGU6ICNjYzAwZmY7XFxuICAtLWJsdWU6ICMwMGMzZmY7XFxuICAtLXRlYWw6ICMwMGZmYzg7XFxuICAtLWxpZ2h0LXB1cnBsZTogI2Y5ZTNmZjtcXG4gIC0tbGlnaHQtYmx1ZTogI2MzZjFmZjtcXG4gIC0tbGlnaHQtdGVhbDogI2Q0ZWJlNjtcXG4gIC0tbGlnaHQtZ3JlZW46ICNjZGZmZTI7XFxuICAtLW5ldy10YXNrLWJnOiAjNTg0YTg1O1xcbiAgLS1saWdodC1uZXctdGFzay1iZzogI2UyZGFmZjtcXG4gIC0tZGFyay1iZzogIzI3MjAzZjtcXG4gIC0tZGFyay10ZWFsOiAjNDdiNjlhO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNTBweCA1MDBweCA1MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4vKiBIRUFERVIgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmhlYWRlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkZXItY2xyKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9oZWFkZXItYmcuanBnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmhlYWRlci1sZWZ0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB2YXIoLS1wdXJwbGUpLFxcbiAgICB2YXIoLS1ibHVlKSxcXG4gICAgdmFyKC0tdGVhbClcXG4gICk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9sdXgtY2lyY2xlLWRyYWdvbi13aGl0ZS5wbmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuLndlbGNvbWUtZ3JlZXRpbmcge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsaW5lLWhlaWdodDogMC42cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiYSgwLCAwLCAwLCAxKTtcXG59XFxuXFxuLndlbGNvbWUtbmFtZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2JhKDAsIDAsIDAsIDEpO1xcbn1cXG5cXG4uaGVhZGVyLWRhdGUge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtaGVhZGVyLWNscik7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgdHJhbnNwYXJlbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhlYWRlci1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnRhc2stYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIE1BSU4gU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNscik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSxcXG4gICAgdmFyKC0tZGFyay1iZyksXFxuICAgIHZhcigtLW5ldy10YXNrLWJnKVxcbiAgKTtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcXG59XFxuXFxuLyogVEFTS1MgUEFHRSBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4udGFza3MtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluLWNscik7XFxufVxcblxcbi8qIENSRUFURSBORVcgRk9MREVSIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5uZXctZm9sZGVyLWRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubmV3LWZvbGRlci1kaXYgPiBmb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmV3LWZvbGRlci1pbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1iZyk7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5uZXctZm9sZGVyLWlucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXB1cnBsZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJnKTtcXG59XFxuXFxuLm5ldy1mb2xkZXItc3VibWl0IHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkZXItY2xyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5uZXctZm9sZGVyLXN1Ym1pdDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS10ZWFsKTtcXG59XFxuXFxuLyogRk9MREVSIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5mb2xkZXItbGlzdC10aXRsZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZm9sZGVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2NpcmNsZS1wbHVzLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5lZGl0LWZvbGRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvZWRpdC5zdmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uZGVsZXRlLWZvbGRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvdHJhc2guc3ZnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyLFxcbi5lZGl0LWZvbGRlcjpob3ZlcixcXG4uZGVsZXRlLWZvbGRlcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi8qIENPTExBUFNJQkxFIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jb2xsYXBzaWJsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDMsIDUwcHgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkZXItY2xyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldy10YXNrLWJnKTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5jb2xsYXBzaWJsZTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ZvbGRlci1vcGVuLXdoaXRlLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAxMHB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNvbGxhcHNpYmxlOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLW1haW4tYmctY2xyKTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMzkwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY29sbGFwc2libGU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tdGVhbCk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10ZWFsKTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFjdGl2ZTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ZvbGRlci5zdmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5hY3RpdmU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW5ldy10YXNrLWJnKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW5ldy10YXNrLWJnKTtcXG59XFxuXFxuLmdyb3cge1xcbiAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcXG4gIC1tcy10cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcXG4gIC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcblxcbi8qIEVESVQgTU9EQUwgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY2xyKTtcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1uZXctdGFzay1iZyk7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tbmV3LXRhc2stYmcpO1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAzMDBweCBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5tb2RhbDo6YmFja2Ryb3Age1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtaW5wdXQge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1iZyk7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1zdWJtaXQsXFxuLm1vZGFsLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRlci1jbHIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLm1vZGFsLXN1Ym1pdDpob3ZlcixcXG4ubW9kYWwtY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLXRlYWwpO1xcbn1cXG5cXG4vKiBUQVNLIE1PREFMIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi50YXNrLW1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY2xyKTtcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1uZXctdGFzay1iZyk7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tbmV3LXRhc2stYmcpO1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMDBweCBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi50YXNrLW1vZGFsOjpiYWNrZHJvcCB7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi50YXNrLW1vZGFsLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLW1vZGFsLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWlucHV0IHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmcpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2stdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmcpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2stc3VibWl0LFxcbi50YXNrLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRlci1jbHIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnRhc2stc3VibWl0OmhvdmVyLFxcbi50YXNrLWNhbmNlbDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS10ZWFsKTtcXG59XFxuXFxuLyogVEFTSyBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4udGFzay13cmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDBweCA1MHB4IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNscik7XFxuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnRhc2std3JhcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC10ZWFsKTtcXG59XFxuXFxuLnRhc2stZWRpdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvZWRpdC5zdmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4udGFzay1kZWxldGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL3RyYXNoLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50YXNrLWVkaXQ6aG92ZXIsXFxuLnRhc2stZGVsZXRlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogRk9PVEVSIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5mb290ZXItd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNscik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY2xyKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZW5kZXIsIGNsZWFyTGlzdCwgZm9sZGVyTGlzdCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBGT0xERVJTLCBUQVNLUyB9IGZyb20gXCIuL2RhdGEuanNcIjtcblxubGV0IGNvbnRlbnQ7XG5sZXQgbmV3Rm9sZGVyO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRE9NID0ge1xuICBjcmVhdGVGb2xkZXJFbGVtZW50KCkge1xuICAgIEZPTERFUlMuZ2V0U3RvcmFnZSgpO1xuICAgIGlmIChGT0xERVJTLm5hbWVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEZPTERFUlMubmFtZXMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgICBuZXdGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Rm9sZGVyLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzaWJsZVwiKTtcbiAgICAgIG5ld0ZvbGRlci5kYXRhc2V0LmZvbGRlcklEID0gZm9sZGVyLmlkO1xuICAgICAgbmV3Rm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKGdyb3cuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgZ3Jvdy5zdHlsZS5oZWlnaHQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdyb3cuc3R5bGUuaGVpZ2h0ID0gZ3Jvdy5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb2xkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGZvbGRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItdGl0bGVcIik7XG4gICAgICBmb2xkZXJUaXRsZS50ZXh0Q29udGVudCA9IGZvbGRlci5uYW1lO1xuXG4gICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZChcImFkZC10YXNrXCIpO1xuICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlRE9NLmFkZFRhc2tFbGVtZW50KTtcblxuICAgICAgY29uc3QgZWRpdEZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlZGl0Rm9sZGVyLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWZvbGRlclwiKTtcbiAgICAgIGVkaXRGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZURPTS5lZGl0Rm9sZGVyRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZWxldGVGb2xkZXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1mb2xkZXJcIik7XG4gICAgICBkZWxldGVGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEZPTERFUlMuZGVsZXRlT2JqZWN0KTtcblxuICAgICAgY29uc3QgZ3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBncm93LmNsYXNzTGlzdC5hZGQoXCJncm93XCIpO1xuXG4gICAgICBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRlbnQuZGF0YXNldC5mb2xkZXJJRCA9IGZvbGRlci5pZDtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgICAgIGZvbGRlckxpc3QuYXBwZW5kQ2hpbGQobmV3Rm9sZGVyKTtcbiAgICAgIG5ld0ZvbGRlci5hcHBlbmRDaGlsZChmb2xkZXJUaXRsZSk7XG4gICAgICBuZXdGb2xkZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG4gICAgICBuZXdGb2xkZXIuYXBwZW5kQ2hpbGQoZWRpdEZvbGRlcik7XG4gICAgICBuZXdGb2xkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlRm9sZGVyKTtcbiAgICAgIG5ld0ZvbGRlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBncm93KTtcbiAgICAgIGdyb3cuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZWRpdEZvbGRlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgSUQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZGF0YXNldC5mb2xkZXJJRDtcblxuICAgIGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBtb2RhbERpYWxvZy5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1vZGFsVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIkluc2VydCB5b3VyIG5ldyBmb2xkZXIgbmFtZVwiO1xuXG4gICAgY29uc3QgbW9kYWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgbW9kYWxGb3JtLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1mb3JtXCIpO1xuICAgIG1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG5cbiAgICBjb25zdCBtb2RhbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG1vZGFsSW5wdXQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWlucHV0XCIpO1xuICAgIG1vZGFsSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgbW9kYWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZm9sZGVyLWVkaXRcIik7XG4gICAgbW9kYWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XG4gICAgbW9kYWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICAgIGNvbnN0IGJ1dHRvbkRJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uRElWLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tZGl2XCIpO1xuXG4gICAgY29uc3QgbW9kYWxTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1vZGFsU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1zdWJtaXRcIik7XG4gICAgbW9kYWxTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBtb2RhbFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgbW9kYWxTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAobW9kYWxJbnB1dC52YWx1ZSA9PT0gbnVsbCB8fCBtb2RhbElucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZPTERFUlMuZ2V0U3RvcmFnZSgpO1xuICAgICAgICBGT0xERVJTLm5hbWVzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgICAgIGlmIChmb2xkZXIuaWQgPT09ICtJRCkge1xuICAgICAgICAgICAgZm9sZGVyLm5hbWUgPSBtb2RhbElucHV0LnZhbHVlO1xuICAgICAgICAgICAgRk9MREVSUy5zYXZlT2JqZWN0KCk7XG4gICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgICAgIG1vZGFsRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG1vZGFsQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtb2RhbENhbmNlbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY2FuY2VsXCIpO1xuICAgIG1vZGFsQ2FuY2VsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgbW9kYWxDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIG1vZGFsQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtb2RhbERpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uRElWLmFwcGVuZChtb2RhbFN1Ym1pdCwgbW9kYWxDYW5jZWwpO1xuICAgIG1vZGFsRm9ybS5hcHBlbmQobW9kYWxJbnB1dCwgYnV0dG9uRElWKTtcbiAgICBtb2RhbERpYWxvZy5hcHBlbmQobW9kYWxUaXRsZSwgbW9kYWxGb3JtKTtcbiAgICBmb2xkZXJMaXN0LmFwcGVuZENoaWxkKG1vZGFsRGlhbG9nKTtcblxuICAgIG1vZGFsRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9LFxuXG4gIGFkZFRhc2tFbGVtZW50KCkge1xuICAgIEZPTERFUlMuSUQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZGF0YXNldC5mb2xkZXJJRDtcbiAgICBGT0xERVJTLnNhdmVJRCgpO1xuXG4gICAgY29uc3QgbW9kYWxEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIG1vZGFsRGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsXCIpO1xuXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtb2RhbFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsLXRpdGxlXCIpO1xuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSB5b3VyIG5ldyB0YXNrXCI7XG5cbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsLWZvcm1cIik7XG4gICAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuXG4gICAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxhYmVsXCIpO1xuICAgIHRhc2tOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgVGl0bGVcIjtcbiAgICB0YXNrTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbmFtZVwiKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dFwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gICAgY29uc3QgdGFza0Rlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrRGVzY0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxhYmVsXCIpO1xuICAgIHRhc2tEZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgdGFza0Rlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRlc2NcIik7XG5cbiAgICBjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIHRhc2tEZXNjSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stdGV4dGFyZWFcIik7XG4gICAgdGFza0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kZXNjXCIpO1xuICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuXG4gICAgY29uc3QgdGFza0RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxhYmVsXCIpO1xuICAgIHRhc2tEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgdGFza0RhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRhdGVcIik7XG5cbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIik7XG4gICAgdGFza0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICB0YXNrRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWRhdGVcIik7XG4gICAgdGFza0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICAgIGNvbnN0IGJ1dHRvbkRJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uRElWLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tZGl2XCIpO1xuXG4gICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdGFza1N1Ym1pdC5jbGFzc0xpc3QuYWRkKFwidGFzay1zdWJtaXRcIik7XG4gICAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIHRhc2tTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgdGFza05hbWUgPSB0YXNrTmFtZUlucHV0LnZhbHVlO1xuICAgICAgbGV0IHRhc2tEZXNjID0gdGFza0Rlc2NJbnB1dC52YWx1ZTtcbiAgICAgIGxldCB0YXNrRGF0ZSA9IHRhc2tEYXRlSW5wdXQudmFsdWU7XG4gICAgICBUQVNLUy5jcmVhdGVPYmplY3QodGFza05hbWUsIHRhc2tEZXNjLCB0YXNrRGF0ZSk7XG4gICAgICBGT0xERVJTLnNhdmVPYmplY3QoKTtcbiAgICAgIGNyZWF0ZURPTS5jcmVhdGVUYXNrRWxlbWVudCgpO1xuICAgICAgbW9kYWxEaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRhc2tDYW5jZWwuY2xhc3NMaXN0LmFkZChcInRhc2stY2FuY2VsXCIpO1xuICAgIHRhc2tDYW5jZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICB0YXNrQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICB0YXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtb2RhbERpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgdGFza0Zvcm0uYXBwZW5kKFxuICAgICAgdGFza05hbWVMYWJlbCxcbiAgICAgIHRhc2tOYW1lSW5wdXQsXG4gICAgICB0YXNrRGVzY0xhYmVsLFxuICAgICAgdGFza0Rlc2NJbnB1dCxcbiAgICAgIHRhc2tEYXRlTGFiZWwsXG4gICAgICB0YXNrRGF0ZUlucHV0XG4gICAgKTtcbiAgICBidXR0b25ESVYuYXBwZW5kKHRhc2tTdWJtaXQsIHRhc2tDYW5jZWwpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRJVik7XG4gICAgbW9kYWxEaWFsb2cuYXBwZW5kKG1vZGFsVGl0bGUsIHRhc2tGb3JtKTtcbiAgICBmb2xkZXJMaXN0LmFwcGVuZENoaWxkKG1vZGFsRGlhbG9nKTtcblxuICAgIG1vZGFsRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9LFxuXG4gIGNyZWF0ZVRhc2tFbGVtZW50KCkge1xuICAgIEZPTERFUlMuZ2V0U3RvcmFnZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRk9MREVSUy5uYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFyZ2V0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudFwiKTtcbiAgICAgIGNsZWFyTGlzdCh0YXJnZXRDb250ZW50W2ldKTtcblxuICAgICAgaWYgKEZPTERFUlMubmFtZXNbaV0udGFza3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHlOb3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZW1wdHlOb3RpY2UudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiTm8gdGFza3MgaGVyZSB5ZXQsIGNsaWNrIHRoZSBwbHVzIGJ1dHRvbiB0byBhZGQgeW91ciBmaXJzdCB0YXNrLlwiO1xuXG4gICAgICAgIHRhcmdldENvbnRlbnRbaV0uYXBwZW5kQ2hpbGQoZW1wdHlOb3RpY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRk9MREVSUy5uYW1lc1tpXS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFza1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRhc2tXcmFwLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXdyYXBcIik7XG4gICAgICAgICAgdGFza1dyYXAuZGF0YXNldC50YXNrSUQgPSB0YXNrLmlkO1xuXG4gICAgICAgICAgY29uc3QgbmFtZURlc2NXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBuYW1lRGVzY1dyYXAuY2xhc3NMaXN0LmFkZChcIm5hbWUtZGVzYy13cmFwXCIpO1xuXG4gICAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcbiAgICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZChcInRhc2stZGVzY1wiKTtcbiAgICAgICAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzYztcblxuICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcbiAgICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKFwidGFzay1lZGl0XCIpO1xuICAgICAgICAgIHRhc2tFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVET00uZWRpdFRhc2tFbGVtZW50KTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlXCIpO1xuICAgICAgICAgIHRhc2tEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFRBU0tTLmRlbGV0ZU9iamVjdCk7XG5cbiAgICAgICAgICBuYW1lRGVzY1dyYXAuYXBwZW5kKHRhc2tOYW1lLCB0YXNrRGVzYyk7XG4gICAgICAgICAgdGFza1dyYXAuYXBwZW5kKG5hbWVEZXNjV3JhcCwgdGFza0RhdGUsIHRhc2tFZGl0LCB0YXNrRGVsZXRlKTtcblxuICAgICAgICAgIHRhcmdldENvbnRlbnRbaV0uYXBwZW5kQ2hpbGQodGFza1dyYXApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZWRpdFRhc2tFbGVtZW50KCkge1xuICAgIGNvbnN0IElEID0gdGhpcy5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGFza0lEO1xuXG4gICAgY29uc3QgbW9kYWxEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIG1vZGFsRGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcblxuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbW9kYWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiSW5zZXJ0IHlvdXIgbmV3IHRhc2sgbmFtZVwiO1xuXG4gICAgY29uc3QgbW9kYWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgbW9kYWxGb3JtLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1mb3JtXCIpO1xuICAgIG1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG5cbiAgICBjb25zdCBtb2RhbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG1vZGFsSW5wdXQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWlucHV0XCIpO1xuICAgIG1vZGFsSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgbW9kYWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZm9sZGVyLWVkaXRcIik7XG4gICAgbW9kYWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XG4gICAgbW9kYWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICAgIGNvbnN0IGJ1dHRvbkRJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uRElWLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tZGl2XCIpO1xuXG4gICAgY29uc3QgbW9kYWxTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1vZGFsU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1zdWJtaXRcIik7XG4gICAgbW9kYWxTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBtb2RhbFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgbW9kYWxTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAobW9kYWxJbnB1dC52YWx1ZSA9PT0gbnVsbCB8fCBtb2RhbElucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZPTERFUlMuZ2V0U3RvcmFnZSgpO1xuICAgICAgICBGT0xERVJTLm5hbWVzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgICAgIGZvbGRlci50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gK0lEKSB7XG4gICAgICAgICAgICAgIHRhc2submFtZSA9IG1vZGFsSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgIEZPTERFUlMuc2F2ZU9iamVjdCgpO1xuICAgICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgICAgICAgY3JlYXRlRE9NLmNyZWF0ZVRhc2tFbGVtZW50KCk7XG4gICAgICAgICAgICAgIG1vZGFsRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbW9kYWxDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1vZGFsQ2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jYW5jZWxcIik7XG4gICAgbW9kYWxDYW5jZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBtb2RhbENhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgbW9kYWxDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vZGFsRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICBidXR0b25ESVYuYXBwZW5kKG1vZGFsU3VibWl0LCBtb2RhbENhbmNlbCk7XG4gICAgbW9kYWxGb3JtLmFwcGVuZChtb2RhbElucHV0LCBidXR0b25ESVYpO1xuICAgIG1vZGFsRGlhbG9nLmFwcGVuZChtb2RhbFRpdGxlLCBtb2RhbEZvcm0pO1xuICAgIGZvbGRlckxpc3QuYXBwZW5kQ2hpbGQobW9kYWxEaWFsb2cpO1xuXG4gICAgbW9kYWxEaWFsb2cuc2hvd01vZGFsKCk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGNyZWF0ZURPTSB9IGZyb20gXCIuL2NyZWF0ZS1kb20uanNcIjtcblxuZXhwb3J0IGNvbnN0IEZPTERFUlMgPSB7XG4gIG5hbWVzOiBbXSxcbiAgSUQ6IG51bGwsXG4gIGZvbGRlcklEOiBcImxvY2FsU3RvcmVkSURcIixcbiAga2V5OiBcImxvY2FsU3RvcmVkRm9sZGVyc1wiLFxuICBzdG9yYWdlOiB3aW5kb3cubG9jYWxTdG9yYWdlLFxuICBnZXRTdG9yYWdlKCkge1xuICAgIGxldCBkYXRhID0gRk9MREVSUy5zdG9yYWdlLmdldEl0ZW0oRk9MREVSUy5rZXkpO1xuICAgIGlmICghZGF0YSkge1xuICAgICAgRk9MREVSUy5zdG9yYWdlLnNldEl0ZW0oRk9MREVSUy5rZXksIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICAgIEZPTERFUlMubmFtZXMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJldHVybiBGT0xERVJTO1xuICB9LFxuICBjcmVhdGVPYmplY3QobmFtZSkge1xuICAgIGNvbnN0IG5ld0ZvbGRlck9iaiA9IHtcbiAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHRhc2tzOiBbXSxcbiAgICB9O1xuICAgIEZPTERFUlMubmFtZXMucHVzaChuZXdGb2xkZXJPYmopO1xuICB9LFxuICBzYXZlT2JqZWN0KCkge1xuICAgIEZPTERFUlMuc3RvcmFnZS5zZXRJdGVtKEZPTERFUlMua2V5LCBKU09OLnN0cmluZ2lmeShGT0xERVJTLm5hbWVzKSk7XG4gIH0sXG4gIHNhdmVJRCgpIHtcbiAgICBGT0xERVJTLnN0b3JhZ2Uuc2V0SXRlbShGT0xERVJTLmZvbGRlcklELCBKU09OLnN0cmluZ2lmeShGT0xERVJTLklEKSk7XG4gIH0sXG4gIGdldElEKCkge1xuICAgIGxldCBkYXRhID0gRk9MREVSUy5zdG9yYWdlLmdldEl0ZW0oRk9MREVSUy5mb2xkZXJJRCk7XG4gICAgRk9MREVSUy5JRCA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgcmV0dXJuIEZPTERFUlM7XG4gIH0sXG4gIGRlbGV0ZU9iamVjdCgpIHtcbiAgICBjb25zdCBJRCA9IHRoaXMucGFyZW50RWxlbWVudC5kYXRhc2V0LmZvbGRlcklEO1xuICAgIEZPTERFUlMuZ2V0U3RvcmFnZSgpO1xuICAgIGNvbnN0IGZpbHRlcmVkID0gRk9MREVSUy5uYW1lcy5maWx0ZXIoKGZvbGRlcikgPT4gZm9sZGVyLmlkICE9PSArSUQpO1xuICAgIEZPTERFUlMuc3RvcmFnZS5zZXRJdGVtKEZPTERFUlMua2V5LCBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZCkpO1xuICAgIHJlbmRlcigpO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFRBU0tTID0ge1xuICBuYW1lczogW10sXG4gIElEOiBudWxsLFxuICB0YXNrSUQ6IFwibG9jYWxTdG9yZWRUYXNrSURcIixcbiAgY3JlYXRlT2JqZWN0KG5hbWUsIGRlc2MsIGRhdGUpIHtcbiAgICBjb25zdCBuZXdUYXNrT2JqID0ge1xuICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGVzYzogZGVzYyxcbiAgICAgIGRhdGU6IGRhdGUsXG4gICAgfTtcbiAgICBGT0xERVJTLmdldFN0b3JhZ2UoKTtcbiAgICBGT0xERVJTLmdldElEKCk7XG4gICAgRk9MREVSUy5uYW1lcy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICAgIGlmIChmb2xkZXIuaWQgPT09ICtGT0xERVJTLklEKSB7XG4gICAgICAgIGZvbGRlci50YXNrcy5wdXNoKG5ld1Rhc2tPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBzYXZlSUQoKSB7XG4gICAgRk9MREVSUy5zdG9yYWdlLnNldEl0ZW0oVEFTS1MudGFza0lELCBKU09OLnN0cmluZ2lmeShUQVNLUy5JRCkpO1xuICB9LFxuICBnZXRJRCgpIHtcbiAgICBsZXQgZGF0YSA9IEZPTERFUlMuc3RvcmFnZS5nZXRJdGVtKFRBU0tTLnRhc2tJRCk7XG4gICAgVEFTS1MuSUQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJldHVybiBUQVNLUztcbiAgfSxcbiAgZGVsZXRlT2JqZWN0KCkge1xuICAgIGNvbnN0IElEID0gdGhpcy5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGFza0lEO1xuICAgIEZPTERFUlMuZ2V0U3RvcmFnZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IEZPTERFUlMubmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gRk9MREVSUy5uYW1lc1tpXS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09ICtJRCk7XG4gICAgICBGT0xERVJTLm5hbWVzW2ldLnRhc2tzID0gZmlsdGVyZWQ7XG4gICAgICBGT0xERVJTLnNhdmVPYmplY3QoKTtcbiAgICAgIHJlbmRlcigpO1xuICAgICAgY3JlYXRlRE9NLmNyZWF0ZVRhc2tFbGVtZW50KCk7XG4gICAgfVxuICB9LFxufTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBGT0xERVJTIH0gZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRE9NIH0gZnJvbSBcIi4vY3JlYXRlLWRvbS5qc1wiO1xuXG5leHBvcnQgY29uc3QgZm9sZGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9sZGVyLWNvbGxhcHNlLWNvbnRhaW5lclwiKTtcbmNvbnN0IG5ld0ZvbGRlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctZm9sZGVyLWlucHV0XCIpO1xuY29uc3QgbmV3Rm9sZGVyU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctZm9sZGVyLXN1Ym1pdFwiKTtcblxubmV3Rm9sZGVyU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChuZXdGb2xkZXJJbnB1dC52YWx1ZSA9PT0gbnVsbCB8fCBuZXdGb2xkZXJJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBGT0xERVJTLmdldFN0b3JhZ2UoKTtcbiAgICBGT0xERVJTLmNyZWF0ZU9iamVjdChuZXdGb2xkZXJJbnB1dC52YWx1ZSk7XG4gICAgRk9MREVSUy5zYXZlT2JqZWN0KCk7XG4gICAgcmVuZGVyKCk7XG4gICAgbmV3Rm9sZGVySW5wdXQudmFsdWUgPSBudWxsO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY2xlYXJMaXN0KGZvbGRlckxpc3QpO1xuICBjcmVhdGVET00uY3JlYXRlRm9sZGVyRWxlbWVudCgpO1xuICBjcmVhdGVET00uY3JlYXRlVGFza0VsZW1lbnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTGlzdChsaXN0KSB7XG4gIHdoaWxlIChsaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICBsaXN0LnJlbW92ZUNoaWxkKGxpc3QuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuY3JlYXRlRE9NLmNyZWF0ZUZvbGRlckVsZW1lbnQoKTtcbmNyZWF0ZURPTS5jcmVhdGVUYXNrRWxlbWVudCgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==