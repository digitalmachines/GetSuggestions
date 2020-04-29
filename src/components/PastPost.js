import React from 'react'

const PastPost = (props)=>{

    const deleteHandler = e => {
        console.log('delete event')
    }

    return(
        
          <li className = 'past-post'>
            <div>
              <span className="delete" onClick={deleteHandler}>
                  x
              </span>
              <span className = 'post-content'>
                <h5>{props.title}</h5>
                <p>{props.text}</p>
              </span>
            </div>
          </li>
    )
}

export default PastPost