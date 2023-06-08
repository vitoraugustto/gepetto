import { Background, Box, Button, Text } from '@components';
import { useTheme } from '@mui/material';

export const GettingStartedScreen = () => {
  const theme = useTheme();

  return (
    <Background>
      <Box style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Box gap="32px">
          <Text
            fontSize="72px"
            letterSpacing="9.5px"
            variant="h1"
            color={theme.palette.primary[700]}
          >
            Gepetto
          </Text>
          <Button to="/context" text="Começar consulta médica 🤖🎉" />
        </Box>
      </Box>
    </Background>
  );
};
