import React, { useContext } from 'react'; 
import { LogoutContext } from '../App'; 

function Logout(){
    const logout = useContext(LogoutContext); 

    logout(); 

    return(
        <h1>Logged Out</h1>
    ); 
}; 

export default Logout; 