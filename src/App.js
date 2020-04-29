import React, {useState, useContext} from 'react';
import LoginForm from './components/Login'
import Register from './components/Register'
import './App.css';
import PrivateRoute from './utils/PrivateRoute'
import Dashboard from './components/Dashboard'
//import {BrowserRouter as Router, Route} from 'react-router-dom'

import Router from './components/Router'; 

function App() {

  const [status, setStatus] = useState(null); 

  function login(user){
    setStatus(user); 
  }

  function logout(){
    setStatus(null); 
  }

  return (
        <AppContext.Provider value={status}>
          <LoginContext.Provider value={login}>
            <LogoutContext.Provider value={logout}>
              <Router />
            </LogoutContext.Provider>
          </LoginContext.Provider>
        </AppContext.Provider>
          /* <div className="Landing Page">
            <Route exact path ='/' component = {LoginForm}/>
            <Route exact path ='/register' component={Register}/>
            <PrivateRoute exact path='/protected/:id' component={Dashboard}/>
          </div> */
  );
}

export const AppContext = React.createContext(); 
export const LoginContext = React.createContext(); 
export const LogoutContext = React.createContext(); 

export default App;
