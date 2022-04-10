"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var card = {
  buttons: {
    AutlinedCyberRose: {
      width: '214px',
      height: '319px',
      margin: "35.9px 25px 25.9px 31px",
      // mixBlendMode: 'multiply',
      border: 'solid 4px #ff296d',
      // backgroundBlendMode: 'multiply',
      backgroundImage: 'linear-gradient(to bottom, #a200ff, #a200ff)'
    }
  }
};

var BeforeCard = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nposition:relative;\n      border: 0;\n      outline: 0;\n      overflow:hidden;\n      \n      :after {\n        content: '';\n        position:absolute;\n        top:80%;\n        right:-20%;\n        width:40%;\n        height:40%;\n        transform:rotate(45deg);\n        background:transparent;\n        border:solid 4px #ff296d;\n        background: transparent;\n        z-index: 0;\n\n\n    }\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), _styledSystem.color, _styledSystem.space, _styledSystem.fontSize, _styledSystem.buttonStyle);

BeforeCard.defaultProps = {
  variant: 'primary',
  backgroundColor: 'transparent',
  type: 'autlined'
};

var Card = function Card(_ref) {
  var text = _ref.text,
      variant = _ref.variant;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: card
  }, /*#__PURE__*/_react.default.createElement(BeforeCard, {
    variant: "AutlinedCyberRose"
  }));
};

exports.Card = Card;