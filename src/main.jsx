import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "flowbite";
import "./index.css";

import Rasrochka from "./components/Rasrochka";
import Home from "./pages/Home";
import Rasrochka2 from "./components/Rasrochka2";
import HitsCards from "./components/HitsCards";
import Liked from "./pages/Liked";
import Bc from "./components/bc";
import Uycards from "./components/Uycards";
import Smartfonlarcarpds from "./components/Smartfonlarcarpds";
import SizUchunMaxsusCards from "./components/SizUchunMaxsusCards";
import Noutbuklar from "./components/Noutbuklar";
import Televizorlar from "./components/Televizorlar";
import Kondisionerlar from "./components/Kondisionerlar";
import ProductItem from "./components/ProductItem";
import Basket from "./pages/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/liked",
        element: <Liked />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/rasrochka",
        element: <Rasrochka />,
      },
      {
        path: "/Rasrochka2",
        element: <Rasrochka2 />,
      },
      {
        path: "/hitscards",
        element: <HitsCards />,
      },
      {
        path: "/noutbuklar",
        element: <Noutbuklar />,
      },
      {
        path: "/televizorlar",
        element: <Televizorlar />,
      },
      {
        path: "/kondisionerlar",
        element: <Kondisionerlar />,
      },
      {
        path: "/sizuchunmaxsus",
        element: <SizUchunMaxsusCards />,
      },
      {
        path: "/smartphone",
        element: <Smartfonlarcarpds />,
      },
      {
        path: "/bigcards",
        element: <Bc />,
      },
      {
        path: "/uycards",
        element: <Uycards />,
      },
      {
        path: "/product/:id",
        element: <ProductItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
