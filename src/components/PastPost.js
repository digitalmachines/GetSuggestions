import React from 'react'
import {connect} from 'react-redux'


const PastPost = (props)=>{


    const deleteHandler = e => {
        e.preventDefault();
        console.log('delete event')
        
    }

    return(
        
          <li className = 'past-post'>
            <div>
              <button className="delete" onClick={deleteHandler}>
                  x
              </button>
              <span className = 'post-content'>
                <h5>{props.title}</h5>
                <p>{props.text}</p>
              </span>
            </div>
          </li>
    )
}


export default PastPost