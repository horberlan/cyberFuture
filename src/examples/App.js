import React from "react";
import { Button, Card, CardCarousel } from "../lib";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
  position: relative;
  margin: 0px auto;
`;

const App = () => (
  <div>
    <Flex>
      <Button outline text="CyberFuture" variant="Matrix" color="matrix" />
      <Button
        text="Getelementbyid"
        variant="OutlinedCyberRose"
        type="outlined"
      />
      <Button text="Lane Art Design" variant="Rose" />
      <Button text="Button" variant="Punk" />
      <Button text="Button" variant="Gold" />
      <Button text="Button" variant="OutlinedCyberSky" />
    </Flex>
    <Flex>
      <Card
        variant="Matrix"
        title="Card Title"
        body="some content"
        end={<Button text="button" variant="Matrix" />}
      ></Card>
      <CardCarousel
        variant="Rose"
        title="Card Title"
        body="some content"
        end={<Button text="button" variant="Rose" />}
      ></CardCarousel>
      <Card
        variant="Rose"
        title="Card Title"
        body="some content"
        end={<Button text="button" variant="Rose" />}
      ></Card>
      <Card
        variant="Rose"
        title="Card Title"
        body="some content"
        end={<Button text="button" variant="Rose" />}
      ></Card>
      <Card
        variant="Matrix"
        title="Card Title"
        body={<div>content</div>}
        end={<Button text="button" variant="Matrix" />}
      ></Card>
    </Flex>
  </div>
);

export default App;
