import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import LandingPage from "./pages/LandingPage/LandingPage";
import Product from "./pages/Product/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<CreateProduct />} />
      <Route path="/product/:uuid" element={<Product />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
