import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>
              Building beautiful web experiences with modern technologies. 
              Let's create something amazing together.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://github.com/Sunidhichaudhary21" title="GitHub" target="_blank" rel="noreferrer"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/" title="LinkedIn" target="_blank" rel="noreferrer"><FiLinkedin /></a>
              <a href="mailto:csunidhi22@gmail.com" title="Email"><FiMail /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sunidhi Chaudhary. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
