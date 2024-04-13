// pages/CreateTournament/CreateTournamentModal.jsx

// External
import React, { useEffect, useState } from 'react';
import {
  Button, FormControl, FormLabel, Input,
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter,
  Select,
} from '@chakra-ui/react';

// Internal
import TournamentStyleParamsFormControl from './TournamentStyleParamsFormControl';
import { TOUR_RULESETS } from '../../../common/tournamentRulesets';
import { TOUR_STYLES } from '../../../common/tournamentStyles';

const DEFAULT_RULESET_NAME = Object.keys(TOUR_RULESETS)[0];
const DEFAULT_STYLE_NAME = Object.keys(TOUR_STYLES)[0];

const CreateTournamentModal = ({ existingTournaments, isOpen, onClose, onAddTournament }) => {
  const [tournamentName, setTournamentName] = useState('');
  const [ruleset, setRuleset] = useState(DEFAULT_RULESET_NAME);
  const [style, setStyle] = useState(DEFAULT_STYLE_NAME);
  const [styleParams, setStyleParams] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Reset style parameters when the style changes
    setStyleParams({});
    setErrors({});
  }, [style]);

  const handleCreate = (event) => {
    // Prevent the default form submit action
    event.preventDefault();
    if (validateForm()) {
      onAddTournament(tournamentName.trim(), ruleset, style, styleParams);
      resetForm();
    }
  };

  const resetForm = () => {
    setTournamentName('');
    setRuleset(DEFAULT_RULESET_NAME);
    setStyle(DEFAULT_STYLE_NAME);
    setStyleParams({});
    setErrors({});
    onClose();
  };

  const handleTournamentNameChange = (value) => {
    setTournamentName(value);
    updateErrors(value, "tournamentName");
  };

  const updateErrors = (fieldValue, fieldName) => {
    if (fieldValue.trim() === '') {
      setErrors(prev => ({ ...prev, [fieldName]: 'This field is required' }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check for empty name
    if (tournamentName.trim() === '') {
      newErrors.tournamentName = 'Tournament name must be specified';
    }

    // Check for unique name
    if (existingTournaments.some((tournament) => tournament.name === tournamentName.trim())) {
      newErrors.tournamentName = 'Tournament name must be unique';
    }

    // Check for required style parameters
    Object.keys(TOUR_STYLES[style]).forEach(paramName => {
      const { paramName: paramKey } = TOUR_STYLES[style][paramName];
      if (!styleParams[paramKey] || styleParams[paramKey].trim() === '') {
        newErrors[paramKey] = 'This field is required';
      }
    });

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
            {errors.tournamentName && <p style={{ color: 'red' }}>{errors.tournamentName}</p>}
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
