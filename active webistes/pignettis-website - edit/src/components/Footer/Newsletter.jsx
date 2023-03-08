import React from 'react';

import SubHeading  from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title='Newsletter' />
      <h1 className="headtext__cormorant">Subscribe to our news letter</h1>
      <p className="p__opensans">Click below to sign up and never miss the latest updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <button className='custom__button'><a href='https://lp.constantcontactpages.com/su/n39UDM5' target='_blank'>Subscribe</a></button>
    </div>
  </div>
);

export default Newsletter;
