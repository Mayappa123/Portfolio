// src/components/Projects.js
import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectList = [
    {
      name: "Spotify Clone",
      description: "Description of project 1",
      link: "#",
      code: "",
    },
    {
      name: "Blog Website",
      description: "Description of project 2",
      link: "#",
      code: "",
    },
    {
      name: "TODO App",
      description: "Description of project 2",
      link: "#",
      code: "",
    },
    // Add more projects as needed
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
              <a href={project.link}>Live Link</a>
              <a href={project.code}>Source Code</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
