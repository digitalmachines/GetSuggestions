import {combineReducers} from 'redux'
import { userReducer } from './userReducer'
import {postsReducer} from './postsReducer'

export const rootReducer = combineReducers({
    userState: userReducer,
    postsState: postsReducer
})