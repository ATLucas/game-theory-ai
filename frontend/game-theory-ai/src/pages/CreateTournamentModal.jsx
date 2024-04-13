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
import { TOUR_RULESETS } from '../common/tournamentRulesets';
import { TOUR_STYLES } from '../common/tournamentStyles';

const DEFAULT_RULESET_NAME = Object.keys(TOUR_RULESETS)[0];
const DEFAULT_STYLE_NAME = Object.keys(TOUR_STYLES)[0];

const CreateTournamentModal = ({ isOpen, onClose, onAddTournament }) => {
  const [tournamentName, setTournamentName] = useState('');
  const [ruleset, setRuleset] = useState(DEFAULT_RULESET_NAME);
  const [style, setStyle] = useState(DEFAULT_STYLE_NAME);

  const handleCreate = (event) => {
    // Prevent the default form submit action
    event.preventDefault();
    if (tournamentName.trim()) {
      // Add the new tournament
      onAddTournament(tournamentName, ruleset, style);
      // Reset to defaults
      setTournamentName('');
      setRuleset(DEFAULT_RULESET_NAME);
      setStyle(DEFAULT_STYLE_NAME);
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
              {Object.keys(TOUR_RULESETS).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Style</FormLabel>
            <Select value={style} onChange={(e) => setStyle(e.target.value)}>
              {Object.keys(TOUR_STYLES).map((key) => (
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
