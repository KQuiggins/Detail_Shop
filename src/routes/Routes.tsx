import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import {ErrorPage} from "../pages/ErrorPage";
import {HomePage} from "../pages/HomePage";
import {AboutPage} from "../pages/AboutPage";
import {SignInPage} from "../pages/SignInPage";
import {SignUpPage} from "../pages/SignUpPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "sign-in",
          element: <SignInPage />,
        },
        {
          path: "sign-up",
          element: <SignUpPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        ],

  },

]);

export function Routes() {
  return <RouterProvider router={router} />;
}
