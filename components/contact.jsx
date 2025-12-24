import React, { useState, useEffect } from "react";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  GmailIcon,
} from "../src/assets/icons/contacts-icon";
import "../src/styles/Contact.css";
import observe from '../animations/obsorveObject.js';
import { Colors } from "../constants/Colors.js";
import { useTheme } from "../context/ThemeContext.jsx";
import { SectionTitle } from "./SectionTitle.jsx";

export const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { theme } = useTheme();

  const platforms = [
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      gradient: "linear-gradient(to bottom right, #9333ea, #db2777, #f97316)",
      bgGradientdark: "linear-gradient(45deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)",
      bgGradientlight: "linear-gradient(135deg, #4c1d95, #833ab4, #fd1d1d)",
      description:
        "Follow for Upcoming content, and my life outside the software world",
      handle: "@sanatan1779",
      link: "https://www.instagram.com/sanatan1779/",
    },
    {
      name: "GitHub",
      icon: <GithubIcon />,
      gradient: "linear-gradient(to bottom right, #374151, #111827)",
      bgGradientdark: "linear-gradient(135deg, #f6f8fa, #e1e4e8, #d1d5da)",
      bgGradientlight: "linear-gradient(135deg, #0d1117, #161b22, #30363d)",
      description:
        "Explore my open-source projects, code repositories, and contributions",
      handle: "github.com/sanatan223",
      link: "https://github.com/sanatan223",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon />,
      gradient: "linear-gradient(to bottom right, #2563eb, #1e40af)",
      bgGradientdark: "linear-gradient(135deg, #0077b5, #00a0dc, #ffffff)",
      bgGradientlight: "linear-gradient(135deg, #004182, #001f3f)",
      description:
        "Connect professionally, view experience, and network together",
      handle: "sanatan-sethi",
      link: "https://www.linkedin.com/in/sanatan-sethi-26910b2ab/",
    },
    {
      name: "Email",
      icon: <GmailIcon />,
      gradient: "linear-gradient(to right, #ef4444, #eab308, #22c55e)",
      bgGradientdark: "linear-gradient(135deg, #ffffff, #f2f2f2, #e0e0e0)",
      bgGradientlight: "linear-gradient(135deg, #2c3e50, #000000)",
      description:
        "Send me a message for inquiries, collaborations, or just to say hi",
      handle: "ssanatansethi5@gmail.com",
      link: "mailto:ssanatansethi5@gmail.com",
    },
  ];

  useEffect(() => {
      const animationObjects = document.querySelectorAll('.animation');
      animationObjects.forEach((obj) => { observe(obj)});
  })

  return (
    <section id="contact" className="section-padding section-darker" style={{
      backgroundColor: Colors[theme].background,
  }}>
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Header */}
        <div className="contact-header">
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="contact-subtitle">
            Choose your preferred platform to connect
          </p>
        </div>

        {/* Platform Cards */}
        <div className="contact-grid">
          {platforms.map((platform, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={platform.name}
                className={`pillar-wrapper ${isHovered ? "hovered" : ""}`}
                style={{ animationDelay: `${index * 0.5}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="pillar-card animation"
                  style={{
                    background: platform[`bgGradient${theme === 'dark' ? 'light' : 'dark'}`],
                    transform: isHovered
                      ? "scale(1.05) translateY(-8px)"
                      : "scale(1)",
                    boxShadow: isHovered
                      ? "0 25px 50px -12px rgba(0,0,0,0.25)"
                      : "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    className="pillar-bg-glow"
                    style={{
                      background: platform.gradient,
                      opacity: isHovered ? 0.1 : 0,
                    }}
                  ></div>

                  <div className="pillar-content">
                    <div
                      className="icon-container"
                      style={{
                        transform: isHovered
                          ? "rotate(360deg) scale(1.1)"
                          : "rotate(0deg) scale(1)",
                      }}
                    >
                      {platform.icon}
                    </div>

                    <h3 className="platform-name" style={{color: Colors[theme].textPrimary}}>{platform.name}</h3>
                    <p
                      className="platform-handle"
                      style={{
                        color: Colors[theme].textPrimary,
                      }}
                    >
                      {platform.handle}
                    </p>
                    <p
                      className="platform-description"
                      style={{
                        color: isHovered ? Colors[theme].textSecondary : Colors[theme].textPrimary,
                      }}
                    >
                      {platform.description}
                    </p>

                    <div
                      className="button-wrapper"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered
                          ? "translateY(0)"
                          : "translateY(16px)",
                      }}
                    >
                      <button
                        className="connect-button"
                        style={{ background: platform.gradient }}
                        onClick={() => {location.href = platform.link}}
                      >
                        Connect Now
                      </button>
                    </div>
                  </div>

                  {isHovered && (
                    <>
                      <div className="particle particle-top"></div>
                      <div className="particle particle-bottom"></div>
                    </>
                  )}
                </div>

                <div
                  className="bottom-glow"
                  style={{
                    background: platform.gradient,
                    opacity: isHovered ? 0.3 : 0,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  );
};
