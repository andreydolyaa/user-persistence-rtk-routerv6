import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { ErrorPage } from "../pages/ErrorPage";
import Login from "../pages/Login";
import Devices from "../pages/Devices";
import Home from "../pages/Home";
import Stats from "../pages/Stats";
import Signup from "../pages/Signup";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Also handles routes protection
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/devices",
        element: <Devices />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
