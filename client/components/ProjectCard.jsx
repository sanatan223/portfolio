import { FolderIcon, GithubIcon } from '../public/icons/icon';
import { Colors } from '../constants/Colors';
import { useTheme } from '../context/ThemeContext';


export const ProjectCard = ({ title, description, technologies, repoLink, live }) => {
  const { theme } = useTheme();
  console.log(repoLink)
  return (
    <div className="project-card" style={{
      backgroundColor: `${Colors[theme]}.projectCardBackground`,
      border: `1px solid ${Colors[theme].border}`
    }}>
      <div className="project-header" style={{
        color: `${Colors[theme].accentPrimary}`
      }}>
        <FolderIcon />
        <h3 className="project-title" style={{
          color: `${Colors[theme].textPrimary}`
        }}>{title}</h3>
      </div>
      <p className="project-description">{description}</p>
      <div className="tech-stack">
        {technologies.map((tech) => (
          <span key={tech} className="tech-tag" style={{
            color: `${Colors[theme].secondaryText}`
          }}>
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={`${repoLink}`} target="_blank" rel="noopener noreferrer">
          <GithubIcon theme={theme} />
          <span className="ml-1 text-sm">Code</span>
        </a>
        <a href={`${live}`} target="_blank" rel="noopener noreferrer" className="text-sm">
          Live Demo &rarr;
        </a>
      </div>
    </div>
  )
}