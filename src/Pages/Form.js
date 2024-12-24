import React from 'react'
import Header from '../components/Header'
import './Form.css'
import About from '../Pages/About'

function Form() {
  return (
    <div>
        <div className='py-4' style={{backgroundColor:'rgba(1, 1, 37, 0.893)', color:'azure'}}>
            <div className='container'>
            <div className='row'>
                    <div className='d-flex'>
                        <div className='mt-3 mb-3' style={{height:'1.5px', width:'45px', backgroundColor:'yellow'}}></div>
                        <span className='ms-3'>Contact Us</span>
                    </div>
                    <div className='fs-1 mb-3'>We’d love to hear from you</div>
                    <div className='mb-4'>Have questions or want to chat? Fill out our contact form,
                         and we’ll put you in touch with the right people.
                    </div>
                    <small>*indicates required field</small>
            </div>
            </div>
        </div>

        <div className='py-5' style={{color:'rgba(1, 1, 37, 0.893)', backgroundColor:'azure'}}>
            <div className='container'>
                <div className='border p-2'>
                    <form action="">
                        <div className='row'>
                            <div className='row'><label htmlFor="name">Name *</label></div>
                            <div className='row'><input type="text" name='name' /></div>
                        </div>
                        
                        <div className='row'>
                            <div className='row'><label htmlFor="phone">Phone Number *</label></div>
                            <div className='row'><input type="text" name='phone' /></div>
                        </div>
                        
                        <div className='row'>
                            <div className='row'><label htmlFor="email">Email</label></div>
                            <div className='row'><input type="email" name='email' /></div>
                        </div>

                        <div className='row'>
                            <div className='row'><label htmlFor="location">Your location</label></div>
                            <div className='row'><input type="text" name='location' /></div>
                        </div>
                        
                        <div className='row'>
                            <div className='row'><label htmlFor="reason">Reason for contact *</label></div>
                            <div className='row'>
                            <select name='reason'>
                                <option value="Press Inquiries">Press Inquiries</option>
                                <option value="Business Development">Business Development</option>
                                <option value="Trade Partner Prequalification">Trade Partner Prequalification</option>
                                <option value="Federal Bidding Opportunities">Federal Bidding Opportunities</option>
                                <option value="Others">Others</option>
                            </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='row'><label htmlFor="message">Message</label></div>
                            <div className='row'><textarea name="message" id=""></textarea></div>
                        </div>

                        <div className='mt-5 row'>
                            <div className='btn btn-primary'>Submit</div>
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Form