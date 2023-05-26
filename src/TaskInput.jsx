import React, { useState, useEffect } from 'react';
import { TaskTimerButton } from './TaskTimerButton';

export function TaskInput() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  useEffect(() => {
    console.log(selectedTasks);
  }, [selectedTasks])


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
    setSelectedTasks((prevSelectedTasks) => [...prevSelectedTasks, task]);
  }

  function handleDeleteTask(task, event) {
    event.stopPropagation(); // Prevent task selection
    setTasks(tasks.filter((t) => t !== task));
    if (selectedTask === task) {
      setSelectedTask('');
      // setElapsedTime(0);
    }
  }

  return (
    <div>
      <h2>{selectedTask}</h2>
      <div>
        <TaskTimerButton />
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
