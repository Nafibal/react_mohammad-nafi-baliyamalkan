import React, { useState } from "react";

import language from "../data/language";
import uuid from "react-uuid";
import Form from "../components/CreateProduct/Form";
import Table from "../components/CreateProduct/Table";
import Header from "../components/CreateProduct/Header";

const CreateProduct = () => {
  const [lang, setLang] = useState("en");
  const [number, setNumber] = useState(Math.round(Math.random() * 100));
  const [products, setProducts] = useState([]);
  const { createProduct: buttonLang } = language;

  const handleSubmit = (product) => {
    product.uuid = uuid();
    setProducts([...products, product]);
  };

  const deleteProduct = (uuid) => {
    const newProducts = products.filter((product) => product.uuid !== uuid);
    setProducts(newProducts);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="d-flex justify-content-center mb-5">
        <button
          onClick={() => {
            setNumber(Math.round(Math.random() * 100));
            console.log(number);
          }}
          className="mx-auto btn btn-primary "
        >
          {buttonLang.numberBtn[lang]}
        </button>
        <button
          onClick={() => {
            setLang(lang == "en" ? "id" : "en");
          }}
          className="mx-auto btn btn-dark "
        >
          {buttonLang.langBtn[lang]}
        </button>
      </div>
      <Header lang={lang} languageData={language.header} />
      <Form
        lang={lang}
        languageData={language.form}
        handleSubmit={handleSubmit}
      />
      <Table
        lang={lang}
        languageData={language.form}
        products={products}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default CreateProduct;
