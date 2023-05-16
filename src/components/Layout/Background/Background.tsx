import { Box } from '@components';
import { white } from '@themes/default/colors';

import { IBackground } from './Background.types';

export const Background: React.FC<IBackground> = ({ children }) => {
  return (
    <Box py="24px" px="12%" backgroundColor={white} minHeight={'100vh'}>
      <>{children}</>
    </Box>
  );
};
