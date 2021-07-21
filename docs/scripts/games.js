/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"games": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/sites/runbooks.app/scripts/games.coffee","shared"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/coffee-loader/index.js!./src/coffee/components/pellet/script.coffee?vue&type=script&lang=coffee&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/coffee-loader!./src/coffee/components/pellet/script.coffee?vue&type=script&lang=coffee& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register */ \"./src/coffee/components/register.coffee\");\nvar PelletComponent;\n\n\n\n//#######################################################################################################################\n/* harmony default export */ __webpack_exports__[\"default\"] = (PelletComponent = {\n  name: \"c-pellet\",\n  computed: {\n    styleOverrides: function() {\n      if (this.pellet == null) {\n        return {};\n      }\n      return {\n        height: `${this.cellSize}px`,\n        left: `${this.pellet.bounds.x * this.cellSize}px`,\n        top: `${this.pellet.bounds.y * this.cellSize}px`,\n        width: `${this.cellSize}px`\n      };\n    }\n  },\n  props: {\n    cellSize: {\n      type: Number,\n      required: true\n    },\n    pellet: {\n      type: Object,\n      required: false\n    }\n  }\n});\n\n//#######################################################################################################################\nObject(_register__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(PelletComponent);\n\n\n//# sourceURL=webpack:///./src/coffee/components/pellet/script.coffee?./node_modules/coffee-loader");

/***/ }),

/***/ "./node_modules/coffee-loader/index.js!./src/coffee/components/snake/script.coffee?vue&type=script&lang=coffee&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/coffee-loader!./src/coffee/components/snake/script.coffee?vue&type=script&lang=coffee& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register */ \"./src/coffee/components/register.coffee\");\nvar SnakeComponent;\n\n\n\n//#######################################################################################################################\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakeComponent = {\n  name: \"c-snake\",\n  computed: {\n    headStyleOverrides: function() {\n      if (this.snake == null) {\n        return {};\n      }\n      return {\n        height: `${this.cellSize}px`,\n        left: `${this.snake.bounds.x * this.cellSize}px`,\n        top: `${this.snake.bounds.y * this.cellSize}px`,\n        width: `${this.cellSize}px`\n      };\n    },\n    segments: function() {\n      if (this.snake == null) {\n        return [];\n      }\n      return this.snake.segments;\n    }\n  },\n  methods: {\n    getSegmentStyleOverrides: function(segment) {\n      if (this.snake == null) {\n        return {};\n      }\n      return {\n        height: `${this.cellSize}px`,\n        left: `${segment.bounds.x * this.cellSize}px`,\n        top: `${segment.bounds.y * this.cellSize}px`,\n        width: `${this.cellSize}px`\n      };\n    }\n  },\n  props: {\n    cellSize: {\n      type: Number,\n      required: true\n    },\n    snake: {\n      type: Object,\n      required: false\n    }\n  }\n});\n\n//#######################################################################################################################\nObject(_register__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SnakeComponent);\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake/script.coffee?./node_modules/coffee-loader");

/***/ }),

/***/ "./node_modules/coffee-loader/index.js!./src/coffee/components/snake_board/script.coffee?vue&type=script&lang=coffee&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/coffee-loader!./src/coffee/components/snake_board/script.coffee?vue&type=script&lang=coffee& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pellet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pellet/component */ \"./src/coffee/components/pellet/component.vue\");\n/* harmony import */ var _snake_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snake/component */ \"./src/coffee/components/snake/component.vue\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register */ \"./src/coffee/components/register.coffee\");\nvar SnakeBoardComponent;\n\n\n\n\n\n\n\n//#######################################################################################################################\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakeBoardComponent = {\n  name: \"c-snake-board\",\n  computed: {\n    height: function() {\n      return this.cellSize * this.game.board.height;\n    },\n    styleOverrides: function() {\n      return {\n        height: `${this.height}px`,\n        width: `${this.width}px`\n      };\n    },\n    width: function() {\n      return this.cellSize * this.game.board.width;\n    }\n  },\n  methods: {\n    onClick: function() {\n      return this.game.reset();\n    }\n  },\n  props: {\n    cellSize: {\n      type: Number,\n      default: 10\n    },\n    game: {\n      type: Object,\n      required: true\n    }\n  }\n});\n\n//#######################################################################################################################\nObject(_register__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SnakeBoardComponent);\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_board/script.coffee?./node_modules/coffee-loader");

/***/ }),

