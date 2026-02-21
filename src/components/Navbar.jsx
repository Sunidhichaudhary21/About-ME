import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only track active section on home page
      if (location.pathname === '/') {
        const sectionIds = ['home', 'about', 'projects', 'skills', 'certifications', 'contact'];
        const scrollPos = window.scrollY + 100;

        let current = 'home';
        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (el && scrollPos >= el.offsetTop) {
            current = id;
          }
        });
        setActiveSection(current);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavigation = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        {/* Logo */}
        <div className="cursor-pointer z-50 flex items-center gap-3 group" onClick={() => handleNavigation('home')}>
          {/* SC Monogram Icon */}
          <div className="relative w-10 h-10 flex items-center justify-center bg-[#335c67] text-[#fffcf5] font-black text-lg tracking-tighter rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-[#e09f3e] group-hover:rotate-3 shadow-md">
            <span className="relative z-10">SC</span>
          </div>

          {/* Text Logo */}
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-[#335c67] tracking-tight group-hover:text-[#e09f3e] transition-colors duration-300">
              Sunidhi
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group ${activeSection === item.id ? 'text-[#e09f3e]' : 'text-[#335c67] hover:text-[#e09f3e]'
                }`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e09f3e] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activeSection === item.id ? 'opacity-100' : ''}`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#335c67] hover:text-[#e09f3e] transition-colors p-2"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#fffcf5] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`text-3xl font-black text-[#335c67] hover:text-[#e09f3e] transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
