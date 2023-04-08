import React from "react";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
import useFetchProducts from "../../hooks/useFetchProducts";
import { BASE_URL } from "../../const";

const Table = ({ lang }) => {
  const language = useSelector((state) => state.language.form);
  const products = useFetchProducts(BASE_URL);

  return (
    <div className="w-75 ms-auto me-auto">
      <table className="table table-striped" id="product_table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">{language.productName[lang]}</th>
            <th scope="col">{language.productCategory[lang]}</th>
            <th scope="col">{language.productFreshness[lang]}</th>
            {/* <th scope="col">{productImage[lang]}</th> */}
            {/* <th scope="col">{productDescription[lang]}</th> */}
            <th scope="col">{language.productPrice[lang]}</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((row) => {
              return <TableRow key={row.id} data={row} />;
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
