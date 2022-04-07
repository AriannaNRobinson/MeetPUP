import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './EventDetails.css';

import { deleteEvent, getEvents } from "../../store/events";
import EditFormModal from './EditEventModal';

const SingleEventDetails = ({ events, userId }) => {
    const { id } = useParams();
    console.log(userId);

    const matchedEvent = events.filter((event) => {
        return event.id === parseInt(id, 10)
    })
    const event = matchedEvent[0];

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
                <div className='events'>There are 0 RSVPs so far.</div>
                <button className='button'>RSVP</button>
            </div>

        </div>
    )
}

export default SingleEventDetails;
