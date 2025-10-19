import { GithubIcon, MailIcon } from '../src/assets/icons/icon';

export const Footer = () => (
  <footer className="footer">
    <div className="section-inner">
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        <a href="mailto:youremail@example.com">
          <MailIcon />
        </a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
      </p>
    </div>
  </footer>
);