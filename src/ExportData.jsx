import React from 'react';

// This is what the output will look like once the ExportData component is complete
// Task Name: Task 1
// Task Start: 04:06 AM
// Task End: 04:06 AM
// Time Worked: 20:53
// Task Date: 05/20/2023

export function ExportData({ tasks, onExportData }) {
  const handleExportData = () => {
    onExportData(tasks);
  };

  return (
    <div>
      <button onClick={handleExportData}>Export Data</button>
      <h2>Exported Tasks</h2>
    </div>
  );
}
