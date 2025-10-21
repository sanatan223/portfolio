import { GithubIcon, MailIcon } from '../public/icons/icon';
import '../src/assets/styles/Footer.css';
import { Colors } from '../constants/Colors';
import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="footer" style={{
      backgroundColor: `${Colors[theme].background}`,
      borderTop: `1px solid ${Colors[theme].border}`}}>
      <div className="section-inner">
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <GithubIcon theme={theme} />
          </a>
          <a href="mailto:youremail@example.com">
            <MailIcon theme={theme} />
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
      </div>
    </footer>
  )
}