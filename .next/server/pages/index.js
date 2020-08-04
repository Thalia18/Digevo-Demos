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

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_estilosFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/estilosFooter */ "./styles/estilosFooter.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fab"]);
/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(_styles_estilosFooter__WEBPACK_IMPORTED_MODULE_1__["Estilos"], {
      className: "footer"
    }, __jsx("div", {
      className: "logo"
    }, "DIGEVO"), __jsx("div", {
      className: "principal"
    }, __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "info"
    }, "Oficina central - Santiago de Chile "), __jsx("a", {
      className: "contacto",
      href: "https://digevo.com/contacto/"
    }, "contacto@digevo.com"), __jsx("div", {
      className: "info"
    }, "Empresa 3G Motion SpA ")), __jsx("div", {
      className: "secundario"
    }, __jsx("div", {
      className: "infos"
    }, "\xA9 Copyright Digevo 2020 "), __jsx("div", {
      className: "redes"
    }, __jsx("a", {
      href: "https://www.linkedin.com/company/digevo/"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      className: "icono",
      icon: ['fab', 'linkedin'],
      size: "2x"
    })), __jsx("a", {
      href: "https://www.facebook.com/DigevoGroup/"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      className: "icono",
      icon: ['fab', 'facebook'],
      size: "2x"
    })))));
  }

});

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_estilosNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/estilosNavbar */ "./styles/estilosNavbar.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(_styles_estilosNavbar__WEBPACK_IMPORTED_MODULE_3__["Estilos"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      bg: "light",
      expand: "lg",
      className: "nav"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
      className: "logo",
      href: "#home"
    }, "DIGEVO"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav"
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
      id: "basic-navbar-nav"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
      className: "mr-auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      className: "opcion",
      href: "#home"
    }, "Home"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
      className: "lista",
      title: "Demos",
      id: "basic-nav-dropdown"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.1"
    }, "Blazeface Demo - Vision"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.2"
    }, "Body-pix Demo - Vision"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.3"
    }, "Facemesh Demo - Vision"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Divider, null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.4"
    }, "Pose Estimation - Camera feed demo"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.5"
    }, "Pose Estimation - Image demo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      className: "opcion",
      href: "https://digevo.com/contacto/"
    }, "Contacto")))));
  }

});

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
  }

});

/***/ }),

/***/ "./styles/estilosFooter.js":
/*!*********************************!*\
  !*** ./styles/estilosFooter.js ***!
  \*********************************/
/*! exports provided: Estilos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estilos", function() { return Estilos; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Estilos = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "estilosFooter__Estilos",
  componentId: "sc-1h4065p-0"
})(["@keyframes anim{0%{color:#000;}33%{color:rgb(13,224,183);}66%{color:rgb(106,27,154);}100%{color:rgb(36,103,217);}}.logo{animation-name:anim;animation-duration:8s;animation-iteration-count:infinite;float:left;font-size:2.1em;color:black;text-align:center;padding-left:2.4em;font-weight:550;text-decoration:none;font-family:'VremenaGroteskRegular',sans-serif;}.principal{background-color:#f8f8f8;width:100%;height:12em;margin-top:1.5em;padding-left:5em;}.contacto{color:black;font-weight:500;}.secundario{display:block;background-color:#f8f8f8;width:100%;height:4em;border-top:1px solid #999;padding-left:5em;}.infos{padding-top:0.5em;float:left;}.redes{float:right;padding-top:0.5em;padding-right:5em;}.icono{color:black;background-color:#f8f8f8;margin-left:0.5em;}"]);

/***/ }),

/***/ "./styles/estilosNavbar.js":
/*!*********************************!*\
  !*** ./styles/estilosNavbar.js ***!
  \*********************************/
