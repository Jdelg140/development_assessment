import { Box, Button, Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useStyles } from './styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const UploadComp = () => {
  const { root, borderBox, dropBox } = useStyles;
  return (
    <Box sx={root}>
      <Box>
        <h4 style={{ color: '#003366' }}>Select a manifest that you'd like to import</h4>
      </Box>
      <Box sx={borderBox}>
        <Box sx={dropBox}>
          <h5 style={{ color: '#003366' }}>Drag and Drop here or Browse</h5>
        </Box>

        <Box>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
