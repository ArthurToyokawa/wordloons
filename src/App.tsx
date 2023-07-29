import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import CustomOption from './components/customOption'
import { Option, towerData, heroData } from './models/data';
import SelectedOptionsTable from './components/selectedOptionsTable';
import { Button, Grid, Typography } from '@mui/material';


enum GameState {
  STARTED,
  WON,
}

const App: React.FC = () => {
  
  const [options, setOptions] = useState<Option[]>([...towerData, ...heroData])
  const [correctOption, setCorrectOption] = useState<Option>()
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])
  const [gState, setGState] = useState<GameState>(GameState.STARTED)
  // TODO implement settings

  
  const newGame = useCallback(() => {
    // get options based on settings when implemented
    setOptions([...towerData, ...heroData])
    setCorrectOption(getRandomOption(options))
    setSelectedOptions([])
    setGState(GameState.STARTED)
  },[
    //settings
  ])
  
  useEffect(() =>{
    newGame()
  },[])

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
  },[options, correctOption, selectedOptions])
  
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
      { correctOption && selectedOptions.length > 0 &&
        <div>
          <SelectedOptionsTable selectedOptions={selectedOptions} correctOption={correctOption}/>
        </div>
      }
      { gState === GameState.WON &&
        <Typography variant='h6'> YOU WON</Typography>
      }
      <div style={{position: 'absolute', bottom: 0}}>
        <Typography variant='caption'>
          Data is based on patch 38.0 
        <Typography >
        </Typography>
          Tower data was taken from the bloons Wiki https://bloons.fandom.com/
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
      </div>
    </div>
  );
};

export default App;