/***/ "./node_modules/coffee-loader/index.js!./src/coffee/components/snake_page/script.coffee?vue&type=script&lang=coffee&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/coffee-loader!./src/coffee/components/snake_page/script.coffee?vue&type=script&lang=coffee& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snake_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snake_board/component */ \"./src/coffee/components/snake_board/component.vue\");\n/* harmony import */ var _games_snake_snake_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../games/snake/snake_game */ \"./src/coffee/games/snake/snake_game.coffee\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register */ \"./src/coffee/components/register.coffee\");\nvar SnakePageComponent;\n\n\n\n\n\n\n\n//#######################################################################################################################\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakePageComponent = {\n  name: \"c-snake-page\",\n  destroyed: function() {\n    return this.game.stop();\n  },\n  data: function() {\n    return {\n      game: new _games_snake_snake_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n    };\n  },\n  props: {\n    cellSize: {\n      type: Number,\n      default: 10\n    }\n  }\n});\n\n//#######################################################################################################################\nObject(_register__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SnakePageComponent);\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_page/script.coffee?./node_modules/coffee-loader");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/pellet/style.scss?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/pellet/style.scss?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".c-pellet {\\n  position: absolute;\\n  background: cyan;\\n  z-index: 2;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/coffee/components/pellet/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake/style.scss?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake/style.scss?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".c-snake {\\n  overflow: visible;\\n}\\n.c-snake .head, .c-snake .segment {\\n    position: absolute;\\n}\\n.c-snake .head {\\n    background: lime;\\n    z-index: 1;\\n}\\n.c-snake .segment {\\n    background: green;\\n    z-index: 0;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_board/style.scss?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_board/style.scss?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".c-snake-board {\\n  /* self layout */\\n  position: relative;\\n  /* decoration */\\n  background: black;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_board/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_page/style.scss?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_page/style.scss?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"Fira Code\\\";\\n  font-style: normal;\\n  font-weight: 300 700;\\n  src: url(\\\"/fonts/fira-code.ttf\\\") format(\\\"truetype\\\");\\n}\\n@font-face {\\n  font-family: \\\"Roboto Slab\\\";\\n  font-style: normal;\\n  font-weight: 100 900;\\n  src: url(\\\"/fonts/roboto-slab.ttf\\\") format(\\\"truetype\\\");\\n}\\n@font-face {\\n  font-family: \\\"Rubik\\\";\\n  font-style: normal;\\n  font-weight: 300 900;\\n  src: url(\\\"/fonts/rubik.ttf\\\") format(\\\"truetype\\\");\\n}\\n@font-face {\\n  font-family: \\\"Rubik\\\";\\n  font-style: italic;\\n  font-weight: 300 900;\\n  src: url(\\\"/fonts/rubik-italic.ttf\\\") format(\\\"truetype\\\");\\n}\\n.due-date.overdue {\\n  color: #bf1414;\\n}\\n.due-date.due {\\n  color: #2E5FA5;\\n}\\n.due-date.due-soon {\\n  color: #79a1da;\\n}\\n.due-date.not-due {\\n  color: #b5cbea;\\n}\\n.c-snake-page {\\n  /* child layout */\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_page/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./src/coffee/components/pellet/template.pug?vue&type=template&id=2b49ce01&lang=pug&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./src/coffee/components/pellet/template.pug?vue&type=template&id=2b49ce01&lang=pug& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"c-pellet\", style: _vm.styleOverrides })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/coffee/components/pellet/template.pug?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./src/coffee/components/snake/template.pug?vue&type=template&id=1d8a1d8f&lang=pug&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./src/coffee/components/snake/template.pug?vue&type=template&id=1d8a1d8f&lang=pug& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"c-snake\" },\n    [\n      _c(\"div\", { staticClass: \"head\", style: _vm.headStyleOverrides }),\n      _vm._l(_vm.segments, function(segment) {\n        return _c(\"div\", {\n          key: segment.id,\n          staticClass: \"segment\",\n          style: _vm.getSegmentStyleOverrides(segment)\n        })\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake/template.pug?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./src/coffee/components/snake_board/template.pug?vue&type=template&id=09b57476&lang=pug&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./src/coffee/components/snake_board/template.pug?vue&type=template&id=09b57476&lang=pug& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"c-snake-board\",\n      style: _vm.styleOverrides,\n      on: { click: _vm.onClick }\n    },\n    [\n      _c(\"c-snake\", {\n        attrs: { \"cell-size\": _vm.cellSize, snake: _vm.game.snake }\n      }),\n      _c(\"c-pellet\", {\n        attrs: { \"cell-size\": _vm.cellSize, pellet: _vm.game.pellet }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_board/template.pug?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./src/coffee/components/snake_page/template.pug?vue&type=template&id=d9d174ea&lang=pug&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./src/coffee/components/snake_page/template.pug?vue&type=template&id=d9d174ea&lang=pug& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"c-snake-page\" },\n    [\n      _c(\"c-snake-board\", {\n        attrs: { game: _vm.game, \"cell-size\": _vm.cellSize }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_page/template.pug?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/pellet/style.scss?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/pellet/style.scss?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/pellet/style.scss?vue&type=style&index=0&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"4864e098\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/coffee/components/pellet/style.scss?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake/style.scss?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake/style.scss?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake/style.scss?vue&type=style&index=0&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"801c0040\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/coffee/components/snake/style.scss?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_board/style.scss?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_board/style.scss?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_board/style.scss?vue&type=style&index=0&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"74b806ce\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/coffee/components/snake_board/style.scss?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_page/style.scss?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_page/style.scss?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_page/style.scss?vue&type=style&index=0&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"19acf2ea\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/coffee/components/snake_page/style.scss?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/coffee/components/pellet/component.vue":
/*!****************************************************!*\
  !*** ./src/coffee/components/pellet/component.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_pug_vue_type_template_id_2b49ce01_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.pug?vue&type=template&id=2b49ce01&lang=pug& */ \"./src/coffee/components/pellet/template.pug?vue&type=template&id=2b49ce01&lang=pug&\");\n/* harmony import */ var _script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.coffee?vue&type=script&lang=coffee& */ \"./src/coffee/components/pellet/script.coffee?vue&type=script&lang=coffee&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&lang=scss& */ \"./src/coffee/components/pellet/style.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _template_pug_vue_type_template_id_2b49ce01_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _template_pug_vue_type_template_id_2b49ce01_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/coffee/components/pellet/component.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/coffee/components/pellet/component.vue?");

/***/ }),

/***/ "./src/coffee/components/pellet/script.coffee?vue&type=script&lang=coffee&":
/*!*********************************************************************************!*\
  !*** ./src/coffee/components/pellet/script.coffee?vue&type=script&lang=coffee& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_coffee_loader_index_js_script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/coffee-loader!./script.coffee?vue&type=script&lang=coffee& */ \"./node_modules/coffee-loader/index.js!./src/coffee/components/pellet/script.coffee?vue&type=script&lang=coffee&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_coffee_loader_index_js_script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/coffee/components/pellet/script.coffee?");

/***/ }),

/***/ "./src/coffee/components/pellet/style.scss?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./src/coffee/components/pellet/style.scss?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/pellet/style.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/coffee/components/pellet/style.scss?");

/***/ }),

/***/ "./src/coffee/components/pellet/template.pug?vue&type=template&id=2b49ce01&lang=pug&":
/*!*******************************************************************************************!*\
  !*** ./src/coffee/components/pellet/template.pug?vue&type=template&id=2b49ce01&lang=pug& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_2b49ce01_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/pug-plain-loader!./template.pug?vue&type=template&id=2b49ce01&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./src/coffee/components/pellet/template.pug?vue&type=template&id=2b49ce01&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_2b49ce01_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_2b49ce01_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/coffee/components/pellet/template.pug?");

/***/ }),

