import '../Styles/App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav.';
import Login from './Login';
import Register from './Register';
import Account from './Account';
import Welcome from './Welcome';
import Routines from './Routines';
import MyRoutines from './MyRoutines';
import AllActivities from './AllActivities';
import CreateActivity from './CreateActivity';
import TrackExercise from './TrackExercise';
import AllRoutines from './AllRoutines';
import CreateRoutine from './CreateRoutine';

function App() {
  const tokenFromStorage = localStorage.getItem("jwt");
  const [token, setToken] = useState(tokenFromStorage);
  const [user, setUser] = useState('');
  const [myRout, setMyRout] = useState([]);
  const [allActs, setAllActs] = useState([]);


  return (
    <div className='App'>
      <div className="body">
        <Router>
          <Nav token={token} />
          <Switch>
            <Route exact path='/'>
              <Home token={token} />
            </Route>
            <Route exact path='/activities/create'>
              <CreateActivity token={token} />
            </Route>
            <Route exact path='/routines/create'>
              <CreateRoutine token={token} />
            </Route>
            <Route exact path='/exercise'>
              <TrackExercise />
            </Route>
            <Route exact path='/login'>
              {!token ? <Login setToken={setToken} token={token} /> : <Welcome user={user} />}
            </Route>
            <Route exact path='/register'>
              {!token ? <Register /> : <Welcome user={user} />}
            </Route>
            <Route exact path='/account'>
              {token ? <Account token={token} setToken={setToken} setUser={setUser} user={user} /> : <Login setToken={setToken} token={token} />}
            </Route>
            <Route exact path='/routines'>
              <Routines />
            </Route>
            <Route exact path='/allActivities'>
              <AllActivities setAllActs={setAllActs} allActs={allActs} />
            </Route>
            <Route exact path='/allRoutines'>
              <AllRoutines />
            </Route>

            <Route exact path='/account/routines'>
              <MyRoutines user={user} myRout={myRout} setMyRout={setMyRout} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;