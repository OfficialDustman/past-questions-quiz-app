import React from 'react';
import Option from '../UI/Option';
import ProgressBar from '../UI/ProgressBar';

const QuestionScreen = ({ questionData, questionNumber, totalQuestions, onAnswerSelect, onSubmit }) => {
  return (
    <div className="question-screen visible">
      <div className="left-content">
        <div className="question-wrapper">
          <p className="question-count">Question {questionNumber} of {totalQuestions}</p>
          <h2 className="question">{questionData.question}</h2>
        </div>
        <ProgressBar progress={(questionNumber / totalQuestions) * 100} />
      </div>
      <div className="choices options">
        {questionData.options.map((option, index) => (
          <Option
            key={index}
            option={option}
            onSelect={() => onAnswerSelect(option)}
          />
        ))}
        <button className="submit-answer" onClick={onSubmit}>Submit answer</button>
        <div className="select-prompt">
          <img src="./assets/images/icon-error.svg" alt="error icon" />
          <p className="select-prompt-text">Please select an answer</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
