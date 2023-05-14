import { useState } from 'react';

export function TaskInput() {
  const [task, setTask] = useState('');

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Do something with the task, such as add it to an array
    setTask('');
    console.log(task);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}
