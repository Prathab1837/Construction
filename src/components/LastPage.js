import React from 'react'
import logo from '../assets/SuffolkLogo.jpg';
import { LiaFacebookF, LiaLinkedin, LiaInstagram, LiaYoutube } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import './LastPage.css';

function LastPage() {
  return (
    <div className='lastpage py-5'>
        <div className='container'>
            <div className='row'>

                <div className='col-sm'>
                    <div className='mb-5'><img src={logo} alt="pic" width={300} /></div>
                    <div className='details py-4 row'>
                        <div className='col'><h6>More from Suffolk</h6> 
                            <div>
                                <div className='underlineText'>Suffolk Captital</div>
                                <div className='underlineText'>Suffolk Design</div>
                            </div>
                        </div>
                        <div className='col'><h6>Helpful Pages</h6>
                            <div className='underlineText'>Projects</div>
                        </div>
                        <div className='col'><h6>Other Links</h6>
                            <div className='underlineText'>Privacy Policy</div>
                        </div>
                    </div>
                </div>

                <div className='col-sm'>
                    <div className='mt-5 row'>
                        <div className=' details col-6'>
                            <div className='underlineText'><h5>About Us</h5></div>
                            <div className='underlineText'><h5>Location</h5></div>
                            <div className='underlineText'><h5>News and Outreach</h5></div>
                            <div className='underlineText'><h5>Works</h5></div>
                        </div>
                        <div className='col-6'>
                            <div><h6>Need to reach us ?</h6></div>
                            <div className='mt-4'>We're here to answer all your questions.
                                Fill out our contact form and we'll connect 
                                you with the people who can help.
                            </div>
                            <div className='btn btn-danger mt-4'>Contact Us</div>
                            <div className='mt-4'>
                                <LiaFacebookF size={20} />
                                <LiaLinkedin size={25} className='ms-2'/>
                                <FaXTwitter size={25} className='ms-2'/>
                                <LiaInstagram size={25} className='ms-2'/>
                                <LiaYoutube size={25} className='ms-2'/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <hr />
                <small>© 2024 Suffolk Construction Company. All Rights Reserved.</small>
            </div>
        </div>
    </div>
  )
}

export default LastPage