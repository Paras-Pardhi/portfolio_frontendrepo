import React from "react";
import {  FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="foot-section">
      <div className="foot-container">
        {/* <h3>MERN Stack Web Developer</h3> */}
        <br />
        <div className="footer-connect-icons">
          <h4>Connect with me</h4>
          <ul>
            <li>
            <a
                   href="https://github.com/parascool"
                  target="_blank"
                  rel="noopener noreferrer"
                ><FaGithub /> Visit my GitHub</a> 
            </li>
            <li>
            <a
                  href="https://www.linkedin.com/in/paras-pardhi-976b78292"
                  target="_blank"
                  rel="noopener noreferrer"
                ><FaLinkedin/>  Visit my LinkedIn</a>
            </li>
          </ul>
        </div>
        {/* <p className="footer-quote">
          "Strive not to be a success, but rather to be of value." - Albert
          Einstein
        </p> */}
      </div>
      <p className="foot-copyright">&copy; 2025 Paras. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
