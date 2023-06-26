import React from 'react';
import Select from 'react-select';
import CustomOption from './components/customOption'
import { Tower, towerData } from './models/data';
import SelectedOptionsTable from './components/selectedOptionsTable';


// Define options with images
// interface Option {
//   value: string;
//   label: string;
//   imageSrc: string;
// }

const handleOption = (value: Tower | null) => {
  console.log(value)
}

const CustomSelect: React.FC = () => {
  return (
    <div style={{padding: '50px 100px'}}>
      <Select
        onChange={(evt) => handleOption(evt)}
        options={towerData}
        components={{ Option: CustomOption }} // Use the custom option component
        />
      <div>
        opcoes selecionadas
      </div>
      <div>
        <SelectedOptionsTable selectedOptions={towerData} correctOption={towerData[0]}/>
      </div>
      </div>
  );
};

export default CustomSelect;
