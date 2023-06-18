import { Link } from 'react-router-dom';

import { ReactComponent as Loading } from '@assets/svgs/loading.svg';
import { Button as MuiButton } from '@mui/material';

import { IButton } from './Button.types';

export const Button: React.FC<IButton> = ({
  to,
  variant = 'contained',
  disabled = false,
  minHeight = BUTTON_MIN_HEIGHT,
  maxHeight,
  borderRadius = BUTTON_MIN_HEIGHT / 2,
  fullWidth = true,
  text,
  color,
  backgroundColor,
  loading,
  style = {},
  onClick,
}) => {
  return (
    <MuiButton
      LinkComponent={to && Link}
      to={to}
      sx={{
        transition: '0.5s',
        borderRadius: borderRadius,
        minHeight: minHeight,
        maxHeight: maxHeight,
        backgroundColor: backgroundColor,
        color: color,
        ':hover': {
          backgroundColor: backgroundColor + '8d',
        },
        ...style,
      }}
      fullWidth={fullWidth}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {loading ? <Loading width="32px" height="32px" /> : text}
    </MuiButton>
  );
};

const BUTTON_MIN_HEIGHT = 48;
