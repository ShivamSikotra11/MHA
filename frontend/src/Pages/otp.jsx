import React, { useState, useEffect, useRef } from "react";

const OtpForm = ({ email, name, city, password, mobile_no, admin_type }) => {
  const TimerSeconds = 30;
  const [timer, setTimer] = useState(TimerSeconds);
  const [isResendDisabled, setIsResendDisabled] = useState(true); // State to manage resend button disabled state
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) {
        clearInterval(interval);
        document.querySelector(".timerr").style.display = "none";
        document.querySelector(".otp-box").style.height = "39rem";
        setIsResendDisabled(false); // Enable resend button when timer reaches 0
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(TimerSeconds);
    inputRefs.current[0].focus();
    document.querySelector(".timerr").style.display = "";
    document.querySelector(".otp-box").style.height = "42rem";
    setIsResendDisabled(true); // Disable resend button when clicked
  };

  useEffect(() => {
    inputRefs.current[0].focus();
    const handleKeyUp = (index, e) => {
      const isNumber = /^\d$/.test(e.key);

      if (isNumber && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    };

    const handleKeyDown = (index, e) => {
      const isBackspace = e.key === "Backspace";

      if (isBackspace && index > 0 && !e.target.value) {
        inputRefs.current[index - 1].focus();
      } else if (e.key === "Enter") {
        e.preventDefault(); // Prevent form submission
        document.querySelector(".otp-6 button").click();
      }
    };

    inputRefs.current.forEach((ip, index) => {
      ip.addEventListener("keyup", (e) => handleKeyUp(index, e));
      ip.addEventListener("keydown", (e) => handleKeyDown(index, e));
    });

    return () => {
      inputRefs.current.forEach((ip, index) => {
        ip.removeEventListener("keyup", (e) => handleKeyUp(index, e));
        ip.removeEventListener("keydown", (e) => handleKeyDown(index, e));
      });
    };
  }, []);

  return (
    <div className="container2 bg-primary_light">
      <div className="otp-left">
        <div className="flash-messages">
          <div className="msg">{/* Flash message */}</div>
        </div>
      </div>

      <div className="otp-right">
        <div className="otp-box">
          <div className="otp-box-inside">
            <h1 className="otpp otp-1">OTP Verification</h1>
            <div className="otpp otp-2">Enter OTP Code Sent to E-mail</div>

            <form action="/verify_otp" method="POST" id="form">
              <div className="otp-3">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    pattern="[0-9]*"
                    maxLength="1"
                    name={`otp${index + 1}`}
                    required
                    ref={(input) => (inputRefs.current[index] = input)}
                  />
                ))}
              </div>

              <div className="otp-4">Didn’t receive OTP?</div>
              <div className="timerr">
                <span className="time">{timer}</span> seconds remaining.
              </div>
              <div className="otp-5">
                <button
                  id="resend"
                  onClick={handleResend}
                  disabled={isResendDisabled}
                >
                  Resend OTP
                </button>
              </div>

              <div className="otp-6">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
