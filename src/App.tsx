import React, { useCallback, useState } from 'react';
import Select from 'react-select';
import CustomOption from './components/customOption'
import { Option, towerData } from './models/data';
import SelectedOptionsTable from './components/selectedOptionsTable';
import { Button, Grid, Typography } from '@mui/material';


enum GameState {
  STARTED,
  WON,
}

const App: React.FC = () => {
  
  const [options, setOptions] = useState<Option[]>(towerData)
  const [correctOption, setCorrectOption] = useState<Option>()
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])
  const [gState, setGState] = useState<GameState>(GameState.STARTED)
  // TODO implement settings

  
  const newGame = useCallback(() => {
    // get options based on settings when implemented
    setOptions(towerData)
    setCorrectOption(getRandomOption(options))
    setSelectedOptions([])
    setGState(GameState.STARTED)
  },[
    options,
    correctOption,
    selectedOptions,
    gState
  ])

  const getRandomOption = useCallback((options: Option[]): Option => {
    return options[Math.floor(Math.random() * (options.length-1))]
  },[ options ])

  const selectOption = useCallback((option: Option| null | undefined) => {
    if(option == null){
      return
    }
    const index = options.indexOf(option);
    console.log(index)
    if (index > -1) {
      const updatedOptions = [...options];
      updatedOptions.splice(index, 1);
      setOptions(updatedOptions);
      setSelectedOptions([...selectedOptions, option]);
      if(option.value === correctOption?.value) {
        setGState(GameState.WON)
      }
    }
  },[
    options,
    correctOption,
    selectedOptions,
    gState
  ])
  
  return (
    <div style={{padding: '50px 100px'}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button variant="contained" disabled>
            Options
          </Button>
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
      <div>
        opcoes selecionadas
      </div>
      { correctOption &&
        <div>
          <SelectedOptionsTable selectedOptions={selectedOptions} correctOption={correctOption}/>
        </div>
      }
      { gState === GameState.WON &&
        <Typography> YOU WON</Typography>
      }
    </div>
  );
};

export default App;
