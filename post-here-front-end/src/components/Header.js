import React, { useState } from 'react'; 


function Header(props){
    return(
        <header className="top">
            <nav>
                <h1 className="title">
                    <Link to="/">PostHere for Reddit</Link>
                </h1>
            </nav>
        </header>
    ); 
}; 