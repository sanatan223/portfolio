import { FolderIcon, GithubIcon } from '../src/assets/icons/icon';

export const ProjectCard = ({ title, description, technologies }) => (
  <div className="project-card">
    <div className="project-header">
      <FolderIcon />
      <h3 className="project-title">{title}</h3>
    </div>
    <p className="project-description">{description}</p>
    <div className="tech-stack">
      {technologies.map((tech) => (
        <span key={tech} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>
    <div className="project-links">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
        <span className="ml-1 text-sm">Code</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm">
        Live Demo &rarr;
      </a>
    </div>
  </div>
);