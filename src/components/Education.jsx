// src/components/Education.jsx

import React from "react";
import "../styles/Education.css";
import MyImage from "../assets/MyImage.jpg";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-item">
          <div className="logo">
            <img src={MyImage} alt="Mayappa" />
          </div>
          <div>
            <h3>Bachelor's in Mechanical Engineering</h3>
            <p>Solapur University, 2018 - 2021</p>
        
          </div>
        </div>
        <div className="education-item">
          <div className="logo">
            <img src={MyImage} alt="Mayappa" />
          </div>
          <div>
            <h3>Diploma in Mechanical Engineering</h3>
            <p>BMP Solapur, 2015 - 2018</p>
          
          </div>
        </div>
        {/* Add more education items as needed */}
      </div>
    </section>
  );
};

export default Education;
