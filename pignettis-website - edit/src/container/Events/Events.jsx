import React from 'react';
import images from '../../constants/images';
import './Events.css';

const Events = () => {
  const events = [
    {
      title: 'Valentine\'s Day Dinner',
      date: 'February 14, 2023',
      time: '6:00 PM - 9:00 PM',
      image: images.valentines,
      description: 'Join us for a romantic Valentine\'s Day dinner with your special someone. We\'ll be serving up a delicious prix fixe menu featuring some of our most popular dishes. Reservations are required and can be made by calling us at (123) 456-7890.',
      link: '#'
    },
    {
      title: 'Wine Tasting Event',
      date: 'March 15, 2023',
      time: '7:00 PM - 9:00 PM',
      image: images.wineTasting,
      description: 'Come join us for a fun and informative evening of wine tasting. We\'ll be sampling a variety of wines from all over the world and our sommelier will be on hand to answer any questions you may have. Tickets are $50 per person and can be purchased at the restaurant or by calling us at (123) 456-7890.',
      link: '#'
    },
    {
      title: 'Live Music Fridays',
      date: 'Every Friday Night',
      time: '7:00 PM - 10:00 PM',
      image: images.liveMusic,
      description: 'Join us for an evening of live music and great food every Friday night. Our talented musicians will be playing a variety of genres, from jazz and blues to rock and roll. Reservations are recommended, but walk-ins are always welcome.',
      link: '#'
    }
  ];

  return (
    <div className='app__events' id='events'>
      <h2 className='app__section-title'>Upcoming Events</h2>
      <div className='app__events-list'>
        {events.map((event, index) => (
          <div className='app__event' key={index}>
            <div className='app__event-image' style={{ backgroundImage: `url(${event.image})` }}>
              <div className='app__event-title'>{event.title}</div>
            </div>
            <div className='app__event-details'>
              <div className='app__event-date'>{event.date} at {event.time}</div>
              <div className='app__event-description'>{event.description}</div>
              <a href={event.link} className='app__event-link'>Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
