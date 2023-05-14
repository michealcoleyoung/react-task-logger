import { useState } from 'react';

export function TaskInput() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
  
    function handleChange(event) {
      setTask(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      if(task.trim() !== '')
      // Add the task to the tasks array
      setTasks([...tasks, task]);
      // Clear the task input field
      setTask('');
      console.log(tasks)
   
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
    );
  }
