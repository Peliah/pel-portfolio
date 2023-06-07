import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from './components'
import { Homepage } from './pages'
const App = () => {
  return (
    <div  style={{background:"#282C33"}}>
      <Router >
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App