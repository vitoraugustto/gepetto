import React, { ChangeEvent, FocusEvent } from 'react';

export interface IInput {
  shouldFocus?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  label?: string;
  maxLength?: number;
  value: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
