import React, {useContext} from 'react';

//internal import 



const Input = ({inputType,title,placeholder,handleClick}) => {
  return (
    <div>
      <p>{title}</p>
      {
        inputType==="text" ? (
          <div>
            <input
            type="text"
            placeholder={placeholder}
            onChange ={handleClick}
             />
          </div>
        ) : ("")
      }
    </div>
  );
};

export default Input