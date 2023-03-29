import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({
  data: {
    nameValue,
    categoryValue,
    freshnessValue,
    priceValue,
    imageValue,
    uuid,
  },
  deleteProduct,
}) => {
  console.log(nameValue);
  return (
    <tr>
      <th scope="row">{uuid}</th>
      <td>{nameValue}</td>
      <td>{categoryValue}</td>
      <td>{freshnessValue}</td>
      <td>
        <img className="w-100" src={imageValue} alt="" />
      </td>
      <td>{priceValue}</td>
      <td>
        <Link to={`/product/${uuid}`} className="me-2">
          <button className="btn btn-primary">Lihat</button>
        </Link>
        <button
          className="btn btn-danger me-2"
          onClick={() => {
            if (confirm("Apakah anda yakin ingin menghapus produk?")) {
              deleteProduct(uuid);
            }
          }}
        >
          hapus
        </button>
        <button className="btn btn-success">edit</button>
      </td>
    </tr>
  );
};

export default TableRow;
