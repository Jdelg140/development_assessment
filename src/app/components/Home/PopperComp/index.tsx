import * as React from 'react';
import { Button, Popper, Box } from '@mui/material';
import { AccordionComp } from '../../CommonComp/AccordionComp';
import { InputsComp } from '../InputsComp';
import { useStyles } from './styles';
import { UploadComp } from '../UploadComp';
import { English } from '@/app/locals/en';
import { TestingCenterComp } from '../TestingCenterComp';

export const PopperComp = () => {
  const { root, customPopper, titleBox, buttonBox } = useStyles;
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
          <Box>
            <AccordionComp
              title={English.AccordionTitleImport}
              detailsItem={English.AccordionDetailsImport1}
              detailsItem2={English.AccordionDetailsImport2}
              detailsItem3={English.AccordionDetailsImport3}
            />
          </Box>
          <Box>
            <UploadComp />
          </Box>
          <Box>
            <InputsComp />
          </Box>
          <Box>
            <TestingCenterComp />
          </Box>
          <Box>
            <h4 style={{ color: '#003366' }}>
              Data in the import file is correct. Please press continue to import.
            </h4>
            <Box sx={buttonBox}>
              <Button variant="contained" type="button">
                Continue Import
              </Button>
              <Button variant="contained" type="button">
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Popper>
    </Box>
  );
};
