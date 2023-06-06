import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h2 className="nav_logo">LOGO</h2>
      <div className="nav_links">
        <a href="" className="nav_link">
          Home
        </a>
        <a href="" className="nav_link">
          About
        </a>
        <a href="" className="nav_link">
          Services
        </a>
        <a href="" className="nav_link">
          Blog
        </a>
        <a href="" className="nav_link">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
