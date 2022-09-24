import '../Styles/App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav.';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <div className='App'>
      <div className="body">
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;