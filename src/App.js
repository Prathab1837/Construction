import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Locations from './Pages/Locations'
import OurWorks from './Pages/OurWorks'
import LastPage from './components/LastPage'
// import Form from './Pages/Form'

import { useState, useEffect } from 'react';
import Loading from './Pages/Loading'

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        // Creating a timeout within the useEffect hook
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, []);

    if (isLoading) {
    return <div>
              <Loading />
           </div>;
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='locations' element={<Locations />} />
          <Route path='ourworks' element={<OurWorks />} />
          {/* <Route path='form' element={<Form />} /> */}
        </Routes>
        <LastPage />
      </BrowserRouter>
    );
    
}

export default App