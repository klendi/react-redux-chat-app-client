import { contactsInitialState } from '../store/initialState'

export default (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return state
    default:
      return state
  }
}
