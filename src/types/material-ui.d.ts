import { Color } from '@common/types';
import '@mui/material/ButtonBase';
import '@mui/material/styles';

declare module '@mui/material/ButtonBase' {
  interface ExtendButtonBase {
    to?: string;
  }
}
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: {
      300: Color;
      main: Color;
      500: Color;
      600: Color;
      700: Color;
      800: Color;
      900: Color;
    };
    neutral: {
      300: Color;
      main: Color;
      500: Color;
      600: Color;
      700: Color;
      800: Color;
      900: Color;
    };
    neutralVariant: {
      300: Color;
      main: Color;
      500: Color;
      600: Color;
      700: Color;
      800: Color;
      900: Color;
    };
  }

  interface ThemeOptions {
    backgroundColor: Color;
  }

  interface Theme {
    backgroundColor: Color;
  }

  interface PaletteOptions {
    tertiary: {
      300: Color;
      main: Color;
      500: Color;
      600: Color;
      700: Color;
      800: Color;
      900: Color;
    };
    neutral: {
      300: Color;
      main: Color;
      500: Color;
      600: Color;
      700: Color;
      800: Color;
      900: Color;
    };
    neutralVariant: {
      300: Color;
      main: Color;
      500: Color;
      600: Color;
      700: Color;
      800: Color;
      900: Color;
    };
  }
  interface PaletteColor {
    300: Color;
    main: Color;
    500: Color;
    600: Color;
    700: Color;
    800: Color;
    900: Color;
  }
}
