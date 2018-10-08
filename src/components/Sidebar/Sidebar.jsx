import React, { Component } from 'react'
import _ from 'lodash'
import SideBarContact from './SideBarContact'
import { Link } from 'react-router-dom'
import LoggedinUser from '../../components/Sidebar/LoggedInUser'
import { getUserByID } from '../../data/contact-data'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  getUsersByIds = users => {
    let _users = []
    users.forEach(user => {
      _users.push(getUserByID(user.id))
    })

    return _users
  }

  render() {
    const { user } = this.props
    const users = this.getUsersByIds(user.contacts)
    return (
      <div>
        <LoggedinUser />
        <aside className="sidebar">
          {users.map(c => (
            <Link className="link" key={c.id} to={'/user/' + c.id}>
              <SideBarContact contact={c} />
            </Link>
          ))}
        </aside>
      </div>
    )
  }
}
