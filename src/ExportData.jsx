import React from 'react';

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
