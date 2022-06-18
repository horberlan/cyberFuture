"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var CyberButton = function CyberButton(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/ _react.default.createElement(
    "button",
    {
      className: "Cyber-green-button",
    },
    /*#__PURE__*/ _react.default.createElement(
      "span",
      {
        "data-text": text,
        className: "intoButton",
      },
      text
    )
  );
};

var noise2 = (0, _styledComponents.keyframes)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      "\n  0% {\n\t\t clip-path: inset(38% 0 58% 0);\n\t}\n\t 5% {\n\t\t clip-path: inset(29% 0 27% 0);\n\t}\n\t 10% {\n\t\t clip-path: inset(56% 0 21% 0);\n\t}\n\t 15% {\n\t\t clip-path: inset(37% 0 19% 0);\n\t}\n\t 20% {\n\t\t clip-path: inset(14% 0 30% 0);\n\t}\n\t 25% {\n\t\t clip-path: inset(83% 0 18% 0);\n\t}\n\t 30% {\n\t\t clip-path: inset(31% 0 66% 0);\n\t}\n\t 35% {\n\t\t clip-path: inset(91% 0 5% 0);\n\t}\n\t 40% {\n\t\t clip-path: inset(96% 0 2% 0);\n\t}\n\t 45% {\n\t\t clip-path: inset(77% 0 5% 0);\n\t}\n\t 50% {\n\t\t clip-path: inset(1% 0 67% 0);\n\t}\n\t 55% {\n\t\t clip-path: inset(74% 0 7% 0);\n\t}\n\t 60% {\n\t\t clip-path: inset(57% 0 27% 0);\n\t}\n\t 65% {\n\t\t clip-path: inset(51% 0 29% 0);\n\t}\n\t 70% {\n\t\t clip-path: inset(1% 0 60% 0);\n\t}\n\t 75% {\n\t\t clip-path: inset(39% 0 35% 0);\n\t}\n\t 80% {\n\t\t clip-path: inset(53% 0 6% 0);\n\t}\n\t 85% {\n\t\t clip-path: inset(63% 0 17% 0);\n\t}\n\t 90% {\n\t\t clip-path: inset(19% 0 1% 0);\n\t}\n\t 95% {\n\t\t clip-path: inset(21% 0 10% 0);\n\t}\n\t 100% {\n\t\t clip-path: inset(21% 0 58% 0);\n\t}\n",
    ]))
);
var noise1 = (0, _styledComponents.keyframes)(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteral([
      "\n  0% {\n\t\t clip-path: inset(6% 0 42% 0);\n\t}\n\t 5% {\n\t\t clip-path: inset(59% 0 29% 0);\n\t}\n\t 10% {\n\t\t clip-path: inset(93% 0 4% 0);\n\t}\n\t 15% {\n\t\t clip-path: inset(100% 0 1% 0);\n\t}\n\t 20% {\n\t\t clip-path: inset(85% 0 15% 0);\n\t}\n\t 25% {\n\t\t clip-path: inset(50% 0 18% 0);\n\t}\n\t 30% {\n\t\t clip-path: inset(67% 0 16% 0);\n\t}\n\t 35% {\n\t\t clip-path: inset(43% 0 48% 0);\n\t}\n\t 40% {\n\t\t clip-path: inset(37% 0 9% 0);\n\t}\n\t 45% {\n\t\t clip-path: inset(91% 0 7% 0);\n\t}\n\t 50% {\n\t\t clip-path: inset(2% 0 72% 0);\n\t}\n\t 55% {\n\t\t clip-path: inset(17% 0 17% 0);\n\t}\n\t 60% {\n\t\t clip-path: inset(13% 0 85% 0);\n\t}\n\t 65% {\n\t\t clip-path: inset(18% 0 38% 0);\n\t}\n\t 70% {\n\t\t clip-path: inset(12% 0 88% 0);\n\t}\n\t 75% {\n\t\t clip-path: inset(42% 0 31% 0);\n\t}\n\t 80% {\n\t\t clip-path: inset(95% 0 2% 0);\n\t}\n\t 85% {\n\t\t clip-path: inset(59% 0 8% 0);\n\t}\n\t 90% {\n\t\t clip-path: inset(24% 0 44% 0);\n\t}\n\t 95% {\n\t\t clip-path: inset(57% 0 5% 0);\n\t}\n\t 100% {\n\t\t clip-path: inset(93% 0 3% 0);\n\t}\n",
    ]))
);
var RoseGradient =
  "linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%)";
