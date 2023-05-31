import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TaskTimerButton } from "./TaskTimerButton"
import { TaskInput } from './TaskInput'
import { ExportData } from './ExportData'

import './App.css'

// This project will consist of the following components

// - Button that controls start and end of timer [START and STOP]
// - Timer
// - Input box for tasks
// - Output box that will list all of the tasks that are entered
// - Function to copy exported data to clipboard

export default function App() {
  const [taskData, setTaskData] = useState([]);

  function handleExportData() {
    const exportedData = JSON.stringify(taskData);
    console.log(exportedData);
    // Perform further processing or set the exportedData state
  }


  return (
  <>
    <TaskInput setTaskData={setTaskData}/><br></br>
    <ExportData taskData={taskData}/>
  </>
  );
}

