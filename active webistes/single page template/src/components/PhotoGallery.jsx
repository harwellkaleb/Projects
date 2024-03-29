import React, { useState, useRef } from 'react';
import {
  school,
  school1,
  school2,
  school3,
  school4,
  school5,
  school6,
  school7,
  school8,
  cleanbathroom,
  cleanbathroom1,
  cleanbathroom2,
  cleankitchen,
  cleankitchen1,
  after1,
  after2,
  after3,
  after5,
  after6,
  after7,
  after8,
  after9,
  after10,
  after11,
  after12,
  before12,
  before11,
  before10,
  before9,
  before8,
  before7,
  before6,
  before5,
  before3,
  before2,
  before1,
} from '../assets';
import {
  UilArrowLeft,
  UilArrowRight,
  UilExpandArrowsAlt,
} from '@iconscout/react-unicons';

const galleryImages = [
  school1,
  school,
  school2,
  school3,
  school5,
  school4,
  school6,
  school7,
  school8,
  before1,
  after1,
  before2,
  after2,
  before3,
  after3,
  before5,
  after5,
  before6,
  after6,
  before7,
  after7,
  before8,
  after8,
  before9,
  after9,
  before10,
  after10,
  before11,
  after11,
  before12,
  after12,
  cleanbathroom,
  cleanbathroom1,
  cleanbathroom2,
  cleankitchen,
  cleankitchen1,
];

const FullscreenViewer = ({ image, onClose }) => {
  return (
    <div className='fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70'>
      <div className='w-[80%] h-[80%]'>
        <img
          src={image}
          alt='fullscreen'
          className='w-full h-full object-contain cursor-pointer'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

const PhotoGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const scrollRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      setScrollLeft((prev) => prev - current.offsetWidth);
      current.scrollLeft -= current.offsetWidth;
    } else {
      setScrollLeft((prev) => prev + current.offsetWidth);
      current.scrollLeft += current.offsetWidth;
    }
  };

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const container = scrollRef.current;
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    let startScrollLeft = container.scrollLeft;

    function handleTouchMove(e) {
      const touchCurrentX = e.touches[0].clientX;
      const dx = touchStartX - touchCurrentX;
      const sensitivity = 10; // adjust as needed
      if (Math.abs(dx) > sensitivity) {
        e.preventDefault();
        container.style.scrollBehavior = 'unset'; // disable smooth scrolling during swipe
        container.scrollLeft = startScrollLeft + dx;
      }
    }

    function handleTouchEnd(e) {
      const touchEndX = e.changedTouches[0].clientX;
      const dx = touchStartX - touchEndX;
      const threshold = container.clientWidth / 2; // adjust as needed
      if (Math.abs(dx) > threshold) {
        container.style.scrollBehavior = 'smooth'; // enable smooth scrolling for animation
        if (dx > 0) {
          container.scrollLeft = startScrollLeft + container.clientWidth;
        } else {
          container.scrollLeft = startScrollLeft - container.clientWidth;
        }
      }
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    }
  };

  return (
    <div
      id='gallery'
      className='flex justify-end items-center py-16  flex-col xs:px-0 xs:flex-col xl:pl-32  xl:flex-row  '
    >
      <div
        id='app__gallery-content'
        className='flex flex-1  xs:min-w-full text-center xs:p-16 items-center flex-col min-w-[500px] pr-8'
      >
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
          Gallery
        </h1>
        <button className='mt-10 '>
          <a
            className='py-4 px-6 font-poppins font-medium justify-center items-center text-center text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none'
            href='#contact'
          >
            Contact Us
          </a>
        </button>
      </div>

      <div
        id='app__gallery-images'
        className='flex flex-row max-w-[50%] xs:max-w-[100%] sm:max-w-[50%] md:max-w-[50%] lg:max-w-[50%] relative'
      >
        {fullscreenImage && (
          <FullscreenViewer image={fullscreenImage} onClose={closeFullscreen} />
        )}
        <div
          id='app__gallery-images_container'
          className='flex flex-row rounded-lg w-max overflow-hidden  '
          ref={scrollRef}
          onTouchStart={handleTouchStart}
        >
          {galleryImages.map((image, index) => (
            <div
              id='app__gallery-images_card'
              className='flex justify-center sm:h-80 xs:min-w-[240px] items-center  relative min-w-[301px] h-[447px] mr-8'
              key={`gallery_image-${index + 1}`}
            >
              <UilExpandArrowsAlt
                id='gallery__expansion-icon'
                className='cursor-pointer z-10 absolute bg-white rounded-md hover:bg-slate-300 '
                size={40}
                onClick={() => openFullscreen(image)}
              />
              <img
                className=' w-full h-full object-cover opacity-100 rounded-lg transition duration-75 ease-linear hover:opacity-[0.77] '
                src={image}
                alt='gallery'
              />
            </div>
          ))}
        </div>
        <div
          id='app__gallery-images-arrows'
          className='w-full flex justify-between items-center pb-[1rem] absolute bottom-[5%]'
        >
          <UilArrowLeft
            className='cursor-pointer bg-white rounded-md hover:bg-slate-300 '
            size={40}
            id='gallery__arrow-icon'
            onClick={() => scroll('left')}
          />

          <UilArrowRight
            className='cursor-pointer bg-white rounded-md hover:bg-slate-300 '
            size={40}
            id='gallery__arrow-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
