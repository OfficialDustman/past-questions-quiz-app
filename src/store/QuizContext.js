
import React, { createContext, useState } from 'react';

export const QuizContext = createContext({
  
});

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(null);

  const changeQuizData = (state) => {
    setQuizData(state);
  }

  return (
    <QuizContext.Provider value={{ quizData, changeQuizData }}>
      {children}
    </QuizContext.Provider>
  );
};
