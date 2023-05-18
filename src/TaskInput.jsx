import { useState, useEffect } from 'react';

export function TaskInput(props) {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log(tasks);
      }, [tasks]);
  
    function handleChange(event) {
      setTask(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      if(task.trim() !== '')
      // Add the task to the tasks array
      setTasks([...tasks, task]);
      // Clears the task input field
      setTask('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
    );
  }
