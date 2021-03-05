import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav container justify-content-between">
            <a class="nav-item nav-link active" href="#">
              New <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Men
            </a>
            <a class="nav-item nav-link" href="#">
              Women
            </a>
            <a class="nav-item nav-link" href="#">
              Accessories
            </a>
            <a class="nav-item nav-link" href="#">
              Clearance
            </a>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="py-2 text-center font-italic font-weight-bold">
          <p>
            Winter Sale. 30% Discount in <a href="/">Men</a> and{" "}
            <a href="/">Women</a>
          </p>
        </div>
      </div>

      <div
        class="container"
        style={{
          backgroundImage: "url(/image/img.jpg)",
          //width: "100%",
          height: "500px",
          backgroundRepeat: "no-repeat",
          //backgroundSize: 'contain',
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default HomePage;
