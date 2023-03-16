import React from "react";

const Table = ({
  lang,
  languageData: {
    title,
    productName,
    productCategory,
    productFreshness,
    productImage,
    productDescription,
    productPrice,
  },
}) => {
  return (
    <div className="w-75 ms-auto me-auto">
      <table className="table table-striped" id="product_table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">{productName[lang]}</th>
            <th scope="col">{productCategory[lang]}</th>
            <th scope="col">{productImage[lang]}</th>
            <th scope="col">{productFreshness[lang]}</th>
            <th scope="col">{productDescription[lang]}</th>
            <th scope="col">{productPrice[lang]}</th>
          </tr>
        </thead>
        <tbody />
      </table>
      <form action="">
        <input
          className="form-control w-25"
          type="text"
          placeholder="Search by product name"
        />
        <button className="btn btn-primary">Deletion</button>
        <button className="btn btn-outline-primary">Search</button>
      </form>
    </div>
  );
};

export default Table;
