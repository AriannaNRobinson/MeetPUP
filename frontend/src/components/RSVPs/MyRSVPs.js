import { NavLink } from 'react-router-dom'
import './MyRSVPs.css'

const MyRSVPs = ({events, userId, rsvps}) => {
    // console.log(rsvps)
    const myRSVPs = rsvps.filter((rsvp) => {
        // console.log(rsvp.userId, '---rsvp userID')
        // console.log(userId, 'users id')
        return (rsvp.userId === userId)
    })

    return (
        <div className='myRSVPs-container'>
            <h2>My RSVPs!</h2>
            {myRSVPs.map(myRSVP => (
                <NavLink to={`/events/${myRSVP.Event.id}`} key={myRSVP.id}>{myRSVP.Event.name}</NavLink>
            ))}
        </div>
    )
}

export default MyRSVPs;
