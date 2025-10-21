import { scrollToSection } from './Autoscroll';
import '../src/assets/styles/HeroStyle.css';
import { useTheme } from '../context/ThemeContext.jsx';
import { Colors } from '../constants/Colors.ts';

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="hero-section" style={{
      backgroundColor: `${Colors[theme].background}`,
    }}>
      <div className="hero-content">
        <p className="hero-subtitle" style={{
          backgrondColor: `${Colors[theme].accentPrimary}`
        }}>
          Hello, I'm
        </p>
        <h1 className="hero-title">
          <span className="gradient-text">
            Sanatan Sethi
          </span>
        </h1>
        <p className="hero-description" style={{
          color: `${Colors[theme].textSecondary}`
        }}>
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
  )
}