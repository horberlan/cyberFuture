"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lib = require("../lib");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Flex = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 5%;\n  position: relative;\n  margin: 0px auto;\n"])));
var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Flex, null, buttons.map(function (_ref, index) {
    var props = _ref.props;
    return /*#__PURE__*/_react.default.createElement(_lib.Button, _extends({
      key: index
    }, props));
  })), /*#__PURE__*/_react.default.createElement(Flex, null, cards.map(function (_ref2, index) {
    var Component = _ref2.Component,
      props = _ref2.props;
    return /*#__PURE__*/_react.default.createElement(Component, _extends({
      key: index
    }, props));
  })));
};
var _default = App;
exports.default = _default;
var buttons = [{
  props: {
    text: "CyberFuture",
    variant: "Matrix",
    color: "matrix",
    outline: true
  }
}, {
  props: {
    text: "CyberFuture",
    variant: "Rose"
  }
}, {
  props: {
    text: "CyberFuture",
    variant: "Punk"
  }
}, {
  props: {
    text: "CyberFuture",
    variant: "Gold"
  }
}, {
  props: {
    text: "CyberFuture",
    variant: "OutlinedCyberSky"
  }
}];
var cards = [{
  Component: _lib.Card,
  props: {
    variant: "Matrix",
    title: "Matrix Title",
    body: "some content",
    background: "#8B0000"
  }
}, {
  Component: _lib.CardCarousel,
  props: {
    variant: "Rose",
    title: "Rose Title",
    body: "some content"
  }
}, {
  Component: _lib.Card,
  props: {
    variant: "Matrix",
    title: "Matrix Title",
    body: "some content",
    background: "orange"
  }
}, {
  Component: _lib.Card,
  props: {
    variant: "Matrix",
    title: "Matrix Title",
    body: "some content"
  }
}];