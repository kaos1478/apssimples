import React from "react";
import { GlobalStyle } from "./global/styles";
import Routes from "./routes";

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="App">
          <Routes />
        </div>
      </>
    );
  }
}
