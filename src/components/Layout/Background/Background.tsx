import { Box } from '@components';
import { useTheme } from '@mui/material';

import { IBackground } from './Background.types';

export const Background: React.FC<IBackground> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      py="24px"
      px="12%"
      backgroundColor={theme.backgroundColor}
      minHeight="100vh"
    >
      <>{children}</>
    </Box>
  );
};
