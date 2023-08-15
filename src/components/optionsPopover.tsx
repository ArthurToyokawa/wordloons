
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';


interface OptionsPopoverProps {
  handleClose: () => void
}

export default function OptionsPopover(props: OptionsPopoverProps) {
  const {handleClose} = props;
  const [checkUpgrades, setChecked] = useState(false);

  const handleChangeUpgrades = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Options
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={
          () => {
            setAnchorEl(null);
            handleClose()
          }
        }
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <FormControlLabel
          control={
            <Switch 
              checked={checkUpgrades}
              onChange={handleChangeUpgrades}
            />
          }
          label="Include upgrades"
          labelPlacement="start"
        />
      </Popover>
    </div>
  );
}