/***/ "./src/coffee/components/snake/component.vue":
/*!***************************************************!*\
  !*** ./src/coffee/components/snake/component.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_pug_vue_type_template_id_1d8a1d8f_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.pug?vue&type=template&id=1d8a1d8f&lang=pug& */ \"./src/coffee/components/snake/template.pug?vue&type=template&id=1d8a1d8f&lang=pug&\");\n/* harmony import */ var _script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.coffee?vue&type=script&lang=coffee& */ \"./src/coffee/components/snake/script.coffee?vue&type=script&lang=coffee&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&lang=scss& */ \"./src/coffee/components/snake/style.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _template_pug_vue_type_template_id_1d8a1d8f_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _template_pug_vue_type_template_id_1d8a1d8f_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/coffee/components/snake/component.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/coffee/components/snake/component.vue?");

/***/ }),

/***/ "./src/coffee/components/snake/script.coffee?vue&type=script&lang=coffee&":
/*!********************************************************************************!*\
  !*** ./src/coffee/components/snake/script.coffee?vue&type=script&lang=coffee& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_coffee_loader_index_js_script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/coffee-loader!./script.coffee?vue&type=script&lang=coffee& */ \"./node_modules/coffee-loader/index.js!./src/coffee/components/snake/script.coffee?vue&type=script&lang=coffee&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_coffee_loader_index_js_script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/coffee/components/snake/script.coffee?");

/***/ }),

/***/ "./src/coffee/components/snake/style.scss?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./src/coffee/components/snake/style.scss?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake/style.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake/style.scss?");

/***/ }),

/***/ "./src/coffee/components/snake/template.pug?vue&type=template&id=1d8a1d8f&lang=pug&":
/*!******************************************************************************************!*\
  !*** ./src/coffee/components/snake/template.pug?vue&type=template&id=1d8a1d8f&lang=pug& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_1d8a1d8f_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/pug-plain-loader!./template.pug?vue&type=template&id=1d8a1d8f&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./src/coffee/components/snake/template.pug?vue&type=template&id=1d8a1d8f&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_1d8a1d8f_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_1d8a1d8f_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake/template.pug?");

/***/ }),

/***/ "./src/coffee/components/snake_board/component.vue":
/*!*********************************************************!*\
  !*** ./src/coffee/components/snake_board/component.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_pug_vue_type_template_id_09b57476_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.pug?vue&type=template&id=09b57476&lang=pug& */ \"./src/coffee/components/snake_board/template.pug?vue&type=template&id=09b57476&lang=pug&\");\n/* harmony import */ var _script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.coffee?vue&type=script&lang=coffee& */ \"./src/coffee/components/snake_board/script.coffee?vue&type=script&lang=coffee&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&lang=scss& */ \"./src/coffee/components/snake_board/style.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _template_pug_vue_type_template_id_09b57476_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _template_pug_vue_type_template_id_09b57476_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/coffee/components/snake_board/component.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/coffee/components/snake_board/component.vue?");

/***/ }),

/***/ "./src/coffee/components/snake_board/script.coffee?vue&type=script&lang=coffee&":
/*!**************************************************************************************!*\
  !*** ./src/coffee/components/snake_board/script.coffee?vue&type=script&lang=coffee& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_coffee_loader_index_js_script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/coffee-loader!./script.coffee?vue&type=script&lang=coffee& */ \"./node_modules/coffee-loader/index.js!./src/coffee/components/snake_board/script.coffee?vue&type=script&lang=coffee&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_coffee_loader_index_js_script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/coffee/components/snake_board/script.coffee?");

/***/ }),

/***/ "./src/coffee/components/snake_board/style.scss?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./src/coffee/components/snake_board/style.scss?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_board/style.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_board/style.scss?");

/***/ }),

/***/ "./src/coffee/components/snake_board/template.pug?vue&type=template&id=09b57476&lang=pug&":
/*!************************************************************************************************!*\
  !*** ./src/coffee/components/snake_board/template.pug?vue&type=template&id=09b57476&lang=pug& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_09b57476_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/pug-plain-loader!./template.pug?vue&type=template&id=09b57476&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./src/coffee/components/snake_board/template.pug?vue&type=template&id=09b57476&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_09b57476_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_09b57476_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_board/template.pug?");

/***/ }),

/***/ "./src/coffee/components/snake_page/component.vue":
/*!********************************************************!*\
  !*** ./src/coffee/components/snake_page/component.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_pug_vue_type_template_id_d9d174ea_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.pug?vue&type=template&id=d9d174ea&lang=pug& */ \"./src/coffee/components/snake_page/template.pug?vue&type=template&id=d9d174ea&lang=pug&\");\n/* harmony import */ var _script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.coffee?vue&type=script&lang=coffee& */ \"./src/coffee/components/snake_page/script.coffee?vue&type=script&lang=coffee&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&lang=scss& */ \"./src/coffee/components/snake_page/style.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _template_pug_vue_type_template_id_d9d174ea_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _template_pug_vue_type_template_id_d9d174ea_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/coffee/components/snake_page/component.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/coffee/components/snake_page/component.vue?");

/***/ }),

/***/ "./src/coffee/components/snake_page/script.coffee?vue&type=script&lang=coffee&":
/*!*************************************************************************************!*\
  !*** ./src/coffee/components/snake_page/script.coffee?vue&type=script&lang=coffee& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_coffee_loader_index_js_script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/coffee-loader!./script.coffee?vue&type=script&lang=coffee& */ \"./node_modules/coffee-loader/index.js!./src/coffee/components/snake_page/script.coffee?vue&type=script&lang=coffee&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_coffee_loader_index_js_script_coffee_vue_type_script_lang_coffee___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/coffee/components/snake_page/script.coffee?");

/***/ }),

/***/ "./src/coffee/components/snake_page/style.scss?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./src/coffee/components/snake_page/style.scss?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./src/coffee/components/snake_page/style.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_page/style.scss?");

/***/ }),

/***/ "./src/coffee/components/snake_page/template.pug?vue&type=template&id=d9d174ea&lang=pug&":
/*!***********************************************************************************************!*\
  !*** ./src/coffee/components/snake_page/template.pug?vue&type=template&id=d9d174ea&lang=pug& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_d9d174ea_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/pug-plain-loader!./template.pug?vue&type=template&id=d9d174ea&lang=pug& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./src/coffee/components/snake_page/template.pug?vue&type=template&id=d9d174ea&lang=pug&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_d9d174ea_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_template_pug_vue_type_template_id_d9d174ea_lang_pug___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/coffee/components/snake_page/template.pug?");

/***/ }),

