import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import image from "../../assets/images/wallpaper-2.jpg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <section className="contact">
      <div className="form_container">
        <img className="form_image" src={image} alt="image" />
        <form
          onSubmit={handleSubmit((data) => {
            alert(
              `first name : ${data.firstName}, last name : ${data.lastName}, email : ${data.email}, description : ${data.desc}`
            );
          })}
        >
          <h2 className="mb-3">Contact Us</h2>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              {...register("firstName")}
              type="text"
              className="form-control"
              id="firstName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              {...register("lastName")}
              type="text"
              className="form-control"
              id="lastName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              {...register("email")}
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
                {...register("description")}
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
