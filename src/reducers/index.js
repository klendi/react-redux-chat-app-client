import { combineReducers } from 'redux'
import contacts from './contacts'
import users from './users'
import messages from './messages'

export default combineReducers({
  messages,
  users,
  contacts
})
