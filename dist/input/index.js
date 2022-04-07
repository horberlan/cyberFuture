"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CyberInput = function CyberInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      label = _ref.label,
      value = _ref.value;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "simple-form-group"
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    className: "simple-text-label"
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    className: "simple-text-input",
    value: value
  }));
};

var _default = CyberInput;
exports.default = _default;