import React from 'react'
import './style.css'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import { color, space, fontSize, buttonStyle } from 'styled-system';


const CyberButton = ({ text }) => (
    <button className="Cyber-green-button" ><span data-text={text} className="intoButton">{text}</span></button>
);

const glitchP = keyframes`
  17% {
    --scale: 0.87;
  }
  31% {
    --scale: 1.1;
  }
  37% {
    --scale: 1.3;
  }
  47% {
    --scale: 0.91;
  }
  87% {
    --scale: 1;
  }
`
const glitchA = keyframes`
  10%, 30%, 50%, 70%, 90% {
    --top: 0;
    --left: 0;
  }
  0% {
    --v-height: 15%;
  }
  20% {
    --left: 0.005;
  }
  40% {
    --left: 0.01;
    --v-height: 20%;
    --top: 3;
  }
  60% {
    --left: 0.03;
    --v-height: 25%;
    --top: 6;
  }
  80% {
    --left: 0.07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: 0.083;
    --v-height: 30%;
    --top: 1;
  }
`
const glitchB = keyframes`
 10%, 30%, 50%, 70%, 90% {
    --top: 0;
    --left: 0;
  }
  0% {
    --v-height: 15%;
    --top: 10;
  }
  20% {
    --left: -0.005;
  }
  40% {
    --left: -0.01;
    --v-height: 17%;
    --top: 3;
  }
  60% {
    --left: -0.03;
    --v-height: 35%;
    --top: 6;
  }
  80% {
    --left: -0.07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: -0.083;
    --v-height: 30%;
    --top: 1;
  }
`
const RoseGradient =
    'linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%)';

const CyberSly =
    'linear-gradient(106deg, #ffe900 8%, #0043ff 44%, #a200ff 87%)';

const theme = {
    colors: {
        matrix: '#00ff32',
        gold: '#95f11c',
        cyber: '#edda0c',
        rose: '#ff296d',
        punk: '#8e52f5',
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
            borderImageSource: `${RoseGradient}`,
        },
        AutlinedCyberSly: {
            transform: 'skew(-21deg)',
            color: '#0043FF',
            cursor: 'pointer',
            padding: '6px 12px',
            border: '2px solid',
            borderImageSlice: '1',
            borderWidth: '2px',
            borderImageSource: `${CyberSly}`
        },
        Matrix: {
            transform: 'skew(-21deg)',
            cursor: 'pointer',
            padding: '6px 12px',
            border: '2px solid #00ff32',
            color: '#00ff32',
            boxShadow: '0 4px 6px 0 #00ff32',
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
            boxShadow: '0 4px 6px 0 #8e52f5',
        },
        Gold: {
            transform: 'skew(-21deg)',
            cursor: 'pointer',
            padding: '6px 12px',
            color: '#95f11c',
            border: '2px solid #95f11c',
            boxShadow: '0 4px 6px 0 #95f11c',
        },
    },
    bg: {
        type: { background: 'red' }
    }
}
const BeforeButton = styled.button`
    border: 0;
    outline: 0;
    transition:.4s;
    
    &:active{
    position:relative;
    top:5px;
    box-shadow:none;
  }
    ${color}
    ${space}
    ${fontSize}
    ${buttonStyle}
  `
const Span = styled.span`
  transform: skew(0deg);
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  `;
BeforeButton.defaultProps = {
    variant: 'primary',
    backgroundColor: 'transparent',
    type: 'autlined'
}

export const Button = ({ text, variant, color }) => {
    return (
        <ThemeProvider theme={theme}>
            <BeforeButton type='type' color={color} variant={variant}>
                <Span>{text}</Span>
            </BeforeButton>
        </ThemeProvider>
    );
};

export default CyberButton;