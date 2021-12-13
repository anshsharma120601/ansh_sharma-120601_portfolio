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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Certificate; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/components/Certificate.js\";\n\nfunction Certificate() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    flexDirection: ['column', 'row', 'row', 'row'],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      cursor: \"pointer\",\n      borderRadius: \"3xl\",\n      marginTop: ['4rem', '5.5rem', '5.5rem', '5.5rem'],\n      marginLeft: ['1rem', '2rem', '2rem', '2rem'],\n      padding: \"2\",\n      objectFit: \"cover\",\n      h: ['15rem', '30rem', '30rem', '30rem'],\n      w: ['19rem', '37rem', '37rem', '37rem'],\n      src: \"https://udemy-certificate.s3.amazonaws.com/image/UC-54a716d2-3066-4ad9-b816-9256a5958aea.jpg?v=1634911035000\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      cursor: \"pointer\",\n      borderRadius: \"3xl\",\n      marginTop: ['1rem', '5.5rem', '5.5rem', '5.5rem'],\n      marginLeft: ['1rem', '2rem', '2rem', '2rem'],\n      padding: ['1', '2', '2', '2'],\n      objectFit: \"cover\",\n      h: ['15rem', '30rem', '30rem', '30rem'],\n      w: ['19rem', '37rem', '37rem', '37rem'],\n      src: \"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FVY2TG7MWP39/CERTIFICATE_LANDING_PAGE~FVY2TG7MWP39.jpeg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlcnRpZmljYXRlLmpzPzE5ZWMiXSwibmFtZXMiOlsiQ2VydGlmaWNhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBQ3BDLHNCQUNFLHFFQUFDLHFEQUFEO0FBQU0saUJBQWEsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLEtBQWxCLEVBQXlCLEtBQXpCLENBQXJCO0FBQUEsNEJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxZQUFNLEVBQUMsU0FEVDtBQUVFLGtCQUFZLEVBQUMsS0FGZjtBQUdFLGVBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFFBQW5CLEVBQTZCLFFBQTdCLENBSGI7QUFJRSxnQkFBVSxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsQ0FKZDtBQUtFLGFBQU8sRUFBQyxHQUxWO0FBTUUsZUFBUyxFQUFDLE9BTlo7QUFPRSxPQUFDLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQVBMO0FBUUUsT0FBQyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsQ0FSTDtBQVNFLFNBQUcsRUFBQztBQVROO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWFFLHFFQUFDLHNEQUFEO0FBQ0UsWUFBTSxFQUFDLFNBRFQ7QUFFRSxrQkFBWSxFQUFDLEtBRmY7QUFHRSxlQUFTLEVBQUUsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixRQUFuQixFQUE2QixRQUE3QixDQUhiO0FBSUUsZ0JBQVUsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLENBSmQ7QUFLRSxhQUFPLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FMWDtBQU1FLGVBQVMsRUFBQyxPQU5aO0FBT0UsT0FBQyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsQ0FQTDtBQVFFLE9BQUMsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLENBUkw7QUFTRSxTQUFHLEVBQUM7QUFUTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NlcnRpZmljYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2VydGlmaWNhdGUoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggZmxleERpcmVjdGlvbj17Wydjb2x1bW4nLCAncm93JywgJ3JvdycsICdyb3cnXX0+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjN4bFwiXG4gICAgICAgIG1hcmdpblRvcD17Wyc0cmVtJywgJzUuNXJlbScsICc1LjVyZW0nLCAnNS41cmVtJ119XG4gICAgICAgIG1hcmdpbkxlZnQ9e1snMXJlbScsICcycmVtJywgJzJyZW0nLCAnMnJlbSddfVxuICAgICAgICBwYWRkaW5nPVwiMlwiXG4gICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgaD17WycxNXJlbScsICczMHJlbScsICczMHJlbScsICczMHJlbSddfVxuICAgICAgICB3PXtbJzE5cmVtJywgJzM3cmVtJywgJzM3cmVtJywgJzM3cmVtJ119XG4gICAgICAgIHNyYz1cImh0dHBzOi8vdWRlbXktY2VydGlmaWNhdGUuczMuYW1hem9uYXdzLmNvbS9pbWFnZS9VQy01NGE3MTZkMi0zMDY2LTRhZDktYjgxNi05MjU2YTU5NThhZWEuanBnP3Y9MTYzNDkxMTAzNTAwMFwiXG4gICAgICAvPlxuXG4gICAgICA8SW1hZ2VcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjN4bFwiXG4gICAgICAgIG1hcmdpblRvcD17WycxcmVtJywgJzUuNXJlbScsICc1LjVyZW0nLCAnNS41cmVtJ119XG4gICAgICAgIG1hcmdpbkxlZnQ9e1snMXJlbScsICcycmVtJywgJzJyZW0nLCAnMnJlbSddfVxuICAgICAgICBwYWRkaW5nPXtbJzEnLCAnMicsICcyJywgJzInXX1cbiAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICBoPXtbJzE1cmVtJywgJzMwcmVtJywgJzMwcmVtJywgJzMwcmVtJ119XG4gICAgICAgIHc9e1snMTlyZW0nLCAnMzdyZW0nLCAnMzdyZW0nLCAnMzdyZW0nXX1cbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2NvdXJzZXJhX2Fzc2V0cy9tZXRhX2ltYWdlcy9nZW5lcmF0ZWQvQ0VSVElGSUNBVEVfTEFORElOR19QQUdFL0NFUlRJRklDQVRFX0xBTkRJTkdfUEFHRX5GVlkyVEc3TVdQMzkvQ0VSVElGSUNBVEVfTEFORElOR19QQUdFfkZWWTJURzdNV1AzOS5qcGVnXCJcbiAgICAgIC8+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Certificate.js\n");

