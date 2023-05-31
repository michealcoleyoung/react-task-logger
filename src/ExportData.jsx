import React from 'react';

export function ExportData({ taskData }) {
  function handleExportClick() {
    const exportedData = JSON.stringify(taskData);
    console.log(exportedData);
    // Perform further processing or set the exportedData state
  }

  return (
    <div>
      <button onClick={handleExportClick}>Export Data</button>
      <br />
      <br />
      <textarea rows={20} cols={50} readOnly  />
    </div>
  );
}
