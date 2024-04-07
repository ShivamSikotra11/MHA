import React, { useState } from "react";
import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";
import { usePostContext } from "../store/PostContext";
import ProfileCircle from "./ProfileCircle";
import styled from "styled-components";

const Header = () => {
  const url = useLocation();
  const { curUser, getNameAcronym, getLogOut } = usePostContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('profile-circle')) {
      setDropdownOpen(false);
    }
  });
  document.addEventListener('visibilitychange', () => {
    setDropdownOpen(false);
  });
  
  return (
    <Wrapper>
      <div className="bg-primary_light flex justify-between py-2 items-center">
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

          {curUser.hasOwnProperty("name") ? (
            <div className="relative" onClick={toggleDropdown}>
              <ProfileCircle value={getNameAcronym(curUser.name)} />
              {dropdownOpen && (
                <div className="absolute top-18 right-0 bg-white  shadow-md rounded-md border-2 border-primary_dark w-[22rem] ">
                  <p className="dd-item" onClick={getLogOut}>
                    Log Out
                  </p>
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
`;

export default Header;
