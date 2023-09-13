import React from "react";
import "../Footer/Footer.css";
export default function Footer() {
  return (
    <footer className=" text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Location</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h2>AROUND THE WEB</h2>
            <ul className="d-flex mt-4 ms-2">
              <li>
                <span>
                  <i className="fa-brands fa-facebook"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa-brands fa-twitter"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa-brands fa-linkedin"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-globe"></i>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      <div className="foot w-100 text-center p-4">
        Copyright © Your Website 2021
      </div>
    </footer>
  );
}
