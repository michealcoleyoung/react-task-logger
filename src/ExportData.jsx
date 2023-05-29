import React, { useState } from 'react';
import { TaskInput } from './TaskInput';

// Basic structure of component will be set here
// Functionality will be included in the main App

export function ExportData() {
  const [exportedData, setExportedData] = useState('');

  function handleExportClick() {
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
