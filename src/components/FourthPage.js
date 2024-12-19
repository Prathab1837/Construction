import React from 'react';
import './FourthPage.css';
import images from '../assets/constructionbg.jpg';
import imagetwo from '../assets/building.jpg';
function FourthPage() {
  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-touch="true" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            <img src={images} className="d-block w-100" alt="pic"/>
            <div style={{backgroundColor:'white'}} className="carousel-caption slideLetters d-none d-md-block">
                <h6 style={{color:'grey'}}>How We Work</h6>
                <h2 style={{color:'rgba(1, 1, 37, 0.893)'}}>Innovation</h2>
                <p style={{color:'#C40D3B'}}>Construction is ready for a technology revolution</p>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={images} className="d-block w-100" alt="pic"/>
            <div style={{backgroundColor:'white'}} className="carousel-caption d-none d-md-block">
                <h6 style={{color:'grey'}}>How We Work</h6>
                <h2 style={{color:'rgba(1, 1, 37, 0.893)'}}>Innovation</h2>
                <p style={{color:'#C40D3B'}}>Construction is ready for a technology revolution</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src={images} className="d-block w-100" alt="pic"/>
            <div style={{backgroundColor:'white'}} className="carousel-caption d-none d-md-block">
                <h6 style={{color:'grey'}}>How We Work</h6>
                <h2 style={{color:'rgba(1, 1, 37, 0.893)'}}>Innovation</h2>
                <p style={{color:'#C40D3B'}}>Construction is ready for a technology revolution</p>
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
    </>
  )
}

export default FourthPage