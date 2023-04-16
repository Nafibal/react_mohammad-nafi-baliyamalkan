import React from "react";
import img from "../../assets/product-img.png";

const Card = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.product_name}</h5>
        <p className="card-text">{product.additional_information}</p>
        <a href="#" className="btn btn-primary">
          Detail View
        </a>
      </div>
    </div>
  );
};

export default Card;
