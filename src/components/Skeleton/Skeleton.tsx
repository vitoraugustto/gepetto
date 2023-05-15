import { Skeleton as MuiSkeleton } from '@mui/material';

import { ISkeleton } from './Skeleton.types';

export const Skeleton: React.FC<ISkeleton> = ({
  width,
  height,
  variant = 'rectangular',
  animation = 'pulse',
}) => {
  return (
    <MuiSkeleton
      width={width}
      height={height}
      variant={variant}
      animation={animation}
    />
  );
};
