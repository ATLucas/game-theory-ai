// pages/CreateTournamentModal.jsx

// External
import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
} from '@chakra-ui/react';

// Internal
import { RULESETS } from '../common/rulesets';

const DEFAULT_RULESET_NAME = Object.keys(RULESETS)[0];

const CreateTournamentModal = ({ isOpen, onClose, onAddTournament }) => {
  const [tournamentName, setTournamentName] = useState('');
  const [ruleset, setRuleset] = useState(DEFAULT_RULESET_NAME);

  const handleCreate = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    if (tournamentName.trim()) {
      // Add the new tournament
      onAddTournament(tournamentName, ruleset);
      // Reset to defaults
      setTournamentName('');
      setRuleset(DEFAULT_RULESET_NAME);
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
          <FormControl mt={4}>
            <FormLabel>Ruleset</FormLabel>
            <Select value={ruleset} onChange={(e) => setRuleset(e.target.value)}>
              {Object.keys(RULESETS).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </Select>
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
