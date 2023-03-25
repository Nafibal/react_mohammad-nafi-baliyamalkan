import React from "react";
import "./LandingPage.css";
import heroImage from "../../assets/hero-img.png";

const LandingPage = () => {
  return (
    <>
      <section id="hero">
        <div className="hero_container">
          <div className="hero_info">
            <h1 className="hero_info_title">
              Better Solution For Your Business
            </h1>
            <h3 className="hero_info_subtitle">
              We are Team of talented designers making website with Bootstrap
            </h3>
            <div className="hero_button_container">
              <a href="">
                <button className="hero_cta">Get Started</button>
              </a>
              <a href="" className="hero_cta-alt">
                {" "}
                Watch Video{" "}
              </a>
            </div>
          </div>
          <img className="hero_img" src={heroImage} alt="hero image" />
        </div>
      </section>
      <footer>
        <div className="subscribtion">
          <h2 className="subscribtion_title">Join Our Newsletter</h2>
          <p className="subscribtion_info">
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form className="subscribtion_form">
            <input
              className="subscribtion_input"
              type="text"
              name="newsletter"
              id="newsletter"
            />
            <button className="subscribtion_btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <div className="footer_nav">
          <div className="footer_container">
            <div className="footer_column">
              <h4 className="footer_info_title">ARSHA</h4>
              <p className="footer_info">
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
              </p>
              <p className="footer_info">
                <b>Phone</b>: +1 5589 55488 55
              </p>
              <p className="footer_info">
                <b>Email</b>: info@example.com
              </p>
            </div>
            <div className="footer_column">
              <p className="footer_link_title">Useful Links</p>
              <a href="" className="footer_link">
                Home
              </a>
              <a href="" className="footer_link">
                About us
              </a>
              <a href="" className="footer_link">
                Service
              </a>
              <a href="" className="footer_link">
                Terms of service
              </a>
              <a href="" className="footer_link">
                Privacy policy
              </a>
            </div>
            <div className="footer_column">
              <p className="footer_link_title">Our Services</p>
              <a href="" className="footer_link">
                Web Design
              </a>
              <a href="" className="footer_link">
                Web Development
              </a>
              <a href="" className="footer_link">
                Product Management
              </a>
              <a href="" className="footer_link">
                Marketing
              </a>
              <a href="" className="footer_link">
                Graphic Design
              </a>
            </div>
            <div className="footer_column">
              <p className="footer_link_title">Our Social Network</p>
              <p className="footer_social_text">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="footer_social_container">
                <div className="footer_social" />
                <div className="footer_social" />
                <div className="footer_social" />
                <div className="footer_social" />
                <div className="footer_social" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright_container">
            <p>
              © Copyright <b>Arsha</b>. All Rights Reserved
            </p>
            <p>
              Designed by <span>BootstrapMade</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
