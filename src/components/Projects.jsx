// src/components/Projects.jsx

import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectList = [
    {
      name: "Spotify Clone",
      description: "This clone of Spotify Website built using HTML and CSS.",
      link: "#",
      code: "",
    },
    {
      name: "Blog Website",
      description:
        "This is full stack project using node.js, express.js with EJS templates.",
      link: "#",
      code: "",
    },
    {
      name: "Todo App",
      description: "This is first project built using HTML, CSS and JS.",
      link: "#",
      code: "",
    },
    {
      name: "Gradient color generator",
      description: "This project built using HTML, CSS and JS. Random function plays crucial role to generate random color.",
      link: "#",
      code: "",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="link">
              <button type="button" className="btn">
                <a href={project.link}>Live Link</a>
              </button>
              <button type="button" className="btn">
                <a href={project.code}>Source Code</a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
