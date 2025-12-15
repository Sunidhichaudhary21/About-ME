import React from 'react';
import { FiCheck } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 85 },
        { name: 'SQL', level: 90 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'AWS', level: 78 },
        { name: 'VS code ', level: 85 },
        { name: 'Webpack', level: 82 },
        { name: 'Testing', level: 85 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Skills & Expertise</h2>

        <div className="skills-container">
          {skillCategories.map((cat, catIndex) => (
            <div 
              key={catIndex} 
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={catIndex * 100}
            >
              <h3 className="category-title">{cat.category}</h3>

              <div className="skills-list">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name-wrapper">
                        <FiCheck className="check-icon" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
