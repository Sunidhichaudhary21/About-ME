import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';
import heroImage from '../assets/image..jpg';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="stars"></div>
      <div className="container hero-content">
        <div className="hero-text" data-aos="fade-up">
          <h1>
            Hi, I'm <span className="highlight">Sunidhi Chaudhary</span>
          </h1>
          <h2 className="typing-effect">
            {animatedText}
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Building beautiful and functional web experiences with modern technologies. 
            Let's create something amazing together!
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Work <FiArrowRight />
            </a>
            <a
              href="/Sunidhi_Chaudhary_Resume.pdf"
              className="btn btn-outline"
              download
            >
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Sunidhichaudhary21"
              className="social-icon"
              title="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/"
              className="social-icon"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:csunidhi22@gmail.com"
              className="social-icon"
              title="Email"
              target="_blank"
              rel="noreferrer"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-animation" data-aos="fade-left">
          <img src={heroImage} alt="Sunidhi Chaudhary" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
