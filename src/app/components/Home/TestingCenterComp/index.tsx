'use client';

import { Box } from '@mui/material';
import { useStyles } from './styles';
import { AccordionComp } from '../../CommonComp/AccordionComp';
import { ACCORDION_CLIENT } from '@/app/constants/accordionConstants';
import { AccordionProps } from '@/app/types/accordionComp';

export const TestingCenterComp = () => {
  const { root } = useStyles;
  return (
    <Box sx={root}>
      {ACCORDION_CLIENT.map(
        ({ title, detailsItem, detailsItem2, detailsItem3 }: AccordionProps, index) => (
          <AccordionComp
            key={index}
            title={title}
            detailsItem={detailsItem}
            detailsItem2={detailsItem2}
            detailsItem3={detailsItem3}
          ></AccordionComp>
        ),
      )}
    </Box>
  );
};
