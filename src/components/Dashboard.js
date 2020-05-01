import React, {useEffect,useState } from 'react'
import {fetchUser,fetchPosts,fetchSuggestions} from '../store/actions'
import {connect} from 'react-redux'
import NewPostForm from './NewPostForm'
import PastPosts from './PastPosts'
import SubReddits from './SubReddits'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'
import '../styles/Dashboard.scss'


const Dashboard = (props)=>{
    //console.log(props,"dashboard props")


   useEffect(()=>{
        props.fetchUser(props.user.id)
        props.fetchPosts(props.user.id)
        
    },[])

    const [savedPosts, setSavedPosts] = useState(props.posts)
    const [subreddits,setSubReddits] = useState([])
    const [postFormValues, setPostFormValues] = useState({
        post_title: '',
        post_text: ''
    })

     //for local state
   const saveNew =()=>{
    setSavedPosts([...savedPosts,postFormValues])
    }

    //for local state
    const deleteSaved = (postId)=>{
        if(savedPosts.length>0){
        setSavedPosts(savedPosts.filter(item=> item.id !== postId))
        }    
    }
   

    const handleChange = e=>{
        e.preventDefault();
        setPostFormValues({
            ...postFormValues,
            [e.target.name]: e.target.value
        })
    }

    //for backend
    const handlePostSubmit =()=>{
        console.log(localStorage.getItem('token'))
        axiosWithAuth()
        .post(`https://post-here-subreddit.herokuapp.com/api/users/${props.user.id}/posts/`,postFormValues)
        .then(res=>{
            console.log(res,"post success")
            props.fetchPosts(props.user.id)
            setPostFormValues({
                post_title: '',
                post_text: ''
            })
        })
        .catch(err=>{
            console.log(err,"post error")
        })
    }

        
    const handleDelete = async(postId)=>{
                await axiosWithAuth()
                .delete(`https://post-here-subreddit.herokuapp.com/api/users/${props.user.id}/posts/${postId}`)
                .then(res=>{
                    console.log(res,"deleteRequest")
                    props.fetchPosts(props.user.id)
                })
                .catch(err=>{
                    console.log(err)
                })
                 
    }

    /*const handleSuggestion = async()=>{
       
        const newPost = JSON.stringify({
            "title": `${postFormValues.post_title}`,
            "text": `${postFormValues.post_text}`
        })
        await props.fetchSuggestions(newPost)
        await setSubReddits(props.suggestions)
        console.log(subreddits)
    }*/
    const handleSuggestion = ()=>{
        const newPost = JSON.stringify({
            "title": `${postFormValues.post_title}`,
            "text": `${postFormValues.post_text}`
        })
        axios 
        .post('https://sheltered-scrubland-21243.herokuapp.com/predict.json', newPost) 
        .then(res=>{
            console.log(res,"sugg response")
            setSubReddits(res.data)
        })
        .catch(err=>{
            console.log(err,"sugg error")
        })
    }


    
    

    return(
        <div className='dashboard'>
            <div className='dashboard-flex-container'>
                <h3>Welcome {props.user.username}</h3>
                <h4>fill this out to make a new post</h4>
                <NewPostForm
                    handleChange = {handleChange}
                    saveNew = {saveNew}
                    handlePostSubmit = {handlePostSubmit}
                    handleSuggestion={handleSuggestion}
                    formValues = {postFormValues}
                />
                
                {subreddits.length > 0 &&
                <SubReddits
                    data = {subreddits}
                />}
            <h4>Past Posts</h4>
            {props.posts.length > 0 &&
                <PastPosts
                    deleteSaved = {deleteSaved} 
                    handleDelete = {handleDelete} 
                    posts = {props.posts}
                />
            }
        </div>
        </div>

    )
}

const mapStateToProps = state =>{
    
    return{
        user: {...state.userState.user},
        posts:[...state.postsState.posts],
        suggestions:{...state.suggestionState.suggestions},
        isFetchingSuggestion: state.suggestionState.isFetching,
        isFetchingUser: state.userState.isFetching,
        isFetchingPosts: state.postsState.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{fetchPosts,fetchUser,fetchSuggestions})(Dashboard)