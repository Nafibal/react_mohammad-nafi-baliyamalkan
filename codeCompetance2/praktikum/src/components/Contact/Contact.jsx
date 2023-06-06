import React from "react";
import "./Contact.css";
import image from "../../assets/images/wallpaper-2.jpg";

const Contact = () => {
  return (
    <section className="contact">
      <div className="form_container">
        <img className="form_image" src={image} alt="image" />
        <form>
          <h2 className="mb-3">Contact Us</h2>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a desc here"
                id="floatingTextarea2"
                style={{ height: 100 }}
                defaultValue={""}
              />
              <label htmlFor="floatingTextarea2">Description</label>
            </div>
          </div>
          <button type="submit" className="clr-accent btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
