import React from "react";
import Form from "../components/CreateProduct/Form";
import { useParams } from "react-router-dom";
import useNotLoggedIn from "../hooks/useNotLoggedIn";
import { useSelector } from "react-redux";

const EditProducts = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  useNotLoggedIn(isLoggedIn);

  const { id } = useParams();
  return (
    <>
      <h1 className="text-center">Edit Product</h1>
      <Form lang="en" edit={true} id={id} />;
    </>
  );
};

export default EditProducts;
