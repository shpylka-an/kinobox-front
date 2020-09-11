import {
  AUTH_CHECK_FAILURE,
  AUTH_CHECK_SUCCESS,
  LOAD_CURRENT_USER_FAILURE,
  LOAD_CURRENT_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../actions/types/auth'

const initialState = {
  isLoggedIn: false,
  isLoginFetching: false,
  isRegisterFetching: false,
  currentUser: null,
  loginErrors: null,
  registerErrors: null,
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoginFetching: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoginFetching: false,
        currentUser: action.payload,
        loginErrors: null,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loginErrors: action.payload,
        isLoginFetching: false,
      }
    case REGISTER_REQUEST:
      return {
        ...state,
        isRegisterFetching: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isRegisterFetching: false,
        currentUser: action.payload,
        registerErrors: null,
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        registerErrors: action.payload,
        isRegisterFetching: false,
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
