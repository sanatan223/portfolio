import { SectionTitle } from "./SectionTitle";
import { Colors } from "../constants/Colors";
import { useTheme } from "../context/ThemeContext";
import '../src/styles/About.css';
import { useEffect } from "react";
import observe from '../animations/obsorveObject.js';
import '../animations/animations.css';
import profileImage from '../src/assets/images/profile-image.jpg';

const SkillTag = ({ children }) => (
  <span className="skill-tag animation" style={{
    backgroundColor: Colors[useTheme().theme].border,
    color: Colors[useTheme().theme].textSecondary
  }}>
    {children}
  </span>
);

export const About = () => {
    const { theme } = useTheme();

    const skills = [
        "React", "TypeScript", "JavaScript (ES6+)", "Node.js", "Express", "CSS",
        "React Native", "MongoDB", "SQL", "Git", "Figma", "Context API"
    ];

    useEffect(() => {
        const animationObjects = document.querySelectorAll('.animation');
        animationObjects.forEach((obj) => { observe(obj)});
    })

    const dynamicStyle = {
        "--about-bg-color": theme === 'dark' ? 'rgba(225, 225, 225, 0.3)' : 'rgba(0, 0, 0, 0.3)',
    };

    return (
        <section id="about" className="section-padding section-darker" style={{
            backgroundColor: Colors[theme].background,
        }}>
            <div className="section-inner section-header">
                <SectionTitle>About Me</SectionTitle>
                <div className="about-content max-width-limit">
                    <div className="about-intro">
                        <img src={profileImage} alt="Profile" style={dynamicStyle} className="about-image animation" />
                        <div className="about-text animation" style={{ color: Colors[theme].textSecondary }}>
                            <p>
                                I am <strong>Sanatan Sethi</strong>, a programmer who welcomes every bug that knocks on the door.
                            </p>
                            <p>
                                I am mostly an introvert but, when it comes to making things interesting no one can compete with me.
                            </p>
                        </div>
                    </div>
                    <div className="about-skills animation" style={{
                        backgroundColor: Colors[theme].sectionBackground,
                        border: `1px solid ${Colors[theme].border}`
                    }}>
                        <h3 className="skills-title" style={{
                            color: `${Colors[theme].accentPrimary}`
                        }}>Tech Stack</h3>
                        <div className="skills-list">
                            {skills.map((skill, index) => (
                                <SkillTag key={index}>{skill}</SkillTag>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};