import React, { useEffect, useState } from "react";

import Form from "../components/CreateProduct/Form";
import Table from "../components/CreateProduct/Table";
import Header from "../components/CreateProduct/Header";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import useNotLoggedIn from "../hooks/useNotLoggedIn";

const CreateProduct = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  useNotLoggedIn(isLoggedIn);

  const [lang, setLang] = useState("en");
  const [number, setNumber] = useState(Math.round(Math.random() * 100));
  const language = useSelector((state) => state.language.createProduct);

  console.log(isLoggedIn);

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
          {language.numberBtn[lang]}
        </button>
        <button
          onClick={() => {
            setLang(lang == "en" ? "id" : "en");
          }}
          className="mx-auto btn btn-dark "
        >
          {language.langBtn[lang]}
        </button>
      </div>
      <Header lang={lang} />
      <Form lang={lang} />
      <Table lang={lang} />
    </div>
  );
};

export default CreateProduct;
