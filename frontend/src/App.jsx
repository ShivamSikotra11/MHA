import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
