import React, { useState, useEffect } from 'react';
import { TaskTimerButton } from './TaskTimerButton';

export function TaskInput(props) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
      console.log(setTask)
    }
  }

  function handleTaskSelect(task) {
    setSelectedTask(task);
  }

  return (
    <div>
    {selectedTask}
    <TaskTimerButton />
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
      <div>
        {tasks.map((task, index) => (
          <div
            key={index}
            onClick={() => handleTaskSelect(task)}
            style={{ cursor: 'pointer', fontWeight: selectedTask === task ? 'bold' : 'normal' }}
          >
            {task}
          </div>
        ))}
      </div>
    </div>
  );
}