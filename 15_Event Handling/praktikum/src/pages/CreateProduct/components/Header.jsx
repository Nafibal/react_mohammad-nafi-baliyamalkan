import React from "react";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <i className="fa-brands fa-bootstrap fs-1" />
      </div>
      <h1 className="text-center">Create Product</h1>
      <p className="text-center w-75 mx-auto mb-5">
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>
    </>
  );
};

export default Header;
