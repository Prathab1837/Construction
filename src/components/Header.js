import React from 'react';
import {FiPhoneCall} from 'react-icons/fi';
import './Header.css';
import logo from '../assets/SuffolkLogo.jpg';
import {Link} from 'react-router-dom';
import Form from '../Pages/Form';

function Header() {
  return (
<>
      <nav className=" navbar navbar-expand-lg position-relative">
        <div className=" navigator container-fluid py-2">
          <a className="navbar-brand ms-5" href="#"><img src={logo} alt="Logo" width={150} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-2" id="navbarNavDropdown">
            <ul style={{marginLeft:'170px'}} className="navbar-nav">
            <li className="nav-item dropdown ms-5 nav-underline">
                <div className="nav-link"  role="button" aria-expanded="false">
                  <Link to='/home'>Home</Link>
                </div>
            </li>
            <li className="nav-item dropdown ms-5 nav-underline">
                <div className="nav-link"  role="button" aria-expanded="false">
                  <Link to='/about'>About Us</Link>
                </div>
            </li>

              <li className="nav-item dropdown ms-5 nav-underline">
                <div className="nav-link" role="button" aria-expanded="false">
                  <Link to='/locations'>Locations</Link>
                </div>
              </li>
              
              <li className="nav-item dropdown ms-5 me-5 nav-underline">
                <div className="nav-link" role="button" aria-expanded="false">
                  <Link to='/ourworks'>Our Works</Link>
                </div>
              </li>

            </ul>

            <div className='d-flex ms-5'>
              <FiPhoneCall className='mt-1 me-3' />
              {/* <Link to='/form'>Contact Us</Link> */}
              <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Contact</div>
            </div>

          </div>
        </div> 
      </nav>
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <Form />
        </div>
      </div>
</>


  )
}

export default Header