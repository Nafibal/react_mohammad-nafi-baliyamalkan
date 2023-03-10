import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";

const CreateProduct = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Form />
      <Table />
    </div>
  );
};

export default CreateProduct;
