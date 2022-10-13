import React from "react";
import HomePage from "../pages/home/HomePage"
import { HomeRegular } from "@fluentui/react-icons";

const routes = [
    {
        title: "Home page",
        path: "/",
        exact: true,
        component: HomePage,
        icon: HomeRegular
    },
]

export default routes