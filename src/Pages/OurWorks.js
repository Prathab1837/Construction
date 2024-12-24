import React from 'react';
import Header from '../components/Header';
import site1 from '../assets/site1.jpg';
import site2 from '../assets/site2.jpg';
import site3 from '../assets/site3.jpg';
import site4 from '../assets/site4.jpg';
import site5 from '../assets/site5.jpg';
import site6 from '../assets/site6.jpg';

function OurWorks() {
  return (
    <div>
        <Header />

        <div style={{backgroundColor:'rgba(1, 1, 37, 0.893)', color:'azure'}}>
          <div className='py-3 container'>
            <div className='row'>
                <div className='d-flex'>
                    <div className='mt-3 mb-3' style={{height:'1.5px', width:'45px', backgroundColor:'yellow'}}></div>
                    <span className='ms-3 mb-4'>Featured Projects</span>
                </div>
                <div className='mb-4 fs-3 text-center'>Explore some of our projects and see how we're transforming the built world.</div>
            </div>
          </div>
        </div>

        <div className='pt-5' style={{backgroundColor:'azure', color:'rgba(1, 1, 37, 0.893)'}}>
          <div className='container'>
            <div className='row justify-content-center gy-3 cardsHolder'>
            {/* Card 1 */}
            <div className="col-sm-3 card border" style={{ width: '18rem' }}>
              <img src={site1} className="card-img-top" alt="pic" height="240px" />
              <div className="card-body">
                <h5 className="card-title">Webster</h5>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-sm-1"></div>
            <div className="col-sm-3 card border" style={{ width: '18rem' , border: '2px solid red'}}>
              <img src={site2} className="card-img-top" alt="pic" height="240px" />
              <div className="card-body">
                <h5 className="card-title">Broadway</h5>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-sm-1"></div>
            <div className="col-sm-3 card" style={{ width: '18rem' }}>
              <img src={site3} className="card-img-top" alt="pic" height="240px" />
              <div className="card-body">
                <h5 className="card-title">Market Street</h5>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="py-5 accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
                <h4 style={{color:'#C40D3B'}} className='ms-5'>View More</h4>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className='py-5' style={{backgroundColor:'azure', color:'rgba(1, 1, 37, 0.893)'}}>
                  <div className='container'>
                    <div className='row justify-content-center gy-3 cardsHolder'>
                    {/* Card 1 */}
                    <div className="col-sm-3 card border" style={{ width: '18rem' }}>
                      <img src={site4} className="card-img-top" alt="pic" height="240px" />
                      <div className="card-body">
                        <h5 className="card-title">World Trade</h5>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-sm-1"></div>
                    <div className="col-sm-3 card border" style={{ width: '18rem' , border: '2px solid red'}}>
                      <img src={site5} className="card-img-top" alt="pic" height="240px" />
                      <div className="card-body">
                        <h5 className="card-title">Brookline Lab Core/Shell</h5>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-sm-1"></div>
                    <div className="col-sm-3 card" style={{ width: '18rem' }}>
                      <img src={site6} className="card-img-top" alt="pic" height="240px" />
                      <div className="card-body">
                        <h5 className="card-title">Grannville</h5>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>

    </div>
  )
}

export default OurWorks