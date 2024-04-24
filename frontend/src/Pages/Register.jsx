import React, { useState, useEffect, useRef } from "react";
import "../styles/register.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { usePostContext } from "../store/PostContext";
import { useMainContext } from "../store/MainContext";
import Toast from "../components/Toast";

const RegisterPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const redirect = useNavigate();
  const { getLogIn ,InvokeToast,AlterFirstLogin } = usePostContext();
  const { url } = useMainContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (flashMessage !== "") {
        setFlashMessage("");
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [flashMessage]);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

 

  const name = useRef(null);
  const emailid = useRef(null);
  const city = useRef(null);
  const mobileno = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRegisterData = {
        name: name.current.value,
        emailid: emailid.current.value,
        city: city.current.value,
        mobileno: mobileno.current.value,
        password: password.current.value,
      };
      const response = await axios.post(
        `${url}register/`,
        userRegisterData
      );
      getLogIn({
        name: name.current.value,
        email: emailid.current.value,
        password: password.current.value,
      });
      // console.log("user registered successfully:", response.data);
      InvokeToast("success", "Successfully Registered");
      AlterFirstLogin();
      redirect("/");
    } catch (error) {
      InvokeToast("error", "User already exists");
      console.error("Error adding new record:", error);
    }
  };

  return (
    <div className="container2">
      <Toast></Toast>
      <div className="left">
      </div>
      <div className="right">
        <div className="login-box">
          <div className="box">
            <div className="header">
              <div className="btn btn1">
                <NavLink to={"/login"}> Login</NavLink>
              </div>
              <div className="btn btn2">
                <a href="">Register</a>
              </div>
            </div>
            <div className="login-details">
              <form onSubmit={handleSubmit}>
                <div className="ip username">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    ref={name}
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="ip username">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    ref={emailid}
                    required
                  />
                  <label htmlFor="email">E-mail ID</label>
                </div>
                <div className="ip username">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    ref={city}
                    required
                  />
                  <label htmlFor="city">City</label>
                </div>
                <div className="ip username">
                  <input
                    type="text"
                    name="mobile_no"
                    id="mobile_no"
                    ref={mobileno}
                    required
                  />
                  <label htmlFor="mobile_no">Mobile No.</label>
                </div>
                <div className="ip password">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    ref={password}
                    required
                  />
                  <label htmlFor="password">Password</label>
                  <i
                    className={`fa-solid ${
                      passwordVisible ? "fa-eye" : "fa-eye-slash"
                    }`}
                    style={{ color: "#00668c" }}
                    onClick={handlePasswordVisibility}
                  ></i>
                </div>
                <div className="log-in-btn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
