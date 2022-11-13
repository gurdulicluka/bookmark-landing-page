import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useScreen } from "../../utils/hooks";
import "./Navbar.css";
import { bookmark, bookmarkWhite, hamburger, close } from "../../assets";
import MobileMenu from "./MobileMenu";

const menu = (
  <menu className="navbar__menu">
    <li className="navbar__item">
      <a href="javascript:void(0)">Features</a>
    </li>
    <li className="navbar__item">
      <a href="javascript:void(0)">Pricing</a>
    </li>
    <li className="navbar__item">
      <a href="javascript:void(0)">Contact</a>
    </li>
    <li className="navbar__item">
      <a href="javascript:void(0)" className="loginButton">
        Login
      </a>
    </li>
  </menu>
);

const MenuButton = ({ handleToggle, isToggled }) => {
  return (
    <button onClick={handleToggle} className="navbar__menu--btn">
      <img src={isToggled ? close : hamburger} alt="hamburger icon" />
    </button>
  );
};

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
            src={isToggled ? bookmarkWhite : bookmark}
            alt="bookmark logo"
          />
          {sm ? (
            <MenuButton isToggled={isToggled} handleToggle={handleToggle} />
          ) : (
            menu
          )}
        </nav>
      </header>
      {isToggled &&
        createPortal(<MobileMenu />, document.getElementById("overlays"))}
    </>
  );
};

export default Navbar;
