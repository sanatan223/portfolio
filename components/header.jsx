import React, { useEffect } from 'react';
import { HomeIcon, FolderIcon, UserIcon, MailIcon } from '../src/assets/icons/icon';
import { scrollToSection } from './Autoscroll';
import '../src/assets/styles/HeaderStyle.css';
import { useTheme, ThemeProvider } from '../context/ThemeContext.jsx';
import { Colors } from '../constants/Colors.ts';
import { SunIcon, MoonIcon } from '../src/assets/icons/SunMoonIcon.jsx';

export const Header = () => {
  
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.backgroundColor = Colors[theme].background;
  }, [theme]);

  const changeTheme = async () => {
    await toggleTheme();
  }

  return (
    <header 
      className="header" 
      style={{ 
        backgroundColor: `${Colors[theme].sectionBackground}`,
        color: `${Colors[theme].textPrimary}`,
      }}
    >
      <div className="header-content">
        <button
          onClick={changeTheme}
          className="theme-button"
          style={{backgroundColor: `${Colors[theme].accentPrimary}`}}
        >
          <div className='button-knob' style={{
            transform: `${theme == 'dark' ? 'translateX(35px)' : 'translateX(0px)'}`,
            backgroundColor: `${Colors[theme].sectionBackground}`
          }}>
            {theme == 'dark' ? (
              <MoonIcon style={{ width: '20px', height: '20px', color: '#4f46e5' }} />
            ) : (
              <SunIcon style={{ width: '20px', height: '20px', color: '#f59e0b' }} />
            )}
          </div>

          <div className="button-label" style={{
            transform: `${theme == 'dark' ? 'translateX(-35px)' : 'translateX(0px)'}`
          }}>
            {theme == 'dark' ? (
              <div>Dark</div>
            ) : (
              <div>Light</div>
            )}
          </div>
        </button>

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
              <span style={{color: `${Colors[theme].textPrimary}`}}>{item}</span>
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
  )
}