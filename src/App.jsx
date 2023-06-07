import React, { useState } from 'react';
import { TaskInput } from './TaskInput';
import { ExportData } from './ExportData';
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


