import { Color } from '@common/types';

interface PaletteColor {
  300: Color;
  main: Color;
  500: Color;
  600: Color;
  700: Color;
  800: Color;
  900: Color;
}

export const slate: PaletteColor = {
  300: '#324B4B',
  main: '#4A6363',
  500: '#627C7B',
  600: '#7B9695',
  700: '#95B0B0',
  800: '#B0CCCB',
  900: '#CCE8E7',
};

export const red: PaletteColor = {
  300: '#93000A',
  main: '#BA1A1A',
  500: '#DE3730',
  600: '#FF5449',
  700: '#FF897D',
  800: '#FFB4AB',
  900: '#FFDAD6',
};

export const gray: PaletteColor = {
  300: '#444747',
  main: '#5B5F5F',
  500: '#747877',
  600: '#8E9191',
  700: '#A9ACAB',
  800: '#C4C7C6',
  900: '#E0E3E2',
};

export const black: PaletteColor = {
  300: '#0a0a0a',
  main: '#141414',
  500: '#1f1f1f',
  600: '#292929',
  700: '#333333',
  800: '#000000',
  900: '#000000',
};

export const white: Color = '#fff';
