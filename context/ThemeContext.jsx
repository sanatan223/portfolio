
import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // The actual, central state

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    console.log('Theme toggled');
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}