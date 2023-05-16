import { Background, Box, Link, Text } from '@components';

export const GettingStartedScreen = () => {
  return (
    <Background>
      <Box style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Box gap="12px">
          <Text fontSize="72px" letterSpacing="9.5px" variant="h1">
            Gepetto
          </Text>
          <Link to="/context">
            <Text
              variant="h2"
              color="blue"
              style={{ textDecoration: 'underline' }}
            >
              Começar consulta médica 🤖🎉
            </Text>
          </Link>
        </Box>
      </Box>
    </Background>
  );
};
