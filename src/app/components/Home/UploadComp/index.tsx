import { Box, Button } from '@mui/material';
import { useStyles } from './styles';

export const UploadComp = () => {
    const { root, borderBox, dropBox } = useStyles;
  return (
    <Box sx={root}>
      <Box>
        <h4 style={{ color: '#003366' }}>Select a manifest that you'd like to import</h4>
      </Box>
      <Box sx={borderBox}>
        <Box sx={dropBox}></Box>
        <Box>
          <Button style={{ color: '#FFF', background: '#003366' }}>Upload Manifest</Button>
        </Box>
      </Box>
    </Box>
  );
};
