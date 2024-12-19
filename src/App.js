import React from 'react'
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import FourthPage from './components/FourthPage'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"


function App() {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  )
}

export default App