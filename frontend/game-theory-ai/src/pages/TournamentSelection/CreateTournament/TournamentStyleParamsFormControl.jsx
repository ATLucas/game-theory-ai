// pages/CreateTournament/TournamentStyleParamsFormControl.jsx

// External
import {
  Box, FormControl, FormLabel, NumberInput, NumberInputField, VStack,
} from '@chakra-ui/react';

// Internal
import { getErrorKey } from './utils.js';
import { TOUR_STYLES } from '../../../common/tournamentStyles';

const TournamentStyleParamsFormControl = ({
  tournamentStyle,
  styleParams,
  setStyleParams,
  errors,
  updateErrors,
}) => {
  const styleConfig = TOUR_STYLES[tournamentStyle];
  
  // Check if there are parameters to display
  if (Object.keys(styleConfig.global).length === 0) {
    return null; // Don't render anything if there are no parameters
  }

  const handleParamChange = (paramKey, value, roundIndex = null) => {
    setStyleParams(prev => {
      const newParams = { ...prev };
      if (roundIndex === null) {
        // Handle global parameters
        newParams.global[paramKey] = value;
      } else {
        // Ensure the rounds object and specific round index are initialized
        newParams.rounds[roundIndex] = newParams.rounds[roundIndex] || {};
        newParams.rounds[roundIndex][paramKey] = value;
      }
      return newParams;
    });
    updateErrors(value, paramKey, roundIndex !== null ? roundIndex + 1 : null);
  };

  const renderParams = (paramsConfig, roundIndex = null) => {
    return Object.keys(paramsConfig).map(paramKey => {
      const { paramLabel, paramType } = paramsConfig[paramKey];
      const value = roundIndex === null ? styleParams.global[paramKey] || '' : styleParams.rounds?.[roundIndex]?.[paramKey] || '';
      const errorKey = getErrorKey(paramKey, roundIndex !== null ? roundIndex + 1 : null);
      return (
        <FormControl key={errorKey} mt={4} isInvalid={!!errors[errorKey]}>
          <FormLabel>{paramLabel}</FormLabel>
          <NumberInput
            value={value}
            onChange={value => handleParamChange(paramKey, value, roundIndex)}
            min={paramType === 'int' ? 1 : 0}
            step={paramType === 'int' ? 1 : 0.1}
            precision={paramType === 'int' ? 0 : 1}
          >
            <NumberInputField />
          </NumberInput>
          {errors[errorKey] && <p style={{ color: 'red' }}>{errors[errorKey]}</p>}
        </FormControl>
      );
    });
  };

  return (
    <VStack spacing={4} border="1px solid gray" p={4} mt={4} borderRadius="md">
      {Object.keys(styleConfig.global).length > 0 && (
        <>
          <FormControl>
            <FormLabel as='legend'>Parameters</FormLabel>
          </FormControl>
          {renderParams(styleConfig.global)}
        </>
      )}
      {styleParams.global.numRounds && Object.keys(styleConfig.perRound).length > 0 && Array.from({ length: styleParams.global.numRounds }, (_, i) => (
        <Box key={i} border="1px dashed gray" p={4} mt={4} borderRadius="md">
          <FormControl>
            <FormLabel as='legend'>{`Round ${i + 1} Parameters`}</FormLabel>
          </FormControl>
          {renderParams(styleConfig.perRound, i)}
        </Box>
      ))}
    </VStack>
  );
};

export default TournamentStyleParamsFormControl;