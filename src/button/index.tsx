import { ButtonProps, ThemeProps } from "../types";
import { buttonStyle, color, fontSize, space } from "styled-system";
import styled, { ThemeProvider, keyframes } from "styled-components";

import React from "react";

const noise2 = keyframes`
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
const noise1 = keyframes`
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

const RoseGradient =
  "linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%)";

const CyberSky =
  "linear-gradient(106deg, #ffe900 8%, #0043ff 44%, #a200ff 87%)";


const theme: ThemeProps = {
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
const BeforeButton = styled.button<ButtonProps>`
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

const Span = styled.span`
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

const Button = ({ text, variant, color }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <BeforeButton color={color} variant={variant}>
        <Span data-text={text}>{text}</Span>
      </BeforeButton>
    </ThemeProvider>
  );
};

export { Button };