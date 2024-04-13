// pages/TournamentSelectionTable.jsx

import React from 'react';
import {
  Box, IconButton,
  Table, Thead, Tbody, Tr, Th, Td,
  useColorMode,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const TournamentSelectionTable = ({ tournaments, onTournamentSelect, onTournamentDelete }) => {
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
            <Th>Tournament Style</Th>
            <Th>Date Created</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tournaments.map(({ name, ruleset, style, dateCreated }, index) => (
            <Tr
              key={index}
              _hover={{ bg: selectionHoverColor, cursor: 'pointer' }}
              onClick={() => onTournamentSelect(name)}
            >
              <Td>{name}</Td>
              <Td>{ruleset}</Td>
              <Td>{style}</Td>
              <Td>{new Date(dateCreated).toLocaleString()}</Td>
              <Td>
                <IconButton
                  icon={<CloseIcon />}
                  size="sm"
                  colorScheme="red"
                  aria-label="Delete Tournament"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering onTournamentSelect
                    onTournamentDelete(name);
                  }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TournamentSelectionTable;
