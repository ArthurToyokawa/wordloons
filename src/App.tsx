import React, { useCallback, useEffect, useState } from "react";
import Select from "react-select";
import CustomOption from "./components/customOption";
import { Option, towerData, heroData } from "./models/data";
import SelectedOptionsTable from "./components/selectedOptionsTable";
import { Button, Grid, Typography } from "@mui/material";
import HelpPopover from "./components/helpPopover";
import OptionsPopover from "./components/optionsPopover";
import GameSettings from "./models/options";
import "./App.css";

enum GameState {
  STARTED,
  WON,
}

const App: React.FC = () => {
  const [settings, setSettings] = useState<GameSettings>({
    useUpgrades: false,
  });
  const [options, setOptions] = useState<Option[]>([...towerData, ...heroData]);
  const [correctOption, setCorrectOption] = useState<Option>();
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [gState, setGState] = useState<GameState>(GameState.STARTED);
  // TODO implement settings

  const newGame = useCallback(() => {
    const options = [...towerData, ...heroData];
    if (settings.useUpgrades) {
      //append upgrades to options
    }
    setOptions(options);
    // setCorrectOption(getRandomOption(options));
    setCorrectOption(heroData[2]);
    setSelectedOptions([]);
    setGState(GameState.STARTED);
  }, [settings]);

  useEffect(() => {
    newGame();
  }, []);

  const getRandomOption = useCallback(
    (options: Option[]): Option => {
      return options[Math.floor(Math.random() * (options.length - 1))];
    },
    [options]
  );

  const selectOption = useCallback(
    (option: Option | null | undefined) => {
      if (option == null) {
        return;
      }
      const index = options.indexOf(option);
      console.log(index);
      if (index > -1) {
        const updatedOptions = [...options];
        updatedOptions.splice(index, 1);
        setOptions(updatedOptions);
        setSelectedOptions([...selectedOptions, option]);
        if (option.value === correctOption?.value) {
          setGState(GameState.WON);
        }
      }
    },
    [options, correctOption, selectedOptions]
  );

  const handleCloseOptions = (settings: GameSettings) => {
    setSettings(settings);
  };

  return (
    <div style={{ padding: "50px 100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <HelpPopover />
        </Grid>
        <Grid item xs={3}>
          <OptionsPopover handleClose={handleCloseOptions} />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={() => newGame()}>
            New game
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Select
            onChange={(evt) => selectOption(evt)}
            options={options}
            components={{ Option: CustomOption }}
            isDisabled={gState === GameState.WON}
          />
        </Grid>
      </Grid>
      {gState === GameState.WON && (
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: "2rem" }}
            className="bigText"
            variant="h6"
          >
            YOU WON
          </Typography>
        </Grid>
      )}
      {selectedOptions.length === 0 && gState === GameState.STARTED && (
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: "2rem" }}
            className="bigText"
            variant="h6"
          >
            Select a tower to start
          </Typography>
        </Grid>
      )}
      {correctOption && selectedOptions.length > 0 && (
        <div>
          <SelectedOptionsTable
            selectedOptions={selectedOptions}
            correctOption={correctOption}
          />
        </div>
      )}
    </div>
  );
};

export default App;
