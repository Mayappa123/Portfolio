// src/components/Education.jsx

import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>Bachelor's in Mechanical Engineering</h3>
          <p>Solapur University, 2018 - 2021</p>
          <p>
            Relevant coursework: Advanced Algorithms, Machine Learning, Data
            Science
          </p>
        </div>
        <div className="education-item">
          <h3>Diploma in Mechanical Engineering</h3>
          <p>BMP Solapur, 2015 - 2018</p>
          <p>
            Relevant coursework: Database Systems, Web Development, Software
            Engineering
          </p>
        </div>
        {/* Add more education items as needed */}
      </div>
    </section>
  );
};

export default Education;
