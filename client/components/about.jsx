import { SectionTitle } from "./SectionTitle";
import { Colors } from "../constants/Colors";
import { useTheme } from "../context/ThemeContext";
import '../src/assets/styles/About.css';
import { useEffect } from "react";
import observe from '../animations/obsorveObject.js';
import '../animations/animations.css';

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

    return (
        <section id="about" className="section-padding section-darker" style={{
            backgroundColor: Colors[theme].background,
        }}>
            <div className="section-inner section-header">
                <SectionTitle>About Me</SectionTitle>
                <div className="about-content max-width-limit">
                    <div className="about-text animation" style={{ color: Colors[theme].textSecondary }}>
                        <p>
                            I am a <strong>passionate Front-End Developer</strong> with 5 years of experience specializing in the React ecosystem. My focus is on building highly responsive, accessible, and performant web applications. I thrive in environments where continuous learning and collaboration are key.
                        </p>
                        <p>
                            I believe good code should be clean and maintainable. Outside of coding, I enjoy contributing to open-source projects and exploring new UI/UX trends to keep my work fresh and user-centric. Let's create something amazing together!
                        </p>
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