import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";

const getProducts = gql`
  query MyQuery {
    store_product {
      additional_information
      id
      price
      product_category
      product_freshness
      product_name
    }
  }
`;

const DeleteProduct = gql`
  mutation deleteProduct($id: Int!) {
    delete_store_product_by_pk(id: $id) {
      additional_information
      id
      price
      product_category
      product_freshness
      product_name
    }
  }
`;

const TableRow = ({
  data: {
    id,
    product_name,
    product_category,
    product_freshness,
    price,
    image,
    additionalDescription,
  },
}) => {
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DeleteProduct,
    {
      refetchQueries: [getProducts],
    }
  );

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{product_name}</td>
      <td>{product_category}</td>
      <td>{product_freshness}</td>
      {/* <td>{additionalDescription}</td> */}
      {/* <td>
        <img className="w-100" src={imageValue} alt="" />
      </td> */}
      <td>{price}</td>
      <td>
        <Link to={`/product/${id}`} className="me-2">
          <button className="btn btn-primary">Lihat</button>
        </Link>
        <button
          className="btn btn-danger me-2"
          onClick={() => {
            if (confirm("Apakah anda yakin ingin menghapus produk?")) {
              deleteProduct({ variables: { id: id } });
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
