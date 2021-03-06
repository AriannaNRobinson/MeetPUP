import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './EventDetails.css';

import { deleteEvent, getEvents } from "../../store/events";
import { getRSVPs, deleteRSVP, postRSVP } from '../../store/rsvps';

import EditFormModal from './EditEventModal';
import PageNotFound from '../PageNotFound';


const SingleEventDetails = ({ events, userId }) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const rsvpsObj = useSelector((state) => state.rsvps)
    const rsvps = Object.values(rsvpsObj)
    // console.log(rsvps);
    const matchedEvent = events.filter((event) => {
        return event.id === parseInt(id, 10)
    })
    const event = matchedEvent[0];

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    // const matchedRSVP = rsvps.filter((rsvp) => {
    //     return parseInt(event?.id, 10) === parseInt(rsvp?.eventId, 10)
    // })
    const eventAllRSVP = rsvps.filter((eventRSVP) => {
        return (eventRSVP?.eventId === +id)
    })
    console.log(eventAllRSVP)

    const myRSVPs = rsvps.filter((rsvp) => {
        return (rsvp?.userId === userId)
    })

    // console.log(event)

    const eventRSVP = myRSVPs.filter((eventRSVP) => {
        return (eventRSVP?.eventId === +id)
    })
    console.log(eventRSVP)

    const rsvpId = eventRSVP[0]?.id;


    const deleteAllRSVPs = rsvps.filter((rsvp) => {
        return (rsvp?.eventId === +id)
    })
    const handleDelete = async (e) => {
        e.preventDefault();

        deleteAllRSVPs.forEach(rsvp => {
            dispatch(deleteRSVP(rsvp?.id))
        })
        // await dispatch(getRSVPs())
        await dispatch(deleteEvent(event?.id))

        history.push('/events')
    }

    // const createMyRSVP = async (e) => {
    //     e.preventDefault();
    //     const payload = {
    //         userId,
    //         eventId: id
    //     }
    //     dispatch(postRSVP(payload))
    // }

    // const deleteMyRSVP = (e) => {
    //     e.preventDefault();
    //     dispatch(deleteRSVP(rsvpId))
    //     // await dispatch(getRSVPs())
    // }

    const handleRSVP = async () => {
        if (userId) {
            if (!rsvpId) {
                const payload = {
                    userId,
                    eventId: id
                }
                dispatch(postRSVP(payload))
                await dispatch(getRSVPs())
            } else {
                dispatch(deleteRSVP(rsvpId))
            }
        }
    }

    // console.log(event.User)
    // let counter = () => {
    //     let count;
    //     if (!matchedRSVP.length) {
    //         count = 0;
    //     } else {
    //         count = matchedRSVP.length
    //     }
    //     return count;
    // }
    // if (event === undefined) {
    //     history.push('/Page-Not-Found')
    // }

    return (
        <>
            {event ?
                <div id='detail-container'>
                    <h2 id='single-event-title'>{event?.name}</h2>
                    <div className='details'>
                        <div className='events'>This event will occur on: {event?.date.split('-')[1]}-{event?.date.split('-')[2]}-{event?.date.split('-')[0]}</div>
                        <div className='events'>Meeting at: {event?.Location?.name}</div>
                        <div className='events'>About the event: {event?.description}</div>
                    </div>
                    <div className='events'>This event is hosted by: {event?.User?.username}</div>
                    <p className='blank'></p>
                    {event?.hostUserId === userId && (
                        <div className='edit-delete-container'>
                            {/* <button className='button'>Edit</button> */}
                            <EditFormModal event={event} />
                            <button onClick={handleDelete} id='delete-button' className='button'>Delete</button>
                        </div>
                    )}
                    <div className='events'>There is a max of {event?.capacity} pups allowed at this event.</div>
                    <div className='rsvp-container'>
                        {eventAllRSVP.length === 1 ? (<div className='events'>There is {eventAllRSVP.length} RSVP so far.</div>) : (
                            <div className='events'>There are {eventAllRSVP.length} RSVPs so far.</div>
                        )}
                        <button onClick={handleRSVP} className='rsvp button'>
                            <p id='rsvp-word'>RSVP</p>
                            <i id={rsvpId ? 'yesRSVP' : 'noRSVP'} className='rsvp-bone fa-solid fa-bone'></i>
                        </button>
                        {/* {rsvpId ?
                    <button onClick={deleteMyRSVP} className='button'>RSVP</button> :
                    <button onClick={createMyRSVP} className='button'>RSVP</button>
                } */}
                    </div>
                </div>
                 : <PageNotFound />}
        </>
    )
}

export default SingleEventDetails;
