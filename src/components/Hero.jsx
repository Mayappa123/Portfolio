// src/components/Hero.jsx

import React from "react";
import "../styles/Hero.css";
import MyImage from "../assets/MyImage.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi there, I'm Mayappa</h1>
          <p>I'm a Full Stack Web Developer</p>
        </div>
        <div className="hero-image">
          <img src={MyImage} alt="Mayappa" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
