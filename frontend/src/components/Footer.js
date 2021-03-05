import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <section class="footer--column footer--col-tandc">
	    <ul class="footer--mini-menu legal-links">
	        <li>
	            <a href="/g/terms-conditions">
	                Terms &amp; Conditions
	            </a>
          </li>
          <li>
            <a href="/g/create-ads">
              Create Ads
            </a>
          </li>
          <li>
            <a href="/g/privacy-policy">
              Privacy Policy
            </a>
          </li>
	        <li>
            Copyright &copy; 2021 FashionHouse. All rights reserved.
	        </li>
	    </ul>
    </section>
    </footer>
  );
};

export default Footer;
