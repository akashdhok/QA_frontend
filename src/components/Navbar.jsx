import React from "react";
import {Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <img src="./logo.jpg" alt="Logo" />
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/register" className="btn register-btn">Register</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
