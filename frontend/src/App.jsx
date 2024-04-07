import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import "./styles/index.css";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import About from "./About";
import Contact from "./Contact";
import Quiz from "./Quiz";
import Login from "./Login";
import OtpForm from "./otp";
import Interaction from "./Interaction";
import RegisterPage from "./Register";
import { usePostContext } from "./store/PostContext";

const AppWithHeader = () => {
  const location = useLocation();
  const redirect = useNavigate();
  const { loggedIn } = usePostContext();
  const ExcludeHeaderPages = ["/otp", "/login", "/register"];
  const shouldRenderHeader = !ExcludeHeaderPages.some((page) =>
    location.pathname.includes(page)
  );
  const AbortedRoutes=["/login","/register"]

  useEffect(() => {
    // If user is  logged in and trying to access /login, redirect to /
    if (loggedIn && (AbortedRoutes.includes(location.pathname) )) {
      redirect("/");
    }
  }, [loggedIn, location.pathname]);

  return (
    <>
      {shouldRenderHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<OtpForm />} />
        <Route path="/interaction" element={<Interaction />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppWithHeader />
    </Router>
  );
};

export default App;
