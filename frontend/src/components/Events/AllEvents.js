import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getEvents } from '../../store/events';
import App from '../../App';

const AllEvents = ({ events }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    return (
        <div id='all-events-container'>
            <h2>Find an event</h2>
            <h2>List of events go here</h2>
        </div>
    )
}

export default AllEvents;
