// pages/TournamentDetails.jsx

import React from 'react';
import { Button } from '@chakra-ui/react';

const TournamentDetails = ({ tournament, onBack }) => {
  return (
    <div>
      <h1>{tournament} Details</h1>
      {/* Additional tournament details can be added here */}
      <Button mt={4} onClick={onBack} colorScheme="blue">Back to Tournaments</Button>
    </div>
  );
};

export default TournamentDetails;
