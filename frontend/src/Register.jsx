import React, { useState, useEffect } from "react";
import "./styles/register.css";
import { NavLink } from "react-router-dom";
const RegisterPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");

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

  // const handleFlashMessage = () => {
  //   const innerMsg = document.querySelector(".inner");
  //   if (innerMsg && innerMsg.textContent !== "") {
  //     setFlashMessage("active");
  //   }
  // };

  // const fetchCities = () => {
  //   fetch("/get_cities_json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const cities = data["cities"];
  //       const resultBox = document.getElementById("OptionsCity");
  //       const inputBox = document.getElementById("CitytextBox");
  //       const rBHTML = resultBox.innerHTML;
  //       inputBox.onkeyup = function () {
  //         let result = [];
  //         let input = inputBox.value;
  //         if (input.length) {
  //           result = cities.filter((keyword) => {
  //             return keyword.toLowerCase().startsWith(input.toLowerCase());
  //           });
  //         }
  //         display(result);
  //         if (!result.length) {
  //           resultBox.innerHTML = "";
  //         }
  //         if (!input.length) {
  //           resultBox.innerHTML = rBHTML;
  //         }
  //       };

  //       const display = (result) => {
  //         resultBox.innerHTML = "";
  //         const content = result.map((div) => {
  //           return "<div onclick=showCity(this.innerHTML)>" + div + "</div>";
  //         });
  //         resultBox.innerHTML = content.join("");
  //       };
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  // useEffect(() => {
  //   fetchCities();
  // }, []);

  return (
    <div className="container2">
      <div className="left">
        {/* <div className={`flash-messages ${flashMessage}`}>
          <div className="msg">
            <div className="inner">
              {messages.length > 0 && messages[messages.length - 1]}
            </div>
          </div>
        </div> */}
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
              <form action="/register" method="POST">
                <div className="ip username">
                  <input type="text" name="name" id="name" required />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="ip username">
                  <input type="text" name="email" id="email" required />
                  <label htmlFor="email">E-mail ID</label>
                </div>
                <div className="ip username">
                  <input type="text" name="city" id="city" required />
                  <label htmlFor="city">City</label>
                </div>
                <div className="ip username">
                  <input type="text" name="mobile_no" id="mobile_no" required />
                  <label htmlFor="mobile_no">Mobile No.</label>
                </div>
                <div className="ip password">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    required
                  />
                  <label htmlFor="password">Password</label>
                  <i
                    className="fa-solid fa-eye-slash"
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
