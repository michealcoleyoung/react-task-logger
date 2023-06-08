import React from 'react';

export function ExportData({ taskData }) {
  function handleExportClick() {
    const formattedData = taskData.map((taskItem) => {
      const { task, taskTimes } = taskItem;
      const { startTime, endTime, currentDate, elapsedTime } = taskTimes;
      return `Task: ${task}\nStart Time: ${startTime}\nEnd Time: ${endTime}\nDate: ${formatDate(currentDate)}\nTime Worked: ${elapsedTime}\n`;
    });

    const exportedData = formattedData.join('\n');

    // Copy the data to the clipboard
    navigator.clipboard.writeText(exportedData)
      .then(() => {
        console.log('Data copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy data to clipboard:', error);
      });
  }

  function formatDate(dateString) {
    const [month, day, year] = dateString.split('/');
    return `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`;
  }

  return (
    <div>
      <button onClick={handleExportClick}>Export Data</button>
      <br />
      <br />
      <textarea rows={20} cols={50} value={taskData.map((taskItem) => {
        const { task, taskTimes } = taskItem;
        const { startTime, endTime, currentDate, elapsedTime } = taskTimes;
        return `Task: ${task}\nStart Time: ${startTime}\nEnd Time: ${endTime}\nDate: ${formatDate(currentDate)}\nTime Worked: ${elapsedTime}\n`;
      }).join('\n')} />
    </div>
  );
}
