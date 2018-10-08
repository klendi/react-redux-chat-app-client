import React from 'react'
import Chats from './Chats'
import store from '../../store'
import { getUserByID } from '../../data/contact-data'
import MessageInput from '../../containers/MessageInput'

const Messages = props => {
  const state = store.getState()
  const { myID } = state.users
  const { contacts } = state.users.user
  const { id } = props.match.params
  const usr = getUserByID(id)
  const { name, lastName, pic, status } = usr

  //gjejme nje contact ne contactet e mi qe ka id-ne e kontaktit njesoj me id qe po flasim ne
  const msgs = contacts.find(contact => contact.id.toString() === id)

  return (
    <div>
      <header className="header">
        <div className="d-flex">
          <img src={pic} alt="" className="header-image" />
          <h1 className="header-name">{name + ' ' + lastName}</h1>
          <div className={'messages-status ' + status} />
        </div>
      </header>
      <Chats user={usr} messages={msgs} />
      <MessageInput ourID={myID} hisID={id} />
      {/* <MessageInput ourID={myID} notUser hisID={id} /> */}
    </div>
  )
}

export default Messages
