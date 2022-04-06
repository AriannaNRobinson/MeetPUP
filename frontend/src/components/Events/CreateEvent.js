import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const CreateEvent = () => {
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [capacity, setCapacity] = useState('')
    // const[hostUserId, setHostUserId] = useState('')
    const [location, setLocation] = useState('')
    // const [group, setGroup] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            eventName,
            description,
            date,
            capacity,
            location,
        }
        // console.log(newEvent)

        setEventName('');
        setDescription('');
        setDate('');
        setCapacity('')
        setLocation('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <div>
                        <h2>Create Event</h2>
                        <p>Fields with a * are optional.</p>
                    </div>
                    <div>
                        <label htmlFor='name'>Event Name:</label>
                        <input id='name' type='text' onChange={(e) => setEventName(e.target.value)} value={eventName} required />
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <textarea id='description' onChange={(e) => setDescription(e.target.value)} value={description} required />
                    </div>
                    <div>
                        <label htmlFor='date'>Date</label>
                        <input id='date' type='date' onChange={(e) => setDate(e.target.value)} value={date} required />
                    </div>
                    <div>
                        <label htmlFor='capacity'>* Max Capacity</label>
                        <input id='capacity' type='number' onChange={(e) => setCapacity(e.target.value)} value={capacity} />
                    </div>
                    <div>
                        <label htmlFor='select-location'>Location</label>
                        <select value={location} id='select-location' onChange={(e) => setLocation(e.target.value)} required>
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
                    <button className='button'>Create Event</button>
                </div>
            </form>
        </div>
    )
}

export default CreateEvent;
