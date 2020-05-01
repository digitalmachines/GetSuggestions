const initialState = {
    suggestions: [],
    isFetching: false,
    error: ''
}

export const suggestionReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'FETCH_SUGGESTIONS_START':
            return{
                ...state,
                isFetching:true
            }
        case 'FETCH_SUGGESTIONS_SUCCESS':
            return{
                ...state,
                suggestions: [...action.payload],
                isFetching: false
            }
        case 'FETCH_SUGGESTIONS_ERROR':
            console.log('suggestion error from reducer')
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}