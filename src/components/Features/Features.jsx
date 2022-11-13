import React, { useState } from "react";
import "./Features.css";

const Features = () => {
  const [tab, setTab] = useState("feature-1");

  const indicator = (element) => {
    const marker = document.querySelector(".marker");
    marker.style.left = element.offsetLeft + "px";
    marker.style.width = element.offsetWidth + "px";
  };

  return (
    <section id="features">
      <div className="features__text">
        <h2 className="sub-heading">Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <menu className="features__tabMenu">
        <div className="marker" />
        <li
          onClick={(el) => {
            indicator(el.target);
            setTab("feature-1");
          }}
        >
          Simple Bookmarking
        </li>
        <li
          onClick={(el) => {
            indicator(el.target);
            setTab("feature-2");
          }}
        >
          Speedy Searching
        </li>
        <li
          onClick={(el) => {
            indicator(el.target);
            setTab("feature-3");
          }}
        >
          Easy Sharing
        </li>
      </menu>
    </section>
  );
};

export default Features;
