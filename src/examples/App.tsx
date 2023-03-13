import { Card, CardCarousel, CyberButton } from "../lib";

import { ButtonProps } from "../lib/types";
import React from "react";
import styled from "styled-components";
import Rose from "./test-background.png";
interface ButtonObject {
  props: ButtonProps;
}

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
      {buttons.map(({ props }, index) => {
        return <CyberButton key={index} {...props} />;
      })}
    </Flex>
    <Flex>
      {cards.map(({ Component, props }, index) => {
        return <Component key={index} {...props} />;
      })}
    </Flex>
  </div>
);

export default App;

const buttons: ButtonObject[] = [
  {
    props: {
      text: "CyberFuture",
      variant: "Matrix",
      color: "matrix",
      outline: true,
    },
  },
  {
    props: {
      text: "CyberFuture",
      variant: "Rose",
    },
  },
  {
    props: {
      text: "CyberFuture",
      variant: "Punk",
    },
  },
  {
    props: {
      text: "CyberFuture",
      variant: "Gold",
    },
  },
  {
    props: {
      text: "CyberFuture",
      variant: "OutlinedCyberSky",
    },
  },
];

const cards = [
  {
    Component: Card,
    props: {
      variant: "Matrix",
      title: "Matrix Title",
      body: "some content",
      background: `url(${Rose}) center center no-repeat`,
    },
  },
  {
    Component: CardCarousel,
    props: {
      variant: "Rose",
      title: "Rose Title",
      body: "some content",
    },
  },
  {
    Component: Card,
    props: {
      variant: "Matrix",
      title: "Matrix Title",
      body: "some content",
      background: "orange",
      width: "25.5rem",
      height: "40em",
    },
  },
  {
    Component: Card,
    props: {
      variant: "Matrix",
      title: "Matrix Title",
      body: "some content",
    },
  },
];
