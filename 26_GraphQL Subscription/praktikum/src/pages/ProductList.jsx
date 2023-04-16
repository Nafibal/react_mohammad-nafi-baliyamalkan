import React from "react";
import { useSelector } from "react-redux";
import useNotLoggedIn from "../hooks/useNotLoggedIn";
import Table from "../components/CreateProduct/Table";

const ProductList = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  useNotLoggedIn(isLoggedIn);
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">PRODUCT LIST</h1>
      <Table lang={"en"} />
    </div>
  );
};

export default ProductList;
