import { useEffect, useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="section-num">05</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>

      <div className="contact-wrapper">
        <div className="contact-info reveal">
          <h3 className="contact-greeting">
            Let's build something <span>extraordinary</span> together.
          </h3>
          <p className="contact-desc">
            Whether you have a project in mind, need AI integration, or just want to connect — I am always open to thoughtful conversations and new opportunities.
          </p>
          <div className="contact-detail">
            <div className="contact-detail-item">
              <span className="detail-label">Email</span>
              <a href="mailto:sriram.gaja10@gmail.com" className="detail-value" style={{ transition: 'color 0.3s' }}
                onMouseOver={e => e.target.style.color = 'var(--gold)'}
                onMouseOut={e => e.target.style.color = 'var(--off-white)'}>
                sriram.gaja10@gmail.com
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Phone</span>
              <a href="tel:+918919380456" className="detail-value" style={{ transition: 'color 0.3s' }}
                onMouseOver={e => e.target.style.color = 'var(--gold)'}
                onMouseOut={e => e.target.style.color = 'var(--off-white)'}>
                +91 8919380456
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Based In</span>
              <span className="detail-value">Bachupally, Telangana, India</span>
            </div>
          </div>
        </div>

        <div className="contact-form reveal">
          <form onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-field">
                <input type="text" className="form-input" placeholder="Full Name" required />
              </div>
              <div className="form-field">
                <input type="email" className="form-input" placeholder="Email Address" required />
              </div>
            </div>
            <div className="form-field">
              <input type="text" className="form-input" placeholder="Subject" />
            </div>
            <div className="form-field" style={{ marginTop: '1rem' }}>
              <textarea className="form-input form-textarea" placeholder="Your Message..." required />
            </div>
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