/***/ "./src/coffee/games/bounds.coffee":
/*!****************************************!*\
  !*** ./src/coffee/games/bounds.coffee ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Bounds;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bounds = (function() {\n  class Bounds {\n    constructor(options = {}) {\n      this._height = options.height ? options.height : 1;\n      this._width = options.width ? options.width : 1;\n      this._x = options.x != null ? options.x : 0;\n      this._y = options.y != null ? options.y : 0;\n    }\n\n    // Public Methods ###############################################################################\n    isOverlappingWith(other) {\n      var maxX, maxY, minX, minY;\n      if (other == null) {\n        return false;\n      }\n      maxX = Math.min(this.maxX, other.maxX);\n      maxY = Math.min(this.maxY, other.maxY);\n      minX = Math.max(this.minX, other.minX);\n      minY = Math.max(this.minY, other.minY);\n      return (minX < maxX) && (minY < maxY);\n    }\n\n    move(x, y) {\n      return new Bounds({\n        x: x,\n        y: y,\n        width: this.width,\n        height: this.height\n      });\n    }\n\n    resize(width, height) {\n      return new Bounds({\n        x: this.x,\n        y: this.y,\n        width: width,\n        height: height\n      });\n    }\n\n  };\n\n  // Properties ###################################################################################\n  Object.defineProperties(Bounds.prototype, {\n    height: {\n      get: function() {\n        return this._height;\n      }\n    },\n    maxX: {\n      get: function() {\n        return this._x + this._width;\n      }\n    },\n    maxY: {\n      get: function() {\n        return this._y + this._height;\n      }\n    },\n    minX: {\n      get: function() {\n        return this._x;\n      }\n    },\n    minY: {\n      get: function() {\n        return this._y;\n      }\n    },\n    width: {\n      get: function() {\n        return this._width;\n      }\n    },\n    x: {\n      get: function() {\n        return this._x;\n      }\n    },\n    y: {\n      get: function() {\n        return this._y;\n      }\n    }\n  });\n\n  return Bounds;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/bounds.coffee?");

/***/ }),

/***/ "./src/coffee/games/clock.coffee":
/*!***************************************!*\
  !*** ./src/coffee/games/clock.coffee ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable */ \"./src/coffee/games/observable.coffee\");\nvar Clock;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clock = (function() {\n  //#######################################################################################################################\n  class Clock extends _observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(ticksPerSecond = 30) {\n      super();\n      this._currentTickStart = void 0;\n      this._intervalId = void 0;\n      this._priorTickStart = void 0;\n      this.ticksPerSecond = ticksPerSecond;\n    }\n\n    // Public Methods ###############################################################################\n    start() {\n      if (this.isRunning) {\n        return;\n      }\n      this._currentTickStart = Date.now();\n      return this._intervalId = setInterval((() => {\n        return this._doTick();\n      }), 1.0 / this.ticksPerSecond * 1000);\n    }\n\n    stop() {\n      if (!this.isRunning) {\n        return;\n      }\n      clearInterval(this._intervalId);\n      return this._intervalId = void 0;\n    }\n\n    // Overridden Methods ###########################################################################\n    _isRecognizedEvent(eventName) {\n      if (eventName === \"tick\") {\n        return true;\n      }\n      return super._isRecognizedEvent();\n    }\n\n    // Private Methods ##############################################################################\n    _doTick() {\n      var e;\n      if (this._intervalId == null) {\n        return;\n      }\n      this._priorTickStart = this._currentTickStart;\n      this._currentTickStart = Date.now();\n      try {\n        return this.emit(\"tick\");\n      } catch (error) {\n        e = error;\n        return console.error(\"an error occurred during the clock tick:\", e);\n      }\n    }\n\n  };\n\n  // Properties ###################################################################################\n  Object.defineProperties(Clock.prototype, {\n    currentTickStart: {\n      get: function() {\n        return this._currentTickStart;\n      }\n    },\n    isRunning: {\n      get: function() {\n        return this._intervalId != null;\n      }\n    },\n    priorTickStart: {\n      get: function() {\n        return this._priorTickStart;\n      }\n    },\n    ticksPerSecond: {\n      get: function() {\n        return this._ticksPerSecond;\n      },\n      set: function(value) {\n        if (typeof value !== \"number\") {\n          throw Error(`ticksPerSecond must be a 'number', but a ${typeof value} was given`);\n        }\n        return this._ticksPerSecond = value;\n      }\n    }\n  });\n\n  return Clock;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/clock.coffee?");

/***/ }),

