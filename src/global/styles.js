import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /*body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
  }*/
  body, html, .App{
    font-family: 'roboto', 'arial';
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }


`;
