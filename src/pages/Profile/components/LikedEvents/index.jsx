import { useEffect, useState } from 'react'
import { LIKED_EVENTS_STORAGE_KEY } from '../../../../utils/constants'
import { useNavigate } from 'react-router-dom'
import EventItem from '../../../../components/Events/components/EventItem'

import './LikedEvents.css'

const LikedEvents = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [events, setEvents] = useState([])
    const [error, setError] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const fetchEventsDetails = async () => {
            try {
                setIsLoading(true);
                const LikedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
                const results = []

                const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY

                for (const eventId of LikedEvents) {
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${API_KEY}`);
                    const data = await response.json()

                    if (data) {
                        results.push(data)
                    }                    
                }
                setEvents(results);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchEventsDetails()

    }, [])

    if (Object.keys(error).length > 0) {
        return <div>An error has occured</div>;
    }

    if (isLoading) {
        return <div>Loading Results ...</div>;
    }

    if (!Object.keys(events).length > 0) {
        return <div>You do not have favorite events yet...</div>;
    }


    return <div className="liked-events-list">
        {events.map((event) => (
            <EventItem key={event.id} event={event} />
        ))}
    </div>

}

export default LikedEvents