import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../error/NotFound";
import PrivateRouter from "./PrivateRouter";
import AddVolunteerPost from "../pages/AddVolunteerPost";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://volunteer-management-server-bay.vercel.app/volunteers-posts')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add-volunteer",
                element: <PrivateRouter>
                    <AddVolunteerPost></AddVolunteerPost>
                </PrivateRouter>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);

export default router;