import React from 'react';
import { Button,Card } from '../lib';
import styled from 'styled-components'


const Flex = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:5%;
position:relative;
margin: 0px auto;
`;

const App = () => (
  <Flex>
      <Button text='Button' variant='Matrix' color='matrix' />

      <Button text='Button' variant='AutlinedCyberRose' color='matrix' />

      <Button text='Button' variant='Rose' color='rose' />

      <Button text='Button' variant='Punk' color='matrix' />

      <Button text='Button' variant='Gold' color='gold' />

      <Button text='Button' variant='AutlinedCyberSly' color='gold' />
      <Card text="asdda">
      
      </Card>
  </Flex>
);

export default App;


{/* <CyberInput label='Input label' placeholder='name@example.com'/> */ }
{/* <CyberButton text='Button' /> */ }
