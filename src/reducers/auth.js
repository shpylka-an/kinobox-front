import {
  AUTH_CHECK_FAILURE,
  AUTH_CHECK_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOAD_CURRENT_USER_SUCCESS,
  LOAD_CURRENT_USER_FAILURE,
} from '../actions/types/auth'

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  currentUser: null,
  errors: null,
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        currentUser: action.payload,
        errors: null,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        errors: action.payload,
        isFetching: false,
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggedIn: action.payload,
        currentUser: null,
      }
    case AUTH_CHECK_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      }
    case AUTH_CHECK_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
      }
    case LOAD_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      }
    case LOAD_CURRENT_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state
  }
}
