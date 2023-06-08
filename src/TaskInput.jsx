import React, { useState, useEffect } from 'react';
import { TaskTimerButton } from './TaskTimerButton';

export function TaskInput({ setTaskData }) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (task.trim() !== '') {
      const newTask = {
        task: task,
        taskTimes: {
          startTime: '',
          endTime: '',
          currentDate: '',
          elapsedTime: '',
        },
      };
      setTasks([...tasks, newTask]);
      setTaskData([...tasks, newTask]); // Update the taskData in the parent component
      setTask('');
    }
  }

  function handleTaskSelect(task) {
    setSelectedTask(task);
  }

  function handleDeleteTask(task, event) {
    event.stopPropagation(); // Prevent task selection when clicking Delete
    setTasks(tasks.filter((t) => t.task !== task.task));
    if (selectedTask === task.task) {
      setSelectedTask('');
    }
  }

  return (
    <div>
      <h2>{selectedTask}</h2>
      <div>
        <TaskTimerButton
          tasks={tasks}
          setTasks={setTasks}
          selectedTask={selectedTask}
          setTaskData={setTaskData}
        />
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
            onClick={() => handleTaskSelect(task.task)}
            style={{
              cursor: 'pointer',
              fontWeight: selectedTask === task.task ? 'bold' : 'normal',
            }}
          >
            {task.task}
            <button onClick={(event) => handleDeleteTask(task, event)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
