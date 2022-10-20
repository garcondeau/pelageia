import React, { createContext, Suspense } from "react";
import routes from "./routes/routes";
import userRoutesConcat from "./routes/userRoutes";
import cpRoutesConcat from "./routes/cpRoutes";
import LoadRoute from "./routes/loadRoute";
import { Redirect, Switch } from "react-router-dom";
import Header from "./components/elements/header/Header";
import { GlobalStyle } from "./components/styled/globalStyle";
import { checkUserPrivilegies } from "./utils/checkUserPrivelegies";

export const HeaderContext = createContext();

const App = () => {
  const authRouteRender = () => {
    switch (checkUserPrivilegies()) {
      case "0":
        return routes;
      case "1":
        return userRoutesConcat;
      case "2":
        return cpRoutesConcat;
    }
  };

  return (
    <HeaderContext.Provider value={authRouteRender()}>
      <Header />
      <Suspense fallback="Loading..." />
      <Switch>
        {authRouteRender().map((route, i) => <LoadRoute key={i} {...route} />)}
        <Redirect to="/page-not-found" />
      </Switch>
      <GlobalStyle />
    </HeaderContext.Provider>
  );
};

export default App;
