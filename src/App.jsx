import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TaskTimerButton } from "./TaskTimerButton"
import { TaskInput } from './TaskInput'
import { ExportData } from './ExportData'

import './App.css'

export default function App() {
  const [taskData, setTaskData] = useState([]);

  function updateTaskData(updatedTaskData) {
    setTaskData(updatedTaskData);
  }

  return (
    <>
      <TaskInput setTaskData={updateTaskData} /><br></br>
      <ExportData taskData={taskData} />
    </>
  );
}
