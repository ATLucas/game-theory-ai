// App.jsx

import React from 'react';
import { Button, HStack, VStack, useColorMode } from '@chakra-ui/react';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack spacing={8} padding={8}>
      <HStack>
        <Button onClick={toggleColorMode}>
          Color Mode: {colorMode === 'light' ? 'Light' : 'Dark'}
        </Button>
      </HStack>
    </VStack>
  );
}

export default App;
