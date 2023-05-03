import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <Link
        to="/products"
        style={{ textDecoration: "none" }}
        className="btn btn-success my-3"
      >
        <h1>Products</h1>
      </Link>
    </div>
  );
};

export default Navbar;
