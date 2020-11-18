import Http from '../../utils/Http'

export function getDirectors() {
  return Http.get('directors')
}
