import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Routes/Root/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: "true",
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        Component: Home,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
