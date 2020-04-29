import React, {useEffect, useState} from 'react'
import {fetchUser,fetchPosts} from '../store/actions'
import {connect} from 'react-redux'
import NewPostForm from './NewPostForm'
import PastPosts from './PastPosts'

const Dashboard = (props)=>{
    console.log(props,"dashboard props")
    const id = localStorage.getItem('id');

    useEffect(()=>{
        props.fetchUser(id)
        props.fetchPosts(id)
    },[])


    return(
        <>
        <h3>Welcome {props.user.username}</h3>
        <h4>fill this out to make a new post</h4>
        <NewPostForm/>
        <h4>Past Posts</h4>
        {props.posts.length > 0 &&
            <PastPosts posts = {props.posts}/>
        }
        
        </>

    )
}

const mapStateToProps = state =>{
    console.log(state,"state in mapstatetoprops")
    return{
        user: {...state.userState.user},
        posts:[...state.postsState.posts],
        isFetchingUser: state.userState.isFetching,
        isFetchingPosts: state.postsState.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{fetchPosts,fetchUser})(Dashboard)