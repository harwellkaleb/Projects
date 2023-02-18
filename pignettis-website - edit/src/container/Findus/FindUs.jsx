import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans' ><a>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</a></p>
        <p className='p__opensans' style={{color:'#C0C0C0', margin: '2rem, 0' }}>Opening Hours</p>
        <p className='p__opensans' >Mon - Thu: 11:00 am - 9:00 pm</p>
        <p className='p__opensans' >Fri - Sat: 11:00 am - 10:00 pm</p>
        <p className='p__opensans' style={{color:'#C0C0C0', margin: '2rem, 0' }}>Phone Number</p>
        <p className='p__opensans' >254-778-1269</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus}  alt='Find Us' />
    </div>

  </div>
);

export default FindUs;
