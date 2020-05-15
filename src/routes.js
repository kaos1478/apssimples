import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import AgendaPage from "./pages/Calendar";
import Loginpage from "./pages/Login";
import StoreProvider from "./components/Store/Provider";
import RoutesPrivate from "./components/Routes/Private/Private";

export default function Routes() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Switch>
          <Route component={Loginpage} exact path="/login" />
          <RoutesPrivate component={HomePage} exact path="/" />
          <RoutesPrivate component={AgendaPage} exact path="/agenda" />
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
}
