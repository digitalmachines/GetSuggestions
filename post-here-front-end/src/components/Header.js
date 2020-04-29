import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 

function Header(props){
    return(
        <header className="top">
            <nav>
                <h1 className="title">
                    <Link to="/">PostHere for Reddit</Link>
                </h1>
                <div>
                    { user ? (
                        <Link to="/logout">Logout</Link>
                    ) : (
                        <> 
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    ); 
}; 

export default Header; 