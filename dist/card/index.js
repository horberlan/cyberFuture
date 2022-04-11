"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BeforeCard = (0, _styledComponents.default)('div')({
  position: 'relative',
  width: '20em',
  height: '30em',
  padding: 'calc(1.5% - 1vmin) calc(1% - 1vmin)',
  margin: '20px auto',
  boxSizing: 'border-box',
  clipPath: 'polygon(50% 0%, 100% 0, 100% 81%, 79% 100%, 0 100%, 0% 60%, 0 0)',
  backdropFilter: 'blur(6px) saturate(180%)',
  backgroundColor: 'rgba(17, 25, 40, 0.75)',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '20%',
    height: '20%',
    background: 'white',
    transform: 'skew(-36.5deg)',
    top: '81%',
    right: '-9%',
    zIndex: '4'
  }
}, (0, _styledSystem.variant)({
  variants: {
    rose: {
      color: 'white',
      border: '4px solid #ff296d',
      '&:before': {
        background: '#ff296d'
      }
    },
    matrix: {
      color: 'white',
      border: '4px solid #00ff32',
      '&:before': {
        background: '#00ff32'
      }
    }
  }
}));

var CardtTitle = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ndisplay:flex;\nword-break: break-all;\noverflow: hidden;\nflex-direction:column;\nalign-items:center;\nwidth:100%;\nheight: 40%;\nbox-sizing: border-box;\npadding:1% 2%;\nletter-spacing:.2em;\nfont-weight: bold;\n"])));

var CardtBody = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position:relative;\n    word-break: break-all;\n    overflow: hidden;\n    top:10%;\n    width:100%;\n    height: 30%;\n    display:flex;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: minmax(130px, auto);\n    gap: 2%;\n    overflow-x: scroll;\n    scroll-snap-type: x mandatory;\n    scroll-padding: 0 1rem;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.5rem;\n    background-color: rgba(0, 0, 0, 0.1);\n    border-radius: 0.25rem;\n&:active {\n    cursor: grabbing;\n  }\n&::-webkit-scrollbar {\n    display: none;\n  }\n> *{\n    scroll-snap-align: start;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    position:relative;\n    background:linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%);\n    width:100px;\n    height:80%;\n    border-radius: 0.25rem;\n    padding: 0.5rem;\n    user-select:none;\n}\n"])));

var CardtFooter = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\nposition:relative;\ntop:10%;\ndisplay:flex;\nflex-direction:column;\nalign-items:center;\nwidth:70%;\nheight: 10%;\nbox-sizing: border-box;\npadding:2% 4%;\nmargin: auto auto;\n"])));

var Card = function Card(_ref) {
  var title = _ref.title,
      End = _ref.End,
      CardBody = _ref.CardBody,
      variant = _ref.variant;
  return /*#__PURE__*/_react.default.createElement(BeforeCard, {
    variant: variant
  }, /*#__PURE__*/_react.default.createElement(CardtTitle, null, title), /*#__PURE__*/_react.default.createElement(CardtBody, null, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null)), /*#__PURE__*/_react.default.createElement(CardtFooter, null, End));
};

exports.Card = Card;