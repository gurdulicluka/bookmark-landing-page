import React, { useState } from "react";
import "./MenuButton.css";
import hamburgerIcon from "../assets/icon-hamburger.svg";

const MenuButton = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <button
      onClick={() => setToggle((prev) => !prev)}
      className="navbar__menu--btn"
    >
      <img src={hamburgerIcon} alt="hamburger icon" />
    </button>
  );
};

export default MenuButton;
