import {
  AUTH_CHECK_FAILURE,
  AUTH_CHECK_REQUEST,
  AUTH_CHECK_SUCCESS,
  LOAD_CURRENT_USER_FAILURE,
  LOAD_CURRENT_USER_REQUEST,
  LOAD_CURRENT_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from './types/auth'

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
})

export const loginSuccess = (currentUser) => ({
  type: LOGIN_SUCCESS,
  payload: currentUser,
})

export const loginFailure = (errors) => ({
  type: LOGIN_FAILURE,
  payload: errors,
})

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
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
  type: LOAD_CURRENT_USER_REQUEST,
})

export const loadCurrentUserSuccess = (currentUser) => ({
  type: LOAD_CURRENT_USER_SUCCESS,
  payload: currentUser,
})

export const loadCurrentUserFailure = () => ({
  type: LOAD_CURRENT_USER_FAILURE,
})

export const registerRequest = (credentials) => ({
  type: REGISTER_REQUEST,
  payload: credentials,
})

export const registerSuccess = (currentUser) => ({
  type: REGISTER_SUCCESS,
  payload: currentUser,
})

export const registerFailure = (errors) => ({
  type: REGISTER_FAILURE,
  payload: errors,
})
