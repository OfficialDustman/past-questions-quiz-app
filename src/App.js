// App.js
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { client as sanityClient } from './client';

// Import context and pages
import { QuizContext } from "./store/QuizContext";
import HomePage from "./component/Pages/HomePage";
import QuizPage from "./component/Pages/QuizPage";
import ResultsPage from "./component/Pages/ResultsPage";

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Home page with subject selection
  },
  {
    path: "/quiz/:subject", // Quiz page that dynamically loads based on the selected subject
    element: <QuizPage />,
  },
  {
    path: "/results", // Results page after quiz completion
    element: <ResultsPage />,
  },
]);

function App() {
  const { changeQuizData } = useContext(QuizContext); 
  const [quizzes, setQuizzes] = useState(null);

  // Fetch quiz data from Sanity
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "quiz"] {
          title,
          slug,
          icon{
              asset->{
                url
              },
          questions[] {
            question,
            options,
            answer
          }
        }`
      )
      .then((data) => setQuizzes(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (quizzes) {
      changeQuizData(quizzes); 
    }
  }, [quizzes, changeQuizData]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
