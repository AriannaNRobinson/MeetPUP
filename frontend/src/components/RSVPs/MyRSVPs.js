import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getRSVPs } from '../../store/rsvps'
import './MyRSVPs.css'

const MyRSVPs = ({  userId  }) => {
    const [toggle, setToggle] = useState(false)
    // const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(getRSVPs())
    }, [dispatch])
    
    const rsvpsObj = useSelector((state) => state.rsvps)
    const rsvps = Object.values(rsvpsObj)
    const myRSVPs = rsvps.filter((rsvp) => {
        return (rsvp?.userId === userId)
    })


    return (
        <div>
            <div id={toggle ? 'open' : 'closed'} className='myRSVPs-container'>
                <div>
                    <i id='dog' className='fa-solid fa-dog' onClick={() => setToggle(!toggle)}></i>
                </div>
                {toggle ? (
                    <div className='myRSVPs'>
                        <h2>My RSVPs!</h2>
                        {myRSVPs.map(myRSVP => (
                            <NavLink to={`/events/${myRSVP.Event?.id}`} key={myRSVP?.id} className='myRSVP-event'>{myRSVP.Event?.name}</NavLink>
                        ))}
                        <p>hello</p>
                        <p>hello</p>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default MyRSVPs;
