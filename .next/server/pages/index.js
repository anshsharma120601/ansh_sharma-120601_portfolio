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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/di */ \"react-icons/di\");\n/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/components/Details.js\";\n\n\n\nfunction Details() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    marginTop: ['-10rem', '5.5rem', '5.5rem', '5.5rem'],\n    marginLeft: ['0.5rem', '1rem', '1rem', '1rem'],\n    marginRight: ['1rem', '1rem', '1rem', '1rem'],\n    paddingTop: ['14rem', '1rem', '1rem', '1rem'],\n    flexDirection: \"column\",\n    fontFamily: \"sans-serif\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      fontSize: ['28px', '64px', '64px', '64px'],\n      fontFamily: \"cursive\",\n      background: \"-webkit-linear-gradient(red, gold)\",\n      bgClip: \"text\",\n      textColor: \"transparent\",\n      children: \"Ansh Sharma Portfolio\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n        cursor: \"pointer\",\n        bgColor: \"white\",\n        padding: \"0.2rem\",\n        h: ['18rem', '28rem', '28rem', '28rem'],\n        w: ['12rem', '20rem', '20rem', '20rem'],\n        borderRadius: ['40px', '13px', '13px', '13px'],\n        src: \"https://scontent.fdel27-3.fna.fbcdn.net/v/t1.6435-9/34809123_1898037376926116_2863706299722366976_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=M-DvgoKZmlgAX_cBcuk&_nc_ht=scontent.fdel27-3.fna&oh=21c4e808f795885c6b33d05b8cc71d1d&oe=61B05ADB\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      flexDirection: \"column\",\n      marginTop: \"2\",\n      alignItems: \"flex-start\",\n      fontSize: ['17', '23', '23', '23'],\n      paddingBottom: \"10rem\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\"I have completed (2019)my Schooling / Undergraduation in science and maths (PCM) from\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n            _hover: {\n              color: 'blue.600'\n            },\n            href: \"https://www.amity.edu/ais/pushpvihar/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n              children: \"Amity International School\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this), \"Pushp Vihar, Delhi, India.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Graduation (2019-2024):\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, this), \" Netaji Subhash University of Technology\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n            _hover: {\n              color: 'blue.600'\n            },\n            href: \"http://aiactr.ac.in/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n              children: \"(NSUT), East Campus\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this), \", New Delhi with specialization in Electronics and Communication.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Coding Languages :\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"UnorderedList\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n                flexDirection: \"row\",\n                children: [\"Python- Intermediate Level\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_di__WEBPACK_IMPORTED_MODULE_2__[\"DiPython\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n                flexDirection: \"row\",\n                children: [\"Javascript- Intermediate Level\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_di__WEBPACK_IMPORTED_MODULE_2__[\"DiJavascript1\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 81,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Html- Expert Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"CSS- Expert Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Reactjs- Intermediate Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Nextjs- Intermediate Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Matlab- Beginner Level\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n              children: \"Django- Novice/Learning\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"I live in Gurugram, Haryana, India and am fluent in English & Hindi.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Area Of Interest:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this), \" Software Programming / Coding & Business Analytics. Looking forward to working as a software engineer and web based development programming with an IT company of repute. I am an expert in creating codes for automated tests.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Further Interests:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, this), \" Looking forward to also learn AI , ML and subsequently explore possibilities in research and data science based analytics and programming.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Finally also would learn about the other side of the net which is Database Management Systems (DBMS). Thus learning on the Backend Arm of the IT Structure post perfecting my Frontend Skills.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Projects:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, this), \" Currently working on developing my personal portfolio based on NextJS.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Hardware I use:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbHMuanM/MDM0YiJdLCJuYW1lcyI6WyJEZXRhaWxzIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBU0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixzQkFDRSxxRUFBQyxxREFBRDtBQUNFLGFBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFFBQXJCLEVBQStCLFFBQS9CLENBRGI7QUFFRSxjQUFVLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixNQUFuQixFQUEyQixNQUEzQixDQUZkO0FBR0UsZUFBVyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsQ0FIZjtBQUlFLGNBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE1BQWxCLEVBQTBCLE1BQTFCLENBSmQ7QUFLRSxpQkFBYSxFQUFDLFFBTGhCO0FBTUUsY0FBVSxFQUFDLFlBTmI7QUFBQSw0QkFRRSxxRUFBQyx3REFBRDtBQUNFLGNBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLENBRFo7QUFFRSxnQkFBVSxFQUFDLFNBRmI7QUFHRSxnQkFBVSxFQUFDLG9DQUhiO0FBSUUsWUFBTSxFQUFDLE1BSlQ7QUFLRSxlQUFTLEVBQUMsYUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBaUJFLHFFQUFDLHFEQUFEO0FBQUEsNkJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxjQUFNLEVBQUMsU0FEVDtBQUVFLGVBQU8sRUFBQyxPQUZWO0FBR0UsZUFBTyxFQUFDLFFBSFY7QUFJRSxTQUFDLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQUpMO0FBS0UsU0FBQyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIs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O0FBQUEsZ0JBekRGLGVBOERFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlERixlQWtFRTtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZHRDs7QUFFY0Qsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGbGV4LFxuICBJbWFnZSxcbiAgTGluayxcbiAgTGlzdEl0ZW0sXG4gIFVub3JkZXJlZExpc3QsXG4gIEhlYWRpbmcsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5pbXBvcnQgeyBEaVB5dGhvbiwgRGlKYXZhc2NyaXB0MSB9IGZyb20gJ3JlYWN0LWljb25zL2RpJztcblxuZnVuY3Rpb24gRGV0YWlscygpIHtcbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgbWFyZ2luVG9wPXtbJy0xMHJlbScsICc1LjVyZW0nLCAnNS41cmVtJywgJzUuNXJlbSddfVxuICAgICAgbWFyZ2luTGVmdD17WycwLjVyZW0nLCAnMXJlbScsICcxcmVtJywgJzFyZW0nXX1cbiAgICAgIG1hcmdpblJpZ2h0PXtbJzFyZW0nLCAnMXJlbScsICcxcmVtJywgJzFyZW0nXX1cbiAgICAgIHBhZGRpbmdUb3A9e1snMTRyZW0nLCAnMXJlbScsICcxcmVtJywgJzFyZW0nXX1cbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIlxuICAgID5cbiAgICAgIDxIZWFkaW5nXG4gICAgICAgIGZvbnRTaXplPXtbJzI4cHgnLCAnNjRweCcsICc2NHB4JywgJzY0cHgnXX1cbiAgICAgICAgZm9udEZhbWlseT1cImN1cnNpdmVcIlxuICAgICAgICBiYWNrZ3JvdW5kPVwiLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmVkLCBnb2xkKVwiXG4gICAgICAgIGJnQ2xpcD1cInRleHRcIlxuICAgICAgICB0ZXh0Q29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICA+XG4gICAgICAgIEFuc2ggU2hhcm1hIFBvcnRmb2xpb1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPEZsZXg+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgIGJnQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgcGFkZGluZz1cIjAuMnJlbVwiXG4gICAgICAgICAgaD17WycxOHJlbScsICcyOHJlbScsICcyOHJlbScsICcyOHJlbSddfVxuICAgICAgICAgIHc9e1snMTJyZW0nLCAnMjByZW0nLCAnMjByZW0nLCAnMjByZW0nXX1cbiAgICAgICAgICBib3JkZXJSYWRpdXM9e1snNDBweCcsICcxM3B4JywgJzEzcHgnLCAnMTNweCddfVxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZmRlbDI3LTMuZm5hLmZiY2RuLm5ldC92L3QxLjY0MzUtOS8zNDgwOTEyM18xODk4MDM3Mzc2OTI2MTE2XzI4NjM3MDYyOTk3MjIzNjY5NzZfbi5qcGc/X25jX2NhdD0xMDgmY2NiPTEtNSZfbmNfc2lkPTA5Y2JmZSZfbmNfb2hjPU0tRHZnb0tabWxnQVhfY0JjdWsmX25jX2h0PXNjb250ZW50LmZkZWwyNy0zLmZuYSZvaD0yMWM0ZTgwOGY3OTU4ODVjNmIzM2QwNWI4Y2M3MWQxZCZvZT02MUIwNUFEQlwiXG4gICAgICAgIC8+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleFxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgbWFyZ2luVG9wPVwiMlwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgZm9udFNpemU9e1snMTcnLCAnMjMnLCAnMjMnLCAnMjMnXX1cbiAgICAgICAgcGFkZGluZ0JvdHRvbT1cIjEwcmVtXCJcbiAgICAgID5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSSBoYXZlIGNvbXBsZXRlZCAoMjAxOSlteSBTY2hvb2xpbmcgLyBVbmRlcmdyYWR1YXRpb24gaW4gc2NpZW5jZSBhbmRcbiAgICAgICAgICAgIG1hdGhzIChQQ00pIGZyb21cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJ2JsdWUuNjAwJyB9fVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuYW1pdHkuZWR1L2Fpcy9wdXNocHZpaGFyL1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx1PkFtaXR5IEludGVybmF0aW9uYWwgU2Nob29sPC91PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgUHVzaHAgVmloYXIsIERlbGhpLCBJbmRpYS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Yj5HcmFkdWF0aW9uICgyMDE5LTIwMjQpOjwvYj4gTmV0YWppIFN1Ymhhc2ggVW5pdmVyc2l0eSBvZlxuICAgICAgICAgICAgVGVjaG5vbG9neVxuICAgICAgICAgICAgPExpbmsgX2hvdmVyPXt7IGNvbG9yOiAnYmx1ZS42MDAnIH19IGhyZWY9XCJodHRwOi8vYWlhY3RyLmFjLmluL1wiPlxuICAgICAgICAgICAgICA8dT4oTlNVVCksIEVhc3QgQ2FtcHVzPC91PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgLCBOZXcgRGVsaGkgd2l0aCBzcGVjaWFsaXphdGlvbiBpbiBFbGVjdHJvbmljcyBhbmQgQ29tbXVuaWNhdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Yj5Db2RpbmcgTGFuZ3VhZ2VzIDo8L2I+XG4gICAgICAgICAgICA8VW5vcmRlcmVkTGlzdD5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIFB5dGhvbi0gSW50ZXJtZWRpYXRlIExldmVsXG4gICAgICAgICAgICAgICAgICA8RGlQeXRob24gLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICBKYXZhc2NyaXB0LSBJbnRlcm1lZGlhdGUgTGV2ZWxcbiAgICAgICAgICAgICAgICAgIDxEaUphdmFzY3JpcHQxIC8+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+SHRtbC0gRXhwZXJ0IExldmVsPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPkNTUy0gRXhwZXJ0IExldmVsPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPlJlYWN0anMtIEludGVybWVkaWF0ZSBMZXZlbDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5OZXh0anMtIEludGVybWVkaWF0ZSBMZXZlbDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5NYXRsYWItIEJlZ2lubmVyIExldmVsPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPkRqYW5nby0gTm92aWNlL0xlYXJuaW5nPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJIGxpdmUgaW4gR3VydWdyYW0sIEhhcnlhbmEsIEluZGlhIGFuZCBhbSBmbHVlbnQgaW4gRW5nbGlzaCAmIEhpbmRpLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxiPkFyZWEgT2YgSW50ZXJlc3Q6PC9iPiBTb2Z0d2FyZSBQcm9ncmFtbWluZyAvIENvZGluZyAmIEJ1c2luZXNzXG4gICAgICAgICAgICBBbmFseXRpY3MuIExvb2tpbmcgZm9yd2FyZCB0byB3b3JraW5nIGFzIGEgc29mdHdhcmUgZW5naW5lZXIgYW5kIHdlYlxuICAgICAgICAgICAgYmFzZWQgZGV2ZWxvcG1lbnQgcHJvZ3JhbW1pbmcgd2l0aCBhbiBJVCBjb21wYW55IG9mIHJlcHV0ZS4gSSBhbSBhblxuICAgICAgICAgICAgZXhwZXJ0IGluIGNyZWF0aW5nIGNvZGVzIGZvciBhdXRvbWF0ZWQgdGVzdHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGI+RnVydGhlciBJbnRlcmVzdHM6PC9iPiBMb29raW5nIGZvcndhcmQgdG8gYWxzbyBsZWFybiBBSSAsIE1MIGFuZFxuICAgICAgICAgICAgc3Vic2VxdWVudGx5IGV4cGxvcmUgcG9zc2liaWxpdGllcyBpbiByZXNlYXJjaCBhbmQgZGF0YSBzY2llbmNlXG4gICAgICAgICAgICBiYXNlZCBhbmFseXRpY3MgYW5kIHByb2dyYW1taW5nLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEZpbmFsbHkgYWxzbyB3b3VsZCBsZWFybiBhYm91dCB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgbmV0IHdoaWNoIGlzXG4gICAgICAgICAgICBEYXRhYmFzZSBNYW5hZ2VtZW50IFN5c3RlbXMgKERCTVMpLiBUaHVzIGxlYXJuaW5nIG9uIHRoZSBCYWNrZW5kIEFybVxuICAgICAgICAgICAgb2YgdGhlIElUIFN0cnVjdHVyZSBwb3N0IHBlcmZlY3RpbmcgbXkgRnJvbnRlbmQgU2tpbGxzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxiPlByb2plY3RzOjwvYj4gQ3VycmVudGx5IHdvcmtpbmcgb24gZGV2ZWxvcGluZyBteSBwZXJzb25hbFxuICAgICAgICAgICAgcG9ydGZvbGlvIGJhc2VkIG9uIE5leHRKUy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Yj5IYXJkd2FyZSBJIHVzZTo8L2I+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2gzPlxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Details.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Details */ \"./components/Details.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ \"react-spinners\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/pages/index.js\";\n\n\n\n\nfunction Home() {\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(() => {\n    setLoading(true);\n    setTimeout(() => {\n      setLoading(false);\n    }, 1500);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n      padding: ['7rem', '0rem', '0rem', '0rem'],\n      margin: ['0.2rem', '25rem', '25rem', '25rem'],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spinners__WEBPACK_IMPORTED_MODULE_2__[\"RingLoader\"], {\n        color: '#04F8C8',\n        loading: loading,\n        size: 100\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Details__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEYsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRyxjQUFVLENBQUMsTUFBTTtBQUNmSCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBTUEsc0JBQ0U7QUFBQSxjQUNHRCxPQUFPLGdCQUNOLHFFQUFDLHFEQUFEO0FBQ0UsYUFBTyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsQ0FEWDtBQUVFLFlBQU0sRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLE9BQXBCLEVBQTZCLE9BQTdCLENBRlY7QUFBQSw2QkFJRSxxRUFBQyx5REFBRDtBQUFZLGFBQUssRUFBRSxTQUFuQjtBQUE4QixlQUFPLEVBQUVBLE9BQXZDO0FBQWdELFlBQUksRUFBRTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGdCQVFOLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERldGFpbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZXRhaWxzJztcbmltcG9ydCB7IFJpbmdMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0sIDE1MDApO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8RmxleFxuICAgICAgICAgIHBhZGRpbmc9e1snN3JlbScsICcwcmVtJywgJzByZW0nLCAnMHJlbSddfVxuICAgICAgICAgIG1hcmdpbj17WycwLjJyZW0nLCAnMjVyZW0nLCAnMjVyZW0nLCAnMjVyZW0nXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxSaW5nTG9hZGVyIGNvbG9yPXsnIzA0RjhDOCd9IGxvYWRpbmc9e2xvYWRpbmd9IHNpemU9ezEwMH0gLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKSA6IChcbiAgICAgICAgPERldGFpbHMgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "react-icons/di":
/*!*********************************!*\
  !*** external "react-icons/di" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/di\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9kaVwiPzYyYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9kaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/di\n");

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