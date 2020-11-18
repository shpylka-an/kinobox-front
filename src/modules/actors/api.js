import Http from '../../utils/Http'

function fetchAllActors() {
  return Http.get('actors')
}

export default {
  fetchAllActors
}
