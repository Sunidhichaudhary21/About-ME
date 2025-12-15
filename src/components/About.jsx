import { FiCode, FiLayers, FiDatabase } from 'react-icons/fi';
import './About.css';

const About = () => {
  const skills = [
    {
      icon: <FiCode />,
      title: 'Frontend',
      description: 'React, Vue, HTML5, CSS3, JavaScript, Tailwind CSS'
    },
    {
      icon: <FiLayers />,
      title: 'Backend',
      description: 'Node.js, Express, Python, Django, REST APIs'
    },
    {
      icon: <FiDatabase />,
      title: 'Database',
      description: 'MongoDB, PostgreSQL, MySQL, Firebase'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p>
              I'm a passionate full-stack developer with a love for creating beautiful, 
              functional web applications. With expertise in modern web technologies, 
              I strive to deliver exceptional digital experiences that solve real-world problems.
            </p>
            <p>
              Beyond coding, I'm continuously learning and exploring new technologies. 
              I believe in writing clean, maintainable code and following best practices 
              to ensure long-term project success.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source projects, 
              or exploring the latest web development trends.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats" data-aos="fade-up">
          <div className="stat">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
