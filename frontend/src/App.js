import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormModal";
// import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllEvents from "./components/Events/AllEvents";
import { getRSVPs } from './store/rsvps'
import { getEvents } from "./store/events";
import CreateEvent from "./components/Events/CreateEvent";
import Splash from "./components/Splash"
import SingleEventDetails from "./components/Events/EventDetails";
import MyRSVPs from "./components/RSVPs/MyRSVPs";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
// import EditEvent from './components/Events/EditEventModal/EditEvent'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const eventsObj = useSelector((state) => state.events)
  const userId = useSelector((state) => state.session.user?.id)
  // console.log(userId)
  const events = Object.values(eventsObj)
  // console.log(events)
  useEffect(() => {
    // (async () => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getEvents())
    dispatch(getRSVPs())
    // })();
  }, [dispatch]);

  const rsvpsObj = useSelector((state) => state.rsvps)
  const rsvps = Object.values(rsvpsObj)
  // console.log(rsvps)

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <MyRSVPs userId={userId} rsvps={rsvps} />
          <Footer />
        </>
      )}
      {isLoaded && (
        <Switch>
          <Route exact path={'/'}>
            <Splash />
          </Route>
          <Route exact path={'/events'}>
            <AllEvents events={events} userId={userId} />
          </Route>
          <Route exact path="/events/new">
            <CreateEvent userId={userId} />
          </Route>
          <Route exact path='/events/:id'>
            <SingleEventDetails events={events} userId={userId} rsvps={rsvps} />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
