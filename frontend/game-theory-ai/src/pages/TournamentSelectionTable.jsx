// pages/TournamentSelectionTable.jsx

import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, useColorMode } from '@chakra-ui/react';

const TournamentSelectionTable = ({ tournaments, onTournamentSelect }) => {
  const { colorMode } = useColorMode();

  const selectionHoverColor = colorMode === 'light' ? 'teal.400' : 'teal.800';

  return (
    <Box
      width='100%'
      overflowY='auto'
      maxHeight='calc(100vh - 200px)'
      border='2px'
      borderRadius='10px'
      borderColor='gray.200'
    >
      <Table variant='simple' size='md'>
        <Thead>
          <Tr>
            <Th>Tournament Name</Th>
            <Th>Tournament Ruleset</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tournaments.map(({ name, ruleset }, index) => (
            <Tr
              key={index}
              _hover={{ bg: selectionHoverColor, cursor: 'pointer' }}
              onClick={() => onTournamentSelect(name)}
            >
              <Td>{name}</Td>
              <Td>{ruleset}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TournamentSelectionTable;
