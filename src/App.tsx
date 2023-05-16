import { ThemeProvider } from '@mui/material';
import { defaultTheme } from '@themes/default';

import './App.css';
import { Routes } from './routes';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
};
