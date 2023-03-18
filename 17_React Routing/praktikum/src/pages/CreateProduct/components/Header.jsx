import React, { useState } from "react";

const Header = ({ lang, languageData: { title, description } }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <i className="fa-brands fa-bootstrap fs-1" />
      </div>
      <h1 className="text-center">{title[lang]}</h1>
      <p className="text-center w-75 mx-auto mb-5">{description[lang]}</p>
    </>
  );
};

export default Header;
