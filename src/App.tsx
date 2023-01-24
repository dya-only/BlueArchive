import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import PickUp from './pages/PickUp'
import Main from './pages/Main'
import Students from './pages/Students'
import Task from './pages/Task'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pickup" element={<PickUp />} />
      <Route path="/students" element={<Students />} />
      <Route path="/task" element={<Task />} />
    </Routes>
  )
}

export default App