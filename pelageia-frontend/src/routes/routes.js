import React from "react";
import HomePage from "../pages/home/HomePage"
import UsersPage from "../pages/users/UsersPage";
import UsersDetailsPage from "../pages/users/UserDetailsPage";
import ProvidersPage from "../pages/providers/ProvidersPage";
import ProvidersDetailsPage from "../pages/providers/ProvidersDetailsPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

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
        title: "User details",
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
    },
    {
        title: "Provider details",
        path: "/panel/providers/:id",
        exact: true,
        component: ProvidersDetailsPage,
        menu: false
    },
    {
        title: "Sign in",
        path: "/login",
        exact: true,
        component: LoginPage,
        menu: false
    },
    {
        title: "Sign up",
        path: "/register",
        exact: true,
        component: RegisterPage,
        menu: true
    }
]

export default routes