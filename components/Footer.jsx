import { GithubIcon, MailIcon } from '../src/assets/icons/icon';
import '../src/styles/Footer.css';
import { Colors } from '../constants/Colors';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from "react";
import observe from '../animations/obsorveObject.js';
import '../src/styles/animations.css';

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
        <p className="copyright animation" style={{ color: `${Colors[theme].textSecondary}` }}>
          &copy; {new Date().getFullYear()} Sanatan Sethi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}