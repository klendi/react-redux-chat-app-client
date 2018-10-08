import { userInitialState } from '../store/initialState'
import {
  ADD_MESSAGE,
  CREATE_CONVERSATION,
  SET_STATUS
} from '../actions/constants/actionTypes'

export default function user(state = userInitialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      // console.log('sent')
      // console.log(state)
      state.user.contacts
        .find(user => user.id.toString() === action.payload.hisID)
        .messages.push({
          isThisUser: action.payload.senderIsOurUser,
          content: action.payload.text,
          sentOn: new Date()
        })

      return { ...state }

    case SET_STATUS:
      return state

    default:
      return state
  }
}
