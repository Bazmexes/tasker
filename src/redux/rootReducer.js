import {combineReducers} from 'redux'
import tasksReducer from './reducers/tasksReducers'
import daysReducer from './reducers/daysReducer'


export default combineReducers({tasksReducer,daysReducer})