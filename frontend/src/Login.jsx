import React, { useRef } from "react";
import "./styles/login.css";
import styled from "styled-components";
import axios from "axios";

const Login = () => {
  const handleEyeClick = (e) => {
    const ip = document.getElementById("password");
    if (ip.value !== "") {
      if (e.target.classList.contains("fa-eye-slash")) {
        e.target.classList.remove("fa-eye-slash");
        e.target.classList.add("fa-eye");
        ip.type = "text";
      } else {
        e.target.classList.remove("fa-eye");
        e.target.classList.add("fa-eye-slash");
        ip.type = "password";
      }
    }
  };

  const handleFlashMessages = () => {
    const fmsg = document.querySelector(".flash-messages");
    setTimeout(() => {
      if (fmsg.classList.contains("active")) {
        fmsg.classList.remove("active");
      }
    }, 3000);

    const ims = document.querySelector(".inner");
    if (ims.textContent !== "") {
      fmsg.classList.add("active");
    }
  };

  const user_name = useRef(null);
  const user_password = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // AlterFetchStatus(true);
      const userData = {
        name: user_name.current.value,
        password: user_password.current.value,
      };
      const response = await axios.post(
        "http://localhost:8000/api/login/",
        userData
      );
      console.log("New record added successfully:", response.data.data);
      // setFormData(newFormData);
      user_name.current.value = "";
      user_password.current.value = "";
      // AlterFetchStatus(false);
    } catch (error) {
      console.error("Error adding new record:", error);
    }
  };

  return (
    <div className="bg-[rgba(169,225,255,1)] " onLoad={handleFlashMessages}>
      <div className="container2">
        <div className="left">
          <div className="flash-messages">
            <div className="msg">
              {/* Flash message content */}
              <div className="inner">
                {/* Display the last message in the list */}
                {/* {{ messages[-1] }} */}
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="login-box">
            <div className="box">
              <div className="header">
                <div className="btn btn1">
                  <a href="">Login</a>
                </div>
                <div className="btn btn2">
                  <a href="{{url_for('register')}}">Register</a>
                </div>
              </div>
              <div className="login-details">
                <form onSubmit={handleSubmit}>
                  {/* Updated form action */}
                  <div className="ip username">
                    <input
                      type="text"
                      name="user_id"
                      id="user_id"
                      ref={user_name}
                      required
                    />
                    <label htmlFor="user_id">User ID</label>
                  </div>
                  <div className="ip password">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      ref={user_password}
                      required
                    />
                    <label htmlFor="password">Password</label>
                    <i
                      className="fa-solid fa-eye-slash "
                      style={{ color: "#f02828" }}
                      onClick={handleEyeClick}
                    ></i>
                  </div>
                  <div className="forget-password">
                    <a href="{{url_for('forget')}}">Forget Password?</a>
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
    </div>
  );
};
export default Login;