import React, { useState } from 'react';
import { TaskInput } from './TaskInput';

// Basic structure of component will be set here
// Functionality will be included in the main App

export function ExportData() {
  const [exportedData, setExportedData] = useState('');

  function handleExportClick() {

      // Get the task information from the TaskInput component or any other source
      const taskName = 'Task 1';
      const taskStart = '04:06 AM';
      const timeWorked = '20:53';
      const taskDate = '05/20/2023';
      const taskEnd = '04:10 AM';
  
      const exportDataString = `Task Name: ${taskName}\nTask Start: ${taskStart}\nTime Worked: ${timeWorked}\nTask Date: ${taskDate}\nTask End: ${taskEnd}`;
  
      setExportedData(exportDataString);
      console.log('Test message')

  }

 

  return (
    <div>
      <button onClick={handleExportClick}>Export Data</button><br></br><br></br>
      <textarea rows={20} cols={50}>
        {exportedData}
      </textarea>
    </div>
  );
}
