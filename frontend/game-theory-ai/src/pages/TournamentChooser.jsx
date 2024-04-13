// pages/TournamentChooser.jsx

import React, { useState } from 'react';
import { VStack, Button, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CreateTournamentModal from './CreateTournamentModal';
import TournamentSelectionTable from './TournamentSelectionTable';
import TournamentDetails from './TournamentDetails';
import DeleteTournamentModal from './DeleteTournamentModal';

const TournamentChooser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tournamentToDelete, setTournamentToDelete] = useState(null);

  const addTournament = (name, ruleset, style, styleParams) => {
    setTournaments([...tournaments, {
      name, ruleset, style, styleParams, dateCreated: new Date(),
    }]);
  };

  const selectTournament = (name) => {
    setSelectedTournament(name);
  };

  const handleBack = () => {
    // Reset the selection to show the tournament list
    setSelectedTournament(null);
  };

  const confirmDeleteTournament = (tournament) => {
    console.log(`Opening modal to delete tournament: ${tournament}`);
    setTournamentToDelete(tournament);
    setDeleteModalOpen(true);
  };

  const deleteTournament = () => {
    console.log(`Deleting tournament: ${tournamentToDelete}`);
    setTournaments(tournaments.filter(t => t.name !== tournamentToDelete));
    setDeleteModalOpen(false);
    setTournamentToDelete(null);
  };

  return (
    <VStack spacing='10' padding='10vh 20vw' height='95%' width='100%' justifyContent='space-between'>
      {selectedTournament ? (
        <TournamentDetails tournament={selectedTournament} onBack={handleBack} />
      ) : (
        <>
          <TournamentSelectionTable
            tournaments={tournaments}
            onTournamentSelect={selectTournament}
            onTournamentDelete={confirmDeleteTournament}
          />
          <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen} size='lg'>
            Add Tournament
          </Button>
          <CreateTournamentModal
            existingTournaments={tournaments}
            isOpen={isOpen}
            onClose={onClose}
            onAddTournament={addTournament}
          />
          <DeleteTournamentModal
            isOpen={isDeleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            onDelete={deleteTournament}
            tournament={tournamentToDelete}
          />
        </>
      )}
    </VStack>
  );
};

export default TournamentChooser;
