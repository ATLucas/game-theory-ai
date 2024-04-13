// pages/CreateTournament/TournamentStyleParamsFormControl.jsx

// External
import {
  Box, FormControl, FormLabel, NumberInput, NumberInputField,
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
  const paramsConfig = TOUR_STYLES[tournamentStyle];
  
  // Check if there are parameters to display
  if (Object.keys(paramsConfig).length === 0) {
    return null; // Don't render anything if there are no parameters
  }

  const handleParamChange = (paramName, value) => {
    setStyleParams(prev => ({ ...prev, [paramName]: value }));
    updateErrors(value, paramName);
  };

  return (
    <Box border="1px solid gray" p={4} mt={4} borderRadius="md">
      <FormControl>
        <FormLabel as='legend'>Parameters</FormLabel>
      </FormControl>
      {Object.keys(paramsConfig).map(paramName => {
        const { paramName: paramKey, paramType } = paramsConfig[paramName];
        return (
          <FormControl key={paramKey} mt={4} isInvalid={!!errors[paramKey]}>
            <FormLabel>{paramName}</FormLabel>
            <NumberInput 
              value={styleParams[paramKey] || ''} 
              onChange={(value) => handleParamChange(paramKey, value)}
              min={paramType === 'int' ? 1 : 0}
              step={paramType === 'int' ? 1 : 0.1}
              precision={paramType === 'int' ? 0 : 1}
            >
              <NumberInputField />
            </NumberInput>
            {errors[paramKey] && <p style={{ color: 'red' }}>{errors[paramKey]}</p>}
          </FormControl>
        );
      })}
    </Box>
  );
};

export default TournamentStyleParamsFormControl;