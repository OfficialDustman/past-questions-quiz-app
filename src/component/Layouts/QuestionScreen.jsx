// QuestionScreen.jsx
import React, { useState } from 'react';
import iconError from '../../assets/images/icon-error.svg';
import Option from '../UI/Option';
import ProgressBar from '../UI/ProgressBar';

const QuestionScreen = ({ 
  questionData, 
  questionNumber, 
  totalQuestions, 
  onAnswerSelect, 
  onSubmit 
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  console.log(questionData)

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Select the clicked option
    setShowError(false); // Hide the error when an option is clicked
  };

  const handleSubmit = () => {
    if (!submitted) {
      // If not submitted yet
      if (!selectedOption) {
        setShowError(true); // Show error if no option selected
        return;
      }
      setSubmitted(true); // Mark the question as submitted
      onAnswerSelect(selectedOption); // Validate the selected answer
    } else {
      // If already submitted, go to the next question
      setSelectedOption(null); // Reset the selected option for the next question
      setSubmitted(false); // Reset submission state
      onSubmit(); // Move to the next question or see results
    }
  };

  return (
    <div className="question-screen visible">
      <div className="left-content">
        <div className="question-wrapper">
          <p className="question-count">Question {questionNumber} of {totalQuestions}</p>
          <h2 className="question">{questionData.questionText}</h2>
        </div>
        <ProgressBar progress={(questionNumber / totalQuestions) * 100} />

      </div>

      <div className="choices options">
        {questionData.options.map((option, index) => (
          <Option
            key={index}
            option={option}
            index={index}
            isSelected={selectedOption === option}
            isCorrect={submitted && option === questionData.answer}
            isIncorrect={submitted && option !== questionData.answer && selectedOption === option}
            onClick={() => handleOptionClick(option)}
            disabled={submitted} // Disable options after submission
          />
        ))}

        <button className="submit-answer" onClick={handleSubmit}>
          {submitted ? (questionNumber === totalQuestions ? "See Results" : "Next Question") : "Submit Answer"}
        </button>

        {showError && (
          <div className="select-prompt">
            <img src={iconError} alt="error icon" />
            <p className="select-prompt-text">Please select an answer</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionScreen;