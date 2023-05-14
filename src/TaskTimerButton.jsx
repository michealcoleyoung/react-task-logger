import React, { useState } from "react";

export function TaskTimerButton() {
  const [isRunning, setIsRunning] = useState(false);

  function handleClick() {
    setIsRunning(!isRunning);
  }

  return (
    <button onClick={handleClick}>
      {isRunning ? "Stop" : "Start"}
    </button>
  );
}
