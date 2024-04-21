import React, { useEffect, useState } from "react";
import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";
import { usePostContext } from "../store/PostContext";
import ProfileCircle from "./ProfileCircle";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();
  const { curUser, getNameAcronym, getLogOut, loggedIn } = usePostContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  useEffect(() => {
    // const menu_btn = document.querySelector(".hamburger");
    // const mobile_menu = document.querySelector(".mobile-nav");

    const handleClick = (event) => {
      if (!event.target.classList.contains("profile-circle")) {
        setDropdownOpen(false);
      }
      if (!event.target.classList.contains("hamburger")) {
        setHamburgerOpen(false);
      }
    };

    const handleVisibilityChange = () => {
      setDropdownOpen(false);
      setHamburgerOpen(false);
    };

    // const handleMenuClick = () => {
    //   menu_btn.classList.toggle("is-active");
    //   mobile_menu.classList.toggle("is-active");
    // };

    // menu_btn.addEventListener("click", handleMenuClick);
    document.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // menu_btn.removeEventListener("click", handleMenuClick);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Wrapper>
      <div className="bg-primary_light flex justify-between py-2 items-center max-[767px]:hidden z-[10000]">
        <NavLink to={"/"} className="left font-habibi text-[2.9rem]  pl-12">
          MindCare
        </NavLink>
        <div className="right   text-[2.5rem]  flex justify-between pr-4 py-1 cursor-pointer gap-[4rem] ">
          <NavLink
            to={"/"}
            className={`font-inter cursor-pointer ${
              location.pathname === "/" ? "HeaderActive" : ""
            } `}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={`font-inter cursor-pointer ${
              location.pathname === "/about" ? "HeaderActive" : ""
            } `}
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact"}
            className={`font-inter cursor-pointer ${
              location.pathname === "/contact" ? "HeaderActive" : ""
            } `}
          >
            Contact Us
          </NavLink>

          {curUser && curUser.hasOwnProperty("name") ? (
            <div className="relative z-[10000] " onClick={toggleDropdown}>
              <ProfileCircle value={getNameAcronym(curUser.name)} />
              {dropdownOpen && (
                <div className="absolute top-18 right-0 bg-white  shadow-md rounded-md border-2 border-primary_dark w-[22rem] ">
                  <p className="dd-item" onClick={getLogOut}>
                    Log Out
                  </p>
                  <NavLink to={"/profile"}>
                    <p className="dd-item">Profile</p>
                  </NavLink>
                  <NavLink to={"/quiz"}>
                    <p className="dd-item">Get Quiz Now</p>
                  </NavLink>
                  <NavLink to={"/interaction"}>
                    <p className="dd-item">Get Interact</p>
                  </NavLink>
                </div>
              )}
            </div>
          ) : (
            <Button value={"Login"} Goto={"/login"} />
          )}
        </div>
      </div>

      <nav className="  bg-primary_light w-full flex text-black justify-between py-[7px] text-[20px] min-[768px]:hidden z-[1009]">
        <div className="flex items-center  max-[884px]:text-[30px] ml-[24px] text-[2.9rem]  cursor-pointer">
          <NavLink to={"/"} className="font-habibi">
            MindCare
          </NavLink>
        </div>
        <button
          className={`${
            hamburgerOpen
              ? "hamburger mx-[28px] is-active"
              : "hamburger mx-[28px]"
          }`}
          onClick={toggleHamburger}
        >
          <div className="bar"></div>
        </button>
        <div
          className={`mobile-nav flex flex-col items-center justify-center space-y-[8px] ${
            hamburgerOpen ? "is-active" : ""
          }`}
        >
          {loggedIn && (
            <div className="ni h-head-2 w-full grid grid-cols-2 gap-y-[8px]">
              <NavLink
                to="/profile"
                className="flex flex-col items-center cursor-pointer "
              >
                <i className="fa-regular fa-user "></i>
                My Profile
              </NavLink>
              <div
                to=""
                className="flex flex-col items-center cursor-pointer"
                onClick={getLogOut}
              >
                <i className="fa-solid fa-arrow-right-from-bracket "></i>
                Log Out
              </div>
              {/* <NavLink
                to="/profile"
                className="flex flex-col items-center cursor-pointer"
              >
                <img src="post.png" className="" width={"25px"} alt="" />
                Get Interact
              </NavLink>
              <div
                to=""
                className="flex flex-col items-center cursor-pointer"
                onClick={getLogOut}
              >
                <img src="quiz.png" className="" width={"25px"} alt="" />
                Quiz
              </div> */}
            </div>
          )}
          {/* <div className="ni h-head-2 w-full justify-evenly flex">
              <NavLink
                to="/profile"
                className="flex flex-col items-center cursor-pointer"
              >
                <img src="post.png" className="" width={"25px"} alt="" />
                Get Interact
              </NavLink>
              <div
                to=""
                className="flex flex-col items-center cursor-pointer"
                onClick={getLogOut}
              >
                <img src="quiz.png" className="" width={"25px"} alt="" />
                Quiz
              </div>
            </div> */}
          <div className="flex flex-col items-center">
            {!loggedIn && (
              <NavLink to={"/login"} className="ni ">
                Log In
              </NavLink>
            )}
            {/* {location.pathname!="/" &&  (<NavLink to={"/"} className="ni">
              Home
            </NavLink>)} */}
            {location.pathname != "/about" && (
              <NavLink to={"/about"} className="ni">
                About
              </NavLink>
            )}
            {location.pathname != "/contact" && (
              <NavLink to={"/contact"} className="ni">
                Contact
              </NavLink>
            )}
            {/* {loggedIn && (
              <>
                {location.pathname !== "/quiz" && (
                  <NavLink to={"/quiz"} className="ni">
                    Get Quiz
                  </NavLink>
                )}
                {location.pathname !== "/interaction" && (
                  <NavLink to={"/interaction"} className="ni">
                    Get Interact
                  </NavLink>
                )}
              </>
            )} */}
            {location.pathname !== "/quiz" && (
                  <NavLink to={"/quiz"} className="ni">
                    Get Quiz
                  </NavLink>
                )}
                {location.pathname !== "/interaction" && (
                  <NavLink to={"/interaction"} className="ni">
                    Get Interact
                  </NavLink>
                )}
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  .dd-item {
    padding: 1rem 0;
    font-size: 2rem;
    font-family: "Inter", "serif";
    text-align: center;
  }
  .dd-item:hover {
    background-color: #a9e1ff;
  }
  .small {
    display: none;
  }
  .hamburger {
    position: relative;
    display: block;
    width: 35px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    outline: none;
    border: none;
  }
  .hamburger .bar,
  .hamburger:after,
  .hamburger:before {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-color: #000;
    margin: 6px 0px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    opacity: 0.8;
  }
  .hamburger.is-active:before {
    -webkit-transform: rotate(-45deg) translate(-8px, 6px);
    transform: rotate(-45deg) translate(-8px, 6px);
  }
  .hamburger.is-active:after {
    -webkit-transform: rotate(45deg) translate(-9px, -8px);
    transform: rotate(45deg) translate(-9px, -8px);
  }
  .hamburger.is-active .bar {
    opacity: 0;
  }
  .mobile-nav {
    position: fixed;
    top: 59.5px;
    left: 100%;
    width: 40%;
    /* min-height: 100vh; */
    border: 2px solid #00668c;
    border-radius: 16px;
    display: block;
    z-index: 1998;
    background-color: #a9e1ff;
    // background-color: #EBF8FF;
    /* padding-top: 120px; */
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .mobile-nav.is-active {
    left: 60%;
  }

  .ni {
    margin: 8px 0;
  }

  @media (max-width: 768px) {
    .mobile-nav {
      display: block;
    }
    .hamburger {
      display: block;
    }
  }

  @media (max-width: 564px) {
    .mobile-nav {
      width: 50%;
    }
    .mobile-nav.is-active {
      left: 50%;
    }
  }
  @media (max-width: 464px) {
    .mobile-nav {
      width: 100%;
    }
    .mobile-nav.is-active {
      left: 0%;
    }
  }
`;

export default Header;
