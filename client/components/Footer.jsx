import { GithubIcon, MailIcon } from '../src/assets/icons/icon';
import '../src/styles/Footer.css';
import { Colors } from '../constants/Colors';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from "react";
import observe from '../animations/obsorveObject.js';
import '../animations/animations.css';

export const Footer = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const animationObjects = document.querySelectorAll('.animation');
    animationObjects.forEach((obj) => { observe(obj)});
  })

  return (
    <footer className="footer" style={{
      backgroundColor: `${Colors[theme].background}`,
      borderTop: `1px solid ${Colors[theme].border}`}}>
      <div className="section-inner">
        <div className="social-links animation">
          <a href="https://github.com/sanatan223" target="_blank" rel="noopener noreferrer">
            <GithubIcon theme={theme} />
          </a>
          <a href="mailto:ssanatansethi5@gmail.com">
            <MailIcon theme={theme} />
          </a>
        </div>
        <p className="copyright animation" style={{ color: `${Colors[theme].textSecondary}` }}>
          &copy; {new Date().getFullYear()} Sanatan Sethi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}