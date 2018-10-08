import { ADD_MESSAGE, DELETE_MESSAGE } from '../actions/constants/actionTypes'
import { messagesInitialState } from '../store/initialState'

export default (state = messagesInitialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return state
    case DELETE_MESSAGE:
      return state
    default:
      return state
  }
}
