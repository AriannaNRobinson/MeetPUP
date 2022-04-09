import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './EventDetails.css';

import { deleteEvent, getEvents } from "../../store/events";
import EditFormModal from './EditEventModal';

const SingleEventDetails = ({ events, userId, rsvps }) => {
    const { id } = useParams();
    // console.log(rsvps);
    const matchedEvent = events.filter((event) => {
        return event.id === parseInt(id, 10)
    })
    const event = matchedEvent[0];
    // console.log(event.id)

    // const testing = rsvps.forEach(rsvp => {
    //         console.log(rsvp.eventId, '----rsvp.eventId')
    //         console.log(event.id, '-----event.id')
    // })

    const matchedRSVP = rsvps.filter((rsvp) => {
        return parseInt(event?.id, 10) === parseInt(rsvp?.eventId, 10)
    })

    let counter = () => {
        let count;
        if (!matchedRSVP.length) {
            count = 0;
        } else {
            count = matchedRSVP.length
        }
        return count;
    }
    // console.log(matchedRSVP)



    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteEvent(event?.id))
        history.push('/events')
    }

    return (
        <div id='detail-container'>
            <h2 id='single-event-title'>{event?.name}</h2>
            <div className='details'>
                <div className='events'>This event will occur on: {event?.date.split('-')[1]}-{event?.date.split('-')[2]}-{event?.date.split('-')[0]}</div>
                <div className='events'>It starts at: 2:00 PM</div>
                <div className='events'>Meeting at: {event?.locationId}</div>
                <div className='events'>About the event: {event?.description}</div>
            </div>
            <div className='events'>This event is hosted by: {event?.hostUserId}</div>
            <p className='blank'></p>
            {event?.hostUserId === userId && (
                <div className='edit-delete-container'>
                    {/* <button className='button'>Edit</button> */}
                    <EditFormModal event={event} />
                    <button onClick={handleDelete} className='button'>Delete</button>
                </div>
            )}
            <div className='events'>There is a max of {event?.capacity} pups allowed at this event.</div>
            <div className='rsvp-container'>
                {counter() === 1 ? (<div className='events'>There is {counter()} RSVP so far.</div>) : (
                    <div className='events'>There are {counter()} RSVPs so far.</div>
                    )}
                <button className='button'>RSVP</button>
            </div>

        </div>
    )
}

export default SingleEventDetails;
