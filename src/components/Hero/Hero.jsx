import React from "react";
import "./Hero.css";
import { hero } from "../../assets";
import Button from "../Button/Button";
import "animate.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="heading">
          A Simple Bookmark <br /> Manager
        </h1>
        <p className="text">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero__buttons">
          <Button style="primary">Get it on Chrome</Button>
          <Button style="secondary">Get it on Firefox</Button>
        </div>
      </div>
      <div className="hero__illustration">
        <img src={hero} alt="computer_screen" />
        <div className="bg-shape" />
      </div>
    </section>
  );
};

export default Hero;
