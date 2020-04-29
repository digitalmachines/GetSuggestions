const initialState = {
    posts: [],
    isFetching: false,
    error: ''
}

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