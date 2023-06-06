import React from "react";
import "./AboutUs.css";
import image from "../../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about_container">
        <h2>About Us</h2>
        <img src={image} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          numquam, molestiae adipisci temporibus assumenda ad ea perferendis
          doloremque eos ullam quidem in sequi, consequuntur veniam animi
          sapiente ipsam doloribus quae! Neque, repudiandae? Quaerat, pariatur.
          Officia impedit laborum voluptatem sed dicta!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          delectus, quam porro eligendi molestias non ducimus itaque dolor
          officia necessitatibus rem voluptas similique fugit hic reiciendis
          explicabo eveniet corrupti veniam. Repellendus cum eaque, nostrum
          culpa, minus pariatur sunt laboriosam quis ducimus, ad quae incidunt?
          Saepe quisquam labore accusantium inventore excepturi dolorum totam
          repellendus aspernatur itaque.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
