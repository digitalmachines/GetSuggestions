import React, { useContext } from 'react'; 
import { LogoutContext } from '../App'; 
import { useHistory } from 'react-router-dom'; 

function Logout(){
    const logout = useContext(LogoutContext); 
    const history = useHistory(); 


    logout(); 
    history.push('/'); 

    return(
        <h1>Logged Out</h1>
    ); 
}; 

export default Logout; 