import React from 'react';
import styled from 'styled-components'
import { variant } from 'styled-system';

import Dots from './l5w7u42hvve61.png'

const BeforeCard = styled('div')({
    position: 'relative',
    width: 'calc(350px - 2vmin)',
    height: '30em',
    padding: 'calc(1.5% - 1vmin) calc(1% - 1vmin)',
    margin: '20px auto',
    boxSizing: 'border-box',
    clipPath: 'polygon(20% 0%, 100% 0, 100% 20%, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0 0);',
    backdropFilter: 'blur(6px) saturate(180%)',
    background:`url(${Dots}) no-repeat center`,
    backgroundSize:'cover',
    backgroundColor: 'rgba(17, 25, 40, 0.75)',
    overflow: 'hidden',

    '&:before': {
        content: '""',
        position: 'absolute',
        width: '6px',
        height: '45%',
        background: 'white',
        transform: 'skew(-35deg)',
        top: '59.5%',
        right: '0',
        zIndex: '4'

    },
},
    variant({
        variants: {
            rose: {
                color: 'white',
                border: '4px solid #ff296d',
                '&:before': { background: '#ff296d', }
            },
            matrix: {
                color: 'white',
                border: '4px solid #00ff32',
                '&:before': { background: '#00ff32', }
            },
        }
    })
)
const CardtTitle = styled.div`
display:flex;
word-break: break-all;
overflow: hidden;
flex-direction:column;
align-items:center;
width:100%;
height: 40%;
box-sizing: border-box;
padding:1% 2%;
letter-spacing:.2em;
font-weight: bold;
`;
const CardtBody = styled.div`
    position:relative;
    word-break: break-all;
    overflow: hidden;
    top:10%;
    width:100%;
    height: 30%;
    display:flex;
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
> *{
    scroll-snap-align: start;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    background:linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%); 
    background:#8e52f5;
    width:100px;
    height:80%;
    border-radius: 0.25rem;
    padding: 0.5rem;
    user-select:none;
}
`;
const CardtFooter = styled.div`
position:relative;
top:10%;
display:flex;
flex-direction:column;
align-items:center;
width:70%;
height: 10%;
box-sizing: border-box;
padding:2% 4%;
margin: auto auto;
`;
export const Card = ({ title, body, end, CardBody, variant }) => {
    return (
        // <Div>
            <BeforeCard variant={variant}>
                <CardtTitle>{title}</CardtTitle>
                <CardtBody>
                    {body}
                </CardtBody>
                <CardtFooter>{end}</CardtFooter>
            </BeforeCard>
        // </Div>
    );
};



export const CardCarousel = ({ title, body, end, CardBody, variant }) => {
    return (
        // <Div>
            <BeforeCard variant={variant}>
                <CardtTitle>{title}</CardtTitle>
                <CardtBody>
                    <div>content</div>
                    <div>content</div>
                    <div>content</div>
                    <div>content</div>
                    <div>content</div>
                    <div>content</div>
                </CardtBody>
                <CardtFooter>{end}</CardtFooter>
            </BeforeCard>
        // </Div>
    );
};


