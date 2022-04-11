import React from 'react';
import { Button, Card } from '../lib';
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
  <div>
    <Flex>
      <Button outline text='CyberFuture' variant='Matrix' color='matrix' />
      <Button text='Getelementbyid' variant='AutlinedCyberRose' type="outlined" />
      <Button text='Lane Art Design' variant='Rose' />
      <Button text='Button' variant='Punk' />
      <Button text='Button' variant='Gold' />
      <Button text='Button' variant='AutlinedCyberSly' />
    </Flex>
    <Card title="Card Title" End={<Button text='BUTTON' variant='Rose' />}>
    </Card>
  </div>
);

export default App;
