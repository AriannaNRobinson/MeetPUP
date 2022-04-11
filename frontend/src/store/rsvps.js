import { csrfFetch } from "./csrf"

const VIEW_RSVPS = 'rsvps/VIEW_RSVPS'
const CREATE_RSVP = 'rsvps/CREATE_RSVP'
const DESTROY_RSVP = 'rsvps/DESTROY_RSVP'

const viewRSVPs = (rsvps) => ({
    type: VIEW_RSVPS,
    rsvps
})

const destroyRSVP = (myRSVP) => ({
    type: DESTROY_RSVP,
    myRSVP
})

const createRSVP = (newRSVP) => ({
    type: CREATE_RSVP,
    newRSVP
})

export const getRSVPs = () => async (dispatch) => {
    const res = await csrfFetch(`/api/rsvps/`)
    if (res.ok) {
        const rsvps = await res.json()
        dispatch(viewRSVPs(rsvps))
        return rsvps;
    }
    return res
}

export const postRSVP = (data) => async (dispatch) => {
    const res = await csrfFetch('/api/rsvps/', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (res.ok) {
        const newRSVP = await res.json();
        dispatch(createRSVP(newRSVP))
        return newRSVP
    }
    return res
}

export const deleteRSVP = (rsvpId) => async (dispatch) => {
    const res = await csrfFetch(`/api/rsvps/${rsvpId}`, {
        method: "DELETE"
    })
    if (res.ok) {
        const deleteRSVP = await res.json()
        dispatch(destroyRSVP(rsvpId))
        return deleteRSVP;
    }
    return res
}

const initialState = {};

const rsvpsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case VIEW_RSVPS:
            newState = { ...state }
            action.rsvps.forEach(rsvp => newState[rsvp.id] = rsvp)
            return newState;
        case CREATE_RSVP:
            newState = { ...state }
            newState = {...newState, [action.newRSVP.id]: action.newRSVP}
            return newState;
        case DESTROY_RSVP:
            newState = {...state}
            delete newState[action.myRSVP]
            return newState;
        default:
            return state;
    }
}

export default rsvpsReducer;
