import { useEffect, useRef, useState } from 'react';

const webProjects = [
  {
    title: 'Project Kisan',
    img: '/images/PJthb.png',
    github: 'https://github.com/Sriram1003/Project-Kisan',
    demo: 'https://project-kisan.netlify.app/',
    desc: 'AI-powered web app for farmers combining web tech with ML for agricultural insights.'
  },
  {
    title: 'ML Algorithm Visualizer',
    img: '/images/MLthb.png',
    github: 'https://github.com/Sriram1003/ML-Algorithm-Visualizer',
    demo: 'https://sriram1003.github.io/ML-Algorithm-Visualizer/',
    desc: 'Interactive visualizer that animates and explains core ML algorithms.'
  }
];

const aiProjects = [
  {
    title: 'Enterprise RAG Platform with Gemini and Cross-Encoder',
    img: '/images/rag.png',
    github: 'https://github.com/Sriram1003/Enterprise-Retrieval-Augmented-Generation-Platform',
    desc: 'Advanced RAG platform with Gemini and Cross-Encoder'
  },

  {
    title: 'Search Engine using ML',
    img: '/images/Picture1.png',
    github: 'https://github.com/Sriram1003/Building-search-engine-using-ML-techniques',
    desc: 'Custom search engine using TF-IDF and semantic ML retrieval techniques.'
  },
  {
    title: 'Real-Time Traffic Surveillance',
    img: '/images/RTI.jpg',
    github: 'https://github.com/Sriram1003/Real-Time-Traffic-Surveillance-and-Anomaly-Detection-Using-DL-and-CV-Techniques',
    desc: 'Deep Learning & CV system for real-time traffic anomaly detection.'
  },
  {
    title: 'Diabetes Prediction',
    img: '/images/Diabetic.jpg',
    github: 'https://github.com/Sriram1003/Diabetes_Detection_using_ML',
    desc: 'ML model for early-stage diabetes prediction from clinical datasets.'
  },
  {
    title: 'SQL Agent using LLM',
    img: '/images/SQL.webp',
    github: 'https://github.com/Sriram1003/SQL-Agent-using-LLM',
    desc: 'LangChain-powered LLM agent that translates natural language into SQL queries.'
  },
  {
    title: 'Fuel Efficiency Prediction',
    img: '/images/Fuel1.jpg',
    github: 'https://github.com/Sriram1003/Fuel-efficiency-prediction',
    desc: 'Regression ML model predicting vehicle fuel efficiency from engine parameters.'
  }
];

