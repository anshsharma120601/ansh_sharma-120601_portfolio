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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/certificates/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Certificate.js":
/*!***********************************!*\
  !*** ./components/Certificate.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Certificate; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/components/Certificate.js\";\n\nfunction Certificate() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    bgColor: \"blue.900\",\n    textColor: \"white\",\n    paddingBottom: \"500\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      _hover: {\n        h: '35rem',\n        w: '45rem'\n      },\n      cursor: \"pointer\",\n      borderRadius: \"3xl\",\n      marginTop: \"7rem\",\n      padding: \"3\",\n      h: \"25rem\",\n      w: \"30rem\",\n      src: \"https://udemy-certificate.s3.amazonaws.com/image/UC-54a716d2-3066-4ad9-b816-9256a5958aea.jpg?v=1634911035000\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      _hover: {\n        h: '35rem',\n        w: '45rem'\n      },\n      cursor: \"pointer\",\n      borderRadius: \"3xl\",\n      marginTop: \"7rem\",\n      padding: \"3\",\n      h: \"25rem\",\n      w: \"30rem\",\n      src: \"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FVY2TG7MWP39/CERTIFICATE_LANDING_PAGE~FVY2TG7MWP39.jpeg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlcnRpZmljYXRlLmpzPzE5ZWMiXSwibmFtZXMiOlsiQ2VydGlmaWNhdGUiLCJoIiwidyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsc0JBQ0UscUVBQUMscURBQUQ7QUFBTSxXQUFPLEVBQUMsVUFBZDtBQUF5QixhQUFTLEVBQUMsT0FBbkM7QUFBMkMsaUJBQWEsRUFBQyxLQUF6RDtBQUFBLDRCQUNFLHFFQUFDLHNEQUFEO0FBQ0UsWUFBTSxFQUFFO0FBQUVDLFNBQUMsRUFBRSxPQUFMO0FBQWNDLFNBQUMsRUFBRTtBQUFqQixPQURWO0FBRUUsWUFBTSxFQUFDLFNBRlQ7QUFHRSxrQkFBWSxFQUFDLEtBSGY7QUFJRSxlQUFTLEVBQUMsTUFKWjtBQUtFLGFBQU8sRUFBQyxHQUxWO0FBTUUsT0FBQyxFQUFDLE9BTko7QUFPRSxPQUFDLEVBQUMsT0FQSjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFLHFFQUFDLHNEQUFEO0FBQ0UsWUFBTSxFQUFFO0FBQUVELFNBQUMsRUFBRSxPQUFMO0FBQWNDLFNBQUMsRUFBRTtBQUFqQixPQURWO0FBRUUsWUFBTSxFQUFDLFNBRlQ7QUFHRSxrQkFBWSxFQUFDLEtBSGY7QUFJRSxlQUFTLEVBQUMsTUFKWjtBQUtFLGFBQU8sRUFBQyxHQUxWO0FBTUUsT0FBQyxFQUFDLE9BTko7QUFPRSxPQUFDLEVBQUMsT0FQSjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2VydGlmaWNhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBJbWFnZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDZXJ0aWZpY2F0ZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBiZ0NvbG9yPVwiYmx1ZS45MDBcIiB0ZXh0Q29sb3I9XCJ3aGl0ZVwiIHBhZGRpbmdCb3R0b209XCI1MDBcIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBfaG92ZXI9e3sgaDogJzM1cmVtJywgdzogJzQ1cmVtJyB9fVxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiM3hsXCJcbiAgICAgICAgbWFyZ2luVG9wPVwiN3JlbVwiXG4gICAgICAgIHBhZGRpbmc9XCIzXCJcbiAgICAgICAgaD1cIjI1cmVtXCJcbiAgICAgICAgdz1cIjMwcmVtXCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly91ZGVteS1jZXJ0aWZpY2F0ZS5zMy5hbWF6b25hd3MuY29tL2ltYWdlL1VDLTU0YTcxNmQyLTMwNjYtNGFkOS1iODE2LTkyNTZhNTk1OGFlYS5qcGc/dj0xNjM0OTExMDM1MDAwXCJcbiAgICAgIC8+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgX2hvdmVyPXt7IGg6ICczNXJlbScsIHc6ICc0NXJlbScgfX1cbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjN4bFwiXG4gICAgICAgIG1hcmdpblRvcD1cIjdyZW1cIlxuICAgICAgICBwYWRkaW5nPVwiM1wiXG4gICAgICAgIGg9XCIyNXJlbVwiXG4gICAgICAgIHc9XCIzMHJlbVwiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9jb3Vyc2VyYV9hc3NldHMvbWV0YV9pbWFnZXMvZ2VuZXJhdGVkL0NFUlRJRklDQVRFX0xBTkRJTkdfUEFHRS9DRVJUSUZJQ0FURV9MQU5ESU5HX1BBR0V+RlZZMlRHN01XUDM5L0NFUlRJRklDQVRFX0xBTkRJTkdfUEFHRX5GVlkyVEc3TVdQMzkuanBlZ1wiXG4gICAgICAvPlxuICAgIDwvRmxleD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Certificate.js\n");

/***/ }),

/***/ "./pages/certificates/index.js":
/*!*************************************!*\
  !*** ./pages/certificates/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Certificate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Certificate */ \"./components/Certificate.js\");\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/pages/certificates/index.js\";\n\n\nfunction Certificates() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Certificate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Certificates);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jZXJ0aWZpY2F0ZXMvaW5kZXguanM/NTIwMyJdLCJuYW1lcyI6WyJDZXJ0aWZpY2F0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFDdEIsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNBLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2VydGlmaWNhdGVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlcnRpZmljYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2VydGlmaWNhdGUnO1xuXG5mdW5jdGlvbiBDZXJ0aWZpY2F0ZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDZXJ0aWZpY2F0ZSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/certificates/index.js\n");

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