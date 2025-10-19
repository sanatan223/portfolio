import React from 'react';
import { HomeIcon, FolderIcon, UserIcon, MailIcon } from '../src/assets/icons/icon';
import { scrollToSection } from './Autoscroll';
import '../src/assets/styles/HeaderStyle.css';

export const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="logo">
        Sanatan.dev
      </h1>
      <nav className="nav-menu">
        {['Home', 'Projects', 'About', 'Contact'].map((item) => (
          <div
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="nav-link logo"
          >
            {item === 'Home' && <HomeIcon />}
            {item === 'Projects' && <FolderIcon />}
            {item === 'About' && <UserIcon />}
            {item === 'Contact' && <MailIcon />}
            <span>{item}</span>
          </div>
        ))}
      </nav>
      {/* Mobile Menu Icon Placeholder */}
      <div className="mobile-menu-icon">
        <button className="nav-link">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
        </button>
      </div>
    </div>
  </header>
);