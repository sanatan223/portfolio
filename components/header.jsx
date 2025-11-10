import React, { useEffect, useState } from 'react';
import { HomeIcon, FolderIcon, UserIcon, MailIcon, MenuIcon } from '../src/assets/icons/icon';
import { scrollToSection } from './Autoscroll';
import '../src/styles/HeaderStyle.css';
import { useTheme, ThemeProvider } from '../context/ThemeContext.jsx';
import { Colors } from '../constants/Colors.ts';
import { SunIcon, MoonIcon } from '../src/assets/icons/SunMoonIcon.jsx';

export const Header = () => {
  
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu toggled:", !menuOpen);
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

        <div className={`mobile-menu-icon`}>
          <button className={`nav-link`} onClick={toggleMenu}>
            <MenuIcon />
          </button>
        </div>
        <nav className={`nav-menu ${ menuOpen ? 'menu-open' : 'menu-close'} nav-menu-${theme}`}>
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <div
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`nav-link logo ${ menuOpen ? 'menu-open' : 'menu-close' }`}
            >
              {item === 'Home' && <HomeIcon theme={theme} />}
              {item === 'Projects' && <FolderIcon theme={theme} />}
              {item === 'About' && <UserIcon theme={theme} />}
              {item === 'Contact' && <MailIcon theme={theme} />}
              <span style={{color: `${Colors[theme].textPrimary}`}}>{item}</span>
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}