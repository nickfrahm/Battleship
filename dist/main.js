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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initEventListeners\": () => (/* binding */ initEventListeners),\n/* harmony export */   \"placeShipsPage\": () => (/* binding */ placeShipsPage),\n/* harmony export */   \"createBoard\": () => (/* binding */ createBoard),\n/* harmony export */   \"showShipPlacement\": () => (/* binding */ showShipPlacement)\n/* harmony export */ });\nvar len = 2;\n\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nvar initEventListeners = function initEventListeners() {//\n};\nvar placeShipsPage = function placeShipsPage() {\n  removeAllChildNodes(document.querySelector('main'));\n  createBoard('Player', 10, document.querySelector('main'));\n};\nvar createBoard = function createBoard(name, length, parent) {\n  var boardContainer = document.createElement('div');\n  boardContainer.classList.add('board-container');\n  boardContainer.id = \"\".concat(name, \"-board\");\n\n  for (var i = 0; i < length; i++) {\n    for (var j = 0; j < length; j++) {\n      var row = i;\n      var col = j;\n      var boardTile = document.createElement('p');\n      boardTile.className = 'tile';\n      boardTile.addEventListener('mouseover', showShipPlacement);\n      boardTile.len = len;\n      boardTile.id = row.toString() + col.toString();\n      boardContainer.appendChild(boardTile);\n    }\n  }\n\n  parent.appendChild(boardContainer);\n};\nvar showShipPlacement = function showShipPlacement(e) {\n  var shipUI = document.createElement('div');\n  shipUI.className('ship-tile-container');\n\n  for (var i = 0; i < e.currentTarget.len; i++) {\n    var shipTile = document.createElement('p');\n    shipTile.classList.add('tile', 'ship-tile');\n    shipUI.appendChild(shipTile);\n  }\n\n  return shipUI;\n};\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_UI__WEBPACK_IMPORTED_MODULE_0__.placeShipsPage)();\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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