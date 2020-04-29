import React, {useState} from 'react';
import LoginForm from './components/Login'
import Register from './components/Register'
import './App.css';
import PrivateRoute from './utils/PrivateRoute'
import Dashboard from './components/Dashboard'
//import {BrowserRouter as Router, Route} from 'react-router-dom'

import Router from './components/Router'; 

function App() {

  return (
        <Router />
    /* <div className="Landing Page">
      <Route exact path ='/' component = {LoginForm}/>
      <Route exact path ='/register' component={Register}/>
      <PrivateRoute exact path='/protected/:id' component={Dashboard}/>
    </div> */
  );
}

export default App;
