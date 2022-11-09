import React from "react";
import "./MobileMenu.css";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";

const MobileMenu = () => {
  return (
    <div className="mobileMenu__container animate__animated animate__slideInUp">
      <menu className="mobileMenu">
        <li className="mobileMenu__item">
          <a href="javascript:void(0)">Features</a>
        </li>
        <li className="mobileMenu__item">
          <a href="javascript:void(0)">Pricing</a>
        </li>
        <li className="mobileMenu__item">
          <a href="javascript:void(0)">Contact</a>
        </li>
        <li className="mobileMenu__item modalBtn">
          <a href="javascript:void(0)" className="mobileMenu__loginBtn">
            Login
          </a>
        </li>
      </menu>
      <div className="socials">
        <a href="javascript:void(0)">
          <img src={facebook} alt="facebook_logo" />
        </a>
        <a href="javascript:void(0)">
          <img src={twitter} alt="twitter_logo" />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
