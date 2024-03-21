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
          style={{ height: 'auto', padding: '0.3' }}
        >
          <h5 style={{ color: '#003366' }}> Select Import Name:</h5>
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
