webpackHotUpdate("static\\development\\pages\\search.js",{

/***/ "./components/searchbar/SearchBar.js":
/*!*******************************************!*\
  !*** ./components/searchbar/SearchBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Brian\\Documents\\Projects\\GradSite\\gradalogue\\components\\searchbar\\SearchBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const searchBarStyle = {
  padding: 5,
  border: '1px solid #DDD',
  borderRadius: 5,
  outline: 'none',
  width: "100%"
};
class SearchBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.defaultValue
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    await this.setState({
      text: event.target.value
    });
    this.props.onChange(this.state.text);
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      id: this.props.id,
      style: searchBarStyle,
      placeholder: this.props.placeholder,
      onChange: this.handleChange,
      value: this.state.text || '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }

}

/***/ })

})
//# sourceMappingURL=search.js.4c0aa54c559b7d799b2c.hot-update.js.map