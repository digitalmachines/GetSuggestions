import React from 'react'; 
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'; 

import Header from './Header'; 
import Login from './Login'; 


function Router(){
return(
        <BrowserRouter>
            <Header />
            <Switch>
                {/* unauthenticated */}
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Login}/>
                {/* authenticated */}
                <PrivateRoute>
                    <Switch>
                        <Route path="/logout" component={Login}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/create-post" component={CreatePost}/>
                        <Route path="/logout" component={Login}/>
                    </Switch>
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    ); 
}; 

export default Router; 