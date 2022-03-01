/* eslint-disable default-param-last */
import {
  MESSAGES_ERROR,
  MESSAGES_LOADING,
  GET_MESSAGES,
  POST_MESSAGE,
  SET_PAGE,
  REFRESH_MESSAGES,
} from './messages.types'

const INITIAL_STATE = {
  loading: false,
  pageIndex: 1,
  totalMessages: 0,
  totalPages: 0,
  messages: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REFRESH_MESSAGES:
      return {
        ...state,
      }
    case SET_PAGE:
      return {
        ...state,
        pageIndex: action.payload,
      }
    case POST_MESSAGE:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload],
        totalMessages: action.totalMessages,
        totalPages: action.totalPages,
      }
    case GET_MESSAGES:
      return {
        ...state,
        loading: false,
        totalPages: action.totalPages,
        totalMessages: action.totalMessages,
        messages: action.payload,
      }
    case MESSAGES_LOADING:
      return {
        ...state,
        loading: true,
      }
    case MESSAGES_ERROR:
      return {
        ...state,
        loading: false,
        messages: [],
      }
    default:
      return state
  }
}
export default reducer
