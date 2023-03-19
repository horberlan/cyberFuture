
  /**
   * @license
   * author: koji kanao
   * cyberfuture.js v0.1.4-9-beta
   * Released under the MIT license.
   */

'use strict';

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');

const BeforeCard = styled("div")({
    position: "relative",
    padding: "calc(1.5% - 1vmin) calc(1% - 1vmin)",
    margin: "20px auto",
    boxSizing: "border-box",
    clipPath: "polygon(20% 0%, 100% 0, 100% 20%, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0 0);",
    backdropFilter: "blur(6px) saturate(180%)",
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
        zIndex: "4",
    },
}, styledSystem.variant({
    variants: {
        Matrix: {
            color: "white",
            border: "4px solid #00ff32",
            "&:before": {
                background: "#00ff32",
            },
        },
        Rose: {
            color: "white",
            border: "4px solid #ff296d",
            "&:before": {
                background: "#ff296d",
            },
        },
        Punk: {
            color: "white",
            border: "4px solid #8e52f5",
            "&:before": {
                background: "#8e52f5",
            },
        },
        Gold: {
            color: "white",
            border: "4px solid #95f11c",
            "&:before": {
                background: "#95f11c",
            },
        },
    },
}));
const CardtTitle = styled.div `
  display: flex;
  word-break: break-all;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
  box-sizing: border-box;
  padding: 1% 2%;
  letter-spacing: 0.2em;
  font-weight: bold;
`;
const CardtBody = styled.div `
  position: relative;
  word-break: break-all;
  overflow: hidden;
  top: 10%;
  width: 100%;
  height: 30%;
  display: flex;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(130px, auto);
  gap: 2%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 1rem;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;

  &:active {
    cursor: grabbing;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  > * {
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%);
    background: #8e52f5;
    width: 100px;
    height: 80%;
    border-radius: 0.25rem;
    padding: 0.5rem;
    user-select: none;
  }
`;
const CardtFooter = styled.div `
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 10%;
  box-sizing: border-box;
  padding: 2% 4%;
  margin: auto auto;
`;
const Card = ({ title, body, end, CardBody, background, width = "calc(350px - 2vmin)", height = "30em", }) => {
    return (React.createElement(BeforeCard, { style: {
            background: background === undefined ? "rgba(17, 25, 40, 0.75)" : background,
            width: width,
            height: height,
        } },
        React.createElement(CardtTitle, null, title),
        React.createElement(CardtBody, null, body),
        React.createElement(CardtFooter, null, end)));
};
const CardCarousel = ({ title, body, end, CardBody, variant, background, width = "calc(350px - 2vmin)", height = "30em", }) => {
    return (React.createElement(BeforeCard, { style: {
            background: background === undefined ? "rgba(17, 25, 40, 0.75)" : background,
            width: width,
            height: height,
        } },
        React.createElement(CardtTitle, null, title),
        React.createElement(CardtBody, null, CardBody),
        React.createElement(CardtFooter, null, end)));
};

