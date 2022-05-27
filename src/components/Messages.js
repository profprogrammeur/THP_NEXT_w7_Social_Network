import {connect} from 'react-redux'
import { messagesReducer } from '../store/messagesReducer'


function MessageItem ({message}) {
  return <li>
    <p>
      <h3>{message.content}</h3> auteur : {message.author}
    </p>
    <br></br>
  </li>
}

export function Messages ({messages}) {
  
  return <ul>
    {/* {JSON.stringify(messages)} */}
    {messages.map(message => <MessageItem message={message}
      key={message.id}
    />)}
  </ul>
}

export const MessageListStore = connect(
  (state) => ({
    messages: state.messages
  })
)(Messages)