/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  const contact = document.createElement('div');\n\n  const desc = document.createElement('p');\n  desc.textContent = 'this is contact content';\n\n  contact.appendChild(desc);\n\n  return contact;\n}\n\n\n//# sourceURL=webpack://bakery-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\n  const footer = document.createElement('footer');\n  footer.innerHTML = 'THIS IS THE BAKERY FOOTER';\n\n  return footer;\n}\n\n\n//# sourceURL=webpack://bakery-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header() {\n  const header = document.createElement('header');\n\n  const name = document.createElement('h1');\n  name.textContent = 'All You Knead Is Loaf';\n\n  const desc = document.createElement('p');\n  desc.textContent = 'Artisanal Vegan Bakery';\n\n  const navBar = document.createElement('nav');\n\n  const homeBtn = document.createElement('button');\n  homeBtn.textContent = 'HOME';\n\n  const menuBtn = document.createElement('button');\n  menuBtn.textContent = 'MENU';\n\n  const contactBtn = document.createElement('button');\n  contactBtn.textContent = 'CONTACT';\n\n  navBar.appendChild(homeBtn);\n  navBar.appendChild(menuBtn);\n  navBar.appendChild(contactBtn);\n\n  header.appendChild(name);\n  header.appendChild(desc);\n  header.appendChild(navBar);\n\n  return header;\n}\n\n\n//# sourceURL=webpack://bakery-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n  const home = document.createElement('div');\n\n  const desc = document.createElement('p');\n  desc.textContent = 'this is home content';\n\n  home.appendChild(desc);\n\n  return home;\n}\n\n\n//# sourceURL=webpack://bakery-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n// import './styles/style.css';\n\n\n\n\n\n\nconst content = document.getElementById('content');\n\nfunction loadPage(header, main, footer) {\n  content.innerText = '';\n  content.append(header());\n  content.append(main());\n  content.append(footer());\n}\n\ndocument.addEventListener('click', (e) => {\n  const target = e.target.innerText;\n\n  if (target === 'HOME') { loadPage(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); }\n  if (target === 'MENU') { loadPage(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); }\n  if (target === 'CONTACT') { loadPage(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); }\n});\n\nloadPage(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n//# sourceURL=webpack://bakery-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  const menu = document.createElement('div');\n\n  const desc = document.createElement('p');\n  desc.textContent = 'this is menu content';\n\n  menu.appendChild(desc);\n\n  return menu;\n}\n\n\n//# sourceURL=webpack://bakery-page/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;