import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
// import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes> */}
    </div>
  )
}

export default App