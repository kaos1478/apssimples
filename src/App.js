import React from "react";
import { GlobalStyle } from "./global/styles";
import Routes from "./routes";
import CarProvider from "./components/CarContext";
import UserProvider from "./contexts/User";

export default function App() {
  return (
    <>
      <UserProvider>
        <CarProvider>
          <GlobalStyle />
          <div className="App">
            <Routes />
          </div>
        </CarProvider>
      </UserProvider>
    </>
  );
}
