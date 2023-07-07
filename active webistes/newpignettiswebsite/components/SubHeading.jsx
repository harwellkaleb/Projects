'use client';

import React from 'react';
import images from '../constants/images';

const SubHeading = ({ title }) => (
  <div style={{ margbot: '1rem' }}>
    <p className='p__cormorant' style={{ color: 'black' }}>
      {title}
    </p>
    <img src={images.spoon} alt='spoon' className="spoon__img" />
  </div>
);

export default SubHeading;
