import Http from '../utils/Http'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './types/auth'

export const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const receiveLogin = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export const loginError = payload => {
  return {
    type: LOGIN_FAILURE,
    payload
  }
}

export const authLogout = () => {
  return {
    type: 'AUTH_LOGOUT'
  }
}

export const login = (email, password) => async dispatch => {
  dispatch(requestLogin())
  try {
    const res = await Http.post('auth/login', {
      email,
      password
    })
    console.log(res)

    const token = res.data.accessToken
    localStorage.setItem('token', token)

    dispatch(receiveLogin(res.data.user))
  } catch (error) {
    console.log(error)
    dispatch(loginError(error.response.data.message))
  }
}

export const authCheck = () => async dispatch => {
  if (!!localStorage.getItem('token')) {
    const user = await Http.get('users/current')
    dispatch(receiveLogin(user.data))
  } else {
    dispatch(authLogout())
  }
}

export const register = credentials => async dispatch => {
  const response = await Http.post('auth/register', credentials)
  localStorage.setItem('token', response.data.accessToken)
  dispatch(receiveLogin(response.data.user))
}
