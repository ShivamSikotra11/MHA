import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import "./styles/index.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Quiz from "./Pages/Quiz";
import Login from "./Pages/Login";
import OtpForm from "./Pages/otp";
import Interaction from "./Pages/Interaction";
import RegisterPage from "./Pages/Register";
import { usePostContext } from "./store/PostContext";
import PageNotFound from "./Pages/PageNotFound";

const AppWithHeader = () => {
  const location = useLocation();
  const redirect = useNavigate();
  const { loggedIn, getLogIn } = usePostContext();
  const ExcludeHeaderPages = ["/otp", "/login", "/register", "/interaction"];
  const shouldRenderHeader = !ExcludeHeaderPages.some((page) =>
    location.pathname.includes(page)
  );
  const AbortedRoutesLoggedIn = ["/login", "/register"];
  const AbortedRoutesLoggedOut = ["/quiz", "/interaction"];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      getLogIn(JSON.parse(storedUserData), false);
    }
    setLoading(false);
  }, []); 

  useEffect(() => {
    if (!loading) {
      if (loggedIn && AbortedRoutesLoggedIn.includes(location.pathname)) {
        redirect("/");
      }
      if (!loggedIn && AbortedRoutesLoggedOut.includes(location.pathname)) {
        redirect("/");
      }
    }
  }, [loggedIn, location.pathname, loading]);

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
        <Route path="*" element={<PageNotFound />} />
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
