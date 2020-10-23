import Http from '../utils/Http'

export function fetchAllMovies() {
  return Http.get('movies')
}

export function createNewMovie(data) {
  return Http.post('movies', data)
}
