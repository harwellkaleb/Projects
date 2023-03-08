import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans' ><a href="http://maps.apple.com/?q=14s+2nd+St.,+Temple,+TX+76502">14 S 2nd St Temple, TX 76501</a></p>
        <p className='p__opensans' style={{color:'#C0C0C0', margin: '2rem, 0' }}>Opening Hours</p>
        <p className='p__opensans' >Mon - Thu: 11:00 am - 9:00 pm</p>
        <p className='p__opensans' >Fri - Sat: 11:00 am - 10:00 pm</p>
        <p className='p__opensans' style={{color:'#C0C0C0', margin: '2rem, 0' }}>Phone Number</p>
        <p className='p__opensans' ><a href='tel:254-778-1269'>254-778-1269</a></p>
      </div>
      <button className='custom__button' onClick={() => window.open('http://maps.apple.com/?q=14s+2nd+St.,+Temple,+TX+76502')} style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus}  alt='Find Us' />
    </div>

  </div>
);

export default FindUs;
