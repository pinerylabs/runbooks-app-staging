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
/******/ 		"landing_page": 0
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
/******/ 	deferredModules.push(["./src/sites/runbooks.app/scripts/landing_page.coffee","shared"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sites/runbooks.app/scripts/landing_page.coffee":
/*!************************************************************!*\
  !*** ./src/sites/runbooks.app/scripts/landing_page.coffee ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coffee_components_generic_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../coffee/components/generic_dialog/component */ \"./src/coffee/components/generic_dialog/component.vue\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ \"./src/sites/runbooks.app/scripts/shared.coffee\");\nvar onAbout, onLogin, onScroll, onSignup, openLetter, performSetup;\n\n\n\n\n\n// Functions ############################################################################################################\nonAbout = function(event) {\n  window.pinerylabs.store.dispatch(\"openDialog\", {\n    name: \"about\"\n  });\n  return event.preventDefault();\n};\n\nonLogin = function(event) {\n  return window.location.href = \"/login\";\n};\n\nonScroll = function(event) {\n  var base, i, id, len, ref, results, section, threshold, viewedSections, viewport;\n  viewedSections = (base = window.pinerylabs).viewedSections != null ? base.viewedSections : base.viewedSections = {};\n  viewport = {\n    top: window.scrollY - 1,\n    bottom: window.scrollY + window.innerHeight + 2\n  };\n  ref = document.getElementsByTagName(\"section\");\n  results = [];\n  for (i = 0, len = ref.length; i < len; i++) {\n    section = ref[i];\n    id = section.id;\n    if (viewedSections[id] === true) {\n      continue;\n    }\n    if (section.offsetHeight === 0) {\n      continue;\n    }\n    threshold = section.offsetTop + section.offsetHeight;\n    if ((viewport.top <= threshold && threshold <= viewport.bottom)) {\n      viewedSections[id] = true;\n      results.push(window.pinerylabs.store.dispatch(\"recordEvent\", {\n        action: `section_view_${id}`,\n        category: \"engagement\"\n      }));\n    } else {\n      results.push(void 0);\n    }\n  }\n  return results;\n};\n\nonSignup = function(event) {\n  return window.location.href = \"/signup\";\n};\n\nopenLetter = function() {\n  var desiredHeight, el;\n  if (window.location.pathname !== \"/letter\") {\n    return;\n  }\n  el = document.getElementById(\"letter-section-content\");\n  el.style.height = \"auto\";\n  desiredHeight = `${el.scrollHeight}px`;\n  el.style.height = \"0\";\n  return setTimeout((function() {\n    return el.style.height = desiredHeight;\n  }), 2000);\n};\n\nperformSetup = function() {\n  var e, el, i, j, k, len, len1, len2, ref, ref1, ref2;\n  try {\n    Object(_shared__WEBPACK_IMPORTED_MODULE_1__[\"configurePageBundle\"])(window.pinerylabs, [], \"#landing-page-app\");\n    window.pinerylabs.store.dispatch(\"recordPageLoad\");\n    document.getElementById(\"landing-page-app\").style.display = \"flex\";\n    window.addEventListener(\"scroll\", onScroll);\n    ref = document.getElementsByClassName(\"loginButton\");\n    for (i = 0, len = ref.length; i < len; i++) {\n      el = ref[i];\n      el.addEventListener(\"click\", onLogin);\n    }\n    ref1 = document.getElementsByClassName(\"signupButton\");\n    for (j = 0, len1 = ref1.length; j < len1; j++) {\n      el = ref1[j];\n      el.addEventListener(\"click\", onSignup);\n    }\n    ref2 = document.getElementsByClassName(\"aboutLink\");\n    for (k = 0, len2 = ref2.length; k < len2; k++) {\n      el = ref2[k];\n      el.addEventListener(\"click\", onAbout);\n    }\n    window.addEventListener(\"load\", function() {\n      console.log(\"document load complete\");\n      return openLetter();\n    });\n    return console.info(\"runbooks.app ready with: landing\");\n  } catch (error) {\n    e = error;\n    return console.error(e);\n  }\n};\n\n//#######################################################################################################################\nperformSetup();\n\n\n//# sourceURL=webpack:///./src/sites/runbooks.app/scripts/landing_page.coffee?");

/***/ })

/******/ });