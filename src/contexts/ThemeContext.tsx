import { createContext, useContext, useState } from 'react';

import { darkTheme } from '@themes/dark';
import { defaultTheme } from '@themes/default';

const ChangeThemeContext = createContext({});

export const ChangeThemeProvider: React.FC<{ children: React.ReactNode }> = ({
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
    <ChangeThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ChangeThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ChangeThemeContext);

  return context;
};
