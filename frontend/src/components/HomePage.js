import React from "react";
import img from "../img.jpg";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div
          className="logo"
          style={{ backgroundImage: `url(${img}` }}
        ></div>
      </div>
    </div>
  );
};

export default HomePage;
