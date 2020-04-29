const initialState = {
    user: {},
    isFetching: false,
    error: ''
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'FETCH_USER_START':
            return{
                ...state,
                isFetching:true
            }
        case 'FETCH_USER_SUCCESS':
            return{
                ...state,
                user: {...action.payload},
                isFetching: false
            }
        case 'FETCH_USER_ERROR':
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}