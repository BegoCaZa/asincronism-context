import { useState } from 'react';
import { DarkModeContext } from '../contexts/darkMode.context';

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    //cambia al opuesto del valor actual de darkMode
  };

  const value = {
    darkMode,
    toggleDarkMode
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
