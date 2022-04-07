import { NavLink } from 'react-router-dom';
import './Splash.css'

const Splash = () => {

    return (
        <>
            <div> ***IMG GOES HERE ****</div>
            <div className='form-container'>
                <h2 id='splash-title'>Welcome to Meet...PUP!</h2>
                <div className='inner-container'>
                    <p className='splash' id='about'> If you love dogs and want to
                        meet like-minded people in your area, you've come to the right
                        place! Have you ever driven to the dog park, just to find out that
                        no one is there? No humans to socialize with? No other pups for your
                        pup to play with? BORING!!! Meet PUP can help! Join events near you,
                        or host your own event today! </p>
                        <p className='splash'> View upcoming events such as scheduled hikes and dog park hangouts!</p>
                    <NavLink to={'/events'}>
                        <button className='button'>Events</button>
                    </NavLink>
                    <p className='splash'> Log in or create an account to create your own event and RSVP to existing events!</p>
                    <button className='button'>Log In</button>
                    <button className='button'>Sign Up</button>
                    <p className='splash'> Have fun and make new friends!</p>
                </div>
            </div>
        </>
    )
}

export default Splash;
