import React from "react";
import {} from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="py-2 text-center font-tahoma font-weight-bold">
        &copy; {new Date().getFullYear()} FashionHouse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
