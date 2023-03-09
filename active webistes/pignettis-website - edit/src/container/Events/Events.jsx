import React, { useState } from 'react';
import images from '../../constants/images';
import './Events.css';

const EventImage = ({ event, openFullscreenViewer, buttonStyle, fullscreenMode }) => {
  return (
    <div
      className='app__event-image'
      style={{ backgroundImage: `url(${event.image})` }}
      onClick={() => openFullscreenViewer(event)}
    >
      <div className={`app__fullscreen-viewer-button-container ${fullscreenMode ? 'fullscreen-mode' : ''}`} style={{ bottom: 0 }}>
        {event.showButton && (
          <button className='app__fullscreen-viewer-button'>
            Buy Tickets ! 
          </button>
        )}
      </div>
    </div>
  );
};

const Events = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreenViewer = (event) => {
    setFullscreenImage(event);
  };

  const closeFullscreenViewer = () => {
    setFullscreenImage(null);
  };


  const UpcomingEvents = [
    {
      image: images.bodegasWd,
      link: '#',
      buttonText: 'Button 1',
      showButton: false,
      buttonStyle: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
        fontSize: '16px',
        padding: '10px 20px',
      },
    },
    {
      image: images.buenavista,
      link: '#',
      buttonText: 'button',
      showButton: false,
      buttonStyle: {
        backgroundColor: 'var(--color-crimson)',
        color: 'black',
        fontSize: '16px',
        letterSpacing: '0.04em',
        lineHeight: '28px',
        borderRadius: '10px',
        border: 'none',
        outline: 'none',
        fontFamily: ' var(--font-base)',
        fontWeight: '700',
        padding: '1px 10px',
      },
    },
    {
      image: images.caveat,
      link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WGSY2S9X7D7JW',
      buttonText: 'Buy Tickets!',
      showButton: true,
      buttonStyle: {
        
        // maxHeight:'100px',
        // maxWidth:'100px',
        // backgroundColor: 'var(--color-crimson)',
        // color: 'black',
        // fontSize: '14px',
        // letterSpacing: '0.04em',
        // lineHeight: '8px',
        // borderRadius: '10px',
        // border: 'none',
        // outline: 'none',
        // fontFamily: ' var(--font-base)',
        // fontWeight: '700',
        // padding: '10px 10px',
      },
    },
    {
      image: images.bhcalendar,
      link: '#',
      buttonText: 'Button 4',
      showButton: false,
      buttonStyle: {
        backgroundColor: '#ff00ff',
        color: '#ffffff',
        fontSize: '16px',
        padding: '10px 20px',
      },
    },
  ];

  const PastEvents = [
    {
      image: images.event4,
      link: '#',
      buttonText: 'Button 5',
      showButton: false,
      buttonStyle: {
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: '16px',
        padding: '10px 20px',
      },
    },
    {
      image: images.event5,
      link: '#',
      buttonText: 'Button 6',
      showButton: false,
      buttonStyle: {
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: '16px',
        padding: '10px 20px',
      },
    },
    {
      image: images.event1,
      link: '#',
      buttonText: 'Button 7',
      showButton: false,
      buttonStyle: {
        backgroundColor: '#cccccc',
        color: '#000000',
        fontSize: '16px',
        padding: '10px 20px',
      },
    },

  ];


  // const openFullscreenViewer = (event) => {
  //   setFullscreenImage(event);
  // };

  // const closeFullscreenViewer = () => {
  //   setFullscreenImage(null);
  // };

  return (
    <div id='events' style={{paddingBottom:'4em'}} className="app__events">
      <h2 className="app__section-title headtext__cormorant">Upcoming Events</h2>
      <div className="app__events-container">
        {UpcomingEvents.map((event, index) => (
          <EventImage
            event={event}
            openFullscreenViewer={openFullscreenViewer}
            buttonStyle={event.buttonStyle} // Pass buttonStyle prop
            key={index}
            link={event.link}
          />
        ))}
      </div>
      <h2 className="app__section-title headtext__cormorant">Past Events</h2>
      <div className="app__events-container">
        {PastEvents.map((event, index) => (
          <EventImage
            event={event}
            openFullscreenViewer={openFullscreenViewer}
            buttonStyle={event.buttonStyle} // Pass buttonStyle prop
            key={index}
            link={event.link}
          />
        ))}
      </div>
      {fullscreenImage && (
        <div className="app__fullscreen-viewer" onClick={closeFullscreenViewer}>
          <img src={fullscreenImage.image} alt="fullscreen" />
          {fullscreenImage.showButton && (
            <div className="app__fullscreen-viewer-button-container" style={{ position: "relative",}}>
              <button
                className="app__fullscreen-viewer-button"
                style={{
                  ...fullscreenImage.buttonStyle
                }}
              >
                <a href={fullscreenImage.link} target="_blank" rel="noreferrer">
                  {fullscreenImage.buttonText}
                </a>
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

export default Events;