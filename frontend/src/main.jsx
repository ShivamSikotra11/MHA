import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.css";
import ConditionProvider from "./store/ConditionContext.jsx";
import QuizProvider from "./store/QuizContext.jsx";
import PostProvider from "./store/PostContext.jsx";
import Scrollbars from "react-custom-scrollbars";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConditionProvider>
      <QuizProvider>
        <PostProvider>
          {/* <Scrollbars style={{ width: 1000, height: 300 }}> */}
          <App />
          {/* </Scrollbars> */}
        </PostProvider>
      </QuizProvider>
    </ConditionProvider>
  </React.StrictMode>
);
