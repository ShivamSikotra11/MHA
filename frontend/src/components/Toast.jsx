import React, { useEffect } from "react";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePostContext } from "../store/PostContext";

// Custom CSS for the toast message
const customToastStyle = {
  fontSize: "1.5rem", // You can adjust the font size as per your requirement
};

function Toast() {
  const { toastData, toastActive, clearToast } = usePostContext();

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
      style: customToastStyle, // Apply custom styles
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

export default Toast;
