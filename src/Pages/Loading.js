import React from 'react';
import logo from '../assets/SuffolkLogo.jpg';
import './Loading.css';
import 'animate.css';

function Loading() {
  return (
    <div className='loader'>
        <div className='container backgroundBox'>
            <div style={{height:'100vh', overflow:'hidden'}} className='row'>
                <div style={{backgroundColor:'rgba(1, 1, 37, 0.893)', overflow:'hidden'}} className='animate__animated animate__slideOutLeft animate__delay-2s animate__slow col-sm'></div>
                <div style={{backgroundColor:'rgba(1, 1, 37, 0.893)'}} className='animate__animated animate__slideOutRight animate__delay-2s animate__slow col-sm'></div>
                <div style={{backgroundColor:'rgba(1, 1, 37, 0.893)'}} className='animate__animated animate__slideOutLeft animate__delay-2s animate__slow col-sm'></div>
                <div style={{backgroundColor:'rgba(1, 1, 37, 0.893)'}} className='animate__animated animate__slideOutRight animate__delay-2s animate__slow col-sm'></div>
                <div style={{backgroundColor:'rgba(1, 1, 37, 0.893)'}} className='animate__animated animate__slideOutLeft animate__delay-2s animate__slow col-sm'></div>
                <div style={{backgroundColor:'rgba(1, 1, 37, 0.893)'}} className='animate__animated animate__slideOutRight animate__delay-2s animate__slow col-sm'></div>
            </div>

            <div className='container p-3 loadingImage'>
                <img src={logo} alt="logo" width={270} />
                <div className='mt-5'>
                    <div style={{color:'azure'}} className='fs-3 loadingQuotes'>We shape our buildings; thereafter, they shape us.</div>
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default Loading

