import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#335c67] text-[#fff3b0] py-10 border-t border-[#e09f3e]/20">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">Sunidhi Chaudhary</h3>
            <p className="text-[#fff3b0]/60 text-sm">
              &copy; {currentYear}. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links (Horizontal) */}
          <div className="flex gap-6 md:gap-8 flex-wrap justify-center">
            <Link to="/" className="text-sm font-medium hover:text-[#e09f3e] transition-colors">Home</Link>
            <a href="/#about" className="text-sm font-medium hover:text-[#e09f3e] transition-colors">About</a>
            <a href="/#projects" className="text-sm font-medium hover:text-[#e09f3e] transition-colors">Projects</a>
            <a href="/#skills" className="text-sm font-medium hover:text-[#e09f3e] transition-colors">Skills</a>
            <a href="/#contact" className="text-sm font-medium hover:text-[#e09f3e] transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Sunidhichaudhary21"
              target="_blank"
              rel="noreferrer"
              className="text-[#fff3b0]/80 hover:text-[#e09f3e] hover:scale-110 transition-all duration-300"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/"
              target="_blank"
              rel="noreferrer"
              className="text-[#fff3b0]/80 hover:text-[#e09f3e] hover:scale-110 transition-all duration-300"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:csunidhi22@gmail.com"
              className="text-[#fff3b0]/80 hover:text-[#e09f3e] hover:scale-110 transition-all duration-300"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
