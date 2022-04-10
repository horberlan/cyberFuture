import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components'
import { color, space, fontSize, buttonStyle } from 'styled-system';

const card = {
    buttons: {
        AutlinedCyberRose: {
            width: '214px',
            height: '319px',
            margin: "35.9px 25px 25.9px 31px",
            // mixBlendMode: 'multiply',
            border: 'solid 4px #ff296d',
            // backgroundBlendMode: 'multiply',
            backgroundImage: 'linear-gradient(to bottom, #a200ff, #a200ff)',
        },
    }
}
const BeforeCard = styled.button`
position:relative;
      border: 0;
      outline: 0;
      overflow:hidden;
      
      :after {
        content: '';
        position:absolute;
        top:80%;
        right:-20%;
        width:40%;
        height:40%;
        transform:rotate(45deg);
        background:transparent;
        border:solid 4px #ff296d;
        background: transparent;
        z-index: 0;


    }
      ${color}
      ${space}
      ${fontSize}
      ${buttonStyle}
    `

BeforeCard.defaultProps = {
    variant: 'primary',
    backgroundColor: 'transparent',
    type: 'autlined'
}
export const Card = ({ text, variant }) => {
    return (
        <ThemeProvider theme={card}>
            <BeforeCard variant="AutlinedCyberRose">
            
            </BeforeCard>
        </ThemeProvider>
    );
};

