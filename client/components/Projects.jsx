import { SectionTitle } from "./SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { Colors } from "../constants/Colors";
import { useTheme } from "../context/ThemeContext";
import '../src/assets/styles/projects.css';
import { useEffect } from "react";
import observe from '../animations/obsorveObject.js';

export const Projects = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const animationObjects = document.querySelectorAll('.animation');
    animationObjects.forEach((obj) => { observe(obj)});
  })

  const projectsData = [
    { title: 'Saathi App',
      description: 'An Mobile Application built with React-Native, TypeScript and SQL database.', 
      technologies: ['React-Native', 'TypeScript'], 
      repoLink: 'https://github.com/sanatan223/mitti.git', 
      live:'https://1drv.ms/u/c/bb242df4398a34e0/EYycl52GU3VKpWKTd7CUhJUBIxIm75dOYILG199iEtHGjQ' 
    },
    { title: 'Task Manager App', 
      description: 'A simple, intuitive task management system with real-time updates.', 
      technologies: ['React', 'Firebase', 'CSS'], 
      repoLink: 'https://github.com/sanatan223/mitti.git'
    },
    { title: 'Data Visualization Dashboard', description: 'Interactive dashboard using D3.js to display complex data sets.', technologies: ['React', 'D3.js', 'TypeScript'], repoLink: 'https://github.com/sanatan223/mitti.git' }
  ];

  return (
    <section id="projects" className="section-padding section-dark" style={{
      backgroundColor: `${Colors[theme].background}`
    }}>
      <div className="section-inner section-header">
        <SectionTitle>Projects</SectionTitle>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="max-width-limit" style={{marginTop: '3rem', textAlign: 'center' }}>
           <a href="#" className="nav-link animation" style={{
              display: 'inline-block',
              borderBottom: `1px solid ${Colors[theme].accentPrimary}`,
              paddingBottom: '0.25rem',
              color: `${Colors[theme].textPrimary}`
            }}>
            See More Projects on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};