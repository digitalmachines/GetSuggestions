import React from 'react'
import PastPost from './PastPost'

const PastPosts = (props)=>{

    return(
        <ul>
        {props.posts.map(item => (
          <PastPost title = {item.post_title} text = {item.post_text}/>  
        ))}
      </ul>
    )
}

export default PastPosts