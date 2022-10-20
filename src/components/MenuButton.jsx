import React, { useState } from "react";
import "./MenuButton.css";
import hamburgerIcon from "../assets/icon-hamburger.svg";

const MenuButton = ({ setToggle }) => {
  return (
    <button onClick={setToggle} className="navbar__menu--btn">
      <img src={hamburgerIcon} alt="hamburger icon" />
    </button>
  );
};

export default MenuButton;
