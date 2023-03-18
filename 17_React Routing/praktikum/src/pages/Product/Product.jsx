import React from "react";
import { useState } from "react";

const Product = () => {
  const [product, useProduct] = useState(null);
  return (
    <div className="container mt-5">
      <h1>Nama Produk</h1>
      <h2>Category</h2>
      <p>Kategori</p>
      <h2>Freshness</h2>
      <p>freshness</p>
      <h2>Price</h2>
      <p>price</p>
    </div>
  );
};

export default Product;
