import React from 'react';
import './customOption.css';

// Define options with images
interface Option {
  value: string;
  label: string;
  imageSrc: string;
}

interface OptionsProps {
  innerProps: JSX.IntrinsicElements['div'];
  label: string;
  data: Option;
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