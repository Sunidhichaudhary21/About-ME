import { FiCode, FiLayers, FiDatabase } from 'react-icons/fi';

const About = () => {
  const skills = [
    {
      icon: <FiCode className="w-8 h-8 text-[#e09f3e]" />,
      title: 'Frontend Development',
      description: 'Crafting responsive, intuitive interfaces with React, Vue, HTML5, CSS3, JavaScript, and Tailwind CSS.'
    },
    {
      icon: <FiLayers className="w-8 h-8 text-[#9e2a2b]" />,
      title: 'Backend Architecture',
      description: 'Building robust, scalable server-side systems using Node.js, Express, Python, Django, and RESTful APIs.'
    },
    {
      icon: <FiDatabase className="w-8 h-8 text-[#335c67]" />,
      title: 'Database Management',
      description: 'Architecting efficient data storage solutions with MongoDB, PostgreSQL, MySQL, and Firebase.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fffcf5]" id="about">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#e09f3e]/10 border border-[#e09f3e]/20 text-[#e09f3e] font-semibold text-sm tracking-widest uppercase">
            Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#335c67] tracking-tight mb-6">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-[#9e2a2b] rounded-full opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8 text-[#335c67]/80 leading-relaxed text-lg lg:text-xl font-light" data-aos="fade-right">
            <p>
              I am a dedicated <strong className="text-[#335c67] font-semibold">Full-Stack Developer</strong> driven by a passion for crafting aesthetically striking and highly functional web applications. Leveraging deep expertise in modern web technologies, I am committed to delivering exceptional digital experiences that address complex real-world challenges with elegance and efficiency.
            </p>
            <p>
              Beyond the code, I maintain a <strong className="text-[#335c67] font-semibold">relentless pursuit of knowledge</strong>, constantly exploring emerging technologies to stay at the forefront of innovation. I champion the philosophy of writing clean, maintainable code, adhering to industry best practices to guarantee the long-term success and scalability of every project.
            </p>
            <p>
              When I am not immersed in development, I am actively contributing to the open-source community or analyzing the latest trends in web development to refine my craft.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                  {skill.icon}
                </div>
                <div className="relative z-10 flex gap-6 items-start">
                  <div className="flex-shrink-0 p-4 bg-[#fffcf5] rounded-xl group-hover:bg-[#f0f0f0] transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#335c67] mb-3 group-hover:text-[#e09f3e] transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-[#335c67]/70 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Banner */}
        <div className="w-full mt-16 md:mt-24 py-4 md:py-6 bg-[#335c67] overflow-hidden rotate-1 transform md:scale-105 border-y-2 md:border-y-4 border-[#e09f3e] shadow-lg">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-sm md:text-2xl font-bold text-white tracking-widest mx-4 md:mx-8 flex items-center gap-4 md:gap-8 uppercase">
                Available for Internship & Full-time Opportunities
                <span className="text-[#e09f3e] text-xl md:text-3xl">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
