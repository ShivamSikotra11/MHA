import React, { useEffect, useState } from "react";
import Timer from "./Timer";

function StopWatch() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Reset stopwatch and start it when the component mounts
    setTime(0);
    startStopwatch();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const startStopwatch = () => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

    return () => clearInterval(interval);
  };

  return (
    <div className="stop-watch ">
      <Timer time={time} size={3} />
    </div>
  );
}

export default StopWatch;
