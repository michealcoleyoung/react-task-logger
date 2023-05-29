import React, { useState, useEffect } from 'react';

export function TaskTimerButton({ taskTimes, setTaskTimes, selectedTask }) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

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

  useEffect(() => {
    if (isRunning && selectedTask) {
      setTaskTimes((prevTaskTimes) => ({
        ...prevTaskTimes,
        [selectedTask]: {
          startTime,
          endTime: isRunning ? '' : endTime, // Update endTime only when the timer is stopped
          currentDate,
          elapsedTime: formatTime(elapsedTime),
        },
      }));
    }
  }, [elapsedTime, isRunning, selectedTask, setTaskTimes, startTime, endTime, currentDate]);

  function handleClick() {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    if (!isRunning) {
      setElapsedTime(0);
      const now = new Date();
      setStartTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString());
    } else {
      const now = new Date();
      setEndTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    }
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <div>
      <h1>{formatTime(elapsedTime)}</h1>
      <button onClick={handleClick}>{isRunning ? 'Stop' : 'Start'}</button>
    </div>
  );
}
