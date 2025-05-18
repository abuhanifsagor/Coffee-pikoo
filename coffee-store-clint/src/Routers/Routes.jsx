import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../components/about";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";





const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        path: "/",
        Component: MainLayout,
        children: [
          {
            index: true,
            path: "/home",
            loader: async () =>  await fetch("http://localhost:3000/coffees"),
            Component: Home,
          },
          {
            path: "/addcoffee",
            Component: AddCoffee,
          },
          {
            path: "/updatecoffee",
            Component: UpdateCoffee,
          },
          {
            path: "/about",
            Component: About,
          },
        ],
      },
    ],
  },
]);

export default router;
