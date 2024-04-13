// pages/CreateTournamentModal.jsx

// External
import React, { useEffect, useState } from 'react';
import {
  Button, FormControl, FormLabel, Input,
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter,
  NumberInput, NumberInputField, Select,
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
  const [styleParams, setStyleParams] = useState({});

  useEffect(() => {
    // Reset style parameters when the style changes
    setStyleParams({});
  }, [style]);

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
      setStyleParams({});
      onClose();
    }
  };

  const handleParamChange = (paramName, value) => {
    setStyleParams(prev => ({ ...prev, [paramName]: value }));
  };

  const renderStyleParams = () => {
    const params = TOUR_STYLES[style];
    return Object.keys(params).map(paramName => {
      const { paramName: paramKey, paramType } = params[paramName];
      return (
        <FormControl key={paramKey} mt={4}>
          <FormLabel>{paramName}</FormLabel>
          <NumberInput 
            value={styleParams[paramKey] || ''} 
            onChange={(value) => handleParamChange(paramKey, value)}
            min={paramType === 'int' ? 1 : 0.00}
            step={paramType === 'int' ? 1 : 0.01}
            precision={paramType === 'int' ? 0 : 1}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
      );
    });
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
          {renderStyleParams()}
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
