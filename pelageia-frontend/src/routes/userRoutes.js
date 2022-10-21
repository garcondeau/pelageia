import routes from "./routes";
import UsersPage from "../pages/users/UsersPage";
import UsersDetailsPage from "../pages/users/UserDetailsPage";
import ProvidersPage from "../pages/providers/ProvidersPage";
import ProvidersDetailsPage from "../pages/providers/ProvidersDetailsPage";

const userRoutes = [
    {
        title: "Control panel",
        path: "/panel",
        exact: true,
        component: "",
        menu: true
    },
    {
        title: "Profile",
        path: "/profile",
        exact: true,
        component: "",
        menu: false
    },
    {
        title: "User providers",
        path: "/panel/:user/providers",
        exact: true,
        component: "",
        menu: true
    },
    {
        title: "Create provider",
        path: "/panel/:user/providers/create",
        exact: true,
        component: "",
        menu: false
    },
    {
        title: "Provider details",
        path: "/panel/:user/providers/:id",
        exact: true,
        component: "",
        menu: false
    },
    {
        title: "Provider details",
        path: "/panel/:user/providers/:id/edit",
        exact: true,
        component: "",
        menu: false
    },
]

const userRoutesConcat = userRoutes.concat(routes);

export default userRoutesConcat;