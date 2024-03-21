import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export const AccordionComp = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h6> Select Import Name:</h6>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
