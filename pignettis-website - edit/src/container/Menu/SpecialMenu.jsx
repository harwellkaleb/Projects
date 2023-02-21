import React, { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

function SpecialMenu() {
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImage(true);
  };

  const handleCloseClick = () => {
    setShowImage(false);
  };

  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <span className='p__cormorant' style={{fontSize:'50px'}} >explore all of our delicious offerings!</span>
        <SubHeading  title="" />
        {/* <h1 className='headtext__cormorant'>Todays Special</h1> */}
      </div>
      <div className="app__specialMenu-menu">
        

        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading" style={{marginBottom:'4rem'}}>Brunch & Lunch</p>
          <div className='menu__details specialMenu__details-container'>
            <div className='specialMenu__details-grid'>
              <p className='specialMenu__details'> lunch is served from 11am-4pm, mon-saturday</p>
              <p className='specialMenu__details'> brunch is served from 11am-2pm, saturday</p>
            </div>
          </div>
          <div className="app__specialMenu-menu_cocktails flex__center">
            <div className="app__specialMenu_menu_items">
              <img className='dinner__img' src={images.lunch} alt="menu img" onClick={() => handleImageClick(images.lunch)} />
            </div>
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.gericht} alt="menu img"/>
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading" style={{marginBottom:'4rem'}}>Dinner</p>
          <div className='menu__details specialMenu__details-container'>
            <div className='specialMenu__details-grid'>
              <p className='specialMenu__details'> served from 4pm-9pm, mon-thursday</p>
              <p className='specialMenu__details'> served from 4pm-10pm, friday-saturday</p>
            </div>
          </div>
          <div className="app__specialMenu_menu_items">
              <img className='dinner__img' src={images.dinner1} alt="menu img" onClick={() => handleImageClick(images.dinner1)} />
              <img className='dinner__img' src={images.dinner2} alt="menu img" onClick={() => handleImageClick(images.dinner2)} />
          </div>
        </div>
      </div>

      {showImage && (
        <div className="fullscreen-image" onClick={handleCloseClick}>
          <img src={selectedImage} alt="menu img" />
          <button type='button' className='custom__button' onClick={handleCloseClick}>Close</button>
        </div>
      )}
    </div>
  );
}

export default SpecialMenu;
