import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopHeaderComponent from './components/TopHeader/TopHeader'
import { HomePage } from './pages/Home'
import NotFoundPage from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <TopHeaderComponent text="Chat Application Task" />
      <div className="contentContainer">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="*"
            element={<NotFoundPage text="PAGE NOT FOUND" />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
