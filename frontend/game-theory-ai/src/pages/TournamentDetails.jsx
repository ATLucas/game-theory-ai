// pages/TournamentDetails.jsx

import React from 'react';
import { Button, Flex, Box } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const TournamentDetails = ({ tournament, onBack }) => {
  return (
    <Flex direction='column' height='100%' width='100%'>
      <Box p='10px'>
        <Button onClick={onBack} colorScheme='teal' variant='ghost' size='lg'>
          <ArrowBackIcon />
        </Button>
      </Box>
      <Flex
        direction='column'
        align='center'
        flexGrow={1}
        p='10px'
        border='2px'
        borderRadius='10px'
        borderColor='gray.200'
      >
        <h1>{tournament} Details</h1>
      </Flex>
    </Flex>
  );
};

export default TournamentDetails;