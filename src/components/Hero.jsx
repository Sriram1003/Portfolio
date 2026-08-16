const Hero = () => {
  return (
    <section className="hero">
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Computer Science & AI / ML Engineer</p>

        <h1 className="hero-name">
          Sriram
          <span className="hero-surname">Gaja</span>
        </h1>

        <p className="hero-title">Front-End Developer &nbsp;·&nbsp; AI Engineer</p>

        <a
          href="#about"
          className="hero-cta"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Explore Portfolio</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v14M1 8l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>


    </section>
  );
};

export default Hero;
