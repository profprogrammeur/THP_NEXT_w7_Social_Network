import {combineReducers, createStore} from 'redux'
import {messagesReducer} from './messagesReducer'


export default createStore(
  combineReducers({
    messages: messagesReducer,
    filter: (state=0, action) => state 
  })
  )



 