import React from 'react'
import Message from './Message'
import store from '../../store'
import {} from '../../actions'

const Chats = props => {
  const renderChat = () => {
    const { messages, user } = props
    if (messages.messages.length === 0) {
      return (
        <div>
          <h3>No messages yet with {user.name}, be nice and say hi !</h3>
        </div>
      )
    } else {
      return messages.messages.map((msg, i) => (
        <Message key={'msg' + i} message={msg} />
      ))
    }
  }

  return (
    <div className="messages" id="msgg">
      {renderChat()}
    </div>
  )
}

export default Chats
