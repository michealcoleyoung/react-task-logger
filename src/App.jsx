import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {TaskTimerButton} from "./TaskTimerButton";

import './App.css'

// This project will consist of the following components

// - Button that controls start and end of timer
// - Timer
// - Input box for tasks
// - Output box that will list all of the tasks that are entered
// - Function to copy exported data to clipboard

function App() {

  return (
    <>
      <TaskTimerButton />
      <h1>This is a test</h1>
    <>
  )
}

export default App
