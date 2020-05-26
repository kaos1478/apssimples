import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /*body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
  }*/
  body, html, .App, #root{
    font-family: 'roboto', 'arial';
    min-height: 100vh;
    max-width: 100vw;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }

  .conteudo {
    width: 100vw;
    height: 100vh;
    display: flex;
  }

`;
