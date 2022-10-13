import React, { Suspense } from 'react';
import routes from "./routes/routes"
import LoadRoute from "./routes/loadRoute"
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Suspense fallback="Loading..."/>
            <Switch>
                {routes.map((route, i) => (
                    <LoadRoute key={i} {...route}/>
                ))}
                <Redirect to="/page-not-found"/>
            </Switch>
        </Router>
    )
}

export default App;
