import React from "react";

const Table = () => {
  return (
    <div className="w-75 ms-auto me-auto">
      <table className="table table-striped" id="product_table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Image of Product</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Additional Description</th>
            <th scope="col">Product Price</th>
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
