// pages/TournamentDetails.jsx

import React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const TournamentDetails = ({ tournament, onBack }) => {
  return (
    <Flex direction='column' height='100%' width='100%'>
      <Box p='10px'>
        <IconButton
          onClick={onBack}
          colorScheme='teal'
          variant='ghost'
          fontSize='3vh'
          icon={<ArrowBackIcon />}
        />
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
        <Text>
          Tournament: <Text as="strong" display="inline">{tournament}</Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default TournamentDetails;