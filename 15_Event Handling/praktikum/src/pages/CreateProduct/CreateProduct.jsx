import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import language from "../../data/language";

const CreateProduct = () => {
  const [lang, setLang] = useState("en");
  const [number, setNumber] = useState(Math.round(Math.random() * 100));
  const { createProduct: buttonLang } = language;

  return (
    <div className="container-fluid">
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
      <Form lang={lang} languageData={language.form} />
      <Table lang={lang} languageData={language.form} />
    </div>
  );
};

export default CreateProduct;
