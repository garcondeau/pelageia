import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import routes from "./routes/routes";
import LoadRoute from "./routes/loadRoute";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import Header from "./components/elements/header/Header";
import { GlobalStyle } from "./components/styled/globalStyle";
import getUserInfo from "./utils/getUserInfo";

const App = () => {
  const [authentificated, setAuthentificated] = useState();

  const checkAuth = () => {
    if (localStorage.getItem("Bearer") !== null) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("Bearer")}`;
      setAuthentificated(true);
    } else {
      setAuthentificated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {authentificated && (
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
      )}
    </>
  );
};

export default App;