/***/ "./src/coffee/games/game.coffee":
/*!**************************************!*\
  !*** ./src/coffee/games/game.coffee ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ \"./src/coffee/games/clock.coffee\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ \"./src/coffee/games/keyboard.coffee\");\n/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable */ \"./src/coffee/games/observable.coffee\");\n/* harmony import */ var _positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./positionable */ \"./src/coffee/games/positionable.coffee\");\nvar Game,\n  indexOf = [].indexOf;\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game = (function() {\n  //#######################################################################################################################\n  class Game extends _observable__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(options = {}) {\n      super();\n      this._keyboard = options.keyboard != null ? options.keyboard : new _keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n      this._clock = options.clock != null ? options.clock : new _clock__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.clock.on(\"tick\", () => {\n        return this._doTick();\n      });\n      this._isPaused = false;\n      this._nextModelId = 0;\n      this._models = [];\n    }\n\n    // Public Methods ###############################################################################\n    createModel(cls, options = {}) {\n      var id, model;\n      id = this._nextModelId++;\n      model = new cls({\n        ...options,\n        game: this,\n        id: id\n      });\n      this._models.push(model);\n      this.emit(\"modelCreated\", model);\n      return model;\n    }\n\n    destroyModel(model) {\n      var existingModel, i, len, ref, remainingModels;\n      remainingModels = [];\n      ref = this._models;\n      for (i = 0, len = ref.length; i < len; i++) {\n        existingModel = ref[i];\n        if (existingModel.id !== model.id) {\n          remainingModels.push(existingModel);\n        } else {\n          model._game = void 0;\n          this.emit(\"modelDestroyed\", model);\n        }\n      }\n      return this._models = remainingModels;\n    }\n\n    findModel(name) {\n      var i, len, model, ref;\n      ref = this._models;\n      for (i = 0, len = ref.length; i < len; i++) {\n        model = ref[i];\n        if (model.constructor.name === name) {\n          return model;\n        }\n      }\n    }\n\n    findAllModels(name) {\n      var i, len, model, ref, results;\n      results = [];\n      ref = this._models;\n      for (i = 0, len = ref.length; i < len; i++) {\n        model = ref[i];\n        if (model.constructor.name === name) {\n          results.push(model);\n        }\n      }\n      return results;\n    }\n\n    getKeysPressedRecently() {\n      return this.keyboard.getKeysPressedSince(this.clock.priorTickStart);\n    }\n\n    reset() {\n      this.stop();\n      this._destroyAllModels();\n      return this.start();\n    }\n\n    pause() {\n      this._isPaused = true;\n      return this.emit(\"gamePaused\");\n    }\n\n    resume() {\n      this._isPaused = false;\n      return this.emit(\"gameResumed\");\n    }\n\n    start() {\n      if (this.clock.isRunning) {\n        return;\n      }\n      this._isPaused = false;\n      this._initializeGame();\n      this.keyboard.startWatching();\n      this.clock.start();\n      return this.emit(\"gameStarted\", this);\n    }\n\n    stop() {\n      if (!this.clock.isRunning) {\n        return;\n      }\n      this.keyboard.stopWatching();\n      this.clock.stop();\n      return this.emit(\"gameStopped\", this);\n    }\n\n    togglePause() {\n      if (this._isPaused) {\n        return this.resume();\n      } else {\n        return this.pause();\n      }\n    }\n\n    wasKeyDown(name) {\n      if (this.clock.priorTickStart == null) {\n        return false;\n      }\n      return this.keyboard.wasKeyPressedSince(name, this.clock.priorTickStart);\n    }\n\n    // Overrideable Methods #########################################################################\n    _doOwnTick() {}\n\n    _initializeGame() {}\n\n    // Overridden Methods ###########################################################################\n    _isRecognizedEvent(eventName) {\n      var events;\n      events = [\"gamePaused\", \"gameResumed\", \"gameStarted\", \"gameStopped\", \"gameTick\", \"modelCreated\", \"modelDestroyed\"];\n      if (indexOf.call(events, eventName) >= 0) {\n        return true;\n      }\n      return super._isRecognizedEvent();\n    }\n\n    // Private Methods ##############################################################################\n    _destroyAllModels() {\n      var i, len, model, ref;\n      ref = this._models;\n      for (i = 0, len = ref.length; i < len; i++) {\n        model = ref[i];\n        model._game = void 0;\n        this.emit(\"modelDestroyed\", model);\n      }\n      this._models = [];\n      return this._nextModelId = 0;\n    }\n\n    _doTick() {\n      var e, firstIndex, firstModel, i, j, k, len, model, ref, ref1, ref2, ref3, secondIndex, secondModel;\n      if (!this._isPaused) {\n        ref = this._models;\n        for (i = 0, len = ref.length; i < len; i++) {\n          model = ref[i];\n          try {\n            model.doTick();\n          } catch (error) {\n            e = error;\n            console.error(`error during ${model} tick: `, e);\n          }\n        }\n        for (firstIndex = j = 0, ref1 = this._models.length; (0 <= ref1 ? j < ref1 : j > ref1); firstIndex = 0 <= ref1 ? ++j : --j) {\n          firstModel = this._models[firstIndex];\n          if (!(firstModel instanceof _positionable__WEBPACK_IMPORTED_MODULE_3__[\"default\"])) {\n            continue;\n          }\n          for (secondIndex = k = ref2 = firstIndex + 1, ref3 = this._models.length; (ref2 <= ref3 ? k < ref3 : k > ref3); secondIndex = ref2 <= ref3 ? ++k : --k) {\n            secondModel = this._models[secondIndex];\n            if (!firstModel.hasCollidedWith(secondModel)) {\n              continue;\n            }\n            try {\n              firstModel.collideWith(secondModel);\n            } catch (error) {\n              e = error;\n              console.error(`error when ${firstModel} collided with ${secondModel}:`, e);\n            }\n            try {\n              secondModel.collideWith(firstModel);\n            } catch (error) {\n              e = error;\n              console.error(`error when ${secondModel} collided with ${firstModel}:`, e);\n            }\n          }\n        }\n      }\n      try {\n        this._doOwnTick();\n      } catch (error) {\n        e = error;\n        console.error(\"error during game's own tick: \", e);\n      }\n      return this.emit(\"gameTick\", this);\n    }\n\n  };\n\n  // Properties ###################################################################################\n  Object.defineProperties(Game.prototype, {\n    clock: {\n      get: function() {\n        return this._clock;\n      }\n    },\n    keyboard: {\n      get: function() {\n        return this._keyboard;\n      }\n    },\n    isPaused: {\n      get: function() {\n        return this._isPaused;\n      }\n    }\n  });\n\n  return Game;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/game.coffee?");

/***/ }),

/***/ "./src/coffee/games/game_model.coffee":
/*!********************************************!*\
  !*** ./src/coffee/games/game_model.coffee ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable */ \"./src/coffee/games/observable.coffee\");\nvar GameModel;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameModel = (function() {\n  //#######################################################################################################################\n  class GameModel extends _observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options = {}) {\n      super();\n      if (options.game == null) {\n        throw Error(\"options.game is required\");\n      }\n      if (options.id == null) {\n        throw Error(\"options.id is required\");\n      }\n      this._game = options.game;\n      this._id = options.id;\n    }\n\n    // Public Methods ###############################################################################\n    doTick() {\n      return this._doTick();\n    }\n\n    // Overridable Methods ##########################################################################\n    _doTick() {}\n\n    // Overridden Methods ###########################################################################\n    toString() {\n      return `${this.constructor.name}<id:${this.id}>`;\n    }\n\n  };\n\n  // Properties ###################################################################################\n  Object.defineProperties(GameModel.prototype, {\n    game: {\n      get: function() {\n        return this._game;\n      }\n    },\n    id: {\n      get: function() {\n        return this._id;\n      }\n    },\n    isActive: function() {\n      return {\n        get: function() {\n          return this._game != null;\n        }\n      };\n    }\n  });\n\n  return GameModel;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/game_model.coffee?");

/***/ }),

