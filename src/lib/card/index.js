import React from 'react';
import styled from 'styled-components'
import { variant } from 'styled-system';

const BeforeCard = styled('div')({
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

    },
},
    variant({
        variants: {
            rose: {
                color: 'white',
                border: '4px solid #ff296d',
                '&:before': { background: '#ff296d', }
            },
            secondary: {
                color: 'white',
                bg: 'secondary',
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



export const Card = ({ title, End }) => {
    return (
        <BeforeCard variant="rose">
            <CardtTitle>{title}</CardtTitle>
            <CardtBody>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
            </CardtBody>
            <CardtFooter>{End}</CardtFooter>
        </BeforeCard>

    );
};


