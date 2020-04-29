import React, {useEffect, useState} from 'react'
import {fetchUser,fetchPosts} from '../store/actions'
import {connect} from 'react-redux'

const Dashboard = (props)=>{
    console.log(props,"dashboard props")
    const id = localStorage.getItem('id');

    useEffect(()=>{
        props.fetchUser(id)
        props.fetchPosts(id)
    },[])


    return(
        <h1>dashboard</h1>
    )
}

const mapStateToProps = state =>{
    console.log(state,"state in mapstatetoprops")
    return{
        user: {...state.userState.user},
        posts:[],
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{fetchPosts,fetchUser})(Dashboard)