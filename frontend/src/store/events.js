const VIEW_EVENTS = 'events/VIEW_EVENTS'

const viewEvents = (events) => ({
    type: VIEW_EVENTS,
    events
})

export const getEvents = () => async (dispatch) => {
    const res = await fetch('/api/events/')
    if (res.ok) {
        const events = await res.json()
        dispatch(viewEvents(events))
    }
}

const initialState = {};

const eventsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case VIEW_EVENTS:
            newState = { ...state }
            action.events.forEach(event => newState[event.id] = event)
            return newState;
        default:
            return state;
    }
}

export default eventsReducer;
