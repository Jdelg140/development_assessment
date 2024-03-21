import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Button } from '@mui/material';
import { AccordionComp } from '../AccordionComp';
import { InputsComp } from '../InputsComp';

export const PopperComp = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box>
      <Button aria-describedby={id} variant="contained" type="button" onClick={handleClick}>
        <h4>Upload Document</h4>
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          <Box>
            <h3>Document Upload</h3>
          </Box>
          <AccordionComp />
          <InputsComp />
        </Box>
      </Popper>
    </Box>
  );
};
