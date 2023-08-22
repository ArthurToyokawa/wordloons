import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { MouseEvent, useState } from "react";
import { Container, FormControlLabel, Switch } from "@mui/material";
import GameSettings from "../models/settings";

interface SettingsPopoverProps {
  handleClose: (settings: GameSettings) => void;
}

export default function SettingsPopover(props: SettingsPopoverProps) {
  const { handleClose } = props;
  const [checkUpgrades, setCheckedUpgrades] = useState(false);
  const [checkHeroes, setCheckedHeroes] = useState(true);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Settings
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
          handleClose({ useUpgrades: checkUpgrades, useHeroes: checkHeroes });
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Container>
          <FormControlLabel
            control={
              <Switch
                checked={checkUpgrades}
                onChange={(evt) => {
                  setCheckedUpgrades(evt.target.checked);
                }}
              />
            }
            label="Include upgrades"
            labelPlacement="start"
          />
          <FormControlLabel
            control={
              <Switch
                checked={checkHeroes}
                onChange={(evt) => {
                  setCheckedHeroes(evt.target.checked);
                }}
              />
            }
            label="Include Heroes"
            labelPlacement="start"
          />
        </Container>
      </Popover>
    </div>
  );
}
