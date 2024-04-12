// pages/TournamentSelectionTable.jsx

import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

const TournamentSelectionTable = ({ tournaments, onTournamentSelect }) => {
  return (
    <Box width="100%" overflowY="auto" maxHeight="calc(100vh - 200px)">
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>Tournament Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tournaments.map((name, index) => (
            <Tr key={index} _hover={{ bg: 'teal.800', cursor: 'pointer' }} onClick={() => onTournamentSelect(name)}>
              <Td>{name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TournamentSelectionTable;
