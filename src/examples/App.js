import React from "react";
import { CyberInput, CyberButton } from "../lib";
// import styled, { ThemeProvider } from 'styled-components'
// import { color, space, fontSize, buttonStyle } from 'styled-system';


// const theme = {
//   colors: {
//     custom: '#444',
//     yellow: 'yellow'
//   },
//   buttons: {
//     primary: {
//       color: 'red',
//       backgroundColor: 'transparent'
//     },
//     secondary: {
//       color: 'green',
//       backgroundColor: 'transparent'
//     }
//   }
// }

// const Button = styled.button`
//    border: 0;
//    outline: 0;
//    ${color}
//    ${space}
//    ${fontSize}
//    ${buttonStyle}
//  `
// Button.defaultProps = {
//   variant: 'primary',
//   backgroundColor: 'transparent'
// }



const App = () => (
  <div>
  {/* // <ThemeProvider theme={theme}> */}
    <CyberInput label="Input label" placeholder="name@example.com"/>
    <CyberButton text="Button" />
    {/* <Button color='custom' variant='primary'>Styled Button</Button> */}
  {/* // </ThemeProvider> */}
  </div>
);

export default App;