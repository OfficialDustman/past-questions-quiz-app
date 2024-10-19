// Option.jsx
import React from 'react';

const Option = ({ option, onSelect }) => {
  return (
    <button className="option" onClick={onSelect}>
      <div className="option-box">{option[0]}</div>
      {option}
    </button>
  );
};

export default Option;
