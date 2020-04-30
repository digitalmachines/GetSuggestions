import {combineReducers} from 'redux'
import { userReducer } from './userReducer'
import {postsReducer} from './postsReducer'
import {suggestionReducer} from './suggestionReducer'

export const rootReducer = combineReducers({
    userState: userReducer,
    postsState: postsReducer,
    suggestionState: suggestionReducer
})