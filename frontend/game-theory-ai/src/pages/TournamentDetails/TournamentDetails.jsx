// pages/TournamentDetails.jsx

import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const TournamentDetails = ({ tournament, onBack }) => {
  return (
    <Flex direction='column' height='100%' width='100%'>
      <Box p='10px'>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme='teal'
          variant='ghost'
          onClick={onBack} size='lg'
        >
          Tournament Chooser
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
        <Text>
          Tournament: <Text as="strong" display="inline">{tournament}</Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default TournamentDetails;