/*! exports provided: Estilos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estilos", function() { return Estilos; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Estilos = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "estilosNavbar__Estilos",
  componentId: "sc-1bsrarv-0"
})(["@keyframes anim{0%{color:#000;}33%{color:rgb(13,224,183);}66%{color:rgb(106,27,154);}100%{color:rgb(36,103,217);}}.logo{animation-name:anim;animation-duration:8s;animation-iteration-count:infinite;float:left;font-size:2.1em;color:black;text-align:center;padding-left:2.4em;font-weight:550;text-decoration:none;font-family:'VremenaGroteskRegular',sans-serif;}.nav{box-shadow:0 15px 10px -10px rgba(0,0,0,0.2),0 1px 4px rgba(0,0,0,0.2),0 0 40px rgba(0,0,0,0.1) inset;}.mr-auto{padding-left:35em;font-family:'VremenaGroteskRegular',sans-serif;font-weight:640;}.opcion{float:right;font-size:1em;color:black;text-align:center;padding:0.8em 3em;margin-top:1em;}.opcion.active{border-bottom:3px solid black;}.lista{margin-top:0.5em;padding:0.8em 3em;}@media only screen and (max-width:1080px){.mr-auto{padding-left:30em;float:right;}}@media only screen and (max-width:900px){.mr-auto{padding-left:25em;float:right;}@media only screen and (max-width:768px){.mr-auto{padding-left:20em;float:right;}}"]);

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2VzdGlsb3NGb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2VzdGlsb3NOYXZiYXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFiIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJFc3RpbG9zIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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QkUsTUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsVUFBSSxFQUFDO0FBQXZCLHNDQWxCRixDQUpGLEVBMEJFLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsZUFBUyxFQUFDLFFBQXBCO0FBQTZCLFVBQUksRUFBQztBQUFsQyxrQkExQkYsQ0FERixDQUxGLENBREYsQ0FERjtBQTBDRDs7QUE1QzBDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ043QztBQUNBO0FBRWUsNkVBQWNGLDRDQUFLLENBQUNDLFNBQXBCLENBQThCO0FBQzNDQyxRQUFNLEdBQUc7QUFDUCxXQUNFLHVCQUNFLE1BQUMsMERBQUQsT0FERixFQUVFLE1BQUMsMERBQUQsT0FGRixDQURGO0FBTUQ7O0FBUjBDLEM7Ozs7Ozs7Ozs7OztBQ0g3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUMsT0FBTyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG93QkFBYixDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUYsT0FBTyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHMrQkFBYixDOzs7Ozs7Ozs7OztBQ0ZQLDhEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IEVzdGlsb3MgfSBmcm9tICcuLi9zdHlsZXMvZXN0aWxvc0Zvb3Rlcic7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhYiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuXHJcbmxpYnJhcnkuYWRkKGZhYik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEVzdGlsb3MgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+RElHRVZPPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmluY2lwYWxcIj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPk9maWNpbmEgY2VudHJhbCAtIFNhbnRpYWdvIGRlIENoaWxlIDwvZGl2PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY29udGFjdG9cIiBocmVmPVwiaHR0cHM6Ly9kaWdldm8uY29tL2NvbnRhY3RvL1wiPlxyXG4gICAgICAgICAgICBjb250YWN0b0BkaWdldm8uY29tXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5FbXByZXNhIDNHIE1vdGlvbiBTcEEgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN1bmRhcmlvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9zXCI+wqkgQ29weXJpZ2h0IERpZ2V2byAyMDIwIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRlc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvZGlnZXZvL1wiPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25vXCJcclxuICAgICAgICAgICAgICAgIGljb249e1snZmFiJywgJ2xpbmtlZGluJ119XHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMnhcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9EaWdldm9Hcm91cC9cIj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29ub1wiXHJcbiAgICAgICAgICAgICAgICBpY29uPXtbJ2ZhYicsICdmYWNlYm9vayddfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Fc3RpbG9zPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5cclxuaW1wb3J0IHsgRHJvcGRvd24sIEljb24sIE5hdiwgTmF2RHJvcGRvd24sIE5hdmJhciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBFc3RpbG9zIH0gZnJvbSAnLi4vc3R5bGVzL2VzdGlsb3NOYXZiYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxFc3RpbG9zPlxyXG4gICAgICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kIGNsYXNzTmFtZT1cImxvZ29cIiBocmVmPVwiI2hvbWVcIj5cclxuICAgICAgICAgICAgRElHRVZPXHJcbiAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJvcGNpb25cIiBocmVmPVwiI2hvbWVcIj5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdGFcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJEZW1vc1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4xXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJsYXplZmFjZSBEZW1vIC0gVmlzaW9uXHJcbiAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjJcIj5cclxuICAgICAgICAgICAgICAgICAgQm9keS1waXggRGVtbyAtIFZpc2lvblxyXG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4zXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZhY2VtZXNoIERlbW8gLSBWaXNpb25cclxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIj5cclxuICAgICAgICAgICAgICAgICAgUG9zZSBFc3RpbWF0aW9uIC0gQ2FtZXJhIGZlZWQgZGVtb1xyXG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy41XCI+XHJcbiAgICAgICAgICAgICAgICAgIFBvc2UgRXN0aW1hdGlvbiAtIEltYWdlIGRlbW9cclxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJvcGNpb25cIiBocmVmPVwiaHR0cHM6Ly9kaWdldm8uY29tL2NvbnRhY3RvL1wiPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdG9cclxuICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICA8L0VzdGlsb3M+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPE5hdmJhcj48L05hdmJhcj5cclxuICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBFc3RpbG9zID0gc3R5bGVkLmRpdmBcclxuICBAa2V5ZnJhbWVzIGFuaW0ge1xyXG4gICAgMCUge1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIDMzJSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTMsIDIyNCwgMTgzKTtcclxuICAgIH1cclxuICAgIDY2JSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTA2LCAyNywgMTU0KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBjb2xvcjogcmdiKDM2LCAxMDMsIDIxNyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDIuMWVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ1ZyZW1lbmFHcm90ZXNrUmVndWxhcicsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5wcmluY2lwYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVlbTtcclxuICB9XHJcbiAgLmNvbnRhY3RvIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5zZWN1bmRhcmlvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5OTtcclxuICAgIHBhZGRpbmctbGVmdDogNWVtO1xyXG4gIH1cclxuICAuaW5mb3Mge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC5yZWRlcyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1ZW07XHJcbiAgfVxyXG4gIC5pY29ubyB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgRXN0aWxvcyA9IHN0eWxlZC5kaXZgXHJcbiAgQGtleWZyYW1lcyBhbmltIHtcclxuICAgIDAlIHtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICAzMyUge1xyXG4gICAgICBjb2xvcjogcmdiKDEzLCAyMjQsIDE4Myk7XHJcbiAgICB9XHJcbiAgICA2NiUge1xyXG4gICAgICBjb2xvcjogcmdiKDEwNiwgMjcsIDE1NCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgY29sb3I6IHJnYigzNiwgMTAzLCAyMTcpO1xyXG4gICAgfVxyXG4gIH1cclxuICAubG9nbyB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyLjFlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMi40ZW07XHJcbiAgICBmb250LXdlaWdodDogNTUwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdWcmVtZW5hR3JvdGVza1JlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAubmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTVweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xyXG4gIH1cclxuICAubXItYXV0byB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1ZW07XHJcbiAgICBmb250LWZhbWlseTogJ1ZyZW1lbmFHcm90ZXNrUmVndWxhcicsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjQwO1xyXG4gIH1cclxuICAub3BjaW9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC44ZW0gM2VtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIH1cclxuICAub3BjaW9uLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gIC5saXN0YSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDNlbTtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgIC5tci1hdXRvIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMGVtO1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5tci1hdXRvIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyNWVtO1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubXItYXV0byB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBlbTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9