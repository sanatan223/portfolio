import React, { useEffect, useRef } from 'react';
import { scrollToSection } from './Autoscroll';
import '../src/styles/HeroStyle.css';
import { useTheme } from '../context/ThemeContext.jsx';
import { Colors } from '../constants/Colors.ts';

export const Hero = () => {
  const { theme } = useTheme();

  const dynamicStyle = {
    '--start-color': Colors[theme].accentGradient,
    '--end-color': Colors[theme].accentPrimary,
  };

  return (
    <section id="home" className="hero-section" style={{
      backgroundColor: `${Colors[theme].background}`,
    }}>
      <div className="hero-content">
        <p className="hero-subtitle" style={{
          color: `${Colors[theme].accentPrimary}`
        }}>
          Hello, I'm
        </p>
        <h1 className="hero-title">
          <span className="gradient-text" style={dynamicStyle}>
            Sanatan Sethi
          </span>
        </h1>
        <p className="hero-description" style={{
          color: `${Colors[theme].textSecondary}`
        }}>
          Programmer by day, Learner by night.
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