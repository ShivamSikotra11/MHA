// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
// import Home from "./Pages/Home";
// import "./styles/index.css";
// import { GlobalStyle } from "./styles/GlobalStyle";
// import Header from "./components/Header";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Quiz from "./Pages/Quiz";
// import Login from "./Pages/Login";
// import OtpForm from "./Pages/otp";
// import Interaction from "./Pages/Interaction";
// import RegisterPage from "./Pages/Register";
// import { usePostContext } from "./store/PostContext";
// import PageNotFound from "./Pages/PageNotFound";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 


// const AppWithHeader = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 500,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);
//   const location = useLocation();
//   const redirect = useNavigate();
//   const { loggedIn, getLogIn } = usePostContext();
//   const ExcludeHeaderPages = ["/otp", "/login", "/register", "/interaction"];
//   const shouldRenderHeader = !ExcludeHeaderPages.some((page) =>
//     location.pathname.includes(page)
//   );
//   const AbortedRoutesLoggedIn = ["/login", "/register"];
//   const AbortedRoutesLoggedOut = ["/quiz", "/interaction"];
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedUserData = localStorage.getItem("userData");
//     if (storedUserData) {
//       getLogIn(JSON.parse(storedUserData), false);
//     }
//     setLoading(false);
//   }, []); 

//   useEffect(() => {
//     if (!loading) {
//       if (loggedIn && AbortedRoutesLoggedIn.includes(location.pathname)) {
//         redirect("/");
//       }
//       if (!loggedIn && AbortedRoutesLoggedOut.includes(location.pathname)) {
//         redirect("/");
//       }
//     }
//   }, [loggedIn, location.pathname, loading]);

//   return (
//     <>
//       {shouldRenderHeader && <Header />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/quiz" element={<Quiz />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/otp" element={<OtpForm />} />
//         <Route path="/interaction" element={<Interaction />} />
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <GlobalStyle />
//       <AppWithHeader />
//     </Router>
//   );
// };

// export default App;



import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Custom Components
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Quiz from "./Pages/Quiz";
import Login from "./Pages/Login";
import OtpForm from "./Pages/otp";
import Interaction from "./Pages/Interaction";
import RegisterPage from "./Pages/Register";
import PageNotFound from "./Pages/PageNotFound";
import Header from "./components/Header";

// Styles
import "./styles/index.css";
import { GlobalStyle } from "./styles/GlobalStyle";

// Context
import { usePostContext } from "./store/PostContext";
import Profile from "./Pages/Profile";

const AppWithHeader = () => {
  // Initialize AOS and refresh
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const location = useLocation();
  const redirect = useNavigate();
  const { loggedIn, getLogIn } = usePostContext();

  // Define excluded routes and routes based on authentication status
  const ExcludeHeaderPages = ["/otp", "/login", "/register", "/interaction"];
  const AbortedRoutesLoggedIn = ["/login", "/register"];
  const AbortedRoutesLoggedOut = ["/quiz", "/interaction","/profile"];
  const shouldRenderHeader = !ExcludeHeaderPages.some((page) => location.pathname.includes(page));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user data exists in local storage and log in the user
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      getLogIn(JSON.parse(storedUserData), false);
    }
    setLoading(false);
  }, []); 

  useEffect(() => {
    // Redirect based on authentication status
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
        <Route path="/profile" element={<Profile />} />
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
