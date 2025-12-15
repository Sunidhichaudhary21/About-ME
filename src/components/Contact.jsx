import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send message via WhatsApp
    const phoneNumber = '918000114849'; // Your WhatsApp number (with country code, no spaces or +)
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Let's Talk</h3>
            <p>
              Have a project in mind or want to collaborate? 
              I'd love to hear from you. Reach out and let's create something amazing together!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:csunidhi22@gmail.com">csunidhi22@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8000114849</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Vadodara, Gujarat, India</p>
                </div>
              </div>
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
              >
                <FiMail />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn submit-btn">
              Send Message <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
