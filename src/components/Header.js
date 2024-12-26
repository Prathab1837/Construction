import React from 'react';
import {FiPhoneCall} from 'react-icons/fi';
import './Header.css';
import logo from '../assets/SuffolkLogo.jpg';
import {Link} from 'react-router-dom';
import Form from '../Pages/Form';
import 'animate.css';

function Header() {
  return (
<>
      <nav className=" navbar navbar-expand-lg position-relative">
        <div className=" navigator container-fluid py-2">
          <Link to='/home' className="navbar-brand ms-5" href="#"><img className='animate__animated animate__lightSpeedInLeft' src={logo} alt="Logo" width={150} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
            <ul style={{marginLeft:'170px'}} className="navbar-nav">

              <Link to='/about'>
              <li className="nav-item dropdown ms-5 nav-underline">
                  <div className="nav-link"  role="button" aria-expanded="false">
                    About Us
                  </div>
              </li>
              </Link>

              <Link to='/locations'>
              <li className="nav-item dropdown ms-5 nav-underline">
                <div className="nav-link" role="button" aria-expanded="false">
                  Locations
                </div>
              </li>
              </Link>
              
              <Link to='/ourworks'>
              <li className="nav-item dropdown ms-5 me-5 nav-underline">
                <div className="nav-link" role="button" aria-expanded="false">
                  Our Works
                </div>
              </li>
              </Link>

              <li className='d-flex mt-2 ms-5'>
                {/* <Link to='/form'>Contact Us</Link> */}
                <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                  <FiPhoneCall className='me-3' size={23} />
                    Contact
                </div>
              </li>

            </ul>
          </div>
        </div> 
      </nav>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <Form />
        </div>
      </div>
</>


  )
}

export default Header