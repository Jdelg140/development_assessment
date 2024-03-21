import * as React from 'react';
import { Button, Popper, Box } from '@mui/material';
import { AccordionComp } from '../../CommonComp/AccordionComp';
import { InputsComp } from '../InputsComp';
import { useStyles } from './styles';
import { UploadComp } from '../UploadComp';

export const PopperComp = () => {
  const { root, customPopper, titleBox, accordionBox } = useStyles;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box sx={root}>
      <Button aria-describedby={id} variant="contained" type="button" onClick={handleClick}>
        <h4>Upload Document</h4>
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={customPopper}>
          <Box sx={titleBox}>
            <h3 style={{ color: '#003366' }}>Document Upload</h3>
          </Box>
          <Box sx={accordionBox}>
            <AccordionComp />
          </Box>
          <Box>
            <UploadComp />
          </Box>
          <InputsComp />
        </Box>
      </Popper>
    </Box>
  );
};
