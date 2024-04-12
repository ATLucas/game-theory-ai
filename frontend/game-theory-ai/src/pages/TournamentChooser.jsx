// pages/TournamentChooser.jsx

import React, { useState } from 'react';
import { VStack, Button, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CreateTournamentModal from './CreateTournamentModal'; // Ensure correct path
import TournamentSelectionTable from './TournamentSelectionTable'; // Ensure correct path
import TournamentDetails from './TournamentDetails'; // Ensure correct path

const TournamentChooser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);

  const addTournament = (name) => {
    setTournaments([...tournaments, name]);
  };

  const selectTournament = (name) => {
    setSelectedTournament(name);
  };

  const handleBack = () => {
    setSelectedTournament(null); // Reset the selection to show the tournament list
  };

  return (
    <VStack spacing='10' padding='10vh 40vh' height='95%' width='100%' justifyContent='space-between'>
      {selectedTournament ? (
        <TournamentDetails tournament={selectedTournament} onBack={handleBack} />
      ) : (
        <>
          <TournamentSelectionTable tournaments={tournaments} onTournamentSelect={selectTournament} />
          <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen} size='lg'>
            Add Tournament
          </Button>
          <CreateTournamentModal isOpen={isOpen} onClose={onClose} onAddTournament={addTournament} />
        </>
      )}
    </VStack>
  );
};

export default TournamentChooser;
