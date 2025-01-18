import React from "react";
import { useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calcilateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calcilateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calcilateTimeLeft() {
    const difference = +new Date("2025-12-31") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }
  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    return(
    <span className="text-blue-500 mt-3 mr-10">
    {timeLeft[interval]} {interval}{" "}
  </span>
    );
  });

  return (
    <div className="flex justify-between">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default CountDown;
