import React from "react";

const Header = () => {
  return (
    <header className="top-nav-wrap">
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <span className="navbar-brand mb-0 h1">FASHION HOUSE</span> */}
            <a class="navbar-brand" href="/">
              FASHION HOUSE
            </a>
            <ul class="navbar-nav d-flex flex-row">
              <li class="nav-item me-3 me-lg-0 ">
                <a class="nav-link" href="/search">
                  <i class="fas fa-search"></i>
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a class="nav-link" href="/user">
                  <i class="fas fa-user"></i>
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0 ">
                <a class="nav-link" href="/cart">
                  <i class="fas fa-shopping-bag"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </header>
  );
};

export default Header;
