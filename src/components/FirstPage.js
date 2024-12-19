import React from 'react';
import Header from './Header';
import './FirstPage.css';

function FirstPage() {
  return (
    <div className='firstpage position-relative mt-0'>
      <Header className="header" />
        <div className=' p-4 quote position-absolute top-50 end-0 fs-1 text-white'>
          <div className='fw-normal fs-2 text-end'>Our Philosophy</div>
          <div className='fw-bolder'>Build. Invest. Innovate</div>
        </div>
    </div>
  )
}

export default FirstPage