import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
    background-color: #0a0a0a; 
  }
  p, h1, h2, h3, span, button, input, aside, label, select {
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyles;