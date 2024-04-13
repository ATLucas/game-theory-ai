// App.jsx

// External
import React, { useState } from 'react';
import { 
  Box, Button, Flex, Text, VStack, useColorMode,
} from '@chakra-ui/react';

// Internal
import TournamentChooser from './pages/TournamentChooser';
import TournamentDetails from './pages/TournamentDetails';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [ tournaments, setTournaments ] = useState([]);
  const [ selectedTournament, setSelectedTournament ] = useState(null);

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
      
      <Box padding='5vh 20vw' height='95%' width='100%' justifyContent='space-between'>
        {
          selectedTournament ? (
            <TournamentDetails tournament={selectedTournament} onBack={() => setSelectedTournament(null)} />
          ) : (
            <TournamentChooser
              tournaments={tournaments}
              setTournaments={setTournaments}
              setSelectedTournament={setSelectedTournament}
            />
          )
        }
      </Box>
    </VStack>
  );
}

export default App;
