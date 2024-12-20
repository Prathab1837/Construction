import React from 'react';
import './FourthPage.css';
import imageone from '../assets/img1.png';
import imagetwo from '../assets/img2.jpg';
import imagethree from '../assets/img3.jpg';
import imagefour from '../assets/img4.jpg';
import { SiPinboard } from "react-icons/si";
function FourthPage() {
  return (
    <div style={{backgroundColor:'#F1F1F1'}}>
    <div className='py-4'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-touch="true" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
                <img src={imageone} className="d-block w-100" alt="pic"/>
            <div style={{backgroundColor:'#F1F1F1'}} className="carousel-caption slideBox d-none d-md-block">
                <SiPinboard size={50} color="#4C0070" className='pin'/>
                <div className='slideLetters'>
                    <h6 style={{color:'grey'}}>How We Work</h6>
                    <h2 className='mb-4' style={{color:'rgba(1, 1, 37, 0.893)'}}>Innovation</h2>
                    <p style={{color:'#C40D3B'}}>Innovation in construction transforms the industry with advanced technologies, sustainable methods, and smart designs, delivering efficient, eco-friendly, and future-ready solutions</p>
                </div>     
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
            <img src={imagetwo} className="d-block w-100" alt="pic"/>
            <div style={{backgroundColor:'#F1F1F1'}} className="carousel-caption slideBox d-none d-md-block">
                <SiPinboard size={50} color="#4C0070" className='pin'/>
                <div className="slideLetters">
                    <h6 style={{color:'grey'}}>How We Work</h6>
                    <h2 className='mb-4' style={{color:'rgba(1, 1, 37, 0.893)'}}>Plan+Control</h2>
                    <p style={{color:'#C40D3B'}}>Suffolk's pioneering process combines methodical planning, new standards and a team-oriented modeling approach.</p>
                </div>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
            <img src={imagethree} className="d-block w-100" alt="pic"/>
            <div style={{backgroundColor:'#F1F1F1'}} className="carousel-caption slideBox d-none d-md-block">
                <SiPinboard size={50} color="#4C0070" className='pin'/>
                <div className="slideLetters">
                    <h6 style={{color:'grey'}}>How We Work</h6>
                    <h2 className='mb-4' style={{color:'rgba(1, 1, 37, 0.893)'}}>Safety</h2>
                    <p style={{color:'#C40D3B'}}>Safety in construction ensures secure worksites through rigorous protocols,
                    protective equipment, training, and compliance, fostering accident-free, hazard-free environments for all.</p>
                </div>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
            <img src={imagefour} className="d-block w-100" alt="pic"/>
            <div style={{backgroundColor:'#F1F1F1'}} className="carousel-caption slideBox d-none d-md-block">
                <SiPinboard size={50} color="#4C0070" className='pin'/>
                <div className="slideLetters">
                    <h6 style={{color:'grey'}}>How We Work</h6>
                    <h2 className='mb-4' style={{color:'rgba(1, 1, 37, 0.893)'}}>Sustainability</h2>
                    <p style={{color:'#C40D3B'}}>We're committed to the holistic integration of sustainable practices within the built environment.</p>
                </div>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
    </div>
  )
}

export default FourthPage