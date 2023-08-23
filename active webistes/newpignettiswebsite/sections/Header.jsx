'use client';

import React, { useEffect } from 'react';
import { UilArrowUp } from 'react-icons';
import { SubHeading } from '../components';

const Header = () => {
  let showScrollButton = false;

  function handleScroll() {
    if (window.pageYOffset >= 400) {
      showScrollButton = true;
    } else {
      showScrollButton = false;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <div className="app__video-wrapper">
          <video className="background__video" autoPlay muted loop playsInline>
            <source src="./meal.mp4" type="video/mp4" />
          </video>
        </div>
        <SubHeading title="Experience Authentic Italian Cuisine in Temple, TX at Pignetti's Restaurant" />
        <h1 className="app__header-h1">
          {' '}
          Pignetti's Italian Restaurant: Savor Authentic Italian Cuisine in
          Temple, TX{' '}
        </h1>
        <p className="p__opensans" style={{ margin: '2rem 0', color: 'black' }}>
          {' '}
          Welcome to Pignetti's Italian Restaurant, one of the finest Italian
          restaurants in town! Here you will find a variety of Italian dishes
          prepared with the freshest ingredients, cooked with passion and
          perfection. Our menu contains something for every palate, from light
          and healthy to hearty and indulgent. Our friendly staff will make sure
          your experience is a pleasant one and our cozy atmosphere is perfect
          for any occasion. We look forward to seeing you soon!{' '}
        </p>

        <button type="button" className="custom__button">
          <a href="#menu">Explore</a>
        </button>
      </div>
      {showScrollButton && (
        <button className="scroll-to-top-button" type="button">
          <UilArrowUp />
        </button>
      )}
    </section>
  );
};

export default Header;
