import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container-fluid">
        <a className="navbar-brand me-3" href="#">
          Simple Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto align-items-center">
            <a className="nav-link active" aria-current="page" href="#">
              <button className="btn btn-primary">Home</button>
            </a>
            <a className="nav-link text-primary" href="#">
              Features
            </a>
            <a className="nav-link text-primary" href="#">
              Pricing
            </a>
            <a className="nav-link text-primary" href="#">
              FAQs
            </a>
            <a className="nav-link text-primary" href="#">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
