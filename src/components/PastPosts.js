import React from 'react'
import PastPost from './PastPost'

const PastPosts = (props)=>{

    return(
        <ul>
        {props.posts.map(item => (
          <PastPost deletePost = {props.handleDelete} userId ={props.userId} title = {item.post_title} text = {item.post_text} postId = {item.id} key={item.id}/>  
        ))}
      </ul>
    )
}

export default PastPosts