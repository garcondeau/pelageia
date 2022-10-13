import React from "react";
import HomePage from "../pages/home/HomePage"
import UsersPage from "../pages/users/UsersPage";
import UsersDetailsPage from "../pages/users/UserDetailsPage";
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
        title: "Users list",
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
]

export default routes