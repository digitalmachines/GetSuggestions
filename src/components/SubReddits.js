import React, {useState} from 'react'
import SubReddit from './SubReddit'

const SubReddits = (props)=>{
    console.log(props.data)

    return(
        <>
        {props.data.map(item => (

          <SubReddit data = {item}/>  

        ))}
      </>
    )
}

export default SubReddits