const noise2 = styled.keyframes `
  0% {
		 clip-path: inset(38% 0 58% 0);
	}
	 5% {
		 clip-path: inset(29% 0 27% 0);
	}
	 10% {
		 clip-path: inset(56% 0 21% 0);
	}
	 15% {
		 clip-path: inset(37% 0 19% 0);
	}
	 20% {
		 clip-path: inset(14% 0 30% 0);
	}
	 25% {
		 clip-path: inset(83% 0 18% 0);
	}
	 30% {
		 clip-path: inset(31% 0 66% 0);
	}
	 35% {
		 clip-path: inset(91% 0 5% 0);
	}
	 40% {
		 clip-path: inset(96% 0 2% 0);
	}
	 45% {
		 clip-path: inset(77% 0 5% 0);
	}
	 50% {
		 clip-path: inset(1% 0 67% 0);
	}
	 55% {
		 clip-path: inset(74% 0 7% 0);
	}
	 60% {
		 clip-path: inset(57% 0 27% 0);
	}
	 65% {
		 clip-path: inset(51% 0 29% 0);
	}
	 70% {
		 clip-path: inset(1% 0 60% 0);
	}
	 75% {
		 clip-path: inset(39% 0 35% 0);
	}
	 80% {
		 clip-path: inset(53% 0 6% 0);
	}
	 85% {
		 clip-path: inset(63% 0 17% 0);
	}
	 90% {
		 clip-path: inset(19% 0 1% 0);
	}
	 95% {
		 clip-path: inset(21% 0 10% 0);
	}
	 100% {
		 clip-path: inset(21% 0 58% 0);
	}
`;
const noise1 = styled.keyframes `
  0% {
		 clip-path: inset(6% 0 42% 0);
	}
	 5% {
		 clip-path: inset(59% 0 29% 0);
	}
	 10% {
		 clip-path: inset(93% 0 4% 0);
	}
	 15% {
		 clip-path: inset(100% 0 1% 0);
	}
	 20% {
		 clip-path: inset(85% 0 15% 0);
	}
	 25% {
		 clip-path: inset(50% 0 18% 0);
	}
	 30% {
		 clip-path: inset(67% 0 16% 0);
	}
	 35% {
		 clip-path: inset(43% 0 48% 0);
	}
	 40% {
		 clip-path: inset(37% 0 9% 0);
	}
	 45% {
		 clip-path: inset(91% 0 7% 0);
	}
	 50% {
		 clip-path: inset(2% 0 72% 0);
	}
	 55% {
		 clip-path: inset(17% 0 17% 0);
	}
	 60% {
		 clip-path: inset(13% 0 85% 0);
	}
	 65% {
		 clip-path: inset(18% 0 38% 0);
	}
	 70% {
		 clip-path: inset(12% 0 88% 0);
	}
	 75% {
		 clip-path: inset(42% 0 31% 0);
	}
	 80% {
		 clip-path: inset(95% 0 2% 0);
	}
	 85% {
		 clip-path: inset(59% 0 8% 0);
	}
	 90% {
		 clip-path: inset(24% 0 44% 0);
	}
	 95% {
		 clip-path: inset(57% 0 5% 0);
	}
	 100% {
		 clip-path: inset(93% 0 3% 0);
	}
`;
const RoseGradient = "linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%)";
const CyberSky = "linear-gradient(106deg, #ffe900 8%, #0043ff 44%, #a200ff 87%)";
const theme = {
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
            borderImageSource: `${RoseGradient}`,
        },
        OutlinedCyberSky: {
            transform: "skew(-21deg)",
            color: "#0043FF",
            cursor: "pointer",
            padding: "6px 12px",
            border: "2px solid",
            borderImageSlice: "1",
            borderWidth: "2px",
            borderImageSource: `${CyberSky}`,
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
        type: { background: "red" },
    },
};
const BeforeButton = styled.button `
  border: 0;
  outline: 0;
  transition: 0.4s;
  margin: 5px;

  &:active {
    position: relative;
    top: 5px;
    box-shadow: none;
  }
  ${styledSystem.color}
  ${styledSystem.space}
  ${styledSystem.fontSize}
  ${styledSystem.buttonStyle}
`;
const Span = styled.span `
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  transition: 1s;
  letter-spacing: 0.3em;
  transform: skewX(20deg) !important;
  :hover::after {
    content: attr(data-text);
    transform: skewX(20deg) !important;
    position: absolute;
    left: 10px;
    text-shadow: -1px 0 red;
    top: 0;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: ${noise1} 2s infinite linear alternate-reverse;
  }

  :hover::before {
    content: attr(data-text);
    position: absolute;
    left: 10px;
    text-shadow: 3px 0 red;
    top: 5px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: ${noise2} 15s infinite linear alternate-reverse;
  }
}`;
BeforeButton.defaultProps = {
    variant: "primary",
};
const Button = ({ text, variant, color }) => {
    return (React.createElement(styled.ThemeProvider, { theme: theme },
        React.createElement(BeforeButton, { color: color, variant: variant },
            React.createElement(Span, { "data-text": text }, text))));
};

