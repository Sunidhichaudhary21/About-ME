import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import heroImage from '../assets/image..jpg';
import gsap from 'gsap';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Full Stack Developer';

  // Refs for GSAP
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const bgRef = useRef(null);

  // Typing Effect
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      setAnimatedText(fullText.substring(0, index));

      if (!isDeleting && index < fullText.length) {
        // Typing
        index++;
        timer = setTimeout(type, 100);
      } else if (isDeleting && index > 0) {
        // Deleting
        index--;
        timer = setTimeout(type, 50);
      } else {
        // Switch mode (Type <-> Delete)
        isDeleting = !isDeleting;
        // Pause before deleting or re-typing
        timer = setTimeout(type, isDeleting ? 2000 : 500);
      }
    };

    type();

    return () => clearTimeout(timer);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Elements
      gsap.to(".blob", {
        y: "random(-50, 50)",
        x: "random(-50, 50)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // Text Entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(".hero-title .line",
          { y: 50, opacity: 0, rotateX: -10 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.2 },
          "-=0.4"
        )
        .fromTo(".hero-desc",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(".hero-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          "-=0.6"
        )
        .fromTo(".hero-social",
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        );

      // Image Reveal
      gsap.fromTo(imageRef.current,
        { scale: 0.8, opacity: 0, rotate: -5 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: "elastic.out(1, 0.75)", delay: 0.2 }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white relative">
      {/* Background decoration */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-[#fff3b0]/40 rounded-full blur-[80px]"></div>
        <div className="blob absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#fff3b0]/30 rounded-full blur-[100px]"></div>
        <div className="blob absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-[#e09f3e]/10 rounded-full blur-[60px]"></div>
      </div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div ref={textRef} className="text-left">
          <div className="hero-title mb-6 perspective-[1000px]">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#335c67] leading-[1.1] tracking-tight">
              <div className="line">Hi, I'm</div>
              <div className="line text-transparent bg-clip-text bg-gradient-to-r from-[#9e2a2b] via-[#e09f3e] to-[#9e2a2b] bg-[200%_auto] animate-gradient">
                Sunidhi
              </div>
              <div className="line">Chaudhary</div>
            </h1>
          </div>

          <h2 className="hero-desc text-2xl md:text-3xl font-bold text-[#335c67]/80 mb-6 flex items-center gap-3 h-12">
            <span className="text-[#9e2a2b]">{animatedText}</span>
            <span className="w-[3px] h-8 bg-[#335c67] animate-pulse rounded-full"></span>
          </h2>

          <p className="hero-desc text-lg md:text-xl text-[#335c67]/70 mb-10 max-w-lg leading-relaxed font-light">
            Building <span className="text-[#e09f3e] font-medium">beautiful</span> and <span className="text-[#e09f3e] font-medium">functional</span> web experiences with modern technologies.
            Let's create something amazing together!
          </p>

          <div className="flex flex-wrap gap-5 mb-12">
            <a
              href="#projects"
              className="hero-btn group relative px-8 py-4 rounded-full bg-[#335c67] text-white font-semibold overflow-hidden shadow-xl shadow-[#335c67]/20 transition-all duration-300 hover:shadow-2xl hover:shadow-[#335c67]/40 hover:-translate-y-1"
              onMouseMove={(e) => {
                const btn = e.currentTarget;
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
              }}
            >
              <div className="absolute inset-0 bg-[#e09f3e] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
              <span className="relative flex items-center gap-3">
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </a>

            <a
              href="/Sunidhi_Chaudhary_Resume.pdf"
              download
              className="hero-btn group relative px-8 py-4 rounded-full bg-transparent border border-[#335c67]/20 text-[#335c67] font-semibold overflow-hidden hover:text-[#e09f3e] hover:border-[#e09f3e] transition-colors duration-300"
              onMouseMove={(e) => {
                const btn = e.currentTarget;
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.1, y: y * 0.1, duration: 0.3, ease: 'power2.out' });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
              }}
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-[#335c67]/5 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full origin-center"></div>
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <span className="hero-social text-[#335c67]/60 font-medium">Connect with me:</span>
            <div className="flex gap-4">
              {[
                { Icon: FiGithub, href: "https://github.com/Sunidhichaudhary21" },
                { Icon: FiLinkedin, href: "https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/" },
                { Icon: FiMail, href: "mailto:csunidhi22@gmail.com" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social w-12 h-12 flex items-center justify-center rounded-full bg-[#fffcf5] text-[#335c67] border border-[#e09f3e]/10 hover:border-[#e09f3e] hover:bg-[#e09f3e] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center lg:justify-end perspective-[2000px]">
          <div ref={imageRef} className="relative w-[350px] h-[350px] lg:w-[550px] lg:h-[550px]">
            {/* Abstract Rings */}
            <div className="absolute inset-[-40px] border border-[#e09f3e]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-[-80px] border border-[#335c67]/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Image Container */}
            <div className="absolute inset-0 bg-[#fff3b0] rounded-[3rem] rotate-3 opacity-50 transform translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-white rounded-[3rem] -rotate-3 shadow-2xl overflow-hidden border-4 border-white group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#335c67]/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              <img
                src={heroImage}
                alt="Sunidhi Chaudhary"
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
