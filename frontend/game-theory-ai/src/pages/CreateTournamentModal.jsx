import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

const CreateTournamentModal = ({ isOpen, onClose, onAddTournament }) => {
  const [tournamentName, setTournamentName] = useState('');

  const handleCreate = () => {
    if (tournamentName.trim()) {
      onAddTournament(tournamentName);
      setTournamentName('');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a New Tournament</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Tournament Name</FormLabel>
            <Input value={tournamentName} onChange={(e) => setTournamentName(e.target.value)} placeholder="Enter tournament name" autoFocus />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreate}>
            Create
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTournamentModal;
