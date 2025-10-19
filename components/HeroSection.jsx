import { scrollToSection } from './Autoscroll';
import '../src/assets/styles/HeroStyle.css';

export const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-content">
      <p className="hero-subtitle">
        Hello, I'm
      </p>
      <h1 className="hero-title">
        <span className="gradient-text">
          Sanatan Sethi
        </span>
      </h1>
      <p className="hero-description">
        I build responsive and scalable web applications.
      </p>
      <div className="cta-group">
        <button
          onClick={() => scrollToSection('projects')}
          className="cta-button cta-button-primary"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="cta-button cta-button-secondary"
        >
          Get In Touch
        </button>
      </div>
    </div>
  </section>
);