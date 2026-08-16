import { useEffect, useRef } from 'react';

const Resume = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const education = [
    {
      period: '2022 — 2026',
      heading: 'CMR College of Engineering & Technology',
      sub: 'B.Tech — CS & AI/ML',
      text: 'Specialized in Artificial Intelligence & Machine Learning. Projects include: AI assistant for farmers, ML Algorithm Visualizer, and Building a Search Engine using ML.'
    },
    {
      period: '2020 — 2022',
      heading: 'Government Junior College Ramagundam',
      sub: 'Intermediate — MPC',
      text: 'Mathematics, Physics, and Chemistry stream.'
    },
    {
      period: '2019 — 2020',
      heading: "Rao's English Medium High School",
      sub: 'SSC',
      text: 'Secondary School Certificate. Excelled in advanced mathematics and general sciences.'
    }
  ];

  const experience = [
    {
      period: 'Jun 2024 — Sep 2024',
      heading: 'AI & ML Virtual Internship',
      sub: 'Google for Developers',
      text: 'Applied core AI and ML concepts, algorithms, and techniques. Engaged in practical development — data processing, model training, evaluation, and deployment. Followed Google for Developers\' best practices in industry-standard frameworks.'
    }
  ];

  return (
    <section id="resume" className="section resume-bg" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">Resume</h2>
        <div className="section-line" />
      </div>

      <div className="resume-grid">
        <div>
          <p className="timeline-label reveal">Education</p>
          {education.map((item, i) => (
            <div className="timeline-item reveal" key={i}>
              <p className="timeline-period">{item.period}</p>
              <h4 className="timeline-heading">{item.heading}</h4>
              <p className="timeline-sub">{item.sub}</p>
              <p className="timeline-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="timeline-label reveal">Experience</p>
          {experience.map((item, i) => (
            <div className="timeline-item reveal" key={i}>
              <p className="timeline-period">{item.period}</p>
              <h4 className="timeline-heading">{item.heading}</h4>
              <p className="timeline-sub">{item.sub}</p>
              <p className="timeline-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
