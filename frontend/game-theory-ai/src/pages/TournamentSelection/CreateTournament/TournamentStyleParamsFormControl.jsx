// pages/CreateTournament/TournamentStyleParamsFormControl.jsx

// External
import {
  Box, FormControl, FormLabel, NumberInput, NumberInputField, VStack,
} from '@chakra-ui/react';

// Internal
import { TOUR_STYLES } from '../../../common/tournamentStyles';

const TournamentStyleParamsFormControl = ({
  tournamentStyle,
  styleParams,
  setStyleParams,
  errors,
  updateErrors,
}) => {
  const styleConfig = TOUR_STYLES[tournamentStyle];
  const globalParamsConfig = styleConfig?.global || {};
  const perRoundParamsConfig = styleConfig?.perRound || {};
  
  // Check if there are parameters to display
  if (Object.keys(globalParamsConfig).length === 0) {
    return null; // Don't render anything if there are no parameters
  }

  const handleParamChange = (paramName, value, roundIndex = null) => {
    setStyleParams(prev => {
      const newParams = { ...prev };
      if (roundIndex === null) {
        // Handle global parameters
        newParams[paramName] = value;
      } else {
        // Handle per-round parameters
        newParams.rounds[roundIndex] = {
          ...newParams.rounds[roundIndex],
          [paramName]: value
        };
      }
      return newParams;
    });
    updateErrors(value, paramName, roundIndex);
  };

  const renderParams = (paramsConfig, roundIndex = null) => {
    return Object.keys(paramsConfig).map(paramName => {
      const { paramName: paramKey, paramType } = paramsConfig[paramName];
      const value = roundIndex === null ? styleParams[paramKey] || '' : styleParams.rounds?.[roundIndex]?.[paramKey] || '';
      return (
        <FormControl key={`${paramKey}-${roundIndex}`} mt={4} isInvalid={!!errors[paramKey]}>
          <FormLabel>{paramName}</FormLabel>
          <NumberInput
            value={value}
            onChange={value => handleParamChange(paramKey, value, roundIndex)}
            min={paramType === 'int' ? 1 : 0}
            step={paramType === 'int' ? 1 : 0.1}
            precision={paramType === 'int' ? 0 : 1}
          >
            <NumberInputField />
          </NumberInput>
          {errors[paramKey] && <p style={{ color: 'red' }}>{errors[paramKey]}</p>}
        </FormControl>
      );
    });
  };

  return (
    <VStack spacing={4} border="1px solid gray" p={4} mt={4} borderRadius="md">
      {Object.keys(globalParamsConfig).length > 0 && (
        <>
          <FormControl>
            <FormLabel as='legend'>Global Parameters</FormLabel>
          </FormControl>
          {renderParams(globalParamsConfig)}
        </>
      )}
      {styleParams.numRounds && Object.keys(perRoundParamsConfig).length > 0 && Array.from({ length: styleParams.numRounds }, (_, i) => (
        <Box key={i} border="1px dashed gray" p={4} mt={4} borderRadius="md">
          <FormControl>
            <FormLabel as='legend'>{`Round ${i + 1} Parameters`}</FormLabel>
          </FormControl>
          {renderParams(perRoundParamsConfig, i)}
        </Box>
      ))}
    </VStack>
  );
};

export default TournamentStyleParamsFormControl;