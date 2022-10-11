import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

import { Home28Regular, Alert28Regular } from "@fluentui/react-icons";

const AppRoutes = [
  {
    path: "/",
    title: "Home page",
    element: <Home />,
    icon: <Home28Regular />,
  },
  {
    path: "/counter",
    title: "Counter",
    element: <Counter />,
    icon: <Alert28Regular />,
  },
  {
    path: "/fetch-data",
    title: "Fetch data",
    element: <FetchData />,
    icon: <Alert28Regular />,
  },
];

export default AppRoutes;
