const initialState = {
    name: '',
    username: '',
    email: '',
    savedPosts: [],
    isFetching: false,
    error: ''
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'FETCH_START':
            return{
                ...state,
                isFetching:true
            }
        case 'FETCH_SUCCESS':
            return{
                ...state,
                isFetching: false
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}