import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Button } from '@mui/material';
import { AccordionComp } from '../AccordionComp';
import { InputsComp } from '../InputsComp';
import { useStyles } from './styles';

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
            <h3>Document Upload</h3>
          </Box>
          <Box sx= {accordionBox}>
            <AccordionComp />
          </Box>
          <InputsComp />
        </Box>
      </Popper>
    </Box>
  );
};
