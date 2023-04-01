import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<CreateProduct />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/product/editProduct/:id" element={<EditProducts />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
