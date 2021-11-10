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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Activity; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/components/Activity.js\";\n\nfunction Activity() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    fontFamily: \"sans-serif\",\n    fontSize: \"xl\",\n    padding: \"1rem\",\n    marginTop: \"5rem\",\n    flexDirection: \"column\",\n    bgColor: \"blue.900\",\n    paddingBottom: \"2000\",\n    textColor: \"white\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      fontFamily: \"cursive\",\n      as: \"h1\",\n      size: \"4xl\",\n      children: \"Activities\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Working in NGOs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"I have worked in\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          _hover: {\n            color: 'blue.600'\n          },\n          href: \"http://www.eklavyatrust.org/\",\n          children: \" Eklavya NGO school \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), \"as a science and maths teacher for classes 9th, 10th and 11th. I have worked in this NGO for 2 months and looking forward to work in many more.\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://images.newindianexpress.com/uploads/user/imagelibrary/2021/2/7/w1200X800/This_ngo_leads_fight.jpg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Odyssey of Mind\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"I participated in ODM competition which took place in my school. At that time I took part in this contest to have a broad view on world and competition. My team of 5 students won gold medal in this contest.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"40rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://www.odysseyofthemind.com/wp-content/uploads/2021/06/OM-Full-Logo-1.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Amity Cadet Corps\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Since I belonged to family with Army background, I always wanted to see what the hype was about and I got a taste of it in ACC. From parades to different kinds of activities and living in tents with your friends for a week, everything was adventurous and fun.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://avatars.githubusercontent.com/u/81307379?s=400&u=808940eb4ed826e74fa3382e9b76d6e18900b938&v=4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Playing Guitar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"I was very passionate about playing guitar since my school days. I have also cleared level3 grade guitar test from trinity college of London which one of the most toughest and professional guitar exams. I have in many small bands and functions also.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://www.trinitycollege.com/images/news/news_placeholder.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Bike Riding\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"I fell in love with bikes once I was in college. I formed a small group with my friends for bike rides and plans. They say that 4wheels carry body and 2wheels carry soul.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://lh3.googleusercontent.com/a-/AOh14GgjKEwyvRlxVNQjf-qL3INXAMQiRpIpMXuJ6TYvkw=s288-p-rw-no\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjdGl2aXR5LmpzP2E4NWMiXSwibmFtZXMiOlsiQWN0aXZpdHkiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxjQUFVLEVBQUMsWUFEYjtBQUVFLFlBQVEsRUFBQyxJQUZYO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxhQUFTLEVBQUMsTUFKWjtBQUtFLGlCQUFhLEVBQUMsUUFMaEI7QUFNRSxXQUFPLEVBQUMsVUFOVjtBQU9FLGlCQUFhLEVBQUMsTUFQaEI7QUFRRSxhQUFTLEVBQUMsT0FSWjtBQUFBLDRCQVVFLHFFQUFDLHdEQUFEO0FBQVMsZ0JBQVUsRUFBQyxTQUFwQjtBQUE4QixRQUFFLEVBQUMsSUFBakM7QUFBc0MsVUFBSSxFQUFDLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFhRSxxRUFBQyx3REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxLQUF0QjtBQUE0QixnQkFBVSxFQUFDLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFnQkU7QUFBQSxrREFFRTtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQU0sRUFBRTtBQUFFQyxpQkFBSyxFQUFFO0FBQVQsV0FBZDtBQUFxQyxjQUFJLEVBQUMsOEJBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQTBCRSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsZUFxQ0UscUVBQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsS0FBdEI7QUFBNEIsZ0JBQVUsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJDRixlQXdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDRixlQThDRSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Q0YsZUF5REUscUVBQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsS0FBdEI7QUFBNEIsZ0JBQVUsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpERixlQTRERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVERixlQWtFRSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsRUYsZUE2RUUscUVBQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsS0FBdEI7QUFBNEIsZ0JBQVUsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdFRixlQWdGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhGRixlQXNGRSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0RkYsZUFpR0UscUVBQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsS0FBdEI7QUFBNEIsZ0JBQVUsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpHRixlQW9HRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBHRixlQXlHRSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzSEQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjdGl2aXR5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgTGluaywgSW1hZ2UsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aXZpdHkoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCJcbiAgICAgIGZvbnRTaXplPVwieGxcIlxuICAgICAgcGFkZGluZz1cIjFyZW1cIlxuICAgICAgbWFyZ2luVG9wPVwiNXJlbVwiXG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGJnQ29sb3I9XCJibHVlLjkwMFwiXG4gICAgICBwYWRkaW5nQm90dG9tPVwiMjAwMFwiXG4gICAgICB0ZXh0Q29sb3I9XCJ3aGl0ZVwiXG4gICAgPlxuICAgICAgPEhlYWRpbmcgZm9udEZhbWlseT1cImN1cnNpdmVcIiBhcz1cImgxXCIgc2l6ZT1cIjR4bFwiPlxuICAgICAgICBBY3Rpdml0aWVzXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCJ0aGluXCI+XG4gICAgICAgIFdvcmtpbmcgaW4gTkdPc1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPHA+XG4gICAgICAgIEkgaGF2ZSB3b3JrZWQgaW5cbiAgICAgICAgPHU+XG4gICAgICAgICAgPExpbmsgX2hvdmVyPXt7IGNvbG9yOiAnYmx1ZS42MDAnIH19IGhyZWY9XCJodHRwOi8vd3d3LmVrbGF2eWF0cnVzdC5vcmcvXCI+IEVrbGF2eWEgTkdPIHNjaG9vbCA8L0xpbms+XG4gICAgICAgIDwvdT5cbiAgICAgICAgYXMgYSBzY2llbmNlIGFuZCBtYXRocyB0ZWFjaGVyIGZvciBjbGFzc2VzIDl0aCwgMTB0aCBhbmQgMTF0aC4gSSBoYXZlXG4gICAgICAgIHdvcmtlZCBpbiB0aGlzIE5HTyBmb3IgMiBtb250aHMgYW5kIGxvb2tpbmcgZm9yd2FyZCB0byB3b3JrIGluIG1hbnlcbiAgICAgICAgbW9yZS5cbiAgICAgIDwvcD5cblxuICAgICAgPEltYWdlXG4gICAgICAgIGg9XCIxOHJlbVwiXG4gICAgICAgIHc9XCIyMHJlbVwiXG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBtYXJnaW49XCIwLjVyZW1cIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCIxM3B4XCJcbiAgICAgICAgYmdDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgcGFkZGluZz1cIjAuMnJlbVwiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLm5ld2luZGlhbmV4cHJlc3MuY29tL3VwbG9hZHMvdXNlci9pbWFnZWxpYnJhcnkvMjAyMS8yLzcvdzEyMDBYODAwL1RoaXNfbmdvX2xlYWRzX2ZpZ2h0LmpwZ1wiXG4gICAgICAvPlxuXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCJ0aGluXCI+XG4gICAgICAgIE9keXNzZXkgb2YgTWluZFxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPHA+XG4gICAgICAgIEkgcGFydGljaXBhdGVkIGluIE9ETSBjb21wZXRpdGlvbiB3aGljaCB0b29rIHBsYWNlIGluIG15IHNjaG9vbC4gQXQgdGhhdFxuICAgICAgICB0aW1lIEkgdG9vayBwYXJ0IGluIHRoaXMgY29udGVzdCB0byBoYXZlIGEgYnJvYWQgdmlldyBvbiB3b3JsZCBhbmRcbiAgICAgICAgY29tcGV0aXRpb24uIE15IHRlYW0gb2YgNSBzdHVkZW50cyB3b24gZ29sZCBtZWRhbCBpbiB0aGlzIGNvbnRlc3QuXG4gICAgICA8L3A+XG5cbiAgICAgIDxJbWFnZVxuICAgICAgICBoPVwiMThyZW1cIlxuICAgICAgICB3PVwiNDByZW1cIlxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgbWFyZ2luPVwiMC41cmVtXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTNweFwiXG4gICAgICAgIGJnQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHBhZGRpbmc9XCIwLjJyZW1cIlxuICAgICAgICBzcmM9XCJodHRwczovL3d3dy5vZHlzc2V5b2Z0aGVtaW5kLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNi9PTS1GdWxsLUxvZ28tMS5wbmdcIlxuICAgICAgLz5cblxuICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwidGhpblwiPlxuICAgICAgICBBbWl0eSBDYWRldCBDb3Jwc1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPHA+XG4gICAgICAgIFNpbmNlIEkgYmVsb25nZWQgdG8gZmFtaWx5IHdpdGggQXJteSBiYWNrZ3JvdW5kLCBJIGFsd2F5cyB3YW50ZWQgdG8gc2VlXG4gICAgICAgIHdoYXQgdGhlIGh5cGUgd2FzIGFib3V0IGFuZCBJIGdvdCBhIHRhc3RlIG9mIGl0IGluIEFDQy4gRnJvbSBwYXJhZGVzIHRvXG4gICAgICAgIGRpZmZlcmVudCBraW5kcyBvZiBhY3Rpdml0aWVzIGFuZCBsaXZpbmcgaW4gdGVudHMgd2l0aCB5b3VyIGZyaWVuZHMgZm9yXG4gICAgICAgIGEgd2VlaywgZXZlcnl0aGluZyB3YXMgYWR2ZW50dXJvdXMgYW5kIGZ1bi5cbiAgICAgIDwvcD5cbiAgICAgIDxJbWFnZVxuICAgICAgICBoPVwiMThyZW1cIlxuICAgICAgICB3PVwiMjByZW1cIlxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgbWFyZ2luPVwiMC41cmVtXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTNweFwiXG4gICAgICAgIGJnQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHBhZGRpbmc9XCIwLjJyZW1cIlxuICAgICAgICBzcmM9XCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODEzMDczNzk/cz00MDAmdT04MDg5NDBlYjRlZDgyNmU3NGZhMzM4MmU5Yjc2ZDZlMTg5MDBiOTM4JnY9NFwiXG4gICAgICAvPlxuXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCJ0aGluXCI+XG4gICAgICAgIFBsYXlpbmcgR3VpdGFyXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8cD5cbiAgICAgICAgSSB3YXMgdmVyeSBwYXNzaW9uYXRlIGFib3V0IHBsYXlpbmcgZ3VpdGFyIHNpbmNlIG15IHNjaG9vbCBkYXlzLiBJIGhhdmVcbiAgICAgICAgYWxzbyBjbGVhcmVkIGxldmVsMyBncmFkZSBndWl0YXIgdGVzdCBmcm9tIHRyaW5pdHkgY29sbGVnZSBvZiBMb25kb25cbiAgICAgICAgd2hpY2ggb25lIG9mIHRoZSBtb3N0IHRvdWdoZXN0IGFuZCBwcm9mZXNzaW9uYWwgZ3VpdGFyIGV4YW1zLiBJIGhhdmUgaW5cbiAgICAgICAgbWFueSBzbWFsbCBiYW5kcyBhbmQgZnVuY3Rpb25zIGFsc28uXG4gICAgICA8L3A+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgaD1cIjE4cmVtXCJcbiAgICAgICAgdz1cIjIwcmVtXCJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgIG1hcmdpbj1cIjAuNXJlbVwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjEzcHhcIlxuICAgICAgICBiZ0NvbG9yPVwid2hpdGVcIlxuICAgICAgICBwYWRkaW5nPVwiMC4ycmVtXCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cudHJpbml0eWNvbGxlZ2UuY29tL2ltYWdlcy9uZXdzL25ld3NfcGxhY2Vob2xkZXIucG5nXCJcbiAgICAgIC8+XG5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwiMnhsXCIgZm9udFdlaWdodD1cInRoaW5cIj5cbiAgICAgICAgQmlrZSBSaWRpbmdcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxwPlxuICAgICAgICBJIGZlbGwgaW4gbG92ZSB3aXRoIGJpa2VzIG9uY2UgSSB3YXMgaW4gY29sbGVnZS4gSSBmb3JtZWQgYSBzbWFsbCBncm91cFxuICAgICAgICB3aXRoIG15IGZyaWVuZHMgZm9yIGJpa2UgcmlkZXMgYW5kIHBsYW5zLiBUaGV5IHNheSB0aGF0IDR3aGVlbHMgY2FycnlcbiAgICAgICAgYm9keSBhbmQgMndoZWVscyBjYXJyeSBzb3VsLlxuICAgICAgPC9wPlxuICAgICAgPEltYWdlXG4gICAgICAgIGg9XCIxOHJlbVwiXG4gICAgICAgIHc9XCIyMHJlbVwiXG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBtYXJnaW49XCIwLjVyZW1cIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCIxM3B4XCJcbiAgICAgICAgYmdDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgcGFkZGluZz1cIjAuMnJlbVwiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnaktFd3l2Umx4Vk5RamYtcUwzSU5YQU1RaVJwSXBNWHVKNlRZdmt3PXMyODgtcC1ydy1ub1wiXG4gICAgICAvPlxuICAgIDwvRmxleD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Activity.js\n");

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