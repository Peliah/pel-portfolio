import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from './components'
import { Homepage } from './pages'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App