var CyberSky = "linear-gradient(106deg, #ffe900 8%, #0043ff 44%, #a200ff 87%)";
var theme = {
  colors: {
    matrix: "#00ff32",
    gold: "#95f11c",
    cyber: "#edda0c",
    rose: "#ff296d",
    punk: "#8e52f5",
  },
  textStyles: {
    outlined: {
      transform: "skew(-21deg)",
    },
  },
  buttons: {
    OutlinedCyberRose: {
      transform: "skew(-21deg)",
      color: "#ff296d",
      cursor: "pointer",
      padding: "6px 12px",
      border: "2px solid",
      borderImageSlice: "1",
      borderWidth: "2px",
      borderImageSource: "".concat(RoseGradient),
    },
    OutlinedCyberSky: {
      transform: "skew(-21deg)",
      color: "#0043FF",
      cursor: "pointer",
      padding: "6px 12px",
      border: "2px solid",
      borderImageSlice: "1",
      borderWidth: "2px",
      borderImageSource: "".concat(CyberSky),
    },
    Matrix: {
      transform: "skew(-21deg)",
      cursor: "pointer",
      padding: "6px 12px",
      border: "2px solid #00ff32",
      color: "#00ff32",
      boxShadow: "0 4px 6px 0 #00ff32",
    },
    Rose: {
      transform: "skew(-31deg)",
      cursor: "pointer",
      padding: "6px 12px",
      color: "#ff296d",
      border: "2px solid #ff296d",
      boxShadow: "0 4px 6px 0 #ff296d",
    },
    Punk: {
      transform: "skew(-21deg)",
      cursor: "pointer",
      padding: "6px 12px",
      color: "#8e52f5",
      border: "2px solid #8e52f5",
      boxShadow: "0 4px 6px 0 #8e52f5",
    },
    Gold: {
      transform: "skew(-21deg)",
      cursor: "pointer",
      padding: "6px 12px",
      color: "#95f11c",
      border: "2px solid #95f11c",
      boxShadow: "0 4px 6px 0 #95f11c",
    },
  },
  bg: {
    type: {
      background: "red",
    },
  },
};

var BeforeButton = _styledComponents.default.button(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteral([
      "\n    border: 0;\n    outline: 0;\n    transition:.4s;\n    margin: 0px;\n    \n    &:active{\n    position:relative;\n    top:5px;\n    box-shadow:none;\n  }\n    ",
      "\n    ",
      "\n    ",
      "\n    ",
      "\n  ",
    ])),
  _styledSystem.color,
  _styledSystem.space,
  _styledSystem.fontSize,
  _styledSystem.buttonStyle
);

var Span = _styledComponents.default.span(
  _templateObject4 ||
    (_templateObject4 = _taggedTemplateLiteral([
      "\n  user-select: none;\n  \n  text-transform: uppercase;\n  \n  font-family: 'Nunito Sans', sans-serif;\n  \n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  transition:1s;\n  letter-spacing: .3em;\n  transform: skewX(20deg) !important;\n:hover::after {\n\t content: attr(data-text);\n\t transform: skewX(20deg) !important;\n\t position: absolute;\n\t left: 10px;\n\t text-shadow: -1px 0 red;\n\t top: 0;\n\t color: white;\n\t background: rgba(0,0,0,0.5);\n\t overflow: hidden;\n\t animation: ",
      " 2s infinite linear alternate-reverse;\n}\n \n :hover::before {\n\t content: attr(data-text);\n\t position: absolute;\n\t left: 10px;\n\t text-shadow:3px 0 red;\n\t top: 5px;\n\t color: white;\n\t background: rgba(0,0,0,0.5);\n\t overflow: hidden;\n\t animation: ",
      " 15s infinite linear alternate-reverse;\n}\n  ",
    ])),
  noise1,
  noise2
);

BeforeButton.defaultProps = {
  variant: "primary",
  backgroundColor: "transparent",
  type: "Outlined",
};

var Button = function Button(_ref2) {
  var text = _ref2.text,
    variant = _ref2.variant,
    color = _ref2.color,
    type = _ref2.type;
  return /*#__PURE__*/ _react.default.createElement(
    _styledComponents.ThemeProvider,
    {
      theme: theme,
    },
    /*#__PURE__*/ _react.default.createElement(
      BeforeButton,
      {
        color: color,
        variant: variant,
      },
      /*#__PURE__*/ _react.default.createElement(
        Span,
        {
          "data-text": text,
        },
        text
      )
    )
  );
};

exports.Button = Button;
var _default = CyberButton;
exports.default = _default;
