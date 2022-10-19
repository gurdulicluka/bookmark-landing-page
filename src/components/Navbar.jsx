import React from "react";
import logo from "../assets/logo-bookmark.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="bookmark logo" />
      <div>
        <ul className="navbar__items">
          <li className="navbar__item">
            <a href="Features">Features</a>
          </li>
          <li className="navbar__item">
            <a href="Pricing">Pricing</a>
          </li>
          <li className="navbar__item">
            <a href="Contact">Contact</a>
          </li>
          <li className="navbar__item">
            <a href="Login" className="loginButton">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
