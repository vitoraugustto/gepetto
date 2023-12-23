import { createContext, useContext, useState } from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { darkTheme } from '@themes/dark';
import { defaultTheme } from '@themes/default';

const ThemeContext = createContext({});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  const changeTheme = () => {
    if (theme === defaultTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(defaultTheme);
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

  return context;
};
