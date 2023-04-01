import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const product = useSelector(
    (state) => state.products.products.filter((product) => product.id === id)[0]
  );

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
