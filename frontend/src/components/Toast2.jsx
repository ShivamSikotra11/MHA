import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMainContext } from "../store/MainContext";
const customToastStyle = {
  fontSize: "1.5rem", // You can adjust the font size as per your requirement
};
function Toast2() {
  const { toastData, toastActive, clearToast } = useMainContext(); // Add clearToast function from context

  useEffect(() => {
    if (toastActive) {
      notify(toastData.type, toastData.text);
    }
  }, [toastActive, toastData]);

  const notify = (type, text) => {
    toast[type](text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => clearToast(),
      style: customToastStyle,
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Toast2;
