import Http from '../utils/Http'
import {
  AUTH_CHECK_FAILURE,
  AUTH_CHECK_REQUEST,
  AUTH_CHECK_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOAD_CURRENT_USER_REQUEST,
  LOAD_CURRENT_USER_SUCCESS,
  LOAD_CURRENT_USER_FAILURE
} from './types/auth'

export const loginRequest = credentials => ({
  type: LOGIN_REQUEST,
  payload:  credentials
})

export const loginSuccess = currentUser => ({
  type: LOGIN_SUCCESS,
  payload: currentUser
})

export const loginFailure = payload => ({
  type: LOGIN_FAILURE,
  payload
})

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST
})

export const authCheckRequest = () => ({
  type: AUTH_CHECK_REQUEST,
})

export const authCheckSuccess = () => ({
  type: AUTH_CHECK_SUCCESS,
})

export const authCheckFailure = () => ({
  type: AUTH_CHECK_FAILURE,
})

export const loadCurrentUserRequest = () => ({
  type: LOAD_CURRENT_USER_REQUEST
})

export const loadCurrentUserSuccess = currentUser => ({
  type: LOAD_CURRENT_USER_SUCCESS,
  payload: currentUser
})

export const loadCurrentUserFailure = () => ({
  type: LOAD_CURRENT_USER_FAILURE
})

export const fetchCurrentUser = () => async dispatch => {
  if (!!localStorage.getItem('token')) {
    dispatch(authCheckRequest(true))
    const user = await Http.get('me')
    dispatch(loginSuccess(user.data))
  } else {
    dispatch(logoutRequest())
  }
}

export const register = credentials => async dispatch => {
  const response = await Http.post('auth/register', credentials)
  localStorage.setItem('token', response.data.accessToken)
  dispatch(loginSuccess(response.data.user))
}
