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

  const handleCreate = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    if (tournamentName.trim()) {
      onAddTournament(tournamentName);
      setTournamentName('');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as='form' onSubmit={handleCreate}>
        <ModalHeader>Create a New Tournament</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Tournament Name</FormLabel>
            <Input
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
              placeholder='Enter tournament name'
              autoFocus
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button type='submit' colorScheme='teal' mr={3}>
            Create
          </Button>
          <Button type='button' variant='ghost' onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTournamentModal;
