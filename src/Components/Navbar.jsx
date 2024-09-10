import React from "react";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
            <Link to="about"> About</Link>
            <Link to="services"> Services</Link>
            <Link to="contact"> Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
