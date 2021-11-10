module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/resume/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Resume.js":
/*!******************************!*\
  !*** ./components/Resume.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/components/Resume.js\";\n\n\nfunction Resume() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    flexDirection: \"column\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Popover\"], {\n      placement: \"right\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"PopoverTrigger\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n          _hover: {\n            cursor: 'pointer'\n          },\n          marginTop: \"6rem\",\n          h: \"30rem\",\n          w: \"20rem\",\n          src: \"https://media-exp1.licdn.com/media/AAYUAgR3AAgAAQAAAAAAACePTWjq1si0Q2yia1PzJTtb3Q.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"PopoverContent\"], {\n        h: \"full\",\n        w: \"full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"PopoverBody\"], {\n          h: \"full\",\n          w: \"full\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n            src: \"https://media-exp1.licdn.com/media/AAYUAgR3AAgAAQAAAAAAACePTWjq1si0Q2yia1PzJTtb3Q.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resume);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3VtZS5qcz9kMWUyIl0sIm5hbWVzIjpbIlJlc3VtZSIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQVNBLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEIsc0JBQ0UscUVBQUMscURBQUQ7QUFBTSxpQkFBYSxFQUFDLFFBQXBCO0FBQUEsMkJBQ0UscUVBQUMsd0RBQUQ7QUFBUyxlQUFTLEVBQUMsT0FBbkI7QUFBQSw4QkFDRSxxRUFBQywrREFBRDtBQUFBLCtCQUNFLHFFQUFDLHNEQUFEO0FBQ0UsZ0JBQU0sRUFBRTtBQUFFQyxrQkFBTSxFQUFFO0FBQVYsV0FEVjtBQUVFLG1CQUFTLEVBQUMsTUFGWjtBQUdFLFdBQUMsRUFBQyxPQUhKO0FBSUUsV0FBQyxFQUFDLE9BSko7QUFLRSxhQUFHLEVBQUM7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUscUVBQUMsK0RBQUQ7QUFBZ0IsU0FBQyxFQUFDLE1BQWxCO0FBQXlCLFNBQUMsRUFBQyxNQUEzQjtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQWEsV0FBQyxFQUFDLE1BQWY7QUFBc0IsV0FBQyxFQUFDLE1BQXhCO0FBQUEsaUNBQ0UscUVBQUMsc0RBQUQ7QUFBTyxlQUFHLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0FBRWNELHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXN1bWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGbGV4LFxuICBJbWFnZSxcbiAgUG9wb3ZlckJvZHksXG4gIFBvcG92ZXIsXG4gIFBvcG92ZXJUcmlnZ2VyLFxuICBQb3BvdmVyQ29udGVudCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmZ1bmN0aW9uIFJlc3VtZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJyaWdodFwiPlxuICAgICAgICA8UG9wb3ZlclRyaWdnZXI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBfaG92ZXI9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgIG1hcmdpblRvcD1cIjZyZW1cIlxuICAgICAgICAgICAgaD1cIjMwcmVtXCJcbiAgICAgICAgICAgIHc9XCIyMHJlbVwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21lZGlhLWV4cDEubGljZG4uY29tL21lZGlhL0FBWVVBZ1IzQUFnQUFRQUFBQUFBQUNlUFRXanExc2kwUTJ5aWExUHpKVHRiM1EucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxuICAgICAgICA8UG9wb3ZlckNvbnRlbnQgaD1cImZ1bGxcIiB3PVwiZnVsbFwiPlxuICAgICAgICAgIDxQb3BvdmVyQm9keSBoPVwiZnVsbFwiIHc9XCJmdWxsXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9tZWRpYS1leHAxLmxpY2RuLmNvbS9tZWRpYS9BQVlVQWdSM0FBZ0FBUUFBQUFBQUFDZVBUV2pxMXNpMFEyeWlhMVB6SlR0YjNRLnBuZ1wiIC8+XG4gICAgICAgICAgPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgPC9Qb3BvdmVyQ29udGVudD5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Resume.js\n");

/***/ }),

/***/ "./pages/resume/index.js":
/*!*******************************!*\
  !*** ./pages/resume/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Resume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Resume */ \"./components/Resume.js\");\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/pages/resume/index.js\";\n\n\nfunction resume() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Resume__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resume);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXN1bWUvaW5kZXguanM/YjhlYiJdLCJuYW1lcyI6WyJyZXN1bWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEIsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVzdW1lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3VtZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Jlc3VtZSc7XG5cbmZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJlc3VtZSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXN1bWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/resume/index.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });