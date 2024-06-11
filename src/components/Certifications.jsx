// src/components/Certifications.jsx

import React from "react";
import "../styles/Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-list">
        <div className="certification">
          <h3>Full Stack Web Development Course</h3>
          <button className="viewBtn">
            <a
              href="https://drive.google.com/file/d/119EJqNxr83FFy-ILk-w3o3aLANSsS4Ir/view?usp=drive_link"
              target="_blank"
            >
              View
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
