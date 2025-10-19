import { SectionTitle } from "./SectionTitle";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projectsData = [
    { title: 'E-Commerce Platform', description: 'Full-stack application built with React, Node.js, and MongoDB.', technologies: ['React', 'Node.js', 'MongoDB', 'Redux'] },
    { title: 'Task Manager App', description: 'A simple, intuitive task management system with real-time updates.', technologies: ['React', 'Firebase', 'CSS'] },
    { title: 'Data Visualization Dashboard', description: 'Interactive dashboard using D3.js to display complex data sets.', technologies: ['React', 'D3.js', 'TypeScript'] },
  ];

  return (
    <section id="projects" className="section-padding section-dark">
      <div className="section-inner section-header">
        <SectionTitle>Projects</SectionTitle>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="max-width-limit" style={{ marginTop: '3rem', textAlign: 'center' }}>
           <a href="#" className="nav-link" style={{ display: 'inline-block', borderBottom: '1px solid #818cf8', paddingBottom: '0.25rem' }}>
            See More Projects on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};