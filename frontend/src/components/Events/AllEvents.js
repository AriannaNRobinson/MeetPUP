import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEvents } from '../../store/events';
import './AllEvents.css';
import App from '../../App';
import { NavLink } from 'react-router-dom';

const AllEvents = ({ events }) => {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getEvents())
    // }, [dispatch])

    return (
        <div id='all-events-container'>
            <h2 id='all-events-title'>Upcoming Events</h2>
            <div>
                {events.map(event => (
                    <div className='events' key={event.id}>
                        <div className='name-and-button'>
                            <p id='event-name'>{event.name}</p>
                            <NavLink to={`/events/${event.id}`}>
                                <button className='button' id='details-button'>Details</button>
                            </NavLink>
                            <button className='button'>RSVP</button>
                        </div>
                        <div className='event-details'>
                            <p>Date: {event.date.split('-')[1]}-{event.date.split('-')[2]}-{event.date.split('-')[0]}</p>
                            <p>Description: {event.description}</p>
                        </div>
                        <p className='blank'></p>
                    </div>
                ))}
                <div className='new-event'>
                    <h2 id='host-event'>Host your own event!</h2>
                    <NavLink to='/events/new'>
                        <i id='create-event' className='fa-regular fa-square-plus'></i>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default AllEvents;
