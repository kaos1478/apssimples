import React from "react";
import { GlobalStyle } from "./global/styles";
import Routes from "./routes";
import CarProvider from "./components/CarContext";

export default function App() {
  return (
    <>
      <CarProvider>
        <GlobalStyle />
        <div className="App">
          <Routes />
        </div>
      </CarProvider>
    </>
  );
}
