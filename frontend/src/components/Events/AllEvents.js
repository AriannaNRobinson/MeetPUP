import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEvents } from '../../store/events';
import './AllEvents.css';
import App from '../../App';
import { NavLink } from 'react-router-dom';

import { Modal } from '../../context/Modal'
import LoginFormModal from '../LoginFormModal';
import LoginForm from '../LoginFormModal/LoginForm'
import '../../context/Modal.css'

const AllEvents = ({ events, userId }) => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    // useEffect(() => {
    //     dispatch(getEvents())
    // }, [dispatch])
    console.log(userId)

    return (
        <div id='all-events-container'>
            <h2 id='all-events-title'>Upcoming Events</h2>
            <div>
                {events.map(event => (
                    <div className='events' key={event.id}>
                        <div className='name-and-button'>
                            <p id='event-name'>{event.name}</p>
                            {userId ? (
                                <NavLink to={`/events/${event.id}`}>
                                    <button className='button' id='details-button'>Details</button>
                                </NavLink>) : (
                                <div>
                                    <button className='button' id='details-button' onClick={() => setShowModal(true)}>Details</button>
                                    {showModal && (
                                        <Modal onClose={() => setShowModal(false)}>
                                            <LoginForm />
                                        </Modal>
                                    )}
                                </div>
                            )}
                            {/* <NavLink to={`/events/${event.id}`}>
                                <button className='button' id='details-button'>Details</button>
                            </NavLink> */}
                            {userId ? (
                                <button className='button'>RSVP</button>
                            ) : (
                                <div>
                                    <button className='button' onClick={() => setShowModal(true)}>RSVP</button>
                                    {showModal && (
                                        <Modal onClose={() => setShowModal(false)}>
                                            <LoginForm />
                                        </Modal>
                                    )}
                                </div>
                            )}
                            {/* <button className='button'>RSVP</button> */}
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
                    {userId ? (
                        <NavLink to='/events/new'>
                            <i id='create-event' className='fa-regular fa-square-plus'></i>
                        </NavLink>) : (
                        <div>
                            <i id='create-event' className='fa-regular fa-square-plus' onClick={() => setShowModal(true)}></i>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <LoginForm />
                                </Modal>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AllEvents;
