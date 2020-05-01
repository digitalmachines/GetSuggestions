import React from 'react'



const SubReddit = (props)=>{
 
    console.log(props,"props in subreddit")

    return(
        
            <div>
                <h1>r/{props.data[0].subreddit}: {props.data[0].probability}</h1>
            </div>
          
    )
}


export default SubReddit

