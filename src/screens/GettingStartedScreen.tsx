import { Background, Box, Button, Link, Text } from '@components';

export const GettingStartedScreen = () => {
  return (
    <Background>
      <Box style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Box>
          <Text fontSize="72px" letterSpacing="9.5px" variant="h1">
            Karmen
          </Text>
          <Box gap="38px">
            <Text variant="h2" fontSize="14px">
              Inteligência Artificial Médica
            </Text>
            <Button text="Iniciar consulta" to="/context" />
          </Box>
        </Box>
      </Box>
    </Background>
  );
};
