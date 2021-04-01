import React from 'react'
import { Link } from "react-router-dom";
const Categories = () => {
    return (
      <div>
        <div className="bg bg-custom-1 p-0  text-center font-Mshtakan">
          <br />
          <Link to="./New">New</Link>
          <Link to="./Women">Women </Link>
          <Link to="./Men"> Men </Link>
          <Link to="./Traditional">Traditional </Link>
          <Link to="./Accessories"> Accessories </Link>
          <Link to="./Clearance">Clearance </Link>
        </div>
      </div>
    );
}

export default Categories
