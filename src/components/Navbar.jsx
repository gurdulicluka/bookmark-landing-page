import React, { useState, useEffect } from "react";
import { useScreen } from "../constants";
import logo from "../assets/logo-bookmark.svg";
import logoWhite from "../assets/logo-bookmark-white.svg";
import MenuButton from "./MenuButton";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import "./Navbar.css";

const menu = (
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

const menuModal = (
  <div className="mobile__menuContainer bg-blue animate__animated animate__fadeInUp">
    {menu}
    <div className="social">
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </div>
  </div>
);

const Navbar = () => {
  const { sm } = useScreen();
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  useEffect(() => {
    if (isToggled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isToggled]);

  return (
    <>
      <header className={isToggled ? "bg-blue" : ""}>
        <nav className="navbar">
          <img
            className="navbar__logo"
            src={isToggled ? logoWhite : logo}
            alt="bookmark logo"
          />
          {sm ? (
            <MenuButton isToggled={isToggled} handleToggle={handleToggle} />
          ) : (
            menu
          )}
        </nav>
        {isToggled ? menuModal : ""}
      </header>
    </>
  );
};

export default Navbar;
