import Http from '../../utils/Http'

export const authApi = {
  login(credentials) {
    return Http.post('auth/login', credentials)
  },
  register(credentials) {
    return Http.post('auth/register', credentials)
  },
  me() {
    return Http.get('users/me')
  }
}
