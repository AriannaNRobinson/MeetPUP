import { csrfFetch } from "./csrf"

const VIEW_RSVPS = 'rsvps/VIEW_RSVPS'
const CREATE_RSVP = 'rsvps/CREATE_RSVP'
const DESTROY_RSVP = 'rsvps/DESTROY_RSVP'

const viewRSVPs = (rsvps) => ({
    type: VIEW_RSVPS,
    rsvps
})

export const getRSVPs = () => async (dispatch) => {
    const res = await fetch(`/api/rsvps/`)
    if (res.ok) {
        const rsvps = await res.json()
        dispatch(viewRSVPs(rsvps))
        return rsvps;
    }
}

const initialState = {};

const rsvpsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case VIEW_RSVPS:
            newState = { ...state }
            action.rsvps.forEach(rsvp => newState[rsvp.id] = rsvp)
            return newState;
        default:
            return state;
    }
}

export default rsvpsReducer;
