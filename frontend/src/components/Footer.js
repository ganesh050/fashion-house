import React from "react";
import { NavLink, Link } from "react-router-dom";
import {} from "react-bootstrap";
import "./Footer.css";
// import Icon from "../components/icons";

const Footer = () => {
  return (
    <div className="footer">
      <hr/>
      <div className = "row">
        <br/>
        <div className = "col">
          <h3> Our Headquarter</h3>
          <h5><b> Fashion House </b></h5>
          <ul className = "list-unstyled">
            <li>+1 601-467-2314 </li>
            <li>34th St. Houseway,</li>
            <li>California, USA</li>
          </ul>
        </div>
        <div className = "col">
          <h5>Are you interested?</h5>
          <ul className = "list-unstyled">
            <li><NavLink to="./track"> Track your order </NavLink></li>
            <li><NavLink to="./student"> Students Discount </NavLink></li>
            <li><NavLink to="./military"> Military Discount </NavLink></li>
            <li><NavLink to="./feedback"> Feedback </NavLink></li>
          </ul>
        </div>
        <div className = "col">
          <h5>Would like to know?</h5>
          <ul className="list-unstyled">
            <li><NavLink to="./career">Career</NavLink></li>
            <li><NavLink to="./ads">Create Ads </NavLink></li>
            <li><NavLink to="./conditons"> Terms &amp; Conditions</NavLink></li>
            <li><NavLink to="./PrivacyPolicy" className = "privacy" > Privacy Policy </NavLink></li>
          </ul>
          </div>
          <div className = "col">
            <h5> Social </h5>
            <ul className = "list-unstyled">
<<<<<<< HEAD
              <li><i className= "fab fa-facebook-f"/>  Facebook</li>
=======
              <li><i className = "fab fa-facebook-f"/> Facebook</li>
>>>>>>> 09db123290a3b05fff387378fd40e543802e684a
              <li><i className= "fab fa-instagram"/> Instagram</li>
              <li><i className= "fab fa-twitter"/> Twitter</li>
              <li><i className= "fab fa-youtube"/> Youtube</li>
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
