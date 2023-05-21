import React, { useState, useEffect } from 'react';
import { TaskTimerButton } from './TaskTimerButton';

export function TaskInput(props) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');
  const [deletedTask, setDeletedTask] = useState(null);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  if (tasks.length === 0) {
    console.log('There are no tasks');
  }

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
  }

  function handleDeleteTask(task, event) {
    event.stopPropagation(); // Prevent task selection
    setTasks(tasks.filter((t) => t !== task));
    if (selectedTask === task) {
      setSelectedTask('');
    }
    setDeletedTask(task);
  }

  return (
    <div>
      {selectedTask}
      <TaskTimerButton selectedTask={selectedTask} />
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
              textDecoration: deletedTask === task ? 'line-through' : 'none',
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
