import HomePage from "../pages/home/HomePage"
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";


const routes = [
    {
        title: "Home page",
        path: "/",
        exact: true,
        component: HomePage,
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
        menu: false
    },
    {
        title: "Subscriptions",
        path: "/subscriptions",
        exact: true,
        component: <></>,
        menu: false
    }
]

export default routes;