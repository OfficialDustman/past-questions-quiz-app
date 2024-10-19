import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuizComplete from '../Layouts/QuizComplete';

const ResultsPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();  // Access the state passed via navigate
  const { score, totalQuestions, subject } = state || {};  // Destructure the passed state

  const handleRestart = () => {
    navigate('/');  // Navigate back to the start page
  };

  return (
    <div>
      {state ? (
        <QuizComplete 
          score={score} 
          totalQuestions={totalQuestions} 
          subject={subject} 
          onRestart={handleRestart} 
        />
      ) : (
        <div>Invalid access: No quiz data available.</div>
      )}
    </div>
  );
};

export default ResultsPage;
