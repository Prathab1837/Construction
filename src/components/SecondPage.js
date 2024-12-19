import React from 'react'
import './SecondPage.css';
import png from '../assets/apartmentpng.png';

function SecondPage() {
  return (
    <div className='secondpage m-0'>
        <div className='mt-0 ms-4'>
            <img className='pngimage' src={png} alt="pic" />
        </div>
        <div className='container py-5'>
            <div className='container-fluid mb-5'>
                <div className='row firstRow py-5'>
                    <div className='col-sm-6 mt-5 py-2 px-5'>
                        <div className='d-flex'>
                            <div className='mt-3' style={{height:'1.5px', width:'45px', backgroundColor:'yellow'}}></div>
                            <span className='ms-3'>Our Story</span>
                        </div>
                        <div>
                            <div className='fs-2 mb-3'>We Redefine What's Possible</div>
                            <div>As a national leader in our industry, Suffolk is revolutionizing what you expect from a contractor.</div>
                            <div className='btn btn-danger mt-3 mb-3'>See Our Work</div>
                        </div>
                    </div>
                    <div className='col-sm-6 imageBoxOne'>
                    </div>
                </div>
            </div>

            <div className='container-fluid mb-5 pb-5'>
                    <div className='row secondRow mb-5'>
                        <div className='col-sm imageBoxTwo'>
                    </div>
                    <div className='col-sm mt-4 py-2 px-5'>
                        <div className='d-flex'>
                            <div className='mt-3' style={{height:'1.5px', width:'45px', backgroundColor:'yellow'}}></div>
                            <span className='ms-3'>Our Impact</span>
                        </div>
                        <div>
                            <div className='fs-2 mb-3'>Our Commitment To Social Impact</div>
                            <div>Our pride in being America's Contractor — a company that cares deeply about our people, partners, quality and innovation — comes to life in many ways. Learn more about how we’re making a difference in our industry and our communities by building an inclusive culture, ensuring the safety of our workers and acting on our core values.</div>
                            <div className='btn btn-danger mt-3'>See Our 2024 Impact Report</div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondPage