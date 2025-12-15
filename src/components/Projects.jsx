import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration',
      image: '🛍️',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      image: '✓',
      tags: ['React', 'Firebase', 'Tailwind'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with authentication',
      image: '🔗',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'backend',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Real-time weather app with location-based forecasting',
      image: '⛅',
      tags: ['React', 'API', 'Chart.js'],
      category: 'frontend',
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Full-stack blogging platform with comments and categories',
      image: '📝',
      tags: ['Next.js', 'Prisma', 'PostgreSQL'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Leetcode Metric',
      description: 'Real-time web to give summary of the user',
      image: '💬',
      tags: ['React', 'Socket.io', 'Node.js'],
      category: 'fullstack',
      github: '#',
      live: '#'
    }
  ];

  const categories = ['all', 'frontend', 'backend', 'fullstack'];

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Projects</h2>

        <div className="filter-buttons" data-aos="fade-up">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {project.featured && (
                <div className="featured-badge">
                  <FiStar /> Featured
                </div>
              )}

              <div className="project-image">
                <span className="image-emoji">{project.image}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <FiGithub /> Code
                  </a>
                  <a href={project.live} className="project-link">
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
