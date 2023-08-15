
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MouseEvent, useState } from 'react';

export default function HelpPopover() {

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        HELP
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography variant='caption'>
          Data is based on patch 38.0 
        <Typography >
        </Typography>
          Tower data was taken from the bloons Wiki https://bloons.fandom.com/ and the BTD6 api https://statsnite.com/btd/api
        <Typography >
        </Typography>
          Monkey knowedge not accounted for
        <Typography >
        </Typography>
          Tower cost is based on hard mode costs
        <Typography >
        </Typography>
          Hero stats are on level 1
        <Typography >
        </Typography>
          Psi damage is set as 1
        <Typography >
        </Typography>
          Towers with global range(sniper) or that move(heli) are counted as having 999 range
        </Typography>
      </Popover>
    </div>
  );
}