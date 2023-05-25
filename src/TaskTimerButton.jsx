import React, { useState, useEffect } from "react";
import { TaskInput } from "./TaskInput";

export function TaskTimerButton() {
    
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  function handleClick() {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    if (!isRunning) {
      setElapsedTime(0);
    }
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div>
      <h1>{formatTime(elapsedTime)}</h1>
      <button onClick={handleClick}>{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
}