import React, { createContext, useContext, useReducer, useState } from "react";
import reducer from "../reducers/QuizReducer";
import QuestionsJSON from "./Questions.json";
const QuizContext = createContext();

const initialState = {
  // Answers: Array(10).fill(null),
};

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Answers, setAnswers] = useState(Array(10).fill(null));
  const [submitted, setSubmitted] = useState(Array(10).fill(false));
  return (
    <QuizContext.Provider value={{ ...state,Answers,setAnswers,submitted, setSubmitted }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  return useContext(QuizContext);
};
export { useQuizContext };
export default QuizProvider;
