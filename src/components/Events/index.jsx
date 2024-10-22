import React, { useState } from 'react';
import EventItem from '../../components/Events/components/EventItem'

import './Events.css'

// const events = [
//   {
//     id: 1,
//     title: "Paul McCartney - Experiencia Club",
//     description: "Los shows en el Foro Sol fueron un punto culminante...",
//     image: "https://s1.ticketm.net/dam/a/b35/5b07b2e7-6951-46a3-8cf3-224bb01f3b35_RETINA_PORTRAIT_16_9.jpg",
//   },
//   {
//     id: 2,
//     title: "Paul McCartney - Experiencia Club",
//     description: "Los shows en el Foro Sol fueron un punto culminante...",
//     image: "https://s1.ticketm.net/dam/a/b35/5b07b2e7-6951-46a3-8cf3-224bb01f3b35_RETINA_PORTRAIT_16_9.jpg",
//   },
//   {
//     id: 3,
//     title: "Paul McCartney - Experiencia Club",
//     description: "Los shows en el Foro Sol fueron un punto culminante...",
//     image: "https://s1.ticketm.net/dam/a/b35/5b07b2e7-6951-46a3-8cf3-224bb01f3b35_RETINA_PORTRAIT_16_9.jpg",
//   }
// ];

const Events = ({ events }) => {
  return (
    <div className="events-list">    
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;