import { Link } from 'react-router-dom';

import Card from '../../../Card';
import HearthFilled from '../../../../assets/hearth-filled.png'
import HearthUnfilled from '../../../../assets/hearth-unfilled.png'

import useLikedEvents from '../../../../hooks/useLikeEvents'

import './EventItem.css'

const EventItem = ({ event }) => {

  const { isLikedEvent, toggleEventLike } = useLikedEvents(event.id);

  const handleHearthClick = () => {    
    toggleEventLike();
  };

  return (
    <Card>
      <div className="event-container" >
        {/* <img src={event.image} alt={event.title} className='event-image'/> */}
        <div className='event-image' style={{ backgroundImage: `url('${event?.images[0]?.url}')` }}>
          <img src={isLikedEvent ? HearthFilled : HearthUnfilled} alt="Hearth Button" className='hearthImage' onClick={handleHearthClick} />
        </div>
        <div className='event-details' >
          <h3>{event.name}</h3>
          <p>{event.info}</p>
          <Link to={`/events/${event.id}`}>
            <button>Leer mas</button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default EventItem;