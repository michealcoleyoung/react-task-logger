import React, { useState } from 'react';

export function ExportData({ taskData }) {
  const [exportedData, setExportedData] = useState('');

  function handleExportClick() {
    setExportedData(JSON.stringify(taskData, null, 2));
  }

  return (
    <div>
      <button onClick={handleExportClick}>Export Data</button>
      <br />
      <br />
      <textarea rows={20} cols={50} value={exportedData} readOnly />
    </div>
  );
}