/***/ "./src/coffee/games/keyboard.coffee":
/*!******************************************!*\
  !*** ./src/coffee/games/keyboard.coffee ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar KeyState, Keyboard;\n\nKeyState = class KeyState {\n  constructor(name) {\n    this.name = name;\n    this.down = Date.now();\n    this.up = void 0;\n  }\n\n  // Public Methods ###############################################################################\n  toString() {\n    return `KeyState{name: ${this.name}, down: ${this.down}, up: ${this.up}}`;\n  }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard = (function() {\n  //#######################################################################################################################\n  class Keyboard {\n    constructor() {\n      this._keyState = {};\n      this._watching = false;\n    }\n\n    // Public Methods ###############################################################################\n    getKeysPressedSince(timestamp) {\n      var end, k, keyState, keysPressed, name, now, ref, start;\n      now = Date.now();\n      keysPressed = [];\n      ref = this._keyState;\n      for (name in ref) {\n        keyState = ref[name];\n        start = Math.max(timestamp, keyState.down);\n        end = Math.min(now, (keyState.up != null ? keyState.up : now));\n        if (start < end) {\n          keysPressed.push(keyState);\n        }\n      }\n      keysPressed.sort(function(a, b) {\n        if (a.down !== b.down) {\n          if (a.down < b.down) {\n            return -1;\n          } else {\n            return +1;\n          }\n        }\n        return 0;\n      });\n      return (function() {\n        var i, len, results;\n        results = [];\n        for (i = 0, len = keysPressed.length; i < len; i++) {\n          k = keysPressed[i];\n          results.push(k.name);\n        }\n        return results;\n      })();\n    }\n\n    getKeyDownDuration(name) {\n      if (this._keyState[name] == null) {\n        return 0;\n      }\n      return Date.now() - this._keyState[name];\n    }\n\n    isKeyDown(name) {\n      var keyState;\n      keyState = this._keyState[name];\n      if (keyState == null) {\n        return false;\n      }\n      return keyState.up == null;\n    }\n\n    startWatching() {\n      if (this._watching) {\n        return;\n      }\n      this._keyState = {};\n      this._watching = true;\n      this._priorOnKeyDown = window.document.onkeydown;\n      this._priorOnKeyUp = window.document.onkeyup;\n      window.document.onkeydown = (event) => {\n        return this._onKeyDown(event);\n      };\n      return window.document.onkeyup = (event) => {\n        return this._onKeyUp(event);\n      };\n    }\n\n    stopWatching() {\n      if (!this._watching) {\n        return;\n      }\n      window.document.onkeydown = this._priorOnKeyDown;\n      window.document.onkeyup = this._priorOnKeyUp;\n      this._watching = false;\n      return this._keyState = {};\n    }\n\n    wasKeyPressedSince(name, timestamp) {\n      var end, keyState, now, start;\n      keyState = this._keyState[name];\n      if (keyState == null) {\n        return false;\n      }\n      if (keyState.up == null) {\n        return true;\n      }\n      now = Date.now();\n      start = Math.max(timestamp, keyState.down);\n      end = Math.min(now, keyState.up);\n      return start < end;\n    }\n\n    // Private Methods ##############################################################################\n    _onKeyDown(event) {\n      var name;\n      name = event.key.toLowerCase();\n      return this._keyState[name] = new KeyState(name);\n    }\n\n    _onKeyUp(event) {\n      var keyState, name;\n      name = event.key.toLowerCase();\n      keyState = this._keyState[name];\n      if (keyState != null) {\n        return keyState.up = Date.now();\n      }\n    }\n\n  };\n\n  Keyboard.ARROW_UP = \"arrowup\";\n\n  Keyboard.ARROW_DOWN = \"arrowdown\";\n\n  Keyboard.ARROW_LEFT = \"arrowleft\";\n\n  Keyboard.ARROW_RIGHT = \"arrowright\";\n\n  Keyboard.ESCAPE = \"escape\";\n\n  Keyboard.SPACE = \" \";\n\n  // Properties ###################################################################################\n  Object.defineProperties(Keyboard.prototype, {\n    watching: {\n      get: function() {\n        return this._watching;\n      }\n    }\n  });\n\n  return Keyboard;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/keyboard.coffee?");

/***/ }),

/***/ "./src/coffee/games/observable.coffee":
/*!********************************************!*\
  !*** ./src/coffee/games/observable.coffee ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Observable;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observable = class Observable {\n  constructor() {\n    this._observers = {};\n  }\n\n  // Public Methods ###############################################################################\n  clear() {\n    return this._observers = {};\n  }\n\n  emit(eventName, ...args) {\n    var doAction, e, i, len, ref, results;\n    if (!this._observers[eventName]) {\n      return;\n    }\n    ref = this._observers[eventName];\n    results = [];\n    for (i = 0, len = ref.length; i < len; i++) {\n      doAction = ref[i];\n      try {\n        results.push(doAction(...args));\n      } catch (error) {\n        e = error;\n        results.push(console.error(`an error occurred while emitting '${eventName}': `, e));\n      }\n    }\n    return results;\n  }\n\n  off(eventName, doAction) {\n    var existingDoAction, i, len, observerList, ref;\n    if (this._observers[eventName] == null) {\n      return;\n    }\n    observerList = [];\n    ref = this._observer[eventName];\n    for (i = 0, len = ref.length; i < len; i++) {\n      existingDoAction = ref[i];\n      if (doAction !== existingDoAction) {\n        observerList.push(existingDoAction);\n      }\n    }\n    return this._observer[eventName] = observerList;\n  }\n\n  on(eventName, doAction) {\n    var observerList;\n    if (!this._isRecognizedEvent(eventName)) {\n      throw Error(`cannot observe '${eventName}' on ${this.constructor.name}`);\n    }\n    if (typeof doAction !== \"function\") {\n      throw Error(`doAction must be a function, but was a ${typeof doAction}`);\n    }\n    observerList = this._observers[eventName];\n    if (observerList == null) {\n      observerList = this._observers[eventName] = [];\n    }\n    return observerList.push(doAction);\n  }\n\n  // Overridable Methods ##########################################################################\n  _isRecognizedEvent(eventName) {\n    return false;\n  }\n\n});\n\n\n//# sourceURL=webpack:///./src/coffee/games/observable.coffee?");

/***/ }),

