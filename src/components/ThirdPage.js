import React from 'react';
import './ThirdPage.css';
import { IoIosArrowDropright } from "react-icons/io";
import bricks from '../assets/bricks.jpg';
import cement from '../assets/cement.jpg';
import steel from '../assets/steel.jpg';

function ThirdPage() {
  return (
    <div className='thirdpage'>
      <div className='container cardStack'>
        <div className='row justify-content-center gy-3 cardsHolder'>
          {/* Card 1 */}
          <div className="col-sm-3 card border" style={{ width: '18rem' }}>
            <img src={bricks} className="card-img-top" alt="pic" height="240px" />
            <div className="card-body">
              <h5 className="card-title">Bricks</h5>
              <ul>
                <li>High-density clay bricks</li>
                <li>Load-bearing capacity approved</li>
                <li>Water absorption within permissible limits</li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-sm-1"></div>
          <div className="col-sm-3 card border" style={{ width: '18rem' , border: '2px solid red'}}>
            <img src={cement} className="card-img-top" alt="pic" height="240px" />
            <div className="card-body">
              <h5 className="card-title">Cement</h5>
              <ul>
                <li>Compressive strength: Laboratory-verified</li>
                <li>Early strength gain monitored</li>
                <li>High adhesive properties for superior bonding</li>
              </ul>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-sm-1"></div>
          <div className="col-sm-3 card" style={{ width: '18rem' }}>
            <img src={steel} className="card-img-top" alt="pic" height="240px" />
            <div className="card-body">
              <h5 className="card-title">Steel</h5>
              <ul>
                <li>Steel materials are sourced from ISO 9001-certified manufacturing facilities</li>
                <li>All steel bars undergo mechanical tests</li>
              </ul>
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
