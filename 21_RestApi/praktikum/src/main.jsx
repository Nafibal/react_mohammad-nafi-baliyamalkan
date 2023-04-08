import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";
import store from "./store/store";
import EditProducts from "./pages/EditProducts";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "product",
        element: <CreateProduct />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "/product/editProduct/:id",
        element: <EditProducts />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
