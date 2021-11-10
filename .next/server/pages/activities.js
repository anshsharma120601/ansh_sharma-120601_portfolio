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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/activities/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Activity.js":
/*!********************************!*\
  !*** ./components/Activity.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Activity; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/components/Activity.js\";\n\nfunction Activity() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    fontFamily: \"sans-serif\",\n    fontSize: \"xl\",\n    padding: \"1rem\",\n    marginTop: \"5rem\",\n    flexDirection: \"column\",\n    paddingBottom: \"2000\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      fontFamily: \"cursive\",\n      as: \"h1\",\n      size: \"4xl\",\n      children: \"Activities\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Working in NGOs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"I have worked in\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          _hover: {\n            color: 'blue.600'\n          },\n          href: \"http://www.eklavyatrust.org/\",\n          children: [' ', \"Eklavya NGO school\", ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), \"as a science and maths teacher for classes 9th, 10th and 11th. I have worked in this NGO for 2 months and looking forward to work in many more.\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://images.newindianexpress.com/uploads/user/imagelibrary/2021/2/7/w1200X800/This_ngo_leads_fight.jpg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Odyssey of Mind\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"I participated in ODM competition which took place in my school. At that time I took part in this contest to have a broad view on world and competition. My team of 5 students won gold medal in this contest.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"40rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://www.odysseyofthemind.com/wp-content/uploads/2021/06/OM-Full-Logo-1.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Amity Cadet Corps\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Since I belonged to family with Army background, I always wanted to see what the hype was about and I got a taste of it in ACC. From parades to different kinds of activities and living in tents with your friends for a week, everything was adventurous and fun.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://avatars.githubusercontent.com/u/81307379?s=400&u=808940eb4ed826e74fa3382e9b76d6e18900b938&v=4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Playing Guitar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"I was very passionate about playing guitar since my school days. I have also cleared level3 grade guitar test from trinity college of London which one of the most toughest and professional guitar exams. I have in many small bands and functions also.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://www.trinitycollege.com/images/news/news_placeholder.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Bike Riding\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"I fell in love with bikes once I was in college. I formed a small group with my friends for bike rides and plans. They say that 4wheels carry body and 2wheels carry soul.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://lh3.googleusercontent.com/a-/AOh14GgjKEwyvRlxVNQjf-qL3INXAMQiRpIpMXuJ6TYvkw=s288-p-rw-no\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjdGl2aXR5LmpzP2E4NWMiXSwibmFtZXMiOlsiQWN0aXZpdHkiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxjQUFVLEVBQUMsWUFEYjtBQUVFLFlBQVEsRUFBQyxJQUZYO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxhQUFTLEVBQUMsTUFKWjtBQUtFLGlCQUFhLEVBQUMsUUFMaEI7QUFNRSxpQkFBYSxFQUFDLE1BTmhCO0FBQUEsNEJBUUUscUVBQUMsd0RBQUQ7QUFBUyxnQkFBVSxFQUFDLFNBQXBCO0FBQThCLFFBQUUsRUFBQyxJQUFqQztBQUFzQyxVQUFJLEVBQUMsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVdFLHFFQUFDLHdEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLEtBQXRCO0FBQTRCLGdCQUFVLEVBQUMsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQWNFO0FBQUEsa0RBRUU7QUFBQSwrQkFDRSxxRUFBQyxxREFBRDtBQUNFLGdCQUFNLEVBQUU7QUFBRUMsaUJBQUssRUFBRTtBQUFULFdBRFY7QUFFRSxjQUFJLEVBQUMsOEJBRlA7QUFBQSxxQkFJRyxHQUpILHdCQUtxQixHQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEYsZUE4QkUscUVBQUMsc0RBQUQ7QUFDRSxPQUFDLEVBQUMsT0FESjtBQUVFLE9BQUMsRUFBQyxPQUZKO0FBR0UsWUFBTSxFQUFDLFNBSFQ7QUFJRSxZQUFNLEVBQUMsUUFKVDtBQUtFLGtCQUFZLEVBQUMsTUFMZjtBQU1FLGFBQU8sRUFBQyxPQU5WO0FBT0UsYUFBTyxFQUFDLFFBUFY7QUFRRSxTQUFHLEVBQUM7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJGLGVBeUNFLHFFQUFDLHdEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLEtBQXRCO0FBQTRCLGdCQUFVLEVBQUMsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q0YsZUE0Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Q0YsZUFrREUscUVBQUMsc0RBQUQ7QUFDRSxPQUFDLEVBQUMsT0FESjtBQUVFLE9BQUMsRUFBQyxPQUZKO0FBR0UsWUFBTSxFQUFDLFNBSFQ7QUFJRSxZQUFNLEVBQUMsUUFKVDtBQUtFLGtCQUFZLEVBQUMsTUFMZjtBQU1FLGFBQU8sRUFBQyxPQU5WO0FBT0UsYUFBTyxFQUFDLFFBUFY7QUFRRSxTQUFHLEVBQUM7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbERGLGVBNkRFLHFFQUFDLHdEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLEtBQXRCO0FBQTRCLGdCQUFVLEVBQUMsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3REYsZUFnRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoRUYsZUFzRUUscUVBQUMsc0RBQUQ7QUFDRSxPQUFDLEVBQUMsT0FESjtBQUVFLE9BQUMsRUFBQyxPQUZKO0FBR0UsWUFBTSxFQUFDLFNBSFQ7QUFJRSxZQUFNLEVBQUMsUUFKVDtBQUtFLGtCQUFZLEVBQUMsTUFMZjtBQU1FLGFBQU8sRUFBQyxPQU5WO0FBT0UsYUFBTyxFQUFDLFFBUFY7QUFRRSxTQUFHLEVBQUM7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEVGLGVBaUZFLHFFQUFDLHdEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLEtBQXRCO0FBQTRCLGdCQUFVLEVBQUMsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqRkYsZUFvRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwRkYsZUEwRkUscUVBQUMsc0RBQUQ7QUFDRSxPQUFDLEVBQUMsT0FESjtBQUVFLE9BQUMsRUFBQyxPQUZKO0FBR0UsWUFBTSxFQUFDLFNBSFQ7QUFJRSxZQUFNLEVBQUMsUUFKVDtBQUtFLGtCQUFZLEVBQUMsTUFMZjtBQU1FLGFBQU8sRUFBQyxPQU5WO0FBT0UsYUFBTyxFQUFDLFFBUFY7QUFRRSxTQUFHLEVBQUM7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUZGLGVBcUdFLHFFQUFDLHdEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLEtBQXRCO0FBQTRCLGdCQUFVLEVBQUMsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyR0YsZUF3R0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4R0YsZUE2R0UscUVBQUMsc0RBQUQ7QUFDRSxPQUFDLEVBQUMsT0FESjtBQUVFLE9BQUMsRUFBQyxPQUZKO0FBR0UsWUFBTSxFQUFDLFNBSFQ7QUFJRSxZQUFNLEVBQUMsUUFKVDtBQUtFLGtCQUFZLEVBQUMsTUFMZjtBQU1FLGFBQU8sRUFBQyxPQU5WO0FBT0UsYUFBTyxFQUFDLFFBUFY7QUFRRSxTQUFHLEVBQUM7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEhEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BY3Rpdml0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIExpbmssIEltYWdlLCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGl2aXR5KCkge1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBmb250RmFtaWx5PVwic2Fucy1zZXJpZlwiXG4gICAgICBmb250U2l6ZT1cInhsXCJcbiAgICAgIHBhZGRpbmc9XCIxcmVtXCJcbiAgICAgIG1hcmdpblRvcD1cIjVyZW1cIlxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBwYWRkaW5nQm90dG9tPVwiMjAwMFwiXG4gICAgPlxuICAgICAgPEhlYWRpbmcgZm9udEZhbWlseT1cImN1cnNpdmVcIiBhcz1cImgxXCIgc2l6ZT1cIjR4bFwiPlxuICAgICAgICBBY3Rpdml0aWVzXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCJ0aGluXCI+XG4gICAgICAgIFdvcmtpbmcgaW4gTkdPc1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPHA+XG4gICAgICAgIEkgaGF2ZSB3b3JrZWQgaW5cbiAgICAgICAgPHU+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJ2JsdWUuNjAwJyB9fVxuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cuZWtsYXZ5YXRydXN0Lm9yZy9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBFa2xhdnlhIE5HTyBzY2hvb2x7JyAnfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC91PlxuICAgICAgICBhcyBhIHNjaWVuY2UgYW5kIG1hdGhzIHRlYWNoZXIgZm9yIGNsYXNzZXMgOXRoLCAxMHRoIGFuZCAxMXRoLiBJIGhhdmVcbiAgICAgICAgd29ya2VkIGluIHRoaXMgTkdPIGZvciAyIG1vbnRocyBhbmQgbG9va2luZyBmb3J3YXJkIHRvIHdvcmsgaW4gbWFueVxuICAgICAgICBtb3JlLlxuICAgICAgPC9wPlxuXG4gICAgICA8SW1hZ2VcbiAgICAgICAgaD1cIjE4cmVtXCJcbiAgICAgICAgdz1cIjIwcmVtXCJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgIG1hcmdpbj1cIjAuNXJlbVwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjEzcHhcIlxuICAgICAgICBiZ0NvbG9yPVwid2hpdGVcIlxuICAgICAgICBwYWRkaW5nPVwiMC4ycmVtXCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMubmV3aW5kaWFuZXhwcmVzcy5jb20vdXBsb2Fkcy91c2VyL2ltYWdlbGlicmFyeS8yMDIxLzIvNy93MTIwMFg4MDAvVGhpc19uZ29fbGVhZHNfZmlnaHQuanBnXCJcbiAgICAgIC8+XG5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwiMnhsXCIgZm9udFdlaWdodD1cInRoaW5cIj5cbiAgICAgICAgT2R5c3NleSBvZiBNaW5kXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8cD5cbiAgICAgICAgSSBwYXJ0aWNpcGF0ZWQgaW4gT0RNIGNvbXBldGl0aW9uIHdoaWNoIHRvb2sgcGxhY2UgaW4gbXkgc2Nob29sLiBBdCB0aGF0XG4gICAgICAgIHRpbWUgSSB0b29rIHBhcnQgaW4gdGhpcyBjb250ZXN0IHRvIGhhdmUgYSBicm9hZCB2aWV3IG9uIHdvcmxkIGFuZFxuICAgICAgICBjb21wZXRpdGlvbi4gTXkgdGVhbSBvZiA1IHN0dWRlbnRzIHdvbiBnb2xkIG1lZGFsIGluIHRoaXMgY29udGVzdC5cbiAgICAgIDwvcD5cblxuICAgICAgPEltYWdlXG4gICAgICAgIGg9XCIxOHJlbVwiXG4gICAgICAgIHc9XCI0MHJlbVwiXG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBtYXJnaW49XCIwLjVyZW1cIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCIxM3B4XCJcbiAgICAgICAgYmdDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgcGFkZGluZz1cIjAuMnJlbVwiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lm9keXNzZXlvZnRoZW1pbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA2L09NLUZ1bGwtTG9nby0xLnBuZ1wiXG4gICAgICAvPlxuXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCJ0aGluXCI+XG4gICAgICAgIEFtaXR5IENhZGV0IENvcnBzXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8cD5cbiAgICAgICAgU2luY2UgSSBiZWxvbmdlZCB0byBmYW1pbHkgd2l0aCBBcm15IGJhY2tncm91bmQsIEkgYWx3YXlzIHdhbnRlZCB0byBzZWVcbiAgICAgICAgd2hhdCB0aGUgaHlwZSB3YXMgYWJvdXQgYW5kIEkgZ290IGEgdGFzdGUgb2YgaXQgaW4gQUNDLiBGcm9tIHBhcmFkZXMgdG9cbiAgICAgICAgZGlmZmVyZW50IGtpbmRzIG9mIGFjdGl2aXRpZXMgYW5kIGxpdmluZyBpbiB0ZW50cyB3aXRoIHlvdXIgZnJpZW5kcyBmb3JcbiAgICAgICAgYSB3ZWVrLCBldmVyeXRoaW5nIHdhcyBhZHZlbnR1cm91cyBhbmQgZnVuLlxuICAgICAgPC9wPlxuICAgICAgPEltYWdlXG4gICAgICAgIGg9XCIxOHJlbVwiXG4gICAgICAgIHc9XCIyMHJlbVwiXG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBtYXJnaW49XCIwLjVyZW1cIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCIxM3B4XCJcbiAgICAgICAgYmdDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgcGFkZGluZz1cIjAuMnJlbVwiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS84MTMwNzM3OT9zPTQwMCZ1PTgwODk0MGViNGVkODI2ZTc0ZmEzMzgyZTliNzZkNmUxODkwMGI5Mzgmdj00XCJcbiAgICAgIC8+XG5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwiMnhsXCIgZm9udFdlaWdodD1cInRoaW5cIj5cbiAgICAgICAgUGxheWluZyBHdWl0YXJcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxwPlxuICAgICAgICBJIHdhcyB2ZXJ5IHBhc3Npb25hdGUgYWJvdXQgcGxheWluZyBndWl0YXIgc2luY2UgbXkgc2Nob29sIGRheXMuIEkgaGF2ZVxuICAgICAgICBhbHNvIGNsZWFyZWQgbGV2ZWwzIGdyYWRlIGd1aXRhciB0ZXN0IGZyb20gdHJpbml0eSBjb2xsZWdlIG9mIExvbmRvblxuICAgICAgICB3aGljaCBvbmUgb2YgdGhlIG1vc3QgdG91Z2hlc3QgYW5kIHByb2Zlc3Npb25hbCBndWl0YXIgZXhhbXMuIEkgaGF2ZSBpblxuICAgICAgICBtYW55IHNtYWxsIGJhbmRzIGFuZCBmdW5jdGlvbnMgYWxzby5cbiAgICAgIDwvcD5cbiAgICAgIDxJbWFnZVxuICAgICAgICBoPVwiMThyZW1cIlxuICAgICAgICB3PVwiMjByZW1cIlxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgbWFyZ2luPVwiMC41cmVtXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTNweFwiXG4gICAgICAgIGJnQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHBhZGRpbmc9XCIwLjJyZW1cIlxuICAgICAgICBzcmM9XCJodHRwczovL3d3dy50cmluaXR5Y29sbGVnZS5jb20vaW1hZ2VzL25ld3MvbmV3c19wbGFjZWhvbGRlci5wbmdcIlxuICAgICAgLz5cblxuICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwidGhpblwiPlxuICAgICAgICBCaWtlIFJpZGluZ1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPHA+XG4gICAgICAgIEkgZmVsbCBpbiBsb3ZlIHdpdGggYmlrZXMgb25jZSBJIHdhcyBpbiBjb2xsZWdlLiBJIGZvcm1lZCBhIHNtYWxsIGdyb3VwXG4gICAgICAgIHdpdGggbXkgZnJpZW5kcyBmb3IgYmlrZSByaWRlcyBhbmQgcGxhbnMuIFRoZXkgc2F5IHRoYXQgNHdoZWVscyBjYXJyeVxuICAgICAgICBib2R5IGFuZCAyd2hlZWxzIGNhcnJ5IHNvdWwuXG4gICAgICA8L3A+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgaD1cIjE4cmVtXCJcbiAgICAgICAgdz1cIjIwcmVtXCJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgIG1hcmdpbj1cIjAuNXJlbVwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjEzcHhcIlxuICAgICAgICBiZ0NvbG9yPVwid2hpdGVcIlxuICAgICAgICBwYWRkaW5nPVwiMC4ycmVtXCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2dqS0V3eXZSbHhWTlFqZi1xTDNJTlhBTVFpUnBJcE1YdUo2VFl2a3c9czI4OC1wLXJ3LW5vXCJcbiAgICAgIC8+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Activity.js\n");

/***/ }),

/***/ "./pages/activities/index.js":
/*!***********************************!*\
  !*** ./pages/activities/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Activities; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Activity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Activity */ \"./components/Activity.js\");\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/pages/activities/index.js\";\n\nfunction Activities() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Activity__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY3Rpdml0aWVzL2luZGV4LmpzP2VmNjIiXSwibmFtZXMiOlsiQWN0aXZpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUNuQyxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL2FjdGl2aXRpZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aXZpdHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BY3Rpdml0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGl2aXRpZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBY3Rpdml0eSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/activities/index.js\n");

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