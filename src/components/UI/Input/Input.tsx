import { TextField } from '@mui/material';

import { IInput } from './Input.types';

export const Input: React.FC<IInput> = ({
  autoFocus,
  fullWidth,
  placeholder,
  label,
  maxLength,
  value,
  onFocus,
  onChange,
  onKeyPress,
  shouldFocus,
}) => {
  return (
    <TextField
      onKeyPress={onKeyPress}
      inputRef={(input) => shouldFocus && input && input.focus()}
      autoFocus={autoFocus}
      inputProps={{ maxLength: maxLength }}
      placeholder={placeholder}
      fullWidth={fullWidth}
      label={label}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
    />
  );
};
