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
/* harmony import */ var _src_components_DemosHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/DemosHome */ "./src/components/DemosHome.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _src_components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Navbar */ "./src/components/Navbar.js");
var _jsxFileName = "E:\\THALIA20\\Python-tf\\Tensorflow js\\Digevo-Demos\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/react-in-jsx-scope */





class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, __jsx(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }), __jsx(_src_components_DemosHome__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/components/BoxHome.js":
/*!***********************************!*\
  !*** ./src/components/BoxHome.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_BoxHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/BoxHome */ "./src/styles/BoxHome.js");
var _jsxFileName = "E:\\THALIA20\\Python-tf\\Tensorflow js\\Digevo-Demos\\src\\components\\BoxHome.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/react-in-jsx-scope */


const BoxHome = ({
  isBigBox,
  title,
  description
}) => {
  return __jsx(_styles_BoxHome__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    boxDisplay: isBigBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_styles_BoxHome__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    boxDisplay: isBigBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://i.ibb.co/bgJrQ2n/portada.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), __jsx(_styles_BoxHome__WEBPACK_IMPORTED_MODULE_1__["Description"], {
    boxDisplay: isBigBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, title), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, description), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Probar")));
};

/* harmony default export */ __webpack_exports__["default"] = (BoxHome);

/***/ }),

/***/ "./src/components/DemosHome.js":
/*!*************************************!*\
  !*** ./src/components/DemosHome.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BoxHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxHome */ "./src/components/BoxHome.js");
/* harmony import */ var _styles_DemosHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DemosHome */ "./src/styles/DemosHome.js");
var _jsxFileName = "E:\\THALIA20\\Python-tf\\Tensorflow js\\Digevo-Demos\\src\\components\\DemosHome.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/react-in-jsx-scope */



const demosHome = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_styles_DemosHome__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_BoxHome__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isBigBox: true,
    title: "Demo1",
    description: "Esto es un demo interactivo y una prueba para el dise\xF1o de la pagina\r web a mayor longitud voy a probar como se acomodan los componentes de esta pagina web",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx(_BoxHome__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Demo1",
    description: "Esto es un demo interactivo y una prueba para el dise\xF1o de la pagina\r web",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(_BoxHome__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Demo1",
    description: "Esto es un demo interactivo y una prueba para el dise\xF1o de la pagina\r web",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_BoxHome__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Demo1",
    description: "Esto es un demo interactivo y una prueba para el dise\xF1o de la pagina\r web",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (demosHome);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Footer */ "./src/styles/Footer.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\THALIA20\\Python-tf\\Tensorflow js\\Digevo-Demos\\src\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fab"]);
/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(_styles_Footer__WEBPACK_IMPORTED_MODULE_1__["Estilos"], {
      className: "footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, "DIGEVO"), __jsx("div", {
      className: "principal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, "Oficina central - Santiago de Chile "), __jsx("a", {
      className: "contacto",
      href: "https://digevo.com/contacto/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, "contacto@digevo.com"), __jsx("div", {
      className: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, "Empresa 3G Motion SpA ")), __jsx("div", {
      className: "secundario",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "infos",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, "\xA9 Copyright Digevo 2020 "), __jsx("div", {
      className: "redes",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "https://www.linkedin.com/company/digevo/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      className: "icono",
      icon: ['fab', 'linkedin'],
      size: "2x",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    })), __jsx("a", {
      href: "https://www.facebook.com/DigevoGroup/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      className: "icono",
      icon: ['fab', 'facebook'],
      size: "2x",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    })))));
  }

});

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
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
/* harmony import */ var _styles_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Navbar */ "./src/styles/Navbar.js");
var _jsxFileName = "E:\\THALIA20\\Python-tf\\Tensorflow js\\Digevo-Demos\\src\\components\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(_styles_Navbar__WEBPACK_IMPORTED_MODULE_3__["Estilos"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      bg: "light",
      expand: "lg",
      className: "nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
      className: "logo",
      href: "#home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, "DIGEVO"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
      id: "basic-navbar-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
      className: "mr-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      className: "opcion",
      href: "#home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, "Home"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
      className: "lista",
      title: "Demos",
      id: "basic-nav-dropdown",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, "Blazeface Demo - Vision"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, "Body-pix Demo - Vision"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, "Facemesh Demo - Vision"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Divider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, "Pose Estimation - Camera feed demo"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      href: "#action/3.5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, "Pose Estimation - Image demo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      className: "opcion",
      href: "https://digevo.com/contacto/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }, "Contacto")))));
  }

});

