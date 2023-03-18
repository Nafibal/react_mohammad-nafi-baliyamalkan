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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/createProduct" element={<CreateProduct />} />
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
