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
      bgGradient: "linear-gradient(to bottom right, #faf5ff, #fce7f3)",
      description:
        "Follow for Upcoming content, and my life outside the software world",
      handle: "@sanatan1779",
      link: "https://www.instagram.com/sanatan1779/",
    },
    {
      name: "GitHub",
      icon: <GithubIcon />,
      gradient: "linear-gradient(to bottom right, #374151, #111827)",
      bgGradient: "linear-gradient(to bottom right, #f9fafb, #f1f5f9)",
      description:
        "Explore my open-source projects, code repositories, and contributions",
      handle: "github.com/sanatan223",
      link: "https://github.com/sanatan223",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon />,
      gradient: "linear-gradient(to bottom right, #2563eb, #1e40af)",
      bgGradient: "linear-gradient(to bottom right, #eff6ff, #ecfeff)",
      description:
        "Connect professionally, view experience, and network together",
      handle: "sanatan-sethi",
      link: "https://www.linkedin.com/in/sanatan-sethi-26910b2ab/",
    },
    {
      name: "Email",
      icon: <GmailIcon />,
      gradient: "linear-gradient(to right, #ef4444, #eab308, #22c55e)",
      bgGradient: "linear-gradient(to bottom right, #fef2f2, #fef9c3)",
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
                    background: platform.bgGradient,
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
                        background: platform.gradient,
                        transform: isHovered
                          ? "rotate(360deg) scale(1.1)"
                          : "rotate(0deg) scale(1)",
                      }}
                    >
                      {platform.icon}
                    </div>

                    <h3 className="platform-name">{platform.name}</h3>
                    <p
                      className="platform-handle"
                      style={{
                        background: platform.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {platform.handle}
                    </p>
                    <p
                      className="platform-description"
                      style={{
                        color: isHovered ? "#1f2937" : "#4b5563",
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
