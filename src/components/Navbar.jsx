import React, { useState } from "react";
import { useScreen } from "../constants";
import logo from "../assets/logo-bookmark.svg";
import logoWhite from "../assets/logo-bookmark-white.svg";
import MenuButton from "./MenuButton";
// import MenuModal from "./MenuModal";
import "./Navbar.css";

const desktopMenu = (
  <menu className="navbar__menu">
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
  </menu>
);

const Navbar = () => {
  const { sm } = useScreen();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <header>
        <nav className={`navbar ${toggle ? "bg-blue" : ""}`}>
          <img
            className="navbar__logo"
            src={toggle ? logoWhite : logo}
            alt="bookmark logo"
          />
          {sm ? (
            <MenuButton isToggled={toggle} handleToggle={handleToggle} />
          ) : (
            desktopMenu
          )}
        </nav>
      </header>
      {/* TODO Mobile menu fades in beneath navbar over the other content, semi transparent */}
    </>
  );
};

export default Navbar;
