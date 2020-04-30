const initialState = {
    posts: [],
    isFetching: false,
    error: ''
}

const remove = (items,index) => {
    return [...items.slice(0,index),
            ...items.slice(index+1,items.length)];
  };

export const postsReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'FETCH_POSTS_START':
            return{
                ...state,
                isFetching: true
            }
        case 'FETCH_POSTS_SUCCESS':
            return{
                ...state,
                posts: [...action.payload],
                isFetching: false
            }
        case 'FETCH_POSTS_ERROR':
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}


/* case 'DELETE_POST_START':
                return{
                    ...state,
                    isFetching: true
                }
        case 'DELETE_POST_SUCCESS':
                const removedIndex = state.posts.findIndex((post)=>post.id===action.payload)
                return{
                    ...state,
                    posts: remove(state.posts, removedIndex),
                    isFetching: false
                }
        case 'DELETE_POST_ERROR':
                console.log('delete failed')
                return{
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            */