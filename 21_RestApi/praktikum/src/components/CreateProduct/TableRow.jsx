import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/productSlice";

const TableRow = ({
  data: {
    id,
    productName,
    productCategory,
    productFreshness,
    productPrice,
    image,
    additionalDescription,
  },
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{productName}</td>
      <td>{productCategory}</td>
      <td>{productFreshness}</td>
      {/* <td>{additionalDescription}</td> */}
      {/* <td>
        <img className="w-100" src={imageValue} alt="" />
      </td> */}
      <td>{productPrice}</td>
      <td>
        <Link to={`/product/${id}`} className="me-2">
          <button className="btn btn-primary">Lihat</button>
        </Link>
        <button
          className="btn btn-danger me-2"
          onClick={() => {
            if (confirm("Apakah anda yakin ingin menghapus produk?")) {
              dispatch(deleteProduct(id));
            }
          }}
        >
          hapus
        </button>
        <Link to={`/product/editProduct/${id}`}>
          <button className="btn btn-success">edit</button>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
