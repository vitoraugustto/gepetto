import { Color } from '@common/types';

export interface IText {
  children: React.ReactNode;
  align?: 'center' | 'left' | 'right' | 'justify';
  fontSize?: string | number;
  fontWeight?: '400' | '600' | '700';
  color?: Color | string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  fontFamily?: 'Lato' | 'Titillium Web';
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | undefined;
}
