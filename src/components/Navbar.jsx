import React, { useState } from "react";
import { useScreen } from "../constants";
import logo from "../assets/logo-bookmark.svg";
import MenuButton from "./MenuButton";
import "./Navbar.css";

const desktopMenu = (
  <div>
    <ul className="navbar__menu">
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
);

const Navbar = () => {
  const { sm } = useScreen();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="bookmark logo" />
      {sm ? <MenuButton handleToggle={handleToggle} /> : desktopMenu}
    </nav>
  );
};

export default Navbar;
