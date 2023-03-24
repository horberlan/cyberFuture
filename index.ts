
  /**
   * @license
   * author: undefined
   * cyberfuture.js v0.1.5-1-beta
   * Released under the MIT license.
   */

import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { variant, color, space, fontSize, buttonStyle } from 'styled-system';

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
}, variant({
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

const noise2 = keyframes `
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
const noise1 = keyframes `
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
  ${color}
  ${space}
  ${fontSize}
  ${buttonStyle}
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
    return (React.createElement(ThemeProvider, { theme: theme },
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

export { index as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudHMiLCJzb3VyY2VzIjpbInNyYy9jYXJkL2luZGV4LnRzeCIsInNyYy9idXR0b24vaW5kZXgudHN4Iiwic3JjL2lucHV0L2luZGV4LnRzeCIsInNyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkUHJvcHMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYW50IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcbmludGVyZmFjZSBDYXJkQ2Fyb3VzZWxQcm9wcyBleHRlbmRzIENhcmRQcm9wcywgT2JqZWN0IHt9XG5cbmNvbnN0IEJlZm9yZUNhcmQgPSBzdHlsZWQoXCJkaXZcIikoXG4gIHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHBhZGRpbmc6IFwiY2FsYygxLjUlIC0gMXZtaW4pIGNhbGMoMSUgLSAxdm1pbilcIixcbiAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICBjbGlwUGF0aDpcbiAgICAgIFwicG9seWdvbigyMCUgMCUsIDEwMCUgMCwgMTAwJSAyMCUsIDEwMCUgODAlLCA4MCUgMTAwJSwgMCAxMDAlLCAwJSA4MCUsIDAgMCk7XCIsXG4gICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig2cHgpIHNhdHVyYXRlKDE4MCUpXCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblxuICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHdpZHRoOiBcIjZweFwiLFxuICAgICAgaGVpZ2h0OiBcIjM2JVwiLFxuICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgICAgdHJhbnNmb3JtOiBcInNrZXcoLTM1ZGVnKVwiLFxuICAgICAgYm90dG9tOiBcIi0xcHhcIixcbiAgICAgIHJpZ2h0OiBcIjBcIixcbiAgICAgIHpJbmRleDogXCI0XCIsXG4gICAgfSxcbiAgfSxcbiAgdmFyaWFudCh7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIE1hdHJpeDoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBib3JkZXI6IFwiNHB4IHNvbGlkICMwMGZmMzJcIixcbiAgICAgICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjMDBmZjMyXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgUm9zZToge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBib3JkZXI6IFwiNHB4IHNvbGlkICNmZjI5NmRcIixcbiAgICAgICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjZmYyOTZkXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgUHVuazoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBib3JkZXI6IFwiNHB4IHNvbGlkICM4ZTUyZjVcIixcbiAgICAgICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjOGU1MmY1XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgR29sZDoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBib3JkZXI6IFwiNHB4IHNvbGlkICM5NWYxMWNcIixcbiAgICAgICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjOTVmMTFjXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBDYXJkdFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDElIDIlO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuY29uc3QgQ2FyZHRCb2R5ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdyaWQtYXV0by1jb2x1bW5zOiBtaW5tYXgoMTMwcHgsIGF1dG8pO1xuICBnYXA6IDIlO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICBzY3JvbGwtcGFkZGluZzogMCAxcmVtO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXG4gICY6YWN0aXZlIHtcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gID4gKiB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEwNmRlZywgIzAwZjZmZiA4JSwgI2ZmZWMwMCA1MCUsICNmZjAwZWMgODclKTtcbiAgICBiYWNrZ3JvdW5kOiAjOGU1MmY1O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgQ2FyZHRGb290ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMiUgNCU7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IENhcmQ6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAoe1xuICB0aXRsZSxcbiAgYm9keSxcbiAgZW5kLFxuICBDYXJkQm9keSxcbiAgYmFja2dyb3VuZCxcbiAgd2lkdGggPSBcImNhbGMoMzUwcHggLSAydm1pbilcIixcbiAgaGVpZ2h0ID0gXCIzMGVtXCIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJlZm9yZUNhcmRcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgYmFja2dyb3VuZCA9PT0gdW5kZWZpbmVkID8gXCJyZ2JhKDE3LCAyNSwgNDAsIDAuNzUpXCIgOiBiYWNrZ3JvdW5kLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgfX0+XG4gICAgICA8Q2FyZHRUaXRsZT57dGl0bGV9PC9DYXJkdFRpdGxlPlxuICAgICAgPENhcmR0Qm9keT57Ym9keX08L0NhcmR0Qm9keT5cbiAgICAgIDxDYXJkdEZvb3Rlcj57ZW5kfTwvQ2FyZHRGb290ZXI+XG4gICAgPC9CZWZvcmVDYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmRDYXJvdXNlbDogUmVhY3QuRkM8Q2FyZENhcm91c2VsUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGJvZHksXG4gIGVuZCxcbiAgQ2FyZEJvZHksXG4gIHZhcmlhbnQsXG4gIGJhY2tncm91bmQsXG4gIHdpZHRoID0gXCJjYWxjKDM1MHB4IC0gMnZtaW4pXCIsXG4gIGhlaWdodCA9IFwiMzBlbVwiLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCZWZvcmVDYXJkXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIGJhY2tncm91bmQgPT09IHVuZGVmaW5lZCA/IFwicmdiYSgxNywgMjUsIDQwLCAwLjc1KVwiIDogYmFja2dyb3VuZCxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIH19PlxuICAgICAgPENhcmR0VGl0bGU+e3RpdGxlfTwvQ2FyZHRUaXRsZT5cbiAgICAgIDxDYXJkdEJvZHk+XG4gICAgICB7IENhcmRCb2R5IH1cbiAgICAgIDwvQ2FyZHRCb2R5PlxuICAgICAgPENhcmR0Rm9vdGVyPntlbmR9PC9DYXJkdEZvb3Rlcj5cbiAgICA8L0JlZm9yZUNhcmQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgQnV0dG9uUHJvcHMsIFRoZW1lUHJvcHMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGJ1dHRvblN0eWxlLCBjb2xvciwgZm9udFNpemUsIHNwYWNlIH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgbm9pc2UyID0ga2V5ZnJhbWVzYFxuICAwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMzglIDAgNTglIDApO1xuXHR9XG5cdCA1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMjklIDAgMjclIDApO1xuXHR9XG5cdCAxMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDU2JSAwIDIxJSAwKTtcblx0fVxuXHQgMTUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgzNyUgMCAxOSUgMCk7XG5cdH1cblx0IDIwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMTQlIDAgMzAlIDApO1xuXHR9XG5cdCAyNSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDgzJSAwIDE4JSAwKTtcblx0fVxuXHQgMzAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgzMSUgMCA2NiUgMCk7XG5cdH1cblx0IDM1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoOTElIDAgNSUgMCk7XG5cdH1cblx0IDQwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoOTYlIDAgMiUgMCk7XG5cdH1cblx0IDQ1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNzclIDAgNSUgMCk7XG5cdH1cblx0IDUwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMSUgMCA2NyUgMCk7XG5cdH1cblx0IDU1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNzQlIDAgNyUgMCk7XG5cdH1cblx0IDYwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNTclIDAgMjclIDApO1xuXHR9XG5cdCA2NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDUxJSAwIDI5JSAwKTtcblx0fVxuXHQgNzAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgxJSAwIDYwJSAwKTtcblx0fVxuXHQgNzUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgzOSUgMCAzNSUgMCk7XG5cdH1cblx0IDgwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNTMlIDAgNiUgMCk7XG5cdH1cblx0IDg1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNjMlIDAgMTclIDApO1xuXHR9XG5cdCA5MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDE5JSAwIDElIDApO1xuXHR9XG5cdCA5NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDIxJSAwIDEwJSAwKTtcblx0fVxuXHQgMTAwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMjElIDAgNTglIDApO1xuXHR9XG5gO1xuY29uc3Qgbm9pc2UxID0ga2V5ZnJhbWVzYFxuICAwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNiUgMCA0MiUgMCk7XG5cdH1cblx0IDUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg1OSUgMCAyOSUgMCk7XG5cdH1cblx0IDEwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoOTMlIDAgNCUgMCk7XG5cdH1cblx0IDE1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMTAwJSAwIDElIDApO1xuXHR9XG5cdCAyMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDg1JSAwIDE1JSAwKTtcblx0fVxuXHQgMjUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg1MCUgMCAxOCUgMCk7XG5cdH1cblx0IDMwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNjclIDAgMTYlIDApO1xuXHR9XG5cdCAzNSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDQzJSAwIDQ4JSAwKTtcblx0fVxuXHQgNDAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgzNyUgMCA5JSAwKTtcblx0fVxuXHQgNDUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg5MSUgMCA3JSAwKTtcblx0fVxuXHQgNTAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgyJSAwIDcyJSAwKTtcblx0fVxuXHQgNTUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgxNyUgMCAxNyUgMCk7XG5cdH1cblx0IDYwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMTMlIDAgODUlIDApO1xuXHR9XG5cdCA2NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDE4JSAwIDM4JSAwKTtcblx0fVxuXHQgNzAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgxMiUgMCA4OCUgMCk7XG5cdH1cblx0IDc1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNDIlIDAgMzElIDApO1xuXHR9XG5cdCA4MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDk1JSAwIDIlIDApO1xuXHR9XG5cdCA4NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDU5JSAwIDglIDApO1xuXHR9XG5cdCA5MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDI0JSAwIDQ0JSAwKTtcblx0fVxuXHQgOTUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg1NyUgMCA1JSAwKTtcblx0fVxuXHQgMTAwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoOTMlIDAgMyUgMCk7XG5cdH1cbmA7XG5cbmNvbnN0IFJvc2VHcmFkaWVudCA9XG4gIFwibGluZWFyLWdyYWRpZW50KDEwNmRlZywgIzAwZjZmZiA4JSwgI2ZmZWMwMCA1MCUsICNmZjAwZWMgODclKVwiO1xuXG5jb25zdCBDeWJlclNreSA9XG4gIFwibGluZWFyLWdyYWRpZW50KDEwNmRlZywgI2ZmZTkwMCA4JSwgIzAwNDNmZiA0NCUsICNhMjAwZmYgODclKVwiO1xuXG5cbmNvbnN0IHRoZW1lOiBUaGVtZVByb3BzID0ge1xuICBjb2xvcnM6IHtcbiAgICBtYXRyaXg6IFwiIzAwZmYzMlwiLFxuICAgIGdvbGQ6IFwiIzk1ZjExY1wiLFxuICAgIGN5YmVyOiBcIiNlZGRhMGNcIixcbiAgICByb3NlOiBcIiNmZjI5NmRcIixcbiAgICBwdW5rOiBcIiM4ZTUyZjVcIixcbiAgfSxcbiAgdGV4dFN0eWxlczoge1xuICAgIG91dGxpbmVkOiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2tldygtMjFkZWcpXCIsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgIE91dGxpbmVkQ3liZXJSb3NlOiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2tldygtMjFkZWcpXCIsXG4gICAgICBjb2xvcjogXCIjZmYyOTZkXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI2cHggMTJweFwiLFxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZFwiLFxuICAgICAgYm9yZGVySW1hZ2VTbGljZTogXCIxXCIsXG4gICAgICBib3JkZXJXaWR0aDogXCIycHhcIixcbiAgICAgIGJvcmRlckltYWdlU291cmNlOiBgJHtSb3NlR3JhZGllbnR9YCxcbiAgICB9LFxuICAgIE91dGxpbmVkQ3liZXJTa3k6IHtcbiAgICAgIHRyYW5zZm9ybTogXCJza2V3KC0yMWRlZylcIixcbiAgICAgIGNvbG9yOiBcIiMwMDQzRkZcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBwYWRkaW5nOiBcIjZweCAxMnB4XCIsXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkXCIsXG4gICAgICBib3JkZXJJbWFnZVNsaWNlOiBcIjFcIixcbiAgICAgIGJvcmRlcldpZHRoOiBcIjJweFwiLFxuICAgICAgYm9yZGVySW1hZ2VTb3VyY2U6IGAke0N5YmVyU2t5fWAsXG4gICAgfSxcbiAgICBNYXRyaXg6IHtcbiAgICAgIHRyYW5zZm9ybTogXCJza2V3KC0yMWRlZylcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBwYWRkaW5nOiBcIjZweCAxMnB4XCIsXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMGZmMzJcIixcbiAgICAgIGNvbG9yOiBcIiMwMGZmMzJcIixcbiAgICAgIGJveFNoYWRvdzogXCIwIDRweCA2cHggMCAjMDBmZjMyXCIsXG4gICAgfSxcbiAgICBSb3NlOiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2tldygtMzFkZWcpXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI2cHggMTJweFwiLFxuICAgICAgY29sb3I6IFwiI2ZmMjk2ZFwiLFxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjZmYyOTZkXCIsXG4gICAgICBib3hTaGFkb3c6IFwiMCA0cHggNnB4IDAgI2ZmMjk2ZFwiLFxuICAgIH0sXG4gICAgUHVuazoge1xuICAgICAgdHJhbnNmb3JtOiBcInNrZXcoLTIxZGVnKVwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4IDEycHhcIixcbiAgICAgIGNvbG9yOiBcIiM4ZTUyZjVcIixcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzhlNTJmNVwiLFxuICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDZweCAwICM4ZTUyZjVcIixcbiAgICB9LFxuICAgIEdvbGQ6IHtcbiAgICAgIHRyYW5zZm9ybTogXCJza2V3KC0yMWRlZylcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBwYWRkaW5nOiBcIjZweCAxMnB4XCIsXG4gICAgICBjb2xvcjogXCIjOTVmMTFjXCIsXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM5NWYxMWNcIixcbiAgICAgIGJveFNoYWRvdzogXCIwIDRweCA2cHggMCAjOTVmMTFjXCIsXG4gICAgfSxcbiAgfSxcbiAgYmc6IHtcbiAgICB0eXBlOiB7IGJhY2tncm91bmQ6IFwicmVkXCIgfSxcbiAgfSxcbn07XG5jb25zdCBCZWZvcmVCdXR0b24gPSBzdHlsZWQuYnV0dG9uPEJ1dHRvblByb3BzPmBcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBtYXJnaW46IDVweDtcblxuICAmOmFjdGl2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJHtjb2xvcn1cbiAgJHtzcGFjZX1cbiAgJHtmb250U2l6ZX1cbiAgJHtidXR0b25TdHlsZX1cbmA7XG5cbmNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcbiAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZykgIWltcG9ydGFudDtcbiAgOmhvdmVyOjphZnRlciB7XG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xuICAgIHRyYW5zZm9ybTogc2tld1goMjBkZWcpICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMCByZWQ7XG4gICAgdG9wOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbmltYXRpb246ICR7bm9pc2UxfSAycyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlLXJldmVyc2U7XG4gIH1cblxuICA6aG92ZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRleHQtc2hhZG93OiAzcHggMCByZWQ7XG4gICAgdG9wOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGFuaW1hdGlvbjogJHtub2lzZTJ9IDE1cyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlLXJldmVyc2U7XG4gIH1cbn1gO1xuXG5CZWZvcmVCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcInByaW1hcnlcIixcbn07XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IHRleHQsIHZhcmlhbnQsIGNvbG9yIH06IEJ1dHRvblByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxCZWZvcmVCdXR0b24gY29sb3I9e2NvbG9yfSB2YXJpYW50PXt2YXJpYW50fT5cbiAgICAgICAgPFNwYW4gZGF0YS10ZXh0PXt0ZXh0fT57dGV4dH08L1NwYW4+XG4gICAgICA8L0JlZm9yZUJ1dHRvbj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBCdXR0b24gfTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5jb25zdCBDeWJlcklucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB0eXBlID0gXCJ0ZXh0XCIsIGxhYmVsLCB2YWx1ZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2ltcGxlLWZvcm0tZ3JvdXBcIj5cbiAgICB7bGFiZWwgJiYgPGxhYmVsIGNsYXNzTmFtZT1cInNpbXBsZS10ZXh0LWxhYmVsXCI+e2xhYmVsfTwvbGFiZWw+fVxuICAgIDxpbnB1dFxuICAgICAgdHlwZT17dHlwZX1cbiAgICAgIGNsYXNzTmFtZT1cInNpbXBsZS10ZXh0LWlucHV0XCJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEN5YmVySW5wdXQ7IiwiaW1wb3J0IHsgQ2FyZCwgQ2FyZENhcm91c2VsIH0gZnJvbSAnLi9jYXJkL2luZGV4J1xuXG5pbXBvcnQgeyBCdXR0b24gYXMgQ3liZXJCdXR0b24gfSBmcm9tICcuL2J1dHRvbi9pbmRleCc7XG5pbXBvcnQgQ3liZXJJbnB1dCBmcm9tIFwiLi9pbnB1dC9pbmRleFwiO1xuXG4vLyBleHBvcnQgeyBDeWJlcklucHV0LCBDeWJlckJ1dHRvbiwgQ2FyZCwgQ2FyZENhcm91c2VsIH07XG5leHBvcnQgZGVmYXVsdCB7XG4gIEN5YmVySW5wdXQsIEN5YmVyQnV0dG9uLCBDYXJkLCBDYXJkQ2Fyb3VzZWxcbn1cbiJdLCJuYW1lcyI6WyJDeWJlckJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBTUEsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUM5QjtBQUNFLElBQUEsUUFBUSxFQUFFLFVBQVU7QUFDcEIsSUFBQSxPQUFPLEVBQUUscUNBQXFDO0FBQzlDLElBQUEsTUFBTSxFQUFFLFdBQVc7QUFDbkIsSUFBQSxTQUFTLEVBQUUsWUFBWTtBQUN2QixJQUFBLFFBQVEsRUFDTiw2RUFBNkU7QUFDL0UsSUFBQSxjQUFjLEVBQUUsMEJBQTBCO0FBQzFDLElBQUEsY0FBYyxFQUFFLE9BQU87QUFFdkIsSUFBQSxVQUFVLEVBQUU7QUFDVixRQUFBLE9BQU8sRUFBRSxJQUFJO0FBQ2IsUUFBQSxRQUFRLEVBQUUsVUFBVTtBQUNwQixRQUFBLEtBQUssRUFBRSxLQUFLO0FBQ1osUUFBQSxNQUFNLEVBQUUsS0FBSztBQUNiLFFBQUEsVUFBVSxFQUFFLE9BQU87QUFDbkIsUUFBQSxTQUFTLEVBQUUsY0FBYztBQUN6QixRQUFBLE1BQU0sRUFBRSxNQUFNO0FBQ2QsUUFBQSxLQUFLLEVBQUUsR0FBRztBQUNWLFFBQUEsTUFBTSxFQUFFLEdBQUc7QUFDWixLQUFBO0FBQ0YsQ0FBQSxFQUNELE9BQU8sQ0FBQztBQUNOLElBQUEsUUFBUSxFQUFFO0FBQ1IsUUFBQSxNQUFNLEVBQUU7QUFDTixZQUFBLEtBQUssRUFBRSxPQUFPO0FBQ2QsWUFBQSxNQUFNLEVBQUUsbUJBQW1CO0FBQzNCLFlBQUEsVUFBVSxFQUFFO0FBQ1YsZ0JBQUEsVUFBVSxFQUFFLFNBQVM7QUFDdEIsYUFBQTtBQUNGLFNBQUE7QUFDRCxRQUFBLElBQUksRUFBRTtBQUNKLFlBQUEsS0FBSyxFQUFFLE9BQU87QUFDZCxZQUFBLE1BQU0sRUFBRSxtQkFBbUI7QUFDM0IsWUFBQSxVQUFVLEVBQUU7QUFDVixnQkFBQSxVQUFVLEVBQUUsU0FBUztBQUN0QixhQUFBO0FBQ0YsU0FBQTtBQUNELFFBQUEsSUFBSSxFQUFFO0FBQ0osWUFBQSxLQUFLLEVBQUUsT0FBTztBQUNkLFlBQUEsTUFBTSxFQUFFLG1CQUFtQjtBQUMzQixZQUFBLFVBQVUsRUFBRTtBQUNWLGdCQUFBLFVBQVUsRUFBRSxTQUFTO0FBQ3RCLGFBQUE7QUFDRixTQUFBO0FBQ0QsUUFBQSxJQUFJLEVBQUU7QUFDSixZQUFBLEtBQUssRUFBRSxPQUFPO0FBQ2QsWUFBQSxNQUFNLEVBQUUsbUJBQW1CO0FBQzNCLFlBQUEsVUFBVSxFQUFFO0FBQ1YsZ0JBQUEsVUFBVSxFQUFFLFNBQVM7QUFDdEIsYUFBQTtBQUNGLFNBQUE7QUFDRixLQUFBO0FBQ0YsQ0FBQSxDQUFDLENBQ0gsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7O0NBWTVCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3QzNCLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFBLENBQUE7Ozs7Ozs7Ozs7O0NBVzdCLENBQUM7QUFFSyxNQUFNLElBQUksR0FBd0IsQ0FBQyxFQUN4QyxLQUFLLEVBQ0wsSUFBSSxFQUNKLEdBQUcsRUFDSCxRQUFRLEVBQ1IsVUFBVSxFQUNWLEtBQUssR0FBRyxxQkFBcUIsRUFDN0IsTUFBTSxHQUFHLE1BQU0sR0FDaEIsS0FBSTtBQUNILElBQUEsUUFDRSxLQUFBLENBQUEsYUFBQSxDQUFDLFVBQVUsRUFBQSxFQUNULEtBQUssRUFBRTtZQUNMLFVBQVUsRUFDUixVQUFVLEtBQUssU0FBUyxHQUFHLHdCQUF3QixHQUFHLFVBQVU7QUFDbEUsWUFBQSxLQUFLLEVBQUUsS0FBSztBQUNaLFlBQUEsTUFBTSxFQUFFLE1BQU07QUFDZixTQUFBLEVBQUE7UUFDRCxLQUFDLENBQUEsYUFBQSxDQUFBLFVBQVUsRUFBRSxJQUFBLEVBQUEsS0FBSyxDQUFjO1FBQ2hDLEtBQUMsQ0FBQSxhQUFBLENBQUEsU0FBUyxFQUFFLElBQUEsRUFBQSxJQUFJLENBQWE7QUFDN0IsUUFBQSxLQUFBLENBQUEsYUFBQSxDQUFDLFdBQVcsRUFBRSxJQUFBLEVBQUEsR0FBRyxDQUFlLENBQ3JCLEVBQ2I7QUFDSixDQUFDLENBQUM7QUFFSyxNQUFNLFlBQVksR0FBZ0MsQ0FBQyxFQUN4RCxLQUFLLEVBQ0wsSUFBSSxFQUNKLEdBQUcsRUFDSCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixLQUFLLEdBQUcscUJBQXFCLEVBQzdCLE1BQU0sR0FBRyxNQUFNLEdBQ2hCLEtBQUk7QUFDSCxJQUFBLFFBQ0UsS0FBQSxDQUFBLGFBQUEsQ0FBQyxVQUFVLEVBQUEsRUFDVCxLQUFLLEVBQUU7WUFDTCxVQUFVLEVBQ1IsVUFBVSxLQUFLLFNBQVMsR0FBRyx3QkFBd0IsR0FBRyxVQUFVO0FBQ2xFLFlBQUEsS0FBSyxFQUFFLEtBQUs7QUFDWixZQUFBLE1BQU0sRUFBRSxNQUFNO0FBQ2YsU0FBQSxFQUFBO1FBQ0QsS0FBQyxDQUFBLGFBQUEsQ0FBQSxVQUFVLEVBQUUsSUFBQSxFQUFBLEtBQUssQ0FBYztRQUNoQyxLQUFDLENBQUEsYUFBQSxDQUFBLFNBQVMsRUFDUixJQUFBLEVBQUEsUUFBUSxDQUNFO0FBQ1osUUFBQSxLQUFBLENBQUEsYUFBQSxDQUFDLFdBQVcsRUFBRSxJQUFBLEVBQUEsR0FBRyxDQUFlLENBQ3JCLEVBQ2I7QUFDSixDQUFDOztBQy9LRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdFdkIsQ0FBQztBQUNGLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0V2QixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQ2hCLCtEQUErRCxDQUFDO0FBRWxFLE1BQU0sUUFBUSxHQUNaLCtEQUErRCxDQUFDO0FBR2xFLE1BQU0sS0FBSyxHQUFlO0FBQ3hCLElBQUEsTUFBTSxFQUFFO0FBQ04sUUFBQSxNQUFNLEVBQUUsU0FBUztBQUNqQixRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxLQUFLLEVBQUUsU0FBUztBQUNoQixRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNoQixLQUFBO0FBQ0QsSUFBQSxVQUFVLEVBQUU7QUFDVixRQUFBLFFBQVEsRUFBRTtBQUNSLFlBQUEsU0FBUyxFQUFFLGNBQWM7QUFDMUIsU0FBQTtBQUNGLEtBQUE7QUFDRCxJQUFBLE9BQU8sRUFBRTtBQUNQLFFBQUEsaUJBQWlCLEVBQUU7QUFDakIsWUFBQSxTQUFTLEVBQUUsY0FBYztBQUN6QixZQUFBLEtBQUssRUFBRSxTQUFTO0FBQ2hCLFlBQUEsTUFBTSxFQUFFLFNBQVM7QUFDakIsWUFBQSxPQUFPLEVBQUUsVUFBVTtBQUNuQixZQUFBLE1BQU0sRUFBRSxXQUFXO0FBQ25CLFlBQUEsZ0JBQWdCLEVBQUUsR0FBRztBQUNyQixZQUFBLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGlCQUFpQixFQUFFLENBQUcsRUFBQSxZQUFZLENBQUUsQ0FBQTtBQUNyQyxTQUFBO0FBQ0QsUUFBQSxnQkFBZ0IsRUFBRTtBQUNoQixZQUFBLFNBQVMsRUFBRSxjQUFjO0FBQ3pCLFlBQUEsS0FBSyxFQUFFLFNBQVM7QUFDaEIsWUFBQSxNQUFNLEVBQUUsU0FBUztBQUNqQixZQUFBLE9BQU8sRUFBRSxVQUFVO0FBQ25CLFlBQUEsTUFBTSxFQUFFLFdBQVc7QUFDbkIsWUFBQSxnQkFBZ0IsRUFBRSxHQUFHO0FBQ3JCLFlBQUEsV0FBVyxFQUFFLEtBQUs7WUFDbEIsaUJBQWlCLEVBQUUsQ0FBRyxFQUFBLFFBQVEsQ0FBRSxDQUFBO0FBQ2pDLFNBQUE7QUFDRCxRQUFBLE1BQU0sRUFBRTtBQUNOLFlBQUEsU0FBUyxFQUFFLGNBQWM7QUFDekIsWUFBQSxNQUFNLEVBQUUsU0FBUztBQUNqQixZQUFBLE9BQU8sRUFBRSxVQUFVO0FBQ25CLFlBQUEsTUFBTSxFQUFFLG1CQUFtQjtBQUMzQixZQUFBLEtBQUssRUFBRSxTQUFTO0FBQ2hCLFlBQUEsU0FBUyxFQUFFLHFCQUFxQjtBQUNqQyxTQUFBO0FBQ0QsUUFBQSxJQUFJLEVBQUU7QUFDSixZQUFBLFNBQVMsRUFBRSxjQUFjO0FBQ3pCLFlBQUEsTUFBTSxFQUFFLFNBQVM7QUFDakIsWUFBQSxPQUFPLEVBQUUsVUFBVTtBQUNuQixZQUFBLEtBQUssRUFBRSxTQUFTO0FBQ2hCLFlBQUEsTUFBTSxFQUFFLG1CQUFtQjtBQUMzQixZQUFBLFNBQVMsRUFBRSxxQkFBcUI7QUFDakMsU0FBQTtBQUNELFFBQUEsSUFBSSxFQUFFO0FBQ0osWUFBQSxTQUFTLEVBQUUsY0FBYztBQUN6QixZQUFBLE1BQU0sRUFBRSxTQUFTO0FBQ2pCLFlBQUEsT0FBTyxFQUFFLFVBQVU7QUFDbkIsWUFBQSxLQUFLLEVBQUUsU0FBUztBQUNoQixZQUFBLE1BQU0sRUFBRSxtQkFBbUI7QUFDM0IsWUFBQSxTQUFTLEVBQUUscUJBQXFCO0FBQ2pDLFNBQUE7QUFDRCxRQUFBLElBQUksRUFBRTtBQUNKLFlBQUEsU0FBUyxFQUFFLGNBQWM7QUFDekIsWUFBQSxNQUFNLEVBQUUsU0FBUztBQUNqQixZQUFBLE9BQU8sRUFBRSxVQUFVO0FBQ25CLFlBQUEsS0FBSyxFQUFFLFNBQVM7QUFDaEIsWUFBQSxNQUFNLEVBQUUsbUJBQW1CO0FBQzNCLFlBQUEsU0FBUyxFQUFFLHFCQUFxQjtBQUNqQyxTQUFBO0FBQ0YsS0FBQTtBQUNELElBQUEsRUFBRSxFQUFFO0FBQ0YsUUFBQSxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFO0FBQzVCLEtBQUE7Q0FDRixDQUFDO0FBQ0YsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBYSxDQUFBOzs7Ozs7Ozs7OztJQVczQyxLQUFLLENBQUE7SUFDTCxLQUFLLENBQUE7SUFDTCxRQUFRLENBQUE7SUFDUixXQUFXLENBQUE7Q0FDZCxDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFvQlAsTUFBTSxDQUFBOzs7Ozs7Ozs7Ozs7aUJBWU4sTUFBTSxDQUFBOztFQUVyQixDQUFDO0FBRUgsWUFBWSxDQUFDLFlBQVksR0FBRztBQUMxQixJQUFBLE9BQU8sRUFBRSxTQUFTO0NBQ25CLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQWUsS0FBSTtBQUN2RCxJQUFBLFFBQ0UsS0FBQyxDQUFBLGFBQUEsQ0FBQSxhQUFhLEVBQUMsRUFBQSxLQUFLLEVBQUUsS0FBSyxFQUFBO1FBQ3pCLEtBQUMsQ0FBQSxhQUFBLENBQUEsWUFBWSxJQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQTtZQUMxQyxLQUFDLENBQUEsYUFBQSxDQUFBLElBQUksaUJBQVksSUFBSSxFQUFBLEVBQUcsSUFBSSxDQUFRLENBQ3ZCLENBQ0QsRUFDaEI7QUFDSixDQUFDOztBQ2hSRCxNQUFNLFVBQVUsR0FBb0IsQ0FBQyxFQUFFLElBQUksR0FBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUNsRSxLQUFLLENBQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxFQUFBLFNBQVMsRUFBQyxtQkFBbUIsRUFBQTtBQUMvQixJQUFBLEtBQUssSUFBSSxLQUFPLENBQUEsYUFBQSxDQUFBLE9BQUEsRUFBQSxFQUFBLFNBQVMsRUFBQyxtQkFBbUIsRUFBQSxFQUFFLEtBQUssQ0FBUztBQUM5RCxJQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsT0FBQSxFQUFBLEVBQ0UsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUMsbUJBQW1CLEVBQzdCLEtBQUssRUFBRSxLQUFLLEVBQ1osQ0FBQSxDQUNFLENBQ1A7O0FDWkQ7QUFDQSxZQUFlO0FBQ2IsSUFBQSxVQUFVLGVBQUVBLE1BQVcsRUFBRSxJQUFJLEVBQUUsWUFBWTtDQUM1Qzs7OzsifQ==
