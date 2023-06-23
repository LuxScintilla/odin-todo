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
    FOLDERS.names.forEach((folder) => {
      const filtered = folder.tasks.filter((task) => task.id !== +ID);
      folder.tasks = filtered;
      FOLDERS.saveObject();
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.render)();
      _create_dom_js__WEBPACK_IMPORTED_MODULE_1__.createDOM.createTaskElement();
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QywrSUFBb0Q7QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMseUdBQWlDO0FBQzdFLDRDQUE0QywyR0FBa0M7QUFDOUUsNENBQTRDLG1JQUE4QztBQUMxRiw0Q0FBNEMsNkdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsU0FBUyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFFBQVEsS0FBSyxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFB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QTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jcmVhdGUtZG9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvaGVhZGVyLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2x1eC1jaXJjbGUtZHJhZ29uLXdoaXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2NpcmNsZS1wbHVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWcvdHJhc2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWcvZm9sZGVyLW9wZW4td2hpdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9pbWcvZm9sZGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgLS1tYWluLWJnLWNscjogI2ZmZmZmZjtcbiAgLS10ZXh0LW1haW4tY2xyOiBibGFjaztcbiAgLS10ZXh0LWhlYWRlci1jbHI6IHdoaXRlO1xuICAtLXRleHQtc2Vjb25kYXJ5LWNscjogIzgwODA4MDtcbiAgLS1wdXJwbGU6ICNjYzAwZmY7XG4gIC0tYmx1ZTogIzAwYzNmZjtcbiAgLS10ZWFsOiAjMDBmZmM4O1xuICAtLWxpZ2h0LXB1cnBsZTogI2Y5ZTNmZjtcbiAgLS1saWdodC1ibHVlOiAjYzNmMWZmO1xuICAtLWxpZ2h0LXRlYWw6ICNkNGViZTY7XG4gIC0tbGlnaHQtZ3JlZW46ICNjZGZmZTI7XG4gIC0tbmV3LXRhc2stYmc6ICM1ODRhODU7XG4gIC0tbGlnaHQtbmV3LXRhc2stYmc6ICNlMmRhZmY7XG4gIC0tZGFyay1iZzogIzI3MjAzZjtcbiAgLS1kYXJrLXRlYWw6ICM0N2I2OWE7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNTBweCA1MDBweCA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi8qIEhFQURFUiBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmhlYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkZXItY2xyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5oZWFkZXItbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaGVhZGVyLWxlZnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdmFyKC0tcHVycGxlKSxcbiAgICB2YXIoLS1ibHVlKSxcbiAgICB2YXIoLS10ZWFsKVxuICApO1xufVxuXG4ubG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ud2VsY29tZS1ncmVldGluZyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsaW5lLWhlaWdodDogMC42cmVtO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuXG4ud2VsY29tZS1uYW1lIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuXG4uaGVhZGVyLWRhdGUge1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRlci1jbHIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnRhc2stYW1vdW50IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKiBNQUlOIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubWFpbi13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jbHIpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tLFxuICAgIHZhcigtLWRhcmstYmcpLFxuICAgIHZhcigtLW5ldy10YXNrLWJnKVxuICApO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iZyk7XG59XG5cbi8qIFRBU0tTIFBBR0UgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi50YXNrcy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluLWNscik7XG59XG5cbi8qIENSRUFURSBORVcgRk9MREVSIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubmV3LWZvbGRlci1kaXYge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubmV3LWZvbGRlci1kaXYgPiBmb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICBjb2x1bW4tZ2FwOiAxMHB4O1xufVxuXG4ubmV3LWZvbGRlci1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmcpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5uZXctZm9sZGVyLWlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1iZyk7XG59XG5cbi5uZXctZm9sZGVyLXN1Ym1pdCB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcbiAgY29sb3I6IHZhcigtLXRleHQtaGVhZGVyLWNscik7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5uZXctZm9sZGVyLXN1Ym1pdDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZWFsKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tdGVhbCk7XG59XG5cbi8qIEZPTERFUiBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmZvbGRlci1saXN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9sZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmFkZC10YXNrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5lZGl0LWZvbGRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uZGVsZXRlLWZvbGRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uYWRkLXRhc2s6aG92ZXIsXG4uZWRpdC1mb2xkZXI6aG92ZXIsXG4uZGVsZXRlLWZvbGRlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLyogQ09MTEFQU0lCTEUgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5jb2xsYXBzaWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCgzLCA1MHB4KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRlci1jbHIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXctdGFzay1iZyk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5jb2xsYXBzaWJsZTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb2xsYXBzaWJsZTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLW1haW4tYmctY2xyKTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMzkwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb2xsYXBzaWJsZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZWFsKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tdGVhbCk7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRlYWwpO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hY3RpdmU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLW5ldy10YXNrLWJnKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbmV3LXRhc2stYmcpO1xufVxuXG4uZ3JvdyB7XG4gIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XG4gIC1tcy10cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLyogRURJVCBNT0RBTCBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLm1vZGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jbHIpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tbmV3LXRhc2stYmcpO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tbmV3LXRhc2stYmcpO1xuICBib3JkZXItbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDMwMHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4ubW9kYWw6OmJhY2tkcm9wIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vZGFsLWlucHV0IHtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1iZyk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG59XG5cbi5tb2RhbC1zdWJtaXQsXG4ubW9kYWwtY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRlci1jbHIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMnJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ubW9kYWwtc3VibWl0OmhvdmVyLFxuLm1vZGFsLWNhbmNlbDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZWFsKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tdGVhbCk7XG59XG5cbi8qIFRBU0sgTU9EQUwgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi50YXNrLW1vZGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jbHIpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tbmV3LXRhc2stYmcpO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tbmV3LXRhc2stYmcpO1xuICBib3JkZXItbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDIwMHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4udGFzay1tb2RhbDo6YmFja2Ryb3Age1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLnRhc2stbW9kYWwtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YXNrLW1vZGFsLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFzay1pbnB1dCB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmcpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YXNrLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiA0cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJnKTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFzay1zdWJtaXQsXG4udGFzay1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcbiAgY29sb3I6IHZhcigtLXRleHQtaGVhZGVyLWNscik7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi50YXNrLXN1Ym1pdDpob3Zlcixcbi50YXNrLWNhbmNlbDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZWFsKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tdGVhbCk7XG59XG5cbi8qIFRBU0sgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi50YXNrLXdyYXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDBweCA1MHB4IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY2xyKTtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4udGFzay13cmFwOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGVhbCk7XG59XG5cbi50YXNrLWVkaXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnRhc2stZGVsZXRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi50YXNrLWVkaXQ6aG92ZXIsXG4udGFzay1kZWxldGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi8qIEZPT1RFUiBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jbHIpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZm9vdGVyLXRleHQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNscik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFB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QUFFQSxnRUFBZ0U7O0FBRWhFO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5REFBcUM7RUFDckMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseURBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUEsa0VBQWtFOztBQUVsRTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWJnLWNscjogI2ZmZmZmZjtcXG4gIC0tdGV4dC1tYWluLWNscjogYmxhY2s7XFxuICAtLXRleHQtaGVhZGVyLWNscjogd2hpdGU7XFxuICAtLXRleHQtc2Vjb25kYXJ5LWNscjogIzgwODA4MDtcXG4gIC0tcHVycGxlOiAjY2MwMGZmO1xcbiAgLS1ibHVlOiAjMDBjM2ZmO1xcbiAgLS10ZWFsOiAjMDBmZmM4O1xcbiAgLS1saWdodC1wdXJwbGU6ICNmOWUzZmY7XFxuICAtLWxpZ2h0LWJsdWU6ICNjM2YxZmY7XFxuICAtLWxpZ2h0LXRlYWw6ICNkNGViZTY7XFxuICAtLWxpZ2h0LWdyZWVuOiAjY2RmZmUyO1xcbiAgLS1uZXctdGFzay1iZzogIzU4NGE4NTtcXG4gIC0tbGlnaHQtbmV3LXRhc2stYmc6ICNlMmRhZmY7XFxuICAtLWRhcmstYmc6ICMyNzIwM2Y7XFxuICAtLWRhcmstdGVhbDogIzQ3YjY5YTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjUwcHggNTAwcHggNTBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLyogSEVBREVSIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5oZWFkZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtaGVhZGVyLWNscik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaGVhZGVyLWJnLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRlci1sZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5oZWFkZXItbGVmdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgdmFyKC0tcHVycGxlKSxcXG4gICAgdmFyKC0tYmx1ZSksXFxuICAgIHZhcigtLXRlYWwpXFxuICApO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvbHV4LWNpcmNsZS1kcmFnb24td2hpdGUucG5nKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi53ZWxjb21lLWdyZWV0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDAuNnJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMSk7XFxufVxcblxcbi53ZWxjb21lLW5hbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiYSgwLCAwLCAwLCAxKTtcXG59XFxuXFxuLmhlYWRlci1kYXRlIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRlci1jbHIpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHRyYW5zcGFyZW50KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oZWFkZXItcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi50YXNrLWFtb3VudCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBNQUlOIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jbHIpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBib3R0b20sXFxuICAgIHZhcigtLWRhcmstYmcpLFxcbiAgICB2YXIoLS1uZXctdGFzay1iZylcXG4gICk7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iZyk7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iZyk7XFxufVxcblxcbi8qIFRBU0tTIFBBR0UgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnRhc2tzLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbi1jbHIpO1xcbn1cXG5cXG4vKiBDUkVBVEUgTkVXIEZPTERFUiBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubmV3LWZvbGRlci1kaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm5ldy1mb2xkZXItZGl2ID4gZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuXFxuLm5ldy1mb2xkZXItaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmcpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ubmV3LWZvbGRlci1pbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wdXJwbGUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1iZyk7XFxufVxcblxcbi5uZXctZm9sZGVyLXN1Ym1pdCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtaGVhZGVyLWNscik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubmV3LWZvbGRlci1zdWJtaXQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tdGVhbCk7XFxufVxcblxcbi8qIEZPTERFUiBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZm9sZGVyLWxpc3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvbGRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9jaXJjbGUtcGx1cy5zdmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uZWRpdC1mb2xkZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2VkaXQuc3ZnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmRlbGV0ZS1mb2xkZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL3RyYXNoLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlcixcXG4uZWRpdC1mb2xkZXI6aG92ZXIsXFxuLmRlbGV0ZS1mb2xkZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBDT0xMQVBTSUJMRSBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uY29sbGFwc2libGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCgzLCA1MHB4KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtaGVhZGVyLWNscik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXctdGFzay1iZyk7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uY29sbGFwc2libGU6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9mb2xkZXItb3Blbi13aGl0ZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb2xsYXBzaWJsZTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1tYWluLWJnLWNscik7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDM5MHB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNvbGxhcHNpYmxlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLXRlYWwpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGVhbCk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hY3RpdmU6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9mb2xkZXIuc3ZnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYWN0aXZlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXctdGFzay1iZyk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1uZXctdGFzay1iZyk7XFxufVxcblxcbi5ncm93IHtcXG4gIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XFxuICAtbXMtdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XFxuICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG5cXG4vKiBFRElUIE1PREFMIFNUWUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNscik7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tbmV3LXRhc2stYmcpO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLW5ldy10YXNrLWJnKTtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMzAwcHggYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ubW9kYWw6OmJhY2tkcm9wIHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWlucHV0IHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmcpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtc3VibWl0LFxcbi5tb2RhbC1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkZXItY2xyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5tb2RhbC1zdWJtaXQ6aG92ZXIsXFxuLm1vZGFsLWNhbmNlbDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS10ZWFsKTtcXG59XFxuXFxuLyogVEFTSyBNT0RBTCBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4udGFzay1tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNscik7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tbmV3LXRhc2stYmcpO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLW5ldy10YXNrLWJnKTtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjAwcHggYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4udGFzay1tb2RhbDo6YmFja2Ryb3Age1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4udGFzay1tb2RhbC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1tb2RhbC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1pbnB1dCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJnKTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50YXNrLXRleHRhcmVhIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJnKTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50YXNrLXN1Ym1pdCxcXG4udGFzay1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkZXItY2xyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi50YXNrLXN1Ym1pdDpob3ZlcixcXG4udGFzay1jYW5jZWw6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tdGVhbCk7XFxufVxcblxcbi8qIFRBU0sgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnRhc2std3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHggNTBweCA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jbHIpO1xcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi50YXNrLXdyYXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGVhbCk7XFxufVxcblxcbi50YXNrLWVkaXQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2VkaXQuc3ZnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnRhc2stZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy90cmFzaC5zdmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4udGFzay1lZGl0OmhvdmVyLFxcbi50YXNrLWRlbGV0ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi8qIEZPT1RFUiBTVFlMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZm9vdGVyLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jbHIpO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNscik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVuZGVyLCBjbGVhckxpc3QsIGZvbGRlckxpc3QgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgRk9MREVSUywgVEFTS1MgfSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5cbmxldCBjb250ZW50O1xubGV0IG5ld0ZvbGRlcjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURPTSA9IHtcbiAgY3JlYXRlRm9sZGVyRWxlbWVudCgpIHtcbiAgICBGT0xERVJTLmdldFN0b3JhZ2UoKTtcbiAgICBpZiAoRk9MREVSUy5uYW1lcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBGT0xERVJTLm5hbWVzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgbmV3Rm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0ZvbGRlci5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2libGVcIik7XG4gICAgICBuZXdGb2xkZXIuZGF0YXNldC5mb2xkZXJJRCA9IGZvbGRlci5pZDtcbiAgICAgIG5ld0ZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmIChncm93LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgIGdyb3cuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBncm93LnN0eWxlLmhlaWdodCA9IGdyb3cuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9sZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBmb2xkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLXRpdGxlXCIpO1xuICAgICAgZm9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSBmb2xkZXIubmFtZTtcblxuICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFza1wiKTtcbiAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZURPTS5hZGRUYXNrRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGVkaXRGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZWRpdEZvbGRlci5jbGFzc0xpc3QuYWRkKFwiZWRpdC1mb2xkZXJcIik7XG4gICAgICBlZGl0Rm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVET00uZWRpdEZvbGRlckVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBkZWxldGVGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGVsZXRlRm9sZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtZm9sZGVyXCIpO1xuICAgICAgZGVsZXRlRm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBGT0xERVJTLmRlbGV0ZU9iamVjdCk7XG5cbiAgICAgIGNvbnN0IGdyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3Jvdy5jbGFzc0xpc3QuYWRkKFwiZ3Jvd1wiKTtcblxuICAgICAgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250ZW50LmRhdGFzZXQuZm9sZGVySUQgPSBmb2xkZXIuaWQ7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgICBmb2xkZXJMaXN0LmFwcGVuZENoaWxkKG5ld0ZvbGRlcik7XG4gICAgICBuZXdGb2xkZXIuYXBwZW5kQ2hpbGQoZm9sZGVyVGl0bGUpO1xuICAgICAgbmV3Rm9sZGVyLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuICAgICAgbmV3Rm9sZGVyLmFwcGVuZENoaWxkKGVkaXRGb2xkZXIpO1xuICAgICAgbmV3Rm9sZGVyLmFwcGVuZENoaWxkKGRlbGV0ZUZvbGRlcik7XG4gICAgICBuZXdGb2xkZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgZ3Jvdyk7XG4gICAgICBncm93LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH0pO1xuICB9LFxuXG4gIGVkaXRGb2xkZXJFbGVtZW50KCkge1xuICAgIGNvbnN0IElEID0gdGhpcy5wYXJlbnRFbGVtZW50LmRhdGFzZXQuZm9sZGVySUQ7XG5cbiAgICBjb25zdCBtb2RhbERpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgbW9kYWxEaWFsb2cuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtb2RhbFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJJbnNlcnQgeW91ciBuZXcgZm9sZGVyIG5hbWVcIjtcblxuICAgIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZm9ybVwiKTtcbiAgICBtb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuXG4gICAgY29uc3QgbW9kYWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBtb2RhbElucHV0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1pbnB1dFwiKTtcbiAgICBtb2RhbElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIG1vZGFsSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImZvbGRlci1lZGl0XCIpO1xuICAgIG1vZGFsSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuICAgIG1vZGFsSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgICBjb25zdCBidXR0b25ESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkRJVi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWRpdlwiKTtcblxuICAgIGNvbnN0IG1vZGFsU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtb2RhbFN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtc3VibWl0XCIpO1xuICAgIG1vZGFsU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgbW9kYWxTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIG1vZGFsU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKG1vZGFsSW5wdXQudmFsdWUgPT09IG51bGwgfHwgbW9kYWxJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGT0xERVJTLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgRk9MREVSUy5uYW1lcy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICAgICAgICBpZiAoZm9sZGVyLmlkID09PSArSUQpIHtcbiAgICAgICAgICAgIGZvbGRlci5uYW1lID0gbW9kYWxJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIEZPTERFUlMuc2F2ZU9iamVjdCgpO1xuICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgICAgICBtb2RhbERpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb2RhbENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbW9kYWxDYW5jZWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNhbmNlbFwiKTtcbiAgICBtb2RhbENhbmNlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIG1vZGFsQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBtb2RhbENhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbW9kYWxEaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIGJ1dHRvbkRJVi5hcHBlbmQobW9kYWxTdWJtaXQsIG1vZGFsQ2FuY2VsKTtcbiAgICBtb2RhbEZvcm0uYXBwZW5kKG1vZGFsSW5wdXQsIGJ1dHRvbkRJVik7XG4gICAgbW9kYWxEaWFsb2cuYXBwZW5kKG1vZGFsVGl0bGUsIG1vZGFsRm9ybSk7XG4gICAgZm9sZGVyTGlzdC5hcHBlbmRDaGlsZChtb2RhbERpYWxvZyk7XG5cbiAgICBtb2RhbERpYWxvZy5zaG93TW9kYWwoKTtcbiAgfSxcblxuICBhZGRUYXNrRWxlbWVudCgpIHtcbiAgICBGT0xERVJTLklEID0gdGhpcy5wYXJlbnRFbGVtZW50LmRhdGFzZXQuZm9sZGVySUQ7XG4gICAgRk9MREVSUy5zYXZlSUQoKTtcblxuICAgIGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBtb2RhbERpYWxvZy5jbGFzc0xpc3QuYWRkKFwidGFzay1tb2RhbFwiKTtcblxuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbW9kYWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay1tb2RhbC10aXRsZVwiKTtcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJDcmVhdGUgeW91ciBuZXcgdGFza1wiO1xuXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1tb2RhbC1mb3JtXCIpO1xuICAgIHRhc2tGb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza05hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1sYWJlbFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIFRpdGxlXCI7XG4gICAgdGFza05hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLW5hbWVcIik7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLW5hbWVcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0Rlc2NMYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1sYWJlbFwiKTtcbiAgICB0YXNrRGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIHRhc2tEZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kZXNjXCIpO1xuXG4gICAgY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICB0YXNrRGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRleHRhcmVhXCIpO1xuICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZGVzY1wiKTtcbiAgICB0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKTtcblxuICAgIGNvbnN0IHRhc2tEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0RhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1sYWJlbFwiKTtcbiAgICB0YXNrRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICAgIHRhc2tEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kYXRlXCIpO1xuXG4gICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIpO1xuICAgIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdGFza0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kYXRlXCIpO1xuICAgIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgICBjb25zdCBidXR0b25ESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkRJVi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWRpdlwiKTtcblxuICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRhc2tTdWJtaXQuY2xhc3NMaXN0LmFkZChcInRhc2stc3VibWl0XCIpO1xuICAgIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICB0YXNrU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICB0YXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IHRhc2tOYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcbiAgICAgIGxldCB0YXNrRGVzYyA9IHRhc2tEZXNjSW5wdXQudmFsdWU7XG4gICAgICBsZXQgdGFza0RhdGUgPSB0YXNrRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgVEFTS1MuY3JlYXRlT2JqZWN0KHRhc2tOYW1lLCB0YXNrRGVzYywgdGFza0RhdGUpO1xuICAgICAgRk9MREVSUy5zYXZlT2JqZWN0KCk7XG4gICAgICBjcmVhdGVET00uY3JlYXRlVGFza0VsZW1lbnQoKTtcbiAgICAgIG1vZGFsRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0YXNrQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0YXNrQ2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNhbmNlbFwiKTtcbiAgICB0YXNrQ2FuY2VsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgdGFza0NhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgdGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbW9kYWxEaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIHRhc2tGb3JtLmFwcGVuZChcbiAgICAgIHRhc2tOYW1lTGFiZWwsXG4gICAgICB0YXNrTmFtZUlucHV0LFxuICAgICAgdGFza0Rlc2NMYWJlbCxcbiAgICAgIHRhc2tEZXNjSW5wdXQsXG4gICAgICB0YXNrRGF0ZUxhYmVsLFxuICAgICAgdGFza0RhdGVJbnB1dFxuICAgICk7XG4gICAgYnV0dG9uRElWLmFwcGVuZCh0YXNrU3VibWl0LCB0YXNrQ2FuY2VsKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChidXR0b25ESVYpO1xuICAgIG1vZGFsRGlhbG9nLmFwcGVuZChtb2RhbFRpdGxlLCB0YXNrRm9ybSk7XG4gICAgZm9sZGVyTGlzdC5hcHBlbmRDaGlsZChtb2RhbERpYWxvZyk7XG5cbiAgICBtb2RhbERpYWxvZy5zaG93TW9kYWwoKTtcbiAgfSxcblxuICBjcmVhdGVUYXNrRWxlbWVudCgpIHtcbiAgICBGT0xERVJTLmdldFN0b3JhZ2UoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEZPTERFUlMubmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRlbnRcIik7XG4gICAgICBjbGVhckxpc3QodGFyZ2V0Q29udGVudFtpXSk7XG5cbiAgICAgIGlmIChGT0xERVJTLm5hbWVzW2ldLnRhc2tzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5Tm90aWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGVtcHR5Tm90aWNlLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIk5vIHRhc2tzIGhlcmUgeWV0LCBjbGljayB0aGUgcGx1cyBidXR0b24gdG8gYWRkIHlvdXIgZmlyc3QgdGFzay5cIjtcblxuICAgICAgICB0YXJnZXRDb250ZW50W2ldLmFwcGVuZENoaWxkKGVtcHR5Tm90aWNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZPTERFUlMubmFtZXNbaV0udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhc2tXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0YXNrV3JhcC5jbGFzc0xpc3QuYWRkKFwidGFzay13cmFwXCIpO1xuICAgICAgICAgIHRhc2tXcmFwLmRhdGFzZXQudGFza0lEID0gdGFzay5pZDtcblxuICAgICAgICAgIGNvbnN0IG5hbWVEZXNjV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbmFtZURlc2NXcmFwLmNsYXNzTGlzdC5hZGQoXCJuYW1lLWRlc2Mtd3JhcFwiKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XG4gICAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NcIik7XG4gICAgICAgICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2M7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgdGFza0VkaXQuY2xhc3NMaXN0LmFkZChcInRhc2stZWRpdFwiKTtcbiAgICAgICAgICB0YXNrRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlRE9NLmVkaXRUYXNrRWxlbWVudCk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZVwiKTtcbiAgICAgICAgICB0YXNrRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBUQVNLUy5kZWxldGVPYmplY3QpO1xuXG4gICAgICAgICAgbmFtZURlc2NXcmFwLmFwcGVuZCh0YXNrTmFtZSwgdGFza0Rlc2MpO1xuICAgICAgICAgIHRhc2tXcmFwLmFwcGVuZChuYW1lRGVzY1dyYXAsIHRhc2tEYXRlLCB0YXNrRWRpdCwgdGFza0RlbGV0ZSk7XG5cbiAgICAgICAgICB0YXJnZXRDb250ZW50W2ldLmFwcGVuZENoaWxkKHRhc2tXcmFwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGVkaXRUYXNrRWxlbWVudCgpIHtcbiAgICBjb25zdCBJRCA9IHRoaXMucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2tJRDtcblxuICAgIGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBtb2RhbERpYWxvZy5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1vZGFsVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIkluc2VydCB5b3VyIG5ldyB0YXNrIG5hbWVcIjtcblxuICAgIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZm9ybVwiKTtcbiAgICBtb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuXG4gICAgY29uc3QgbW9kYWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBtb2RhbElucHV0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1pbnB1dFwiKTtcbiAgICBtb2RhbElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIG1vZGFsSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImZvbGRlci1lZGl0XCIpO1xuICAgIG1vZGFsSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuICAgIG1vZGFsSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgICBjb25zdCBidXR0b25ESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkRJVi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWRpdlwiKTtcblxuICAgIGNvbnN0IG1vZGFsU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtb2RhbFN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtc3VibWl0XCIpO1xuICAgIG1vZGFsU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgbW9kYWxTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIG1vZGFsU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKG1vZGFsSW5wdXQudmFsdWUgPT09IG51bGwgfHwgbW9kYWxJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGT0xERVJTLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgRk9MREVSUy5uYW1lcy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICAgICAgICBmb2xkZXIudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09ICtJRCkge1xuICAgICAgICAgICAgICB0YXNrLm5hbWUgPSBtb2RhbElucHV0LnZhbHVlO1xuICAgICAgICAgICAgICBGT0xERVJTLnNhdmVPYmplY3QoKTtcbiAgICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgICAgICAgIGNyZWF0ZURPTS5jcmVhdGVUYXNrRWxlbWVudCgpO1xuICAgICAgICAgICAgICBtb2RhbERpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG1vZGFsQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtb2RhbENhbmNlbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY2FuY2VsXCIpO1xuICAgIG1vZGFsQ2FuY2VsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgbW9kYWxDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIG1vZGFsQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtb2RhbERpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uRElWLmFwcGVuZChtb2RhbFN1Ym1pdCwgbW9kYWxDYW5jZWwpO1xuICAgIG1vZGFsRm9ybS5hcHBlbmQobW9kYWxJbnB1dCwgYnV0dG9uRElWKTtcbiAgICBtb2RhbERpYWxvZy5hcHBlbmQobW9kYWxUaXRsZSwgbW9kYWxGb3JtKTtcbiAgICBmb2xkZXJMaXN0LmFwcGVuZENoaWxkKG1vZGFsRGlhbG9nKTtcblxuICAgIG1vZGFsRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9LFxufTtcbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVET00gfSBmcm9tIFwiLi9jcmVhdGUtZG9tLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBGT0xERVJTID0ge1xuICBuYW1lczogW10sXG4gIElEOiBudWxsLFxuICBmb2xkZXJJRDogXCJsb2NhbFN0b3JlZElEXCIsXG4gIGtleTogXCJsb2NhbFN0b3JlZEZvbGRlcnNcIixcbiAgc3RvcmFnZTogd2luZG93LmxvY2FsU3RvcmFnZSxcbiAgZ2V0U3RvcmFnZSgpIHtcbiAgICBsZXQgZGF0YSA9IEZPTERFUlMuc3RvcmFnZS5nZXRJdGVtKEZPTERFUlMua2V5KTtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIEZPTERFUlMuc3RvcmFnZS5zZXRJdGVtKEZPTERFUlMua2V5LCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBGT0xERVJTLm5hbWVzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICByZXR1cm4gRk9MREVSUztcbiAgfSxcbiAgY3JlYXRlT2JqZWN0KG5hbWUpIHtcbiAgICBjb25zdCBuZXdGb2xkZXJPYmogPSB7XG4gICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB0YXNrczogW10sXG4gICAgfTtcbiAgICBGT0xERVJTLm5hbWVzLnB1c2gobmV3Rm9sZGVyT2JqKTtcbiAgfSxcbiAgc2F2ZU9iamVjdCgpIHtcbiAgICBGT0xERVJTLnN0b3JhZ2Uuc2V0SXRlbShGT0xERVJTLmtleSwgSlNPTi5zdHJpbmdpZnkoRk9MREVSUy5uYW1lcykpO1xuICB9LFxuICBzYXZlSUQoKSB7XG4gICAgRk9MREVSUy5zdG9yYWdlLnNldEl0ZW0oRk9MREVSUy5mb2xkZXJJRCwgSlNPTi5zdHJpbmdpZnkoRk9MREVSUy5JRCkpO1xuICB9LFxuICBnZXRJRCgpIHtcbiAgICBsZXQgZGF0YSA9IEZPTERFUlMuc3RvcmFnZS5nZXRJdGVtKEZPTERFUlMuZm9sZGVySUQpO1xuICAgIEZPTERFUlMuSUQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJldHVybiBGT0xERVJTO1xuICB9LFxuICBkZWxldGVPYmplY3QoKSB7XG4gICAgY29uc3QgSUQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZGF0YXNldC5mb2xkZXJJRDtcbiAgICBGT0xERVJTLmdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IEZPTERFUlMubmFtZXMuZmlsdGVyKChmb2xkZXIpID0+IGZvbGRlci5pZCAhPT0gK0lEKTtcbiAgICBGT0xERVJTLnN0b3JhZ2Uuc2V0SXRlbShGT0xERVJTLmtleSwgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWQpKTtcbiAgICByZW5kZXIoKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBUQVNLUyA9IHtcbiAgbmFtZXM6IFtdLFxuICBJRDogbnVsbCxcbiAgdGFza0lEOiBcImxvY2FsU3RvcmVkVGFza0lEXCIsXG4gIGNyZWF0ZU9iamVjdChuYW1lLCBkZXNjLCBkYXRlKSB7XG4gICAgY29uc3QgbmV3VGFza09iaiA9IHtcbiAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRlc2M6IGRlc2MsXG4gICAgICBkYXRlOiBkYXRlLFxuICAgIH07XG4gICAgRk9MREVSUy5nZXRTdG9yYWdlKCk7XG4gICAgRk9MREVSUy5nZXRJRCgpO1xuICAgIEZPTERFUlMubmFtZXMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgICBpZiAoZm9sZGVyLmlkID09PSArRk9MREVSUy5JRCkge1xuICAgICAgICBmb2xkZXIudGFza3MucHVzaChuZXdUYXNrT2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgc2F2ZUlEKCkge1xuICAgIEZPTERFUlMuc3RvcmFnZS5zZXRJdGVtKFRBU0tTLnRhc2tJRCwgSlNPTi5zdHJpbmdpZnkoVEFTS1MuSUQpKTtcbiAgfSxcbiAgZ2V0SUQoKSB7XG4gICAgbGV0IGRhdGEgPSBGT0xERVJTLnN0b3JhZ2UuZ2V0SXRlbShUQVNLUy50YXNrSUQpO1xuICAgIFRBU0tTLklEID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICByZXR1cm4gVEFTS1M7XG4gIH0sXG4gIGRlbGV0ZU9iamVjdCgpIHtcbiAgICBjb25zdCBJRCA9IHRoaXMucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2tJRDtcbiAgICBGT0xERVJTLmdldFN0b3JhZ2UoKTtcbiAgICBGT0xERVJTLm5hbWVzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSBmb2xkZXIudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSArSUQpO1xuICAgICAgZm9sZGVyLnRhc2tzID0gZmlsdGVyZWQ7XG4gICAgICBGT0xERVJTLnNhdmVPYmplY3QoKTtcbiAgICAgIHJlbmRlcigpO1xuICAgICAgY3JlYXRlRE9NLmNyZWF0ZVRhc2tFbGVtZW50KCk7XG4gICAgfSk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IEZPTERFUlMgfSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVET00gfSBmcm9tIFwiLi9jcmVhdGUtZG9tLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBmb2xkZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb2xkZXItY29sbGFwc2UtY29udGFpbmVyXCIpO1xuY29uc3QgbmV3Rm9sZGVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1mb2xkZXItaW5wdXRcIik7XG5jb25zdCBuZXdGb2xkZXJTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1mb2xkZXItc3VibWl0XCIpO1xuXG5uZXdGb2xkZXJTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKG5ld0ZvbGRlcklucHV0LnZhbHVlID09PSBudWxsIHx8IG5ld0ZvbGRlcklucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIEZPTERFUlMuZ2V0U3RvcmFnZSgpO1xuICAgIEZPTERFUlMuY3JlYXRlT2JqZWN0KG5ld0ZvbGRlcklucHV0LnZhbHVlKTtcbiAgICBGT0xERVJTLnNhdmVPYmplY3QoKTtcbiAgICByZW5kZXIoKTtcbiAgICBuZXdGb2xkZXJJbnB1dC52YWx1ZSA9IG51bGw7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICBjbGVhckxpc3QoZm9sZGVyTGlzdCk7XG4gIGNyZWF0ZURPTS5jcmVhdGVGb2xkZXJFbGVtZW50KCk7XG4gIGNyZWF0ZURPTS5jcmVhdGVUYXNrRWxlbWVudCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJMaXN0KGxpc3QpIHtcbiAgd2hpbGUgKGxpc3QuZmlyc3RDaGlsZCkge1xuICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5jcmVhdGVET00uY3JlYXRlRm9sZGVyRWxlbWVudCgpO1xuY3JlYXRlRE9NLmNyZWF0ZVRhc2tFbGVtZW50KCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9