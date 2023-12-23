import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { Routes } from './routes';

export const App = () => (
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
);
