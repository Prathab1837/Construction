import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';


function Home() {
  return (
    <div>
          <FirstPage />
          <SecondPage />
          <ThirdPage />
          <FourthPage />
    </div>
  )
}

export default Home