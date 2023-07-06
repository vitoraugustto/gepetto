import { Shadows, createTheme } from '@mui/material';
import { pink, purple } from '@mui/material/colors';
import { shadows } from '@mui/system';

import { black, gray } from '../colors';

export const darkTheme = createTheme({
  shadows: Array(shadows.length).fill('none') as Shadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 820,
      lg: 1200,
      xl: 1536,
    },
  },
  backgroundColor: '#1c1c1c',
  typography: {
    body1: {
      color: black[700],
      fontFamily: 'Lato',
      fontWeight: '400',
      fontSize: 16,
      letterSpacing: 0.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: '700',
      fontFamily: 'Merriweather Sans',
      letterSpacing: 1,
    },
    h1: {
      fontFamily: 'Merriweather Sans',
      fontWeight: '600',
      fontSize: 28,
      color: black[700],
    },
    h2: {
      fontFamily: 'Merriweather Sans',
      fontWeight: '600',
      fontSize: 24,
      color: black[700],
    },
    h3: {
      fontFamily: 'Merriweather Sans',
      fontWeight: '600',
      fontSize: 20,
      color: black[700],
    },
  },
  palette: {
    primary: {
      300: gray[300],
      main: gray.main,
      500: gray[500],
      600: gray[600],
      700: gray[700],
      800: gray[800],
      900: gray[900],
    },
    secondary: {
      300: pink[300],
      main: pink[400],
      500: pink[500],
      600: pink[600],
      700: pink[700],
      800: pink[800],
      900: pink[900],
    },
    neutral: {
      300: gray[300],
      main: gray.main,
      500: gray[500],
      600: gray[600],
      700: gray[700],
      800: gray[800],
      900: gray[900],
    },
  },
});
