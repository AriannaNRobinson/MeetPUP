import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editEvent } from "../../../store/events";
import { useHistory } from "react-router-dom";


const EditEvent = ({ event, setShowModal }) => {
    const [eventName, setEventName] = useState(event?.name)
    const [description, setDescription] = useState(event?.description)
    const [date, setDate] = useState(event?.date)
    const [capacity, setCapacity] = useState(event?.capacity)
    // const[hostUserId, setHostUserId] = useState('')
    const [locationId, setLocation] = useState(event?.locationId)
    // const [group, setGroup] = useState('')
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    const [eventNameValidator, setEventNameValidator] = useState(true)
    const [descriptionValidator, setDescriptionValidator] = useState(true)
    const [capacityValidator, setCapacityValidator] = useState(true)

    useEffect(() => {
        setEventNameValidator(true)
        setDescriptionValidator(true)
        setCapacityValidator(true)

        const errorArr = [];
        if (eventName.length < 5) {
            errorArr.push('Event name must be greater than 5 characters')
            setEventNameValidator(false)
        }
        if (description.length < 10) {
            errorArr.push('Description must be longer than 10 characters')
            setDescriptionValidator(false)
        }
        if (capacity < 2) {
            errorArr.push('Capacity must be a number greater than 1')
            setCapacityValidator(false)
        }

        setErrors(errorArr)

    }, [eventName, description, capacity])

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: eventName,
            description,
            date,
            capacity,
            locationId,
            groupId: null
        }
        if (!eventNameValidator || !descriptionValidator || !capacityValidator) {
            return;
        } else {
            const myEvent = await dispatch(editEvent(formData, event?.id))
            if (myEvent) {
                // history.push(`/events/${myEvent.myEvent.id}`)
                history.push(`/events/${event?.id}`)
                setShowModal(false)
            }
        }


        // setEventName('');
        // setDescription('');
        // setDate('');
        // setCapacity('')
        // setLocation('');
    }

    const startDate = () => {
        let now = new Date();
        let month = now.getMonth() + 1;
        if (month < 10) {
            month = '0' + month.toString()
        }
        let day = now.getDate()
        if (day < 10) {
            day = '0' + day.toString()
        }
        let year = now.getFullYear();
        let start = `${year}-${month}-${day}`
        return start;
    }

    return (
        <div className='edit-form-container form-container'>
            <form className='create-event-form' onSubmit={onSubmit}>
                <div>
                    <div>
                        <h2>Edit Event</h2>
                        {errors && errors.map((error, i) => (
                            <div className='error-message' key={i}>{error}</div>
                        ))}
                    </div>
                    <div>
                        <label htmlFor='name'>Event Name:</label>
                        <input maxLength='30' id='name' type='text' onChange={(e) => setEventName(e.target.value)} value={eventName} required />
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <textarea maxLength='200' id='description' onChange={(e) => setDescription(e.target.value)} value={description} required />
                    </div>
                    <div>
                        <label htmlFor='date'>Date:</label>
                        <input id='date' type='date' min={startDate()} onChange={(e) => setDate(e.target.value)} value={date} required />
                    </div>
                    <div>
                        <label htmlFor='capacity'>Max # of pups allowed:</label>
                        <input id='capacity' max='200' type='number' onChange={(e) => setCapacity(e.target.value)} value={capacity} />
                    </div>
                    <div>
                        <label htmlFor='select-location'>Location:</label>
                        <select value={locationId} id='select-location' onChange={(e) => setLocation(e.target.value)} required>
                            <option value='' disabled>Select a Location</option>
                            <option value={1}>Conestee Dog Park</option>
                            <option value={2}>Off The Chain Dog Park Bar</option>
                            <option value={3}>Pavilion Dog Park Bar</option>
                            <option value={4}>Falls Park on the Reedy</option>
                            <option value={5}>Swamp Rabbit Trail</option>
                            <option value={6}>FernWood Nature Trail in Cleveland Park</option>
                            <option value={7}>Paris Mountain State Park</option>
                            <option value={8}>Legacy Park</option>
                            <option value={9}>Timmons Park</option>
                        </select>
                    </div>
                    {/* <div>
                        <label htmlFor='select-group'>* Select Group</label>
                        <select id='select-group' onChange={() => (e.target.value)}>
                            <option value={group}></option>
                        </select>
                    </div> */}
                    <button className='edit-event-form-btn button'>Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default EditEvent;
