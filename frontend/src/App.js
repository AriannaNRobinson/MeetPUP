import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormModal";
// import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllEvents from "./components/Events/AllEvents";
// import { getEvents } from "./store/events";
import CreateEvent from "./components/Events/CreateEvent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const eventsObj = useSelector((state) => state.events)
  const userId = useSelector((state) => state.session.user?.id)
  // console.log(userId)
  const events = Object.values(eventsObj)
  // console.log(events)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // dispatch(getEvents())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path={'/events'}>
            <AllEvents events={events} />
          </Route>
          <Route path="/events/new">
            <CreateEvent userId={userId} />
          </Route>
          <Route path='/events/:id'>
            <p>jdskfsjfs
              sjdflskjfskl
              dsjfsklfjsfljs
              jdfslkjksjsl
              lksdfkjsklfjsf
              sdjkfjslfjdskljfsdk
              djfsjskdjfsdldj
            </p>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
