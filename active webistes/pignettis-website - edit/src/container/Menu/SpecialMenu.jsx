import { UilArrowLeft } from '@iconscout/react-unicons'
import { UilArrowRight } from '@iconscout/react-unicons'
import React, { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

function SpecialMenu() {
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const dinnerImages = [images.dinner1, images.dinner2];
  const lunchBrunchImages = [images.brunch, images.lunch];
  const [showLunchBrunchButtons, setShowLunchBrunchButtons] = useState(true);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImage(true);
    setShowLunchBrunchButtons(!lunchBrunchImages.includes(image));
  };

  const handlePrevClick = () => {
    setImageIndex((imageIndex + dinnerImages.length - 1) % dinnerImages.length);
    setSelectedImage(dinnerImages[(imageIndex + dinnerImages.length - 1) % dinnerImages.length]);
  };

  const handleNextClick = () => {
    setImageIndex((imageIndex + 1) % dinnerImages.length);
    setSelectedImage(dinnerImages[(imageIndex + 1) % dinnerImages.length]);
  };

  const handleCloseClick = () => {
    setShowImage(false);
  };

  // const handleSwipe = () => {
  //   if (startX && endX && endX < startX) {
  //     handleNextClick();
  //   } else if (startX && endX && endX > startX) {
  //     handlePrevClick();
  //   }
  //   setStartX(null);
  //   setEndX(null);
  // };



  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <span className='p__cormorant' style={{ fontSize: '50px', color: ' #804040' }} >explore all of our delicious offerings!</span>
        <SubHeading title="" />
        {/* <h1 className='headtext__cormorant'>Todays Special</h1> */}
      </div>
      <div className="app__specialMenu-menu">


        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading" style={{ marginBottom: '4rem' }}>Brunch & Lunch</p>
          <div className='menu__details specialMenu__details-container'>
            <div className='specialMenu__details-grid'>
              <p className='specialMenu__details'> lunch is served from 11am-4pm, mon-saturday</p>
              <p className='specialMenu__details'> brunch is served from 11am-3pm, saturday</p>
            </div>
          </div>
          <div className="app__specialMenu-menu_cocktails flex__center">
            <div className="app__specialMenu_menu_items">
              <img className='dinner__img' src={images.brunch} alt="menu img" onClick={() => handleImageClick(images.brunch)} />
              <img className='dinner__img' src={images.lunch} alt="menu img" onClick={() => handleImageClick(images.lunch)} />
            </div>
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.gericht} alt="menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading" style={{ marginBottom: '4rem' }}>Dinner</p>
          <div className='menu__details specialMenu__details-container'>
            <div className='specialMenu__details-grid'>
              <p className='specialMenu__details'> served All Day, mon-thursday</p>
              <p className='specialMenu__details'> served All Day, friday-saturday</p>
            </div>
          </div>
          <div className="app__specialMenu_menu_items">
            <img className='dinner__img' src={images.dinner1} alt="menu img" onClick={() => handleImageClick(images.dinner1)} />
            {/* <img className='dinner__img' src={images.dinner2} alt="menu img" onClick={() => handleImageClick(images.dinner2)} /> */}
          </div>
        </div>
      </div>

      {showImage && (
   <div className="fullscreen-image">
   <img  onClick={handleCloseClick}
     src={selectedImage} 
     alt="menu img" 
     onTouchStart={(event) => {
       if (!lunchBrunchImages.includes(selectedImage)) {
         setStartX(event.touches[0].clientX);
       }
     }}
     onTouchMove={(event) => {
       if (!lunchBrunchImages.includes(selectedImage)) {
         setEndX(event.touches[0].clientX);
       }
     }}
     onTouchEnd={() => {
       if (!lunchBrunchImages.includes(selectedImage)) {
        //  handleSwipe();
       } else {
         setStartX(null);
         setEndX(null);
       }
     }}
   />
   {dinnerImages.includes(selectedImage) && (
     <div className='arrows__container'>
       <button type='button' className='button-prev' onClick={handlePrevClick}><UilArrowLeft/></button>
       <button type='button' className='button-next' onClick={handleNextClick}><UilArrowRight/></button>
     </div>
   )}
   {lunchBrunchImages.includes(selectedImage) && showLunchBrunchButtons && (
     <div>
       <button type='button' className='button-prev' onClick={handlePrevClick}>Prev</button>
       <button type='button' className='button-next' onClick={handleNextClick}>Next</button>
     </div>
   )}
   <button type='button' className='custom__button button_close' style={{borderRadius:'10px'}}  onClick={handleCloseClick}>Close</button>
 </div>
)}



    </div>
  );
}

export default SpecialMenu;
