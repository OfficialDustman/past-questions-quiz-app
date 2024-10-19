// QuizComplete.jsx
import React from 'react';

const QuizComplete = ({ score, totalQuestions, subject, onRestart }) => {
  return (
    <div className="quiz-complete visible">
      <div className="complete-left">
        <h1>Quiz completed
          <span className="scored">You scored...</span>
        </h1>
      </div>

      <div className="complete-right">
        <div className="score-container">
          <div className="final curr-subject">
            <div className="button-icon-container">
              <img className="subject-img" src={subject.icon} alt="subject icon" />
            </div>
            <h2 className="subject-chosen">{subject.title}</h2>
          </div>
          <h1 className="final-score">{score}</h1>
          <p className="score-out-of">out of {totalQuestions}</p>
        </div>
        <button className="restart" onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
};

export default QuizComplete;
