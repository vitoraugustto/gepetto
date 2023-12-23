import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { darkTheme } from '@themes/dark';

import './App.css';
import { Routes } from './routes';

export const App = () => (
  <MuiThemeProvider theme={darkTheme}>
    <Routes />
  </MuiThemeProvider>
);
