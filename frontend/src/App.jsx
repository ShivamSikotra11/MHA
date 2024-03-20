import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
