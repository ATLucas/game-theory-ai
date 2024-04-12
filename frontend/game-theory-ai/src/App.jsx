// App.jsx

import React from 'react';
import { Button, HStack, VStack, useColorMode } from '@chakra-ui/react';
import TournamentChooser from './pages/TournamentChooser'; // Import the new component

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack width="100%" height="100%" padding="1vh">
      <HStack
        height="5%"
        width="100%"
        padding="1vh"
        bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
        borderRadius="lg"
      >
        <Button onClick={toggleColorMode}>
          Color Mode: {colorMode === 'light' ? 'Light' : 'Dark'}
        </Button>
      </HStack>
      <TournamentChooser />
    </VStack>
  );
}

export default App;
