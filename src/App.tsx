import { ThemeProvider } from '@mui/material';
import { darkTheme } from '@themes/dark';

import './App.css';
import { Routes } from './routes';

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
};
