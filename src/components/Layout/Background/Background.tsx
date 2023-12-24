import { Box, Text } from '@components';
import { useCustomTheme } from '@contexts/ThemeContext';
import { useMediaQuery, useTheme } from '@mui/material';

import { IBackground } from './Background.types';

export const Background: React.FC<IBackground> = ({ children }) => {
  const theme = useTheme();
  const { changeTheme } = useCustomTheme();

  return (
    <Box
      py="24px"
      px={useMediaQuery(theme.breakpoints.down('md')) ? '2%' : '22%'}
      backgroundColor={theme.backgroundColor}
      minHeight="100vh"
    >
      <Box flexDirection="row">
        <Box onClick={changeTheme}>
          <Text
            fontFamily="Merriweather Sans"
            style={{ textDecoration: 'underline' }}
          >
            Alterar para tema&nbsp;
            {theme.palette.mode === 'light' ? 'escuro' : 'claro'}
          </Text>
        </Box>
      </Box>

      <>{children}</>
    </Box>
  );
};

// ☀
