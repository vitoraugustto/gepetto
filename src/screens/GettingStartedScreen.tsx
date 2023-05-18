import { Background, Box, Button, Link, Text } from '@components';

export const GettingStartedScreen = () => {
  return (
    <Background>
      <Box style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Box gap="32px">
          <Text fontSize="72px" letterSpacing="9.5px" variant="h1">
            Gepetto
          </Text>
          <Button to="/context" text="Começar consulta médica 🤖🎉" />
        </Box>
      </Box>
    </Background>
  );
};
