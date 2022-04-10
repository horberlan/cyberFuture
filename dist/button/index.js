"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CyberButton = function CyberButton(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "Cyber-green-button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "data-text": text,
    className: "intoButton"
  }, text));
};

var glitchP = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  17% {\n    --scale: 0.87;\n  }\n  31% {\n    --scale: 1.1;\n  }\n  37% {\n    --scale: 1.3;\n  }\n  47% {\n    --scale: 0.91;\n  }\n  87% {\n    --scale: 1;\n  }\n"])));
var glitchA = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  10%, 30%, 50%, 70%, 90% {\n    --top: 0;\n    --left: 0;\n  }\n  0% {\n    --v-height: 15%;\n  }\n  20% {\n    --left: 0.005;\n  }\n  40% {\n    --left: 0.01;\n    --v-height: 20%;\n    --top: 3;\n  }\n  60% {\n    --left: 0.03;\n    --v-height: 25%;\n    --top: 6;\n  }\n  80% {\n    --left: 0.07;\n    --v-height: 5%;\n    --top: 8;\n  }\n  100% {\n    --left: 0.083;\n    --v-height: 30%;\n    --top: 1;\n  }\n"])));
var glitchB = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n 10%, 30%, 50%, 70%, 90% {\n    --top: 0;\n    --left: 0;\n  }\n  0% {\n    --v-height: 15%;\n    --top: 10;\n  }\n  20% {\n    --left: -0.005;\n  }\n  40% {\n    --left: -0.01;\n    --v-height: 17%;\n    --top: 3;\n  }\n  60% {\n    --left: -0.03;\n    --v-height: 35%;\n    --top: 6;\n  }\n  80% {\n    --left: -0.07;\n    --v-height: 5%;\n    --top: 8;\n  }\n  100% {\n    --left: -0.083;\n    --v-height: 30%;\n    --top: 1;\n  }\n"])));
var RoseGradient = 'linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%)';
var CyberSly = 'linear-gradient(106deg, #ffe900 8%, #0043ff 44%, #a200ff 87%)';
var theme = {
  colors: {
    matrix: '#00ff32',
    gold: '#95f11c',
    cyber: '#edda0c',
    rose: '#ff296d',
    punk: '#8e52f5'
  },
  buttons: {
    AutlinedCyberRose: {
      transform: 'skew(-21deg)',
      color: '#ff296d',
      cursor: 'pointer',
      padding: '6px 12px',
      border: '2px solid',
      borderImageSlice: '1',
      borderWidth: '2px',
      borderImageSource: "".concat(RoseGradient)
    },
    AutlinedCyberSly: {
      transform: 'skew(-21deg)',
      color: '#0043FF',
      cursor: 'pointer',
      padding: '6px 12px',
      border: '2px solid',
      borderImageSlice: '1',
      borderWidth: '2px',
      borderImageSource: "".concat(CyberSly)
    },
    Matrix: {
      transform: 'skew(-21deg)',
      cursor: 'pointer',
      padding: '6px 12px',
      border: '2px solid #00ff32',
      color: '#00ff32',
      boxShadow: '0 4px 6px 0 #00ff32'
    },
    Rose: {
      transform: 'skew(-21deg)',
      cursor: 'pointer',
      padding: '6px 12px',
      color: '#ff296d',
      border: '2px solid #ff296d',
      boxShadow: '0 4px 6px 0 #ff296d',
      background: 'transparent'
    },
    Punk: {
      transform: 'skew(-21deg)',
      cursor: 'pointer',
      padding: '6px 12px',
      color: '#8e52f5',
      border: '2px solid #8e52f5',
      boxShadow: '0 4px 6px 0 #8e52f5'
    },
    Gold: {
      transform: 'skew(-21deg)',
      cursor: 'pointer',
      padding: '6px 12px',
      color: '#95f11c',
      border: '2px solid #95f11c',
      boxShadow: '0 4px 6px 0 #95f11c'
    }
  },
  bg: {
    type: {
      background: 'red'
    }
  }
};

var BeforeButton = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border: 0;\n    outline: 0;\n    transition:.4s;\n    \n    &:active{\n    position:relative;\n    top:5px;\n    box-shadow:none;\n  }\n    ", "\n    ", "\n    ", "\n    ", "\n  "])), _styledSystem.color, _styledSystem.space, _styledSystem.fontSize, _styledSystem.buttonStyle);

var Span = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  transform: skew(0deg);\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  "])));

BeforeButton.defaultProps = {
  variant: 'primary',
  backgroundColor: 'transparent',
  type: 'autlined'
};

var Button = function Button(_ref2) {
  var text = _ref2.text,
      variant = _ref2.variant,
      color = _ref2.color;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(BeforeButton, {
    type: "type",
    color: color,
    variant: variant
  }, /*#__PURE__*/_react.default.createElement(Span, null, text)));
};

exports.Button = Button;
var _default = CyberButton;
exports.default = _default;