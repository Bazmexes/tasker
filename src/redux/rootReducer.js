import {combineReducers} from 'redux'
import tasksReducer from './reducers/tasksReducers'
import daysReducer from './reducers/daysReducer'
import clockReducer from './reducers/clockReducer'
import boardsReducer from './reducers/boardsReducer'
export default combineReducers({tasksReducer,daysReducer, clockReducer, boardsReducer})