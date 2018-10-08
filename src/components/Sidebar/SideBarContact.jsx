import React from 'react'

const SideBarContact = props => {
  const { pic, name, lastName, status } = props.contact

  return (
    <div className="user">
      <div className="relative">
        <img src={pic} alt={name} className="user-pic" />
        <div className={'status-circle ' + status} />
      </div>
      <div className="user-details">
        <p className="user-details-name">{name + ' ' + lastName}</p>
        <p className="user-details-status">{status}</p>
      </div>
    </div>
  )
}

export default SideBarContact
