import React from 'react';
import './ThirdPage.css';
import { IoIosArrowDropright } from "react-icons/io";
import careerImg from '../assets/career.jpg';
import leadershipImg from '../assets/leadership.jpg';
import newImg from '../assets/new.jpg';

function ThirdPage() {
  return (
    <div className='thirdpage'>
      <div className='container cardStack'>
        <div className='row justify-content-center gy-3 cardsHolder'>
          {/* Card 1 */}
          <div className="col-sm-3 card border" style={{ width: '18rem' }}>
            <img src={careerImg} className="card-img-top" alt="pic" height="240px" />
            <div className="card-body">
              <h5 className="card-title">We Build Your Thoughts</h5>
              <a href="#">Learn More</a>
              <IoIosArrowDropright className='arrow' />
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-sm-1"></div>
          <div className="col-sm-3 card border" style={{ width: '18rem' , border: '2px solid red'}}>
            <img src={leadershipImg} className="card-img-top" alt="pic" height="240px" />
            <div className="card-body">
              <h5 className="card-title">Meet Our Leadership</h5>
              <a href="#">Learn More</a>
              <IoIosArrowDropright className='arrow' />
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-sm-1"></div>
          <div className="col-sm-3 card" style={{ width: '18rem' }}>
            <img src={newImg} className="card-img-top" alt="pic" height="240px" />
            <div className="card-body">
              <h5 className="card-title">Discover What's new</h5>
              <a href="#">Learn More</a>
              <IoIosArrowDropright className='arrow' />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 container approach px-2'>
        <div className='row mt-4'>
          <div className='col-sm-12'>
            <div className='d-flex mb-3'>
              <div
                className='mt-3 me-3'
                style={{ height: '1.5px', width: '45px', backgroundColor: '#C40D3B' }}
              ></div>
              <span>Our Approach</span>
            </div>
            <div className='mb-5'>
              <h1>A quest for better</h1>
            </div>
            <div style={{ maxWidth: '300px' }} className='mb-4'>
              <div className='letters ms-5 mb-4' style={{ lineHeight: '30px', letterSpacing: '2px' }}>
                To explore and go after new ways to build, we've gathered the people,
                innovations, and partnerships that can anticipate and overcome new
                challenges.
              </div>
              <div className='text-primary'>
                Discover our approach <IoIosArrowDropright className='arrow' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
