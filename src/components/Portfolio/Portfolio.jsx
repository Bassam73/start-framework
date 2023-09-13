import React from "react";
import "../Portfolio/Portfolio.css";
import firstPhoto from "../../Assets/Images/poert1.png";
import secondPhoto from "../../Assets/Images/port2.png";
import thirdPhoto from "../../Assets/Images/port3.png";

export default function Portfolio() {
  return (
    <section id="Portfolio">
      <div className="container text-center">
        <h2 className="fs-1 fw-bolder">PORTFOLIO COMPONENT</h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3"></div>
        </div>
        <div className="row g-5">
          <div className="col-md-4">
            <div className="card">
              <img src={firstPhoto} className="w-100 rounded" alt="" />
              <div className="layer d-flex justify-content-center align-items-center text-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={secondPhoto} className="w-100 rounded" alt="" />
              <div className="layer d-flex justify-content-center align-items-center text-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={thirdPhoto} className="w-100 rounded" alt="" />
              <div className="layer d-flex justify-content-center align-items-center text-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={firstPhoto} className="w-100 rounded" alt="" />
              <div className="layer d-flex justify-content-center align-items-center text-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={secondPhoto} className="w-100 rounded" alt="" />
              <div className="layer d-flex justify-content-center align-items-center text-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={thirdPhoto} className="w-100 rounded" alt="" />
              <div className="layer d-flex justify-content-center align-items-center text-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
