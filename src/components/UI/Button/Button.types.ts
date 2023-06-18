import { Color } from '@common/types';
import { SxProps } from '@mui/material';

// TODO: backgroundColor should be 'Color' instead of 'Color | string'. But I could not override 'PaletteColor.main' to type 'Color'.

export interface IButton {
  to?: string;
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  borderRadius?: number;
  minHeight?: number | string;
  maxHeight?: number | string;
  fullWidth?: boolean;
  text: string;
  backgroundColor?: Color | string;
  color?: Color;
  style?: SxProps;
  loading?: boolean;
  onClick?: () => void;
}
