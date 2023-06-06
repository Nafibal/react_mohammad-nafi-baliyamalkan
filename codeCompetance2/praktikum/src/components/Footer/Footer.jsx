import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2 className="footer_title">Nafi Baliya</h2>
      <p className="footer_info">Jl. Danau Bratan Timur H7 / A12</p>
      <p className="footer_info">+62 8133 3971 445</p>
      <div className="footer_navigation">
        <a className="footer_link" href="">
          Home
        </a>
        <a className="footer_link" href="">
          About
        </a>
        <a className="footer_link" href="">
          Services
        </a>
        <a className="footer_link" href="">
          Blog
        </a>
        <a className="footer_link" href="">
          Contact
        </a>
      </div>
      <div className="footer_social_container">
        <div className="footer_social">
          <i className="fa-brands fa-instagram" />
        </div>
        <div className="footer_social">
          <i className="fa-brands fa-github" />
        </div>
        <div className="footer_social">
          <i className="fa-brands fa-linkedin" />
        </div>
      </div>
      <p className="footer_copyright">
        © 2023 All rigths reserved{" "}
        <span className="clr-accent">Nafi Baliya</span>
      </p>
    </footer>
  );
};

export default Footer;
