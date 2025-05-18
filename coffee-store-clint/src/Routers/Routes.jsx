import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Roots,
        children: [
            {
                path: '/',
                element: <h1>Home</h1>
            }
        ]
    }
])

export default router