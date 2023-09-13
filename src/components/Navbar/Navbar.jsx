import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import $ from "jquery";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link to="" className="navbar-brand text-white fw-bold fs-2 ms-5 p-3">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link
                  id="about"
                  className="nav-linker active"
                  aria-current="page"
                  to="about"
                  onClick={() => navActive("about")}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="portfolio"
                  className="nav-linker"
                  to="portfolio"
                  onClick={() => navActive("portfolio")}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-linker"
                  to="contact"
                  onClick={() => navActive("contact")}
                  id="contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function navActive(id) {
  $(".nav-linker").removeClass("nav-active");
  $(`#${id}`).addClass("nav-active");
}
