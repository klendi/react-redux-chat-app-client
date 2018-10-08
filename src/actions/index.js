import {
  ADD_MESSAGE,
  SET_TYPING_VALUE,
  CREATE_CONVERSATION,
  SET_STATUS
} from './constants/actionTypes'

export const addMessage = data => ({
  type: ADD_MESSAGE,
  payload: data
})

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
})

export const createConversation = id => ({
  type: CREATE_CONVERSATION,
  payload: id
})

export const setStatus = status => ({
  type: SET_STATUS,
  payload: status
})
