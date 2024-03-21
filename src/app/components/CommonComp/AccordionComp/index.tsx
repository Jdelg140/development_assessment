import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { AccordionProps } from '@/app/types/accordionComp';

export const AccordionComp = ({ title, detailsItem }: AccordionProps) => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ padding: '0.3'}}
        >
          <h5 style={{ color: '#003366' }}> {title}</h5>
        </AccordionSummary>
        <AccordionDetails>{detailsItem}</AccordionDetails>
      </Accordion>
    </Box>
  );
};
