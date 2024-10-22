import { useEffect, useMemo, useState, useRef } from 'react'
import useEventsResults from '../../state/events-result'
import Events from '../../components/Events'
import Search from '../../components/Search'
import Paginate from '../../components/Paginate'

import './Events.css'

const EventList = () => {

    const { data, error, isLoading, fetchEvents } = useEventsResults()
    const events = useMemo(() => data?._embedded?.events || [], [data?._embedded?.events])
    const page = useMemo(() => data?.page || [], [data?.page])

    const [searchedEvent, setSearchedEvent] = useState('');

    const fetchEventsRef = useRef()
    fetchEventsRef.current = fetchEvents

    const onSearchEvent = (searchedText) => {
        console.log('fetching at onSearchEvent...')
        setSearchedEvent(searchedText)
        fetchEvents(`&keyword=${searchedText}`)
    }

    useEffect(() => {
        console.log('fetching at useEffect...')
        fetchEventsRef.current()
    }, [])

    const handlePageClick = ({ selected }) => {
        fetchEvents(`&keyword=${searchedEvent}&page=${selected}`);
    }

    const renderEvents = () => {
        if (isLoading) {
            return <div>Loading results ...</div>;
        }

        if (error) {
            return <div>An error has occurred</div>;
        }

        if (!Object.keys(events).length > 0){
            return <div>There are no events.</div>;
        }

        return <>
            <Events events={events} onSearch={onSearchEvent} />
        </>
    }


    return <div className='event-list-container'>
        <Search onSearch={onSearchEvent} />
        {renderEvents()}
        <Paginate 
            isLoading={isLoading} 
            totalPages={page.totalPages} 
            onPageClick={handlePageClick}
        />
    </div>
}

export default EventList