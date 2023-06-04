import React from 'react';

export function ExportData({ taskData }) {
  function handleExportClick() {
    const formattedData = taskData.map((taskItem) => {
      const { task, taskTimes } = taskItem;
      const { startTime, endTime, currentDate, elapsedTime } = taskTimes;
      return `Task: ${task}\nDate: ${currentDate}\nTime Worked: ${elapsedTime}\nStart Time: ${startTime}\nEnd Time: ${endTime}\n================\n`;
    });

    const exportedData = formattedData.join('\n');
    console.log(exportedData);
  }

  return (
    <div>
      <button onClick={handleExportClick}>Export Data</button>
      <br />
      <br />
      <textarea rows={20} cols={50}>
  
      </textarea>
    </div>
  );
}
