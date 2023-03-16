import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateProduct from "./pages/CreateProduct/CreateProduct";

function App() {
  return (
    <>
      <Navbar />
      <CreateProduct />
    </>
  );
}

export default App;