/***/ "./src/coffee/games/positionable.coffee":
/*!**********************************************!*\
  !*** ./src/coffee/games/positionable.coffee ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounds */ \"./src/coffee/games/bounds.coffee\");\n/* harmony import */ var _game_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_model */ \"./src/coffee/games/game_model.coffee\");\nvar Positionable;\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Positionable = (function() {\n  //#######################################################################################################################\n  class Positionable extends _game_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(options = {}) {\n      super(options);\n      this._bounds = new _bounds__WEBPACK_IMPORTED_MODULE_0__[\"default\"](options);\n      this._priorBounds = void 0;\n    }\n\n    // Public Methods ###############################################################################\n    collideWith(model) {\n      if (model === self) {\n        return;\n      }\n      return this._collideWith(model);\n    }\n\n    hasCollidedWith(model) {\n      if (model instanceof Positionable) {\n        return this.bounds.isOverlappingWith(model.bounds);\n      }\n      return false;\n    }\n\n    move(x, y) {\n      this._priorBounds = this._bounds;\n      this._bounds = this.bounds.move(x, y);\n      return this.emit(\"moved\");\n    }\n\n    resize(width, height) {\n      this._bounds = this.bounds.resize(width, height);\n      return this.emit(\"resized\");\n    }\n\n    rollbackLastMove() {\n      if (this._priorBounds == null) {\n        return;\n      }\n      this._bounds = this._priorBounds;\n      return this._priorBounds = void 0;\n    }\n\n    // Overridable Methods ##########################################################################\n    _collideWith(model) {\n      // subclasses should return 'true' to indicate that they have handled the collision\n      return false;\n    }\n\n    // Overridden Methods ###########################################################################\n    _isRecognizedEvent(eventName) {\n      if (eventName === \"moved\" || eventName === \"resized\") {\n        return true;\n      }\n      return super._isRecognizedEvent();\n    }\n\n  };\n\n  // Properties ###################################################################################\n  Object.defineProperties(Positionable.prototype, {\n    bounds: {\n      get: function() {\n        return this._bounds;\n      }\n    },\n    priorBounds: {\n      get: function() {\n        return this._priorBounds;\n      }\n    }\n  });\n\n  return Positionable;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/positionable.coffee?");

/***/ }),

/***/ "./src/coffee/games/snake/board.coffee":
/*!*********************************************!*\
  !*** ./src/coffee/games/snake/board.coffee ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Board;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board = (function() {\n  class Board {\n    constructor(width = 100, height = 100) {\n      this.width = width;\n      this.height = height;\n    }\n\n  };\n\n  // Properties ###################################################################################\n  Object.defineProperties(Board.prototype, {\n    height: {\n      get: function() {\n        return this._height;\n      },\n      set: function(value) {\n        return this._height = Math.max(25, value);\n      }\n    },\n    width: {\n      get: function() {\n        return this._width;\n      },\n      set: function(value) {\n        return this._width = Math.max(25, value);\n      }\n    }\n  });\n\n  return Board;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/snake/board.coffee?");

/***/ }),

/***/ "./src/coffee/games/snake/pellet.coffee":
/*!**********************************************!*\
  !*** ./src/coffee/games/snake/pellet.coffee ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _positionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../positionable */ \"./src/coffee/games/positionable.coffee\");\nvar Pellet;\n\n\n\n//#######################################################################################################################\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pellet = class Pellet extends _positionable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options = {}) {\n    super(options);\n  }\n\n  // Overridden Methods ###########################################################################\n  _collideWith(model) {\n    if (model.constructor.name !== \"Snake\") {\n      return;\n    }\n    return this.game.destroyModel(this);\n  }\n\n});\n\n\n//# sourceURL=webpack:///./src/coffee/games/snake/pellet.coffee?");

/***/ }),

/***/ "./src/coffee/games/snake/snake.coffee":
/*!*********************************************!*\
  !*** ./src/coffee/games/snake/snake.coffee ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keyboard */ \"./src/coffee/games/keyboard.coffee\");\n/* harmony import */ var _positionable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../positionable */ \"./src/coffee/games/positionable.coffee\");\n/* harmony import */ var _snake_segment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake_segment */ \"./src/coffee/games/snake/snake_segment.coffee\");\nvar DOWN, LEFT, RIGHT, Snake, UP;\n\n\n\n\n\n\n\n//#######################################################################################################################\nUP = \"up\";\n\nDOWN = \"down\";\n\nLEFT = \"left\";\n\nRIGHT = \"right\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake = (function() {\n  //#######################################################################################################################\n  class Snake extends _positionable__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(options = {}) {\n      super(options);\n      this._size = options.size != null ? options.size : 5;\n      this._segments = [];\n      this._direction = UP;\n    }\n\n    // Public Methods ###############################################################################\n    ageSegments() {\n      var i, len, newSegments, ref, segment, x, y;\n      if (this.priorBounds == null) {\n        return;\n      }\n      ({x, y} = this.priorBounds);\n      newSegments = [\n        this.game.createModel(_snake_segment__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        {\n          age: 0,\n          x: x,\n          y: y\n        })\n      ];\n      ref = this._segments;\n      for (i = 0, len = ref.length; i < len; i++) {\n        segment = ref[i];\n        segment.age += 1;\n        if (segment.age <= this._size) {\n          newSegments.push(segment);\n        } else {\n          this.game.destroyModel(segment);\n        }\n      }\n      return this._segments = newSegments;\n    }\n\n    changeDirection() {\n      var key, keys;\n      keys = this.game.getKeysPressedRecently();\n      if (keys.length === 0) {\n        return;\n      }\n      key = keys[0];\n      if (key === _keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ARROW_UP) {\n        if (this._direction !== DOWN) {\n          return this._direction = UP;\n        }\n      } else if (key === _keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ARROW_DOWN) {\n        if (this._direction !== UP) {\n          return this._direction = DOWN;\n        }\n      } else if (key === _keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ARROW_RIGHT) {\n        if (this._direction !== LEFT) {\n          return this._direction = RIGHT;\n        }\n      } else if (key === _keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ARROW_LEFT) {\n        if (this._direction !== RIGHT) {\n          return this._direction = LEFT;\n        }\n      }\n    }\n\n    checkBorderCollision() {\n      var x, y;\n      ({x, y} = this.bounds);\n      if ((x < 0) || (y < 0) || (x >= this.game.board.width) || (y >= this.game.board.height)) {\n        this.rollbackLastMove();\n        return this.game.stop();\n      }\n    }\n\n    checkTailCollision() {\n      var i, len, ref, results, segment, x, y;\n      ({x, y} = this.bounds);\n      ref = this.segments;\n      results = [];\n      for (i = 0, len = ref.length; i < len; i++) {\n        segment = ref[i];\n        if ((segment.bounds.x === x) && (segment.bounds.y === y)) {\n          this.rollbackLastMove();\n          results.push(this.game.stop());\n        } else {\n          results.push(void 0);\n        }\n      }\n      return results;\n    }\n\n    shift(direction) {\n      if (direction === UP) {\n        return this.move(this.bounds.x, this.bounds.y - 1);\n      } else if (direction === DOWN) {\n        return this.move(this.bounds.x, this.bounds.y + 1);\n      } else if (direction === LEFT) {\n        return this.move(this.bounds.x - 1, this.bounds.y);\n      } else if (direction === RIGHT) {\n        return this.move(this.bounds.x + 1, this.bounds.y);\n      } else {\n        return console.error(`invalid direction for shifting: ${direction}`);\n      }\n    }\n\n    // Overridden Methods ###########################################################################\n    _collideWith(model) {\n      if (model.constructor.name !== \"Pellet\") {\n        return;\n      }\n      return this._size += 1;\n    }\n\n    _doTick() {\n      this.changeDirection();\n      this.shift(this._direction);\n      this.checkBorderCollision();\n      this.checkTailCollision();\n      return this.ageSegments();\n    }\n\n  };\n\n  // Properties ###################################################################################\n  Object.defineProperties(Snake.prototype, {\n    segments: {\n      get: function() {\n        return this._segments;\n      }\n    }\n  });\n\n  return Snake;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/snake/snake.coffee?");

