import React from "react";
import TableRow from "./TableRow";

const Table = ({
  products,
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
  deleteProduct,
}) => {
  return (
    <div className="w-75 ms-auto me-auto">
      <table className="table table-striped" id="product_table">
        <thead>
          <tr>
            <th scope="col">UUID</th>
            <th scope="col">{productName[lang]}</th>
            <th scope="col">{productCategory[lang]}</th>
            {/* <th scope="col">{productImage[lang]}</th> */}
            <th scope="col">{productFreshness[lang]}</th>
            {/* <th scope="col">{productDescription[lang]}</th> */}
            <th scope="col">{productPrice[lang]}</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((row) => {
            return (
              <TableRow
                key={row.uuid}
                data={row}
                deleteProduct={deleteProduct}
              />
            );
          })}
        </tbody>
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
