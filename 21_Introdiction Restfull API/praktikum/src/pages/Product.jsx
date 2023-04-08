import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import { BASE_URL } from "../const";
import useNotLoggedIn from "../hooks/useNotLoggedIn";

const Product = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  useNotLoggedIn(isLoggedIn);

  const { id } = useParams();
  const product = useFetchProducts(`${BASE_URL}/${id}`);

  if (!product) {
    return null;
  }

  return (
    <div className="container mt-5">
      <h1>{product.productName}</h1>
      <h2>Category</h2>
      <p>{product.productCategory}</p>
      <h2>Freshness</h2>
      <p>{product.productFreshness}</p>
      <h2>Price</h2>
      <p>{product.productPrice}</p>
    </div>
  );
};

export default Product;
