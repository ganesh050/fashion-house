import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className="top-nav-wrap">
      <>
        <Navbar bg="light" navbar-expand-lg navbar-default>
          <Container>
            <Navbar.Brand href="/">FASHION HOUSE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link class="nav-link" href="/search">
                  <i class="fas fa-search"></i>
                </Nav.Link>
                <Nav.Link class="nav-link" href="/user">
                  <i class="fas fa-user"></i>
                </Nav.Link>
                <Nav.Link class="nav-link" href="/cart">
                  <i class="fas fa-shopping-bag"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default Header;
