import React, { useState } from 'react';
import {
  Button,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  useDisclosure
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CreateTournamentModal from './CreateTournamentModal'; // Ensure correct path

const TournamentChooser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tournaments, setTournaments] = useState([]);

  const addTournament = (name) => {
    setTournaments([...tournaments, name]);
  };

  return (
    <VStack spacing={4} height="95%" justifyContent="space-between">
      <Box width="100%" overflowY="auto" maxHeight="calc(100vh - 200px)">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Tournament Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tournaments.map((name, index) => (
              <Tr key={index}>
                <Td>{name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen} size="lg">
        Add Tournament
      </Button>

      <CreateTournamentModal isOpen={isOpen} onClose={onClose} onAddTournament={addTournament} />
    </VStack>
  );
};

export default TournamentChooser;
