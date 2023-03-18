import React from "react";

const TableRow = ({
  data: { nameValue, categoryValue, freshnessValue, priceValue, uuid },
  deleteProduct,
}) => {
  console.log(nameValue);
  return (
    <tr>
      <th scope="row">{uuid}</th>
      <td>{nameValue}</td>
      <td>{categoryValue}</td>
      <td>{freshnessValue}</td>
      <td>{priceValue}</td>
      <td>
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