const CyberInput = ({ type = "text", label, value }) => (React.createElement("div", { className: "simple-form-group" },
    label && React.createElement("label", { className: "simple-text-label" }, label),
    React.createElement("input", { type: type, className: "simple-text-input", value: value })));

// export { CyberInput, CyberButton, Card, CardCarousel };
var index = {
    CyberInput, CyberButton: Button, Card, CardCarousel
};

module.exports = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvY2FyZC9pbmRleC50c3giLCIuLi9zcmMvYnV0dG9uL2luZGV4LnRzeCIsIi4uL3NyYy9pbnB1dC9pbmRleC50c3giLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZFByb3BzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdmFyaWFudCB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5pbnRlcmZhY2UgQ2FyZENhcm91c2VsUHJvcHMgZXh0ZW5kcyBDYXJkUHJvcHMsIE9iamVjdCB7fVxuXG5jb25zdCBCZWZvcmVDYXJkID0gc3R5bGVkKFwiZGl2XCIpKFxuICB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBwYWRkaW5nOiBcImNhbGMoMS41JSAtIDF2bWluKSBjYWxjKDElIC0gMXZtaW4pXCIsXG4gICAgbWFyZ2luOiBcIjIwcHggYXV0b1wiLFxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgY2xpcFBhdGg6XG4gICAgICBcInBvbHlnb24oMjAlIDAlLCAxMDAlIDAsIDEwMCUgMjAlLCAxMDAlIDgwJSwgODAlIDEwMCUsIDAgMTAwJSwgMCUgODAlLCAwIDApO1wiLFxuICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoNnB4KSBzYXR1cmF0ZSgxODAlKVwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cbiAgICBcIiY6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB3aWR0aDogXCI2cHhcIixcbiAgICAgIGhlaWdodDogXCIzNiVcIixcbiAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgIHRyYW5zZm9ybTogXCJza2V3KC0zNWRlZylcIixcbiAgICAgIGJvdHRvbTogXCItMXB4XCIsXG4gICAgICByaWdodDogXCIwXCIsXG4gICAgICB6SW5kZXg6IFwiNFwiLFxuICAgIH0sXG4gIH0sXG4gIHZhcmlhbnQoe1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICBNYXRyaXg6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjMDBmZjMyXCIsXG4gICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzAwZmYzMlwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFJvc2U6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjZmYyOTZkXCIsXG4gICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmMjk2ZFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFB1bms6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjOGU1MmY1XCIsXG4gICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzhlNTJmNVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIEdvbGQ6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjOTVmMTFjXCIsXG4gICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzk1ZjExY1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgQ2FyZHRUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxJSAyJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmNvbnN0IENhcmR0Qm9keSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KDEzMHB4LCBhdXRvKTtcbiAgZ2FwOiAyJTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgc2Nyb2xsLXBhZGRpbmc6IDAgMXJlbTtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcblxuICAmOmFjdGl2ZSB7XG4gICAgY3Vyc29yOiBncmFiYmluZztcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICA+ICoge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMDZkZWcsICMwMGY2ZmYgOCUsICNmZmVjMDAgNTAlLCAjZmYwMGVjIDg3JSk7XG4gICAgYmFja2dyb3VuZDogIzhlNTJmNTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IENhcmR0Rm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIlIDQlO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkOiBSZWFjdC5GQzxDYXJkUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGJvZHksXG4gIGVuZCxcbiAgQ2FyZEJvZHksXG4gIGJhY2tncm91bmQsXG4gIHdpZHRoID0gXCJjYWxjKDM1MHB4IC0gMnZtaW4pXCIsXG4gIGhlaWdodCA9IFwiMzBlbVwiLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCZWZvcmVDYXJkXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIGJhY2tncm91bmQgPT09IHVuZGVmaW5lZCA/IFwicmdiYSgxNywgMjUsIDQwLCAwLjc1KVwiIDogYmFja2dyb3VuZCxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIH19PlxuICAgICAgPENhcmR0VGl0bGU+e3RpdGxlfTwvQ2FyZHRUaXRsZT5cbiAgICAgIDxDYXJkdEJvZHk+e2JvZHl9PC9DYXJkdEJvZHk+XG4gICAgICA8Q2FyZHRGb290ZXI+e2VuZH08L0NhcmR0Rm9vdGVyPlxuICAgIDwvQmVmb3JlQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJkQ2Fyb3VzZWw6IFJlYWN0LkZDPENhcmRDYXJvdXNlbFByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBib2R5LFxuICBlbmQsXG4gIENhcmRCb2R5LFxuICB2YXJpYW50LFxuICBiYWNrZ3JvdW5kLFxuICB3aWR0aCA9IFwiY2FsYygzNTBweCAtIDJ2bWluKVwiLFxuICBoZWlnaHQgPSBcIjMwZW1cIixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmVmb3JlQ2FyZFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICBiYWNrZ3JvdW5kID09PSB1bmRlZmluZWQgPyBcInJnYmEoMTcsIDI1LCA0MCwgMC43NSlcIiA6IGJhY2tncm91bmQsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB9fT5cbiAgICAgIDxDYXJkdFRpdGxlPnt0aXRsZX08L0NhcmR0VGl0bGU+XG4gICAgICA8Q2FyZHRCb2R5PlxuICAgICAgeyBDYXJkQm9keSB9XG4gICAgICA8L0NhcmR0Qm9keT5cbiAgICAgIDxDYXJkdEZvb3Rlcj57ZW5kfTwvQ2FyZHRGb290ZXI+XG4gICAgPC9CZWZvcmVDYXJkPlxuICApO1xufTtcbiIsImltcG9ydCB7IEJ1dHRvblByb3BzLCBUaGVtZVByb3BzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBidXR0b25TdHlsZSwgY29sb3IsIGZvbnRTaXplLCBzcGFjZSB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIsIGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IG5vaXNlMiA9IGtleWZyYW1lc2BcbiAgMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDM4JSAwIDU4JSAwKTtcblx0fVxuXHQgNSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDI5JSAwIDI3JSAwKTtcblx0fVxuXHQgMTAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg1NiUgMCAyMSUgMCk7XG5cdH1cblx0IDE1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMzclIDAgMTklIDApO1xuXHR9XG5cdCAyMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDE0JSAwIDMwJSAwKTtcblx0fVxuXHQgMjUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg4MyUgMCAxOCUgMCk7XG5cdH1cblx0IDMwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMzElIDAgNjYlIDApO1xuXHR9XG5cdCAzNSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDkxJSAwIDUlIDApO1xuXHR9XG5cdCA0MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDk2JSAwIDIlIDApO1xuXHR9XG5cdCA0NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDc3JSAwIDUlIDApO1xuXHR9XG5cdCA1MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDElIDAgNjclIDApO1xuXHR9XG5cdCA1NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDc0JSAwIDclIDApO1xuXHR9XG5cdCA2MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDU3JSAwIDI3JSAwKTtcblx0fVxuXHQgNjUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg1MSUgMCAyOSUgMCk7XG5cdH1cblx0IDcwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMSUgMCA2MCUgMCk7XG5cdH1cblx0IDc1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMzklIDAgMzUlIDApO1xuXHR9XG5cdCA4MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDUzJSAwIDYlIDApO1xuXHR9XG5cdCA4NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDYzJSAwIDE3JSAwKTtcblx0fVxuXHQgOTAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgxOSUgMCAxJSAwKTtcblx0fVxuXHQgOTUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgyMSUgMCAxMCUgMCk7XG5cdH1cblx0IDEwMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDIxJSAwIDU4JSAwKTtcblx0fVxuYDtcbmNvbnN0IG5vaXNlMSA9IGtleWZyYW1lc2BcbiAgMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDYlIDAgNDIlIDApO1xuXHR9XG5cdCA1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNTklIDAgMjklIDApO1xuXHR9XG5cdCAxMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDkzJSAwIDQlIDApO1xuXHR9XG5cdCAxNSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDEwMCUgMCAxJSAwKTtcblx0fVxuXHQgMjAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg4NSUgMCAxNSUgMCk7XG5cdH1cblx0IDI1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNTAlIDAgMTglIDApO1xuXHR9XG5cdCAzMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDY3JSAwIDE2JSAwKTtcblx0fVxuXHQgMzUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg0MyUgMCA0OCUgMCk7XG5cdH1cblx0IDQwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMzclIDAgOSUgMCk7XG5cdH1cblx0IDQ1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoOTElIDAgNyUgMCk7XG5cdH1cblx0IDUwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMiUgMCA3MiUgMCk7XG5cdH1cblx0IDU1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMTclIDAgMTclIDApO1xuXHR9XG5cdCA2MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDEzJSAwIDg1JSAwKTtcblx0fVxuXHQgNjUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgxOCUgMCAzOCUgMCk7XG5cdH1cblx0IDcwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMTIlIDAgODglIDApO1xuXHR9XG5cdCA3NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDQyJSAwIDMxJSAwKTtcblx0fVxuXHQgODAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg5NSUgMCAyJSAwKTtcblx0fVxuXHQgODUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg1OSUgMCA4JSAwKTtcblx0fVxuXHQgOTAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgyNCUgMCA0NCUgMCk7XG5cdH1cblx0IDk1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNTclIDAgNSUgMCk7XG5cdH1cblx0IDEwMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDkzJSAwIDMlIDApO1xuXHR9XG5gO1xuXG5jb25zdCBSb3NlR3JhZGllbnQgPVxuICBcImxpbmVhci1ncmFkaWVudCgxMDZkZWcsICMwMGY2ZmYgOCUsICNmZmVjMDAgNTAlLCAjZmYwMGVjIDg3JSlcIjtcblxuY29uc3QgQ3liZXJTa3kgPVxuICBcImxpbmVhci1ncmFkaWVudCgxMDZkZWcsICNmZmU5MDAgOCUsICMwMDQzZmYgNDQlLCAjYTIwMGZmIDg3JSlcIjtcblxuXG5jb25zdCB0aGVtZTogVGhlbWVQcm9wcyA9IHtcbiAgY29sb3JzOiB7XG4gICAgbWF0cml4OiBcIiMwMGZmMzJcIixcbiAgICBnb2xkOiBcIiM5NWYxMWNcIixcbiAgICBjeWJlcjogXCIjZWRkYTBjXCIsXG4gICAgcm9zZTogXCIjZmYyOTZkXCIsXG4gICAgcHVuazogXCIjOGU1MmY1XCIsXG4gIH0sXG4gIHRleHRTdHlsZXM6IHtcbiAgICBvdXRsaW5lZDoge1xuICAgICAgdHJhbnNmb3JtOiBcInNrZXcoLTIxZGVnKVwiLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICBPdXRsaW5lZEN5YmVyUm9zZToge1xuICAgICAgdHJhbnNmb3JtOiBcInNrZXcoLTIxZGVnKVwiLFxuICAgICAgY29sb3I6IFwiI2ZmMjk2ZFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4IDEycHhcIixcbiAgICAgIGJvcmRlcjogXCIycHggc29saWRcIixcbiAgICAgIGJvcmRlckltYWdlU2xpY2U6IFwiMVwiLFxuICAgICAgYm9yZGVyV2lkdGg6IFwiMnB4XCIsXG4gICAgICBib3JkZXJJbWFnZVNvdXJjZTogYCR7Um9zZUdyYWRpZW50fWAsXG4gICAgfSxcbiAgICBPdXRsaW5lZEN5YmVyU2t5OiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2tldygtMjFkZWcpXCIsXG4gICAgICBjb2xvcjogXCIjMDA0M0ZGXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI2cHggMTJweFwiLFxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZFwiLFxuICAgICAgYm9yZGVySW1hZ2VTbGljZTogXCIxXCIsXG4gICAgICBib3JkZXJXaWR0aDogXCIycHhcIixcbiAgICAgIGJvcmRlckltYWdlU291cmNlOiBgJHtDeWJlclNreX1gLFxuICAgIH0sXG4gICAgTWF0cml4OiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2tldygtMjFkZWcpXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI2cHggMTJweFwiLFxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDBmZjMyXCIsXG4gICAgICBjb2xvcjogXCIjMDBmZjMyXCIsXG4gICAgICBib3hTaGFkb3c6IFwiMCA0cHggNnB4IDAgIzAwZmYzMlwiLFxuICAgIH0sXG4gICAgUm9zZToge1xuICAgICAgdHJhbnNmb3JtOiBcInNrZXcoLTMxZGVnKVwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4IDEycHhcIixcbiAgICAgIGNvbG9yOiBcIiNmZjI5NmRcIixcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgI2ZmMjk2ZFwiLFxuICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDZweCAwICNmZjI5NmRcIixcbiAgICB9LFxuICAgIFB1bms6IHtcbiAgICAgIHRyYW5zZm9ybTogXCJza2V3KC0yMWRlZylcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBwYWRkaW5nOiBcIjZweCAxMnB4XCIsXG4gICAgICBjb2xvcjogXCIjOGU1MmY1XCIsXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM4ZTUyZjVcIixcbiAgICAgIGJveFNoYWRvdzogXCIwIDRweCA2cHggMCAjOGU1MmY1XCIsXG4gICAgfSxcbiAgICBHb2xkOiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2tldygtMjFkZWcpXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI2cHggMTJweFwiLFxuICAgICAgY29sb3I6IFwiIzk1ZjExY1wiLFxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjOTVmMTFjXCIsXG4gICAgICBib3hTaGFkb3c6IFwiMCA0cHggNnB4IDAgIzk1ZjExY1wiLFxuICAgIH0sXG4gIH0sXG4gIGJnOiB7XG4gICAgdHlwZTogeyBiYWNrZ3JvdW5kOiBcInJlZFwiIH0sXG4gIH0sXG59O1xuY29uc3QgQmVmb3JlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjxCdXR0b25Qcm9wcz5gXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgbWFyZ2luOiA1cHg7XG5cbiAgJjphY3RpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICR7Y29sb3J9XG4gICR7c3BhY2V9XG4gICR7Zm9udFNpemV9XG4gICR7YnV0dG9uU3R5bGV9XG5gO1xuXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRyYW5zaXRpb246IDFzO1xuICBsZXR0ZXItc3BhY2luZzogMC4zZW07XG4gIHRyYW5zZm9ybTogc2tld1goMjBkZWcpICFpbXBvcnRhbnQ7XG4gIDpob3Zlcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgcmVkO1xuICAgIHRvcDogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYW5pbWF0aW9uOiAke25vaXNlMX0gMnMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZS1yZXZlcnNlO1xuICB9XG5cbiAgOmhvdmVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDAgcmVkO1xuICAgIHRvcDogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbmltYXRpb246ICR7bm9pc2UyfSAxNXMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZS1yZXZlcnNlO1xuICB9XG59YDtcblxuQmVmb3JlQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogXCJwcmltYXJ5XCIsXG59O1xuXG5jb25zdCBCdXR0b24gPSAoeyB0ZXh0LCB2YXJpYW50LCBjb2xvciB9OiBCdXR0b25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8QmVmb3JlQnV0dG9uIGNvbG9yPXtjb2xvcn0gdmFyaWFudD17dmFyaWFudH0+XG4gICAgICAgIDxTcGFuIGRhdGEtdGV4dD17dGV4dH0+e3RleHR9PC9TcGFuPlxuICAgICAgPC9CZWZvcmVCdXR0b24+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgQnV0dG9uIH07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0eXBlPzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuY29uc3QgQ3liZXJJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdHlwZSA9IFwidGV4dFwiLCBsYWJlbCwgdmFsdWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNpbXBsZS1mb3JtLWdyb3VwXCI+XG4gICAge2xhYmVsICYmIDxsYWJlbCBjbGFzc05hbWU9XCJzaW1wbGUtdGV4dC1sYWJlbFwiPntsYWJlbH08L2xhYmVsPn1cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICBjbGFzc05hbWU9XCJzaW1wbGUtdGV4dC1pbnB1dFwiXG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDeWJlcklucHV0OyIsImltcG9ydCB7IENhcmQsIENhcmRDYXJvdXNlbCB9IGZyb20gJy4vY2FyZC9pbmRleCdcblxuaW1wb3J0IHsgQnV0dG9uIGFzIEN5YmVyQnV0dG9uIH0gZnJvbSAnLi9idXR0b24vaW5kZXgnO1xuaW1wb3J0IEN5YmVySW5wdXQgZnJvbSBcIi4vaW5wdXQvaW5kZXhcIjtcblxuLy8gZXhwb3J0IHsgQ3liZXJJbnB1dCwgQ3liZXJCdXR0b24sIENhcmQsIENhcmRDYXJvdXNlbCB9O1xuZXhwb3J0IGRlZmF1bHQge1xuICBDeWJlcklucHV0LCBDeWJlckJ1dHRvbiwgQ2FyZCwgQ2FyZENhcm91c2VsXG59XG4iXSwibmFtZXMiOlsidmFyaWFudCIsImtleWZyYW1lcyIsImNvbG9yIiwic3BhY2UiLCJmb250U2l6ZSIsImJ1dHRvblN0eWxlIiwiVGhlbWVQcm92aWRlciIsIkN5YmVyQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU1BLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDOUI7QUFDRSxJQUFBLFFBQVEsRUFBRSxVQUFVO0FBQ3BCLElBQUEsT0FBTyxFQUFFLHFDQUFxQztBQUM5QyxJQUFBLE1BQU0sRUFBRSxXQUFXO0FBQ25CLElBQUEsU0FBUyxFQUFFLFlBQVk7QUFDdkIsSUFBQSxRQUFRLEVBQ04sNkVBQTZFO0FBQy9FLElBQUEsY0FBYyxFQUFFLDBCQUEwQjtBQUMxQyxJQUFBLGNBQWMsRUFBRSxPQUFPO0FBRXZCLElBQUEsVUFBVSxFQUFFO0FBQ1YsUUFBQSxPQUFPLEVBQUUsSUFBSTtBQUNiLFFBQUEsUUFBUSxFQUFFLFVBQVU7QUFDcEIsUUFBQSxLQUFLLEVBQUUsS0FBSztBQUNaLFFBQUEsTUFBTSxFQUFFLEtBQUs7QUFDYixRQUFBLFVBQVUsRUFBRSxPQUFPO0FBQ25CLFFBQUEsU0FBUyxFQUFFLGNBQWM7QUFDekIsUUFBQSxNQUFNLEVBQUUsTUFBTTtBQUNkLFFBQUEsS0FBSyxFQUFFLEdBQUc7QUFDVixRQUFBLE1BQU0sRUFBRSxHQUFHO0FBQ1osS0FBQTtBQUNGLENBQUEsRUFDREEsb0JBQU8sQ0FBQztBQUNOLElBQUEsUUFBUSxFQUFFO0FBQ1IsUUFBQSxNQUFNLEVBQUU7QUFDTixZQUFBLEtBQUssRUFBRSxPQUFPO0FBQ2QsWUFBQSxNQUFNLEVBQUUsbUJBQW1CO0FBQzNCLFlBQUEsVUFB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
