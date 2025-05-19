import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../components/about";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import SingIn from "../components/SingIn";
import SingUp from "../components/SingUp";

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
            loader: async () => await fetch("http://localhost:3000/coffees"),
            Component: Home,
          },
          {
            path: "/addcoffee",
            Component: AddCoffee,
          },
          {
            path: "/coffees/:id",
            loader: async ({ params }) =>
              await fetch(`http://localhost:3000/coffees/${params.id} `),
            Component: CoffeeDetails,
          },
          {
            path: "/updatecoffee/:id",
            loader: async ({ params }) =>
              await fetch(`http://localhost:3000/coffees/${params.id} `),
            Component: UpdateCoffee,
          },
          {
            path: "/about",
            Component: About,
          },
          {
            path: "singin",
            Component: SingIn,
          },
          {
            path: "singup",
            Component: SingUp,
          }
        ],
      },
    ],
  },
]);

export default router;
