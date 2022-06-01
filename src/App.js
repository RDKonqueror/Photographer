import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Blogs from './components/Blogs'
import About from './components/About'
import Navigations from './components/Navigations'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Navigations />
    </>
  )
}

export default App