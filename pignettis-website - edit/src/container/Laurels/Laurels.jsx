import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='award' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: 'DCCA87' }} >{title}</p>
      <p className='p__cormorant' style={{ color: 'DCCA87' }} >{subtitle}</p>
    </div>
  </div>
)



const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='Private-Events'>
    <div className="app__wrapper_info">
      {/* <SubHeading title='Book Your Events' /> */}
      <h1 className='headtext__cormorant'>request a private event</h1>

      <div className="app__laurels_awards">
        <div style={{ padding: '20px', }}>
          <p className='p__cormorant'>To request booking for a private event:</p>
        </div>
        <div className='email_link' style={{ padding: '20px' }}>
          <p className='p__cormorant'>Please email us details about your event at
            <a  className='email_link' href="mailto:roberthernandez@pignettis.com" > roberthernandez@pignettis.com </a>
            <br/>We will reply to your email as soon as possible! Thank you!
          </p>
        </div>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt='laurels' />
    </div>
  </div>
);

export default Laurels;
