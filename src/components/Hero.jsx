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
          <p>Full Stack Web Developer</p>
          <p>
            I'm a Web Developer with a passion for creating stunning and
            efficient websites. I specialize in front-end and back-end
            development, turning ideas into interactive and visually appealing
            web experiences. With expertise in technologies like HTML, CSS,
            JavaScript, and frameworks such as React and Bootstrap, I bring a
            comprehensive approach to every project.
          </p>
        </div>
        <div className="hero-image">
          <img src={MyImage} alt="Mayappa" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
