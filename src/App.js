import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Locations from './Pages/Locations'
import OurWorks from './Pages/OurWorks'
import LastPage from './components/LastPage'
import Form from './components/Form'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='locations' element={<Locations />} />
        <Route path='ourworks' element={<OurWorks />} />
        <Route path='form' element={<Form />} />
      </Routes>
      <LastPage />
    </BrowserRouter>
  
  )
}

export default App