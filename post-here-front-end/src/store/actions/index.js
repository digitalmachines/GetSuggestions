import {axiosWithAuth} from '../../utils/axiosWithAuth'



export const fetchUser = (id) =>{
    
    return dispatch =>{
        dispatch({type: 'FETCH_USER_START'})
        axiosWithAuth()
        .get(`https://post-here-subreddit.herokuapp.com/api/users/${id}`)
        .then(res=>{
            console.log(res, 'response from fetchUser')
            dispatch({type: 'FETCH_USER_SUCCESS', payload: res.data.response})
        })
        .catch(err=>{
            dispatch({type: 'FETCH_USER_ERROR', payload: err})
        })
    }

}

export const fetchPosts = (id) =>{
    return dispatch =>{
        dispatch({type: 'FETCH_POSTS_START'})
        axiosWithAuth()
        .get(`https://post-here-subreddit.herokuapp.com/api/users/${id}/posts`)
        .then(res=>{
            console.log(res, 'response from fetchPosts')
            dispatch({type: 'FETCH_POSTS_SUCCESS', payload: res.data.results})
        })
        .catch(err=>{
            dispatch({type: 'FETCH_POSTS_ERROR', payload: err})
        })
    }

}