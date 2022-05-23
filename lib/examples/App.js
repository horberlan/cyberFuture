"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lib = require("../lib");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Flex = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 5%;\n  position: relative;\n  margin: 0px auto;\n"])));

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Flex, null, /*#__PURE__*/_react["default"].createElement(_lib.Button, {
    outline: true,
    text: "CyberFuture",
    variant: "Matrix",
    color: "matrix"
  }), /*#__PURE__*/_react["default"].createElement(_lib.Button, {
    text: "Getelementbyid",
    variant: "OutlinedCyberRose",
    type: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_lib.Button, {
    text: "Lane Art Design",
    variant: "Rose"
  }), /*#__PURE__*/_react["default"].createElement(_lib.Button, {
    text: "Button",
    variant: "Punk"
  }), /*#__PURE__*/_react["default"].createElement(_lib.Button, {
    text: "Button",
    variant: "Gold"
  }), /*#__PURE__*/_react["default"].createElement(_lib.Button, {
    text: "Button",
    variant: "OutlinedCyberSly"
  })), /*#__PURE__*/_react["default"].createElement(Flex, null, /*#__PURE__*/_react["default"].createElement(_lib.Card, {
    variant: "matrix",
    title: "Card Title",
    body: "some content",
    end: /*#__PURE__*/_react["default"].createElement(_lib.Button, {
      text: "button",
      variant: "Matrix"
    })
  }), /*#__PURE__*/_react["default"].createElement(_lib.CardCarousel, {
    variant: "rose",
    title: "Card Title",
    body: "some content",
    end: /*#__PURE__*/_react["default"].createElement(_lib.Button, {
      text: "button",
      variant: "Rose"
    })
  }), /*#__PURE__*/_react["default"].createElement(_lib.Card, {
    variant: "rose",
    title: "Card Title",
    body: "some content",
    end: /*#__PURE__*/_react["default"].createElement(_lib.Button, {
      text: "button",
      variant: "Rose"
    })
  }), /*#__PURE__*/_react["default"].createElement(_lib.Card, {
    variant: "rose",
    title: "Card Title",
    body: "some content",
    end: /*#__PURE__*/_react["default"].createElement(_lib.Button, {
      text: "button",
      variant: "Rose"
    })
  }), /*#__PURE__*/_react["default"].createElement(_lib.Card, {
    variant: "matrix",
    title: "Card Title",
    body: /*#__PURE__*/_react["default"].createElement("div", null, "content"),
    end: /*#__PURE__*/_react["default"].createElement(_lib.Button, {
      text: "button",
      variant: "Matrix"
    })
  })));
};

var _default = App;
exports["default"] = _default;