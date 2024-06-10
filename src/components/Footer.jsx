// src/components/Footer.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <div className="icon">
          <a href="tel:+1234567890" className="phone">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <span>7522995689</span>
        </div>
        <div className="icon">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <span>Mayappa Pujari</span>
        </div>
        <div className="icon">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <span>Mayappa</span>
        </div>
        <div className="icon">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <span>Mayappa123</span>
        </div>
        <div className="icon">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <span>mayappapujari</span>
        </div>
      </div>
      <p>&copy; 2024 Mayappa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
