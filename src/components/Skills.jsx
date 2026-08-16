import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);
  const fillsRef = useRef([]);

  const skills = [
    { name: 'Front-End Development', pct: 60 },
    { name: 'AI & ML Fundamentals', pct: 70 },
    { name: 'Python', pct: 75 },
    { name: 'Data Analysis', pct: 65 },
  ];

  const techs = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Python',
    'Machine Learning', 'Deep Learning', 'TensorFlow',
    'LangChain', 'SQL', 'Git', 'Vite',
  ];

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    const barObs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animate'); }),
      { threshold: 0.3 }
    );
    sectionRef.current?.querySelectorAll('.skill-fill').forEach(el => barObs.observe(el));

    return () => { revealObs.disconnect(); barObs.disconnect(); };
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
      </div>

      <div className="skills-container">
        <div>
          <p style={{ fontSize: '0.75rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2rem' }} className="reveal">
            Proficiency
          </p>
          {skills.map((skill, i) => (
            <div className="skill-item reveal" key={i}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.pct}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  ref={el => fillsRef.current[i] = el}
                  style={{ width: `${skill.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <p style={{ fontSize: '0.75rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2rem' }} className="reveal">
            Technologies
          </p>
          <div className="tech-grid">
            {techs.map((t, i) => (
              <div key={i} className="tech-tag reveal">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
