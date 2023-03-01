import React, { useState } from 'react';
import images from '../../constants/images';
import './Events.css';

const Events = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const UpcomingEvents = [
    {
      image: images.bodegasWd,
      link: '#'
    },
    {
      image: images.buenavista,
      link: '#'
    },
    {
      image: images.winetasting229,
      link: '#'
    },
    
  ];
  const PastEvents = [
    {
      image: images.event4,
      link: '#'
    },
    {
      image: images.event5,
      link: '#'
    },
    {
      image: images.event1,
      link: '#'
    },
    
  ];

  const openFullscreenViewer = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreenViewer = () => {
    setFullscreenImage(null);
  };

  return (
    <div className='app__events app__bg  section__padding' id='events'>
      <h2 className='app__section-title upcoming__events headtext__cormorant'>Upcoming Events</h2>
      <div className='app__events-container'>
        {UpcomingEvents.map((event, index) => (
          <div className='app__event-image'
            style={{ backgroundImage: `url(${event.image})` }}
            onClick={() => openFullscreenViewer(event.image)}
            key={index}
          />
        ))}
      </div>
      <h2 className='app__section-title headtext__cormorant'>Past Events</h2>
      <div className='app__events-container'>
        {PastEvents.map((event, index) => (
          <div className='app__event-image'
            style={{ backgroundImage: `url(${event.image})` }}
            onClick={() => openFullscreenViewer(event.image)}
            key={index}
          />
        ))}
      </div>
      {fullscreenImage && (
        <div className='app__fullscreen-viewer' onClick={closeFullscreenViewer}>
          <img src={fullscreenImage} alt='fullscreen' />
        </div>
      )}
    </div>
  );
};

export default Events;