/***/ }),

/***/ "./src/styles/BoxHome.js":
/*!*******************************!*\
  !*** ./src/styles/BoxHome.js ***!
  \*******************************/
/*! exports provided: Box, Image, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BoxHome__Box",
  componentId: "sc-2i7ik5-0"
})(["display:", ";grid-column:", ";background-color:rgb(223,223,223);border-radius:5px;-webkit-box-shadow:4px 7px 5px 0px rgba(0,0,0,0.7);-moz-box-shadow:4px 7px 5px 0px rgba(0,0,0,0.7);box-shadow:4px 7px 5px 0px rgba(0,0,0,0.7);@media (max-width:768px){display:block;grid-column:unset;}"], props => props.boxDisplay ? 'flex' : 'block', props => props.boxDisplay ? '1 / -1' : 'unset'); // prettier-ignore

const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BoxHome__Image",
  componentId: "sc-2i7ik5-1"
})(["width:", ";img{", " width:100%;height:100%;}@media (max-width:768px){width:100%;img{border-radius:unset;border-top-right-radius:5px;border-top-left-radius:5px;}}"], props => props.boxDisplay ? '50%' : '100%', props => props.boxDisplay ? 'border-top-left-radius:5px; border-bottom-left-radius: 5px;' : 'border-top-right-radius:5px; border-top-left-radius:5px;');
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BoxHome__Description",
  componentId: "sc-2i7ik5-2"
})(["width:", ";margin-bottom:", ";h3{margin:5%;font-size:", ";}p{margin:5%;font-size:", ";}div{margin-left:", ";}@media (max-width:768px){width:100%;margin-bottom:5%;div{margin-left:70%;font-size:1.2em;}h3{margin:5%;font-size:2em;}p{margin:5%;font-size:1.2em;}}@media (max-width:550px){width:100%;margin-bottom:5%;div{margin-left:70%;font-size:1em;}h3{margin:4%;font-size:1em;}p{margin:4%;font-size:1em;}}"], props => props.boxDisplay ? '50%' : '100%', props => props.boxDisplay ? '0%' : '5%', props => props.boxDisplay ? '2em' : '1em', props => props.boxDisplay ? '1.2em' : '1em', props => props.boxDisplay ? '80%' : '70%');

/***/ }),

/***/ "./src/styles/DemosHome.js":
/*!*********************************!*\
  !*** ./src/styles/DemosHome.js ***!
  \*********************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable import/prefer-default-export */

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DemosHome__Container",
  componentId: "sc-17kr4j3-0"
})(["display:grid;grid-template:minmax(160px,0.8fr) minmax(160px,1fr) / repeat( 3,minmax(160px,20em) );gap:1.5em;padding:2% 0%;min-width:550px;justify-content:center;@media (max-width:768px){grid-template:unset;grid-template-rows:repeat(auto-fill,minmax(160px,1fr));gap:1em;min-width:260px;}"]);

/***/ }),

/***/ "./src/styles/Footer.js":
/*!******************************!*\
  !*** ./src/styles/Footer.js ***!
  \******************************/
/*! exports provided: Estilos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estilos", function() { return Estilos; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Estilos = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footer__Estilos",
  componentId: "sc-10hxtrb-0"
})(["@keyframes anim{0%{color:#000;}33%{color:rgb(13,224,183);}66%{color:rgb(106,27,154);}100%{color:rgb(36,103,217);}}.logo{animation-name:anim;animation-duration:8s;animation-iteration-count:infinite;float:left;font-size:2.1em;color:black;text-align:center;padding-left:2.4em;font-weight:550;text-decoration:none;font-family:'VremenaGroteskRegular',sans-serif;}.principal{background-color:#f8f8f8;width:100%;height:12em;margin-top:1.5em;padding-left:5em;}.contacto{color:black;font-weight:500;}.secundario{display:block;background-color:#f8f8f8;width:100%;height:4em;border-top:1px solid #999;padding-left:5em;}.infos{padding-top:0.5em;float:left;}.redes{float:right;padding-top:0.5em;padding-right:5em;}.icono{color:black;background-color:#f8f8f8;margin-left:0.5em;}"]);

/***/ }),

