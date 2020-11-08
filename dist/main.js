/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["elacalle-select"] = factory();
	else
		root["elacalle-select"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/dropdown/index.pug":
/*!************************************!*\
  !*** ./src/lib/dropdown/index.pug ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"select\\\" :class=\\\"{'select--disabled' : disabled}\\\"><div v-if=\\\"isOpen\\\" :class=\\\"selectClass\\\"><template v-for=\\\"option in selectOptions\\\"><div @click=\\\"select(option)\\\"><slot name=\\\"select-option\\\" v-bind:option=\\\"option\\\"><div class=\\\"select-options__select\\\"> {{option.name}}</div></slot></div></template></div><div v-else><div class=\\\"select__option-selected\\\" @click=\\\"toggle\\\">{{ selectedOption.name || placeholder }}</div></div></div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://elacalle-select/./src/lib/dropdown/index.pug?");

/***/ }),

/***/ "./src/lib/dropdown/index.js":
/*!***********************************!*\
  !*** ./src/lib/dropdown/index.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _resources_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../resources/styles/main.scss */ \"./src/resources/styles/main.scss\");\n/* harmony import */ var _resources_styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.pug */ \"./src/lib/dropdown/index.pug\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_1__);\n;\n\n\nconst Dropdown = {\n  props: {\n    options: {\n      type: Array,\n      required: false,\n      default: () => [],\n    },\n    value: {\n      required: false,\n    },\n    placeholder: {\n      type: String,\n      default: 'Seleccionar..',\n    },\n    disabled: {\n      type: Boolean,\n      required: false,\n      default: false\n    },\n    selectClass: {\n      type: String,\n      default: 'select-options',\n    },\n  },\n  data: () => {\n    return {\n      isOpen: false,\n      selectOptions: [\n        {name: 'Seleccionar..', value: null}\n      ]\n    };\n  },\n  computed: {\n    selectedOption() {\n      if (this.options) {\n        return this.options.find((option) => {\n          return option.value === this.value;\n        }) || {};\n      }\n\n      return {};\n    }\n  },\n  methods: {\n    select(option) {\n      this.toggle()\n      this.$emit('input', option.value)\n    },\n    toggle() {\n      if(!this.disabled) {\n        this.isOpen = !this.isOpen;\n      }\n    },\n    toggleOut() {\n      if (this.isOpen) {\n        this.toggle();\n      }\n    },\n  },\n  mounted() {\n    this.selectOptions = this.options;\n    this.selectOptions.unshift({name: this.placeholder, value: null})\n  },\n  template: (_index_pug__WEBPACK_IMPORTED_MODULE_1___default())\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);\n\n//# sourceURL=webpack://elacalle-select/./src/lib/dropdown/index.js?");

/***/ }),

/***/ "./src/resources/styles/main.scss":
/*!****************************************!*\
  !*** ./src/resources/styles/main.scss ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 1:10-24 */
/*! CommonJS bailout: exports is used directly at 1:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 6:0-12 */
/***/ ((module, exports, __webpack_require__) => {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"../../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.id, \"@charset \\\"UTF-8\\\";\\n.select {\\n  border: 1px solid black;\\n  position: relative;\\n}\\n.select--disabled {\\n  background-color: gainsboro;\\n  color: gray;\\n}\\n.select-options {\\n  position: absolute;\\n  border: 1px solid black;\\n  background: white;\\n  width: 100%;\\n  top: 0px;\\n  max-height: 10rem;\\n}\\n.select-options__select {\\n  position: static;\\n}\\n.select-options div {\\n  max-width: 98%;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n  white-space: nowrap;\\n}\\n.select__option-selected {\\n  min-width: 90%;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n  white-space: nowrap;\\n}\\n.select__option-selected::after {\\n  content: \\\"\\\\2B07\\\";\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  margin-right: 0.5rem;\\n}\\n\\n.error {\\n  border: 1px solid red;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://elacalle-select/./src/resources/styles/main.scss?");

/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!*****************************************************!*\
  !*** ../../node_modules/css-loader/lib/css-base.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack://elacalle-select/../../node_modules/css-loader/lib/css-base.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/lib/dropdown/index.js");
/******/ })()
;
});