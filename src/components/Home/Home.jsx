import React from "react";
import xsz from "../../Assets/Images/avataaars.svg";
import "../Home/Home.css";
export default function Home() {
  return (
    <section id="Home" >
      <div className="contaner d-flex flex-column justify-content-center align-items-center text-white">
        <img src={xsz} className="zz" alt="" />
        <h2 className="fs-1 fw-bolder mt-4 text-white">START FRAMEWORK</h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="line me-3 bg-white"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="line ms-3 bg-white"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}
