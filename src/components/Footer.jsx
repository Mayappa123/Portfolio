import React from "react";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <div className="icon">
          <a href="tel:+1234567890" className="phone">
            <CallIcon style={{ color: "#4CAF50" }} />
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
            <FacebookIcon style={{ color: "#1877F2" }} />
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
            <LinkedInIcon style={{ color: "#0077B5" }} />
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
            <GitHubIcon style={{ color: "#333" }} />
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
            <InstagramIcon style={{ color: "#E1306C" }} />
          </a>
          <span>mayappapujari</span>
        </div>
      </div>
      <p>&copy; 2024 Mayappa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
