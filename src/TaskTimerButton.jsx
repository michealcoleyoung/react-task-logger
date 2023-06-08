import React, { useState, useEffect } from 'react';

export function TaskTimerButton({ tasks, setTasks, selectedTask, setTaskData }) {
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
    if (!isRunning && selectedTask) {
      const taskIndex = tasks.findIndex((task) => task.task === selectedTask);
      if (taskIndex !== -1) {
        const updatedTasks = [...tasks];
        const taskTimeData = {
          startTime,
          endTime: getCurrentTime(),
          currentDate,
          elapsedTime: formatTime(elapsedTime),
        };
        updatedTasks[taskIndex].taskTimes = taskTimeData;
        setTasks(updatedTasks);
        setTaskData(updatedTasks); // Update the taskData in the parent component
      }
    }
  }, [isRunning]);

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  function handleClick() {
    if (!isRunning) {
      const now = new Date();
      setStartTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString());
    } else {
      const now = new Date();
      setEndTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    }

    setIsRunning((prevIsRunning) => !prevIsRunning);

    if (!isRunning) {
      setElapsedTime(0);
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
