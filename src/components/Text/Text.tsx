import { Typography } from '@mui/material';

import { IText } from './Text.types';

export const Text: React.FC<IText> = ({
  align,
  fontSize,
  fontWeight,
  color,
  letterSpacing,
  lineHeight,
  fontFamily,
  variant,
  style,
  children,
}) => {
  return (
    <Typography
      sx={{ display: 'inline-block', ...style }}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      fontFamily={fontFamily}
      variant={variant}
      align={align}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
    >
      {children}
    </Typography>
  );
};
