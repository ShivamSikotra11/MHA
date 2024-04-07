import React, { useRef, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles/login.module.css"; // Import CSS module
import { usePostContext } from "./store/PostContext";
import Loader from "./components/Loader";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const user_name = useRef(null);
  const user_password = useRef(null);
  const redirect = useNavigate();
  const { handleLoginSubmit, isLoginFetching } = usePostContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: user_name.current.value,
      password: user_password.current.value,
    };
    handleLoginSubmit(redirect, userData);
  };

  return (
    <div
      className={styles["bg-[rgba(169,225,255,1)]"]}
      // onLoad={handleFlashMessages}
    >
      <div className={styles.container2}>
        <div className={styles.left}>
          <div className={styles["flash-messages"]}>
            <div className={styles.msg}>
              {/* Flash message content */}
              <div className={styles.inner}>
                {/* Display the last message in the list */}
                {/* {{ messages[-1] }} */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles["login-box"]}>
            <div
              className={`${styles.box} 
            ${isLoginFetching ? "h-[40rem]" : "h-[37rem]"}
            `}
            >
              <div className={styles.header}>
                <div className={`${styles.btn} ${styles.btn1}`}>
                  <a href="">Login</a>
                </div>

                <div className={`${styles.btn} ${styles.btn2}`}>
                  <NavLink to={"/register"}>Register</NavLink>
                </div>
              </div>

              <div className={styles["login-details"]}>
                <form onSubmit={handleSubmit}>
                  <div className={`${styles.ip} ${styles.username}`}>
                    {" "}
                    <input
                      type="text"
                      name="user_id"
                      id="user_id"
                      ref={user_name}
                      required
                    />
                    <label htmlFor="user_id">User ID</label>
                  </div>
                  <div className={`${styles.ip} ${styles.password}`}>
                    {" "}
                    {/* Combine multiple classes */}
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      ref={user_password}
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
                  <div className={styles["forget-password"]}>
                    <a href="{{url_for('forget')}}">Forget Password?</a>
                  </div>
                  <div className="flex justify-center">
                    {isLoginFetching && <Loader />}
                  </div>
                  <div className={styles["log-in-btn"]}>
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
