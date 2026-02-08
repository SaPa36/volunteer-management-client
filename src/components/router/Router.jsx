import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);

export default router;