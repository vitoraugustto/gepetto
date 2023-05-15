import { ChangeEvent, FocusEvent } from 'react';

export interface IInput {
  shouldFocus?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  label?: string;
  maxLength?: number;
  value: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
