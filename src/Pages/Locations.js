import React from 'react';
import Header from '../components/Header';
import offices from '../assets/offices.jpg';
import employees from '../assets/employees.jpg';
import revenue from '../assets/revenue.jpg';


function Locations() {
  return (
    <div>
        <Header />
        <div className='py-5' style={{backgroundColor:'rgba(1, 1, 37, 0.893)', color:'azure'}}>
          <div className='container pb-5'>
            <div className='row'>
                <div className='d-flex'>
                    <div className='mt-3 mb-3' style={{height:'1.5px', width:'45px', backgroundColor:'yellow'}}></div>
                    <span className='ms-3'>Our Offices</span>
                </div>
                <div className='fs-1'>Where to find us</div>
            </div>

            <div className='row mt-4'>

                <div style={{color:'azure', backgroundColor:'rgba(3, 3, 72, 0.1)', boxShadow:'0px 0px 10px whitesmoke'}} className="row py-4 text-center rounded">
                  <div style={{color:'#C40D3B'}} className="col-sm fs-4">Chennai</div>
                  <div className="col-sm">
                    <div className='fs-5' style={{color:'#C40D3B'}}>Address</div>
                    <div>65 OMR Street Chennai, 600008</div>
                  </div>
                  <div className="col-sm">
                    <div style={{color:'#C40D3B'}}>Telephone</div>
                    <div>T: 044-21242124</div>
                  </div>
                </div>

            </div>

            <div className='row mt-4'>

                <div style={{color:'azure', backgroundColor:'rgba(3, 3, 72, 0.1)', boxShadow:'0px 0px 10px whitesmoke'}} className="row py-4 text-center rounded">
                  <div style={{color:'#C40D3B'}} className="col-sm fs-4">Hyderabad</div>
                  <div className="col-sm">
                    <div className='fs-5' style={{color:'#C40D3B'}}>Address</div>
                    <div>65 OMR Street Chennai, 600008</div>
                  </div>
                  <div className="col-sm">
                    <div style={{color:'#C40D3B'}}>Telephone</div>
                    <div>T: 044-21242124</div>
                  </div>
                </div>

            </div>

            <div className='row mt-4 '>

                <div style={{color:'azure', backgroundColor:'rgba(3, 3, 72, 0.1)', boxShadow:'0px 0px 10px whitesmoke'}} className="row py-4 text-center rounded">
                  <div style={{color:'#C40D3B'}} className="col-sm fs-4">Delhi</div>
                  <div className="col-sm">
                    <div className='fs-5' style={{color:'#C40D3B'}}>Address</div>
                    <div>65 OMR Street Chennai, 600008</div>
                  </div>
                  <div className="col-sm">
                    <div style={{color:'#C40D3B'}}>Telephone</div>
                    <div>T: 044-21242124</div>
                  </div>
                </div>

            </div>

          </div>
        </div>

        <div style={{backgroundColor:'azure'}} className='container py-5'>
        <div className='row'>
                <div className='d-flex'>
                    <div className='mt-3 mb-3' style={{height:'1.5px', width:'45px', backgroundColor:'#C40D3B'}}></div>
                    <span className='ms-3'>What We Do</span>
                </div>
                <div className='fs-1 mb-4'>By The Numbers</div>
        </div>
          <div className='row justify-content-center gy-3 cardsHolder'>
            {/* Card 1 */}
            <div className="col-sm-3 card border" style={{ width: '18rem' }}>
              <img src={offices} className="card-img-top" alt="pic" height="240px" />
              <div className="card-body">
                <h5 className="card-title">Continuing our long, proud history of building across the India</h5>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-sm-1"></div>
            <div className="col-sm-3 card border" style={{ width: '18rem' , border: '2px solid red'}}>
              <img src={employees} className="card-img-top" alt="pic" height="240px" />
              <div className="card-body">
                <h5 className="card-title">Who redefine how India builds every day.</h5>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-sm-1"></div>
            <div className="col-sm-3 card" style={{ width: '18rem' }}>
              <img src={revenue} className="card-img-top" alt="pic" height="240px" />
              <div className="card-body">
                <h5 className="card-title">Making us one of the largest contractors in the country.</h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Locations