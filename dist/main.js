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

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar Game = function Game() {\n  var _players;\n\n  function initShips() {\n    return [(0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2), (0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3), (0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3), (0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(4), (0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(5)];\n  }\n\n  return {\n    startNewGame: function startNewGame() {\n      var _AI$board, _player$board;\n\n      var player = (0,_Player_js__WEBPACK_IMPORTED_MODULE_2__.Player)((0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(10));\n      var AI = (0,_Player_js__WEBPACK_IMPORTED_MODULE_2__.Player)((0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(10)); //todo: change player to allow picking own coords\n\n      (_AI$board = AI.board).placeShipsRandomly.apply(_AI$board, _toConsumableArray(initShips()));\n\n      (_player$board = player.board).placeShipsRandomly.apply(_player$board, _toConsumableArray(initShips()));\n\n      _players = [player, AI];\n      return _toConsumableArray(_players);\n    }\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/Game.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar Gameboard = function Gameboard(length) {\n  var _initBoard = function _initBoard(len) {\n    var board = [];\n\n    for (var i = 0; i < len; i++) {\n      var row = [];\n\n      for (var j = 0; j < len; j++) {\n        row.push('');\n      }\n\n      board.push(row);\n    }\n\n    return board;\n  };\n\n  var _board = _initBoard(length);\n\n  var _ships = [];\n  return {\n    getGameboard: function getGameboard() {\n      return _toConsumableArray(_board);\n    },\n    placeShip: function placeShip(ship, row, col, orientation) {\n      if (!this.areCoordsUsed([row, col], ship)) {\n        var shipLength = ship.getLength();\n        var boardLength = _board[row].length;\n\n        if (orientation === 'horizontal') {\n          if (col + shipLength < boardLength) {\n            for (var i = 0; i < shipLength; i++) {\n              _board[row][col + i] = i.toString();\n              ship.addCoordinates(row, col + i);\n            }\n\n            _ships.push(ship);\n\n            return this.getGameboard();\n          }\n\n          return false;\n        } else if (orientation === 'vertical') {\n          if (row + shipLength < boardLength) {\n            for (var _i = 0; _i < shipLength; _i++) {\n              _board[row + _i][col] = _i.toString();\n              ship.addCoordinates(row + _i, col);\n            }\n\n            _ships.push(ship);\n\n            return this.getGameboard();\n          }\n\n          return false;\n        }\n      }\n    },\n    receiveAttack: function receiveAttack(coordArr) {\n      var row = coordArr[0];\n      var col = coordArr[1];\n\n      if (_board[row][col] !== 'x' && _board[row][col] !== 'o') {\n        var targetShip = this.findShipByCoords(coordArr);\n\n        if (targetShip) {\n          var targetStructure = targetShip.getStructure();\n\n          if (targetStructure[Number(_board[row][col])] !== 'x') {\n            targetShip.hit(Number(_board[row][col]));\n            _board[row][col] = 'x';\n            return this.getGameboard();\n          }\n\n          return false;\n        }\n\n        _board[row][col] = 'o';\n        return false;\n      }\n\n      return false;\n      /*\n      Take a coordinate array of [row,col]\n      determine whether that square has been targeted before\n      if it hasn't been targeted\n            determine if there is a ship there or not\n                    if there is a ship there\n                            find the ship object with passed arr and run hit(number from board)\n                            if it hasn't been hit\n                                    mark board with x and return true\n                            else return false\n                    else if no ship, mark with an o\n      else if it has been targeted before (o or x)\n            return false\n      */\n    },\n    getShips: function getShips() {\n      return [].concat(_ships);\n    },\n    findShipByCoords: function findShipByCoords(coordArr) {\n      var foundShip;\n      var coordString = JSON.stringify(coordArr);\n\n      _ships.forEach(function (ship) {\n        var shipCoords = ship.getCoordinates();\n        shipCoords.forEach(function (pair) {\n          if (JSON.stringify(pair) === coordString) {\n            foundShip = ship;\n          }\n        });\n      });\n\n      return foundShip;\n    },\n    areCoordsUsed: function areCoordsUsed(coordArr, ship) {\n      var board = this.getGameboard();\n      var row = coordArr[0];\n      var col = coordArr[1];\n      var shipLen = ship.getLength();\n      var shipOri = ship.getOrientation();\n      var boardLen = board.length;\n\n      for (var i = 0; i < shipLen; i++) {\n        if (shipOri === 'horizontal') {\n          if (col + shipLen < boardLen) {\n            if (board[row][col + i].toString() !== '') {\n              return true;\n            }\n          }\n        } else if (shipOri === 'vertical') {\n          if (row + shipLen < boardLen) {\n            if (board[row + i][col].toString() !== '') {\n              return true;\n            }\n          }\n        }\n      }\n\n      return false;\n    },\n    checkAllSunk: function checkAllSunk() {\n      return _ships.every(function (ship) {\n        return ship.isSunk() === true;\n      });\n    },\n    receiveRandomAttack: function receiveRandomAttack() {\n      var validCoords = false;\n\n      while (validCoords === false) {\n        var randX = Math.floor(Math.random() * _board.length);\n        var randY = Math.floor(Math.random() * _board.length);\n\n        if (_board[randX][randY] !== 'x' || 'o') {\n          return [randX, randY];\n        }\n      }\n    },\n    placeShipsRandomly: function placeShipsRandomly(ship1, ship2, ship3, ship4, ship5) {\n      var _this = this;\n\n      [ship1, ship2, ship3, ship4, ship5].forEach(function (ship) {\n        var randOrientation = Math.floor(Math.random() * 2);\n        ship.setOrientation(randOrientation === 1 ? 'vertical' : 'horizontal');\n        var validCoords = false;\n\n        while (validCoords === false) {\n          var randX = Math.floor(Math.random() * _board.length);\n          var randY = Math.floor(Math.random() * _board.length);\n\n          if (_this.placeShip(ship, randX, randY, ship.getOrientation())) {\n            validCoords = true;\n          }\n        }\n      });\n      return this.getGameboard();\n    }\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nvar Player = function Player(name, gameBoard) {\n  var _turn = false;\n  return {\n    board: gameBoard,\n    getTurn: function getTurn() {\n      return _turn;\n    },\n    toggleTurn: function toggleTurn() {\n      _turn = !_turn;\n    },\n    name: name\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar Ship = function Ship(length) {\n  var _length = length;\n\n  var _createStructure = function _createStructure(length) {\n    var structure = [];\n\n    for (var i = 0; i < length; i++) {\n      structure.push('');\n    }\n\n    return structure;\n  };\n\n  var _structure = _createStructure(_length);\n\n  var _coordinates = [];\n  var _orientation = '';\n  return {\n    isSunk: function isSunk() {\n      if (_structure.every(function (pos) {\n        return pos === 'x';\n      })) {\n        return true;\n      }\n\n      return false;\n    },\n    hit: function hit(position) {\n      if (_structure[position] !== 'x') {\n        _structure[position] = 'x';\n        return _toConsumableArray(_structure);\n      } else {\n        return false;\n      }\n    },\n    getStructure: function getStructure() {\n      return _toConsumableArray(_structure);\n    },\n    getLength: function getLength() {\n      return _length;\n    },\n    getCoordinates: function getCoordinates() {\n      return [].concat(_coordinates);\n    },\n    addCoordinates: function addCoordinates(row, col) {\n      _coordinates.push([row, col]);\n    },\n    getOrientation: function getOrientation() {\n      return _orientation;\n    },\n    setOrientation: function setOrientation(orientation) {\n      _orientation = orientation;\n    },\n    containsCoords: function containsCoords(coords) {\n      var hash = {};\n\n      var _coords = this.getCoordinates();\n\n      for (var i = 0; i < _coords.length; i++) {\n        hash[_coords[i]] = i;\n      }\n\n      return hash.hasOwnProperty(coords + ',');\n    }\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\nvar UI = function UI(size) {\n  var orientation = 'horizontal';\n  var shipsToPlace = [2, 3, 3, 4, 5];\n\n  var removeAllChildNodes = function removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  };\n\n  var initEventListeners = function initEventListeners() {// if needed?\n  };\n\n  var placeShipsPage = function placeShipsPage() {\n    removeAllChildNodes(document.querySelector('main'));\n    var banner = document.createElement('h2');\n    banner.id = 'banner';\n    banner.textContent = 'Place your ships';\n    document.querySelector('.wrapper').appendChild(banner);\n    createBoard('Player', size, document.querySelector('main'));\n    document.querySelector('.wrapper').appendChild(vertHorizBtn());\n  };\n\n  var createBoard = function createBoard(name, length, parent) {\n    var boardContainer = document.createElement('div');\n    boardContainer.classList.add('board-container');\n    boardContainer.id = \"\".concat(name, \"-board\");\n    boardContainer.addEventListener('mouseover', showShipPlacement);\n    boardContainer.addEventListener('mouseout', hideShipPlacement);\n\n    for (var i = 0; i < length; i++) {\n      for (var j = 0; j < length; j++) {\n        var row = i;\n        var col = j;\n        var boardTile = document.createElement('p');\n        boardTile.className = 'tile';\n        boardTile.id = row.toString() + col.toString();\n        boardContainer.appendChild(boardTile);\n      }\n    }\n\n    parent.appendChild(boardContainer);\n  };\n\n  var showShipPlacement = function showShipPlacement(e) {\n    if (e.target.className === 'tile') {\n      var row = parseInt(e.target.id[0]);\n      var col = parseInt(e.target.id[1]);\n      var len = shipsToPlace[0];\n\n      if (len > 0 && typeof len === 'number') {\n        if (getOrientation() === 'horizontal') {\n          if (col + len <= size) {\n            for (var i = col; i < col + len; i++) {\n              document.getElementById(\"\".concat(row).concat(i)).style.backgroundColor = '#81c784';\n            }\n          }\n        } else {\n          if (row + len <= size) {\n            for (var _i = row; _i < row + len; _i++) {\n              document.getElementById(\"\".concat(_i).concat(col)).style.backgroundColor = '#81c784';\n            }\n          }\n        }\n      } //console.log(`row: ${row}     col: ${col}`);\n\n    }\n  };\n\n  var hideShipPlacement = function hideShipPlacement(e) {\n    if (e.target.className === 'tile') {\n      var row = parseInt(e.target.id[0]);\n      var col = parseInt(e.target.id[1]);\n      var len = shipsToPlace[0];\n\n      if (len > 0 && typeof len === 'number') {\n        if (getOrientation() === 'horizontal') {\n          if (col + len <= size) {\n            for (var i = col; i < col + len; i++) {\n              document.getElementById(\"\".concat(row).concat(i)).style.backgroundColor = '#ffffff';\n            }\n          }\n        } else {\n          if (row + len <= size) {\n            for (var _i2 = row; _i2 < row + len; _i2++) {\n              document.getElementById(\"\".concat(_i2).concat(col)).style.backgroundColor = '#ffffff';\n            }\n          }\n        }\n      } //console.log(`row: ${row}     col: ${col}`);\n\n    }\n  };\n\n  var vertHorizBtn = function vertHorizBtn() {\n    var btn = document.createElement('div');\n    btn.className = 'vertHorizBtn';\n    btn.id = 'vertHorizBtn';\n    btn.textContent = 'Horizontal';\n    btn.addEventListener('click', changeOrientation);\n    return btn;\n  };\n\n  var changeOrientation = function changeOrientation() {\n    if (orientation === 'horizontal') {\n      orientation = 'vertical';\n    } else {\n      orientation = 'horizontal';\n    }\n\n    document.querySelector('.vertHorizBtn').textContent = toTitleCase(getOrientation());\n  };\n\n  var toTitleCase = function toTitleCase(str) {\n    var len = str.length;\n    var first = str[0].toUpperCase();\n    var rest = '';\n\n    for (var i = 1; i < len; i++) {\n      rest += str[i];\n    }\n\n    return first + rest;\n  };\n\n  var getOrientation = function getOrientation() {\n    return orientation;\n  };\n\n  return {\n    placeShipsPage: placeShipsPage,\n    createBoard: createBoard,\n    initEventListeners: initEventListeners,\n    showShipPlacement: showShipPlacement,\n    vertHorizBtn: vertHorizBtn,\n    getOrientation: getOrientation\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var playerBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(10);\n  var player = (0,_Player__WEBPACK_IMPORTED_MODULE_4__.Player)('Player', playerBoard);\n  var ui = (0,_UI__WEBPACK_IMPORTED_MODULE_0__.UI)(10);\n  ui.placeShipsPage();\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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