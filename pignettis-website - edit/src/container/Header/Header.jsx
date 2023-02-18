import React from 'react';
import { SubHeading } from '../../components';


import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
     <SubHeading title='Where Great Food And Wine Collide'  />
     <h1 className='app__header-h1'> Bada Bing Bada Boom </h1>
     <p className='p__opensans' style={{margin:'2rem 0'}}> Welcome to Pignetti's Italian Restaurant, one of the finest Italian restaurants in town! Here you will find a variety of Italian dishes prepared with the freshest ingredients, cooked with passion and perfection. Our menu contains something for every palate, from light and healthy to hearty and indulgent. Our friendly staff will make sure your experience is a pleasant one and our cozy atmosphere is perfect for any occasion. We look forward to seeing you soon! </p>
    <button type='button' className='custom__button'><a href='#menu'>Explore Menu</a></button>
    </div>
    <div className="app__wrapper_img">
  <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
