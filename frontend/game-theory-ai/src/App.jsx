// App.jsx

// External
import React from 'react';
import { Box, Button, Flex, Text, VStack, useColorMode } from '@chakra-ui/react';

// Internal
import TournamentChooser from './pages/TournamentChooser';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack width="100%" height="100%">
      <Flex
        as="header"
        width="100%"
        paddingY="2vh"
        paddingX="4"
        align="center"
      >
        <Box flex="1" justifyContent="flex-start">
          <Button onClick={toggleColorMode}>
            Color Mode: {colorMode === 'light' ? 'Light' : 'Dark'}
          </Button>
        </Box>
        <Box flex="2" textAlign="center">
          <Text fontSize="xl" fontWeight="bold">Game Theory AI</Text>
        </Box>
        <Box flex="1" />  {/* This box acts as a placeholder to maintain symmetry */}
      </Flex>
      <TournamentChooser />
    </VStack>
  );
}

export default App;
