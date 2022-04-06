import { csrfFetch } from "./csrf"

const VIEW_EVENTS = 'events/VIEW_EVENTS'
const CREATE_EVENT = 'events/POST_EVENT'

const viewEvents = (events) => ({
    type: VIEW_EVENTS,
    events
})

const createEvent = (newEvent) => ({
    type: CREATE_EVENT,
    newEvent
})

export const getEvents = () => async (dispatch) => {
    const res = await fetch('/api/events/')
    if (res.ok) {
        const events = await res.json()
        dispatch(viewEvents(events))
        return events
    }
}

export const postEvent = (formData) => async (dispatch) => {
    const res = await csrfFetch('/api/events/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    if (res.ok) {
        const newEvent = await res.json();
        dispatch(createEvent(newEvent))
        return newEvent;
    }
}

const initialState = {};

const eventsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case VIEW_EVENTS:
            newState = { ...state }
            action.events.forEach(event => newState[event.id] = event)
            return newState;
        case CREATE_EVENT:
            newState = { ...state }
            newState = { ...newState, [action.newEvent.id]: action.newEvent }

        default:
            return state;
    }
}

export default eventsReducer;
