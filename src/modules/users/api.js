import Http from '../../utils/Http'

export const usersApi = {
  fetchAll(params) {
    return Http.get('users', { params })
  },
}
