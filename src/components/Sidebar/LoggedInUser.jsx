import React from 'react'
import store from '../../store'
import { Link } from 'react-router-dom'

const LoggedinUser = props => {
  const { pic, name, lastName, status } = store.getState().users.user
  return (
    <Link to="/" className="user link loggedin-user">
      <div className="relative">
        <img src={pic} alt={name} className="user-pic" />
        <div className={'status-circle ' + status} />
      </div>
      <div className="user-details">
        <p className="user-details-name">{name + ' ' + lastName}</p>
        <p className="user-details-status">{status}</p>
      </div>
    </Link>
  )
}

export default LoggedinUser
