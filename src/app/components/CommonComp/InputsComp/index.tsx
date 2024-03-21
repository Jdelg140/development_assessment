import Box from '@mui/material/Box';
import { FormControlLabel, Switch } from '@mui/material';
import { useStyles } from './styles';

export const InputsComp = () => {
  const { dataCheckingContainer, toleranceContainer,scheduleContainer, locationContainer } = useStyles;
  return (
    <Box>
      <Box>
        <Box sx={dataCheckingContainer}>
          <h6>Elapse Data Checking:</h6>
          <h6>No Elapsed Dates!</h6>
        </Box>
        <Box sx={toleranceContainer}>
          <h6>Tolerance Window:</h6>
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          <h6>Select Tolerance Level</h6>
        </Box>
      </Box>
      <Box>
        <Box sx={scheduleContainer}>
          <h6>Split schedule using social distancing?</h6>
        </Box>
        <Box sx={locationContainer}>
          <h6>Location Checking:</h6>
          <h6>All Available!</h6>
        </Box>
        <Box>
          <h6>Client:</h6>
        </Box>
      </Box>
    </Box>
  );
};
