import Http from '../../utils/Http'

export const actorsApi = {
  fetchAll() {
    return Http.get('actors')
  }
}
