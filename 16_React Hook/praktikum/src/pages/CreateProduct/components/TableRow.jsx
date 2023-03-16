import React from "react";

const TableRow = ({
  data: { nameValue, categoryValue, freshnessValue, priceValue, uuid },
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
        <button className="btn btn-danger me-2">hapus</button>
        <button className="btn btn-success">edit</button>
      </td>
    </tr>
  );
};

export default TableRow;
