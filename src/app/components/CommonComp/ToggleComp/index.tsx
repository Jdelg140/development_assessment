import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import { useStyles } from './styles';
import { ToggleProps } from '@/app/types/toggleComp';

export const ToggleComp = ({ optionA, optionB}: ToggleProps) => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const { radioButtons } = useStyles;

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        label={optionA}
        color="neutral"
        slotProps={{ input: { 'aria-label': 'A' } }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        label={optionB}
        color="neutral"
        slotProps={{ input: { 'aria-label': 'B' } }}
      />
    </Box>
  );
};
