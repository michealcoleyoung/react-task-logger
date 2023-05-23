import React, { useState, useEffect } from 'react';

export function TaskInput() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  useEffect(() => {
    if (isTimerRunning) {
      const intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isTimerRunning]);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  }

  function handleTaskSelect(task) {
    setSelectedTask(task);
    setElapsedTime(0);
    setIsTimerRunning(false);
  }

  function handleDeleteTask(task, event) {
    event.stopPropagation(); // Prevent task selection
    setTasks(tasks.filter((t) => t !== task));
    if (selectedTask === task) {
      setSelectedTask('');
      setElapsedTime(0);
    }
  }

  function handleTimerStartStop() {
    setIsTimerRunning((prevIsTimerRunning) => !prevIsTimerRunning);
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  return (
    <div>
      {selectedTask}
      <div>
        <h1>{formatTime(elapsedTime)}</h1>
        <button onClick={handleTimerStartStop}>{isTimerRunning ? 'Stop' : 'Start'}</button>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
      <br />
      <div>
        {tasks.map((task, index) => (
          <div
            key={index}
            onClick={() => handleTaskSelect(task)}
            style={{
              cursor: 'pointer',
              fontWeight: selectedTask === task ? 'bold' : 'normal',
            }}
          >
            {task}
            <button onClick={(event) => handleDeleteTask(task, event)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
