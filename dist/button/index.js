"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CyberButton = function CyberButton(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "Cyber-green-button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "data-text": text,
    className: "intoButton"
  }, text));
};

var _default = CyberButton;
exports.default = _default;