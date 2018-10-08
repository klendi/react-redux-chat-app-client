import React from 'react'
import { Link } from 'react-router-dom'
import { getUserByID } from '../../data/contact-data'

const User = props => {
  const { name, lastName, status, pic, id } = getUserByID(props.match.params.id)
  if (props.match.params.id === '0') {
    props.history.push('/')
  }
  return (
    <div className="empty">
      <h1 className="empty-name">{name + ' ' + lastName} </h1>
      <div className="relative">
        <img src={pic} alt={name} className="empty-img" />
        <div className={'status-emptyscreen ' + status} />
      </div>
      <br />
      <p className="empty-status">
        <b>Status:</b> {status}
      </p>
      <Link to={'/messages/' + id} className="empty-btn link">
        Message {name}
      </Link>
    </div>
  )
}

export default User
