import React from 'react'

const classes = isUser => {
  return isUser ? 'msg message-user' : 'msg message'
}

const Message = props => {
  return (
    <p className={classes(props.message.isThisUser)}>{props.message.content}</p>
  )
}

export default Message
