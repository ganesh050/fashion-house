import React from "react";
import { NavLink, Link } from "react-router-dom";
import {} from "react-bootstrap";
import "./Footer.css";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Icon from "../components/icons";

const Footer = () => {
  return (
    <div className="footer">
      <hr/>
      <div className = "row">
        <br />
        <div className = "col">
          <h3> Our Headquarter</h3>
          <h5> Fashion House </h5>
          <ul className = "list-unstyled">
            <li>+1 601-467-2314 </li>
            <li>34th St. Houseway,</li>
            <li> California, USA</li>
          </ul>
        </div>
        <div className = "col">
          <h5>Are you interested?</h5>
          <ul className = "list-unstyled">
            <li><Link to="./track"> Track your order </Link></li>
            <li><Link to="./student"> Students Discount </Link></li>
            <li><Link to="./military"> Military Discount </Link></li>
            <li><Link to="./feedback"> Feedback </Link></li>
          </ul>
        </div>
        <div className = "col">
          <h5>Would like to know?</h5>
          <ul className="list-unstyled">
            <li><Link to="./career">Career</Link></li>
            <li><Link to="./ads">Create Ads </Link></li>
            <li><Link to="./conditons"> Terms &amp; Conditions</Link></li>
            <li><NavLink to="./PrivacyPolicy"> Privacy Policy </NavLink></li>
          </ul>
          </div>
          <div className = "col">
            <h5> Social </h5>
            <ul className = "list-unstyled">
              <li><Icon className = "fab fa-facebook-f"/>Facebook</li>
              <li><Icon className= "fab fa-instagram"/> Instagram</li>
              <li><Icon className= "fab fa-twitter"/> Twitter</li>
              <li><Icon className= "fab fa-youtube"/> Youtube</li>
            </ul>
          </div>
      </div>
      <hr/>
      <div className="py-2 text-center font-tahoma font-weight-bold">
        Copyright &copy; {new Date().getFullYear()} FashionHouse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
