import React from "react";
import "../Contact/Contact.css";
export default function Contact() {
  return (
    <section id="Contact" className="pt-4">
      <h2 className="fs-1 fw-bolder text-center">CONATCT SECTION</h2>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <div className="line me-3"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-3"></div>
      </div>
      <div className="container">
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <input
            type="text"
            placeholder="userName"
            className="inputs rounded"
          />
          <input type="text" placeholder="userAge" className="inputs rounded" />
          <input
            type="text"
            placeholder="userEmail"
            className="inputs rounded"
          />
          <input
            type="text"
            placeholder="userPassword"
            className="inputs rounded"
          />
        </div>
        <button className="rounded btn-submit">Send Message</button>
      </div>
    </section>
  );
}
