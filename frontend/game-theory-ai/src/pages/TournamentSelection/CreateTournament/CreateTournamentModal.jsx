// pages/CreateTournament/CreateTournamentModal.jsx

// External
import React, { useEffect, useState } from 'react';
import {
  Button, FormControl, FormLabel, Input,
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter,
  Select,
} from '@chakra-ui/react';
import cloneDeep from 'lodash/cloneDeep';

// Internal
import TournamentStyleParamsFormControl from './TournamentStyleParamsFormControl';
import { getErrorKey } from './utils.js';
import { TOUR_RULESETS } from '../../../common/tournamentRulesets';
import { TOUR_STYLES } from '../../../common/tournamentStyles';

const DEFAULT_RULESET_NAME = Object.keys(TOUR_RULESETS)[0];
const DEFAULT_STYLE_NAME = Object.keys(TOUR_STYLES)[0];

const CreateTournamentModal = ({ existingTournaments, isOpen, onClose, setTournaments }) => {
  const [tournamentName, setTournamentName] = useState('');
  const [ruleset, setRuleset] = useState(DEFAULT_RULESET_NAME);
  const [style, setStyle] = useState(DEFAULT_STYLE_NAME);
  const [styleParams, setStyleParams] = useState({ global: {}, rounds: {} });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Reset style parameters when the style changes
    setStyleParams({ global: {}, rounds: {} });
    setErrors({});
  }, [style]);

  const handleCreate = (event) => {
    // Prevent the default form submit action
    event.preventDefault();
    if (validateForm()) {
      const safeStyleParams = cloneDeep(styleParams);
      setTournaments(prevTournaments => [...prevTournaments, {
        name: tournamentName.trim(), ruleset, style, styleParams: safeStyleParams, dateCreated: new Date(),
      }]);
      resetForm();
    }
  };

  const resetForm = () => {
    setTournamentName('');
    setRuleset(DEFAULT_RULESET_NAME);
    setStyle(DEFAULT_STYLE_NAME);
    setStyleParams({ global: {}, rounds: {} });
    setErrors({});
    onClose();
  };

  const handleTournamentNameChange = (value) => {
    setTournamentName(value);
    updateErrors(value, "tournamentName");
  };

  const tourNameErrorKey = getErrorKey("tournamentName");

  const updateErrors = (paramValue, paramKey, round = null) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      const errorKey = getErrorKey(paramKey, round);

      if (paramValue.trim() === '') {
        newErrors[errorKey] = 'This field is required';
      } else {
        delete newErrors[errorKey];
      }

      return newErrors;
    });
  };

  const validateForm = () => {
    const newErrors = {};
  
    // Check for empty name
    if (!tournamentName.trim()) {
      newErrors[tourNameErrorKey] = 'Tournament name must be specified';
    }
  
    // Check for unique name
    if (existingTournaments.some(tournament => tournament.name.trim() === tournamentName.trim())) {
      newErrors[tourNameErrorKey] = 'Tournament name must be unique';
    }

    // Check global required parameters
    Object.keys(TOUR_STYLES[style].global).forEach((paramKey) => {
      const errorKey = getErrorKey(paramKey);
      if (!styleParams.global[paramKey] || !styleParams.global[paramKey].trim()) {
        newErrors[errorKey] = 'This field is required';
      }
    });

    // Check per-round required parameters
    if (TOUR_STYLES[style]?.perRound) {
      Array.from({ length: styleParams.global.numRounds }, (_, item) => item).forEach(i => {
        Object.keys(TOUR_STYLES[style].perRound).forEach((paramKey) => {
          const errorKey = getErrorKey(paramKey, i + 1);
          const paramValue = styleParams.rounds?.[i]?.[paramKey]
          if (!paramValue || !paramValue.trim()) {
            newErrors[errorKey] = 'This field is required';
          }
        });
      });
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as='form' onSubmit={handleCreate}>
        <ModalHeader>Create a New Tournament</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={!!errors.tournamentName}>
            <FormLabel>Tournament Name</FormLabel>
            <Input
              value={tournamentName}
              onChange={(e) => handleTournamentNameChange(e.target.value)}
              placeholder='Enter tournament name'
              autoFocus
            />
            {errors[tourNameErrorKey] && <p style={{ color: 'red' }}>{errors[tourNameErrorKey]}</p>}
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
          <TournamentStyleParamsFormControl
            tournamentStyle={style}
            styleParams={styleParams}
            setStyleParams={setStyleParams}
            errors={errors}
            updateErrors={updateErrors}
          />
        </ModalBody>
        <ModalFooter>
          <Button type='submit' colorScheme='teal' mr={3} isDisabled={Object.keys(errors).length > 0}>
            Create
          </Button>
          <Button type='button' variant='ghost' onClick={resetForm}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTournamentModal;