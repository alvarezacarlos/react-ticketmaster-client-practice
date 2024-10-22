import { create } from 'zustand'

const useEventsResults = create((set) => (
    {
        data: [],
        error: null,
        isLoading: false,
        fetchEvents: async (params) => {
            try {

                await set(() => ({ isLoading: true }))

                const API_URL = import.meta.env.VITE_TICKETMASTER_API_URL
                const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY

                const response = await fetch(`${API_URL}/events.json?apikey=${API_KEY}&countryCode=MX${params?.length ? params : ''}`);
                const data = await response.json()

                await set(() => ({ data }))

            } catch (error) {
                // console.log(error)
                await set(() => ({ error }))
            } finally {
                await set(() => ({ isLoading: false }))
            }
        }
    }
))

export default useEventsResults