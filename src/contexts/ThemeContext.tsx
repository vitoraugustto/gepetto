import { createContext, useContext, useState } from 'react';

import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material';
import { darkTheme } from '@themes/dark';
import { defaultTheme } from '@themes/default';

const ThemeContext = createContext<{
  theme: Theme;
  changeTheme: () => void;
} | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? darkTheme : defaultTheme
  );

  const changeTheme = () => {
    if (theme === defaultTheme) {
      setTheme(darkTheme);

      localStorage.setItem('theme', 'dark');
    } else {
      setTheme(defaultTheme);

      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useCustomTheme must be used within a ThemeProvider');
  }

  return context;
};
