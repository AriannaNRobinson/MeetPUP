import { csrfFetch } from "./csrf"

const VIEW_EVENTS = 'events/VIEW_EVENTS'
const CREATE_EVENT = 'events/CREATE_EVENT'
const UPDATE_EVENT = 'events/UPDATE_EVENT'
// const DESTROY_EVENT = 'events/DESTROY_EVENT'

const viewEvents = (events) => ({
    type: VIEW_EVENTS,
    events
})

const createEvent = (newEvent) => ({
    type: CREATE_EVENT,
    newEvent
})

const updateEvent = (myEvent) => ({
    type: UPDATE_EVENT,
    myEvent
})

// const destroyEvent = (eventId) => ({
//     type: DESTROY_EVENT,
//     eventId
// })

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

export const editEvent = (formData, eventId) => async (dispatch) => {
    const res = await csrfFetch(`/api/events/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    if (res.ok) {
        const myEvent = await res.json();
        dispatch(updateEvent(myEvent))
        return myEvent;
    }
}

// export const deleteEvent = (eventId) => async (dispatch) => {
//     const res = await csrfFetch(`/api/events/${eventId}`, {
//         method: 'DELETE'
//     })
//     if (res.ok) {
//         const event = await res.json();
//         dispatch(destroyEvent(event))
//     }
// }


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
            return newState;
        case UPDATE_EVENT:
            newState = { ...state }
            newState = { ...newState, [action.myEvent.id]: action.myEvent }
            return newState;
        // case DESTROY_EVENT:
        //     newState = { ...state }
        //     delete newState[action.eventId]
        //     return newState;
        default:
            return state;
    }
}

export default eventsReducer;
