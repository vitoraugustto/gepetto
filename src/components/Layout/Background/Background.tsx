import { Box } from '@components';

import { IBackground } from './Background.types';

export const Background: React.FC<IBackground> = ({ children }) => {
  return (
    <Box py="24px" px="12%" backgroundColor="#eef7f4" minHeight={'100vh'}>
      <>{children}</>
    </Box>
  );
};
