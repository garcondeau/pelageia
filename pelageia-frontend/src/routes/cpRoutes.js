import userRoutes from "./userRoutes";
import UsersPage from "../pages/users/UsersPage";
import UsersDetailsPage from "../pages/users/UserDetailsPage";
import ProvidersPage from "../pages/providers/ProvidersPage";
import ProvidersDetailsPage from "../pages/providers/ProvidersDetailsPage";

const cpRoutes = [
    {
        title: "Users list",
        path: "/panel/users",
        exact: true,
        component: UsersPage,
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
]

const cpRoutesConcat = cpRoutes.concat(userRoutes);

export default cpRoutesConcat;