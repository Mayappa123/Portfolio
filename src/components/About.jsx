// src/components/About.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faNodeJs,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons"; // Correct MongoDB and MySQL logos
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>My Skills</h2>
      <div className="skills">
        <div className="skill html">
          <FontAwesomeIcon icon={faHtml5} size="4x" />
          <p>HTML5</p>
        </div>
        <div className="skill css">
          <FontAwesomeIcon icon={faCss3Alt} size="4x" />
          <p>CSS3</p>
        </div>
        <div className="skill js">
          <FontAwesomeIcon icon={faJs} size="4x" />
          <p>JavaScript</p>
        </div>
        <div className="skill react">
          <FontAwesomeIcon icon={faReact} size="4x" />
          <p>React</p>
        </div>
        <div className="skill bootstrap">
          <FontAwesomeIcon icon={faBootstrap} size="4x" />
          <p>Bootstrap</p>
        </div>
        <div className="skill nodejs">
          <FontAwesomeIcon icon={faNodeJs} size="4x" />
          <p>Node.js</p>
        </div>
        <div className="skill mongodb">
          <FontAwesomeIcon icon={faLeaf} size="4x" />
          <p>MongoDB</p>
        </div>
        <div className="skill mysql">
          <FontAwesomeIcon icon={faDatabase} size="4x" />
          <p>MySQL</p>
        </div>
        <div className="skill git">
          <FontAwesomeIcon icon={faGit} size="4x" />
          <p>Git</p>
        </div>
        <div className="skill github">
          <FontAwesomeIcon icon={faGithub} size="4x" />
          <p>GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default About;
