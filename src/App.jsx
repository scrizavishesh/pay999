import React from 'react'
import HomePage from './Pages/HomePage'
import MainLayout from './MainLayout/MainLayout'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainLayout/>
      </BrowserRouter>
    </>
  )
}

export default App