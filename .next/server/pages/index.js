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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Details.js":
/*!*******************************!*\
  !*** ./components/Details.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/components/Details.js\";\n\n\nfunction Details() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    marginTop: \"4.3rem\",\n    flexDirection: \"column\",\n    padding: \"4\",\n    fontFamily: \"sans-serif\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      fontSize: \"32px\",\n      fontFamily: \"cursive\",\n      background: \"-webkit-linear-gradient(red, gold)\",\n      backgroundClip: \"text\",\n      children: \"Ansh Sharma Portfolio\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      cursor: \"pointer\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n        bgColor: \"white\",\n        padding: \"0.2rem\",\n        h: \"28rem\",\n        w: \"20rem\",\n        borderRadius: \"13px\",\n        src: \"https://scontent.fdel27-3.fna.fbcdn.net/v/t1.6435-9/34809123_1898037376926116_2863706299722366976_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=M-DvgoKZmlgAX_cBcuk&_nc_ht=scontent.fdel27-3.fna&oh=21c4e808f795885c6b33d05b8cc71d1d&oe=61B05ADB\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 30\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      flexDirection: \"column\",\n      marginTop: \"2\",\n      alignItems: \"flex-start\",\n      fontSize: \"18\",\n      paddingBottom: \"10rem\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\"I have completed (2019)my Schooling / Undergraduation in science and maths (PCM) from\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n            _hover: {\n              color: 'blue.600'\n            },\n            href: \"https://www.amity.edu/ais/pushpvihar/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n              children: \"Amity International School\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this), \"Pushp Vihar, Delhi, India.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Graduation (2019-2024):\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this), \" Netaji Subhash University of Technology\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n            _hover: {\n              color: 'blue.600'\n            },\n            href: \"http://aiactr.ac.in/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n              children: \"(NSUT), East Campus\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, this), \", New Delhi with specialization in Electronics and Communication.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Coding Languages :\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"UnorderedList\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Python- Intermediate Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Javascript- Intermediate Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Html- Expert Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"CSS- Expert Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Reactjs- Intermediate Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Nextjs- Intermediate Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Matlab- Beginner Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Django- Novice/Learning\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"I live in Gurugram, Haryana, India and am fluent in English & Hindi.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Area Of Interest:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this), \" Software Programming / Coding & Business Analytics. Looking forward to working as a software engineer and web based development programming with an IT company of repute. I am an expert in creating codes for automated tests.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Further Interests:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, this), \" Looking forward to also learn AI , ML and subsequently explore possibilities in research and data science based analytics and programming.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Finally also would learn about the other side of the net which is Database Management Systems (DBMS). Thus learning on the Backend Arm of the IT Structure post perfecting my Frontend Skills.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Projects:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, this), \" Currently working on developing my personal portfolio based on NextJS.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbHMuanM/MDM0YiJdLCJuYW1lcyI6WyJEZXRhaWxzIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFTQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLHNCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsYUFBUyxFQUFDLFFBRFo7QUFFRSxpQkFBYSxFQUFDLFFBRmhCO0FBR0UsV0FBTyxFQUFDLEdBSFY7QUFJRSxjQUFVLEVBQUMsWUFKYjtBQUFBLDRCQU1FLHFFQUFDLHdEQUFEO0FBQ0UsY0FBUSxFQUFDLE1BRFg7QUFFRSxnQkFBVSxFQUFDLFNBRmI7QUFHRSxnQkFBVSxFQUFDLG9DQUhiO0FBSUUsb0JBQWMsRUFBQyxNQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBY0UscUVBQUMscURBQUQ7QUFBTSxZQUFNLEVBQUMsU0FBYjtBQUFBLDZCQUF1QixxRUFBQyxzREFBRDtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQXVCLGVBQU8sRUFBQyxRQUEvQjtBQUF3QyxTQUFDLEVBQUMsT0FBMUM7QUFBa0QsU0FBQyxFQUFDLE9BQXBEO0FBQTRELG9CQUFZLEVBQUMsTUFBekU7QUFBZ0YsV0FBRyxFQUFDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLGVBZUUscUVBQUMscURBQUQ7QUFDRSxtQkFBYSxFQUFDLFFBRGhCO0FBRUUsZUFBUyxFQUFDLEdBRlo7QUFHRSxnQkFBVSxFQUFDLFlBSGI7QUFJRSxjQUFRLEVBQUMsSUFKWDtBQUtFLG1CQUFhLEVBQUMsT0FMaEI7QUFBQSw2QkFPRTtBQUFBLGdDQUNFO0FBQUEsMkhBR0UscUVBQUMscURBQUQ7QUFDRSxrQkFBTSxFQUFFO0FBQUVDLG1CQUFLLEVBQUU7QUFBVCxhQURWO0FBRUUsZ0JBQUksRUFBQyx1Q0FGUDtBQUFBLG1DQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFZRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLDJEQUdFLHFFQUFDLHFEQUFEO0FBQU0sa0JBQU0sRUFBRTtBQUFFQSxtQkFBSyxFQUFFO0FBQVQsYUFBZDtBQUFxQyxnQkFBSSxFQUFDLHNCQUExQztBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkYsZUFvQkU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHFFQUFDLDhEQUFEO0FBQUEsb0NBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLGVBSUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsZUFLRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixlQU1FLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLGVBT0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsZUFRRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRixlQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0YsZUFvQ0U7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcENGLGVBMENFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFDRixlQStDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvQ0YsZUFvREU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1GRDs7QUFFY0Qsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGbGV4LFxuICBJbWFnZSxcbiAgTGluayxcbiAgTGlzdEl0ZW0sXG4gIFVub3JkZXJlZExpc3QsXG4gIEhlYWRpbmcsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5mdW5jdGlvbiBEZXRhaWxzKCkge1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBtYXJnaW5Ub3A9XCI0LjNyZW1cIlxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBwYWRkaW5nPVwiNFwiXG4gICAgICBmb250RmFtaWx5PVwic2Fucy1zZXJpZlwiXG4gICAgPlxuICAgICAgPEhlYWRpbmdcbiAgICAgICAgZm9udFNpemU9XCIzMnB4XCJcbiAgICAgICAgZm9udEZhbWlseT1cImN1cnNpdmVcIlxuICAgICAgICBiYWNrZ3JvdW5kPVwiLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmVkLCBnb2xkKVwiXG4gICAgICAgIGJhY2tncm91bmRDbGlwPVwidGV4dFwiXG4gICAgICA+XG4gICAgICAgIEFuc2ggU2hhcm1hIFBvcnRmb2xpb1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPEZsZXggY3Vyc29yPVwicG9pbnRlclwiPjxJbWFnZSBiZ0NvbG9yPVwid2hpdGVcIiBwYWRkaW5nPVwiMC4ycmVtXCIgaD1cIjI4cmVtXCIgdz1cIjIwcmVtXCIgYm9yZGVyUmFkaXVzPVwiMTNweFwiIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZmRlbDI3LTMuZm5hLmZiY2RuLm5ldC92L3QxLjY0MzUtOS8zNDgwOTEyM18xODk4MDM3Mzc2OTI2MTE2XzI4NjM3MDYyOTk3MjIzNjY5NzZfbi5qcGc/X25jX2NhdD0xMDgmY2NiPTEtNSZfbmNfc2lkPTA5Y2JmZSZfbmNfb2hjPU0tRHZnb0tabWxnQVhfY0JjdWsmX25jX2h0PXNjb250ZW50LmZkZWwyNy0zLmZuYSZvaD0yMWM0ZTgwOGY3OTU4ODVjNmIzM2QwNWI4Y2M3MWQxZCZvZT02MUIwNUFEQlwiPjwvSW1hZ2U+PC9GbGV4PlxuICAgICAgPEZsZXhcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIG1hcmdpblRvcD1cIjJcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgIGZvbnRTaXplPVwiMThcIlxuICAgICAgICBwYWRkaW5nQm90dG9tPVwiMTByZW1cIlxuICAgICAgPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJIGhhdmUgY29tcGxldGVkICgyMDE5KW15IFNjaG9vbGluZyAvIFVuZGVyZ3JhZHVhdGlvbiBpbiBzY2llbmNlIGFuZFxuICAgICAgICAgICAgbWF0aHMgKFBDTSkgZnJvbVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGNvbG9yOiAnYmx1ZS42MDAnIH19XG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5hbWl0eS5lZHUvYWlzL3B1c2hwdmloYXIvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHU+QW1pdHkgSW50ZXJuYXRpb25hbCBTY2hvb2w8L3U+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICBQdXNocCBWaWhhciwgRGVsaGksIEluZGlhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxiPkdyYWR1YXRpb24gKDIwMTktMjAyNCk6PC9iPiBOZXRhamkgU3ViaGFzaCBVbml2ZXJzaXR5IG9mXG4gICAgICAgICAgICBUZWNobm9sb2d5XG4gICAgICAgICAgICA8TGluayBfaG92ZXI9e3sgY29sb3I6ICdibHVlLjYwMCcgfX0gaHJlZj1cImh0dHA6Ly9haWFjdHIuYWMuaW4vXCI+XG4gICAgICAgICAgICAgIDx1PihOU1VUKSwgRWFzdCBDYW1wdXM8L3U+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAsIE5ldyBEZWxoaSB3aXRoIHNwZWNpYWxpemF0aW9uIGluIEVsZWN0cm9uaWNzIGFuZCBDb21tdW5pY2F0aW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxiPkNvZGluZyBMYW5ndWFnZXMgOjwvYj5cbiAgICAgICAgICAgIDxVbm9yZGVyZWRMaXN0PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+UHl0aG9uLSBJbnRlcm1lZGlhdGUgTGV2ZWw8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+SmF2YXNjcmlwdC0gSW50ZXJtZWRpYXRlIExldmVsPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPkh0bWwtIEV4cGVydCBMZXZlbDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5DU1MtIEV4cGVydCBMZXZlbDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5SZWFjdGpzLSBJbnRlcm1lZGlhdGUgTGV2ZWw8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+TmV4dGpzLSBJbnRlcm1lZGlhdGUgTGV2ZWw8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+TWF0bGFiLSBCZWdpbm5lciBMZXZlbDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5EamFuZ28tIE5vdmljZS9MZWFybmluZzwvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSSBsaXZlIGluIEd1cnVncmFtLCBIYXJ5YW5hLCBJbmRpYSBhbmQgYW0gZmx1ZW50IGluIEVuZ2xpc2ggJiBIaW5kaS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Yj5BcmVhIE9mIEludGVyZXN0OjwvYj4gU29mdHdhcmUgUHJvZ3JhbW1pbmcgLyBDb2RpbmcgJiBCdXNpbmVzc1xuICAgICAgICAgICAgQW5hbHl0aWNzLiBMb29raW5nIGZvcndhcmQgdG8gd29ya2luZyBhcyBhIHNvZnR3YXJlIGVuZ2luZWVyIGFuZCB3ZWJcbiAgICAgICAgICAgIGJhc2VkIGRldmVsb3BtZW50IHByb2dyYW1taW5nIHdpdGggYW4gSVQgY29tcGFueSBvZiByZXB1dGUuIEkgYW0gYW5cbiAgICAgICAgICAgIGV4cGVydCBpbiBjcmVhdGluZyBjb2RlcyBmb3IgYXV0b21hdGVkIHRlc3RzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxiPkZ1cnRoZXIgSW50ZXJlc3RzOjwvYj4gTG9va2luZyBmb3J3YXJkIHRvIGFsc28gbGVhcm4gQUkgLCBNTCBhbmRcbiAgICAgICAgICAgIHN1YnNlcXVlbnRseSBleHBsb3JlIHBvc3NpYmlsaXRpZXMgaW4gcmVzZWFyY2ggYW5kIGRhdGEgc2NpZW5jZVxuICAgICAgICAgICAgYmFzZWQgYW5hbHl0aWNzIGFuZCBwcm9ncmFtbWluZy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBGaW5hbGx5IGFsc28gd291bGQgbGVhcm4gYWJvdXQgdGhlIG90aGVyIHNpZGUgb2YgdGhlIG5ldCB3aGljaCBpc1xuICAgICAgICAgICAgRGF0YWJhc2UgTWFuYWdlbWVudCBTeXN0ZW1zIChEQk1TKS4gVGh1cyBsZWFybmluZyBvbiB0aGUgQmFja2VuZCBBcm1cbiAgICAgICAgICAgIG9mIHRoZSBJVCBTdHJ1Y3R1cmUgcG9zdCBwZXJmZWN0aW5nIG15IEZyb250ZW5kIFNraWxscy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Yj5Qcm9qZWN0czo8L2I+IEN1cnJlbnRseSB3b3JraW5nIG9uIGRldmVsb3BpbmcgbXkgcGVyc29uYWxcbiAgICAgICAgICAgIHBvcnRmb2xpbyBiYXNlZCBvbiBOZXh0SlMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2gzPlxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Details.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Details */ \"./components/Details.js\");\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/pages/index.js\";\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Details__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQU8scUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZXRhaWxzIGZyb20gJy4uL2NvbXBvbmVudHMvRGV0YWlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiA8RGV0YWlscyAvPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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