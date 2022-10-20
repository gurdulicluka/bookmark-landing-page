import React, { useState } from "react";
import "./MenuButton.css";
import hamburger from "../assets/icon-hamburger.svg";
import iconX from "../assets/icon-close.svg";

const MenuButton = ({ handleToggle, isToggled }) => {
  return (
    <button onClick={handleToggle} className="navbar__menu--btn">
      <img src={isToggled ? iconX : hamburger} alt="hamburger icon" />
    </button>
  );
};

export default MenuButton;
