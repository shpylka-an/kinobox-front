import Http from '../utils/Http'

export const authLogin = payload => {
  return {
    type: 'AUTH_LOGIN',
    payload
  }
}

export const authLogout = () => {
  return {
    type: 'AUTH_LOGOUT'
  }
}

export const login = (email, password) => async dispatch => {
  const res = await Http.post('auth/login', {
    email,
    password
  })

  const token = res.data.accessToken

  localStorage.setItem('token', token)

  dispatch(authLogin(res.data.user))
}

export const authCheck = () => async dispatch => {
  if (!!localStorage.getItem('token')) {
    const user = await Http.get('users/current')
    dispatch(authLogin(user.data))
  } else {
    dispatch(authLogout())
  }
}

export const register = credentials => async dispatch => {
  const response = await Http.post('auth/register', credentials)
  localStorage.setItem('token', response.data.accessToken)
  dispatch(authLogin(response.data.user))
}
