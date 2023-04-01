import React from "react";
import Form from "../components/CreateProduct/Form";
import { useParams } from "react-router-dom";

const EditProducts = () => {
  const { id } = useParams();
  return (
    <>
      <h1 className="text-center">Edit Product</h1>
      <Form lang="en" type="edit" id={id} />;
    </>
  );
};

export default EditProducts;
