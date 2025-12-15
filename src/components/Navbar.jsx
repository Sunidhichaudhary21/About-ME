import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 150; // account for navbar height
      let current = 'home';

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // navbar height buffer
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-glow"></div>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Sunidhi</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.toLowerCase()}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
            >
              <span className="nav-link-content">{item}</span>
              <span className="nav-link-underline"></span>
            </button>
          ))}
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