/***/ }),

/***/ "./pages/certificates/index.js":
/*!*************************************!*\
  !*** ./pages/certificates/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Certificate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Certificate */ \"./components/Certificate.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ \"react-spinners\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/pages/certificates/index.js\";\n\n\n\n\n\nfunction Certificates() {\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(() => {\n    setLoading(true);\n    setTimeout(() => {\n      setLoading(false);\n    }, 1500);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n      padding: ['8.5rem', '0rem', '0rem', '0rem'],\n      margin: ['0.1rem', '25rem', '25rem', '25rem'],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spinners__WEBPACK_IMPORTED_MODULE_2__[\"RingLoader\"], {\n        color: '#04F8C8',\n        loading: loading,\n        size: 100\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Certificate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Certificates);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jZXJ0aWZpY2F0ZXMvaW5kZXguanM/NTIwMyJdLCJuYW1lcyI6WyJDZXJ0aWZpY2F0ZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUN0QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEYsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRyxjQUFVLENBQUMsTUFBTTtBQUNmSCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBTUEsc0JBQ0U7QUFBQSxjQUNHRCxPQUFPLGdCQUNOLHFFQUFDLHFEQUFEO0FBQ0UsYUFBTyxFQUFFLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsTUFBbkIsRUFBMkIsTUFBM0IsQ0FEWDtBQUVFLFlBQU0sRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLE9BQXBCLEVBQTZCLE9BQTdCLENBRlY7QUFBQSw2QkFJRSxxRUFBQyx5REFBRDtBQUFZLGFBQUssRUFBRSxTQUFuQjtBQUE4QixlQUFPLEVBQUVBLE9BQXZDO0FBQWdELFlBQUksRUFBRTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGdCQVFOO0FBQUEsNkJBQ0UscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0FBRWNELDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2VydGlmaWNhdGVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlcnRpZmljYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2VydGlmaWNhdGUnO1xuaW1wb3J0IHsgUmluZ0xvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmZ1bmN0aW9uIENlcnRpZmljYXRlcygpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCAxNTAwKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBwYWRkaW5nPXtbJzguNXJlbScsICcwcmVtJywgJzByZW0nLCAnMHJlbSddfVxuICAgICAgICAgIG1hcmdpbj17WycwLjFyZW0nLCAnMjVyZW0nLCAnMjVyZW0nLCAnMjVyZW0nXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxSaW5nTG9hZGVyIGNvbG9yPXsnIzA0RjhDOCd9IGxvYWRpbmc9e2xvYWRpbmd9IHNpemU9ezEwMH0gLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2VydGlmaWNhdGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/certificates/index.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-spinners\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcGlubmVyc1wiP2FkNTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3Qtc3Bpbm5lcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcGlubmVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-spinners\n");

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