import React, {useState} from 'react'
import PastPost from './PastPost'

const PastPosts = (props)=>{
    

    return(
        <ul>
        {props.posts.map(item => (

          <PastPost deletePost = {props.handleDelete} deleteSaved = {props.deleteSaved} title = {item.post_title} text = {item.post_text} postId = {item.id} key={item.id}/>  

        ))}
      </ul>
    )
}

export default PastPosts
