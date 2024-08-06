import React, { useState } from 'react'
import logo from "../Images/logo.jpg";

const Header = ({onChange}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) > 0 && Number(value) <= 10)) {
      setInputValue(value);
      onChange(value);
    }
  };

  return (
    <div className='d-flex align-items-center'>
        <img src={logo}/>  
        <input className='h-25 border rounded m-5 p-2' style={{width: "20%"}} type='number' placeholder='Enter number less than 10'
        defaultValue={inputValue}
        onChange={handleInputChange}/>
    </div>
  )
}

export default Header
