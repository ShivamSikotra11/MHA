import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.css";
import ConditionProvider from "./store/ConditionContext.jsx";
import QuizProvider from "./store/QuizContext.jsx";
import PostProvider from "./store/PostContext.jsx";
import MainProvider from "./store/MainContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <MainProvider>
      <PostProvider>
        <ConditionProvider>
          <QuizProvider>
            <App />
          </QuizProvider>
        </ConditionProvider>
      </PostProvider>
    </MainProvider>

);