/***/ }),

/***/ "./src/coffee/games/snake/snake_game.coffee":
/*!**************************************************!*\
  !*** ./src/coffee/games/snake/snake_game.coffee ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/coffee/games/snake/board.coffee\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ \"./src/coffee/games/game.coffee\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../keyboard */ \"./src/coffee/games/keyboard.coffee\");\n/* harmony import */ var _pellet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pellet */ \"./src/coffee/games/snake/pellet.coffee\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snake */ \"./src/coffee/games/snake/snake.coffee\");\nvar SnakeGame;\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakeGame = (function() {\n  //#######################################################################################################################\n  class SnakeGame extends _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(options = {}) {\n      super(options);\n      this._board = options.board != null ? options.board : new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](50, 50);\n      this._pellet = void 0;\n      this._snake = void 0;\n      this.clock.ticksPerSecond = 4;\n    }\n\n    // Overridden Methods ###########################################################################\n    _doOwnTick() {\n      this._snake = this.findModel(_snake__WEBPACK_IMPORTED_MODULE_4__[\"default\"].name);\n      this._pellet = this.findModel(_pellet__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name);\n      if (this.wasKeyDown(_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ESCAPE)) {\n        this.reset();\n      }\n      if (this.wasKeyDown(_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SPACE)) {\n        this.togglePause();\n      }\n      if (this.pellet == null) {\n        return this.createModel(_pellet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          x: Math.floor(Math.random() * this.board.width),\n          y: Math.floor(Math.random() * this.board.height)\n        });\n      }\n    }\n\n    _initializeGame() {\n      return this.createModel(_snake__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        x: 25,\n        y: 25\n      });\n    }\n\n  };\n\n  // Properties ###################################################################################\n  Object.defineProperties(SnakeGame.prototype, {\n    board: {\n      get: function() {\n        return this._board;\n      }\n    },\n    pellet: {\n      get: function() {\n        return this._pellet;\n      }\n    },\n    snake: {\n      get: function() {\n        return this._snake;\n      }\n    }\n  });\n\n  return SnakeGame;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/snake/snake_game.coffee?");

/***/ }),

/***/ "./src/coffee/games/snake/snake_segment.coffee":
/*!*****************************************************!*\
  !*** ./src/coffee/games/snake/snake_segment.coffee ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _positionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../positionable */ \"./src/coffee/games/positionable.coffee\");\nvar SnakeSegment;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakeSegment = (function() {\n  //#######################################################################################################################\n  class SnakeSegment extends _positionable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options = {}) {\n      super(options);\n      this._age = options.age != null ? options.age : 0;\n    }\n\n  };\n\n  // Properties ###################################################################################\n  Object.defineProperties(SnakeSegment.prototype, {\n    age: {\n      get: function() {\n        return this._age;\n      },\n      set: function(value) {\n        value = Math.max(0, value);\n        return this._age = value;\n      }\n    }\n  });\n\n  return SnakeSegment;\n\n}).call(undefined));\n\n\n//# sourceURL=webpack:///./src/coffee/games/snake/snake_segment.coffee?");

/***/ }),

/***/ "./src/sites/runbooks.app/scripts/games.coffee":
/*!*****************************************************!*\
  !*** ./src/sites/runbooks.app/scripts/games.coffee ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coffee_components_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../coffee/components/not_found_page/component */ \"./src/coffee/components/not_found_page/component.vue\");\n/* harmony import */ var _coffee_components_snake_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../coffee/components/snake_page/component */ \"./src/coffee/components/snake_page/component.vue\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ \"./src/sites/runbooks.app/scripts/shared.coffee\");\nvar routes;\n\n\n\n\n\n\n\n//#######################################################################################################################\nroutes = [\n  {\n    name: \"snake\",\n    path: \"/games/snake\",\n    component: _coffee_components_snake_page_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  {\n    // must be last\n    name: \"not-found\",\n    path: \"*\",\n    component: _coffee_components_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n];\n\n//#######################################################################################################################\nif (window.pinerylabs == null) {\n  window.pinerylabs = {};\n}\n\nObject(_shared__WEBPACK_IMPORTED_MODULE_2__[\"configurePageBundle\"])(window.pinerylabs, routes);\n\nconsole.info(\"runbooks.app ready with: games\");\n\n\n//# sourceURL=webpack:///./src/sites/runbooks.app/scripts/games.coffee?");

/***/ })

/******/ });