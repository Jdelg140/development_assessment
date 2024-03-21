'use client';

import { PopperComp } from '@/app/components/Home/PopperComp/index';
import { Box } from '@mui/material';
import { useStyles } from './styles';

export const Home = () => {
  const { root } = useStyles;
  return (
    <Box sx={root}>
      <PopperComp />
    </Box>
  );
};
