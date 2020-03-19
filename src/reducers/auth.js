import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../actions/types/auth'

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  currentUser: null,
  errors: null
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        currentUser: action.payload,
        errors: null
      }
    case LOGIN_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        isFetching: false
      }
    }
    case 'AUTH_LOGOUT':
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}
