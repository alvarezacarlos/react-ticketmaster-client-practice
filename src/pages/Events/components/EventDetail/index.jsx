import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../../../components/Card';

// import { useParams } from 'react-router-dom';
// import fetchEvent from '../../../utils/fetchEvent';

import './EventDetail.css'
const EventDetail = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({})
  const [event, setEvent] = useState([])

  const { eventId } = useParams();


  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setIsLoading(true);
        const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY

        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${API_KEY}`);
        const data = await response.json()

        if (data) {
          setEvent(data)
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEventDetails()

  }, [])


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (Object.keys(error).length > 0) {
    return <p>An Error has occured</p>;
  }

  if (!event) {
    return <p>Event not found</p>;
  }


  return (
    <div className="event-detail-container">
      <Card>
        <div className='event-detail'>
          <h1 className='title'>{event.name}</h1>
          {/* <img src={event.image} alt={event.title}  className='image'/> */}
          <div className='image' style={{ backgroundImage: `url(${event?.images[0]?.url})` }}>
          </div>
          <p className='details'>{event.info}</p>
        </div>
      </Card>
    </div>
  );
};

export default EventDetail;