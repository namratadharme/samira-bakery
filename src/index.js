import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";
import UserInfo from "./Pages/UserInfo";
import ContactUs from "./Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/userinfo",
        element: <UserInfo />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
