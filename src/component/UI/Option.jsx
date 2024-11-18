// Option.jsx
import React from 'react';

const Option = ({ option, index, isSelected, isCorrect, isIncorrect, onClick, disabled }) => {
  return (
    <button 
      className={`option ${isSelected ? 'selected' : ''} 
        ${isCorrect ? 'correct' : ''} 
        ${isIncorrect ? 'invalid' : ''}`}
      onClick={onClick}
      disabled={disabled} // Disable option clicks after submission
    >
      <div className="option-box">{String.fromCharCode(65 + index)}</div>
      {option}
    </button>
  );
};

export default Option;
