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

export const savePost = (post,id) =>{
    return dispatch => {
        dispatch({type: 'SAVE_POST_START'})
        axiosWithAuth()
        .delete(`https://post-here-subreddit.herokuapp.com/api/users/${id}/posts/`)
        .then(res=>{
            console.log(res)
            dispatch({type: 'SAVE_POST_SUCCESS', payload: post})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type: 'SAVE_POST_ERROR', payload: err})
        })
    }    
}

/*export const deletePost = (postId,id) =>{
    
    return dispatch => {
        dispatch({type: 'DELETE_POST_START'})
        console.log("delete post")
        axiosWithAuth()
        .delete(`https://post-here-subreddit.herokuapp.com/api/users/${id}/posts/${postId}`)
        .then(res=>{
            console.log(res,"delete success")
            dispatch({type: 'DELETE_POST_SUCCESS', payload: postId})
        })
        .catch(err=>{
            console.log(err,"delete error")
            dispatch({type: 'DELETE_POST_ERROR', payload: err})
        })
    }    
}*/
