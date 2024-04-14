// pages/TournamentChooser.jsx

// External
import React, { useState } from 'react';
import { Button, VStack, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

// Internal
import CreateTournamentModal from './CreateTournament/CreateTournamentModal';
import DeleteTournamentModal from './DeleteTournamentModal';
import TournamentSelectionTable from './TournamentSelectionTable';

const TournamentChooser = ({ tournaments, setTournaments, setSelectedTournament }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tournamentToDelete, setTournamentToDelete] = useState(null);

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
    <VStack spacing='2vh'>
      <TournamentSelectionTable
        tournaments={tournaments}
        onTournamentSelect={(name) => setSelectedTournament(name)}
        onTournamentDelete={confirmDeleteTournament}
      />
      <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen} size='lg'>
        Add Tournament
      </Button>
      <CreateTournamentModal
        existingTournaments={tournaments}
        isOpen={isOpen}
        onClose={onClose}
        setTournaments={setTournaments}
      />
      <DeleteTournamentModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={deleteTournament}
        tournament={tournamentToDelete}
      />
    </VStack>
  );
};

export default TournamentChooser;
