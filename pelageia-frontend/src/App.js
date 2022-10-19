import React, { createContext, Suspense, useEffect, useState } from "react";
import axios from "axios";
import routes from "./routes/routes";
import LoadRoute from "./routes/loadRoute";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import Header from "./components/elements/header/Header";
import { GlobalStyle } from "./components/styled/globalStyle";
import getUserInfo from "./utils/getUserInfo";

export const AuthContext = createContext({});

const App = () => {
  const history = useHistory();
  const [authentificated, setAuthentificated] = useState(false);
  const [me, setMe] = useState({});
  const location = useLocation();

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

  const getMe = () => {
    setMe(getUserInfo());
  };

  useEffect(() => {
    checkAuth();
    getMe();
  }, []);

  useEffect(() => {
    getMe();
  }, [location]);

  return (
    <AuthContext.Provider value={me}>
      {authentificated !== null && (
        <>
          <Header />
          <Suspense fallback="Loading..." />
          <Switch>
            {routes.map((route, i) => (
              <LoadRoute key={i} {...route} />
            ))}
            <Redirect to="/page-not-found" />
          </Switch>
          <GlobalStyle />
        </>
      )}
    </AuthContext.Provider>
  );
};

export default App;