const MiniProjectCard = ({ project }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 14;
    card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <div
      style={{
        border: '1px solid rgba(201,165,90,0.15)',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '2px',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'none',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(201,165,90,0.45)'}
      onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(201,165,90,0.15)'}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={project.img}
          alt={project.title}
          style={{ width: '100%', height: '140px', objectFit: 'cover', filter: 'grayscale(20%) brightness(0.8)', transition: 'transform 0.4s ease' }}
          onMouseOver={e => e.target.style.transform = 'scale(1.06)'}
          onMouseOut={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(10,8,5,0.9))',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
          padding: '0.6rem', gap: '0.5rem'
        }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ width: '30px', height: '30px', border: '1px solid rgba(201,165,90,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a55a', transition: 'all 0.3s' }}
              onMouseOver={e => { e.currentTarget.style.background = '#c9a55a'; e.currentTarget.style.color = '#0a0805'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a55a'; }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              style={{ width: '30px', height: '30px', border: '1px solid rgba(201,165,90,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a55a', transition: 'all 0.3s' }}
              onMouseOver={e => { e.currentTarget.style.background = '#c9a55a'; e.currentTarget.style.color = '#0a0805'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a55a'; }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <div style={{ padding: '1rem 1.2rem 1.2rem' }}>
        <h5 style={{ fontFamily: 'Times New Roman, serif', fontStyle: 'italic', fontSize: '1rem', color: '#ffffff', marginBottom: '0.4rem' }}>{project.title}</h5>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{project.desc}</p>
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const projectsPanelRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null); // 'web' | 'ai' | null

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (type) => {
    const newActive = activeCard === type ? null : type;
    setActiveCard(newActive);

    // Smooth scroll to reveal panel after short delay
    if (newActive) {
      setTimeout(() => {
        projectsPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const showWeb = activeCard === 'web' || activeCard === 'both';
  const showAI = activeCard === 'ai' || activeCard === 'both';

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">About</h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        <div className="about-visual reveal">
          <div className="about-frame">
            <div className="about-frame-corner corner-tl" />
            <div className="about-frame-corner corner-tr" />
            <div className="about-frame-corner corner-bl" />
            <div className="about-frame-corner corner-br" />
            <img src="/images/IMG_0888.png" alt="Sriram Gaja" />
          </div>
          <div className="about-label">B.Tech CSE — AI & ML</div>
        </div>

        <div className="about-text-block">
          <p className="about-subtitle reveal">Developer & Engineer</p>
          <p className="about-description reveal">
            I'm a Computer Science student and Front-End Web Developer specializing in AI-powered applications and intelligent automation solutions. I enjoy transforming complex algorithmic challenges into scalable, user-friendly applications that deliver real-world impact.
          </p>
          <p className="about-description reveal">
            My expertise lies in building end-to-end solutions that seamlessly blend machine learning with modern web technologies — creating products that are technically robust and make a tangible difference in people's lives.
          </p>
          <div className="about-facts reveal">
            <div className="fact-item">
              <p className="fact-label">Location</p>
              <p className="fact-value">Bachupally, Telangana, India</p>
            </div>
            <div className="fact-item">
              <p className="fact-label">Birthday</p>
              <p className="fact-value">March 10, 2005</p>
            </div>
            <div className="fact-item">
              <p className="fact-label">Email</p>
              <p className="fact-value">sriram.gaja10@gmail.com</p>
            </div>
            <div className="fact-item">
              <p className="fact-label">Phone</p>
              <p className="fact-value">+91 8919380456</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Clickable Service Cards ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '6rem',
        }}
        className="reveal"
      >
        {/* Web Development Card */}
        <div
          onClick={() => handleCardClick('web')}
          style={{
            position: 'relative',
            padding: '2.5rem 2rem',
            border: `1px solid ${activeCard === 'web' ? 'rgba(201,165,90,0.7)' : 'rgba(201,165,90,0.15)'}`,
            background: activeCard === 'web' ? 'rgba(201,165,90,0.07)' : 'rgba(255,255,255,0.03)',
            cursor: 'none',
            transition: 'all 0.4s ease',
            transformStyle: 'preserve-3d',
            boxShadow: activeCard === 'web' ? '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(201,165,90,0.08)' : 'none',
          }}
          onMouseOver={e => {
            if (activeCard !== 'web') {
              e.currentTarget.style.borderColor = 'rgba(201,165,90,0.4)';
              e.currentTarget.style.transform = 'translateY(-6px) rotateX(4deg)';
            }
          }}
          onMouseOut={e => {
            if (activeCard !== 'web') {
              e.currentTarget.style.borderColor = 'rgba(201,165,90,0.15)';
              e.currentTarget.style.transform = '';
            }
          }}
        >
          <span style={{ fontSize: '3rem', fontStyle: 'italic', color: activeCard === 'web' ? 'rgba(201,165,90,0.25)' : 'rgba(201,165,90,0.1)', position: 'absolute', top: '1rem', right: '1.5rem', fontWeight: 300, fontFamily: 'Times New Roman, serif' }}>01</span>
          <h4 style={{ fontFamily: 'Times New Roman, serif', fontStyle: 'italic', fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.8rem' }}>Web Development</h4>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>Professional-grade websites built with modern tech stacks — responsive, fast, and visually compelling.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#c9a55a' }}>
              {activeCard === 'web' ? '▲ Hide Projects' : '▼ View Projects'}
            </span>
          </div>
        </div>

        {/* AI & ML Card */}
        <div
          onClick={() => handleCardClick('ai')}
          style={{
            position: 'relative',
            padding: '2.5rem 2rem',
            border: `1px solid ${activeCard === 'ai' ? 'rgba(201,165,90,0.7)' : 'rgba(201,165,90,0.15)'}`,
            background: activeCard === 'ai' ? 'rgba(201,165,90,0.07)' : 'rgba(255,255,255,0.03)',
            cursor: 'none',
            transition: 'all 0.4s ease',
            transformStyle: 'preserve-3d',
            boxShadow: activeCard === 'ai' ? '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(201,165,90,0.08)' : 'none',
          }}
          onMouseOver={e => {
            if (activeCard !== 'ai') {
              e.currentTarget.style.borderColor = 'rgba(201,165,90,0.4)';
              e.currentTarget.style.transform = 'translateY(-6px) rotateX(4deg)';
            }
          }}
          onMouseOut={e => {
            if (activeCard !== 'ai') {
              e.currentTarget.style.borderColor = 'rgba(201,165,90,0.15)';
              e.currentTarget.style.transform = '';
            }
          }}
        >
          <span style={{ fontSize: '3rem', fontStyle: 'italic', color: activeCard === 'ai' ? 'rgba(201,165,90,0.25)' : 'rgba(201,165,90,0.1)', position: 'absolute', top: '1rem', right: '1.5rem', fontWeight: 300, fontFamily: 'Times New Roman, serif' }}>02</span>
          <h4 style={{ fontFamily: 'Times New Roman, serif', fontStyle: 'italic', fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.8rem' }}>AI & ML Engineering</h4>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>End-to-end ML pipelines: data processing, model training, evaluation, and production deployment.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#c9a55a' }}>
              {activeCard === 'ai' ? '▲ Hide Projects' : '▼ View Projects'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Animated Projects Reveal Panel ── */}
      <div
        ref={projectsPanelRef}
        style={{
          overflow: 'hidden',
          maxHeight: activeCard ? '3000px' : '0px',
          opacity: activeCard ? 1 : 0,
          transition: 'max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease',
          marginTop: activeCard ? '2rem' : '0',
        }}
      >
        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(201,165,90,0.15)' }} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a55a' }}>
            {activeCard === 'web' ? 'Web Development Projects' : activeCard === 'ai' ? 'AI & ML Projects' : ''}
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(201,165,90,0.15)' }} />
        </div>

        {/* Two-column sorted grid */}
        <div style={{ display: 'grid', gridTemplateColumns: activeCard === 'web' || activeCard === 'ai' ? '1fr' : '1fr 1fr', gap: '2rem' }}>
          {/* Web Dev Column */}
          {activeCard === 'web' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {webProjects.map(p => <MiniProjectCard key={p.title} project={p} />)}
              </div>
            </div>
          )}

          {/* AI Column */}
          {activeCard === 'ai' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {aiProjects.map(p => <MiniProjectCard key={p.title} project={p} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
