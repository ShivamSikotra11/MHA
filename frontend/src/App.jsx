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
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
import Loader from "./components/Loader";

// Styles
import "./styles/index.css";
import { GlobalStyle } from "./styles/GlobalStyle";

// Context
import { usePostContext } from "./store/PostContext";
import Profile from "./Pages/Profile";
import { useMainContext } from "./store/MainContext";
import { useQuizContext } from "./store/QuizContext";

const AppWithHeader = () => {
  const location = useLocation();
  const redirect = useNavigate();
  const {
    loggedIn,
    getLogIn,
    getUserName,
    curUser,
    isLoginFetching,
    getSuggestedPoses,
  } = usePostContext();
  const { isuserProfileUpdating } = useMainContext();
  const { isQuizSubmitted } = useQuizContext();
  // Define excluded routes and routes based on authentication status
  const ExcludeHeaderPages = ["/otp", "/login", "/register", "/interaction"];
  const AbortedRoutesLoggedIn = ["/login", "/register"];
  const AbortedRoutesLoggedOut = ["/quiz", "/interaction", "/profile"];
  const shouldRenderHeader = !ExcludeHeaderPages.some((page) =>
    location.pathname.includes(page)
  );

  const [loading, setLoading] = useState(true);
  // console.log("App rendered");
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      getLogIn(userData, false);

      getSuggestedPoses(userData)
        .then(() => setLoading(false))
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [isQuizSubmitted, isLoginFetching]);
  // useEffect(() => {
  //   const storedUserData = localStorage.getItem("userData");

  //   if (storedUserData) {
  //     const userData = JSON.parse(storedUserData);
  //     getLogIn(userData, false);

  //     if (isuserProfileUpdating) {
  //       getUserName(userData)
  //       .then(() => {
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //         setLoading(false);
  //       });
  //     }
  //     else{
  //       getSuggestedPoses(userData)
  //       .then(() => setLoading(false))
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //         setLoading(false);
  //       });
  //     }
  //   } else {
  //     setLoading(false);
  //   }
  // }, [isuserProfileUpdating, isQuizSubmitted, isLoginFetching]);

  // useEffect(() => {
  //   // Redirect based on authentication status

  //     if (loggedIn && AbortedRoutesLoggedIn.includes(location.pathname)) {
  //       redirect("/");
  //     }
  //     if (!loggedIn && AbortedRoutesLoggedOut.includes(location.pathname)) {
  //       redirect("/");
  //     }

  // }, [loggedIn]);
  
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
  }, [loggedIn, loading]);

  if (loading) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
        <Loader width={"50px"} />
      </div>
    );
  }

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
