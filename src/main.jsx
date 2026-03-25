import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Routes/Root/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Listed from "./component/Listed/Listed.jsx";
import PageRead from "./component/PageRead/PageRead.jsx";
import BookDetails from "./Pages/BookDetails/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: "true",
        path: "/",
        Component: Home,
        loader:()=>fetch("booksData.json")
      },
      {
        path: "/listed",
        Component: Listed,
      },
      {
        path: "/pageRead",
        Component: PageRead,
      },
      {
        path:"/bookDetails/:id",
        Component:BookDetails,
        loader:()=>fetch("booksData.json")
      }
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
