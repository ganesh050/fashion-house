import React from "react";
import { Nav } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="container">
      {/* <Navbar class="navbar navbar-expand-sm navbar-light navbar bg-light sticky-top">
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
            <Nav.Link class="nav-item nav-link " href="#">
              Clearance
            </Nav.Link>
          </div>
        </div>
      </Navbar> */}
      <div class="bg-light p-0  text-center font-Mshtakan sticky-top">
        <br />
        <Nav.Link href="./">New</Nav.Link>
        <Nav.Link href="./">Women </Nav.Link>
        <Nav.Link href="./"> Men </Nav.Link>
        <Nav.Link href="./">Traditional </Nav.Link>
        <Nav.Link href="./"> Accessories </Nav.Link>
        <Nav.Link href="./">Clearance </Nav.Link>
      </div>
      {/* <div>
        <div>
          <p class="text-center font-italic font-weight-bold text-dark bg-light">
            Winter Sale. 30% Discount in<Nav.Link href="/">Men's</Nav.Link>and{" "}
            <a href="/">Women's</a> Jeans
          </p>
        </div>
      </div> */}
      <div
        // class="container"
        style={{
          backgroundColor: "#F5EFEF",
          backgroundImage: "url(/image/img.jpg)",
          backgroundSize: "cover",
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div class=" align-content-center row h-100">
          <div class="col-lg-10 my-auto">
            <div class="align-self-center mx-auto mb-3">
              <button type="button" class="btn btn-primary rounded-pill">
                Shop Women
              </button>
            </div>
            <div class="align-self-center mx-auto">
              <button type="button" class="btn btn-primary rounded-pill">
                Shop Men
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
