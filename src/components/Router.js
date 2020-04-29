import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Header from './Header'; 
import Login from './Login'; 
import Logout from './Logout'; 
import Register from './Register'; 

import PrivateRoute from '../utils/PrivateRoute'; 
import Dashboard from './Dashboard'; 
import Profile from './Profile'; 

function Router(){
return(
        <BrowserRouter>
            <Header />
            <Switch>
                {/* unauthenticated */}
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route exact path="/" component={Login}/>
                {/* authenticated */}
                <PrivateRoute>
                    <Switch>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/profile" component={Profile}/>
                        {/* <Route path="/create-post" component={CreatePost}/> */}
                        <Route path="/logout" component={Login}/>
                    </Switch>
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    ); 
}; 

export default Router; 