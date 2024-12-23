import React from 'react';
import Header from '../components/Header';
import LastPage from '../components/LastPage';
import trophy from '../assets/trophy.png';

function About() {
  return (
    <div>
        <Header />
        <div style={{backgroundColor:'rgba(1, 1, 37, 0.893)', color:'azure'}}>
            <div className='container'>
                <div className="row">
                    <div className='col-6'>
                    <div className=' mt-3 d-flex'>
                        <div className='mt-3 mb-3' style={{height:'1.5px', width:'45px', backgroundColor:'yellow'}}></div>
                            <span className='ms-3'>Our Vision</span>
                        </div>
                        <div className='fs-1 mt-2 fw-bold'>A bold direction</div>
                    </div>
                    <div className='col-6'></div>
                </div>
                <div className='row'>
                    <div className="col-6 "></div>
                    <div className='py-5 mt-5 mb-4 col-6'>We believe that when caring, ambitious people come together, anything is possible.
                        We stand up for and do what's right. We challenge conventions to drive meaningful,
                        positive progress for our clients, our industry, and our communities. While we have distinct and
                        diverse skills and perspectives, we're united in our endless quest to redefine what's possible.
                    </div>
                </div>
            </div>
        </div>

        <div style={{color:'rgba(1, 1, 37, 0.893)', backgroundColor:'azure'}}>
            <div className='container'>
                <div className="row">
                    <div className="mt-5 mb-5 col text-center">
                        <div className='mb-2 fs-1'>Our Core Values</div>
                        <img src={trophy} alt="pic" width={70} />
                    </div>
                    <div className="row mt-3 mb-5 border py-4">
                        <div className="col-sm text-center fs-2">Passion. Integrity. Hard work. Professionalism. Caring.</div>
                        <div className="mt-5 col-sm">These core values have been with us since the beginning, and they've infused who we are and how we build. 
                            Nothing brings us more excitement than transforming the skyline — 
                            and we do it by setting our standards high, striving for the best, building trust,
                            and lifting up the people around us.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About