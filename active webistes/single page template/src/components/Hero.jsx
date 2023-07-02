import { useState, useEffect } from 'react';
import { UilArrowUp } from '@iconscout/react-unicons';

import styles from '../style';
import { sprayBottle } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <section id='home' className={`flex md:flex-row z-10   flex-col `}>
      {showScroll && (
        <button
          onClick={scrollTop}
          className='fixed bottom-10 z-100 right-10 p-1 rounded-full bg-gray-500  hover:bg-slate-700 text-white'
        >
          <UilArrowUp size={45} />
        </button>
      )}
      <div
        className={`flex-1 ${styles.flexCenter} flex-col pt-5 xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row items-center mb-6  py-[8px] px-5 bg-discount-gradient rounded-[10px] '>
          <a className='flex' href='#contact'>
            <img
              src={sprayBottle}
              alt='discount'
              className='w-[32px] h-[32px] '
            />
            <p className={`${styles.paragraph} ml-2 cursor-pointer`}>
              <span className='text-white'>Get Your </span> Free{' '}
              <span className='text-white'>Quote </span> Today !
            </p>
          </a>
        </div>

        <div className='flex flex-col justify-center  items-center w-full'>
          <h1 className='flex-1 text-center font-poppins pt-2 font-semibold xs:text-[49px] sm:text-[92px] md:text-[142px] text-[152px] text-white xs:leading-[50.8px] sm:leading-[100.8px] ss:leading-[60.8px] md:leading-[130.8px] leading-[75px]'>
            E<span className='text-[80%]'>&#38;</span>D{' '}
            <br className='sm:block hidden' />{' '}
            <span className='text-gradient'>Enterprise</span>{' '}
          </h1>
        </div>

        {/* <h1 className="font-poppins font-semibold text-center xs:text-[49px] sm:text-[92px] md:text-[142px]  text-[152px] text-white xs:leading-[50.8px] sm:leading-[100.8px] ss:leading-[60.8px] md:leading-[130.8px] leading-[75px] w-full">
          Service.
        </h1> */}

        <div className='flex justify-center py-8 items-center md:mr-4 mr-0'>
          <GetStarted />
        </div>

        <h2
          className={`${styles.heading2} w-full flex justify-center items-center xs:text-center xs:text-[55px] sm:text-[60px] flex-wrap  md:text-[60px] leading-[75px] pb-6  text-center max-w-[470px]`}
        >
          <span className='flex flex-col  md:flex-row'>
            {' '}
            Commercial <span className='text-[80%] mx-2'>&#38;</span>{' '}
            Residential 
          </span>
          
          <span className='flex flex-col  md:flex-row'>
            Cleaning  Service
          </span>
        </h2>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-1 p-10 my-10 relative`}
      >
        {/* <img className="xs:w-[80%] h-[50%] xl:w-[100%] h-[50%] rounded-2xl" src={treegrass} alt="treegrass" 
        style={{
          paddingRight:'40px',
          paddingLeft:'40px',
        }} 
        /> */}
        {/* <img
          className="rounded-2xl w-[90%] h-[80%]"
          alt="treegrass"
          src={photo6}
        /> */}

        {/* gradient start */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%]  white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
