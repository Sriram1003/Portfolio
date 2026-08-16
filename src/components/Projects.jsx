import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Project Kisan',
    category: 'Web development',
    img: '/images/PJthb.png',
    github: 'https://github.com/Sriram1003/Project-Kisan',
    demo: 'https://project-kisan.netlify.app/',
    desc: 'AI-powered assistant designed for farmers, combining web tech with ML to deliver real-world agricultural insights.'
  },

  {
    title: 'Enterprise RAG Platform with Gemini and Cross-Encoder',
    img: '/images/rag.png',
    github: 'https://github.com/Sriram1003/Enterprise-Retrieval-Augmented-Generation-Platform',
    desc: 'Advanced RAG platform with Gemini and Cross-Encoder'
  },

  {
    title: 'ML Algorithm Visualizer',
    category: 'Web development',
    img: '/images/MLthb.png',
    github: 'https://github.com/Sriram1003/ML-Algorithm-Visualizer',
    demo: 'https://sriram1003.github.io/ML-Algorithm-Visualizer/',
    desc: 'Interactive visualizer that animates and explains core ML algorithms for educational purposes.'
  },
  {
    title: 'Search Engine using ML',
    category: 'AI projects',
    img: '/images/Picture1.png',
    github: 'https://github.com/Sriram1003/Building-search-engine-using-ML-techniques',
    desc: 'A custom search engine built using ML retrieval techniques including TF-IDF and semantic search.'
  },
  {
    title: 'Real-Time Traffic Surveillance',
    category: 'AI projects',
    img: '/images/RTI.jpg',
    github: 'https://github.com/Sriram1003/Real-Time-Traffic-Surveillance-and-Anomaly-Detection-Using-DL-and-CV-Techniques',
    desc: 'Deep Learning & Computer Vision system for real-time traffic anomaly detection and surveillance.'
  },
  {
    title: 'Diabetes Prediction',
    category: 'AI projects',
    img: '/images/Diabetic.jpg',
    github: 'https://github.com/Sriram1003/Diabetes_Detection_using_ML',
    desc: 'Machine Learning model for early-stage diabetes prediction using clinical datasets.'
  },
  {
    title: 'SQL Agent using LLM',
    category: 'AI projects',
    img: '/images/SQL.webp',
    github: 'https://github.com/Sriram1003/SQL-Agent-using-LLM',
    desc: 'LLM-powered SQL agent using LangChain to translate natural language into database queries.'
  },
  {
    title: 'Fuel Efficiency Prediction',
    category: 'AI projects',
    img: '/images/Fuel1.jpg',
    github: 'https://github.com/Sriram1003/Fuel-efficiency-prediction',
    desc: 'Regression ML model predicting vehicle fuel efficiency from engine and design parameters.'
  }
];

const FILTERS = ['All', 'AI projects', 'Web development'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const sectionRef = useRef(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  // 3D tilt effect
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateY = ((x - cx) / cx) * 10;
    const rotateX = -((y - cy) / cy) * 10;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (card) => {
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="section-num">04</span>
        <h2 className="section-title">Portfolio</h2>
        <div className="section-line" />
      </div>

      <div className="projects-filter reveal">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p, i) => (
          <article
            key={p.title}
            className="project-card reveal"
            style={{ transition: 'transform 0.3s ease, border-color 0.4s ease, box-shadow 0.3s ease' }}
            onMouseMove={e => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={e => handleMouseLeave(e.currentTarget)}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img src={p.img} alt={p.title} className="project-card-img" />
              <div className="project-card-overlay">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-card-link" title="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-card-link" title="Live Demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <div className="project-card-body">
              <p className="project-cat">{p.category}</p>
              <h3 className="project-name">{p.title}</h3>
              {p.desc && <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.7rem', lineHeight: 1.6 }}>{p.desc}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
