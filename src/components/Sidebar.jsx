import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="avatar-box">
        <img src="/images/IMG_0888.png" alt="Sriram Gaja" />
      </div>
      <h1 className="name">Sriram Gaja</h1>
      <p className="title">Front-End Web Developer</p>

      <nav className="nav-menu">
        <Link to="about" spy={true} smooth={true} duration={500} className="nav-item">About</Link>
        <Link to="resume" spy={true} smooth={true} duration={500} className="nav-item">Resume</Link>
        <Link to="skills" spy={true} smooth={true} duration={500} className="nav-item">Skills</Link>
        <Link to="projects" spy={true} smooth={true} duration={500} className="nav-item">Portfolio</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} className="nav-item">Contact</Link>
      </nav>

      <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', paddingTop: '2rem' }}>
        <a href="#" className="social-link" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'white'}><FaFacebook size={24} /></a>
        <a href="#" className="social-link" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'white'}><FaTwitter size={24} /></a>
        <a href="#" className="social-link" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'white'}><FaInstagram size={24} /></a>
      </div>
    </aside>
  );
};

export default Sidebar;
