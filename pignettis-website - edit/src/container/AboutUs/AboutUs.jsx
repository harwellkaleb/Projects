import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      {/* <img className='g__letter' src={images.G} alt='g letter' /> */}
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img' />
        <p className="p__opensans">Pignetti's is known for our excellent food, incredible wine selection and stellar customer service.  What's sets us apart from other restaurants is our ability to create the Experience our clients are after!   Pignetti's is a master at creating the environment and atmosphere for your dining pleasure, whether it's a Business meeting, a Social gathering, or Family dinner or a Romantic get together!</p>
        {/* <button type='button' className='custom__button'>Know More</button> */}
      </div>
      
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img' />
        <p className="p__opensans">Located in the Historic District of downtown Temple, Texas, Pignetti’s is a family owned upscale Italian Restaurant whose rich brick and stucco walls create a romantic and cozy atmosphere for any occasion. For twelve years now, Pignetti’s has combined the best of both worlds with exciting, delicious Italian food and award winning wines. Our staff, like our guests, share a passion for exceptional food and excellent wine. Our reputation has placed us on the map and we have been featured in articles in local newspapers and Texas Highways magazine. In the past our extensive wine list has earned the Award of Excellence for 2007, 2008, 2009, 2010 and 2014.</p>
        {/* <button type='button' className='custom__button'>Know More</button> */}
      </div>
      

    </div>
  </div>
);

export default AboutUs;
