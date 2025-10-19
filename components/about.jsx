import { SectionTitle } from "./SectionTitle";

const SkillTag = ({ children }) => (
  <span className="skill-tag">
    {children}
  </span>
);

export const About = () => {
    const skills = [
        "React", "TypeScript", "JavaScript (ES6+)", "Node.js", "Express", "CSS",
        "Next.js", "MongoDB", "PostgreSQL", "Git", "Figma", "Redux", "Zustand"
    ];

    return (
        <section id="about" className="section-padding section-darker">
            <div className="section-inner section-header">
                <SectionTitle>About Me</SectionTitle>
                <div className="about-content max-width-limit">
                    <div className="about-text">
                        <p>
                            I am a <strong>passionate Front-End Developer</strong> with 5 years of experience specializing in the React ecosystem. My focus is on building highly responsive, accessible, and performant web applications. I thrive in environments where continuous learning and collaboration are key.
                        </p>
                        <p>
                            I believe good code should be clean and maintainable. Outside of coding, I enjoy contributing to open-source projects and exploring new UI/UX trends to keep my work fresh and user-centric. Let's create something amazing together!
                        </p>
                    </div>
                    <div className="about-skills">
                        <h3 className="skills-title">Tech Stack</h3>
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