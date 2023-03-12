import { CSSProperties } from "styled-components";

// buttons props
export type ButtonProps = {
  text?: string;
  variant: string;
  color?: string;
  type?: string | undefined;
  outline?: boolean;
};
export interface ThemeProps {
  colors: {
    matrix: string;
    gold: string;
    cyber: string;
    rose: string;
    punk: string;
  };
  textStyles: {
    outlined: {
      transform: string;
    };
  };
  buttons: {
    OutlinedCyberRose: {
      transform: string;
      color: string;
      cursor: string;
      padding: string;
      border: string;
      borderImageSlice: string;
      borderWidth: string;
      borderImageSource: string;
    };
    OutlinedCyberSky: {
      transform: string;
      color: string;
      cursor: string;
      padding: string;
      border: string;
      borderImageSlice: string;
      borderWidth: string;
      borderImageSource: string;
    };
    Matrix: {
      transform: string;
      cursor: string;
      padding: string;
      border: string;
      color: string;
      boxShadow: string;
    };
    Rose: {
      transform: string;
      cursor: string;
      padding: string;
      color: string;
      border: string;
      boxShadow: string;
    };
    Punk: {
      transform: string;
      cursor: string;
      padding: string;
      color: string;
      border: string;
      boxShadow: string;
    };
    Gold: {
      transform: string;
      cursor: string;
      padding: string;
      color: string;
      border: string;
      boxShadow: string;
    };
  };
  bg: {
    type: {
      background: string;
    };
  };
}

export interface CardProps {
    title: string;
    body: React.ReactNode;
    end?: React.ReactNode;
    CardBody?: React.ReactNode;
    variant: string;
    background?: CSSProperties["background"];
  }