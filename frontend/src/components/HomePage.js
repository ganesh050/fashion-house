import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Navbar class="navbar navbar-expand-sm navbar-light navbar bg-light sticky-top">
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
          <div class="navbar-nav container nav justify-content-center">
            <Nav.Link class="nav-item nav-link active" href="#">
              New <span class="sr-only">(current)</span>
            </Nav.Link>

            <Nav.Link class="nav-item nav-link" href="#">
              Women
            </Nav.Link>
            <Nav.Link class="nav-item nav-link" href="#">
              Men
            </Nav.Link>
            <Nav.Link class="nav-item nav-link" href="#">
              Traditional
            </Nav.Link>
            <Nav.Link class="nav-item nav-link" href="#">
              Accessories
            </Nav.Link>
            <Nav.Link class="nav-item nav-link" href="#">
              Clearance
            </Nav.Link>
          </div>
        </div>
      </Navbar>
      <div class="container-fluid">
        <div class="py-1 text-center font-italic font-weight-bold text-dark bg-light">
          <p>
            Winter Sale. 30% Discount in <a href="/">Men's</a> and{" "}
            <a href="/">Women's</a> Jeans
          </p>
        </div>
      </div>

      <div
        class="container"
        style={{
          backgroundColor: "#F5EFEF",
          backgroundImage: "url(/image/img.jpg)",
          backgroundSize: "cover",
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div class="row h-100">
          <div class="col-sm-12 my-auto">
            <div class="align-self-center mx-auto mb-3">
              <button type="button" class="btn btn-primary">
                Click Me!
              </button>
            </div>
            <div class="align-self-center mx-auto">
              <button type="button" class="btn btn-primary">
                Click Me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;