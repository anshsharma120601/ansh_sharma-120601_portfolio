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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Activity; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/anshsharma/Desktop/Ansh-Sharma-120601_portfolio/components/Activity.js\";\n\nfunction Activity() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    fontFamily: \"sans-serif\",\n    fontSize: \"xl\",\n    padding: \"1rem\",\n    marginTop: \"5rem\",\n    flexDirection: \"column\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      fontFamily: \"cursive\",\n      as: \"h1\",\n      size: \"4xl\",\n      children: \"Activities\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Working in NGOs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"I have worked in\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          _hover: {\n            color: 'blue.600'\n          },\n          href: \"http://www.eklavyatrust.org/\",\n          children: [' ', \"Eklavya NGO school\", ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), \"as a science and maths teacher for classes 9th, 10th and 11th. I have worked in this NGO for 2 months and looking forward to work in many more.\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://images.newindianexpress.com/uploads/user/imagelibrary/2021/2/7/w1200X800/This_ngo_leads_fight.jpg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Odyssey of Mind\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"I participated in ODM competition which took place in my school. At that time I took part in this contest to have a broad view on world and competition. My team of 5 students won gold medal in this contest.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"40rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://www.odysseyofthemind.com/wp-content/uploads/2021/06/OM-Full-Logo-1.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Amity Cadet Corps\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Since I belonged to family with Army background, I always wanted to see what the hype was about and I got a taste of it in ACC. From parades to different kinds of activities and living in tents with your friends for a week, everything was adventurous and fun.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://avatars.githubusercontent.com/u/81307379?s=400&u=808940eb4ed826e74fa3382e9b76d6e18900b938&v=4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Playing Guitar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"I was very passionate about playing guitar since my school days. I have also cleared level3 grade guitar test from trinity college of London which one of the most toughest and professional guitar exams. I have in many small bands and functions also.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://www.trinitycollege.com/images/news/news_placeholder.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h2\",\n      size: \"2xl\",\n      fontWeight: \"thin\",\n      children: \"Bike Riding\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"I fell in love with bikes once I was in college. I formed a small group with my friends for bike rides and plans. They say that 4wheels carry body and 2wheels carry soul.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      h: \"18rem\",\n      w: \"20rem\",\n      cursor: \"pointer\",\n      margin: \"0.5rem\",\n      borderRadius: \"13px\",\n      bgColor: \"white\",\n      padding: \"0.2rem\",\n      src: \"https://lh3.googleusercontent.com/a-/AOh14GgjKEwyvRlxVNQjf-qL3INXAMQiRpIpMXuJ6TYvkw=s288-p-rw-no\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjdGl2aXR5LmpzP2E4NWMiXSwibmFtZXMiOlsiQWN0aXZpdHkiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxjQUFVLEVBQUMsWUFEYjtBQUVFLFlBQVEsRUFBQyxJQUZYO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxhQUFTLEVBQUMsTUFKWjtBQUtFLGlCQUFhLEVBQUMsUUFMaEI7QUFBQSw0QkFPRSxxRUFBQyx3REFBRDtBQUFTLGdCQUFVLEVBQUMsU0FBcEI7QUFBOEIsUUFBRSxFQUFDLElBQWpDO0FBQXNDLFVBQUksRUFBQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBVUUscUVBQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsS0FBdEI7QUFBNEIsZ0JBQVUsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBYUU7QUFBQSxrREFFRTtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsZ0JBQU0sRUFBRTtBQUFFQyxpQkFBSyxFQUFFO0FBQVQsV0FEVjtBQUVFLGNBQUksRUFBQyw4QkFGUDtBQUFBLHFCQUlHLEdBSkgsd0JBS3FCLEdBTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQTZCRSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3QkYsZUF3Q0UscUVBQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsS0FBdEI7QUFBNEIsZ0JBQVUsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDRixlQTJDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDRixlQWlERSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqREYsZUE0REUscUVBQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsS0FBdEI7QUFBNEIsZ0JBQVUsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVERixlQStERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9ERixlQXFFRSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyRUYsZUFnRkUscUVBQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsS0FBdEI7QUFBNEIsZ0JBQVUsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhGRixlQW1GRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5GRixlQXlGRSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6RkYsZUFvR0UscUVBQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsS0FBdEI7QUFBNEIsZ0JBQVUsRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBHRixlQXVHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZHRixlQTRHRSxxRUFBQyxzREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxZQUFNLEVBQUMsU0FIVDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0Usa0JBQVksRUFBQyxNQUxmO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLFNBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5SEQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjdGl2aXR5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgTGluaywgSW1hZ2UsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aXZpdHkoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCJcbiAgICAgIGZvbnRTaXplPVwieGxcIlxuICAgICAgcGFkZGluZz1cIjFyZW1cIlxuICAgICAgbWFyZ2luVG9wPVwiNXJlbVwiXG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICA+XG4gICAgICA8SGVhZGluZyBmb250RmFtaWx5PVwiY3Vyc2l2ZVwiIGFzPVwiaDFcIiBzaXplPVwiNHhsXCI+XG4gICAgICAgIEFjdGl2aXRpZXNcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwiMnhsXCIgZm9udFdlaWdodD1cInRoaW5cIj5cbiAgICAgICAgV29ya2luZyBpbiBOR09zXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8cD5cbiAgICAgICAgSSBoYXZlIHdvcmtlZCBpblxuICAgICAgICA8dT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgX2hvdmVyPXt7IGNvbG9yOiAnYmx1ZS42MDAnIH19XG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5la2xhdnlhdHJ1c3Qub3JnL1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIEVrbGF2eWEgTkdPIHNjaG9vbHsnICd9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3U+XG4gICAgICAgIGFzIGEgc2NpZW5jZSBhbmQgbWF0aHMgdGVhY2hlciBmb3IgY2xhc3NlcyA5dGgsIDEwdGggYW5kIDExdGguIEkgaGF2ZVxuICAgICAgICB3b3JrZWQgaW4gdGhpcyBOR08gZm9yIDIgbW9udGhzIGFuZCBsb29raW5nIGZvcndhcmQgdG8gd29yayBpbiBtYW55XG4gICAgICAgIG1vcmUuXG4gICAgICA8L3A+XG5cbiAgICAgIDxJbWFnZVxuICAgICAgICBoPVwiMThyZW1cIlxuICAgICAgICB3PVwiMjByZW1cIlxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgbWFyZ2luPVwiMC41cmVtXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTNweFwiXG4gICAgICAgIGJnQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHBhZGRpbmc9XCIwLjJyZW1cIlxuICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy5uZXdpbmRpYW5leHByZXNzLmNvbS91cGxvYWRzL3VzZXIvaW1hZ2VsaWJyYXJ5LzIwMjEvMi83L3cxMjAwWDgwMC9UaGlzX25nb19sZWFkc19maWdodC5qcGdcIlxuICAgICAgLz5cblxuICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwidGhpblwiPlxuICAgICAgICBPZHlzc2V5IG9mIE1pbmRcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxwPlxuICAgICAgICBJIHBhcnRpY2lwYXRlZCBpbiBPRE0gY29tcGV0aXRpb24gd2hpY2ggdG9vayBwbGFjZSBpbiBteSBzY2hvb2wuIEF0IHRoYXRcbiAgICAgICAgdGltZSBJIHRvb2sgcGFydCBpbiB0aGlzIGNvbnRlc3QgdG8gaGF2ZSBhIGJyb2FkIHZpZXcgb24gd29ybGQgYW5kXG4gICAgICAgIGNvbXBldGl0aW9uLiBNeSB0ZWFtIG9mIDUgc3R1ZGVudHMgd29uIGdvbGQgbWVkYWwgaW4gdGhpcyBjb250ZXN0LlxuICAgICAgPC9wPlxuXG4gICAgICA8SW1hZ2VcbiAgICAgICAgaD1cIjE4cmVtXCJcbiAgICAgICAgdz1cIjQwcmVtXCJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgIG1hcmdpbj1cIjAuNXJlbVwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjEzcHhcIlxuICAgICAgICBiZ0NvbG9yPVwid2hpdGVcIlxuICAgICAgICBwYWRkaW5nPVwiMC4ycmVtXCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cub2R5c3NleW9mdGhlbWluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvT00tRnVsbC1Mb2dvLTEucG5nXCJcbiAgICAgIC8+XG5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwiMnhsXCIgZm9udFdlaWdodD1cInRoaW5cIj5cbiAgICAgICAgQW1pdHkgQ2FkZXQgQ29ycHNcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxwPlxuICAgICAgICBTaW5jZSBJIGJlbG9uZ2VkIHRvIGZhbWlseSB3aXRoIEFybXkgYmFja2dyb3VuZCwgSSBhbHdheXMgd2FudGVkIHRvIHNlZVxuICAgICAgICB3aGF0IHRoZSBoeXBlIHdhcyBhYm91dCBhbmQgSSBnb3QgYSB0YXN0ZSBvZiBpdCBpbiBBQ0MuIEZyb20gcGFyYWRlcyB0b1xuICAgICAgICBkaWZmZXJlbnQga2luZHMgb2YgYWN0aXZpdGllcyBhbmQgbGl2aW5nIGluIHRlbnRzIHdpdGggeW91ciBmcmllbmRzIGZvclxuICAgICAgICBhIHdlZWssIGV2ZXJ5dGhpbmcgd2FzIGFkdmVudHVyb3VzIGFuZCBmdW4uXG4gICAgICA8L3A+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgaD1cIjE4cmVtXCJcbiAgICAgICAgdz1cIjIwcmVtXCJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgIG1hcmdpbj1cIjAuNXJlbVwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjEzcHhcIlxuICAgICAgICBiZ0NvbG9yPVwid2hpdGVcIlxuICAgICAgICBwYWRkaW5nPVwiMC4ycmVtXCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzgxMzA3Mzc5P3M9NDAwJnU9ODA4OTQwZWI0ZWQ4MjZlNzRmYTMzODJlOWI3NmQ2ZTE4OTAwYjkzOCZ2PTRcIlxuICAgICAgLz5cblxuICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwidGhpblwiPlxuICAgICAgICBQbGF5aW5nIEd1aXRhclxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPHA+XG4gICAgICAgIEkgd2FzIHZlcnkgcGFzc2lvbmF0ZSBhYm91dCBwbGF5aW5nIGd1aXRhciBzaW5jZSBteSBzY2hvb2wgZGF5cy4gSSBoYXZlXG4gICAgICAgIGFsc28gY2xlYXJlZCBsZXZlbDMgZ3JhZGUgZ3VpdGFyIHRlc3QgZnJvbSB0cmluaXR5IGNvbGxlZ2Ugb2YgTG9uZG9uXG4gICAgICAgIHdoaWNoIG9uZSBvZiB0aGUgbW9zdCB0b3VnaGVzdCBhbmQgcHJvZmVzc2lvbmFsIGd1aXRhciBleGFtcy4gSSBoYXZlIGluXG4gICAgICAgIG1hbnkgc21hbGwgYmFuZHMgYW5kIGZ1bmN0aW9ucyBhbHNvLlxuICAgICAgPC9wPlxuICAgICAgPEltYWdlXG4gICAgICAgIGg9XCIxOHJlbVwiXG4gICAgICAgIHc9XCIyMHJlbVwiXG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBtYXJnaW49XCIwLjVyZW1cIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCIxM3B4XCJcbiAgICAgICAgYmdDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgcGFkZGluZz1cIjAuMnJlbVwiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnRyaW5pdHljb2xsZWdlLmNvbS9pbWFnZXMvbmV3cy9uZXdzX3BsYWNlaG9sZGVyLnBuZ1wiXG4gICAgICAvPlxuXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCJ0aGluXCI+XG4gICAgICAgIEJpa2UgUmlkaW5nXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8cD5cbiAgICAgICAgSSBmZWxsIGluIGxvdmUgd2l0aCBiaWtlcyBvbmNlIEkgd2FzIGluIGNvbGxlZ2UuIEkgZm9ybWVkIGEgc21hbGwgZ3JvdXBcbiAgICAgICAgd2l0aCBteSBmcmllbmRzIGZvciBiaWtlIHJpZGVzIGFuZCBwbGFucy4gVGhleSBzYXkgdGhhdCA0d2hlZWxzIGNhcnJ5XG4gICAgICAgIGJvZHkgYW5kIDJ3aGVlbHMgY2Fycnkgc291bC5cbiAgICAgIDwvcD5cbiAgICAgIDxJbWFnZVxuICAgICAgICBoPVwiMThyZW1cIlxuICAgICAgICB3PVwiMjByZW1cIlxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgbWFyZ2luPVwiMC41cmVtXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTNweFwiXG4gICAgICAgIGJnQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHBhZGRpbmc9XCIwLjJyZW1cIlxuICAgICAgICBzcmM9XCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHZ2pLRXd5dlJseFZOUWpmLXFMM0lOWEFNUWlScElwTVh1SjZUWXZrdz1zMjg4LXAtcnctbm9cIlxuICAgICAgLz5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Activity.js\n");

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