import Http from '../../utils/Http'

export const directorsApi = {
  fetchAll() {
    return Http.get('directors')
  },
}
