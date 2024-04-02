import React from "react";

export default function Timer(props) {
  const hours = Math.floor(props.time / (1000 * 60 * 60));
  const minutes = Math.floor((props.time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((props.time % (1000 * 60)) / 1000);

  return (
    <div className="timer">
      {/* Add inline style to set the size of digits */}
      <span className="digits" style={{ fontSize: `${props.size}rem` }}>
        {hours < 10 ? "0" + hours : hours}
      </span>
      :
      <span className="digits" style={{ fontSize: `${props.size}rem` }}>
        {minutes < 10 ? "0" + minutes : minutes}
      </span>
      :
      <span className="digits" style={{ fontSize: `${props.size}rem` }}>
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
    </div>
  );
}
