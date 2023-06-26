import React from 'react';
import './customOption.css';
import { Tower } from '../models/data';


interface OptionsProps {
  innerProps: JSX.IntrinsicElements['div'];
  label: string;
  data: Tower;
}

const Option: any = ({ innerProps, label, data }: OptionsProps) => (
  <div {...innerProps} className='option'>
    <img src={data.imageSrc} alt={label} 
    style={{
        marginRight: 10,
        width: 40,
        height: 40,
      }} 
    />
    {label}
  </div>
);

export default Option;