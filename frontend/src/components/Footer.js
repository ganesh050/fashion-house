import React from "react";
import { Link } from "react-router-dom";
import {} from "react-bootstrap";

const Footer = () => {
  return (
    <footer name="fixed-footer">
      <div class="bg bg-custom-1 py-2 text-center">
        <br />
        <Link to="./conditons">Terms &amp; Conditions</Link>
        <Link to="./contact">Contact Us</Link>
        <Link to="./feedback">Feedback</Link>
        <Link to="./career">Career</Link>
        <Link to="./ads">Create Ads </Link>
        <Link to="./policy"> Privacy Policy </Link>
      </div>
      <div class="py-2 text-center font-tahoma font-weight-bold">
        Copyright &copy; 2021 FashionHouse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
