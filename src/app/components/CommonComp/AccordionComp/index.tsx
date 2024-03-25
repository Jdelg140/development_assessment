import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { AccordionProps } from '@/app/types/accordionComp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useStyles } from './styles';

export const AccordionComp = ({ title, detailsItem, detailsItem2, detailsItem3, subtitle }: AccordionProps) => {
  const { accordionRow } = useStyles;
  return (
    <Box>
      <Box sx={accordionRow}>
        <h6>{subtitle}</h6>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h5 style={{ color: '#003366' }}> {title}</h5>
          </AccordionSummary>
          <AccordionDetails>{detailsItem}</AccordionDetails>
          <AccordionDetails>{detailsItem2}</AccordionDetails>
          <AccordionDetails>{detailsItem3}</AccordionDetails>
        </Accordion>
        <AccessTimeIcon style={{ color: '#003366' }} />
      </Box>
    </Box>
  );
};
