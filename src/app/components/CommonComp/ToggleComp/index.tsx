import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const ToggleComp = () =>{
  const [click, onClick] = React.useState<string | null>('left');

  const handleClick = (event: React.MouseEvent<HTMLElement>, click: string | null) => {
    onClick(click);
  };

  return (
    <ToggleButtonGroup
      value={click}
      exclusive
      onChange={handleClick}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="Yes">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="No">
        <FormatAlignCenterIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
