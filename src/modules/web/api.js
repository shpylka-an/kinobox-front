import Http from '../../utils/Http'

export const webApi = {
  fetchSuggestedMovies() {
    return Http.get('movies/suggested')
  },
  fetchSelectedMovie(id) {
    return Http.get(`movies/${id}`)
  },
}
