// HomePage.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../store/QuizContext';
import StartMenu from '../Layouts/StartMenu';

const HomePage = () => {
  const { quizData } = useContext(QuizContext);
  const navigate = useNavigate();

  if (!quizData) {
    return <div>Loading quizzes...</div>;
  }

  const handleSelectSubject = (subject) => {
    navigate(`/quiz/${subject}`);
  };

  return <StartMenu subjects={quizData} onSelectSubject={handleSelectSubject} />;
};

export default HomePage;
