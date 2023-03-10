import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div class="container-fluid">
        <a class="navbar-brand me-3" href="#">
          Simple Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto align-items-center">
            <a class="nav-link active" aria-current="page" href="#">
              <button class="btn btn-primary">Home</button>
            </a>
            <a class="nav-link text-primary" href="#">
              Features
            </a>
            <a class="nav-link text-primary" href="#">
              Pricing
            </a>
            <a class="nav-link text-primary" href="#">
              FAQs
            </a>
            <a class="nav-link text-primary" href="#">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
