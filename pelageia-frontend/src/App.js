import React, { Suspense } from "react";
import routes from "./routes/routes";
import LoadRoute from "./routes/loadRoute";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import Header from "./components/elements/header/Header";
import { GlobalStyle } from "./components/styled/globalStyle";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback="Loading..." />
        <Switch>
          {routes.map((route, i) => (
            <LoadRoute key={i} {...route} />
          ))}
          <Redirect to="/page-not-found" />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
