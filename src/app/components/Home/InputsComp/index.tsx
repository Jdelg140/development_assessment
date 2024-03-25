import { FormControlLabel, Switch, Box } from '@mui/material';
import { useStyles } from './styles';
import { ToggleComp } from '../../CommonComp/ToggleComp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { English } from '@/app/locals/en';

export const InputsComp = () => {
  const { container, toleranceContent, toggleContainer, toggleContainerLast } = useStyles;
  return (
    <Box>
      <Box sx={container}>
        <p style={{ color: '#003366', marginBottom: '0' }}>Elapse Data Checking:</p>
        <p style={{ color: '#2bc900', marginTop: '0' }}>No Elapsed Dates!</p>
      </Box>
      <Box sx={container}>
        <p style={{ color: '#003366', marginBottom: '0' }}>Tolerance Window:</p>
        <Box sx={toleranceContent}>
          <FormControlLabel control={<Switch defaultChecked />} label="Toggle ON" />
          <AccessTimeIcon style={{ color: '#003366' }} />
          <p style={{ color: '#003366' }}>Select Tolerance Level</p>
        </Box>
      </Box>
      <Box sx={toggleContainer}>
        <p style={{ color: '#003366', marginBottom: '0' }}>
          Split schedule using social distancing?
        </p>
        <ToggleComp
          optionA={English.ToggleScheduleOptionA}
          optionB={English.ToggleScheduleOptionB}
        />
      </Box>
      <Box sx={container}>
        <p style={{ color: '#003366', marginBottom: '0' }}>Location Checking:</p>
        <p style={{ color: '#2bc900', marginTop: '0' }}>All Available!</p>
      </Box>
      <Box sx={toggleContainerLast}>
        <p style={{ color: '#003366', marginBottom: '0' }}>Client:</p>
        <ToggleComp optionA={English.ToggleClientOptionA} optionB={English.ToggleClientOptionB} />
      </Box>
    </Box>
  );
};
