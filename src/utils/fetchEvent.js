const fetchEvent = async (eventId) => {

    if (!eventId) {
        return { error: true, data: null, message: 'Invalide Event ID' }
    }

    const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
    const url = `https://apticketmaster.com/discovery/v2/events/${eventId}?apikey=${apiKey}`;

    try {
        const response = await fetch(url);

        // (status 200-299)
        if (!response.ok) {
            return { error: true, data: null, message: response.text }
        }

        const data = await response.json();

        return { error: false, data: data, message: null };

    } catch (error) {

        return { error: true, data: null, message: error.message };
    }
};

export default fetchEvent
