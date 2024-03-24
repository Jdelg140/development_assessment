import { FormControlLabel, Switch, Box } from '@mui/material';
import { useStyles } from './styles';
import { ToggleComp } from '../../CommonComp/ToggleComp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { English } from '@/app/locals/en';

export const InputsComp = () => {
  const { dataCheckingContainer, toleranceContainer, scheduleContainer, locationContainer, toleranceContent } =
    useStyles;
  return (
    <Box>
      <Box>
        <Box sx={dataCheckingContainer}>
          <p style={{ color: '#003366', marginBottom: '0' }}>Elapse Data Checking:</p>
          <p style={{ color: '#2bc900' }}>No Elapsed Dates!</p>
        </Box>
        <Box sx={toleranceContainer}>
          <p style={{ color: '#003366', marginBottom: '0' }}>Tolerance Window:</p>
          <Box sx={toleranceContent}>
            <FormControlLabel control={<Switch defaultChecked />} label="Toggle ON" />
            <AccessTimeIcon style={{ color: '#003366' }} />
            <p style={{ color: '#003366' }}>Select Tolerance Level</p>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={scheduleContainer}>
          <p style={{ color: '#003366', marginBottom: '0' }}>
            Split schedule using social distancing?
          </p>
          <ToggleComp
            optionA={English.ToggleScheduleOptionA}
            optionB={English.ToggleScheduleOptionB}
          />
        </Box>
        <Box sx={locationContainer}>
          <p style={{ color: '#003366', marginBottom: '0' }}>Location Checking:</p>
          <p style={{ color: '#2bc900', marginTop: '0' }}>All Available!</p>
        </Box>
        <Box>
          <p style={{ color: '#003366', marginBottom: '0' }}>Client:</p>
          <ToggleComp
            optionA={English.ToggleClientOptionA}
            optionB={English.ToggleClientOptionB}
          />
        </Box>
      </Box>
    </Box>
  );
};
