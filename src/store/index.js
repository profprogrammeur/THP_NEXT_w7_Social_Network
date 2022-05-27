import {combineReducers, createStore} from 'redux'
import {messagesReducer} from './messagesReducer'


const store = createStore(
  combineReducers({
    messages: TodoReducer,
    filter: (state=0, action) => state });
  )



  export default store