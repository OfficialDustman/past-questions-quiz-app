import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizContext } from '../../store/QuizContext';
import QuestionScreen from '../Layouts/QuestionScreen';

const QuizPage = () => {
  const { quizData } = useContext(QuizContext);
  const { subject } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const selectedQuiz = quizData.find((quiz) => quiz.title === subject);

  const handleAnswerSelect = (answer) => {
    console.log(answer)
    if (answer === selectedQuiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleSubmit = () => {
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results', { state: { score, totalQuestions: selectedQuiz.questions.length, subject: selectedQuiz } });
    }
  };

  return (
    <div>
      <h1>{selectedQuiz.title} Quiz</h1>
      <QuestionScreen
        questionData={selectedQuiz.questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={selectedQuiz.questions.length}
        onAnswerSelect={handleAnswerSelect}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default QuizPage;
