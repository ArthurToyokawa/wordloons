
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { Container, FormControlLabel, Switch } from '@mui/material';
import GameSettings from '../models/options';


interface OptionsPopoverProps {
  handleClose: (settings: GameSettings) => void
}

export default function OptionsPopover(props: OptionsPopoverProps) {
  const {handleClose} = props;
  const [checkUpgrades, setCheckedUpgrades] = useState(false);

  const handleChangeUpgrades = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedUpgrades(event.target.checked);
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
            handleClose({useUpgrades: checkUpgrades})
          }
        }
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Container>
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
        </Container>
      </Popover>
    </div>
  );
}