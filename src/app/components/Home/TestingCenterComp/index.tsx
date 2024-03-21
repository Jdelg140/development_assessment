'use client';

import { Box } from '@mui/material';
import { useStyles } from './styles';
import { AccordionComp } from '../../CommonComp/AccordionComp';
import { ACCORDION_CLIENT_DETAILS, ACCORDION_CLIENT_TITLE } from '@/app/constants/accordionConstants';

export const TestingCenterComp = () => {
  const { root } = useStyles;
  return (
    <Box sx={root}>
      {ACCORDION_CLIENT_TITLE.map((title, index) => (
        <AccordionComp
          key={index}
          title={title}
          detailsItem={ACCORDION_CLIENT_DETAILS[index]}
        ></AccordionComp>
      ))}
    </Box>
  );
};
