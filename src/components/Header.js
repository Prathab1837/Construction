import React from 'react';
import {FiPhoneCall} from 'react-icons/fi';
import './Header.css';
import logo from '../assets/SuffolkLogo.jpg';

function Header() {
  return (

      <nav className=" navbar navbar-expand-lg position-relative">
        <div className=" navigator container-fluid py-2">
          <a className="navbar-brand ms-5" href="#"><img src={logo} alt="Logo" width={150} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-2" id="navbarNavDropdown">
            <ul style={{marginLeft:'170px'}} className="navbar-nav">
            <li className="nav-item dropdown ms-4 nav-underline">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
            </li>

              <li className="nav-item dropdown ms-4 nav-underline">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Locations
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">India</a></li>
                  <li><a className="dropdown-item" href="#">America</a></li>
                  <li><a className="dropdown-item" href="#">Japan</a></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown ms-4 nav-underline">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Works
                </a>
              </li>

              <li className="nav-item dropdown ms-4 me-5 nav-underline">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Careers
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

            </ul>

            <div className='ms-5'>
              <FiPhoneCall className='me-3' />
              <span>Contact Us</span>
            </div>

          </div>
        </div>
      </nav>

  )
}

export default Header