/***/ "./src/styles/Navbar.js":
/*!******************************!*\
  !*** ./src/styles/Navbar.js ***!
  \******************************/
/*! exports provided: Estilos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estilos", function() { return Estilos; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Estilos = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbar__Estilos",
  componentId: "fjyf87-0"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm94SG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EZW1vc0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JveEhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9EZW1vc0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJpbmRleCIsIkNvbXBvbmVudCIsInJlbmRlciIsIkJveEhvbWUiLCJpc0JpZ0JveCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZW1vc0hvbWUiLCJsaWJyYXJ5IiwiYWRkIiwiZmFiIiwiUmVhY3QiLCJCb3giLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImJveERpc3BsYXkiLCJJbWFnZSIsIkRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwiRXN0aWxv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QU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwWkFDWkMsS0FBRCxJQUFZQSxLQUFLLENBQUNDLFVBQU4sR0FBbUIsS0FBbkIsR0FBMkIsTUFEMUIsRUFFSkQsS0FBRCxJQUFZQSxLQUFLLENBQUNDLFVBQU4sR0FBbUIsSUFBbkIsR0FBMEIsSUFGakMsRUFNTkQsS0FBRCxJQUFZQSxLQUFLLENBQUNDLFVBQU4sR0FBbUIsS0FBbkIsR0FBMkIsS0FOaEMsRUFVTkQsS0FBRCxJQUFZQSxLQUFLLENBQUNDLFVBQU4sR0FBbUIsT0FBbkIsR0FBNkIsS0FWbEMsRUFjSkQsS0FBRCxJQUFZQSxLQUFLLENBQUNDLFVBQU4sR0FBbUIsS0FBbkIsR0FBMkIsS0FkbEMsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDckNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1HLFNBQVMsR0FBR04sd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzU0FBZixDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTU0sT0FBTyxHQUFHUCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG93QkFBYixDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTU0sT0FBTyxHQUFHUCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHMrQkFBYixDOzs7Ozs7Ozs7OztBQ0ZQLDhEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGVtb3NIb21lIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0RlbW9zSG9tZSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZiYXInO1xyXG5cclxuY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdmJhcj48L05hdmJhcj5cclxuICAgICAgICA8RGVtb3NIb21lPjwvRGVtb3NIb21lPlxyXG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cclxuaW1wb3J0IHsgQm94LCBJbWFnZSwgRGVzY3JpcHRpb24gfSBmcm9tICcuLi9zdHlsZXMvQm94SG9tZSc7XHJcblxyXG5jb25zdCBCb3hIb21lID0gKHsgaXNCaWdCb3gsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYm94RGlzcGxheT17aXNCaWdCb3h9PlxyXG4gICAgICA8SW1hZ2UgYm94RGlzcGxheT17aXNCaWdCb3h9PlxyXG4gICAgICAgIDxpbWcgc3JjPSdodHRwczovL2kuaWJiLmNvL2JnSnJRMm4vcG9ydGFkYS5qcGcnIGFsdD0nJyAvPlxyXG4gICAgICA8L0ltYWdlPlxyXG4gICAgICA8RGVzY3JpcHRpb24gYm94RGlzcGxheT17aXNCaWdCb3h9PlxyXG4gICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXY+UHJvYmFyPC9kaXY+XHJcbiAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94SG9tZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXHJcblxyXG5pbXBvcnQgQm94IGZyb20gJy4vQm94SG9tZSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL3N0eWxlcy9EZW1vc0hvbWUnO1xyXG5cclxuY29uc3QgZGVtb3NIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGlzQmlnQm94PXt0cnVlfVxyXG4gICAgICAgICAgdGl0bGU9XCJEZW1vMVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkVzdG8gZXMgdW4gZGVtbyBpbnRlcmFjdGl2byB5IHVuYSBwcnVlYmEgcGFyYSBlbCBkaXNlw7FvIGRlIGxhIHBhZ2luYVxyXG4gICAgICAgICAgd2ViIGEgbWF5b3IgbG9uZ2l0dWQgdm95IGEgcHJvYmFyIGNvbW8gc2UgYWNvbW9kYW4gbG9zIGNvbXBvbmVudGVzIGRlIGVzdGEgcGFnaW5hIHdlYlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICB0aXRsZT1cIkRlbW8xXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRXN0byBlcyB1biBkZW1vIGludGVyYWN0aXZvIHkgdW5hIHBydWViYSBwYXJhIGVsIGRpc2XDsW8gZGUgbGEgcGFnaW5hXHJcbiAgICAgICAgICB3ZWJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgdGl0bGU9XCJEZW1vMVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkVzdG8gZXMgdW4gZGVtbyBpbnRlcmFjdGl2byB5IHVuYSBwcnVlYmEgcGFyYSBlbCBkaXNlw7FvIGRlIGxhIHBhZ2luYVxyXG4gICAgICAgICAgd2ViXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHRpdGxlPVwiRGVtbzFcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJFc3RvIGVzIHVuIGRlbW8gaW50ZXJhY3Rpdm8geSB1bmEgcHJ1ZWJhIHBhcmEgZWwgZGlzZcOxbyBkZSBsYSBwYWdpbmFcclxuICAgICAgICAgIHdlYlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVtb3NIb21lO1xyXG4iLCJpbXBvcnQgeyBFc3RpbG9zIH0gZnJvbSAnLi4vc3R5bGVzL0Zvb3Rlcic7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhYiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuXHJcbmxpYnJhcnkuYWRkKGZhYik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEVzdGlsb3MgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+RElHRVZPPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmluY2lwYWxcIj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPk9maWNpbmEgY2VudHJhbCAtIFNhbnRpYWdvIGRlIENoaWxlIDwvZGl2PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY29udGFjdG9cIiBocmVmPVwiaHR0cHM6Ly9kaWdldm8uY29tL2NvbnRhY3RvL1wiPlxyXG4gICAgICAgICAgICBjb250YWN0b0BkaWdldm8uY29tXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5FbXByZXNhIDNHIE1vdGlvbiBTcEEgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN1bmRhcmlvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9zXCI+wqkgQ29weXJpZ2h0IERpZ2V2byAyMDIwIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRlc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvZGlnZXZvL1wiPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25vXCJcclxuICAgICAgICAgICAgICAgIGljb249e1snZmFiJywgJ2xpbmtlZGluJ119XHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMnhcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9EaWdldm9Hcm91cC9cIj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29ub1wiXHJcbiAgICAgICAgICAgICAgICBpY29uPXtbJ2ZhYicsICdmYWNlYm9vayddfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Fc3RpbG9zPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5cclxuaW1wb3J0IHsgRHJvcGRvd24sIEljb24sIE5hdiwgTmF2RHJvcGRvd24sIE5hdmJhciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBFc3RpbG9zIH0gZnJvbSAnLi4vc3R5bGVzL05hdmJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEVzdGlsb3M+XHJcbiAgICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQgY2xhc3NOYW1lPVwibG9nb1wiIGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgICBESUdFVk9cclxuICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cIm9wY2lvblwiIGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0YVwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbW9zXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj5cclxuICAgICAgICAgICAgICAgICAgQmxhemVmYWNlIERlbW8gLSBWaXNpb25cclxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiPlxyXG4gICAgICAgICAgICAgICAgICBCb2R5LXBpeCBEZW1vIC0gVmlzaW9uXHJcbiAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjNcIj5cclxuICAgICAgICAgICAgICAgICAgRmFjZW1lc2ggRGVtbyAtIFZpc2lvblxyXG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiPlxyXG4gICAgICAgICAgICAgICAgICBQb3NlIEVzdGltYXRpb24gLSBDYW1lcmEgZmVlZCBkZW1vXHJcbiAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjVcIj5cclxuICAgICAgICAgICAgICAgICAgUG9zZSBFc3RpbWF0aW9uIC0gSW1hZ2UgZGVtb1xyXG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cIm9wY2lvblwiIGhyZWY9XCJodHRwczovL2RpZ2V2by5jb20vY29udGFjdG8vXCI+XHJcbiAgICAgICAgICAgICAgICBDb250YWN0b1xyXG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIDwvRXN0aWxvcz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5ib3hEaXNwbGF5ID8gJ2ZsZXgnIDogJ2Jsb2NrJyl9O1xyXG4gIGdyaWQtY29sdW1uOiAkeyhwcm9wcykgPT4gKHByb3BzLmJveERpc3BsYXkgPyAnMSAvIC0xJyA6ICd1bnNldCcpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XHJcblxyXG4gIC8qQk9YIEVGRkVDVFMqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCA3cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiA0cHggN3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGJveC1zaGFkb3c6IDRweCA3cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgLypSRVNQT05TSVZFIC0gREVTSUdOKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZ3JpZC1jb2x1bW46IHVuc2V0O1xyXG4gIH1cclxuYDtcclxuLy8gcHJldHRpZXItaWdub3JlXHJcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiAocHJvcHMuYm94RGlzcGxheSA/ICc1MCUnIDogJzEwMCUnKX07XHJcbiAgaW1nIHtcclxuICAgICR7KHByb3BzKSA9PiAocHJvcHMuYm94RGlzcGxheSA/XHJcbiAgICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7IGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsnIDpcclxuICAgICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7IGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4OycpfVxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6dW5zZXQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4OyBcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjVweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiAocHJvcHMuYm94RGlzcGxheSA/ICc1MCUnIDogJzEwMCUnKX07XHJcbiAgbWFyZ2luLWJvdHRvbTogJHsocHJvcHMpID0+IChwcm9wcy5ib3hEaXNwbGF5ID8gJzAlJyA6ICc1JScpfTtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5ib3hEaXNwbGF5ID8gJzJlbScgOiAnMWVtJyl9O1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMuYm94RGlzcGxheSA/ICcxLjJlbScgOiAnMWVtJyl9O1xyXG4gIH1cclxuXHJcbiAgZGl2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkeyhwcm9wcykgPT4gKHByb3BzLmJveERpc3BsYXkgPyAnODAlJyA6ICc3MCUnKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcwJTtcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbjogNSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDUlO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiA0JTtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogNCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gIGdyaWQtdGVtcGxhdGU6IG1pbm1heCgxNjBweCwgMC44ZnIpIG1pbm1heCgxNjBweCwgMWZyKSAvIHJlcGVhdChcclxuICAgICAgMyxcclxuICAgICAgbWlubWF4KDE2MHB4LCAyMGVtKVxyXG4gICAgKTtcclxuICBnYXA6IDEuNWVtO1xyXG4gIHBhZGRpbmc6IDIlIDAlO1xyXG4gIG1pbi13aWR0aDogNTUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlOiB1bnNldDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMWVtO1xyXG4gICAgbWluLXdpZHRoOiAyNjBweDtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVzdGlsb3MgPSBzdHlsZWQuZGl2YFxyXG4gIEBrZXlmcmFtZXMgYW5pbSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgMzMlIHtcclxuICAgICAgY29sb3I6IHJnYigxMywgMjI0LCAxODMpO1xyXG4gICAgfVxyXG4gICAgNjYlIHtcclxuICAgICAgY29sb3I6IHJnYigxMDYsIDI3LCAxNTQpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMzYsIDEwMywgMjE3KTtcclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ28ge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDhzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMi4xZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVnJlbWVuYUdyb3Rlc2tSZWd1bGFyJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLnByaW5jaXBhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogNWVtO1xyXG4gIH1cclxuICAuY29udGFjdG8ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnNlY3VuZGFyaW8ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1ZW07XHJcbiAgfVxyXG4gIC5pbmZvcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLnJlZGVzIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVlbTtcclxuICB9XHJcbiAgLmljb25vIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBFc3RpbG9zID0gc3R5bGVkLmRpdmBcclxuICBAa2V5ZnJhbWVzIGFuaW0ge1xyXG4gICAgMCUge1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIDMzJSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTMsIDIyNCwgMTgzKTtcclxuICAgIH1cclxuICAgIDY2JSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTA2LCAyNywgMTU0KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBjb2xvcjogcmdiKDM2LCAxMDMsIDIxNyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDIuMWVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ1ZyZW1lbmFHcm90ZXNrUmVndWxhcicsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5uYXYge1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XHJcbiAgfVxyXG4gIC5tci1hdXRvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVnJlbWVuYUdyb3Rlc2tSZWd1bGFyJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2NDA7XHJcbiAgfVxyXG4gIC5vcGNpb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAzZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgfVxyXG4gIC5vcGNpb24uYWN0aXZlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgLmxpc3RhIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgcGFkZGluZzogMC44ZW0gM2VtO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgLm1yLWF1dG8ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwZW07XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLm1yLWF1dG8ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI1ZW07XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tci1hdXRvIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMGVtO1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=