import React from "react";
import HomePage from "../pages/home/HomePage"
import UsersPage from "../pages/users/UsersPage";
import UsersDetailsPage from "../pages/users/UserDetailsPage";
import ProvidersPage from "../pages/providers/ProvidersPage";

import { HomeRegular, PeopleRegular } from "@fluentui/react-icons";

const routes = [
    {
        title: "Home page",
        path: "/",
        exact: true,
        component: HomePage,
        icon: HomeRegular,
        menu: true
    },
    {
        title: "Users",
        path: "/panel/users",
        exact: true,
        component: UsersPage,
        icon: PeopleRegular,
        menu: true
    },
    {
        title: "Users details",
        path: "/panel/users/:id",
        exact: true,
        component: UsersDetailsPage,
        menu: false
    },
    {
        title: "Providers",
        path: "/panel/providers",
        exact: true,
        component: ProvidersPage,
        menu: true
    }
]

export default routes