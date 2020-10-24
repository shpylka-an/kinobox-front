import Http from '../../utils/Http'

export function login(credentials) {
  return Http.post('auth/login', credentials)
}

export function register(credentials) {
  return Http.post('auth/register', credentials)
}

export function me() {
  return Http.get('me')
}
