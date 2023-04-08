import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = ({ lang }) => {
  const language = useSelector((state) => state.language.header);

  return (
    <>
      <div className="d-flex justify-content-center">
        <i className="fa-brands fa-bootstrap fs-1" />
      </div>
      <h1 className="text-center">{language.title[lang]}</h1>
      <p className="text-center w-75 mx-auto mb-5">
        {language.description[lang]}
      </p>
    </>
  );
};

export default Header;
