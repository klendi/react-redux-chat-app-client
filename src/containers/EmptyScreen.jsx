import React from 'react'
import store from '../store'

export default () => {
  const { name, lastName, pic, status, contacts } = store.getState().users.user
  return (
    <div className="empty">
      <h1 className="empty-name">Welcome back, {name + ' ' + lastName} </h1>
      <div className="relative">
        <img src={pic} alt={name} className="empty-img" />
        <div className={'status-emptyscreen ' + status} />
      </div>
      <br />
      <button className="empty-btn">Search Contacts</button>
      <p className="empty-info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  )
}
