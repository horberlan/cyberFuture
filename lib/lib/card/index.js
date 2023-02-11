"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardCarousel = exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledSystem = require("styled-system");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BeforeCard = (0, _styledComponents.default)("div")({
  position: "relative",
  width: "calc(350px - 2vmin)",
  height: "30em",
  padding: "calc(1.5% - 1vmin) calc(1% - 1vmin)",
  margin: "20px auto",
  boxSizing: "border-box",
  clipPath: "polygon(20% 0%, 100% 0, 100% 20%, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0 0);",
  backdropFilter: "blur(6px) saturate(180%)",
  // background: `url(${Dots}) no-repeat center`,
  backgroundSize: "cover",
  "&:before": {
    content: '""',
    position: "absolute",
    width: "6px",
    height: "36%",
    background: "white",
    transform: "skew(-35deg)",
    bottom: "-1px",
    right: "0",
    zIndex: "4"
  }
}, (0, _styledSystem.variant)({
  variants: {
    Matrix: {
      color: "white",
      border: "4px solid #00ff32",
      "&:before": {
        background: "#00ff32"
      }
    },
    Rose: {
      color: "white",
      border: "4px solid #ff296d",
      "&:before": {
        background: "#ff296d"
      }
    },
    Punk: {
      color: "white",
      border: "4px solid #8e52f5",
      "&:before": {
        background: "#8e52f5"
      }
    },
    Gold: {
      color: "white",
      border: "4px solid #95f11c",
      "&:before": {
        background: "#95f11c"
      }
    }
  }
}));
var CardtTitle = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  word-break: break-all;\n  overflow: hidden;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 40%;\n  box-sizing: border-box;\n  padding: 1% 2%;\n  letter-spacing: 0.2em;\n  font-weight: bold;\n"])));
var CardtBody = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  word-break: break-all;\n  overflow: hidden;\n  top: 10%;\n  width: 100%;\n  height: 30%;\n  display: flex;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: minmax(130px, auto);\n  gap: 2%;\n  overflow-x: scroll;\n  scroll-snap-type: x mandatory;\n  scroll-padding: 0 1rem;\n  -webkit-overflow-scrolling: touch;\n  padding: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n\n  &:active {\n    cursor: grabbing;\n  }\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  > * {\n    scroll-snap-align: start;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    background: linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%);\n    background: #8e52f5;\n    width: 100px;\n    height: 80%;\n    border-radius: 0.25rem;\n    padding: 0.5rem;\n    user-select: none;\n  }\n"])));
var CardtFooter = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  top: 10%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 70%;\n  height: 10%;\n  box-sizing: border-box;\n  padding: 2% 4%;\n  margin: auto auto;\n"])));
var Card = function Card(_ref) {
  var title = _ref.title,
    body = _ref.body,
    end = _ref.end,
    CardBody = _ref.CardBody,
    variant = _ref.variant,
    background = _ref.background;
  return /*#__PURE__*/_react.default.createElement(BeforeCard, {
    variant: variant,
    style: {
      background: background === undefined ? "rgba(17, 25, 40, 0.75)" : background
    }
  }, /*#__PURE__*/_react.default.createElement(CardtTitle, null, title), /*#__PURE__*/_react.default.createElement(CardtBody, null, body), /*#__PURE__*/_react.default.createElement(CardtFooter, null, end));
};
exports.Card = Card;
var CardCarousel = function CardCarousel(_ref2) {
  var title = _ref2.title,
    body = _ref2.body,
    end = _ref2.end,
    CardBody = _ref2.CardBody,
    variant = _ref2.variant,
    background = _ref2.background;
  return /*#__PURE__*/_react.default.createElement(BeforeCard, {
    variant: variant,
    style: {
      background: background === undefined ? "rgba(17, 25, 40, 0.75)" : background
    }
  }, /*#__PURE__*/_react.default.createElement(CardtTitle, null, title), /*#__PURE__*/_react.default.createElement(CardtBody, null, /*#__PURE__*/_react.default.createElement("div", null, "content"), /*#__PURE__*/_react.default.createElement("div", null, "content"), /*#__PURE__*/_react.default.createElement("div", null, "content"), /*#__PURE__*/_react.default.createElement("div", null, "content"), /*#__PURE__*/_react.default.createElement("div", null, "content"), /*#__PURE__*/_react.default.createElement("div", null, "content")), /*#__PURE__*/_react.default.createElement(CardtFooter, null, end));
};
exports.CardCarousel = CardCarousel;