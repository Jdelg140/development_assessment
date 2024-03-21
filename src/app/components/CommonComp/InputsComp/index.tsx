import Box from '@mui/material/Box';
import { FormControlLabel, Switch } from '@mui/material';

export const InputsComp = () => {

  return (
    <Box>
      <Box>
        <Box>
          <h6>Elapse Data Checking:</h6>
          <h6>No Elapsed Dates!</h6>
        </Box>
        <Box>
          <h6>Tolerance Window:</h6>
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          <h6>Select Tolerance Level</h6>
        </Box>
      </Box>
      <Box>
        <Box>
          <h6>Split schedule using social distancing?</h6>
        </Box>
        <Box>
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
